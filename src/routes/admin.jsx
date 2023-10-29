import { useState } from 'react'
import { SERVER } from '../config'

const Admin = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [points, setPoints] = useState(0);
  const [maxProgress, setMaxProgress] = useState(0);
  
  const [success, setSuccess] = useState("");

  const handleClickCreate = async (e) => {
    e.preventDefault();
    if (name == '' || description == '' || points == 0 || maxProgress == 0) {
      return;
    }
    const res = await fetch(`${SERVER}/createChallenge`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        description,
        points: parseInt(points),
        progressGoal: parseInt(maxProgress)
      })
    })
    if (res.status != 200) {
      console.log('Error creating new challenge');
      setSuccess("Submission failed");
      return;
    }
    else {
      setName('');
      setDescription('');
      setPoints(0);
      setMaxProgress(0);
      setSuccess("Submission succeeded");
    }
  }


  return (
    <>
      <h1>Admin</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input> <br />
        <label htmlFor="description">Description: </label>
        <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}></input> <br />
        <label htmlFor="points">Points to gain: </label>
        <input type="number" onChange={(e) => setPoints(e.target.value)} value={points}></input> <br />
        <label htmlFor="maxProgress">Max Progress: </label>
        <input type="number" onChange={(e) => setMaxProgress(e.target.value)} value={maxProgress}></input> <br />
        <input type="submit" value="Create new challenge" onClick={handleClickCreate}/> <br />
        <label value={success}></label>
      </form>
    </>
  )
}

export default Admin