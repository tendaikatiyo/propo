const PAGE_MAP = {
  "city-intelligence": "cityIntelligencePage",
  "city-overview": "cityOverviewPage",
  "market-table": "marketTablePage",
  "investment-finder": "investmentFinderPage",
  "help": "helpPage",
};

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "") || "city-intelligence";
  return Object.keys(PAGE_MAP).includes(hash) ? hash : "city-intelligence";
}

const state = {
  markets: [],
  cities: [],
  rankings: null,
  selectedCity: "Harare",
  activePage: getPageFromHash(),
  charts: {
    yieldChart: null,
    rentChart: null,
    distributionChart: null,
    cityComparisonChart: null,
    cityYieldChart: null,
  },
  sort: {
    key: "yield_percent",
    direction: "desc",
  },
};

const selectors = {
  citySelect: document.getElementById("citySelect"),
  cityMetricsCards: document.getElementById("cityMetricsCards"),
  marketTableBody: document.querySelector("#marketTable tbody"),
  yieldMarkets: document.getElementById("yieldMarkets"),
  opportunityMarkets: document.getElementById("opportunityMarkets"),
  tableHeaders: document.querySelectorAll("#marketTable th[data-sort]"),
  pageLinks: document.querySelectorAll(".sidebar-nav .nav-link"),
  budgetInput: document.getElementById("budgetInput"),
  budgetValue: document.getElementById("budgetValue"),
  rentInput: document.getElementById("rentInput"),
  rentValue: document.getElementById("rentValue"),
  investmentResults: document.getElementById("investmentResults"),
  cityIntelligencePage: document.getElementById("cityIntelligencePage"),
  cityOverviewPage: document.getElementById("cityOverviewPage"),
  marketTablePage: document.getElementById("marketTablePage"),
  investmentFinderPage: document.getElementById("investmentFinderPage"),
  helpPage: document.getElementById("helpPage"),
};

function formatCurrency(value) {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-ZW", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatPercent(value) {
  if (value == null || Number.isNaN(value)) return "—";
  return `${value.toFixed(2)}%`;
}

function formatNumber(value) {
  if (value == null || Number.isNaN(value)) return "—";
  return new Intl.NumberFormat("en-ZW", { maximumFractionDigits: 0 }).format(value);
}

function sanitizeLabel(value) {
  if (value == null) return "";
  return String(value)
    .replace(/_/g, " ")
    .replace(/\b(harare|bulawayo)\b\s*/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function average(values) {
  const nums = values.filter((value) => value != null && !Number.isNaN(value));
  if (!nums.length) return null;
  return nums.reduce((sum, value) => sum + value, 0) / nums.length;
}

function setActivePage(page) {
  if (!Object.keys(PAGE_MAP).includes(page)) {
    page = "city-intelligence";
  }

  state.activePage = page;
  window.location.hash = page;

  selectors.pageLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.page === page);
  });

  Object.entries(PAGE_MAP).forEach(([pageKey, elementId]) => {
    const element = document.getElementById(elementId);
    if (!element) return;
    element.classList.toggle("d-none", pageKey !== page);
  });

  if (page === "city-overview") {
    renderCityOverviewCharts();
    renderOpportunityPanels();
  }
  if (page === "market-table") {
    renderMarketTable();
  }
  if (page === "investment-finder") {
    renderInvestmentResults();
  }
}

function initNavigation() {
  const offcanvasElement = document.getElementById("sidebarNav");
  const offcanvasInstance = offcanvasElement ? bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement) : null;

  selectors.pageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const page = link.dataset.page;
      if (!page) return;
      setActivePage(page);
      if (offcanvasInstance) offcanvasInstance.hide();
    });
  });
}

function initTooltips() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll("[data-bs-toggle='tooltip']"));
  tooltipTriggerList.forEach((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
}

function buildCityOptions() {
  const allowed = ["Harare", "Bulawayo"];
  const options = state.cities
    .filter((city) => allowed.includes(city.city))
    .map((city) => city.city);
  const unique = [...new Set(options)];
  selectors.citySelect.innerHTML = unique
    .map((cityName) => `<option value="${cityName}">${cityName}</option>`)
    .join("");

  if (!unique.includes(state.selectedCity)) {
    state.selectedCity = unique.includes("Harare") ? "Harare" : unique[0] || "All";
  }
  selectors.citySelect.value = state.selectedCity;
}

function renderCityMetrics() {
  const city = state.cities.find((item) => item.city === state.selectedCity);
  const cityMarkets = state.markets.filter((market) => market.city === state.selectedCity);
  const highestYieldMarket = [...cityMarkets]
    .filter((market) => market.yield_percent != null)
    .sort((a, b) => b.yield_percent - a.yield_percent)[0];

  selectors.cityMetricsCards.innerHTML = `
    <div class="col-md-4 col-lg-2">
      <div class="card shadow-sm p-3 h-100">
        <div class="text-secondary small">Highest Yield Market</div>
        <div class="fs-4 fw-semibold">${highestYieldMarket ? sanitizeLabel(highestYieldMarket.suburb) : "—"}</div>
        <div class="text-muted small">${highestYieldMarket ? formatPercent(highestYieldMarket.yield_percent) : ""}</div>
      </div>
    </div>
    <div class="col-md-4 col-lg-2">
      <div class="card shadow-sm p-3 h-100">
        <div class="text-secondary small">Total Sale Listings</div>
        <div class="fs-4 fw-semibold">${formatNumber(city?.sale_count ?? 0)}</div>
      </div>
    </div>
    <div class="col-md-4 col-lg-2">
      <div class="card shadow-sm p-3 h-100">
        <div class="text-secondary small">Total Rental Listings</div>
        <div class="fs-4 fw-semibold">${formatNumber(city?.rental_count ?? 0)}</div>
      </div>
    </div>
    <div class="col-md-4 col-lg-2">
      <div class="card shadow-sm p-3 h-100">
        <div class="text-secondary small">Median Rent</div>
        <div class="fs-4 fw-semibold">${formatCurrency(city?.median_rent)}</div>
      </div>
    </div>
    <div class="col-md-4 col-lg-2">
      <div class="card shadow-sm p-3 h-100">
        <div class="text-secondary small">Median Sale Price</div>
        <div class="fs-4 fw-semibold">${formatCurrency(city?.median_sale_price)}</div>
      </div>
    </div>
    <div class="col-md-4 col-lg-2">
      <div class="card shadow-sm p-3 h-100">
        <div class="text-secondary small">Average Yield</div>
        <div class="fs-4 fw-semibold">${formatPercent(city?.average_yield)}</div>
      </div>
    </div>
  `;
}

function renderCityOverviewCharts() {
  const labels = state.cities.map((city) => city.city);
  const yieldData = state.cities.map((city) => city.average_yield || 0);
  const rentData = state.cities.map((city) => city.median_rent || 0);
  const distributionData = state.cities.map((city) => (city.rental_count || 0) + (city.sale_count || 0));

  if (state.charts.yieldChart) state.charts.yieldChart.destroy();
  state.charts.yieldChart = new Chart(document.getElementById("yieldChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [{ label: "Yield %", data: yieldData, backgroundColor: "#0d6efd" }],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true, max: Math.max(...yieldData, 10) * 1.2 } },
    },
  });

  if (state.charts.rentChart) state.charts.rentChart.destroy();
  state.charts.rentChart = new Chart(document.getElementById("rentChart"), {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Median Rent",
          data: rentData,
          borderColor: "#198754",
          backgroundColor: "rgba(25, 135, 84, 0.1)",
          tension: 0.3,
          fill: true,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: { y: { beginAtZero: true } },
    },
  });

  if (state.charts.distributionChart) state.charts.distributionChart.destroy();
  state.charts.distributionChart = new Chart(document.getElementById("distributionChart"), {
    type: "pie",
    data: {
      labels,
      datasets: [
        {
          data: distributionData,
          backgroundColor: [
            "#0d6efd",
            "#6f42c1",
            "#198754",
            "#fd7e14",
            "#0dcaf0",
            "#d63384",
          ],
        },
      ],
    },
    options: { responsive: true, plugins: { legend: { position: "bottom" } } },
  });
}

function sortMarkets(markets) {
  const { key, direction } = state.sort;
  return [...markets].sort((a, b) => {
    const aValue = a[key] == null ? -Infinity : a[key];
    const bValue = b[key] == null ? -Infinity : b[key];
    if (typeof aValue === "string") {
      return direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    }
    return direction === "asc" ? aValue - bValue : bValue - aValue;
  });
}

function renderMarketTable() {
  const filtered = state.markets.filter((market) => {
    if (state.selectedCity === "All") return true;
    return market.city === state.selectedCity;
  });

  const sorted = sortMarkets(filtered);
  const topYields = [...state.markets]
    .filter((m) => m.yield_percent != null)
    .sort((a, b) => b.yield_percent - a.yield_percent)
    .slice(0, 10)
    .map((m) => m.market_id);

  selectors.marketTableBody.innerHTML = sorted
    .map((market) => {
      const highlight = topYields.includes(market.market_id) ? "top-yield" : "";
      return `
        <tr class="${highlight}">
          <td>${market.city}</td>
          <td>${sanitizeLabel(market.suburb)}</td>
          <td>${formatCurrency(market.median_rent)}</td>
          <td>${formatCurrency(market.median_sale_price)}</td>
          <td>${formatPercent(market.yield_percent)}</td>
          <td>${market.confidence_score ?? "—"}</td>
          <td>${market.opportunity_score ?? "—"}</td>
        </tr>
      `;
    })
    .join("");
}

function renderOpportunityPanels() {
  const topYield = state.rankings.national.top_yield_markets || [];
  const topOpportunity = state.rankings.national.top_opportunity_markets || [];

  selectors.yieldMarkets.innerHTML = topYield
    .map(
      (market) => `
        <div class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="fw-semibold">${sanitizeLabel(market.suburb)}, ${market.city}</div>
              <div class="text-muted small">Yield</div>
            </div>
            <div class="text-end">
              <div class="fw-bold">${formatPercent(market.yield_percent)}</div>
              <div class="text-muted small">${market.opportunity_score ?? "—"}</div>
            </div>
          </div>
        </div>
      `
    )
    .join("");

  selectors.opportunityMarkets.innerHTML = topOpportunity
    .map(
      (market) => `
        <div class="list-group-item">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <div class="fw-semibold">${sanitizeLabel(market.suburb)}, ${market.city}</div>
              <div class="text-muted small">Opportunity</div>
            </div>
            <div class="text-end">
              <div class="fw-bold">${market.opportunity_score ?? "—"}</div>
              <div class="text-muted small">${formatPercent(market.yield_percent)}</div>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

function getInvestmentMatches(budget, minRent) {
  const cityMarkets = state.markets.filter((market) => market.city === state.selectedCity);
  const exact = cityMarkets.filter((market) => {
    const price = Number(market.median_sale_price || 0);
    const rent = Number(market.median_rent || 0);
    return price <= budget && rent >= minRent;
  });

  if (exact.length) {
    return { results: exact, fallback: false };
  }

  const fallback = cityMarkets
    .map((market) => {
      const price = Number(market.median_sale_price || 0);
      const rent = Number(market.median_rent || 0);
      const priceGap = Math.max(0, price - budget);
      const rentGap = Math.max(0, minRent - rent);
      const score = (market.opportunity_score || 0) * 15 + (market.yield_percent || 0) * 5 - priceGap * 0.00015 - rentGap * 0.4;
      return { ...market, _matchScore: score };
    })
    .sort((a, b) => (b._matchScore || 0) - (a._matchScore || 0));

  return { results: fallback, fallback: true };
}

function renderInvestmentResults() {
  const budget = Number(selectors.budgetInput.value || 200000);
  const minRent = Number(selectors.rentInput.value || 1000);
  selectors.budgetValue.textContent = formatCurrency(budget);
  selectors.rentValue.textContent = formatCurrency(minRent);

  const { results, fallback } = getInvestmentMatches(budget, minRent);
  const topResults = results
    .sort((a, b) => {
      const scoreA = Number(a.opportunity_score || 0);
      const scoreB = Number(b.opportunity_score || 0);
      if (scoreA !== scoreB) return scoreB - scoreA;
      const yieldA = Number(a.yield_percent || 0);
      const yieldB = Number(b.yield_percent || 0);
      if (yieldA !== yieldB) return yieldB - yieldA;
      return Number(b.confidence_score || 0) - Number(a.confidence_score || 0);
    })
    .slice(0, 10);

  if (!topResults.length) {
    selectors.investmentResults.innerHTML = `
      <div class="col-12">
        <div class="alert alert-warning d-flex align-items-center" role="alert">
          <i class="bi bi-exclamation-triangle-fill me-2"></i>
          No markets match your criteria. Try increasing your budget or lowering expected rent.
        </div>
      </div>
    `;
    return;
  }

  const fallbackMessage = fallback
    ? `<div class="col-12"><div class="alert alert-info d-flex align-items-center" role="alert"><i class="bi bi-info-circle-fill me-2"></i>No exact matches found. Showing closest markets by yield and opportunity.</div></div>`
    : "";

  selectors.investmentResults.innerHTML = `${fallbackMessage}${topResults
    .map(
      (market) => `
        <div class="col-md-6 col-xl-4">
          <div class="card border-0 shadow-sm h-100">
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <div class="fw-semibold">${sanitizeLabel(market.suburb)}</div>
                  <div class="text-muted small"><i class="bi bi-geo-alt-fill me-1"></i>${market.city}</div>
                </div>
                <div class="text-end">
                  <span class="badge bg-success" data-bs-toggle="tooltip" title="Gross rental yield for this suburb"><i class="bi bi-graph-up me-1"></i>${formatPercent(market.yield_percent)}</span>
                </div>
              </div>
              <div class="mb-3">
                <span class="badge bg-warning text-dark me-1" data-bs-toggle="tooltip" title="Confidence score based on available rental and sale listings"><i class="bi bi-lightning me-1"></i>${market.confidence_score ?? "N/A"}</span>
                <span class="badge bg-dark" data-bs-toggle="tooltip" title="Combined opportunity score reflecting yield, volume and market balance"><i class="bi bi-star-fill me-1"></i>${market.opportunity_score ?? "N/A"}</span>
              </div>
              <div class="small text-muted">
                <span class="badge bg-primary mb-2">${market.market_id}</span><br />
                Price proxy: ${formatCurrency(market.median_sale_price)}<br />
                Median rent: ${formatCurrency(market.median_rent)}
              </div>
            </div>
          </div>
        </div>
      `
    )
    .join("")}`;
  initTooltips();
}

function initializeInvestmentFinder() {
  const initialBudget = 250000;
  const initialRent = 1200;
  selectors.budgetInput.value = initialBudget;
  selectors.rentInput.value = initialRent;
  renderInvestmentResults();

  selectors.budgetInput.addEventListener("input", renderInvestmentResults);
  selectors.rentInput.addEventListener("input", renderInvestmentResults);
}

function renderCityDetails() {
  const cityName = state.selectedCity;
  const city = state.cities.find((item) => item.city === cityName);

  if (!city) {
    if (state.charts.cityComparisonChart) state.charts.cityComparisonChart.destroy();
    if (state.charts.cityYieldChart) state.charts.cityYieldChart.destroy();
    return;
  }

  const cityMarkets = state.markets.filter((market) => market.city === cityName);
  const topSuburbs = [...cityMarkets]
    .filter((market) => market.median_rent != null && market.median_sale_price != null)
    .sort((a, b) => (b.rental_count + b.sale_count) - (a.rental_count + a.sale_count))
    .slice(0, 8);

  const suburbs = topSuburbs.map((market) => sanitizeLabel(market.suburb));
  const rentValues = topSuburbs.map((market) => market.median_rent || 0);
  const saleValues = topSuburbs.map((market) => market.median_sale_price || 0);
  const yieldValues = topSuburbs.map((market) => market.yield_percent || 0);

  if (state.charts.cityComparisonChart) state.charts.cityComparisonChart.destroy();
  state.charts.cityComparisonChart = new Chart(document.getElementById("cityComparisonChart"), {
    type: "bar",
    data: {
      labels: suburbs,
      datasets: [
        {
          label: "Median Rent",
          data: rentValues,
          backgroundColor: "#0d6efd",
          yAxisID: "y",
        },
        {
          label: "Median Sale",
          data: saleValues,
          backgroundColor: "#198754",
          yAxisID: "y1",
        },
      ],
    },
    options: {
      responsive: true,
      interaction: { mode: "index", intersect: false },
      plugins: { legend: { display: true } },
      scales: {
        y: {
          type: "linear",
          position: "left",
          title: { display: true, text: "Median Rent (USD)" },
          beginAtZero: true,
          suggestedMax: Math.max(...rentValues, 0) * 1.15 || 1000,
        },
        y1: {
          type: "linear",
          position: "right",
          title: { display: true, text: "Median Sale Price (USD)" },
          beginAtZero: true,
          suggestedMax: Math.max(...saleValues, 0) * 1.15 || 100000,
          grid: { drawOnChartArea: false },
        },
      },
    },
  });

  if (state.charts.cityYieldChart) state.charts.cityYieldChart.destroy();
  state.charts.cityYieldChart = new Chart(document.getElementById("cityYieldChart"), {
    type: "bar",
    data: {
      labels: suburbs,
      datasets: [
        {
          label: "Yield %",
          data: yieldValues,
          backgroundColor: "#fd7e14",
        },
      ],
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } },
    },
  });
}

function initSorting() {
  selectors.tableHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const sortKey = header.dataset.sort;
      if (state.sort.key === sortKey) {
        state.sort.direction = state.sort.direction === "asc" ? "desc" : "asc";
      } else {
        state.sort.key = sortKey;
        state.sort.direction = "desc";
      }
      renderMarketTable();
    });
  });
}

function getSupabaseClient() {
  if (!window.SUPABASE_URL || !window.SUPABASE_ANON_KEY) {
    throw new Error("Missing Supabase config. Copy frontend/config.example.js to frontend/config.js.");
  }
  if (!window.supabase?.createClient) {
    throw new Error("Supabase JS client failed to load.");
  }
  return window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY);
}

async function fetchData() {
  const client = getSupabaseClient();
  const [marketsRes, citiesRes, rankingsRes] = await Promise.all([
    client.from("market_metrics").select("*"),
    client.from("cities").select("*"),
    client.from("rankings").select("payload").eq("id", "current").single(),
  ]);

  const errors = [marketsRes.error, citiesRes.error, rankingsRes.error].filter(Boolean);
  if (errors.length) {
    throw new Error(errors.map((err) => err.message).join("; "));
  }

  return [marketsRes.data, citiesRes.data, rankingsRes.data.payload];
}

function initialize() {
  fetchData()
    .then(([markets, cities, rankings]) => {
      state.markets = markets;
      state.cities = cities;
      state.rankings = rankings;
      buildCityOptions();
      renderCityMetrics();
      setActivePage(state.activePage);
      initNavigation();
      initTooltips();
      renderCityOverviewCharts();
      renderMarketTable();
      renderOpportunityPanels();
      renderCityMetrics();
      renderCityDetails();
      initializeInvestmentFinder();
    })
    .catch((error) => {
      console.error("Unable to load analytics data", error);
      document.body.insertAdjacentHTML(
        "beforeend",
        `<div class="alert alert-danger m-4">Unable to load analytics data from Supabase. Check <strong>frontend/config.js</strong> (copy from <code>config.example.js</code>), confirm migrations are applied, and run <code>python -m analytics.sync_dashboard</code> after the pipeline. Details: ${error.message}</div>`
      );
    });

  selectors.citySelect.addEventListener("change", (event) => {
    state.selectedCity = event.target.value;
    renderMarketTable();
    renderCityMetrics();
    renderCityDetails();
    renderInvestmentResults();
  });

  window.addEventListener("hashchange", () => {
    setActivePage(getPageFromHash());
  });

  initSorting();
}

initialize();
