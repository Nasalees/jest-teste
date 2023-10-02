const product = require("./product");
// Importando o modulo para poder chamar a função
// received = recebido

describe("Product Suit Testes", () => {
  // Primeiro Senário 
  it("Should be sum correct", () => {
    // Arrange(Preparar o teste)
    const baseTaxMock = 19.9;
    const complementTax = 20;
    const resultEsperado = 39.9;

    // Act(Rodar o teste)
    const resultObtido = product.calcTaxs(baseTaxMock, complementTax);
    // Assert(Verificar as asserções)
    expect(resultObtido).toBe(resultEsperado);
    // o expect é sempre o resultadorRecebido que vai ser comparado com o resultadoEsperado que é o toBe
  });

  // Segundo senário.
  it("Should be minimum tax", () => {
    // Arrange(Preparar o teste)
    // Mocks - dados de teste de entradad
    const baseTaxMock = 19.9;
    const complementTax = -20;
    const resultEsperado = 0;

    // Act(Rodar o teste) const resultReceived = product.calcTaxs(baseTaxMock, complementTax);
    const resultadObtido = product.calcTaxs(baseTaxMock, complementTax);
    // Assert(Verificar as asserções);
    expect(resultadObtido).toBeGreaterThan(resultEsperado);
  });
});
