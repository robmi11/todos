function Login() {
  return (
    <div className="w-ful flex justify-center items-center">
      <form>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Adres e-mail</span>
          </label>
          <input type="text" className="input input-bordered w-full max-w-xs" />
        </div>
      </form>
    </div>
  );
}

export default Login;
