export const saveUserData = (userData) => {
  try {
    if (userData.username) {
      localStorage.setItem('userName', userData.username);
    }
    if (userData.email) {
      localStorage.setItem('userEmail', userData.email);
    }
    if (userData.profile_photo) {
      localStorage.setItem('userPhoto', userData.profile_photo);
    }
    if (userData.address) {
      localStorage.setItem('userAddress', userData.address);
    }
    if (userData.phone_number) {
      localStorage.setItem('userPhone', userData.phone_number);
    }
  } catch (error) {
    console.error('Error saving user data to localStorage', error);
  }
};

export const getUserData = () => {
  try {
    const userName = localStorage.getItem('userName');
    const userEmail = localStorage.getItem('userEmail');
    const userPhoto = localStorage.getItem('userPhoto');
    const userAddress = localStorage.getItem('userAddress');
    const userPhone = localStorage.getItem('userPhone');

    return {
      name: userName,
      email: userEmail,
      photo: userPhoto,
      address: userAddress,
      phone: userPhone,
    };
  } catch (error) {
    console.error('Error getting user data from localStorage', error);
    return null;
  }
};

export const clearUserData = () => {
  try {
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPhoto');
    localStorage.removeItem('userAddress');
    localStorage.removeItem('userPhone');
  } catch (error) {
    console.error('Error clearing user data from localStorage', error);
  }
};
