import React, { Fragment, useState } from 'react';
import Student from './Student';

const StudentContainer = () => {
  const [student, setStudent] = useState([
    {
      name: 'Gweneth MacAlpyne',
      avatar: 'http://dummyimage.com/157x150.jpg/cc0000/ffffff',
      grade: 10,
      guardianname: 'Sonnnie Stainton - Skinn',
      guardianphone: '(597) 7020434',
      englishlearner: null,
      email: 'sstainton0@trellian.com',
      gender: 'Female',
      resourcestudent: null,
      teachingstrategies:
        'aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate',
      interests:
        'tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet',
      medical: 'tincidunt',
      athlete: true,
      goals:
        'posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum'
    },
    {
      name: 'Boothe Kirkham',
      avatar: 'http://dummyimage.com/242x250.jpg/dddddd/000000',
      grade: 10,
      guardianname: 'Ellsworth Archanbault',
      guardianphone: '(333) 4941644',
      englishlearner: false,
      email: 'earchanbault1@altervista.org',
      gender: 'Male',
      resourcestudent: false,
      teachingstrategies:
        'non quam nec dui luctus rutrum nulla tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet',
      interests:
        'nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed',
      medical: null,
      athlete: true,
      goals:
        'turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue'
    },
    {
      name: 'Chloette Goacher',
      avatar: 'http://dummyimage.com/208x169.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Anne Josh',
      guardianphone: '(563) 7510555',
      englishlearner: null,
      email: 'ajosh2@cnn.com',
      gender: 'Female',
      resourcestudent: null,
      teachingstrategies:
        'vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat',
      interests:
        'non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis',
      medical: null,
      athlete: false,
      goals:
        'erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget elit'
    },
    {
      name: 'Maxi Lethabridge',
      avatar: 'http://dummyimage.com/238x206.jpg/cc0000/ffffff',
      grade: 10,
      guardianname: 'Marlyn Terry',
      guardianphone: '(257) 5375585',
      englishlearner: null,
      email: 'mterry3@shutterfly.com',
      gender: 'Female',
      resourcestudent: null,
      teachingstrategies:
        'sed vestibulum sit amet cursus id turpis integer aliquet massa',
      interests:
        'dui vel sem sed sagittis nam congue risus semper porta volutpat quam',
      medical: 'odio cras mi',
      athlete: true,
      goals:
        'fringilla rhoncus mauris enim leo rhoncus sed vestibulum sit amet cursus id turpis integer'
    },
    {
      name: 'Darius Wessing',
      avatar: 'http://dummyimage.com/176x190.jpg/cc0000/ffffff',
      grade: 10,
      guardianname: 'Guss Gier',
      guardianphone: '(433) 2746624',
      englishlearner: null,
      email: 'ggier4@wordpress.org',
      gender: 'Male',
      resourcestudent: true,
      teachingstrategies:
        'fusce consequat nulla nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim blandit',
      interests:
        'ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo',
      medical: null,
      athlete: false,
      goals:
        'tellus semper interdum mauris ullamcorper purus sit amet nulla quisque arcu libero rutrum ac lobortis vel dapibus'
    },
    {
      name: 'Rad Rymill',
      avatar: 'http://dummyimage.com/134x116.jpg/ff4444/ffffff',
      grade: 10,
      guardianname: 'Karel Mulgrew',
      guardianphone: '(102) 2643813',
      englishlearner: false,
      email: 'kmulgrew5@nasa.gov',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer',
      interests:
        'pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac consequat metus sapien',
      medical: null,
      athlete: true,
      goals:
        'in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat'
    },
    {
      name: 'Reyna Licence',
      avatar: 'http://dummyimage.com/232x103.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Belita Ateridge',
      guardianphone: '(800) 8052811',
      englishlearner: true,
      email: 'bateridge6@technorati.com',
      gender: 'Female',
      resourcestudent: null,
      teachingstrategies:
        'fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl nunc rhoncus',
      interests:
        'pretium iaculis justo in hac habitasse platea dictumst etiam faucibus cursus urna ut tellus nulla ut erat id mauris vulputate',
      medical: null,
      athlete: false,
      goals:
        'libero nullam sit amet turpis elementum ligula vehicula consequat morbi a ipsum integer a nibh in quis justo'
    },
    {
      name: 'Charmaine Hardeman',
      avatar: 'http://dummyimage.com/187x115.jpg/ff4444/ffffff',
      grade: 10,
      guardianname: 'Karel Ivens',
      guardianphone: '(757) 9961222',
      englishlearner: null,
      email: 'kivens7@icio.us',
      gender: 'Female',
      resourcestudent: false,
      teachingstrategies:
        'luctus rutrum nulla tellus in sagittis dui vel nisl duis ac',
      interests:
        'mi sit amet lobortis sapien sapien non mi integer ac neque duis bibendum morbi non quam nec dui luctus',
      medical: null,
      athlete: false,
      goals:
        'sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet'
    },
    {
      name: 'Giraldo Martinuzzi',
      avatar: 'http://dummyimage.com/176x123.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Spike Meconi',
      guardianphone: '(863) 2111984',
      englishlearner: null,
      email: 'smeconi8@gnu.org',
      gender: 'Male',
      resourcestudent: true,
      teachingstrategies:
        'leo rhoncus sed vestibulum sit amet cursus id turpis integer',
      interests:
        'mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis',
      medical: null,
      athlete: true,
      goals:
        'hac habitasse platea dictumst aliquam augue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel ipsum praesent'
    },
    {
      name: 'Perkin Lay',
      avatar: 'http://dummyimage.com/150x169.jpg/ff4444/ffffff',
      grade: 10,
      guardianname: 'Markus Berkowitz',
      guardianphone: '(801) 3919438',
      englishlearner: false,
      email: 'mberkowitz9@xing.com',
      gender: 'Male',
      resourcestudent: false,
      teachingstrategies:
        'in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra',
      interests:
        'id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac',
      medical: null,
      athlete: false,
      goals:
        'turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at'
    },
    {
      name: 'Max Hugonet',
      avatar: 'http://dummyimage.com/250x133.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Gerome Drife',
      guardianphone: '(782) 1251643',
      englishlearner: null,
      email: 'gdrifea@webs.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci',
      interests:
        'lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus',
      medical: 'libero quis',
      athlete: false,
      goals:
        'viverra pede ac diam cras pellentesque volutpat dui maecenas tristique est et tempus semper est quam pharetra'
    },
    {
      name: 'Filmore Baroche',
      avatar: 'http://dummyimage.com/143x155.jpg/cc0000/ffffff',
      grade: 10,
      guardianname: 'Wye Leele',
      guardianphone: '(840) 1985851',
      englishlearner: false,
      email: 'wleeleb@noaa.gov',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non',
      interests:
        'pretium quis lectus suspendisse potenti in eleifend quam a odio in hac habitasse',
      medical: null,
      athlete: false,
      goals:
        'pede venenatis non sodales sed tincidunt eu felis fusce posuere felis'
    },
    {
      name: 'Allin Southerell',
      avatar: 'http://dummyimage.com/112x165.jpg/cc0000/ffffff',
      grade: 10,
      guardianname: 'Wilfred Prosch',
      guardianphone: '(384) 5412474',
      englishlearner: true,
      email: 'wproschc@accuweather.com',
      gender: 'Male',
      resourcestudent: false,
      teachingstrategies:
        'nisi venenatis tristique fusce congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
      interests:
        'nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at',
      medical: null,
      athlete: false,
      goals: 'in felis eu sapien cursus vestibulum proin eu mi nulla ac'
    },
    {
      name: 'Leodora Leades',
      avatar: 'http://dummyimage.com/124x229.jpg/ff4444/ffffff',
      grade: 10,
      guardianname: 'Vivia Kobierski',
      guardianphone: '(995) 5596342',
      englishlearner: null,
      email: 'vkobierskid@issuu.com',
      gender: 'Female',
      resourcestudent: null,
      teachingstrategies:
        'ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla',
      interests:
        'varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
      medical: null,
      athlete: false,
      goals: 'posuere metus vitae ipsum aliquam non mauris morbi non lectus'
    },
    {
      name: 'Dan Abdee',
      avatar: 'http://dummyimage.com/214x211.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Gaultiero Filpo',
      guardianphone: '(805) 6039121',
      englishlearner: null,
      email: 'gfilpoe@biglobe.ne.jp',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque',
      interests:
        'suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus',
      medical: 'consequat dui nec',
      athlete: true,
      goals:
        'malesuada in imperdiet et commodo vulputate justo in blandit ultrices'
    },
    {
      name: 'Dalis Piff',
      avatar: 'http://dummyimage.com/165x124.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Arie Jerram',
      guardianphone: '(510) 4545202',
      englishlearner: null,
      email: 'ajerramf@spotify.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'suscipit a feugiat et eros vestibulum ac est lacinia nisi venenatis tristique fusce',
      interests:
        'curabitur convallis duis consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla',
      medical: 'non ligula pellentesque ultrices',
      athlete: true,
      goals:
        'luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum'
    },
    {
      name: 'Ham Kauffman',
      avatar: 'http://dummyimage.com/234x221.jpg/ff4444/ffffff',
      grade: 10,
      guardianname: 'Brien Coomer',
      guardianphone: '(201) 8226022',
      englishlearner: null,
      email: 'bcoomerg@example.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'non mauris morbi non lectus aliquam sit amet diam in magna',
      interests:
        'rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean',
      medical: null,
      athlete: false,
      goals:
        'sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis'
    },
    {
      name: 'Lorri Whorlow',
      avatar: 'http://dummyimage.com/191x178.jpg/ff4444/ffffff',
      grade: 10,
      guardianname: 'Karel Quick',
      guardianphone: '(609) 5685141',
      englishlearner: null,
      email: 'kquickh@constantcontact.com',
      gender: 'Female',
      resourcestudent: null,
      teachingstrategies:
        'nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis',
      interests:
        'ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non',
      medical: null,
      athlete: true,
      goals:
        'quis tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo pellentesque'
    },
    {
      name: 'Phaedra Kobpa',
      avatar: 'http://dummyimage.com/148x246.jpg/dddddd/000000',
      grade: 10,
      guardianname: 'Elie Pickering',
      guardianphone: '(531) 8359193',
      englishlearner: true,
      email: 'epickeringi@guardian.co.uk',
      gender: 'Female',
      resourcestudent: true,
      teachingstrategies:
        'dolor vel est donec odio justo sollicitudin ut suscipit a feugiat et eros',
      interests: 'potenti in eleifend quam a odio in hac habitasse platea',
      medical: null,
      athlete: false,
      goals:
        'nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque'
    },
    {
      name: 'Davon Barhems',
      avatar: 'http://dummyimage.com/177x131.jpg/dddddd/000000',
      grade: 10,
      guardianname: 'Igor Primo',
      guardianphone: '(582) 3521717',
      englishlearner: null,
      email: 'iprimoj@booking.com',
      gender: 'Male',
      resourcestudent: false,
      teachingstrategies:
        'consequat dui nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris enim',
      interests:
        'eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor quis turpis sed ante',
      medical: 'sed accumsan felis ut',
      athlete: false,
      goals:
        'justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet eros suspendisse accumsan tortor'
    },
    {
      name: 'Matias Keeffe',
      avatar: 'http://dummyimage.com/123x223.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Benton Stollmeyer',
      guardianphone: '(593) 3180368',
      englishlearner: true,
      email: 'bstollmeyerk@baidu.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'augue a suscipit nulla elit ac nulla sed vel enim sit amet',
      interests:
        'eu nibh quisque id justo sit amet sapien dignissim vestibulum',
      medical: 'vitae quam',
      athlete: false,
      goals:
        'et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et'
    },
    {
      name: 'Gustave Balsdone',
      avatar: 'http://dummyimage.com/155x138.jpg/cc0000/ffffff',
      grade: 10,
      guardianname: 'Arne Joffe',
      guardianphone: '(563) 2385754',
      englishlearner: null,
      email: 'ajoffel@spotify.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat',
      interests:
        'urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam',
      medical: null,
      athlete: true,
      goals:
        'gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi'
    },
    {
      name: 'Lindsy Shillabear',
      avatar: 'http://dummyimage.com/242x145.jpg/dddddd/000000',
      grade: 10,
      guardianname: 'Randee Yeardley',
      guardianphone: '(926) 9896316',
      englishlearner: null,
      email: 'ryeardleym@shinystat.com',
      gender: 'Female',
      resourcestudent: true,
      teachingstrategies:
        'lorem vitae mattis nibh ligula nec sem duis aliquam convallis',
      interests:
        'consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
      medical: null,
      athlete: false,
      goals:
        'eget rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna at'
    },
    {
      name: 'Niko Rozea',
      avatar: 'http://dummyimage.com/158x232.jpg/dddddd/000000',
      grade: 10,
      guardianname: 'Nolly Francklin',
      guardianphone: '(706) 9750642',
      englishlearner: null,
      email: 'nfrancklinn@biglobe.ne.jp',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in',
      interests:
        'ut massa volutpat convallis morbi odio odio elementum eu interdum eu tincidunt',
      medical: 'posuere',
      athlete: true,
      goals:
        'at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit amet diam in magna bibendum'
    },
    {
      name: 'Darby Michelotti',
      avatar: 'http://dummyimage.com/109x233.jpg/dddddd/000000',
      grade: 10,
      guardianname: 'Maitilde Chastenet',
      guardianphone: '(951) 8240289',
      englishlearner: null,
      email: 'mchasteneto@list-manage.com',
      gender: 'Female',
      resourcestudent: false,
      teachingstrategies:
        'orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio',
      interests:
        'in porttitor pede justo eu massa donec dapibus duis at velit eu est congue elementum in hac',
      medical: null,
      athlete: false,
      goals:
        'magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis'
    },
    {
      name: 'Edouard Chalk',
      avatar: 'http://dummyimage.com/183x193.jpg/cc0000/ffffff',
      grade: 10,
      guardianname: 'Burr Apfel',
      guardianphone: '(523) 4171779',
      englishlearner: true,
      email: 'bapfelp@vistaprint.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio',
      interests:
        'in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis',
      medical: null,
      athlete: true,
      goals:
        'erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam'
    },
    {
      name: 'See MacCaffery',
      avatar: 'http://dummyimage.com/171x100.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Rawley Barry',
      guardianphone: '(743) 1108660',
      englishlearner: true,
      email: 'rbarryq@friendfeed.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia',
      interests:
        'lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus',
      medical: null,
      athlete: true,
      goals: 'et ultrices posuere cubilia curae mauris viverra diam vitae quam'
    },
    {
      name: 'Hunt Hornbuckle',
      avatar: 'http://dummyimage.com/241x236.jpg/ff4444/ffffff',
      grade: 10,
      guardianname: 'Tymothy Showler',
      guardianphone: '(425) 9131942',
      englishlearner: null,
      email: 'tshowlerr@cloudflare.com',
      gender: 'Male',
      resourcestudent: null,
      teachingstrategies:
        'in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla',
      interests:
        'in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
      medical: null,
      athlete: false,
      goals:
        'sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean'
    },
    {
      name: 'Sonja Billitteri',
      avatar: 'http://dummyimage.com/230x100.jpg/dddddd/000000',
      grade: 10,
      guardianname: 'Modestia Steven',
      guardianphone: '(606) 8976151',
      englishlearner: null,
      email: 'mstevens@youku.com',
      gender: 'Female',
      resourcestudent: null,
      teachingstrategies:
        'elementum in hac habitasse platea dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque',
      interests:
        'eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus',
      medical: null,
      athlete: true,
      goals:
        'vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae'
    },
    {
      name: 'Eydie Janku',
      avatar: 'http://dummyimage.com/166x123.jpg/5fa2dd/ffffff',
      grade: 10,
      guardianname: 'Janaya Gyrgorcewicx',
      guardianphone: '(838) 6531896',
      englishlearner: null,
      email: 'jgyrgorcewicxt@google.de',
      gender: 'Female',
      resourcestudent: false,
      teachingstrategies:
        'nulla mollis molestie lorem quisque ut erat curabitur gravida nisi at nibh in',
      interests:
        'platea dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat',
      medical: null,
      athlete: true,
      goals:
        'elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante'
    }
  ]);

  return (
    <Fragment>
      <div className='large text-primary'>
        <h1 className='large'>Mr. Glassick's First Period</h1>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Student Grade</th>
            <th>Athlete</th>
            <th>EL Student</th>
            <th>Resource Student</th>
            <th>Medical</th>
          </tr>
        </thead>
        {student.map((student, index) => (
          <Student key={index} student={student} />
        ))}
      </table>
      <br />
      <br />
      <br />
    </Fragment>
  );
};

export default StudentContainer;
