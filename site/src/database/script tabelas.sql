create database educationow;
use educationow;



create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar (60),
senha varchar (12),
cargo varchar(120)
);

create table ides(
id int primary key auto_increment,
nome varchar(50),
linguagem_principal varchar (50),
votos int 
) auto_increment = 100;

select * from usuario;


insert into ides values
(default, 'VS code','multilinguagem', 1000),
(default, 'Android Studio', 'Kotlin', 850),
(default, 'JetBrains', 'Java', 900);

select votos from educationow.ides where votos > 500;
select votos from ides where nome = 'Android Studio';

update ides set votos = votos +1  where id = 100;

select * from ides;

