# Previsão do Tempo

API que coleta e processa informações meteorológicas sobre temperatura, clima, chuva, umidade, vento e previsão do tempo de qualquer cidade do Brasil. As informações são coletadas da API da Climatempo, que é uma empresa brasileira que oferece serviços de Meteorologia .

## Setup

Para executar o projeto, será necessário instalar as dependências digitando o seguinte comando no terminal:

```bash
npm install
```

Finalmente, digite o seguinte comando no terminal para iniciar o servidor:

```bash
npm start
```
Agora o sistema está pronto para ser utilizado através da rota local:

[http://localhost:3000/search/nome_da_cidade](http://localhost:3000/search/)

Basta enviar o nome da cidade para esta rota e os dados atuais sobre o tempo na cidade será retornado.

### Exemplo de entrada de dados:

`
São Paulo
`

O nome da cidade pode ser digitado com ou sem acentos, na forma maiúscula ou minúscula, junto ou separado. Mas o nome precisa estar completo.

### Exemplo de saída de dados:

```javascript
{
  "cityWeather": {
    "city": "São Paulo",
    "state": "SP",
    "country": "BR  ",
    "data": {
      "temperature": 26,
      "wind_direction": "NW",
      "wind_velocity": 20,
      "humidity": 45,
      "condition": "Alguma nebulosidade",
      "pressure": 1022,
      "sensation": 26,
      "date": "2020-06-13 12:36:41"
    }
  }
}
```

### Features

A API coleta os seguintes dados de uma cidade específica:

**Dados de localização**

|   **Campo**   |    **Tipo**     |    **Descrição**     |
|:-------------:|:---------------:|:--------------------:|
|     name      |     String      |   Nome da cidade     |
|     state     |     String      |   Estado da cidade   |
|     country   |     String      |   País da cidade     |

**Dados do tempo**

|   **Campo**    |    **Tipo**     |            **Descrição**              |
|:--------------:|:---------------:|:-------------------------------------:|
| temperature    |      Number     |   Temperatura em graus celsius (°C)   |
| wind_direction |      String     |           Direção do vento            |
| wind_velocity  |      Number     |     Intensidade do vento em km/h      |
|   humidity	   |      Number     |      Umidade relativa do ar (%)       |
|   condition    |      String     |              Condição                 |
|   pressure     |      Number     |            Pressão (hPa)              |
|   sensation    |      String     |     Sensação em graus celsius (°C)    |
|     date       |      Date       |                Data                   |

### Licença

Não se aplica.
