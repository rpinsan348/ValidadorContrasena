const validatePassword = require('./ValidadorContrasena');

test('Contraseña válida: "Abc123!@"', () => {
    expect(validatePassword("Abc123!@")).toBe(true);
});

test('Contraseña inválida: "abc123"', () => {
    expect(validatePassword("abc123")).toBe(false);
});

test('Contraseña inválida: "ABC123"', () => {
    expect(validatePassword("ABC123")).toBe(false);
});

test('Contraseña inválida: "Abcdefgh"', () => {
    expect(validatePassword("Abcdefgh")).toBe(false);
});

test('Contraseña inválida: "Abc12345"', () => {
    expect(validatePassword("Abc12345")).toBe(false);
});

test('Contraseña válida: "P@ssw0rd123"', () => {
    expect(validatePassword("P@ssw0rd123")).toBe(true);
});
