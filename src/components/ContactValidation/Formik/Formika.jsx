function Formika() {
  const onSubmit = e => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  return (
    <form autoComplete="off" onSubmit={onSubmit}>
      <label htmlFor="login">
        Login:
        <input type="text" name="login" />
      </label>
      <label htmlFor="password">
        Paswword:
        <input type="password" name="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export { Formika };
