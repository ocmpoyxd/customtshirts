drop database customtshirts;
create database customtshirts;
use customtshirts;

create table users (
uId int not null primary key auto_increment,
uName nvarchar(30) not null,
uEmail nvarchar(30) not null,
uPassword nvarchar(30) not null,
uRole nvarchar(30) not null,
confirmEmail boolean not null,
interfaceLanguage nvarchar(30),
interfaceTheme nvarchar(30),
city nvarchar(30),
yearsOld int
);

create table tshirts (
tsId int primary key not null auto_increment, 
creatorId int not null, 
tsName nvarchar(30) not null,
gender nvarchar(6),
design nvarchar(150),
canvas nvarchar(150),
topic nvarchar(30) not null,
tags nvarchar(30) not null,
discription nvarchar(400) not null,
foreign key (creatorId) references users(uId)
);

create table comments (
commentId int primary key not null auto_increment,
writerId int not null,
tshirtId int not null,
dateWriting datetime not null,
textComment varchar(150) not null,
foreign key (writerId) references users(uId),
foreign key (tshirtId) references tshirts(tsId)
);

create table rating (
ratingId int primary key not null auto_increment,
tshirtId int not null, 
valuerId int not null,
mark int not null,
foreign key (valuerId) references users(uId),
foreign key (tshirtId) references tshirts(tsId)
);

create table likesOnComments(
likeId int primary key not null auto_increment,
commentId int not null,
userId int not null,
foreign key (userId) references users(uId),
foreign key (commentId) references comments(commentId)
);


create view tshirtsWithnames as select tshirts.tsId, users.uName, tshirts.tsName, tshirts.gender, tshirts.discription, tshirts.design, tshirts.topic, tshirts.tags from tshirts inner join users on tshirts.creatorId=users.uId;
create view commentsWithNames as select comments.commentId, users.uName as writerName, count(likesOnComments.commentId) as countLikes, comments.tshirtId, comments.dateWriting, comments.textComment from comments inner join users on comments.writerId=users.uId left join likesOnComments on comments.commentid=likesOnComments.commentId group by comments.commentId;
create view likesOnComment as select commentId,count(commentId) as countLikes from likesOnComments group by commentId;



insert into users values (default,'admin','kioskow@yandex.by','12345678','admin', true, null, null, null,null);
insert into users values (default,'andrey98','mail1@mail.by','12345678','user', true, null, null,'Homel',16);
insert into users values (default,'vladik1','asb@yandex.by','12345678','user', true, null, null,'Saint.P',21);
insert into users values (default,'ksuxa19','1234ksu@mail.ru','12345678','user', true, null, null,'Grodno',20);
insert into users values (default,'vovan4ik','lalala@aue.com','12345678','user', true, null, null,'Minsk',22);
insert into users values (default,'maxim87','bombom@yandex.by','12345678','user', true, null, null,'Kiyv',19);
insert into users values (default,'pusto','pustopusto@yandex.com','12345678','user', true, null, null,'Moscow',18);
insert into users values (default,'vikavika','vikanika@yandex.by','12345678','user', true, null, null,'Brest',20);
insert into users values (default,'arinamalvina','arinka23@yandex.com','12345678','user', true, null, null,'Minsk',21);


insert into tshirts values(default,3,'Hp','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg', 'https://res.cloudinary.com/customtshirts/image/upload/v1573388932/HP-Support-Assistant_y12ez7.png','Logos','tags2','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,2,'Butterfly','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573389000/flying-butterfly-png-image-png-image-butterfly-png-1053_967_lzkmrf.png','Animals','tags3' ,'A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,3,'Wink','female','https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573387536/5a3a739224cab4.15189535151378011415074154_vb8ent.png','Emoji','tags4','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,4,'Itransition','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573388422/Itransition_logo_bairk7.png','Logos','tags5','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,2,'Smile','female','https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573361554/smile_sad9yb.png','Emoji','tags6','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,3,'Dad Joke','female','https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg', 'https://res.cloudinary.com/customtshirts/image/upload/v1573389273/dadjoke_lflx2b.png','Humor','tags2','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,9,'Code','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573389398/1200px-Code.svg_igeovw.png','Programming','tags2','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,2,'Html','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573389540/2000px-HTML5_logo_and_wordmark.svg_-300x300_dbznm2.png','Programming','tags3','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,5,'React','female','https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573389686/1280px-React-icon.svg_lwjpke.png','Programming','tags4','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,4,'Soldier','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573390025/cartoon-dick-pic-3_vsioxx.png','Humor','tags5','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,7,'Russia','female','https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573390181/200px-Coat_of_Arms_of_the_Russian_Federation_2.svg_lmujlw.png','World','tags6','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,6,'Call me','female','https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573390294/Call-Me-Facebook-Cover-Picture_yomtk7.png', 'Other','tags2','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,8,'Fat ass','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573390416/Fat-Ass-5K-Logo_hygwwu.png','Humor','tags2','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,5,'Transformers','male','https://sun9-68.userapi.com/c857320/v857320715/401ff/_9lwGPUcYCY.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573390464/Transformers_-_Autobots-logo-E5969A432E-seeklogo.com_tcmwk8.png','Logos','tags3','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');
insert into tshirts values(default,4,'Fortnite','female','https://sun9-47.userapi.com/c857320/v857320715/40206/bvX5g7753-Q.jpg','https://res.cloudinary.com/customtshirts/image/upload/v1573390518/fortnite_png_logo_528970_dlu21x.png','Logos','tags4','A T-shirt is a style of fabric shirt named after the T shape of its body and sleeves. Traditionally it has short sleeves and a round neckline, known as a crew neck, which lacks a collar. T-shirts are generally made of a stretchy, light and inexpensive fabric and are easy to clean.');



insert into comments values(default,2,1,'19.11.09 16:30:25','Hello World!!!');
insert into comments values(default,6,6,'19.10.30 18:41:01','Amazing!');
insert into comments values(default,2,2,'19.11.08 19:33:24','Super!!! Wanna it!');
insert into comments values(default,5,5,'19.10.30 13:42:31','So hoooott!!!');
insert into comments values(default,3,2,'19.11.08 11:18:35','WOW!!!WOW!!!');
insert into comments values(default,5,3,'19.10.27 12:43:21','Great!!!');
insert into comments values(default,4,1,'19.11.06 13:30:21','So interesting');
insert into comments values(default,8,3,'19.10.28 14:41:51','How to buy it??');
insert into comments values(default,2,4,'19.11.03 16:30:35','Very coooooooool');
insert into comments values(default,8,1,'19.10.29 18:20:19','Perfect design!');

insert into rating values (default,1,2,5);
insert into rating values (default,1,3,3);
insert into rating values (default,2,4,4);
insert into rating values (default,2,2,3);
insert into rating values (default,3,2,5);
insert into rating values (default,4,2,4);
insert into rating values (default,5,2,5);
insert into rating values (default,3,2,5);
insert into rating values (default,4,2,4);
insert into rating values (default,5,2,5);

insert into likesOnComments values(default,1,3);
insert into likesOnComments values(default,1,4);
insert into likesOnComments values(default,4,3);
insert into likesOnComments values(default,4,2);
insert into likesOnComments values(default,7,3);
insert into likesOnComments values(default,6,3);

create view tshirtsWithRating as select tshirts.tsId, users.uName, avg(rating.mark) as rating, count(rating.mark) as countMarks, tshirts.tsName, tshirts.gender, tshirts.discription, tshirts.design, tshirts.canvas, tshirts.topic, tshirts.tags
from tshirts inner join users on tshirts.creatorId=users.uId left join rating on tshirts.tsId=rating.tshirtid group by tsId order by  rating desc ;
select tshirtId, avg(mark) from rating group by tshirtId;
select  commentId,count(commentId) as countLikes from likesOnComment group by commentId;

#select * from tshirtsWithRating;
#select * from commentsWithNames;
#select * from likesOnComment;
create view userPortfolio as select  users.uId, users.uName, users.uEmail, users.City, users.yearsOld, tshirts.tsId, tshirts.tsName, tshirts.design, tshirts.canvas from users inner join tshirts on users.uId=tshirts.creatorId;
#select * from likesOnComment;
#select * from userPortfolio;
select * from users;
#select * from tshirts;
#SELECT * FROM tshirts WHERE tsId=2
