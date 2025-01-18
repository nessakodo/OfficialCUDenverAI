/**
 * This file contains utility functions used as imports in other modules
 */

// User ID genertion

const generateUserId = () => {
    return Math.floor(100000 + Math.random() * 900000); 
  };


module.exports = {generateUserId};