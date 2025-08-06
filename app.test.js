const request = require("supertest");
const app = require("./app");

describe("Decimal to Binary API", () => {
  it("deve retornar um número binário se o número informado for um decimal válido", async () => {
    const response = await request(app).get("/to-binary/10");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ decimal: 10, binary: "1010" });
  });

  it("deve retornar erro 400 caso for informado um número decimal inválido", async () => {
    const response = await request(app).get("/to-binary/invalid");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid decimal number" });
  });
});

describe("Decimal to Hex API", () => {
  it("deve retornar um número hexadecimal se o número informado for um decimal válido", async () => {
    const response = await request(app).get("/to-hex/100");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ decimal: 100, hex: "64" });
  });

  it("deve retornar erro 400 caso for informado um número decimal inválido", async () => {
    const response = await request(app).get("/to-hex/invalid");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid decimal number" });
  });
});

describe("Decimal to Octal API", () => {
  it("deve retornar um número octal se o número informado for um decimal válido", async () => {
    const response = await request(app).get("/to-octal/100");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ decimal: 100, octal: "144" });
  });

  it("deve retornar erro 400 caso for informado um número decimal inválido", async () => {
    const response = await request(app).get("/to-octal/invalid");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid decimal number" });
  });
});

describe("Binary to Decimal API", () => {
  it("deve retornar um número decimal se o número informado for um binário válido", async () => {
    const response = await request(app).get("/from-binary/100");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ binary: 4, decimal: "4" });
  });

  it("deve retornar erro 400 caso for informado um número binário inválido", async () => {
    const response = await request(app).get("/from-binary/invalid");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid binary number" });
  });
});