.We will follow MVC architecture
.routes demo
    ./users->GET->{id,username,email}
    ./users/->POST->{username,email}
    ./users/:id->PUT->update the user
    ./users/:id->DELETE->delate the user

    .->npm init -y && npm install express nodemon cors body-parser dotenv uuid