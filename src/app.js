import Twit from 'twit';
import natural from 'natural';

// connect to twitter
const T = new Twit({
  consumer_key: 'np5qK4gvGPPhj8WxZ77kkcsHB',
  consumer_secret: '2xIhrUORakh6RtG6PIGMJY0T0Lwy3NZRQn8JzZS9lFSSeD4doK',
  access_token: '902026514073395200-wPiitZ263vgwothAIia27ZvgP9aKj9N',
  access_token_secret: '9tkEBzY9QpMeFUw5mQ5qGwoEReVuYgZ3vwrhbiutFj3ZE',
  timeout_ms: 60*1000, // optional HTTP request timeout to apply to all requests.
});

// get ready to do some text classification
const classifier = new natural.BayesClassifier();

// MAPS training data
classifier.addDocument('Sketch & description of the settlement at Sydney Cove Port Jackson in the County of Cumberland taken by a transported convict on the 16th of April, 1788, which was not quite 3 months after Commodore Phillips\'s landing there [cartographic material] F. F. delineavit.', 'Maps');
classifier.addDocument('Hand Coloured Map - One of only two copies known.', 'Maps');
classifier.addDocument('Neele sculpt. Strand. Published July 24th 1789 by R. Cribb No. 288 High Holborn. Price 2s coloured. Sydney Cove lies 3 leagues to the northward of Botany Bay which is situated in Lat. 34 S : Long 151 E. Probably by Francis Fowkes, a former navy midshipman transported for seven years for theft of a great coat and boots. Trained in drawing, he left maps and sketches incl. those of Norfolk Island. Rare early engraving of the settlement listing the eleven ships of the First Fleet, with \'References\' marking the buildings, tents, sawpits, workshops, storehouses and gardens. The First Fleet at anchor at Sydney Cove.', 'Maps');

//TRAVEL training data
classifier.addDocument('See for yourself [picture] : the Blue Mountains of New South Wales / H. Rousel. 1 colour poster.', 'Travel');
classifier.addDocument('Katoomba, N.S.W. : Katoomba Shire Council, ca.1949. travel poster', 'Travel');
classifier.addDocument('Artist\'s impression of the Blue Mountains which includes the waratah the floral symbol of the state of New South Wales. Foot of title: For information - write Town Clerk Katoomba, N.S.W. Australia.', 'Travel');

// PORTRAITS traning data
classifier.addDocument('Portrait of Nicole Kidman. Graphic Materials , Photographs. 1 colour photoprint', 'Portraits');
classifier.addDocument('An unpublished photo of actor Nicole Kidman from a fashion shoot for Cosmopolitan magazine.', 'Portraits');
classifier.addDocument('Right time, right place : Lewis Morley photographs from 1960 to 1992. Eye 4 photography', 'Portraits');

// TRANSPORT training data
classifier.addDocument('Dirigible over Tamarama. The "dirigible" was a ride at Wonderland, Tamarama. Published in: Sydney : a celebration in pictures (Millenium special, Sunday Telegraph, 14 Nov 1999).', 'Transport');
classifier.addDocument('airships, cliffs, cable cars (aerial), Tamarama Beach (N.S.W.). Airport, flying, airplane. Transport, planes trains automobiles. Tram, Light rail, bicycle, motorbike', 'Transport');
//classifier.addDocument('', 'Transport');

// CURIOS traning data
classifier.addDocument('Cartier hairpin box belonging to Nellie Melba, 1918. Objects. 1 hairpin box. Presented by Mrs Corona Feakes, 1953.', 'Curios');
classifier.addDocument('Donor\'s letter of offer (undated, received 1953) states the hairpin box was "presented to me by my friend the late Dame Nellie Melba".', 'Curios');
classifier.addDocument('Inscribed "Cartier" and "NM Feb 15 1918 New York" in a circular design on the base. Melba, Nellie, Dame, 1861-1931. jewellery, jewelry, boxes & cases, gold, diamonds, decorative art, Exhibited in Possessed : an exhibition of treasures, Stranger than fiction, A fine possession: jewellery and identity', 'Curios');

// LOVE traning data
classifier.addDocument('Miss Paterson and Miss Taylor reading Valentine’s Day cards, c1875 / American & Australasian Photographic Company.', 'Love');
classifier.addDocument('Adult Females, interiors, greetings cards, letters, portraits, reading, Valentine’s Day.', 'Love');
classifier.addDocument('Love. romance. sex. gender. Physical attraction. Romantic.', 'Love');

// ANIMALS traning data
//classifier.addDocument('Aylmer Bourke Lambert (1761-1842) was Vice President of the Linnaean Society of London for nearly 50 years. He was a friend and correspondent of Sir Joseph Banks, and took a great interest in the botanical and zoological discoveries emerging from New Holland in the late 18th and early 19th centuries, as they were transmitted back to London, whether as living or dead specimens, as seeds, or as drawings. Lambert compiled the collection from Surgeon General John White\'s specimens and drawings brought from Sydney to London in 1795. Edward Smith Stanley, 13th Earl of Derby, KG (1775-1851), was a legendary collector and botanist, President of the Linnaean Society and of the Zoological Society of London. By the time of his death in 1851, his menagerie and aviary on 100 acres of land and 70 acres of water at Knowsley, just a few miles east of Liverpool, included over 100 species of mammals and 300 species of birds, the zoological museum in the house contained over 20,000 specimens of mammals, birds, eggs and lower vertebrates, and the library an unparalleled collection of natural history drawings and books. Earl of Derby acquired the drawings from Lambert\'s estate sale in 1842. TAL & Dai-ichi Life Derby collection of natural history watercolours, 1790s / compiled by Aylmer Bourke Lambert ; acquired by the 13th Earl of Derby.', 'Animals');
//classifier.addDocument('Six albums comprising 745 watercolours (one landscape, 10 of quadrupeds, 326 of birds, 32 of fish and 376 of plants), including works by and after Thomas Watling, the Port Jackson Painter, The Sydney Bird Painter, and others, the majority dating to the first decade following settlement. SERIES 01 (Volumes 01-03) New South Wales drawings (‘The Lambert Drawings’), 225 watercolours in three volumes together with John Latham\'s autograph letter signed to Aylmer Bourke Lambert, [Romsey] 26 January 1800, concerning the return and contents of the albums, 3 pages, with address leaf. Volume 01 New South Wales drawings (‘The Lambert Drawings’), 81 watercolours Volume 02 New South Wales drawings (‘The Lambert Drawings’), 95 watercolours Volume 03 New South Wales drawings (‘The Lambert Drawings’), 49 watercolours Folio (430 x 280mm.), contemporary calf gilt, rebacked by Hodgson, Liverpool, the calf spine gilt in compartments with red and dark green morocco lettering pieces titled ‘NEW SOUTH WALES DRAWINGS’, the 13th Earl of Derby’s bookplate on front pastedown. 114 of the 225 watercolours in these three albums are on paper watermarked 1794 / J WHATMAN’ (the others sheets not watermarked, but probably most from the same stock). The watermarks on the Watling drawings (Natural History Museum, London) appear to be earlier (these include J Whatman; Britannia; Horn (bugle); C Taylor; L Munn; Fleur de lys). The inscriptions on the reverse of several of the plates in volume 1, titling the subjects, are in a contemporary hand, and the titles are similar to, but not identical with, the titles on some of the Watling drawings. 200 of the 225 subjects that comprise the ‘Lambert Drawings’ relate to works in the Watling Collection, and of the 25 that are not in Watling, mostly birds, at least four (volume 1, pls 12, 21 and 32, and volume 2, pl. 2) are subjects which relate to listed but now lost Watling drawings. SERIES 02 (Volume 04) Zoology of N. [New] Holland etc., 32 watercolours of fish and 112 watercolours of birds SERIES 03 (Volumes 05-06) Drawings of plants of New South Wales, botanical watercolours in two albums Volume 05 Drawings of plants of New South Wales, approximately 259 botanical watercolours Volume 06 Drawings of plants from New South Wales, 113 botanical watercolours These 372 botanical drawings add significantly to the smaller groups of 59 botanical drawings in the Watling Collection and 15 botanical drawings in the Banks Ms34 collections in the Natural History Museum, London. Volume 05: ‘DRAWINGS OF PLANTS OF NEW SOUTH WALES’ includes just one sheet signed (twice, with initials) by Thomas Watling. The majority of the watercolours in the album by one or two hands, the six watercolours inscribed with Paterson’s name on the versos are on a heavier wove paper without watermark and are by another hand. The inscriptions on the verso of most of the sheets possibly in White or Watling’s hand. One inscription, on the reverse of 140 is dated (‘October 1794 leaf and flower 2/3 the Natural Size. very common about runs of water & moist swampy grounds. Flowers in Sept. & Octr.’) and is on paper watetmarked ‘1794 / J WHATMAN’. Volume 06: DRAWINGS OF PLANTS FROM NEW SOUTH WALES’, the watermarks, most of which are earlier than the one dated watermark which features in the album (J WHATMAN 1794) suggest these drawings may pre-date the drawings in Volume 05 (Drawings of Plants of New South Wales). Britannia, the horn (bugle) and J WHATMAN are all watermarks found on sheets in the Watling and Banks Ms34 Collections in the Natural History Museum, London. The inscription on one page “Hort: Lee. Hammersmith. / 1798.” refers to James Lee’s famous horticultural nursery which pioneered the introduction of plants from New Holland. The Mountain Devil (Lambertia formosa, named for Aylmer Bourke Lambert) of New South Wales was among the first Australian plants to be brought into cultivation in Europe. ‘In 1775 Lee and Kennedy of the Vineyard Nursery, Hammersmith - then a village outside London - offered for sale the first Australian plants, Casuarina quadrivalvis (Allocasuarina strlcta). In 1785, they offered: Banksia oblongifolia, B.serrata, Fabrica laevigata (Leptospermum laevigatum) Lambertia formosa, Melaleuca armillaris with an addition in 1789 of Metrosideros hispida (Angophora hispida) ,.. James Lee was especially interested in Australian plants and, at his own expense, sent out David Burton to collect seed and plants for the firm. In about 1787 Lee published a 4 page pamphlet entitled ‘Rules for Collection and Preserving Seed from Botany Bay’. ... Perhaps Lee’s pamphlet was intended for settlers, military, warders and their families, as well as convicts who would become free men when their sentences expired. Seed collected by these early settlers from the Port Jackson area included Acacia linifolia, A.juniperina, A.myrtifolia, A.verticillata, Eucalyptus resinifera, E.robusta, Goodia lotifolia, Isopogon anemonifolius, Platylobium parvislorurum, P.formosus and Pultenaea retusa.’ (B. Halliwell, ‘Some Australian plants in cultivation in England by 1800’, Eucryphia, newsletter of the Australian Plants Society, Tasmania, September 2002)', 'Animals');
//classifier.addDocument('These six albums were purchased from the Lambert sale by Lord Derby, specifically from Lambert’s ‘Valuable Botanical Library’ sold over 3 days, 18-20 April 1842. The albums remained in the Derby library until 2011. Watling, Thomas, b. 1762, Sydney Bird Painter, Port Jackson Painter, Lambert, Aylmer Bourke, 1761-1842', 'Animals');

// QUOTES traningdata
classifier.addDocument('Quote: "In books lies the soul of the whole past time / The articulate and audible voice of the past / When the body and material of it has altogether / Vanished like a dream"', 'Quotes');
classifier.addDocument('Quotes, quotable quotes. Quotations, citations', 'Quotes');
//classifier.addDocument('', 'Quotes');

// GO!
classifier.train();

// twitter params
const twitterHandle = '@dxlabtest';
const hashTag = '#dxtest';

// the seven, actually EIGHT, subjects are:
// Curios, Love, Maps, Travel, Portraits, Transport, Animals, Quotes
const subjects = { 0:'Curios', 1:'Love', 2:'Maps', 3:'Travel', 4:'Portraits', 5:'Transport', 6:'Animals', 7:'Quotes' };

// This array converts them to vending machine columns numbers that the user will type in
const columns = { 'Curios': 1, 'Love': 2, 'Maps': 3, 'Travel': 4, 'Portraits': 5, 'Transport': 6, 'Animals': 7, 'Quotes': 8 };

// The seven rows of the vending machine are labelled thusly:
const rows = { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: '1.', 5: '2.', 6: '3.' };
let row,column,clss;

///////////////////////////////////////////////////////////////////////////

// keep an eye out for people tweeting at us
let stream = T.stream('statuses/filter', { track: twitterHandle, language: 'en' });

// set up some connection monitoring
stream.on('connect', function (request) {
  console.log('Connection requested... '+Date.now());
});
stream.on('disconnect', function (disconnectMessage) {
  console.log('_x_x_ disconnect _x_x_ '+disconnectMessage);
});
stream.on('connected', function (response) {
  console.log('CONNECTED! '+Date.now());
});
stream.on('reconnect', function (request, response, connectInterval) {
  console.log('...re-connected '+Date.now());
});
stream.on('warning', function (warning) {
  console.log('### WARNING! ### '+warning);
});
stream.on('limit', function (limitMessage) {
  console.log('**LIMIT MSG** '+limitMessage);
});

///////////////////////////////////////////////////////////////////////////

// we got one!
stream.on('tweet', (tweet) => handleTweet(tweet));

export function handleTweet(tweet) {

  console.log('--------------------------------------------------');
  console.log('tweet '+Date.now());

  // check it isn't a re-tweet and does have the correct hash tag
  if ((tweet.text.substring(0,2)!='RT')
    &&(tweet.text.includes(hashTag))) {

    // log incoming tweet
    console.log('ACTION: '+tweet.text);

    // get the user ID (as string)
    let uid = tweet.user.id_str;

    // now get 20 of that user's tweet and classify them!
    T.get('statuses/user_timeline', { user_id : uid , count: 20 })
      .catch(function (err) {
        console.log('caught error', err.stack);
      })
      .then(function (result) {
        // `result` is an Object with keys "data" and "resp".

        let data = result.data;
        console.log('Asked for 20 tweets and got: '+data.length);
        let l = data.length;
        let twts = '';
        if (l>1) {
          for (let i = 1; i < l; i++) { // skip first tweet as it is the request for suggestion
            if(Math.random()>0.45) { // randomly pick about half their previous 20 tweets
              twts += data[i].text+" . ";
            }
          }
          if (tweet.user.description) {
            // add the user description for more matching goodness
            twts += tweet.user.description;
          }
          console.log(twts);
          clss = classifier.classify(twts);
          column = columns[clss];
          console.log(clss);

          // spin the wheeel!
          if (Math.random()>0.7) {
            column = Math.floor(Math.random()*8);
            clss = subjects[column];
            console.log('BINGO!!!!! random selection!! '+clss);
          }
        } else {
          // zero tweets (might be set to private) - pick something random
          console.log('random selection...');
          column = Math.floor(Math.random()*8);
          clss = subjects[column];
        }

        // OK do something with the results
        row = Math.floor(Math.random()*7);
        let btn = rows[row]+columns[clss];
        let resp = 'OK @'+tweet.user.screen_name+' from the look of your tweets you might be interested in '+clss+'. Try item '+btn;

        // T.post('statuses/update', { status: resp }, function(err, data, response) {
          console.log('REPLIED: '+resp);
        // });

      });

  } else {
    console.log(`DO NOT ACTION: ${tweet.text} FROM @${tweet.user.screen_name}`);
  }

}
