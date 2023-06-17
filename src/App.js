import './App.css'
import { useFormik } from 'formik'

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      alert('Login Successful')
    },

    validate: (values) => {
      let errors = {}
      if (!values.name) errors.name = 'Feild required.'
      if (!values.email) errors.email = 'Feild required'
      if (!values.password) errors.password = 'Feild required'

      return errors
    }
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input
          type="text"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name ? (
          <div style={{ color: 'red' }}>{formik.errors.name}</div>
        ) : null}
        <div>Email/Username</div>
        <input
          id="emailField"
          type="text"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: 'red' }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password</div>
        <input
          id="pswField"
          type="text"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: 'red' }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
