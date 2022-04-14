import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'

export const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const access_token = localStorage.getItem('access_token')
    // TODO - change to real check user
    if (access_token === 'fpovizrgmqigbfbtbnivucgvlbavdbzi') {
      setUser({
        name: 'Oswaldo Mobray',
        access_token,
      })
    }
  }, [])

  const login = ({ name, password }) => {
    // TODO - change to real login user
    if (name === 'admin' && password === 'admin') {
      localStorage.setItem('access_token', 'fpovizrgmqigbfbtbnivucgvlbavdbzi')
      setUser({
        name: 'Oswaldo Mobray',
      })
    }
  }

  const logout = async () => {
    localStorage.removeItem('access_token')
    setUser(null)
  }

  const value = useMemo(() => ({ user, logout, login }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.any,
}
