import {
  Stack,
  useToast,
  Checkbox,
} from '@chakra-ui/react'
  
  import React, { useEffect, useState } from 'react'
  import { Layout } from '../components/Layout'
  import { db } from '../utilities/init-firebase'
  import {collection, getDocs} from "firebase/firestore"



  
  
  export default function Takequiz() {

    const [questions, setQuestions] = useState([])
    const quizCollectionRef = collection(db, "Quizzes" ); //setting up the questionCollection variable
    const toast = useToast()
  

    useEffect(() => {

        const getQuestions = async () => {
            const data = await getDocs(quizCollectionRef); //returns and stores all documents in the collection
            setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id}))); //Looping through the documents in the collection, and setting the setQuestions array into an array of the documetn data and the id of each document

        };

        getQuestions();



    }, []);

    return (
      
      <Layout>
      <Stack direction='column'>  

      <div className="Container">
          
          {questions.map((question) => { //Going through the questions array and displaying them

           const A = [question.A] 
           const B = [question.B]
           const C = [question.C]
           const D = [question.D]
           const correctAnswer = [question.correctAnswer]
           const createdUser = [question.createdUser]

          return (

                    
          <div className='text-orange-700 p-4'>

 
            <h2 className = 'text-3xl'>
                Q: {question.question} 
            </h2>
            <h3 className = 'text-lg'> Created By: {createdUser} </h3>
            <br></br>
            
            <Checkbox size='lg' colorScheme='orange'  >A: {A} </Checkbox>
            <br></br>
            <Checkbox size='lg' colorScheme='orange'  >B: {B} </Checkbox>
            <br></br>
            <Checkbox size='lg' colorScheme='orange' >C: {C} </Checkbox>
            <br></br>
            <Checkbox size='lg' colorScheme='orange' >D: {D} </Checkbox>
            <br></br>
            
            

            <br></br>

            <button  onClick={() =>
        toast({
          title: 'The Correct Answer Is',
          description: correctAnswer,
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      } className="text-xl text-green-700">Check Answer</button>
            
            
            

    
          </div>

          )
          })}

       </div>

       
       </Stack>
       </Layout>
          
    )
        }   