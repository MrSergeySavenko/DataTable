import React, { useEffect } from 'react';
import { SWrapper } from './Main.style';
import { DataTable } from '../components/DataTable/DataTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../__data__/actions/usersData.actions';
import { RootState } from '../__data__/store';
import { uniqueKey } from '../__data__/utils/utils';

export const Main: React.FC = () => {
    const dispatch = useDispatch();

    // const data = useSelector((state: RootState) => state.usersData.data);

    useEffect(() => {
        dispatch(fetchUsers() as any);
    }, []);

    const data = [
        {
            id: 837,
            firstName: 'Emced',
            lastName: 'Terfloth',
            email: 'MPonthieux@pharetra.org',
            phone: '(919)587-0488',
            address: { streetAddress: '1444 Placerat Rd', city: 'Yakima', state: 'SD', zip: '56299' },
            description:
                'nunc sagittis tincidunt orci dolor eget vestibulum non tincidunt consectetur libero risus lorem sollicitudin pretium donec curabitur massa mattis sed magna sed vitae eget lorem suspendisse non odio dui magna mattis malesuada',
        },
        {
            id: 995,
            firstName: 'Sharon',
            lastName: 'Rovito',
            email: 'RStokes@orci.ly',
            phone: '(415)915-4042',
            address: { streetAddress: '3756 Libero Ct', city: 'Santa Clarita', state: 'PA', zip: '91804' },
            description:
                'sed lectus sit suspendisse egestas lorem lacus sollicitudin placerat sollicitudin et elementum sed vel sit in placerat sollicitudin et sed molestie aenean lorem at aenean morbi mattis ipsum sapien amet morbi non',
        },
        {
            id: 741,
            firstName: 'Stacie',
            lastName: 'Damiano',
            email: 'NBrazell@vestibulum.io',
            phone: '(370)869-5822',
            address: { streetAddress: '4085 Sit St', city: 'Stony Point', state: 'ND', zip: '37671' },
            description:
                'lacus eros eget vestibulum nullam porta massa suspendisse curabitur neque aliquam malesuada pulvinar mi ipsum ante risus placerat hendrerit amet rutrum orci convallis rutrum lacus velit tincidunt dolor at sollicitudin suspendisse sit',
        },
        {
            id: 966,
            firstName: 'Zandra',
            lastName: 'Ryan',
            email: 'TBlack@sapien.net',
            phone: '(402)393-1105',
            address: { streetAddress: '1332 Nec Ct', city: 'Madison', state: 'KS', zip: '12372' },
            description:
                'sit lacus in magna lacus magna at ipsum pulvinar tincidunt tortor dolor etiam in quis augue sed dui ipsum elit aliquam scelerisque sed lacus lorem mi et pharetra tincidunt elementum magna nullam',
        },
        {
            id: 850,
            firstName: 'Sunil',
            lastName: 'Gann',
            email: 'TSlonaker@donec.com',
            phone: '(380)343-0313',
            address: { streetAddress: '577 Dolor Ln', city: 'Akron', state: 'OH', zip: '33632' },
            description:
                'libero sollicitudin etiam porta vitae aliquam sit quis facilisis massa adipiscing in placerat mattis massa donec augue ac magna porta etiam sollicitudin sapien consequat mattis amet neque magna pretium tempor augue pulvinar',
        },
        {
            id: 703,
            firstName: 'Esmeralda',
            lastName: 'Platt',
            email: 'EGupta@nec.org',
            phone: '(827)134-3392',
            address: { streetAddress: '3079 Eget Ct', city: 'Tonasket', state: 'CT', zip: '38951' },
            description:
                'consectetur sed lectus tellus scelerisque ipsum aliquam mattis ac sagittis donec sed libero libero sollicitudin et placerat quis vitae dui magna sit libero amet placerat vitae vitae suspendisse amet eros malesuada vitae',
        },
        {
            id: 843,
            firstName: 'Ross',
            lastName: 'Ockerman',
            email: 'HGipple@lorem.com',
            phone: '(113)938-1845',
            address: { streetAddress: '7353 At Ave', city: 'Traverse City', state: 'NM', zip: '97659' },
            description:
                'consequat elit sit non tincidunt morbi placerat in neque sollicitudin elementum vitae consectetur pulvinar magna pharetra suspendisse et nullam porta lacus tincidunt vestibulum quis tincidunt quis odio dolor pharetra scelerisque sed et',
        },
        {
            id: 490,
            firstName: 'Wan-Yu',
            lastName: 'Patel',
            email: 'JCook@et.org',
            phone: '(899)813-9221',
            address: { streetAddress: '4641 Sapien Ln', city: 'Simi Valley', state: 'MO', zip: '19940' },
            description:
                'tortor suspendisse lacus suspendisse sagittis lorem pharetra pretium lorem mattis placerat in ante tellus massa sit turpis ipsum sed sit dolor porta consequat sed magna sagittis consequat pretium sapien aliquam sed odio',
        },
        {
            id: 965,
            firstName: 'Latia',
            lastName: 'Mangat',
            email: 'AGerhard@mattis.io',
            phone: '(856)337-2138',
            address: { streetAddress: '7254 Sollicitudin St', city: 'Lititz', state: 'WI', zip: '76971' },
            description:
                'augue fringilla adipiscing sagittis amet tincidunt mi nec massa sagittis vel vestibulum at pulvinar sed sed placerat magna nec sit aenean neque amet scelerisque adipiscing lacus lacus tellus magna suspendisse ac sed',
        },
        {
            id: 187,
            firstName: 'Sheri',
            lastName: 'Kelton',
            email: 'DKamradt@adipiscing.ly',
            phone: '(655)857-1860',
            address: { streetAddress: '6134 Dolor Ln', city: 'Bellefonte', state: 'NM', zip: '48049' },
            description:
                'sed nunc amet nunc vestibulum pharetra magna risus morbi lacus porta ipsum tincidunt orci donec pulvinar odio et dolor curabitur rutrum morbi sit vel malesuada magna pulvinar tempor facilisis consectetur aenean vitae',
        },
        {
            id: 688,
            firstName: 'Elida',
            lastName: 'Ragusa',
            email: 'CClayton@lacus.org',
            phone: '(664)002-4759',
            address: { streetAddress: '8327 Eget Dr', city: 'Woodlawn', state: 'NV', zip: '33799' },
            description:
                'tincidunt pretium amet tincidunt etiam sed tincidunt egestas sed curabitur egestas ac donec libero ante eros odio ipsum facilisis rutrum ipsum vitae elementum pretium hendrerit porta orci dolor facilisis magna non sapien',
        },
        {
            id: 86,
            firstName: 'Xiumei',
            lastName: 'Frame',
            email: 'GHruska@tempor.org',
            phone: '(212)053-0724',
            address: { streetAddress: '1496 At Ln', city: 'Big Bear', state: 'NM', zip: '89812' },
            description:
                'vitae sapien ipsum aliquam molestie facilisis nec sagittis vitae rutrum mattis consequat at amet et dui suspendisse lectus ante sit lacus tempor sed fringilla velit aliquam egestas convallis sed sollicitudin donec aliquam',
        },
        {
            id: 23,
            firstName: 'Lakshmi',
            lastName: 'Ghiselli',
            email: 'JZensen@magna.net',
            phone: '(598)513-2302',
            address: { streetAddress: '4307 Vestibulum Ln', city: 'Long Beach', state: 'IA', zip: '82034' },
            description:
                'velit libero lacus fringilla suspendisse molestie magna etiam lacus odio malesuada rutrum lorem magna sapien odio etiam consectetur odio vitae adipiscing massa sed consequat consequat sagittis massa porta aenean pulvinar dolor mattis',
        },
        {
            id: 1,
            firstName: 'Manish',
            lastName: 'Hancock',
            email: 'RMcnulty@tortor.io',
            phone: '(549)374-1799',
            address: { streetAddress: '9047 Pretium Dr', city: 'Newington', state: 'TX', zip: '45462' },
            description:
                'sit at at neque tempor ac ac odio morbi turpis aliquam consequat nec suspendisse vestibulum porta tellus malesuada ante dolor curabitur odio porta morbi elit turpis rutrum tellus pulvinar magna molestie curabitur',
        },
        {
            id: 291,
            firstName: 'Sharful',
            lastName: 'Grimes',
            email: 'FKnowlton@dui.com',
            phone: '(780)892-4932',
            address: { streetAddress: '3906 Nullam Dr', city: 'Fort Collins', state: 'RI', zip: '75924' },
            description:
                'hendrerit morbi odio risus porta placerat morbi ante mattis porttitor velit mattis placerat adipiscing ante facilisis pharetra porta rutrum tortor donec amet libero fringilla amet lacus vitae et pharetra consectetur ante sed',
        },
        {
            id: 158,
            firstName: 'Aman',
            lastName: 'Nacita',
            email: 'AWray@pretium.com',
            phone: '(641)899-4055',
            address: { streetAddress: '6225 Amet Ln', city: 'Boston', state: 'AZ', zip: '12493' },
            description:
                'tortor nec sed augue convallis sagittis etiam at ante ac lorem turpis etiam at amet molestie adipiscing porta nec nullam ac amet sit sit at odio consectetur sit porta lorem eget sagittis',
        },
        {
            id: 361,
            firstName: 'Charisse',
            lastName: 'Mcwethy',
            email: 'VEverly@magna.org',
            phone: '(657)874-7384',
            address: { streetAddress: '9953 Neque Rd', city: 'Santa Clarita', state: 'IA', zip: '28662' },
            description:
                'mattis tortor aliquam risus amet sit dolor mi adipiscing tellus facilisis at sed dolor tincidunt ac ipsum pulvinar tellus massa sapien dolor at magna ipsum consequat sapien sit non vestibulum et sit',
        },
        {
            id: 482,
            firstName: 'Gale',
            lastName: 'Moore',
            email: 'TNitzky@eros.io',
            phone: '(794)500-2964',
            address: { streetAddress: '5104 Odio Ave', city: 'Furlong', state: 'OH', zip: '87647' },
            description:
                'adipiscing scelerisque amet et vestibulum hendrerit augue tincidunt in sit tempor mi ipsum sed tortor tincidunt id magna ac pulvinar convallis amet mi aliquam orci pretium porttitor pharetra fringilla neque pulvinar pharetra',
        },
        {
            id: 144,
            firstName: 'Milton',
            lastName: 'Zuniga',
            email: 'CFrench@vel.gov',
            phone: '(631)928-6645',
            address: { streetAddress: '6428 Risus Dr', city: 'Cranford', state: 'NC', zip: '28408' },
            description:
                'dui vestibulum ac sapien odio sollicitudin elit amet tortor sed mattis fringilla facilisis suspendisse mattis porta risus amet sed neque mattis sit neque nec lorem augue ipsum turpis aenean ac ipsum sed',
        },
        {
            id: 294,
            firstName: 'Linnette',
            lastName: 'Walls',
            email: 'RRehnke@mattis.net',
            phone: '(774)617-5359',
            address: { streetAddress: '2284 Magna Dr', city: 'New Millport', state: 'NE', zip: '68690' },
            description:
                'sit dolor pharetra sed ac aenean eros augue lorem mattis aenean amet vitae dolor aliquam sit augue velit mi adipiscing vel malesuada aenean lacus vestibulum tortor massa donec tortor ipsum aenean vestibulum',
        },
        {
            id: 269,
            firstName: 'Deirdre',
            lastName: 'Roethlisberger',
            email: 'KElshoff@vitae.net',
            phone: '(462)557-1425',
            address: { streetAddress: '139 Suspendisse Ct', city: 'Huntsville', state: 'AZ', zip: '57917' },
            description:
                'augue at ipsum tincidunt dolor orci risus orci convallis non mi orci in odio sit nec dolor pharetra aliquam dolor ipsum tincidunt scelerisque convallis vitae quis pharetra etiam ipsum vestibulum sed ipsum',
        },
        {
            id: 769,
            firstName: 'Drew',
            lastName: 'Jean',
            email: 'KAtkins@sapien.gov',
            phone: '(341)393-7365',
            address: { streetAddress: '8019 Curabitur Ct', city: 'Simi Valley', state: 'MS', zip: '66751' },
            description:
                'sagittis nec magna quis orci vitae rutrum tincidunt suspendisse tortor vel lacus sed sed ipsum neque aenean sit aenean mi tortor aliquam tincidunt ac sed porta mattis massa aliquam magna id sed',
        },
        {
            id: 204,
            firstName: 'Lakshmi',
            lastName: 'Poole',
            email: 'OHaft@sed.com',
            phone: '(222)418-4016',
            address: { streetAddress: '9137 Odio Ct', city: 'Cincinnati', state: 'MD', zip: '42210' },
            description:
                'mi libero augue porta eros velit curabitur suspendisse massa sit sed neque ipsum dolor sit malesuada morbi sit ipsum dui dolor nullam fringilla vitae vitae massa ipsum morbi consectetur mattis morbi non',
        },
        {
            id: 704,
            firstName: 'Yan',
            lastName: 'Mckinney',
            email: 'PPlatt@nec.org',
            phone: '(277)151-8653',
            address: { streetAddress: '1148 Aliquam Ct', city: 'Waukesha', state: 'FL', zip: '62636' },
            description:
                'consectetur massa tincidunt quis malesuada placerat consectetur non ante nunc ipsum etiam quis ipsum amet odio pulvinar dolor lorem sit pretium consectetur tortor mi tellus turpis nunc consequat amet placerat odio pharetra',
        },
        {
            id: 801,
            firstName: 'Matt',
            lastName: 'Finke',
            email: 'JFoxen@consectetur.io',
            phone: '(123)509-7251',
            address: { streetAddress: '8072 Amet Ave', city: 'Cincinnati', state: 'WY', zip: '84582' },
            description:
                'tellus pharetra massa tincidunt ipsum lacus at dolor sapien sit orci quis elementum sed tellus sed pulvinar rutrum facilisis eget dui facilisis sed at dolor mattis vitae nullam dolor nec malesuada at',
        },
        {
            id: 108,
            firstName: 'Vivian',
            lastName: 'Dover',
            email: 'TPyle@rutrum.io',
            phone: '(392)179-0281',
            address: { streetAddress: '6898 Aliquam Ln', city: 'Lenoir', state: 'MI', zip: '31724' },
            description:
                'placerat sit dolor dui pretium eros dui tempor hendrerit orci porta nunc ante malesuada elit lacus massa porttitor nec at aenean eget ipsum pretium augue scelerisque malesuada nec vestibulum vitae massa suspendisse',
        },
        {
            id: 833,
            firstName: 'Wyatra',
            lastName: 'Fitzgerald',
            email: 'CBorgford@tortor.ly',
            phone: '(210)308-0053',
            address: { streetAddress: '9257 Lacus Dr', city: 'El Dorado', state: 'DC', zip: '71573' },
            description:
                'tellus sollicitudin hendrerit nullam sed sed libero pharetra malesuada nec et nullam dolor at suspendisse ipsum amet lacus magna et magna nunc mattis dolor velit malesuada convallis pulvinar nec odio adipiscing pharetra',
        },
        {
            id: 451,
            firstName: 'Leela',
            lastName: 'Tupper',
            email: 'JRoy@lorem.net',
            phone: '(445)850-6156',
            address: { streetAddress: '7343 Vitae Rd', city: 'Brookville', state: 'RI', zip: '17285' },
            description:
                'libero lorem in aliquam placerat sagittis consectetur vitae libero sapien vitae placerat ante rutrum donec malesuada tortor vestibulum vestibulum tincidunt vel dolor risus tincidunt suspendisse velit magna nec sollicitudin at tortor pretium',
        },
        {
            id: 800,
            firstName: 'Noriess',
            lastName: 'Belcher',
            email: 'DLaventure@sed.ly',
            phone: '(443)668-5135',
            address: { streetAddress: '1799 Pulvinar Rd', city: 'Mount Vernon', state: 'OH', zip: '74450' },
            description:
                'rutrum curabitur pharetra amet magna tortor lorem libero convallis ac hendrerit consequat dui odio fringilla dolor rutrum turpis consequat elementum tempor hendrerit sed placerat tempor mattis mi vestibulum orci scelerisque elit malesuada',
        },
        {
            id: 145,
            firstName: 'Jawdat',
            lastName: 'Strong',
            email: 'GHarkey@porta.com',
            phone: '(156)492-0242',
            address: { streetAddress: '1385 Sed Ave', city: 'Galveston', state: 'SD', zip: '37093' },
            description:
                'dolor pharetra magna vel sit nec magna lorem fringilla sed sit adipiscing orci vitae nunc facilisis orci odio lacus ipsum fringilla vestibulum lectus lectus neque rutrum aenean odio ipsum malesuada orci sed',
        },
        {
            id: 666,
            firstName: 'Adam',
            lastName: 'Horman',
            email: 'JHesler@risus.org',
            phone: '(814)344-2502',
            address: { streetAddress: '3904 Fringilla Rd', city: 'Rachel', state: 'OR', zip: '57057' },
            description:
                'aliquam pharetra sed dui velit fringilla vitae lacus odio amet ipsum aliquam sollicitudin magna fringilla adipiscing malesuada at aenean placerat pharetra quis nec nullam lacus morbi et nullam lorem id rutrum et',
        },
        {
            id: 610,
            firstName: 'Rodney',
            lastName: 'Phuan',
            email: 'EReinhardt@odio.io',
            phone: '(359)725-6833',
            address: { streetAddress: '378 Egestas Dr', city: 'Denver', state: 'KY', zip: '57799' },
            description:
                'pulvinar ipsum sapien lorem convallis lectus augue lorem tincidunt ac molestie risus libero dolor convallis egestas elementum placerat non vestibulum aliquam sagittis non et vel eget sed lectus scelerisque sollicitudin nec consectetur',
        },
    ];

    return (
        <>
            {/*@ts-ignore*/}
            <SWrapper>
                <div></div>
                <div></div>
                <DataTable />
                {data &&
                    data.map((item, i) => {
                        <div key={uniqueKey(item.firstName, i)}>
                            <div>{item.id}</div>
                            <div>{item.firstName}</div>
                            <div>{item.lastName}</div>
                            <div>{item.email}</div>
                            <div>{item.phone}</div>
                        </div>;
                    })}
            </SWrapper>
        </>
    );
};
