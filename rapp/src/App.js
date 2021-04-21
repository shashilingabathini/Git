import './App.css';
import { useEffect } from 'react'
import {  useAPISaaga } from './slice'
import { selectLoading  , selectPosts } from './slice/selector'
import { useSelector , useDispatch } from 'react-redux'
function App() {

  const { actions } = useAPISaaga()
  const isLoading = useSelector(selectLoading)
  const posts = useSelector(selectPosts)
  const dispatch = useDispatch()

  useEffect(() => {
      //dispatch actions to saaga 
      dispatch(actions.loadPosts())
  },[])

  return (
    <div className="App">
        This is simple saga example
        { isLoading && <div>Loading ......</div>}
        { posts && <div>{posts.length}</div>}
    </div>
  );
}

export default App;