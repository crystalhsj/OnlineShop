package com.mythsman.onlineshop.service;

import java.util.List;
import java.util.Set;

import com.mythsman.onlineshop.model.User;
import com.mythsman.onlineshop.security.UserRole;


public interface UserService {
	User findByUsername(String username);

    User findByEmail(String email);

    boolean checkUsernameExists(String username);

    boolean checkEmailExists(String email);
    
    void save (User user);

    void updateInfo(User oldUser,User newUser);
    
    User createUser(User user, Set<UserRole> userRoles);
    
    User saveUser (User user); 
    
    List<User> findUserList();

    void enableUser (String username);

    void disableUser (String username);

	boolean checkPhoneNumberExists(String phone);

	void createPasswordResetTokenForUser(User user, String token);
	
	public void updateUserPassword(User user);

	void checkEqualityOfPasswords(User user, List<String> errorMessages);
}
