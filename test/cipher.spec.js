describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33');
    assert.equal(cipher.encode("ABCDEFGHIJKLMNOPQRSTUVWXYZ",33),"HIJKLMNOPQRSTUVWXYZABCDEFG");

    it('debería retornar "jklmnopqrstuvwxyzabcdefghi" para "abcdefghijklmnopqrstuvwxyz" con offset 9');
    assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz",9),"jklmnopqrstuvwxyzabcdefghi");
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33');
    assert.equal(cipher.decode("HIJKLMNOPQRSTUVWXYZABCDEFG",33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "jklmnopqrstuvwxyzabcdefghi" con offset 9');
    assert.equal(cipher.decode("jklmnopqrstuvwxyzabcdefghi",9),"abcdefghijklmnopqrstuvwxyz");
  });
  });


