// Historical preview records from docs/vision/receitas-pour-over-import.json. Missing values are intentional.
export const libraryData = {
  "coffees": [
    {
      "source_key": "vo-zico",
      "name": "Café do Vô Zico — Especial",
      "variety": "Catuaí Vermelho",
      "processing": "Natural",
      "origin": "Cabo Verde, MG",
      "packaging_descriptors": [
        "Chocolate 70%",
        "Caramelo"
      ]
    },
    {
      "source_key": "stardust",
      "name": "Stardust",
      "producer": "Fazenda Daterra Coffee",
      "origin": "Cerrado Mineiro",
      "processing": "Natural",
      "packaging_descriptors": [
        "Ameixa amarela",
        "Pêssego bem maduro",
        "Damasco",
        "Toque de frutas vermelhas",
        "Acidez láctica lembrando iogurte"
      ]
    }
  ],
  "bags": [
    {
      "source_key": "vo-zico-historical-bag-context",
      "coffee_key": "vo-zico",
      "roast_date": null,
      "manufacture_date": "2026-09-15",
      "best_before_date": "2027-09-15",
      "retailer": null
    },
    {
      "source_key": "stardust-historical-bag-context",
      "coffee_key": "stardust",
      "roast_date": null,
      "bag_weight_g": 250,
      "retailer": "Abigail Cafés Campinas"
    }
  ],
  "equipment": [
    {
      "source_key": "jx-pro",
      "type": "grinder",
      "name": "1Zpresso JX-Pro"
    },
    {
      "source_key": "v60",
      "type": "brewer",
      "name": "V60",
      "model": null
    }
  ],
  "executions": [
    {
      "source_key": "A01",
      "source_aliases": [],
      "coffee_key": "vo-zico",
      "recipe_key": "hedrick-two-pour",
      "date": null,
      "quantities": {
        "dose_g": null,
        "brewing_water_g": 338,
        "elapsed_seconds": 270,
        "bloom_seconds": 90,
        "temperature_c": null,
        "grinder_setting": "4.0.0",
        "finished_drink_g": null
      },
      "tasting_description": null,
      "quick_rating": "did_not_enjoy",
      "quick_rating_source": {
        "kind": "explicit_user_instruction",
        "date": "2026-11-18",
        "note": "Assigned during Coffee Lab UI review: all shown executions did not enjoy, except Hoffmann executions enjoyed. Not inferred from historical observations."
      }
    },
    {
      "source_key": "A02",
      "source_aliases": [],
      "coffee_key": "vo-zico",
      "recipe_key": "a02-three-pour",
      "date": null,
      "quantities": {
        "dose_g": 20,
        "brewing_water_g": 323.9,
        "elapsed_seconds": 214,
        "bloom_seconds": 45,
        "temperature_c": 91,
        "grinder_setting": "3.5.0",
        "finished_drink_g": null
      },
      "tasting_description": null,
      "quick_rating": "did_not_enjoy",
      "quick_rating_source": {
        "kind": "explicit_user_instruction",
        "date": "2026-11-18",
        "note": "Assigned during Coffee Lab UI review: all shown executions did not enjoy, except Hoffmann executions enjoyed. Not inferred from historical observations."
      }
    },
    {
      "source_key": "A04",
      "source_aliases": [],
      "coffee_key": "vo-zico",
      "recipe_key": "a04-five-pour",
      "date": "2026-11-16",
      "quantities": {
        "dose_g": 25,
        "brewing_water_g": 375.8,
        "elapsed_seconds": 283,
        "temperature_c": 91,
        "grinder_setting": "3.8.0",
        "finished_drink_g": null
      },
      "tasting_description": null,
      "quick_rating": "did_not_enjoy",
      "quick_rating_source": {
        "kind": "explicit_user_instruction",
        "date": "2026-11-18",
        "note": "Assigned during Coffee Lab UI review: all shown executions did not enjoy, except Hoffmann executions enjoyed. Not inferred from historical observations."
      }
    },
    {
      "source_key": "A06",
      "source_aliases": [],
      "coffee_key": "vo-zico",
      "recipe_key": "hoffmann-vo-zico",
      "date": null,
      "quantities": {
        "dose_g": 15,
        "brewing_water_g": 249.0,
        "elapsed_seconds": 203,
        "temperature_c": 96,
        "grinder_setting": "3.5.0",
        "finished_drink_g": null
      },
      "tasting_description": "A esquerda Stardust a direita Vó Zico. Ambos semnl amargor. Stardust um pouco mais aberto parecido com suco mas ambos muito agradáveis ",
      "tasting_description_scope": "shared comparison of Stardust on the left and Vo Zico on the right",
      "quick_rating": "enjoyed",
      "quick_rating_source": {
        "kind": "explicit_user_instruction",
        "date": "2026-11-18",
        "note": "Assigned during Coffee Lab UI review: all shown executions did not enjoy, except Hoffmann executions enjoyed. Not inferred from historical observations."
      }
    },
    {
      "source_key": "B01",
      "source_aliases": [
        "B02"
      ],
      "coffee_key": "stardust",
      "recipe_key": "hoffmann-stardust",
      "date": null,
      "quantities": {
        "dose_g": 15,
        "brewing_water_g": 252.3,
        "elapsed_seconds": 218,
        "temperature_c": 96,
        "grinder_setting": "3.5.0",
        "finished_drink_g": null
      },
      "tasting_description": "A esquerda Stardust a direita Vó Zico. Ambos semnl amargor. Stardust um pouco mais aberto parecido com suco mas ambos muito agradáveis ",
      "tasting_description_scope": "shared comparison of Stardust on the left and Vo Zico on the right",
      "quick_rating": "enjoyed",
      "quick_rating_source": {
        "kind": "explicit_user_instruction",
        "date": "2026-11-18",
        "note": "Assigned during Coffee Lab UI review: all shown executions did not enjoy, except Hoffmann executions enjoyed. Not inferred from historical observations."
      }
    }
  ]
};
