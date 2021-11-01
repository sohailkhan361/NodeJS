const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    helpers: {
        getShortComment(comment) {
            if (comment.length < 64) {
                return comment;
            }
            return comment.substring(0, 64) + '...';
        }
    }
}));

app.set('view engine', 'hbs');

app.get('/', function (req, res) {
    res.render('home', {
        posts: [
            {
                author: 'Sohail Khan',
                image: 'https://picsum.photos/500/500',
                comments: [
                    'This is the first comment',
                    'This is the second comment',
                    'Like what you see? To know more, visit www.InstaPostWallpapers.com'
                ]
            }, 
            {
                author: 'Anonymous',
                image: 'https://picsum.photos/500/500?2',
                comments: [
                ]
            }
        ]
    });
});

app.get('/emp', function (req, res) {
    res.render('emp', {
        employees: [
            {
                EmployeeID: '1100',
                EmpFN: 'Sohail',
                EmpLN: 'Khan',
                Address: 'Ghaziabad',
                PhNo: '+91-9988776655'
                
            },{
                EmployeeID: '1200',
                EmpFN: 'Akshay',
                EmpLN: 'Pratap',
                Address: 'Rohtak',
                PhNo: '+90-12345667'
                
            },{
                EmployeeID: '1300',
                EmpFN: 'Shubham',
                EmpLN: 'Singh',
                Address: 'Varanasi',
                PhNo: '+011-2435425'
                
            },{
                EmployeeID: '1400',
                EmpFN: 'Manav',
                EmpLN: 'Chugh',
                Address: 'Timbuktoo',
                PhNo: '+80-8700996677'
                
            },{
                EmployeeID: '1500',
                EmpFN: 'Kishore',
                EmpLN: 'Rajput',
                Address: 'Jaipur',
                PhNo: '+91-88007766334'
                
            },{
                EmployeeID: '1600',
                EmpFN: 'Kishan',
                EmpLN: 'Kumar',
                Address: 'Patna',
                PhNo: '+86-8700996123'
                
            },{
                EmployeeID: '1700',
                EmpFN: 'Vishakha',
                EmpLN: 'Singh',
                Address: 'Amritsar',
                PhNo: '+99-6677554433'
                
            },{
                EmployeeID: '1800',
                EmpFN: 'Rohit',
                EmpLN: 'Yadav',
                Address: 'Manesar',
                PhNo: '+99-7099887743'
                
            },
        ]
    });
});

app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});
