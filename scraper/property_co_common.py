from typing import Optional

CITY_ALIASES = {
    "harare": "Harare",
    "harare north": "Harare",
    "harare south": "Harare",
    "harare east": "Harare",
    "harare west": "Harare",
    "harare high density": "Harare",
    "harare cbd": "Harare",
    "bulawayo": "Bulawayo",
    "bulawayo north": "Bulawayo",
    "bulawayo south": "Bulawayo",
    "bulawayo east": "Bulawayo",
    "bulawayo high-density": "Bulawayo",
    "bulawayo high density": "Bulawayo",
    "gweru": "Gweru",
    "mutare": "Mutare",
    "masvingo": "Masvingo",
    "ruwa": "Ruwa",
    "chitungwiza": "Chitungwiza",
    "kadoma": "Kadoma",
    "kwekwe": "Kwekwe",
    "marondera": "Marondera",
    "chipinge": "Chipinge",
    "goromonzi": "Goromonzi",
    "norton": "Norton",
    "kariba": "Kariba",
    "nyanga": "Nyanga",
    "chinhoyi": "Chinhoyi",
    "zvishavane": "Zvishavane",
    "karoi": "Karoi",
    "chiredzi": "Chiredzi",
    "mvurwi": "Mvurwi",
    "damofalls": "Damofalls",
    "rusape": "Rusape",
}


def normalize_city(value: Optional[str]) -> str:
    text = str(value or "").strip()
    if not text:
        return ""

    key = text.lower()
    if key.startswith("harare"):
        return "Harare"
    if key.startswith("bulawayo"):
        return "Bulawayo"

    return CITY_ALIASES.get(key, text)
