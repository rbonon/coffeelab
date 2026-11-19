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
      ],
      "brand_or_roaster_label": "Café do Vô",
      "species": "Arabica",
      "arabica_percentage": 100,
      "roast_level_label": "Clara",
      "single_origin": true,
      "soil": "Vulcânico",
      "producer": "Gean (cafeicultor responsável pela safra, conforme rótulo)",
      "packaging_profile": {
        "sweetness": "Elevada",
        "acidity": "Cítrica média-baixa",
        "body": "Intenso",
        "finish": "Prolongada"
      },
      "packaging_score": {
        "value": 82,
        "method": "SCA Cupping",
        "source_file": "docs/assets/photos/vo-zico/vo-zico-01.jpg"
      },
      "photos": [
        {
          "file": "docs/assets/photos/vo-zico/vo-zico-04.jpg",
          "caption": "Grãos do Vô Zico",
          "alt": "Grãos do Café do Vô Zico em um recipiente de vidro.",
          "source": {
            "kind": "user_attachment",
            "filename": "Vô Zico 04.jpg",
            "received_on": "2026-11-18"
          }
        }
      ],
      "profile_source": {
        "kind": "user_packaging_photos",
        "received_on": "2026-11-18",
        "files": [
          "docs/assets/photos/vo-zico/vo-zico-01.jpg",
          "docs/assets/photos/vo-zico/vo-zico-02.jpg"
        ]
      },
      "review_notes": [
        "Roast level and profile are packaging declarations, not inferred from bean appearance.",
        "82 points is the packaging score, distinct from user enjoyment and optional sensory intensity ratings."
      ],
      "official_profile_url": "https://linktr.ee/cafe_do_vo_zico",
      "official_profile_url_source": {
        "kind": "user_provided_link",
        "received_on": "2026-11-18",
        "retrieval_status": "automated_retrieval_unavailable; linked content not verified"
      }
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
        "Acidez lática lembrando iogurte"
      ],
      "brand_or_roaster_label": "Abigail Coffee Co.",
      "altitude_m": 1100,
      "roast_level_label": null,
      "photos": [
        {
          "file": "docs/assets/photos/stardust/stardust-04.jpg",
          "caption": "Grãos do Stardust",
          "alt": "Grãos do Stardust em um recipiente de vidro.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 04.jpg",
            "received_on": "2026-11-18"
          }
        }
      ],
      "profile_source": {
        "kind": "user_attachments",
        "received_on": "2026-11-18",
        "label_photos": [
          "docs/assets/photos/stardust/stardust-01.jpg",
          "docs/assets/photos/stardust/stardust-02.jpg"
        ]
      },
      "review_notes": [
        "Brand/producer/descriptors transcribed from the supplied packaging. No individual numerical sensory score, variety or roast level is assigned from appearance."
      ],
      "official_product_url": "https://abigailcoffee.com.br/products/produto-1?variant=49737048588547",
      "official_product_url_source": {
        "kind": "user_provided_link",
        "received_on": "2026-11-18",
        "retrieval_status": "automated_access_blocked; content not verified"
      }
    }
  ],
  "bags": [
    {
      "source_key": "vo-zico-historical-bag-context",
      "coffee_key": "vo-zico",
      "roast_date": null,
      "manufacture_date": "2026-09-15",
      "best_before_date": "2027-09-15",
      "retailer": null,
      "name": "Café do Vô Zico — 500 g",
      "identity_status": "confirmed",
      "bag_weight_g": 500,
      "purchase_date": "2026-09-19",
      "price": null,
      "storage_notes": "Manter em local seco e fresco. Após aberto, manter a embalagem bem fechada, longe de odores fortes e consumir preferencialmente em 30 dias.",
      "photos": [
        {
          "file": "docs/assets/photos/vo-zico/vo-zico-01.jpg",
          "caption": "Embalagem — frente",
          "alt": "Frente do Café do Vô com indicação de 82 pontos, 100% arábica, torra clara e peso líquido de 500 g.",
          "source": {
            "kind": "user_attachment",
            "filename": "Vô Zico 01.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/vo-zico/vo-zico-02.jpg",
          "caption": "Rótulo — origem e perfil",
          "alt": "Rótulo Café do Vô Zico Especial: Cabo Verde–MG, Catuaí Vermelho, processo natural e descritores da embalagem.",
          "source": {
            "kind": "user_attachment",
            "filename": "Vô Zico 02.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/vo-zico/vo-zico-03.jpg",
          "caption": "Fabricação e validade",
          "alt": "Carimbo da embalagem: fabricação em 15/09/2026 e validade em 15/09/2027.",
          "source": {
            "kind": "user_attachment",
            "filename": "Vô Zico 03.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/vo-zico/vo-zico-05.jpg",
          "caption": "Distribuidor e conservação",
          "alt": "Detalhe do rótulo com informações do distribuidor, industrialização e orientação de conservação.",
          "source": {
            "kind": "user_attachment",
            "filename": "Vô Zico 05.jpg",
            "received_on": "2026-11-18"
          }
        }
      ],
      "packaging_source": {
        "kind": "user_attachments",
        "received_on": "2026-11-18",
        "date_photo": "docs/assets/photos/vo-zico/vo-zico-03.jpg"
      },
      "review_notes": [
        "The supplied packaging confirms net weight, manufacture and best-before dates. Manufacture is not a roast date.",
        "Purchase date confirmed by the user as 19/09/2026. Retailer, price and opening date remain unknown. Earlier historical reserve packaging/jar counts have not been reconstructed."
      ],
      "purchase_source": {
        "kind": "explicit_user_confirmation",
        "confirmed_on": "2026-11-18",
        "note": "User supplied 19/9; year interpreted as 2026 from current bag dates and conversation."
      }
    },
    {
      "source_key": "stardust-historical-bag-context",
      "coffee_key": "stardust",
      "roast_date": "2026-11-04",
      "bag_weight_g": 250,
      "retailer": "Abigail — loja de Campinas",
      "name": "Stardust — compra 17/11/2026",
      "identity_status": "confirmed",
      "purchase_date": "2026-11-17",
      "purchase_channel": "Loja física, diretamente na Abigail",
      "price": null,
      "shelf_life_months": 6,
      "best_before_date": null,
      "photos": [
        {
          "file": "docs/assets/photos/stardust/stardust-05.jpg",
          "caption": "Embalagem — frente",
          "alt": "Frente da embalagem colorida da Abigail Coffee Co.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 05.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-02.jpg",
          "caption": "Identificação — Stardust",
          "alt": "Faixa da embalagem com a marca Abigail Coffee Co. e o nome Stardust.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 02.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-01.jpg",
          "caption": "Rótulo — origem, processo e descritores",
          "alt": "Rótulo do Stardust com Daterra Coffee, Cerrado Mineiro, altitude 1.100 m, processo natural e conteúdo de 250 g.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 01.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-09.jpg",
          "caption": "Data de torra e validade",
          "alt": "Embalagem indicando data de torra 04/11/26 e validade de 6 meses.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 09.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-03.jpg",
          "caption": "Informações sobre a Daterra",
          "alt": "Texto da embalagem apresentando a Daterra Coffee e suas alegações de premiações e sustentabilidade.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 03.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-06.jpg",
          "caption": "Embalagem — verso",
          "alt": "Verso da embalagem com textos sobre a marca, cafés e material da embalagem.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 06.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-07.jpg",
          "caption": "Embalagem — distribuidor",
          "alt": "Detalhe do verso e das informações do distribuidor.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 07.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-08.jpg",
          "caption": "Embalagem — origem",
          "alt": "Lateral da embalagem com apresentação da Daterra Coffee.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 08.jpg",
            "received_on": "2026-11-18"
          }
        },
        {
          "file": "docs/assets/photos/stardust/stardust-10.jpg",
          "caption": "Embalagem — lateral",
          "alt": "Lateral da embalagem com o perfil @abigailcoffeeco.",
          "source": {
            "kind": "user_attachment",
            "filename": "Stardust 10.jpg",
            "received_on": "2026-11-18"
          }
        }
      ],
      "purchase_source": {
        "kind": "explicit_user_confirmation",
        "confirmed_on": "2026-11-18"
      },
      "roast_date_source": {
        "kind": "packaging_photo",
        "file": "docs/assets/photos/stardust/stardust-09.jpg",
        "label_text": "Data de Torra: 04/11/26; Validade: 6 meses"
      },
      "review_notes": [
        "Roast date recovered from the supplied packaging photo; supersedes the earlier missing roast date.",
        "Purchase date and direct physical-store purchase in Campinas confirmed by the user. Price not supplied; no best-before date derived from the six-month label."
      ]
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
