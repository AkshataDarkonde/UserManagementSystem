package com.capgemini.UserManagementSystem.Exception;

public class NotFoundException extends RuntimeException{
    public NotFoundException(String str)
    {
        super(str);
    }
}
