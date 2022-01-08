import {
  Stack,
  useToast,
  Checkbox,
} from '@chakra-ui/react'
  
  import React, { useEffect, useState } from 'react'
  import { Layout } from '../components/Layout'
  import { db } from '../utilities/init-firebase'
  import {collection, getDoc, addDoc, documentId, getDocs} from "firebase/firestore"



  
  
  export default function Takequiz() {

    const [questions, setQuestions] = useState([])
    const quizCollectionRef = collection(db, "Quizzes" );
    const toast = useToast()
    const [value, setValue] = React.useState('1')

    useEffect(() => {

        const getQuestions = async () => {
            const data = await getDocs(quizCollectionRef);
            setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));

        };

        getQuestions();



    }, []);

    return (
      
      <Layout>
      <Stack direction='column'>  

      <div className="Container">
          
          {questions.map((question) => {

           const A = [question.A] 
           const B = [question.B]
           const C = [question.C]
           const D = [question.D]
           const correctAnswer = [question.correctAnswer]

          return (

                    
          <div className='text-orange-700 p-4'>

 
            <h2 className = 'text-3xl'>
                Q: {question.question} 
            </h2>
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