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
      "source_key": "A06",
      "coffee_key": "vo-zico",
      "recipe_key": "hoffmann-vo-zico",
      "date": "2026-11-18",
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
      },
      "name": "Hoffman V60 Better - Vô Zico",
      "photos": [
        {
          "file": "docs/assets/photos/hoffman-vo-zico-final.jpg",
          "caption": "Final da extração — Hoffman V60 Better - Vô Zico",
          "alt": "Leito de café no V60 após a extração, com a balança indicando 3:23 e 249,0 g.",
          "source": {
            "kind": "user_attachment",
            "filename": "Hoffman Vo Zico.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/hoffman-comparativo-stardust-vo-zico.jpg",
          "caption": "Comparativo — Stardust e Vô Zico",
          "alt": "Duas xícaras de café lado a lado, identificadas na imagem como Stardust e Vô Zico.",
          "execution_keys": [
            "A06",
            "B01"
          ],
          "source": {
            "kind": "user_attachment",
            "filename": "Hoffman Stardust Direita Vo Zico Esquerda.jpg",
            "received_on": "2026-11-18"
          }
        }
      ],
      "evaluation": {
        "conclusion": "Os dois cafés ficaram bastante bons para nosso paladar, agradáveis e sem amargor perceptível. A receita é uma referência promissora para repetir.",
        "discussion_recommendation": "No diálogo, a recomendação foi manter JX-Pro 3.5.0, água a 96 °C, bloom de 45 segundos e swirl suave, verificando a repetibilidade antes de novos ajustes.",
        "source": {
          "file": "docs/vision/hoffmann-comparacao-avaliacao.md",
          "kind": "user_supplied_chat_dialogue",
          "received_on": "2026-11-18",
          "note": "Summary of user observations and discussion; hypotheses remain explicitly unconfirmed. B02 is the earlier alias of B01."
        },
        "summary": "Resultado agradável para nosso paladar, sem amargor perceptível. Em comparação, menos aberto que o Stardust.",
        "observations": [
          "Todo o pó ficou molhado no bloom, mas houve menos bolhas e menor atividade que no Stardust. A impressão inicial de um bloom mais seco foi esclarecida: não havia pó seco.",
          "Leito visualmente mais granular que o Stardust. Drenagem de 3:23, 15 segundos mais rápida."
        ],
        "discussion_hypotheses": [
          "A menor atividade no bloom pode ser compatível com menor liberação de CO₂ e maior tempo desde a torra, mas também depende das características do café. Não comprova frescor nem inadequação do bloom."
        ]
      },
      "date_source": {
        "kind": "explicit_user_confirmation",
        "confirmed_on": "2026-11-18",
        "timezone": "America/Sao_Paulo"
      }
    },
    {
      "source_key": "B01",
      "coffee_key": "stardust",
      "recipe_key": "hoffmann-stardust",
      "date": "2026-11-18",
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
      },
      "name": "Hoffman V60 Better - Stardust",
      "photos": [
        {
          "file": "docs/assets/photos/hoffman-stardust-final.jpg",
          "caption": "Final da extração — Hoffman V60 Better - Stardust",
          "alt": "Leito do Stardust no filtro V60 após a extração; a balança indica 3:38 e 252,3 g.",
          "source": {
            "kind": "user_attachment",
            "filename": "Hoffman Stardust.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/hoffman-comparativo-stardust-vo-zico.jpg",
          "caption": "Comparativo — Stardust e Vô Zico",
          "alt": "Duas xícaras de café lado a lado, identificadas na imagem como Stardust e Vô Zico.",
          "execution_keys": [
            "A06",
            "B01"
          ],
          "source": {
            "kind": "user_attachment",
            "filename": "Hoffman Stardust Direita Vo Zico Esquerda.jpg",
            "received_on": "2026-11-18"
          }
        }
      ],
      "evaluation": {
        "conclusion": "Os dois cafés ficaram bastante bons para nosso paladar, agradáveis e sem amargor perceptível. A receita é uma referência promissora para repetir.",
        "discussion_recommendation": "No diálogo, a recomendação foi manter JX-Pro 3.5.0, água a 96 °C, bloom de 45 segundos e swirl suave, verificando a repetibilidade antes de novos ajustes.",
        "source": {
          "file": "docs/vision/hoffmann-comparacao-avaliacao.md",
          "kind": "user_supplied_chat_dialogue",
          "received_on": "2026-11-18",
          "note": "Summary of user observations and discussion; hypotheses remain explicitly unconfirmed. B02 is the earlier alias of B01."
        },
        "summary": "Resultado muito agradável para nosso paladar, sem amargor perceptível; mais aberto e suculento, lembrando suco. Não foram identificadas notas aromáticas específicas.",
        "observations": [
          "Em comparação com o Vô Zico, os grãos pareceram um pouco menores e a torra visualmente mais escura; o leito final pareceu menos poroso e mais compacto. São impressões visuais, não medições.",
          "O usuário considera o Stardust mais novo, por algumas semanas ou meses, sem data de torra confirmada.",
          "Maior atividade de bolhas no bloom em comparação com o Vô Zico. Drenagem de 3:38, 15 segundos mais lenta."
        ],
        "discussion_hypotheses": [
          "O ChatGPT discutiu a possibilidade de uma distribuição granulométrica diferente, talvez com mais finos, contribuindo para o leito compacto e a drenagem mais lenta. Isso não foi confirmado.",
          "A descrição “lembra suco” foi interpretada no diálogo como possível acidez frutada e leveza, sem uma avaliação sensorial específica confirmada."
        ]
      },
      "date_source": {
        "kind": "explicit_user_confirmation",
        "confirmed_on": "2026-11-18",
        "timezone": "America/Sao_Paulo"
      }
    }
  ]
};
