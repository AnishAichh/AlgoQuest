import React, { useEffect, useState } from "react";
import img from '../../../assets/explore-img/image.png';
import { auth } from "../../../firebase"; 
function Profile() {
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        console.log(user);
        
        setUserDetails({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        });
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }

  return (
    <div>
      {userDetails ? (
        <>
          <div className="">
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-3/5 mx-auto'>
              <div className=''>
                <div className='py-4'>
                  <div className='text-4xl font-bold py-4'>
                    Welcome {userDetails.displayName || ''} !! 
                  </div>
                  <div className='text-lg text-justify'>
                    A premier destination for coding enthusiasts and aspiring software developers. Our platform is dedicated to providing a comprehensive environment for enhancing your coding skills, mastering algorithms, and preparing for technical interviews.
                  </div>
                </div>
                <div className='py-4'>
                  <div className='text-4xl font-bold'>
                    Our Mission
                  </div>
                  <div className='text-lg py-4 text-justify'>
                    Our mission is to empower individuals to achieve their programming potential through a vast collection of coding problems, detailed solutions, and a supportive community. We aim to bridge the gap between learning and applying coding skills in real-world scenarios.
                  </div>
                </div>

                <div className='text-4xl font-bold py-4'>
                  Happy Coding !!
                </div>
                <button className="btn btn-primary" onClick={handleLogout} style={{background:"blue"}}>
            Logout
          </button>
              </div>
              <div className=''>
                <div className='my-3 max-w-lg' >
                  <img src={img} alt='img.png' />
                </div>
                <div className=''>
                  <div className='text-4xl font-bold'>
                    Our Vision
                  </div>
                  <div className='text-lg text-justify'>
                    We envision a world where anyone, regardless of their background, can learn to code and excel in the tech industry. By providing accessible and high-quality resources, we strive to create opportunities for everyone to succeed in their coding journey.

                    
                  </div>
                  
                </div>
              </div>
            </div>
          </div>

      
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
