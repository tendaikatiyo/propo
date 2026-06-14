from analytics.daily_metrics import build_daily_market_snapshots
from analytics.ingest import export_current_json, ingest_all


def main() -> None:
    print("=== Historical ingest ===")
    ingest_all()

    print("\n=== Daily market snapshots ===")
    build_daily_market_snapshots()

    print("\n=== Export current JSON for legacy analytics ===")
    export_current_json()

    print("\nPipeline complete.")


if __name__ == "__main__":
    main()
