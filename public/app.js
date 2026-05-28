const summaryEl = document.getElementById("summary");
const suburbsTable = document.getElementById("suburbsTable");
const updatedAtEl = document.getElementById("updatedAt");

const formatCurrency = (value, currency = "USD") => {
  if (value == null || Number.isNaN(Number(value))) return "—";
  return new Intl.NumberFormat("en-ZW", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(Number(value));
};

const renderSummary = (suburbs) => {
  const totalListings = suburbs.reduce((sum, item) => sum + item.total_listings, 0);
  const averagePrice = suburbs.length
    ? Math.round(suburbs.reduce((sum, item) => sum + item.avg_price, 0) / suburbs.length)
    : 0;
  summaryEl.innerHTML = `
    <div class="col-md-4">
      <article class="card summary-card p-4 h-100">
        <h3>Total listings</h3>
        <p class="display-6 mb-0">${totalListings}</p>
      </article>
    </div>
    <div class="col-md-4">
      <article class="card summary-card p-4 h-100">
        <h3>Suburbs tracked</h3>
        <p class="display-6 mb-0">${suburbs.length}</p>
      </article>
    </div>
    <div class="col-md-4">
      <article class="card summary-card p-4 h-100">
        <h3>Average suburb price</h3>
        <p class="display-6 mb-0">${formatCurrency(averagePrice)}</p>
      </article>
    </div>
  `;
};

const renderTable = (suburbs) => {
  suburbsTable.innerHTML = suburbs
    .map(
      (item) => `
        <tr>
          <td>${item.suburb}</td>
          <td>${item.city}</td>
          <td>${item.total_listings}</td>
          <td>${formatCurrency(item.avg_price, item.currency)}</td>
          <td>${formatCurrency(item.min_price, item.currency)}</td>
          <td>${formatCurrency(item.max_price, item.currency)}</td>
        </tr>
      `
    )
    .join("");
};

const loadAnalytics = async () => {
  try {
    const response = await fetch("../data/suburbs.json");
    if (!response.ok) {
      throw new Error("Unable to load analytics data.");
    }
    const suburbs = await response.json();
    renderSummary(suburbs);
    renderTable(suburbs.slice(0, 25));
    updatedAtEl.textContent = `Updated: ${new Date().toLocaleString()}`;
  } catch (error) {
    document.body.innerHTML = `<div class="container py-5"><div class="alert alert-danger">${error.message}</div></div>`;
  }
};

loadAnalytics();
