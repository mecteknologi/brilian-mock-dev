const LoginToBrilian = () => {
  return (
    <div>
      <p>Selamat datang : John Doe (00000004)</p>
      <form method="POST" action="https://brilian.jurutulis.id/login-app-check">
        <input
          type="hidden"
          name="key"
          value="5a8b7d1e2f3c4d9e6a7b8c9f0d1e2a3b4c5d6e7f8g9h0i1j2k3l4m5n6o7p8q9r0s"
        />
        <input
          type="hidden"
          name="user"
          value="U2FsdGVkX1+OeiJMNlv1GR95yt4b3Q7TCuS2qf7JZ2Y="
        />

        <button>Masuk ke brilian news</button>
      </form>
    </div>
  );
};

export default LoginToBrilian;
