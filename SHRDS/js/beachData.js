function loadOptions() {
    var beachOptions =
        "<datalist id='mylist'>" +
        "<option>Serasa Beach</option>" +
        "<option>Muara Beach</option>" +
        "<option>Meragang Beach</option>" +
        "<option>Berakas Beach</option>" +
        "<option>Tungku Beach</option>" +
        "<option>The Empire Hotel and Country Club</option>" +
        "<option>Jerudong Beach</option>" +
        "<option>Penanjong Beach</option>" +
        "<option>Seri Kenangan Beach</option>" +
        "<option>Telisai Beach and Recreational Park</option>" +
        "<option>Sg Liang Beach</option>" +
        "<option>Water Sport Lumut Beach</option>" +
        "<option>Seria Beach</option>" +
        "<option>Panaga</option>" +
        "<option>Belait Beach</option>" +
        "<option>delete</option>" +
        "<option>delete1</option>" +
        "<option>FLAGSTAFF/DURANBAH</option>" +
        "<option>LETITIA SPIT</option>" +
        "<option>FINGAL</option>" +
        "<option>DREAMTIME/KINGSCLIFF/CUDGEN</option>" +
        "<option>Dreamtime</option>" +
        "<option>North Kingscliff</option>" +
        "<option>Kingscliff/Cudgen</option>" +
        "<option>BOGANGAR/CABARITA</option>" +
        "<option>NORRIES HEAD</option>" +
        "<option>NORTH BEACH/SOUTH BOGANGAR</option>" +
        "<option>HASTINGS POINT INLET</option>" +
        "<option>CUDGERA</option>" +
        "<option>POTTSVILLE</option>" +
        "<option>Mooball - New Brighton</option>" +
        "<option>MOOBALL</option>" +
        "<option>WOOYUNG</option>" +
        "<option>CRABBES CREEK</option>" +
        "<option>NEW BRIGHTON</option>" +
        "<option>Tyagarah</option>" +
        "<option>BRUNSWICK HEADS</option>" +
        "<option>BELONGIL</option>" +
        "<option>Byron Bay</option>" +
        "<option>MAIN (BYRON BAY)</option>" +
        "<option>CLARKS</option>" +
        "<option>THE PASS</option>" +
        "<option>WATEGOS</option>" +
        "<option>LITTLE WATEGOS</option>" +
        "<option>Tallows/Suffolk Park/Broken Head</option>" +
        "<option>TALLOWS</option>" +
        "<option>SUFFOLK PARK</option>" +
        "<option>BROKEN HEAD</option>" +
        "<option>KINGS 1</option>" +
        "<option>KINGS 2</option>" +
        "<option>BRAYS</option>" +
        "<option>WHITES</option>" +
        "<option>SEVEN MILE/LENNOX HEAD</option>" +
        "<option>BOULDER NORTH</option>" +
        "<option>BOULDER SOUTH</option>" +
        "<option>Skennars Head Rock Platform</option>" +
        "<option>SHARPS</option>" +
        "<option>Flat Rocks</option>" +
        "<option>ANGELS NORTH</option>" +
        "<option>ANGELS SOUTH</option>" +
        "<option>Black Head</option>" +
        "<option>SHELLY</option>" +
        "<option>Ballina Head</option>" +
        "<option>LIGHTHOUSE</option>" +
        "<option>South Ballina - Evans Head</option>" +
        "<option>SOUTH BALLINA</option>" +
        "<option>BESWICKS</option>" +
        "<option>ROBINS</option>" +
        "<option>PATCHES</option>" +
        "<option>BROADWATER</option>" +
        "<option>EVANS HEAD</option>" +
        "<option>AIRFORCE</option>" +
        "<option>RAZORBACK/LITTLE</option>" +
        "<option>RED HILL</option>" +
        "<option>CHINAMANS NORTH</option>" +
        "<option>CHINAMANS SOUTH</option>" +
        "<option>NEW ZEALAND</option>" +
        "<option>Ten Mile Beach - Shark Bay</option>" +
        "<option>TEN MILE</option>" +
        "<option>SHARK BAY</option>" +
        "<option>WOODY BAY</option>" +
        "<option>BACK</option>" +
        "<option>FRAZER REEF</option>" +
        "<option>BLUFF</option>" +
        "<option>ILUKA</option>" +
        "<option>TURNERS</option>" +
        "<option>YAMBA</option>" +
        "<option>CONVENT/MC KITTRICKS</option>" +
        "<option>PIPPI</option>" +
        "<option>BARRI</option>" +
        "<option>GREEN POINT</option>" +
        "<option>ANGOURIE</option>" +
        "<option>ANGOURIE POINT</option>" +
        "<option>BACK ANGOURIE/ANGOURIE BAY</option>" +
        "<option>LITTLE SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>CAVES</option>" +
        "<option>PLUMBAGO</option>" +
        "<option>RED CLIFF</option>" +
        "<option>MAIN/BROOMS HEAD</option>" +
        "<option>NORTH SANDON</option>" +
        "<option>LITTLE PEBBLY</option>" +
        "<option>PEBBLY</option>" +
        "<option>HATCHCOVER</option>" +
        "<option>SANDON/ILLAROO</option>" +
        "<option>ILLAROO SOUTH</option>" +
        "<option>ROCKY POINT</option>" +
        "<option>MINNIE WATER</option>" +
        "<option>PIPERS HILL</option>" +
        "<option>TREE PT (1)</option>" +
        "<option>TREE PT (2)</option>" +
        "<option>TREE PT (3)</option>" +
        "<option>BACK/MINNIE WATERS</option>" +
        "<option>DIGGERS CAMP NORTH</option>" +
        "<option>DIGGERS CAMP SOUTH</option>" +
        "<option>STONY</option>" +
        "<option>WILSONS</option>" +
        "<option>WOOLI</option>" +
        "<option>JONES</option>" +
        "<option>BARCOONGERE ROCKS 1</option>" +
        "<option>BARCOONGERE ROCKS 2</option>" +
        "<option>FRESHWATER</option>" +
        "<option>PEBBLY</option>" +
        "<option>STATION CREEK</option>" +
        "<option>RED ROCK (NORTH)</option>" +
        "<option>RED ROCK (SOUTH)</option>" +
        "<option>CORINDI (NORTH)</option>" +
        "<option>CORINDI/ARRAWARRA</option>" +
        "<option>ARRAWARRA HEADLAND</option>" +
        "<option>OCEAN VIEW</option>" +
        "<option>MULLAWAY</option>" +
        "<option>SOUTH MULLAWAY</option>" +
        "<option>MULLAWAY HEAD</option>" +
        "<option>SAFETY</option>" +
        "<option>WOOLGOOLGA</option>" +
        "<option>WOOLGOOLGA/BACK</option>" +
        "<option>HEARNS LAKE</option>" +
        "<option>SANDY</option>" +
        "<option>FIDDAMANS</option>" +
        "<option>EMERALD</option>" +
        "<option>SHELLY</option>" +
        "<option>MOONEE</option>" +
        "<option>Lookatmenow Rock Platform</option>" +
        "<option>SAPPHIRE</option>" +
        "<option>RIECKS POINT</option>" +
        "<option>NAUTILUS/PELICAN</option>" +
        "<option>CAMPBELLS</option>" +
        "<option>HILLS NORTH</option>" +
        "<option>OPAL COVE</option>" +
        "<option>KORORA</option>" +
        "<option>CHARLESWORTH BAY/PACIFIC BAY</option>" +
        "<option>Digger's Head</option>" +
        "<option>DIGGERS NORTH (AAUNUKA)</option>" +
        "<option>DIGGERS SOUTH</option>" +
        "<option>MACCAULEYS HEADLAND</option>" +
        "<option>PARK</option>" +
        "<option>South Golden</option>" +
        "<option>PARK SOUTH</option>" +
        "<option>Mutton Bird Island</option>" +
        "<option>COFFS HARBOUR (JETTY)</option>" +
        "<option>South Coffs Island</option>" +
        "<option>GALLOWS</option>" +
        "<option>BOAMBEE</option>" +
        "<option>Boambee Headland</option>" +
        "<option>SAWTELL</option>" +
        "<option>BONVILLE</option>" +
        "<option>Bonville Head</option>" +
        "<option>NORTH</option>" +
        "<option>HUNGRY HEAD NORTH (SOUTH)</option>" +
        "<option>HUNGRY HEAD</option>" +
        "<option>HUNGRY HEAD SOUTH</option>" +
        "<option>Chatherine Hill Rock Platform</option>" +
        "<option>Catherine Hill Bay Platform</option>" +
        "<option>WENONAH HEAD/VALLA</option>" +
        "<option>Narrabeen Head</option>" +
        "<option>VALLA HEADLAND</option>" +
        "<option>Unnamed Beach</option>" +
        "<option>VALLA SOUTH</option>" +
        "<option>HYLAND</option>" +
        "<option>NAMBUCCA NORTH</option>" +
        "<option>MAIN</option>" +
        "<option>BEILBYS</option>" +
        "<option>SHELLY</option>" +
        "<option>ENTRANCE</option>" +
        "<option>FORSTER (SOUTH)/SCOTTS HEAD</option>" +
        "<option>LITTLE</option>" +
        "<option>SCOTTS HEAD</option>" +
        "<option>MIDDLE</option>" +
        "<option>GRASSY</option>" +
        "<option>STUARTS POINT</option>" +
        "<option>BACK</option>" +
        "<option>HORSESHOE BAY</option>" +
        "<option>FRONT</option>" +
        "<option>LITTLE BAY</option>" +
        "<option>GAP</option>" +
        "<option>COBBLE</option>" +
        "<option>NORTH SMOKY 1</option>" +
        "<option>NORTH SMOKY 2</option>" +
        "<option>NORTH SMOKY 3</option>" +
        "<option>South Smoky - Hat Head</option>" +
        "<option>SOUTH SMOKY 1</option>" +
        "<option>SOUTH SMOKY 2</option>" +
        "<option>HAT HEAD</option>" +
        "<option>LITTLE</option>" +
        "<option>ISLAND</option>" +
        "<option>GAP</option>" +
        "<option>CONNORS</option>" +
        "<option>THIRD</option>" +
        "<option>Killick Beach</option>" +
        "<option>KILLICK</option>" +
        "<option>CRESCENT HEAD</option>" +
        "<option>PEBBLY</option>" +
        "<option>GOOLAWAH</option>" +
        "<option>RACECOURSE HEAD</option>" +
        "<option>DELICATE NOBBY</option>" +
        "<option>BIG HILL (2)</option>" +
        "<option>BARRIES BAY</option>" +
        "<option>POINT PLOMER</option>" +
        "<option>QUEENS HEAD</option>" +
        "<option>NORTH SHORE</option>" +
        "<option>PELICAN POINT</option>" +
        "<option>TOWN</option>" +
        "<option>OXLEYS</option>" +
        "<option>ROCKY</option>" +
        "<option>FLYNNS</option>" +
        "<option>NOBBYS</option>" +
        "<option>SHELLY</option>" +
        "<option>MINERS (N)</option>" +
        "<option>MINERS NORTH</option>" +
        "<option>MINERS SOUTH</option>" +
        "<option>TACKING POINT NORTH</option>" +
        "<option>TACKING POINT/LIGHTHOUSE</option>" +
        "<option>LIGHTHOUSE</option>" +
        "<option>LAKE CATHIE</option>" +
        "<option>RAINBOW/BONNY HILLS</option>" +
        "<option>BOAT RAMP</option>" +
        "<option>BARTLETTS</option>" +
        "<option>SHARK</option>" +
        "<option>GRANTS / NORTH HAVEN</option>" +
        "<option>PILOT</option>" +
        "<option>WASH HOUSE</option>" +
        "<option>PEBBLY</option>" +
        "<option>DUNBOGAN</option>" +
        "<option>KYLIE</option>" +
        "<option>CROWDY</option>" +
        "<option>HARRINGTON</option>" +
        "<option>MANNING POINT</option>" +
        "<option>OLD BAR</option>" +
        "<option>SALTWATER</option>" +
        "<option>SALTWATER/DIAMOND</option>" +
        "<option>DIAMOND SOUTH</option>" +
        "<option>SHELLY</option>" +
        "<option>BLACK HEAD</option>" +
        "<option>PEBBLY</option>" +
        "<option>DIAMOND REEF</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>NINE MILE</option>" +
        "<option>TUNCURRY</option>" +
        "<option>FORSTER</option>" +
        "<option>PEBBLY</option>" +
        "<option>ONE MILE</option>" +
        "<option>BURGESS</option>" +
        "<option>MC BRIDES</option>" +
        "<option>CAPE HAWKE 1</option>" +
        "<option>CAPE HAWKE 2</option>" +
        "<option>JANIES CORNER</option>" +
        "<option>SEVEN MILE</option>" +
        "<option>LINDEMAN COVE</option>" +
        "<option>ELIZABETH</option>" +
        "<option>SHELLY</option>" +
        "<option>BOOMERANG</option>" +
        "<option>BLUEYS</option>" +
        "<option>SANDBAR</option>" +
        "<option>NUMBER SIX</option>" +
        "<option>NUMBER FIVE</option>" +
        "<option>NUMBER FOUR</option>" +
        "<option>NUMBER THREE</option>" +
        "<option>NUMBER TWO</option>" +
        "<option>NUMBER ONE</option>" +
        "<option>BOAT</option>" +
        "<option>LIGHTHOUSE</option>" +
        "<option>TREACHERY/YAGON</option>" +
        "<option>Old Man's Hat</option>" +
        "<option>SUBMARINE/FIONA</option>" +
        "<option>MUNGO</option>" +
        "<option>DARK POINT NORTH</option>" +
        "<option>BENNETTS</option>" +
        "<option>ZENITH</option>" +
        "<option>WRECK NORTH</option>" +
        "<option>WRECK</option>" +
        "<option>BOX</option>" +
        "<option>FLY ROADS</option>" +
        "<option>SHARK BAY</option>" +
        "<option>FINGAL</option>" +
        "<option>ANNA BAY (SAMURAI)</option>" +
        "<option>ANNA BAY (ONE MILE)</option>" +
        "<option>BOULDER</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>KINGSLEY</option>" +
        "<option>LITTLE KINGSLEY</option>" +
        "<option>FISHERMANS BAY</option>" +
        "<option>BIRUBI POINT</option>" +
        "<option>Stockton Beach</option>" +
        "<option>NEWCASTLE BIGHT/STOCKTON</option>" +
        "<option>STOCKTON</option>" +
        "<option>LITTLE PARK</option>" +
        "<option>NOBBYS HEAD</option>" +
        "<option>NOBBYS</option>" +
        "<option>NEWCASTLE</option>" +
        "<option>SUSAN GILMOUR</option>" +
        "<option>Bar/Dixon/Merewether Beach</option>" +
        "<option>BAR</option>" +
        "<option>DIXON</option>" +
        "<option>MEREWETHER</option>" +
        "<option>THE GULF</option>" +
        "<option>THE GULF (S)</option>" +
        "<option>GLENROCK/BURWOOD</option>" +
        "<option>DUDLEY</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>REDHEAD</option>" +
        "<option>NINE MILE</option>" +
        "<option>BLACKSMITHS</option>" +
        "<option>SWANSEA WALL</option>" +
        "<option>SWANSEA HEADS</option>" +
        "<option>CRABBES</option>" +
        "<option>HAMS</option>" +
        "<option>CAVES</option>" +
        "<option>STINKY POINT</option>" +
        "<option>QUARRY</option>" +
        "<option>PINNY</option>" +
        "<option>MIDDLE CAMP</option>" +
        "<option>MIDDLE CAMP SOUTH</option>" +
        "<option>Catherine Hill Bay Rock Platform</option>" +
        "<option>MOONEE</option>" +
        "<option>Moonee Rock Platform</option>" +
        "<option>LITTLE / GHOSTIES</option>" +
        "<option>Flat Island</option>" +
        "<option>TIMBER</option>" +
        "<option>BONGON</option>" +
        "<option>Bongon Head</option>" +
        "<option>Snapper Point</option>" +
        "<option>FRAZER</option>" +
        "<option>DEADMANS</option>" +
        "<option>Wybung Headland</option>" +
        "<option>LITTLE BIRDIE</option>" +
        "<option>Red Ochre Rock Platform</option>" +
        "<option>Birdie / Budgewoi / Lakes</option>" +
        "<option>Birdie Beach</option>" +
        "<option>LAKES</option>" +
        "<option>LAKES SOUTH</option>" +
        "<option>JENNY DIXONS</option>" +
        "<option>CABBAGE TREE HARBOUR</option>" +
        "<option>NORAH HEAD</option>" +
        "<option>GRAVELLY</option>" +
        "<option>SOLDIERS</option>" +
        "<option>TUGGERAH/NORTH ENTRANCE</option>" +
        "<option>THE ENTRANCE</option>" +
        "<option>BLUE BAY</option>" +
        "<option>TOOWOON BAY</option>" +
        "<option>LITTLE BAY</option>" +
        "<option>SHELLY</option>" +
        "<option>BLUE LAGOON</option>" +
        "<option>BATEAU BAY</option>" +
        "<option>FORRESTERS</option>" +
        "<option>SPOON BAY</option>" +
        "<option>Wamberal-Terrigal</option>" +
        "<option>WAMBERAL</option>" +
        "<option>TERRIGAL</option>" +
        "<option>TERRIGAL HAVEN</option>" +
        "<option>Skillion Head</option>" +
        "<option>Avoca Beach</option>" +
        "<option>NORTH AVOCA</option>" +
        "<option>AVOCA</option>" +
        "<option>Winnie Bay</option>" +
        "<option>Copacabana-Macmasters</option>" +
        "<option>COPACABANA</option>" +
        "<option>MACMASTERS</option>" +
        "<option>Mourawaring Point (Second Point)</option>" +
        "<option>LITTLE</option>" +
        "<option>Bombi Point</option>" +
        "<option>Caves Bay</option>" +
        "<option>Bouddi Point</option>" +
        "<option>MAITLAND BAY</option>" +
        "<option>Gerrin Point</option>" +
        "<option>BULLIMAH</option>" +
        "<option>PUTTY/KILLCARE</option>" +
        "<option>TALLOW</option>" +
        "<option>LITTLE TALLOW</option>" +
        "<option>Box Head</option>" +
        "<option>IRON LADDER</option>" +
        "<option>LOBSTER</option>" +
        "<option>Ocean-Umina Beach</option>" +
        "<option>OCEAN</option>" +
        "<option>UMINA</option>" +
        "<option>PEARL</option>" +
        "<option>MIDDLE HEAD</option>" +
        "<option>Palm Beach</option>" +
        "<option>NORTH PALM</option>" +
        "<option>PALM</option>" +
        "<option>Barrenjoey Headland</option>" +
        "<option>WHALE</option>" +
        "<option>Little Head</option>" +
        "<option>Dolphin Bay</option>" +
        "<option>Careel Bay Head</option>" +
        "<option>Bangalley Head</option>" +
        "<option>AVALON</option>" +
        "<option>St Michael's Cave</option>" +
        "<option>Little Avalon</option>" +
        "<option>BILGOLA</option>" +
        "<option>Bilgola Head</option>" +
        "<option>South Bilgola Headland</option>" +
        "<option>NEWPORT</option>" +
        "<option>BUNGAN</option>" +
        "<option>Bungan Head</option>" +
        "<option>Mona Vale Headland</option>" +
        "<option>THE BASIN</option>" +
        "<option>MONA VALE</option>" +
        "<option>WARRIEWOOD</option>" +
        "<option>Warriewood Blowhole</option>" +
        "<option>Turrimetta Headland</option>" +
        "<option>TURIMETTA</option>" +
        "<option>Narrabeen Headland</option>" +
        "<option>Narrabeen-Collaroy</option>" +
        "<option>NORTH NARRABEEN</option>" +
        "<option>NARRABEEN</option>" +
        "<option>SOUTH NARRABEEN</option>" +
        "<option>COLLAROY</option>" +
        "<option>Collaroy Point</option>" +
        "<option>FISHERMANS</option>" +
        "<option>LONG REEF POINT</option>" +
        "<option>BUTTER BOX</option>" +
        "<option>Long Reef - Dee Why</option>" +
        "<option>LONG REEF</option>" +
        "<option>DEE WHY</option>" +
        "<option>Dee Why Point/Headland</option>" +
        "<option>Curl Curl Beach</option>" +
        "<option>NORTH CURL CURL</option>" +
        "<option>North Curl Curl Rock Pool</option>" +
        "<option>CURL CURL</option>" +
        "<option>South Curl Curl Headland</option>" +
        "<option>FRESHWATER</option>" +
        "<option>Freshwater Headland</option>" +
        "<option>Queenscliff/North Steyne/Manly</option>" +
        "<option>QUEENSCLIFF</option>" +
        "<option>Queenscliff Headland</option>" +
        "<option>NORTH STEYNE</option>" +
        "<option>MANLY</option>" +
        "<option>Manly Point</option>" +
        "<option>FAIRY BOWER</option>" +
        "<option>SHELLY</option>" +
        "<option>Fairy Bower Point</option>" +
        "<option>Blue Fish Point</option>" +
        "<option>North Head</option>" +
        "<option>Old Mans Hat</option>" +
        "<option>Quarantine Head</option>" +
        "<option>Bondi Beach</option>" +
        "<option>NORTH BONDI</option>" +
        "<option>BONDI</option>" +
        "<option>Clarke Reserve</option>" +
        "<option>The Boot</option>" +
        "<option>Diamond Bay</option>" +
        "<option>Eastern Reserve</option>" +
        "<option>Dover Heights Reserve</option>" +
        "<option>Rodney Reserve</option>" +
        "<option>Hugh Bamford Reserve</option>" +
        "<option>Bondi Golf Course</option>" +
        "<option>Ben Buckler Point</option>" +
        "<option>Bondi Baths</option>" +
        "<option>MACKENZIES</option>" +
        "<option>TAMARAMA</option>" +
        "<option>BRONTE</option>" +
        "<option>Shark Point</option>" +
        "<option>Waverley Cemetary</option>" +
        "<option>CLOVELLY</option>" +
        "<option>Clovelly Pool Car Park</option>" +
        "<option>GORDON'S BAY</option>" +
        "<option>Dunningham Reserve Rock Platform</option>" +
        "<option>Dolphin Point</option>" +
        "<option>COOGEE</option>" +
        "<option>Grant Reserve Rock Platform</option>" +
        "<option>Trenerry Reserve Rock Platform</option>" +
        "<option>South Coogee Rock Platforms</option>" +
        "<option>Lurline Bay</option>" +
        "<option>Mahon Pool Rock Platform</option>" +
        "<option>The Stake Rock Platform</option>" +
        "<option>Maroubra Beach</option>" +
        "<option>MAROUBRA</option>" +
        "<option>SOUTH MAROUBRA</option>" +
        "<option>Little Greenie</option>" +
        "<option>Shooting Range Rock Platform</option>" +
        "<option>Yellow Rock</option>" +
        "<option>MALABAR/LONG BAY</option>" +
        "<option>Julieann Rocks</option>" +
        "<option>LITTLE BAY 1</option>" +
        "<option>LITTLE BAY 2</option>" +
        "<option>The Gutter</option>" +
        "<option>The Trap</option>" +
        "<option>Jolong Rocks</option>" +
        "<option>Cape Banks - North</option>" +
        "<option>Cape Banks - East</option>" +
        "<option>Cape Banks - West</option>" +
        "<option>Cruwe Cove</option>" +
        "<option>Henry Head</option>" +
        "<option>CONGWONG BAY 1</option>" +
        "<option>CONGWONG BAY 2</option>" +
        "<option>Bare Island</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>The Leap</option>" +
        "<option>Yena Gap/Ours</option>" +
        "<option>Kurnel</option>" +
        "<option>Cape Solander</option>" +
        "<option>Tabbagai Gap</option>" +
        "<option>Blue Hole Gap</option>" +
        "<option>Point Long Nose</option>" +
        "<option>Cape Belly</option>" +
        "<option>Voodoo</option>" +
        "<option>Doughboy Point/Voodoo</option>" +
        "<option>Greenhills - North Cronulla</option>" +
        "<option>GREENHILLS</option>" +
        "<option>WANDA</option>" +
        "<option>ELOUERA</option>" +
        "<option>NORTH CRONULLA</option>" +
        "<option>CRONULLA</option>" +
        "<option>BLACKWOODS</option>" +
        "<option>SHELLY</option>" +
        "<option>Windy Point</option>" +
        "<option>OAK PARK</option>" +
        "<option>JIBBON</option>" +
        "<option>PORT HACKING POINT</option>" +
        "<option>Shelly Beach</option>" +
        "<option>The Cobblers</option>" +
        "<option>The Waterrun</option>" +
        "<option>Marley Head</option>" +
        "<option>MARLEY</option>" +
        "<option>LITTLE MARLEY</option>" +
        "<option>WATTAMOLLA</option>" +
        "<option>Boy Martin Point</option>" +
        "<option>Providential Head</option>" +
        "<option>Curracurrang</option>" +
        "<option>Eagle Rock</option>" +
        "<option>Curracurong</option>" +
        "<option>GARIE</option>" +
        "<option>Garie North Head</option>" +
        "<option>Little Garie Point</option>" +
        "<option>LITTLE GARIE</option>" +
        "<option>NORTH ERA</option>" +
        "<option>SOUTH ERA</option>" +
        "<option>BURNING PALMS</option>" +
        "<option>WERRONG (HELL HOLE)</option>" +
        "<option>BULGO</option>" +
        "<option>UNNAMED</option>" +
        "<option>STANWELL PARK</option>" +
        "<option>COALCLIFF NORTH</option>" +
        "<option>COALCLIFF</option>" +
        "<option>SCARBOROUGH NORTH</option>" +
        "<option>SCARBOROUGH</option>" +
        "<option>WOMBARRA</option>" +
        "<option>COLEDALE</option>" +
        "<option>SHARKY</option>" +
        "<option>BRICKYARD/lLONG POINT</option>" +
        "<option>LITTLE AUSTINMER</option>" +
        "<option>AUSTINMER</option>" +
        "<option>THIRROUL</option>" +
        "<option>SOUTH THIRROUL</option>" +
        "<option>SANDON POINT</option>" +
        "<option>BULLI</option>" +
        "<option>Woonona-Bellambi</option>" +
        "<option>WOONONA</option>" +
        "<option>BELLAMBI</option>" +
        "<option>BELLAMBI POINT</option>" +
        "<option>CORRIMAL</option>" +
        "<option>East Corrimal</option>" +
        "<option>Towradgi Beach</option>" +
        "<option>TOWRADGI</option>" +
        "<option>FAIRY MEADOW</option>" +
        "<option>Puckey's Beach</option>" +
        "<option>NORTH WOLLONGONG</option>" +
        "<option>BELMORE (WOLLONGONG HARBOUR)</option>" +
        "<option>WOLLONGONG CITY</option>" +
        "<option>Flagstaff Hill</option>" +
        "<option>CONISTON</option>" +
        "<option>PORT KEMBLA HARBOUR</option>" +
        "<option>NORTH</option>" +
        "<option>MM</option>" +
        "<option>FISHERMANS</option>" +
        "<option>Hill 60 Rock Platform</option>" +
        "<option>Perkins - Windang</option>" +
        "<option>Port Kembla</option>" +
        "<option>WINDANG</option>" +
        "<option>Windang Island Rock Platform</option>" +
        "<option>WARILLA-BARRACK PT</option>" +
        "<option>SHELLHARBOUR NORTH/NUNS</option>" +
        "<option>SHELLHARBOUR</option>" +
        "<option>SHELLHARBOUR SOUTH</option>" +
        "<option>THE JETTY</option>" +
        "<option>THE MIDDY</option>" +
        "<option>BUSHRANGER BAY</option>" +
        "<option>MALONEYS</option>" +
        "<option>KILLALEA</option>" +
        "<option>MINNAMURRA</option>" +
        "<option>JONES/BOYDS</option>" +
        "<option>CATHEDRAL ROCKS</option>" +
        "<option>BOMBO</option>" +
        "<option>BLACK</option>" +
        "<option>Kiama Blowhole</option>" +
        "<option>SURF</option>" +
        "<option>KENDALLS</option>" +
        "<option>EASTS</option>" +
        "<option>WERRI</option>" +
        "<option>GERRINGONG HARBOUR</option>" +
        "<option>WALKERS</option>" +
        "<option>Seven Mile Beach</option>" +
        "<option>GERROA</option>" +
        "<option>MID SEVEN MILE</option>" +
        "<option>SHOALHAVEN HEADS</option>" +
        "<option>COMORONG ISLAND</option>" +
        "<option>CROOKHAVEN/CULBURRA</option>" +
        "<option>Crookhaven Heads</option>" +
        "<option>Penguin Head</option>" +
        "<option>Tilbury Cove</option>" +
        "<option>WARRAIN</option>" +
        "<option>Kinghorn Point</option>" +
        "<option>WARRAIN SOUTH</option>" +
        "<option>CURRARONG</option>" +
        "<option>Currarong Point</option>" +
        "<option>ABRAHAM BOSON</option>" +
        "<option>Whale Point</option>" +
        "<option>WILSON</option>" +
        "<option>Abrahams Head</option>" +
        "<option>Honeysuckle Point / Abrahams Head</option>" +
        "<option>LOBSTER BAY</option>" +
        "<option>Lamond Head</option>" +
        "<option>Little Beecroft Head</option>" +
        "<option>Mermaids Inlet</option>" +
        "<option>Beecroft Head</option>" +
        "<option>Moores Inlet</option>" +
        "<option>Snake Inlet</option>" +
        "<option>Gum Getters Point</option>" +
        "<option>Gum Getters Inlet</option>" +
        "<option>Echo Hill</option>" +
        "<option>Drum Inlet</option>" +
        "<option>Cathedral</option>" +
        "<option>Devils Gorge</option>" +
        "<option>Smugglers Cavern</option>" +
        "<option>Devils Inlet</option>" +
        "<option>Crocidile Head</option>" +
        "<option>Crocodile Head / Three Graves</option>" +
        "<option>Crocidile Cave</option>" +
        "<option>Point Perpendicular</option>" +
        "<option>Outer Tubes</option>" +
        "<option>The Docks</option>" +
        "<option>Inner Tubes</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>TARGET NORTH 1</option>" +
        "<option>TARGET NORTH 2</option>" +
        "<option>TARGET</option>" +
        "<option>Longnose Point</option>" +
        "<option>DART POINT/LONGNOSE</option>" +
        "<option>Dart Point</option>" +
        "<option>Groper Coast</option>" +
        "<option>HONEYMOON BAY</option>" +
        "<option>BINDIJINE</option>" +
        "<option>FIGTREE INLET</option>" +
        "<option>LONG</option>" +
        "<option>CABBAGE TREE</option>" +
        "<option>CHINAMANS/GREEN PT</option>" +
        "<option>HARE</option>" +
        "<option>Red Point</option>" +
        "<option>CALLALA BAY</option>" +
        "<option>Callala Point</option>" +
        "<option>CALLALA</option>" +
        "<option>Huskisson Point/Inlet</option>" +
        "<option>HUSKISSON</option>" +
        "<option>TAPALLA POINT / SHARK NET BEACH</option>" +
        "<option>COLLINGWOOD</option>" +
        "<option>ORIOAN</option>" +
        "<option>BARFLEUR</option>" +
        "<option>Plantation Point</option>" +
        "<option>NELSON</option>" +
        "<option>BLENHEIM</option>" +
        "<option>GREENFIELDS</option>" +
        "<option>Duck Gully</option>" +
        "<option>CHINAMANS</option>" +
        "<option>HYAMS POINT</option>" +
        "<option>HYAMS</option>" +
        "<option>Captains/Greenpatch</option>" +
        "<option>CAPTAINS</option>" +
        "<option>GREENPATCH/ILUKA</option>" +
        "<option>BRISTOL POINT</option>" +
        "<option>BRISTOL PT/SCOTTISH ROCKS</option>" +
        "<option>SCOTTISH ROCKS/HOLE IN THE WALL</option>" +
        "<option>MURRAYS</option>" +
        "<option>STEAMERS</option>" +
        "<option>KITTY BEACH</option>" +
        "<option>ST GEORGE HEAD 2</option>" +
        "<option>BLACK HARBOUR</option>" +
        "<option>WHITING NORTH</option>" +
        "<option>WHITING</option>" +
        "<option>WHITING SOUTH</option>" +
        "<option>SUMMERCLOUD BAY</option>" +
        "<option>MARY COVE</option>" +
        "<option>CAVE</option>" +
        "<option>BHERWERRE</option>" +
        "<option>SUSSEX INLET</option>" +
        "<option>Farnham Headland</option>" +
        "<option>CUDMIRRAH</option>" +
        "<option>BERRARA</option>" +
        "<option>BERRARA POINT</option>" +
        "<option>BERRARA SOUTH</option>" +
        "<option>BANGALAY</option>" +
        "<option>MONUMENT</option>" +
        "<option>FLAT ROCK</option>" +
        "<option>DEE</option>" +
        "<option>WASHERWOMAN</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>Red Head Point</option>" +
        "<option>RED HEAD</option>" +
        "<option>BENDALONG</option>" +
        "<option>Inyadda Point</option>" +
        "<option>MANYANA</option>" +
        "<option>CUNJURONG POINT</option>" +
        "<option>GREEN ISLAND</option>" +
        "<option>CONJOLA</option>" +
        "<option>BUCKLEYS</option>" +
        "<option>NARRAWALLEE</option>" +
        "<option>Jones</option>" +
        "<option>Narrawallee Head</option>" +
        "<option>Bannister Point</option>" +
        "<option>MOLLYMOOK</option>" +
        "<option>COLLERS</option>" +
        "<option>Golf Course Reef</option>" +
        "<option>Ulladulla Head</option>" +
        "<option>ULLADULLA HARBOUR</option>" +
        "<option>Ulladulla Harbour (N)</option>" +
        "<option>Ulladulla Sea Pool</option>" +
        "<option>WARDEN HEAD NORTH</option>" +
        "<option>WARDEN HEAD SOUTH</option>" +
        "<option>ULLADULLA BOMBIE</option>" +
        "<option>RENNIES</option>" +
        "<option>RACECOURSE</option>" +
        "<option>RACECOURSE SOUTH (SUPER TUBES)</option>" +
        "<option>BURRILL</option>" +
        "<option>Dolphin Point</option>" +
        "<option>Potholes</option>" +
        "<option>WAIRO</option>" +
        "<option>TABOURIE</option>" +
        "<option>STOKES ISLAND</option>" +
        "<option>SUNBURNT</option>" +
        "<option>TERMEIL LAKE</option>" +
        "<option>Meroo Head</option>" +
        "<option>MEROO</option>" +
        "<option>NUGGAN POINT</option>" +
        "<option>NORTH</option>" +
        "<option>BAWLEY</option>" +
        "<option>Bawley Point</option>" +
        "<option>CORMORANT</option>" +
        "<option>Jewin Head</option>" +
        "<option>GANNET</option>" +
        "<option>MURRAMARANG</option>" +
        "<option>CAT & KITTEN</option>" +
        "<option>Wilfords Point</option>" +
        "<option>BULL PUP</option>" +
        "<option>RACECOURSE</option>" +
        "<option>SHELLY</option>" +
        "<option>AVENUE</option>" +
        "<option>KIOLOA</option>" +
        "<option>KIOLOA BOAT RAMP</option>" +
        "<option>O'Hara Head</option>" +
        "<option>MERRY</option>" +
        "<option>Snapper Point</option>" +
        "<option>PRETTY</option>" +
        "<option>ISLAND</option>" +
        "<option>O'HARA ISLAND SOUTH 1</option>" +
        "<option>O'HARA ISLAND SOUTH 2</option>" +
        "<option>O'HARA ISLAND SOUTH 3</option>" +
        "<option>DAWSON ISLAND NORTH</option>" +
        "<option>DAWSON ISLAND SOUTH</option>" +
        "<option>SNAKE BAY</option>" +
        "<option>SNAKE BAY SOUTH</option>" +
        "<option>Clear Point</option>" +
        "<option>BURNS BAY</option>" +
        "<option>PEBBLY</option>" +
        "<option>Pebbly Coast</option>" +
        "<option>DEPOT</option>" +
        "<option>TRANQUILITY BAY</option>" +
        "<option>Point Up Right</option>" +
        "<option>DURRAS NORTH</option>" +
        "<option>DURRAS</option>" +
        "<option>SOUTH DURRAS</option>" +
        "<option>BEAGLE BAY</option>" +
        "<option>EMILY MILLER</option>" +
        "<option>DARK</option>" +
        "<option>MYRTLE</option>" +
        "<option>SOUTH MYRTLE</option>" +
        "<option>RICHMOND</option>" +
        "<option>OAKY</option>" +
        "<option>HONEYSUCKLE</option>" +
        "<option>NORTH HEAD</option>" +
        "<option>ACHERON LEDGE NORTH</option>" +
        "<option>ACHERON LEDGE</option>" +
        "<option>CHAIN BAY</option>" +
        "<option>MALONEYS</option>" +
        "<option>LONG NORTH 1</option>" +
        "<option>LONG NORTH 2</option>" +
        "<option>LONG</option>" +
        "<option>CULLENDULLA</option>" +
        "<option>SURFSIDE</option>" +
        "<option>SOUTH SURFSIDE</option>" +
        "<option>CORRIGANS</option>" +
        "<option>BATEHAVEN/CASEYS</option>" +
        "<option>SUNSHINE COVE</option>" +
        "<option>DENHAMS</option>" +
        "<option>SURF</option>" +
        "<option>WIMBIE</option>" +
        "<option>CIRCUIT</option>" +
        "<option>LILLI PILLI</option>" +
        "<option>MOSQUITO BAY</option>" +
        "<option>GARDEN BAY</option>" +
        "<option>MALUA BAY</option>" +
        "<option>PRETTY POINT BAY</option>" +
        "<option>BRACKEN/MCKENZIES</option>" +
        "<option>ROSEDALE NORTH</option>" +
        "<option>ROSEDALE</option>" +
        "<option>JIMMIES ISLAND</option>" +
        "<option>NUN'S</option>" +
        "<option>BLACK</option>" +
        "<option>GUERILLA BAY NORTH</option>" +
        "<option>GUERILLA BAY</option>" +
        "<option>BURREWARRA POINT 1</option>" +
        "<option>BURREWARRA POINT 2</option>" +
        "<option>BURREWARRA POINT 3</option>" +
        "<option>BURREWARRA POINT 4</option>" +
        "<option>BARLINGS</option>" +
        "<option>TOMAKIN COVE</option>" +
        "<option>TOMAKIN</option>" +
        "<option>BROULEE</option>" +
        "<option>BROULEE SPIT</option>" +
        "<option>BENGELLO/SOUTH BROULEE/SOUTH</option>" +
        "<option>MORUYA HEADS 1</option>" +
        "<option>MORUYA HEADS 2</option>" +
        "<option>MORUYA HEADS 3</option>" +
        "<option>MORUYA (HEADS)</option>" +
        "<option>PEDRO</option>" +
        "<option>CONGO</option>" +
        "<option>CONGO POINT SOUTH 1</option>" +
        "<option>CONGO POINT SOUTH 2</option>" +
        "<option>MERINGO</option>" +
        "<option>KOONWARRA</option>" +
        "<option>MULLIMBURRA POINT</option>" +
        "<option>MULLIMBURRA POINT SOUTH 1</option>" +
        "<option>MULLIMBURRA POINT SOUTH 2</option>" +
        "<option>MULLIMBURRA POINT SOUTH 3</option>" +
        "<option>KELLYS LAKE</option>" +
        "<option>BINGIE BINGIE POINT</option>" +
        "<option>Bingie Bingie Point-Bingie Beach</option>" +
        "<option>BINGIE</option>" +
        "<option>COILA BAR</option>" +
        "<option>COILA SOUTH</option>" +
        "<option>TARANDORE POINT</option>" +
        "<option>ONE TREE</option>" +
        "<option>TUROSS HEAD</option>" +
        "<option>TUROSS ENTRANCE</option>" +
        "<option>SOUTH TUROSS</option>" +
        "<option>BLACKFELLOWS POINT</option>" +
        "<option>PICCANINNY</option>" +
        "<option>POTATO</option>" +
        "<option>JEMISONS</option>" +
        "<option>Brou-Dalmeny</option>" +
        "<option>BROU</option>" +
        "<option>DALMENY</option>" +
        "<option>JOSHS</option>" +
        "<option>YABBARA</option>" +
        "<option>DUESBURYS</option>" +
        "<option>KIANGA</option>" +
        "<option>KIANGA SOUTH</option>" +
        "<option>CARTERS</option>" +
        "<option>BAR</option>" +
        "<option>BAR SOUTH</option>" +
        "<option>NAROOMA</option>" +
        "<option>GLASSHOUSE ROCKS NORTH</option>" +
        "<option>GLASSHOUSE ROCKS SOUTH 1</option>" +
        "<option>GLASSHOUSE ROCKS SOUTH 2</option>" +
        "<option>BULLENGELLA</option>" +
        "<option>HANDKERCHIEF</option>" +
        "<option>BARUNGA POINT</option>" +
        "<option>BOGOLA HEAD</option>" +
        "<option>FULLERS NORTH</option>" +
        "<option>FULLERS SOUTH</option>" +
        "<option>LOADER</option>" +
        "<option>CORUNNA POINT</option>" +
        "<option>MYSTERY BAY</option>" +
        "<option>CAPE DROMEDARY SOUTH 1</option>" +
        "<option>CAPE DROMEDARY SOUTH 2</option>" +
        "<option>CAPE DROMEDARY SOUTH 3</option>" +
        "<option>TILBA TILBA NORTH</option>" +
        "<option>TILBA TILBA</option>" +
        "<option>TILBA TILBA HEAD</option>" +
        "<option>LITTLE LAKE</option>" +
        "<option>WALLAGA LAKE</option>" +
        "<option>Murunna Point</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>HAYWARDS</option>" +
        "<option>Camel Rock</option>" +
        "<option>HAYWARD POINT</option>" +
        "<option>KEATINGS HEAD</option>" +
        "<option>Morehead</option>" +
        "<option>Bermagui Inlet 1</option>" +
        "<option>HORSESHOE BAY</option>" +
        "<option>Bermagui Inlet 2</option>" +
        "<option>Bermagui Point</option>" +
        "<option>Point Dickson</option>" +
        "<option>Blue Point</option>" +
        "<option>BEARES NORTH</option>" +
        "<option>BEARES</option>" +
        "<option>BREAKWAY BAY</option>" +
        "<option>Zane Grey Pool</option>" +
        "<option>JERIMBUT POINT SOUTH</option>" +
        "<option>Baragoot Point</option>" +
        "<option>Jagger Beach</option>" +
        "<option>BARAGOOT</option>" +
        "<option>Cuttagee Point</option>" +
        "<option>CUTTAGEE</option>" +
        "<option>MILLS</option>" +
        "<option>Barragga Point</option>" +
        "<option>BARRAGGA BAY</option>" +
        "<option>Golden Gate Headland/Iron Reef</option>" +
        "<option>ARMONDS BAY</option>" +
        "<option>Murrah Head</option>" +
        "<option>MURRAH-BUNGA</option>" +
        "<option>Goalen Head</option>" +
        "<option>Bunga North</option>" +
        "<option>BUNGA</option>" +
        "<option>BUNGA SOUTH</option>" +
        "<option>Bunga Head</option>" +
        "<option>Mimosa Rocks</option>" +
        "<option>ARAGUNNU</option>" +
        "<option>BENGUNNU POINT NORTH</option>" +
        "<option>BENGUNNU POINT SOUTH 1</option>" +
        "<option>BENGUNNU POINT SOUTH 2</option>" +
        "<option>Picnic North</option>" +
        "<option>PICNIC</option>" +
        "<option>PICNIC POINT</option>" +
        "<option>Bithry Inlet North</option>" +
        "<option>BITHRY INLET</option>" +
        "<option>PENDERS</option>" +
        "<option>Stinking Bay</option>" +
        "<option>MIDDLE NORTH</option>" +
        "<option>MIDDLE SOUTH</option>" +
        "<option>GILLARDS</option>" +
        "<option>COWDROYS</option>" +
        "<option>Boronda Head</option>" +
        "<option>NELSON</option>" +
        "<option>Wajurda Point</option>" +
        "<option>MOON BAY</option>" +
        "<option>Paspalum Point</option>" +
        "<option>MOGAREKA INLET</option>" +
        "<option>TATHRA</option>" +
        "<option>Tathra Head</option>" +
        "<option>KIANINNY BAY</option>" +
        "<option>Wild Horse Bay</option>" +
        "<option>BOULDER BAY</option>" +
        "<option>White Rock</option>" +
        "<option>GAMES BAY</option>" +
        "<option>WALLAGOOT GAP</option>" +
        "<option>Wallagoot-Bournda</option>" +
        "<option>WALLAGOOT</option>" +
        "<option>BOURNDA</option>" +
        "<option>BOURNDA ISLAND</option>" +
        "<option>NORTH TURA</option>" +
        "<option>TURA HEAD</option>" +
        "<option>TURA/SHORT POINT</option>" +
        "<option>Short Point</option>" +
        "<option>MIDDLE</option>" +
        "<option>Merimbula Head</option>" +
        "<option>BAR</option>" +
        "<option>Merimbula-Pambula</option>" +
        "<option>MERIMBULA</option>" +
        "<option>PAMBULA</option>" +
        "<option>LITTLE/JIGUMA</option>" +
        "<option>BARMOUTH NORTH</option>" +
        "<option>BARMOUTH SOUTH</option>" +
        "<option>SHELLY</option>" +
        "<option>Ioala Point</option>" +
        "<option>Haycock Point</option>" +
        "<option>LONG</option>" +
        "<option>QUONDOLO</option>" +
        "<option>THE PINNACLES</option>" +
        "<option>Terrace Point</option>" +
        "<option>Lennards Island</option>" +
        "<option>North Head</option>" +
        "<option>WORANG POINT</option>" +
        "<option>ASLINGS</option>" +
        "<option>YALLUMGO COVE</option>" +
        "<option>The Eagles Claw</option>" +
        "<option>Lookout Point</option>" +
        "<option>SNUG COVE/EDEN HARBOUR</option>" +
        "<option>By Beach</option>" +
        "<option>Mirare Point</option>" +
        "<option>CATTLE BAY</option>" +
        "<option>COCORA</option>" +
        "<option>Cocora Point</option>" +
        "<option>Bungo Point</option>" +
        "<option>BUNGO</option>" +
        "<option>Oman Point</option>" +
        "<option>RIXONS</option>" +
        "<option>Murrumbulga Point</option>" +
        "<option>QUARANTINE BAY</option>" +
        "<option>LEGGES</option>" +
        "<option>Quandoa Point</option>" +
        "<option>BRANDY CREEK</option>" +
        "<option>CURRAWULLA</option>" +
        "<option>Mungora Rocks</option>" +
        "<option>NORTHCOTE</option>" +
        "<option>Northcote Point</option>" +
        "<option>BOYDTOWN</option>" +
        "<option>TORARAGO POINT</option>" +
        "<option>MOUTRYS POINT</option>" +
        "<option>WHALE</option>" +
        "<option>BRIERLY POINT</option>" +
        "<option>BRIERLY POINT EAST 1</option>" +
        "<option>BRIERLY POINT EAST 2</option>" +
        "<option>FISHERIES</option>" +
        "<option>EDROM 1</option>" +
        "<option>EDROM 2</option>" +
        "<option>MUNGANNO POINT 1</option>" +
        "<option>Munganno Point</option>" +
        "<option>MUNGANNO POINT 2</option>" +
        "<option>Jews Head</option>" +
        "<option>Honeysuckle Point</option>" +
        "<option>Red Point</option>" +
        "<option>Red Sands Bay</option>" +
        "<option>LEATHER JACKET BAY</option>" +
        "<option>MOWARRY POINT 1</option>" +
        "<option>MOWARRY POINT 2</option>" +
        "<option>SALTWATER CREEK NORTH</option>" +
        "<option>SALTWATER CREEK</option>" +
        "<option>Hegartys Bay</option>" +
        "<option>BITTANGABEE BAY</option>" +
        "<option>Pulpit Rock</option>" +
        "<option>Greencape</option>" +
        "<option>City Rock</option>" +
        "<option>DISASTER BAY</option>" +
        "<option>Bay Cliff</option>" +
        "<option>WONBOYN</option>" +
        "<option>Greenglade Point</option>" +
        "<option>MERRICA</option>" +
        "<option>1568 km</option>" +
        "<option>JANE SPIERS NORTH</option>" +
        "<option>JANE SPIERS</option>" +
        "<option>NEWTONS</option>" +
        "<option>LITTLE CREEK</option>" +
        "<option>NADGEE</option>" +
        "<option>NADGEE POINT</option>" +
        "<option>NADGEE LAKE</option>" +
        "<option>Nadgee Moores/Bunyip Hole</option>" +
        "<option>CAPE HOWE</option>" +
        "<option>Conference Point</option>" +
        "<option>test</option>" +
        "<option>Frenchmans Bay (S)</option>" +
        "<option>Patonga</option>" +
        "<option>Fishermans</option>" +
        "<option>The Basin</option>" +
        "<option>Bonnie Doon</option>" +
        "<option>Portuguese</option>" +
        "<option>Towlers Bay</option>" +
        "<option>Taylors</option>" +
        "<option>Clareville</option>" +
        "<option>Old Wharf</option>" +
        "<option>Paradise</option>" +
        "<option>Sandy</option>" +
        "<option>Little Patonga</option>" +
        "<option>Snapperman</option>" +
        "<option>Station / Barrenjoey Beach</option>" +
        "<option>Hungry</option>" +
        "<option>Flint & Steel</option>" +
        "<option>Flannel Flower</option>" +
        "<option>West Head</option>" +
        "<option>Resolute</option>" +
        "<option>Mackeral</option>" +
        "<option>Currawong</option>" +
        "<option>Frenchmans Bay (S)</option>" +
        "<option>Lady Robinson</option>" +
        "<option>Ramsgate Beach</option>" +
        "<option>Dolls Point</option>" +
        "<option>Sandringham (N)</option>" +
        "<option>Sandringham</option>" +
        "<option>Sandringham (S)</option>" +
        "<option>Rocky Point</option>" +
        "<option>Taren Point</option>" +
        "<option>Taren Point (S)</option>" +
        "<option>Pelican Point</option>" +
        "<option>Elephants Trunk</option>" +
        "<option>Frenchmans Bay (N)</option>" +
        "<option>Taren Spit Beach</option>" +
        "<option>Towra Beach</option>" +
        "<option>Silver Beach</option>" +
        "<option>Bonna Point</option>" +
        "<option>Inscription Point</option>" +
        "<option>Yarra Bay (S)</option>" +
        "<option>Yarra Bay</option>" +
        "<option>Bumbora Rock</option>" +
        "<option>Penrhyn</option>" +
        "<option>Foreshore (E)</option>" +
        "<option>Foreshore</option>" +
        "<option>Cooks River</option>" +
        "<option>Neds</option>" +
        "<option>Lagoon</option>" +
        "<option>Jetty</option>" +
        "<option>Old Settlement</option>" +
        "<option>Pebbly</option>" +
        "<option>North</option>" +
        "<option>Old Gulch</option>" +
        "<option>Middle</option>" +
        "<option>Blinky</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Salmon</option>" +
        "<option>Kings</option>" +
        "<option>Johnsons</option>" +
        "<option>Lovers Bay</option>" +
        "<option>South Lagoon</option>" +
        "<option>Darook Park</option>" +
        "<option>Gunnamatta Park</option>" +
        "<option>Gunnamatta pool</option>" +
        "<option>Lugano</option>" +
        "<option>Deeban Spit</option>" +
        "<option>Bonnie Vale</option>" +
        "<option>Horderns Beach</option>" +
        "<option>Gunyah Beach</option>" +
        "<option>Jimmys Beach</option>" +
        "<option>Bagnalls</option>" +
        "<option>Dutchmans</option>" +
        "<option>Nelson Bay marina</option>" +
        "<option>Nelson Bay</option>" +
        "<option>Little Nelson Bay</option>" +
        "<option>Shoal Bay</option>" +
        "<option>Winda Woppa</option>" +
        "<option>Corrie Island</option>" +
        "<option>Soldiers Pt</option>" +
        "<option>Soldiers Pt (S)</option>" +
        "<option>Wanda Beach</option>" +
        "<option>Salamander Bay</option>" +
        "<option>Corlette</option>" +
        "<option>Conroy</option>" +
        "<option>Yellow Rock</option>" +
        "<option>Quarantine Beach</option>" +
        "<option>Silver Beach</option>" +
        "<option>Forty Baskets</option>" +
        "<option>Reef Beach</option>" +
        "<option>Washaway</option>" +
        "<option>Castle Rock</option>" +
        "<option>Clontarf Beach</option>" +
        "<option>Clontarf (N)</option>" +
        "<option>Sandy Bay</option>" +
        "<option>The Spit</option>" +
        "<option>Chinamans Beach</option>" +
        "<option>Store Beach</option>" +
        "<option>Edwards Beach</option>" +
        "<option>Balmoral Beach</option>" +
        "<option>Cobblers Beach</option>" +
        "<option>Obelisk Beach</option>" +
        "<option>Clifton Gardens</option>" +
        "<option>Taylors Bay</option>" +
        "<option>Ashton Reserve</option>" +
        "<option>Bradleys Head</option>" +
        "<option>Athol Bay</option>" +
        "<option>Whiting Beach</option>" +
        "<option>Collins Beach</option>" +
        "<option>Little Sirius Cove</option>" +
        "<option>Sirius Cove</option>" +
        "<option>McKell Park</option>" +
        "<option>Carthona Ave</option>" +
        "<option>Double Bay</option>" +
        "<option>Seven Shillings</option>" +
        "<option>Lady Martins</option>" +
        "<option>Rose Bay Park</option>" +
        "<option>Percival Park</option>" +
        "<option>Dumaresq Res</option>" +
        "<option>Little Manly Cove</option>" +
        "<option>Queens Beach</option>" +
        "<option>Hermit Bay</option>" +
        "<option>Tingara</option>" +
        "<option>Milk Beach</option>" +
        "<option>Shark Beach</option>" +
        "<option>Vaucluse Bay</option>" +
        "<option>Parsley Bay</option>" +
        "<option>Kutti Beach</option>" +
        "<option>Gibsons Beach</option>" +
        "<option>Wharf Beach (S)</option>" +
        "<option>Manly Cove E</option>" +
        "<option>Wharf Beach</option>" +
        "<option>Camp Cove</option>" +
        "<option>Lady Bay</option>" +
        "<option>Manly Cove W</option>" +
        "<option>Delwood</option>" +
        "<option>Fairlight Beach</option>" +
        "<option>Esplanade Beach</option>" +
        "<option>NT 1</option>" +
        "<option>NT 2</option>" +
        "<option>Turtle Point (east 1)</option>" +
        "<option>Turtle Point (east 2)</option>" +
        "<option>Forsyth Creek (west(</option>" +
        "<option>Whale Flat</option>" +
        "<option>Fossil Head</option>" +
        "<option>Treachery Bay (1)</option>" +
        "<option>Treachery Bay (2)</option>" +
        "<option>Treachery Bay (3)</option>" +
        "<option>Treachery Bay (4)</option>" +
        "<option>Pearce Point (east 1)</option>" +
        "<option>Pearce Point (east 2)</option>" +
        "<option>Pearce Point (north 1)</option>" +
        "<option>Pearce Point (north 2)</option>" +
        "<option>Ditji Beach</option>" +
        "<option>Ditji Beach (north)</option>" +
        "<option>NT 18</option>" +
        "<option>NT 19</option>" +
        "<option>Yelcher Beach</option>" +
        "<option>Tchindi</option>" +
        "<option>Tchindi (north)</option>" +
        "<option>Injin Beach</option>" +
        "<option>Untimelli Beach</option>" +
        "<option>Munda Beach</option>" +
        "<option>Dorcherty (west)</option>" +
        "<option>Cape Hay (south)</option>" +
        "<option>Dorcherty (north)</option>" +
        "<option>Kinmore Point (west)</option>" +
        "<option>Kinmore Point (east 1)</option>" +
        "<option>Kinmore Point (east 2)</option>" +
        "<option>Tree Point (west 4)</option>" +
        "<option>Tree Point (west 3)</option>" +
        "<option>Tree Point (west 3)</option>" +
        "<option>Tree Point (west 1)</option>" +
        "<option>Hyland Bay 1</option>" +
        "<option>Hyland Bay 2</option>" +
        "<option>Hyland Bay 3</option>" +
        "<option>Hyland Bay 4</option>" +
        "<option>Hyland Bay 5</option>" +
        "<option>Hyland Bay 6</option>" +
        "<option>White Cliff Point</option>" +
        "<option>Moyle River (north)</option>" +
        "<option>Hyland Bay (9)</option>" +
        "<option>Hyland Bay (10)</option>" +
        "<option>Hyland Bay (11)</option>" +
        "<option>Cape Dombey</option>" +
        "<option>Cape Dombey (north 1)</option>" +
        "<option>Cape Dombey (north 2)</option>" +
        "<option>Cape Dombey (north 3)</option>" +
        "<option>Cape Dombey (north 4)</option>" +
        "<option>Cape Dombey (north 5)</option>" +
        "<option>Cape Dombey (north 6)</option>" +
        "<option>NT 54</option>" +
        "<option>Dooley Point (south)</option>" +
        "<option>Dooley Point (north)</option>" +
        "<option>Cape Scott (south)</option>" +
        "<option>Cape Scott</option>" +
        "<option>Cape Scott (east)</option>" +
        "<option>Cape Ford (west 5)</option>" +
        "<option>Cape Ford (west 4)</option>" +
        "<option>Cape Ford (west 3)</option>" +
        "<option>Cape Ford (west 2)</option>" +
        "<option>Cape Ford (west 1)</option>" +
        "<option>Cape Ford (east 1)</option>" +
        "<option>Cape Ford (east 2)</option>" +
        "<option>Cape Ford (east 3)</option>" +
        "<option>Cape Ford (east 4)</option>" +
        "<option>Anson Bay (west)</option>" +
        "<option>Anson Bay (east)</option>" +
        "<option>Pelican Island</option>" +
        "<option>Red Cliff (west)</option>" +
        "<option>Red Cliff (east 1)</option>" +
        "<option>Red Cliff (east 2)</option>" +
        "<option>Red Cliff (east 3)</option>" +
        "<option>Red Cliff (east 4)</option>" +
        "<option>Cliff Head (south 2)</option>" +
        "<option>Cliff Head (south 1)</option>" +
        "<option>Cliff Head (east)</option>" +
        "<option>Daly River (south)</option>" +
        "<option>Channel Point</option>" +
        "<option>Channel Point (north)</option>" +
        "<option>Beach NT 83</option>" +
        "<option>Beach NT 84</option>" +
        "<option>Beach NT 85</option>" +
        "<option>Beach NT 86</option>" +
        "<option>Point Blaze (south 2)</option>" +
        "<option>Point Blaze (south 1)</option>" +
        "<option>Point Blaze (east)</option>" +
        "<option>Point Jenny (west)</option>" +
        "<option>Point Jenny (east)</option>" +
        "<option>Finniss River mouth</option>" +
        "<option>Five Mile Beach</option>" +
        "<option>Stingray Head</option>" +
        "<option>Dundee Beach (1)</option>" +
        "<option>Dundee Beach (2)</option>" +
        "<option>Dundee Beach (3)</option>" +
        "<option>Dundee Beach (4)</option>" +
        "<option>Dundee Beach (5)</option>" +
        "<option>Native Point (north 1)</option>" +
        "<option>Native Point (north 2)</option>" +
        "<option>Native Point (north 3)</option>" +
        "<option>Native Point (north 4)</option>" +
        "<option>Hut Point (east)</option>" +
        "<option>West Pt (west)</option>" +
        "<option>Herbert Point (north)</option>" +
        "<option>East Point (north 1)</option>" +
        "<option>East Point (north 2)</option>" +
        "<option>East Point (north 3)</option>" +
        "<option>Point Margaret (east)</option>" +
        "<option>Point Charles (west)</option>" +
        "<option>Point Charles (east 1)</option>" +
        "<option>Point Charles (east 2)</option>" +
        "<option>Point Charles (east 3)</option>" +
        "<option>Harveys Beach (W 2)</option>" +
        "<option>Harveys Beach (W 1)</option>" +
        "<option>Harveys Beach</option>" +
        "<option>Harveys Beach (E)</option>" +
        "<option>Two Fella Creek (west)</option>" +
        "<option>Two Fella Creek (east)</option>" +
        "<option>Imaluk Beach</option>" +
        "<option>Imaluk Beach (E)</option>" +
        "<option>Wagait Beach</option>" +
        "<option>Wagait Beach (E)</option>" +
        "<option>West Point</option>" +
        "<option>Picnic Point</option>" +
        "<option>Picnic Cove</option>" +
        "<option>Oak Point</option>" +
        "<option>Talc Head (west)</option>" +
        "<option>Mica Beach</option>" +
        "<option>Kurumba Beach</option>" +
        "<option>Plater Beach</option>" +
        "<option>Silversands</option>" +
        "<option>Hingstone Beach</option>" +
        "<option>Lameroo Beach</option>" +
        "<option>Cullen Beach</option>" +
        "<option>Mindil Beach</option>" +
        "<option>Vesteys Beach</option>" +
        "<option>Vesteys Beach (north)</option>" +
        "<option>Dudley Point</option>" +
        "<option>East Point</option>" +
        "<option>Rocksitters</option>" +
        "<option>Nightcliff</option>" +
        "<option>Rapid Creek</option>" +
        "<option>Dripstone</option>" +
        "<option>Casuarina Beach</option>" +
        "<option>Lee Point (east)</option>" +
        "<option>Cameron Beach</option>" +
        "<option>Shoal Bay</option>" +
        "<option>Point Stephens</option>" +
        "<option>Ayres Point (north)</option>" +
        "<option>Escape Cliffs (north)</option>" +
        "<option>Cape Hotham (west)</option>" +
        "<option>Cape Hotham (1)</option>" +
        "<option>Cape Hotham (2)</option>" +
        "<option>Cape Hotham (east 1)</option>" +
        "<option>Cape Hotham (east 2)</option>" +
        "<option>Cape Hotham (east 3)</option>" +
        "<option>Cape Hotham (east 4)</option>" +
        "<option>Chambers Bay (west)</option>" +
        "<option>Chambers Bay</option>" +
        "<option>Point Stuart</option>" +
        "<option>Pococks (S)</option>" +
        "<option>Pococks Beach</option>" +
        "<option>West Alligator Head</option>" +
        "<option>Sandfly Beach</option>" +
        "<option>Aralaij Beach</option>" +
        "<option>Beach 168</option>" +
        "<option>Endyalgout Island (west)</option>" +
        "<option>Beach 170</option>" +
        "<option>Wangarlu Bay</option>" +
        "<option>Wangarlu Bay (west)</option>" +
        "<option>Wurgurlu Bay (east)</option>" +
        "<option>Wurgurlu Bay</option>" +
        "<option>Wurgurlu Bay (west 1)</option>" +
        "<option>Wurgurlu Bay (west 2)</option>" +
        "<option>Wurgurlu Bay (west 3)</option>" +
        "<option>Wargili Point (west 1)</option>" +
        "<option>Wargili Point (west 2)</option>" +
        "<option>Two Hills Bay (S)</option>" +
        "<option>Two Hills Bay</option>" +
        "<option>Two Hills Bay (N)</option>" +
        "<option>Silvid Bay (north)</option>" +
        "<option>Alcaro Bay</option>" +
        "<option>Waggali</option>" +
        "<option>Ommaridge</option>" +
        "<option>Popham Bay (3)</option>" +
        "<option>Popham Bay (4)</option>" +
        "<option>Popham Bay (5)</option>" +
        "<option>Lingi Point</option>" +
        "<option>Lingi Point (east)</option>" +
        "<option>Blue Mud Bay (east 1)</option>" +
        "<option>Blue Mud Bay (east 2)</option>" +
        "<option>Blue Mud Bay (east 3)</option>" +
        "<option>Blue Mud Bay (east 4)</option>" +
        "<option>Blue Mud Bay (east 4)</option>" +
        "<option>Beach 197</option>" +
        "<option>Beach 198</option>" +
        "<option>Beach 199</option>" +
        "<option>Araru Point</option>" +
        "<option>Araru Point (east 1)</option>" +
        "<option>Araru Point (east 2)</option>" +
        "<option>Trepang Bay (1)</option>" +
        "<option>Trepang Bay (2)</option>" +
        "<option>Trepang Bay (3)</option>" +
        "<option>Trepang Bay (4)</option>" +
        "<option>Trepang Bay (5)</option>" +
        "<option>Trepang Bay (6)</option>" +
        "<option>Trepang Bay (7)</option>" +
        "<option>Trepang Bay (8)</option>" +
        "<option>Trepang Bay (9)</option>" +
        "<option>Trepang Bay (10)</option>" +
        "<option>Trepang Bay (11)</option>" +
        "<option>Trepang Bay (12)</option>" +
        "<option>Trepang Bay (13)</option>" +
        "<option>Trepang Bay (14)</option>" +
        "<option>Trepang Bay (15)</option>" +
        "<option>Trepang Bay (16)</option>" +
        "<option>Trepang Bay (17)</option>" +
        "<option>Trepang Bay (18)</option>" +
        "<option>Trepang Bay (19)</option>" +
        "<option>Trepang Bay (20)</option>" +
        "<option>Trepang Bay (21)</option>" +
        "<option>Trepang Bay (22)</option>" +
        "<option>Trepang Bay (23)</option>" +
        "<option>Trepang Bay (24)</option>" +
        "<option>Trepang Bay (25)</option>" +
        "<option>Alau Creek</option>" +
        "<option>Alau Creek (east)</option>" +
        "<option>Trepang Bay (28)</option>" +
        "<option>Trepang Bay (29)</option>" +
        "<option>Midjali Point (south 3)</option>" +
        "<option>Midjali Point (south 2</option>" +
        "<option>Midjali Point (south 2</option>" +
        "<option>Midjali Point (east 1)</option>" +
        "<option>Midjali Point (east 2)</option>" +
        "<option>Midjali Point (east 3)</option>" +
        "<option>Midjali Point (east 4)</option>" +
        "<option>Wanaraij Point (south 3)</option>" +
        "<option>Wanaraij Point (south 2)</option>" +
        "<option>Wanaraij Point (south 1)</option>" +
        "<option>Wanaraij Point (east)</option>" +
        "<option>Vashon Head (west)</option>" +
        "<option>Vashon Head (east 1)</option>" +
        "<option>Vashon Head (east 2)</option>" +
        "<option>Vashon Head (east 3)</option>" +
        "<option>Vashon Head (east 4)</option>" +
        "<option>Vashon Head (east 5)</option>" +
        "<option>Vashon Head (east 6)</option>" +
        "<option>Vashon Head (east 7)</option>" +
        "<option>Vashon Head (east 8)</option>" +
        "<option>Vashon Head (east 9)</option>" +
        "<option>Coral Bay (west)</option>" +
        "<option>Seven Spirit Bay</option>" +
        "<option>Seven Spirit Bay (head)</option>" +
        "<option>Coral Bay (4)</option>" +
        "<option>Coral Bay (5)</option>" +
        "<option>Coral Bay (6)</option>" +
        "<option>Coral Bay (7)</option>" +
        "<option>Coral Bay (8)</option>" +
        "<option>Walford Point (west 3)</option>" +
        "<option>Walford Point (west 2)</option>" +
        "<option>Walford Point (west 1)</option>" +
        "<option>Walford Point (east 1)</option>" +
        "<option>Walford Point (east 2)</option>" +
        "<option>Walford Point (east 3)</option>" +
        "<option>Low Point (west)</option>" +
        "<option>Low Point (east 1)</option>" +
        "<option>Low Point (east 2)</option>" +
        "<option>Low Point (east 3)</option>" +
        "<option>Low Point (east 4)</option>" +
        "<option>Kennedy Bay (1)</option>" +
        "<option>Kennedy Bay (2)</option>" +
        "<option>Kennedy Bay (3)</option>" +
        "<option>Turtle Point</option>" +
        "<option>Turtle Point (south 1)</option>" +
        "<option>Turtle Point (south 2)</option>" +
        "<option>False Turtle Point</option>" +
        "<option>False Turtle Point (south)</option>" +
        "<option>White Cliff</option>" +
        "<option>White Cliff (south)</option>" +
        "<option>Curlew Bay</option>" +
        "<option>Curlew Point</option>" +
        "<option>Kangaroo Point (north 2)</option>" +
        "<option>Kangaroo Point (north 1)</option>" +
        "<option>Kangaroo Point (south 1)</option>" +
        "<option>Kangaroo Point (south 2)</option>" +
        "<option>Oyster Point (west 2)</option>" +
        "<option>Oyster Point (west 1)</option>" +
        "<option>Oyster Point (east 1)</option>" +
        "<option>Oyster Point (east 2)</option>" +
        "<option>Spear Point (west 2)</option>" +
        "<option>Spear Point (west 1)</option>" +
        "<option>Adam Head</option>" +
        "<option>Record Point</option>" +
        "<option>Observation Cliff</option>" +
        "<option>Observation Cliff (north 1)</option>" +
        "<option>Observation Cliff (north 2)</option>" +
        "<option>Table Head (south 5)</option>" +
        "<option>Table Head (south 4)</option>" +
        "<option>Table Head (south 3)</option>" +
        "<option>Table Head (south 2)</option>" +
        "<option>Table Head (south 1)</option>" +
        "<option>Table Head (north)</option>" +
        "<option>Caiman Creek</option>" +
        "<option>Caiman Creek (north)</option>" +
        "<option>Berkeley Bay (4)</option>" +
        "<option>Berkeley Bay (5)</option>" +
        "<option>Berkeley Bay (6)</option>" +
        "<option>Berkeley Bay (7)</option>" +
        "<option>Berkeley Bay (8)</option>" +
        "<option>Berkeley Bay (9)</option>" +
        "<option>Berkeley Bay (10)</option>" +
        "<option>Reef Point (south)</option>" +
        "<option>Reef Point (north)</option>" +
        "<option>Black Point (E 3)</option>" +
        "<option>Black Point (E 2)</option>" +
        "<option>Black Point (boat ramp)</option>" +
        "<option>Black Point</option>" +
        "<option>Black Point (N)</option>" +
        "<option>Smith Point (S 2)</option>" +
        "<option>Smith Point (S 1)</option>" +
        "<option>Smith Point</option>" +
        "<option>Smith Point (E 1)</option>" +
        "<option>Smith Point (E 2)</option>" +
        "<option>Smith Point (E 3)</option>" +
        "<option>Smith Point (E 4)</option>" +
        "<option>Smith Point (E 5)</option>" +
        "<option>Smith Point (E 6)</option>" +
        "<option>Smith Point (E 7)</option>" +
        "<option>Kuper Point (W 5)</option>" +
        "<option>Kuper Point (W 4)</option>" +
        "<option>Kuper Point (W 3)</option>" +
        "<option>Kuper Point (W 2)</option>" +
        "<option>Kuper Point (W 1)</option>" +
        "<option>Kuper Point</option>" +
        "<option>Kuper Point (E 1)</option>" +
        "<option>Kuper Point (E 2)</option>" +
        "<option>Stewart Point</option>" +
        "<option>Stewart Point (S 1)</option>" +
        "<option>Stewart Point (S 2)</option>" +
        "<option>Stewart Point (S 3)</option>" +
        "<option>Lizard Bay (1)</option>" +
        "<option>Lizard Bay (2)</option>" +
        "<option>Port Bremer (S 1)</option>" +
        "<option>Port Bremer (S 2)</option>" +
        "<option>Port Bremer (S 3)</option>" +
        "<option>East Station Point (S 3)</option>" +
        "<option>East Station Point (S 2)</option>" +
        "<option>East Station Point (S 1)</option>" +
        "<option>East Station Point</option>" +
        "<option>East Station Point (N 1)</option>" +
        "<option>East Station Point (N 2)</option>" +
        "<option>Edwards Point (S 3)</option>" +
        "<option>Edwards Point (S 2)</option>" +
        "<option>Edwards Point (S 1)</option>" +
        "<option>Edwards Point</option>" +
        "<option>Edwards Point (E 1)</option>" +
        "<option>Edwards Point (E 2)</option>" +
        "<option>Edwards Point (E 3)</option>" +
        "<option>Edwards Point (E 4)</option>" +
        "<option>Edwards Point (E 5)</option>" +
        "<option>Edwards Point (E 6)</option>" +
        "<option>Edwards Point (E 7)</option>" +
        "<option>Danger Point (W 3)</option>" +
        "<option>Danger Point (W 2)</option>" +
        "<option>Danger Point (W 1)</option>" +
        "<option>Danger Point</option>" +
        "<option>Danger Point (E 1)</option>" +
        "<option>Danger Point (E 2)</option>" +
        "<option>Danger Point (E 3)</option>" +
        "<option>Danger Point (E 4)</option>" +
        "<option>Danger Point (E 5)</option>" +
        "<option>Danger Point (E 6)</option>" +
        "<option>Danger Point (E 7)</option>" +
        "<option>Danger Point (E 8)</option>" +
        "<option>Danger Point (E 9)</option>" +
        "<option>D'Urville Point (N 3)</option>" +
        "<option>D'Urville Point (N 2)</option>" +
        "<option>D'Urville Point (N 1)</option>" +
        "<option>D'Urville Point (S 1)</option>" +
        "<option>D'Urville Point (S 2)</option>" +
        "<option>D'Urville Point (S 3)</option>" +
        "<option>D'Urville Point (S 4)</option>" +
        "<option>Raffles Bay (W 1)</option>" +
        "<option>Raffles Bay (W 2)</option>" +
        "<option>Raffles Bay (E 1)</option>" +
        "<option>Raffles Bay (E 2)</option>" +
        "<option>High Point (W 6)</option>" +
        "<option>High Point (W 5)</option>" +
        "<option>High Point (W 4)</option>" +
        "<option>High Point (W 3)</option>" +
        "<option>High Point (W 2)</option>" +
        "<option>High Point (W 1)</option>" +
        "<option>High Point (E 1)</option>" +
        "<option>High Point (E 2)</option>" +
        "<option>High Point (E 3)</option>" +
        "<option>High Point (E 4)</option>" +
        "<option>High Point (E 5)</option>" +
        "<option>High Point (E 6)</option>" +
        "<option>High Point (E 7)</option>" +
        "<option>High Point (E 8)</option>" +
        "<option>High Point (E 9)</option>" +
        "<option>Gilies Point (W 2)</option>" +
        "<option>Gilies Point (W 1)</option>" +
        "<option>Gilies Point</option>" +
        "<option>Irgul Point (W 2)</option>" +
        "<option>Irgul Point (W 1)</option>" +
        "<option>Irgul Point (E 1)</option>" +
        "<option>Irgul Point (E 2)</option>" +
        "<option>Guailung Point (W 5)</option>" +
        "<option>Guailung Point (W 4)</option>" +
        "<option>Guailung Point (W 3)</option>" +
        "<option>Guailung Point (W 2)</option>" +
        "<option>Guailung Point (W 1)</option>" +
        "<option>Guailung Point</option>" +
        "<option>Guailung Point (E 1)</option>" +
        "<option>Guailung Point (E 2)</option>" +
        "<option>Guailung Point (E 3)</option>" +
        "<option>Mountnorris Bay (1)</option>" +
        "<option>Mountnorris Bay (2)</option>" +
        "<option>Mountnorris Bay (3)</option>" +
        "<option>Mountnorris Bay (4)</option>" +
        "<option>Mountnorris Bay (5)</option>" +
        "<option>Mountnorris Bay (6)</option>" +
        "<option>Coombe Point (S 5)</option>" +
        "<option>Coombe Point (S 4)</option>" +
        "<option>Coombe Point (S 3)</option>" +
        "<option>Coombe Point (S 2)</option>" +
        "<option>Coombe Point (S 1)</option>" +
        "<option>Coombe Point</option>" +
        "<option>Coombe Point (E 1)</option>" +
        "<option>Coombe Point (E 2)</option>" +
        "<option>Annesley Point (W 3)</option>" +
        "<option>Annesley Point (W 2)</option>" +
        "<option>Annesley Point (W 1)</option>" +
        "<option>Annesley Point (E 1)</option>" +
        "<option>Annesley Point (E 2)</option>" +
        "<option>Annesley Point (E 3)</option>" +
        "<option>Annesley Point (E 4)</option>" +
        "<option>Wangaran Swamp (1)</option>" +
        "<option>Wangaran Swamp (2)</option>" +
        "<option>Malay Bay (E 1)</option>" +
        "<option>Malay Bay (E 2)</option>" +
        "<option>Malay Bay (E 3)</option>" +
        "<option>Malay Bay (E 4)</option>" +
        "<option>Malay Bay (E 4)</option>" +
        "<option>Malay Bay (E 6)</option>" +
        "<option>Malay Bay (E 7)</option>" +
        "<option>Malay Bay (E 8)</option>" +
        "<option>Malay Bay (E 9)</option>" +
        "<option>Cape Cockburn (1)</option>" +
        "<option>Cape Cockburn (2)</option>" +
        "<option>Cape Cockburn (3)</option>" +
        "<option>Cape Cockburn (4)</option>" +
        "<option>Cape Cockburn (5)</option>" +
        "<option>Cape Cockburn (6)</option>" +
        "<option>Cape Cockburn (7)</option>" +
        "<option>De Courcy Head (W  3)</option>" +
        "<option>De Courcy Head (W 2)</option>" +
        "<option>De Courcy Head (W 1)</option>" +
        "<option>De Courcy Head (E 1)</option>" +
        "<option>De Courcy Head (E 2)</option>" +
        "<option>De Courcy Head (E 3)</option>" +
        "<option>De Courcy Head (E 4)</option>" +
        "<option>De Courcy Head (E 5)</option>" +
        "<option>De Courcy Head (E 6)</option>" +
        "<option>De Courcy Head (E 7)</option>" +
        "<option>De Courcy Head (E 8)</option>" +
        "<option>De Courcy Head (E 9)</option>" +
        "<option>De Courcy Head (E 10)</option>" +
        "<option>Gningarg Point (W 7)</option>" +
        "<option>Gningarg Point (W 6)</option>" +
        "<option>Gningarg Point (W 5)</option>" +
        "<option>Gningarg Point (W 4)</option>" +
        "<option>Gningarg Point (W 3)</option>" +
        "<option>Gningarg Point (W 2)</option>" +
        "<option>Gningarg Point (W 1)</option>" +
        "<option>Gningarg Point (E 1)</option>" +
        "<option>Gningarg Point (E 2)</option>" +
        "<option>Gningarg Point (E 3)</option>" +
        "<option>Gningarg Point (E 4)</option>" +
        "<option>Gningarg Point (E 5)</option>" +
        "<option>Gningarg Point (E 6)</option>" +
        "<option>Gningarg Point (E 7)</option>" +
        "<option>Brogden Pt (W 2)</option>" +
        "<option>Brogden Pt (W 1)</option>" +
        "<option>Brogden Pt (E 1)</option>" +
        "<option>Brogden Pt (E 2)</option>" +
        "<option>Brogden Pt (E 3)</option>" +
        "<option>Brogden Pt (E 4)</option>" +
        "<option>Laterite Pt (W 11)</option>" +
        "<option>Laterite Pt (W 11)</option>" +
        "<option>Laterite Pt (W 9)</option>" +
        "<option>Laterite Pt (W 8)</option>" +
        "<option>Laterite Pt (W 7)</option>" +
        "<option>Laterite Pt (W 6)</option>" +
        "<option>Laterite Pt (W 5)</option>" +
        "<option>Laterite Pt (W 4)</option>" +
        "<option>Laterite Pt (W 3)</option>" +
        "<option>Laterite Pt (W 2)</option>" +
        "<option>Laterite Pt (W 1)</option>" +
        "<option>Laterite Pt</option>" +
        "<option>Laterite Pt (E 1)</option>" +
        "<option>Laterite Pt (E 2)</option>" +
        "<option>Laterite Pt (E 3)</option>" +
        "<option>Laterite Pt (E 4)</option>" +
        "<option>Angulani Creek</option>" +
        "<option>White Rocks</option>" +
        "<option>Marligan Creek</option>" +
        "<option>White Rocks (W 3)</option>" +
        "<option>White Rocks (W 2)</option>" +
        "<option>White Rocks (W 1)</option>" +
        "<option>White Rocks</option>" +
        "<option>Ross Point</option>" +
        "<option>Ross Point (S)</option>" +
        "<option>Anuru Bay (N 1)</option>" +
        "<option>Anuru Bay (N 2)</option>" +
        "<option>Anuru Bay (N 3)</option>" +
        "<option>Anuru Bay (N 4)</option>" +
        "<option>Anuru Bay (N 5)</option>" +
        "<option>Anuru Bay (S 1)</option>" +
        "<option>Anuru Bay (S 2)</option>" +
        "<option>Anuru Bay (S 3)</option>" +
        "<option>Anuru Bay (S 4)</option>" +
        "<option>Anuru Bay (S 5)</option>" +
        "<option>Barclay Point (W 2)</option>" +
        "<option>Barclay Point (W 1)</option>" +
        "<option>Barclay Point</option>" +
        "<option>Barclay Point (E 1)</option>" +
        "<option>Barclay Point (E 2)</option>" +
        "<option>Waminari Bay (1)</option>" +
        "<option>Waminari Bay (2)</option>" +
        "<option>Waminari Bay (3)</option>" +
        "<option>Waminari Bay (4)</option>" +
        "<option>Waminari Bay (5)</option>" +
        "<option>Waminari Bay (6)</option>" +
        "<option>Wamirumu Point (1)</option>" +
        "<option>Wamirumu Point (2)</option>" +
        "<option>Wangularni Bay</option>" +
        "<option>Wangularni Bay (E 1)</option>" +
        "<option>Wangularni Bay (E 2)</option>" +
        "<option>Wangularni Bay (E 3)</option>" +
        "<option>Wangularni Bay (E 4)</option>" +
        "<option>Turner Point</option>" +
        "<option>Turner Point (S 1)</option>" +
        "<option>Turner Point (S 2)</option>" +
        "<option>Turner Point (S 3)</option>" +
        "<option>Turner Point (S 4)</option>" +
        "<option>King River (W 3)</option>" +
        "<option>King River (W 2)</option>" +
        "<option>King River (W 1)</option>" +
        "<option>King River (E 1)</option>" +
        "<option>King River (E 2)</option>" +
        "<option>King River (E 3)</option>" +
        "<option>King River (E 4)</option>" +
        "<option>King River (E 5)</option>" +
        "<option>King River (E 6)</option>" +
        "<option>King River (E 7)</option>" +
        "<option>King River (E 8)</option>" +
        "<option>Arrla Bay (W 2)</option>" +
        "<option>Arrla Bay (W 1)</option>" +
        "<option>Arrla Bay</option>" +
        "<option>Arrla Bay (E 1)</option>" +
        "<option>Arrla Bay (E 2)</option>" +
        "<option>Arrla Bay (E 3)</option>" +
        "<option>Arrla Bay (E 4)</option>" +
        "<option>Arrla Bay (E 5)</option>" +
        "<option>Arrla Bay (E 6)</option>" +
        "<option>Guion Point (1)</option>" +
        "<option>Guion Point (2)</option>" +
        "<option>Guion Point (E)</option>" +
        "<option>Relief Point (W 2)</option>" +
        "<option>Relief Point (W 1)</option>" +
        "<option>Relief Point</option>" +
        "<option>Cuthbert Point</option>" +
        "<option>Hall Point (W)</option>" +
        "<option>Hall Point</option>" +
        "<option>Hall Point (E)</option>" +
        "<option>Braithwaite Point (N)</option>" +
        "<option>Braithwaite Point (E)</option>" +
        "<option>Braithwaite Point (S 1)</option>" +
        "<option>Braithwaite Point (S 2)</option>" +
        "<option>Braithwaite Point (S 3)</option>" +
        "<option>Junction Bay (N 1)</option>" +
        "<option>Junction Bay (N 2)</option>" +
        "<option>Junction Bay (N 3)</option>" +
        "<option>Junction Bay (N 4)</option>" +
        "<option>Junction Bay (N 5)</option>" +
        "<option>Junction Bay (N 6)</option>" +
        "<option>Junction Bay (N 7)</option>" +
        "<option>Junction Bay (N 8)</option>" +
        "<option>Goomadeer River (N)</option>" +
        "<option>Goomadeer River (S 1)</option>" +
        "<option>Goomadeer River (S 2)</option>" +
        "<option>Goomadeer River (S 3)</option>" +
        "<option>Wurugoij Creek (N)</option>" +
        "<option>Wurugoij Creek (E)</option>" +
        "<option>Majari Creek (W)</option>" +
        "<option>Majari Creek (E 1)</option>" +
        "<option>Majari Creek (E 2)</option>" +
        "<option>Majari Creek (E 3)</option>" +
        "<option>Goodameer Pt (W 4)</option>" +
        "<option>Goodameer Pt (W 3)</option>" +
        "<option>Goodameer Pt (W 2)</option>" +
        "<option>Goodameer Pt (W 1)</option>" +
        "<option>Goodameer Pt (E 1)</option>" +
        "<option>Goodameer Pt (E 2)</option>" +
        "<option>Rolling Bay (W 2)</option>" +
        "<option>Rolling Bay (W 1)</option>" +
        "<option>Rolling Bay (E 1)</option>" +
        "<option>Rolling Bay (E 2)</option>" +
        "<option>Rolling Bay (E 3)</option>" +
        "<option>Rolling Bay (E 4)</option>" +
        "<option>Hawkesbury Pt</option>" +
        "<option>Hawkesbury Pt (E)</option>" +
        "<option>West Pt (W)</option>" +
        "<option>West Pt (S 1)</option>" +
        "<option>West Pt (S 2)</option>" +
        "<option>West Pt (S 3)</option>" +
        "<option>Gumeradji Pt (W)</option>" +
        "<option>Gumeradji Pt (S 1)</option>" +
        "<option>Gumeradji Pt (S 2)</option>" +
        "<option>Gumeradji Pt (S 3)</option>" +
        "<option>Gumeradji Pt (S 4)</option>" +
        "<option>South West Pt (W 2)</option>" +
        "<option>South West Pt (W 1)</option>" +
        "<option>South West Pt (S 1)</option>" +
        "<option>South West Pt (S 2)</option>" +
        "<option>Maningrida (S 2)</option>" +
        "<option>Maningrida (S 1)</option>" +
        "<option>Maningrida (boat ramp)</option>" +
        "<option>Maningrida (N)</option>" +
        "<option>Noth East Pt (W)</option>" +
        "<option>Noth East Pt (E)</option>" +
        "<option>Skirmish Pt</option>" +
        "<option>Skirmish Pt (E 1)</option>" +
        "<option>Skirmish Pt (E 2)</option>" +
        "<option>Skirmish Pt (E 3)</option>" +
        "<option>Skirmish Pt (E 4)</option>" +
        "<option>Boucaut Bay (W 3)</option>" +
        "<option>Boucaut Bay (W 2)</option>" +
        "<option>Boucaut Bay (W 1)</option>" +
        "<option>Nabbarla (W 4)</option>" +
        "<option>Nabbarla (W 3)</option>" +
        "<option>Nabbarla (W 2)</option>" +
        "<option>Nabbarla (W 1)</option>" +
        "<option>Nabbarla</option>" +
        "<option>Boucaut Bay (centre)</option>" +
        "<option>Berraja</option>" +
        "<option>Gupanga</option>" +
        "<option>Yilan</option>" +
        "<option>False Pt</option>" +
        "<option>Cape Stewart (W 2)</option>" +
        "<option>Cape Stewart (W 1)</option>" +
        "<option>Cape Stewart</option>" +
        "<option>Cape Stewart (E 1)</option>" +
        "<option>Cape Stewart (E 2)</option>" +
        "<option>Cape Stewart (E 3)</option>" +
        "<option>Cape Stewart (E 4)</option>" +
        "<option>Cape Stewart (E 5)</option>" +
        "<option>Ngandadanda Ck (N 3)</option>" +
        "<option>Ngandadanda Ck (N 2)</option>" +
        "<option>Ngandadanda Ck (N 1)</option>" +
        "<option>Gumugumuk</option>" +
        "<option>Darbada Is (1)</option>" +
        "<option>Darbada Is (2)</option>" +
        "<option>Milingimbi</option>" +
        "<option>Milingimbi(S)</option>" +
        "<option>MacKinnon Pt</option>" +
        "<option>MacKinnon Pt (S)</option>" +
        "<option>Dhiprrnjura</option>" +
        "<option>Dhiprrnjura (E 1)</option>" +
        "<option>Dhiprrnjura (E 2)</option>" +
        "<option>Dhiprrnjura (E 3)</option>" +
        "<option>Dhiprrnjura (E 4)</option>" +
        "<option>Dhiprrnjura (E 5)</option>" +
        "<option>Dhiprrnjura (E 6)</option>" +
        "<option>Banyan Island (W 1)</option>" +
        "<option>Banyan Island (W 2)</option>" +
        "<option>Banyan Island (N 1)</option>" +
        "<option>Banyan Island (N 2)</option>" +
        "<option>Banyan Island (N 3)</option>" +
        "<option>Banyan Island (N 4)</option>" +
        "<option>Banyan Island (N 5)</option>" +
        "<option>Banyan Island (N 6)</option>" +
        "<option>Banyan Island (N 7)</option>" +
        "<option>Point Guy (E 1)</option>" +
        "<option>Point Guy (E 2)</option>" +
        "<option>Point Guy (E 3)</option>" +
        "<option>Point Guy (E 4)</option>" +
        "<option>Langarra (W 3)</option>" +
        "<option>Langarra (W 2)</option>" +
        "<option>Langarra (W 1)</option>" +
        "<option>Langarra</option>" +
        "<option>Langarra (E)</option>" +
        "<option>Jigaimurra Pt (E)</option>" +
        "<option>Malga Pt (W 2)</option>" +
        "<option>Malga Pt (W 1)</option>" +
        "<option>Ngurubudanamirri Bay (1)</option>" +
        "<option>Ngurubudanamirri Bay (2)</option>" +
        "<option>Ngurubudanamirri Bay (3)</option>" +
        "<option>Worrmi Pt (W 2)</option>" +
        "<option>Worrmi Pt (W 1)</option>" +
        "<option>Worrmi Pt (E)</option>" +
        "<option>Ganbagawirra Pt (W)</option>" +
        "<option>Ganbagawirra Pt (E)</option>" +
        "<option>Nikawu</option>" +
        "<option>Matjaagnur Pt (N 1)</option>" +
        "<option>Matjaagnur Pt (N 2)</option>" +
        "<option>Dhambala</option>" +
        "<option>Pt Bristow</option>" +
        "<option>Pt Bristow (N)</option>" +
        "<option>Galiwinku (S)</option>" +
        "<option>Galiwinku</option>" +
        "<option>Gorabi cliffs (S)</option>" +
        "<option>Gorabi cliffs</option>" +
        "<option>Dhudupu (S)</option>" +
        "<option>Dhudupu</option>" +
        "<option>Ngayawilli</option>" +
        "<option>Ngayawilli (N)</option>" +
        "<option>Waranga Pt (S 3)</option>" +
        "<option>Waranga Pt (S 2)</option>" +
        "<option>Waranga Pt (S 1)</option>" +
        "<option>Waranga Pt (E)</option>" +
        "<option>Dhayirri</option>" +
        "<option>Dhayirri (E)</option>" +
        "<option>Ganawa Pt (W)</option>" +
        "<option>Ganawa Pt (E 1)</option>" +
        "<option>Ganawa Pt (E 2)</option>" +
        "<option>Watdagawuy</option>" +
        "<option>Watdagawuy (E 1)</option>" +
        "<option>Watdagawuy (E 2)</option>" +
        "<option>Gitan Pt (W)</option>" +
        "<option>Gitan Pt</option>" +
        "<option>Gitan Pt (E 1)</option>" +
        "<option>Gitan Pt (E 2)</option>" +
        "<option>Gitan Pt (E 3)</option>" +
        "<option>Dharrwar (W 3)</option>" +
        "<option>Dharrwar (W 2</option>" +
        "<option>Dharrwar (W1)</option>" +
        "<option>Refuge Bay (1)</option>" +
        "<option>Refuge Bay (2)</option>" +
        "<option>Banthula</option>" +
        "<option>Refuge Bay (4)</option>" +
        "<option>Refuge Bay (5)</option>" +
        "<option>Naningbura (S 1)</option>" +
        "<option>Naningbura</option>" +
        "<option>Gawa (W)</option>" +
        "<option>Gawa</option>" +
        "<option>Streeton Strait (S 1)</option>" +
        "<option>Streeton Strait (S 2)</option>" +
        "<option>Streeton Strait (S 3)</option>" +
        "<option>Streeton Strait (S 4)</option>" +
        "<option>Streeton Strait (S 5)</option>" +
        "<option>Elcho 756</option>" +
        "<option>Elcho 757</option>" +
        "<option>Elcho 758</option>" +
        "<option>Elcho 759</option>" +
        "<option>Elcho 760</option>" +
        "<option>Elcho 761</option>" +
        "<option>Elcho 762</option>" +
        "<option>Elcho 763</option>" +
        "<option>Elcho 764</option>" +
        "<option>Elcho 765</option>" +
        "<option>Elcho 766</option>" +
        "<option>Elcho 767</option>" +
        "<option>Elcho 768</option>" +
        "<option>Elcho 769</option>" +
        "<option>Elcho 770</option>" +
        "<option>Elcho 771</option>" +
        "<option>Napier Peninsula (W 1)</option>" +
        "<option>Napier Peninsula (W 2)</option>" +
        "<option>Napier Peninsula (W 3)</option>" +
        "<option>Napier Peninsula (W 4)</option>" +
        "<option>Pt Napier (1)</option>" +
        "<option>Pt Napier (2)</option>" +
        "<option>Pt Napier (3)</option>" +
        "<option>Napier Pens. (S 1)</option>" +
        "<option>Napier Pens. (S 2)</option>" +
        "<option>Napier Pens. (S 3)</option>" +
        "<option>Napier Pens. (S 4)</option>" +
        "<option>Napier Pens. (S 5)</option>" +
        "<option>Napier Pens. (S 6)</option>" +
        "<option>Napier Pens. (S 7)</option>" +
        "<option>Napier Pens. (S 8)</option>" +
        "<option>Napier Pens. (S 9)</option>" +
        "<option>Napier Pens. (S 10)</option>" +
        "<option>Napier Pens. (S 11)</option>" +
        "<option>Napier Pens. (S 12)</option>" +
        "<option>Napier Pens. (S 13)</option>" +
        "<option>Napier Pens. (S 14)</option>" +
        "<option>Napier Pens. (S 15)</option>" +
        "<option>Napier Pens. (S 16)</option>" +
        "<option>Napier Pens. (S 17)</option>" +
        "<option>Napier Pens. (S 18)</option>" +
        "<option>Napier Pens. (S 19)</option>" +
        "<option>Napier Pens. (S 20)</option>" +
        "<option>Napier Pens. (S 21)</option>" +
        "<option>Napier Pens. (S 22)</option>" +
        "<option>Napier Pens. (S 23)</option>" +
        "<option>Napier Pens. (S 24)</option>" +
        "<option>Napier Pens. (S 25)</option>" +
        "<option>Napier Pens. (S 26)</option>" +
        "<option>Warrayin (S)</option>" +
        "<option>Warrayin</option>" +
        "<option>Warrayin (E)</option>" +
        "<option>Buckingham Bay (E 4)</option>" +
        "<option>Buckingham Bay (E 5)</option>" +
        "<option>Buckingham Bay (E 6)</option>" +
        "<option>Buckingham Bay (E 7)</option>" +
        "<option>Buckingham Bay (E 8)</option>" +
        "<option>Buckingham Bay (E 9)</option>" +
        "<option>Buckingham Bay (E 10)</option>" +
        "<option>Buckingham Bay (E 11)</option>" +
        "<option>Buckingham Bay (E 12)</option>" +
        "<option>Buckingham Bay (E 13)</option>" +
        "<option>Buckingham Bay (E 14)</option>" +
        "<option>Buckingham Bay (E 15)</option>" +
        "<option>Kurala R (W 1)</option>" +
        "<option>Kurala R (W 2)</option>" +
        "<option>Kurala R (W 3)</option>" +
        "<option>Kurala R (W 4)</option>" +
        "<option>Kurala R (E 1)</option>" +
        "<option>Kurala R (E 2)</option>" +
        "<option>Kurala R (E 3)</option>" +
        "<option>Kurala R (E 4)</option>" +
        "<option>Kurala R (E 5)</option>" +
        "<option>Flinders Peninsula (N 1)</option>" +
        "<option>Flinders Peninsula (N 2)</option>" +
        "<option>Flinders Peninsula (N 3)</option>" +
        "<option>Flinders Peninsula (N 4)</option>" +
        "<option>Flinders Peninsula (N 5)</option>" +
        "<option>Flinders Peninsula (N 6)</option>" +
        "<option>Flinders Peninsula (N 7)</option>" +
        "<option>Flinders Peninsula (N 8)</option>" +
        "<option>Flinders Peninsula (N 9)</option>" +
        "<option>Flinders Peninsula (N 10)</option>" +
        "<option>Flinders Peninsula (N 11)</option>" +
        "<option>Flinders Peninsula (N 12)</option>" +
        "<option>Flinders Peninsula (N 13)</option>" +
        "<option>Flinders Peninsula (N 14)</option>" +
        "<option>Flinders Peninsula (N 15)</option>" +
        "<option>Flinders Peninsula (N 16)</option>" +
        "<option>Flinders Peninsula (N 17)</option>" +
        "<option>Flinders Peninsula (N 18)</option>" +
        "<option>Flinders Peninsula (N 19)</option>" +
        "<option>Flinders Pt (W)</option>" +
        "<option>Flinders Pt (E 1)</option>" +
        "<option>Flinders Pt (E 2)</option>" +
        "<option>Flinders Pt (E 3)</option>" +
        "<option>Flinders Pt (E 4)</option>" +
        "<option>Flinders Pt (E 5)</option>" +
        "<option>Probable Is (E 1)</option>" +
        "<option>Probable Is (E 2)</option>" +
        "<option>Probable Is (E 3)</option>" +
        "<option>Probable Is (E 4)</option>" +
        "<option>Probable Is (E 5)</option>" +
        "<option>Probable Is (E 6)</option>" +
        "<option>Probable Is (E 7)</option>" +
        "<option>Probable Is (E 8)</option>" +
        "<option>Probable Is (E 9)</option>" +
        "<option>Probable Is (E 10)</option>" +
        "<option>Probable Is (E 11)</option>" +
        "<option>Flinders Pens. (S)</option>" +
        "<option>Yalliquin</option>" +
        "<option>Everett Is (N 1)</option>" +
        "<option>Everett Is (N 2)</option>" +
        "<option>Everett Is (N 3)</option>" +
        "<option>Everett Is (E 1)</option>" +
        "<option>Everett Is (E 2)</option>" +
        "<option>Everett Is (E 3)</option>" +
        "<option>Everett Is (E 4)</option>" +
        "<option>Raymangirr (N)</option>" +
        "<option>Raymangirr</option>" +
        "<option>Arnhem Bay (S 1)</option>" +
        "<option>Arnhem Bay (S 2)</option>" +
        "<option>Arnhem Bay (S 3)</option>" +
        "<option>Arnhem Bay (S 4)</option>" +
        "<option>Arnhem Bay (S 5)</option>" +
        "<option>Arnhem Bay (S 6)</option>" +
        "<option>Cliffy Pt (N)</option>" +
        "<option>Rorruwuy</option>" +
        "<option>Rorruwuy (W 1)</option>" +
        "<option>Rorruwuy (W 2)</option>" +
        "<option>Rhodes Pt (E)</option>" +
        "<option>Rhodes Pt (N 1)</option>" +
        "<option>Rhodes Pt (N 2)</option>" +
        "<option>Rhodes Pt (N 3)</option>" +
        "<option>Garadandanboi Bay</option>" +
        "<option>Cape Newbold (S 2)</option>" +
        "<option>Cape Newbold (S 1)</option>" +
        "<option>Mudhamul</option>" +
        "<option>Nalwarung Straits (1)</option>" +
        "<option>Nalwarung Straits (2)</option>" +
        "<option>Nalwarung Straits (3)</option>" +
        "<option>Nalwarung Straits (4)</option>" +
        "<option>Nalwarung Straits (5)</option>" +
        "<option>Nalwarung Straits (7)</option>" +
        "<option>Nalwarung Straits (7)</option>" +
        "<option>Nalwarung Straits (8)</option>" +
        "<option>Matta Matta</option>" +
        "<option>Gikal</option>" +
        "<option>Gurundu (1)</option>" +
        "<option>Gurundu (2)</option>" +
        "<option>Gurundu (3)</option>" +
        "<option>Nalwarung Straits (14)</option>" +
        "<option>Nalwarung Straits (15)</option>" +
        "<option>Malay Roads (1)</option>" +
        "<option>Malay Roads (2)</option>" +
        "<option>Malay Roads (3)</option>" +
        "<option>Malay Roads (4)</option>" +
        "<option>Malay Roads (5)</option>" +
        "<option>Malay Roads (6)</option>" +
        "<option>Malay Roads (7)</option>" +
        "<option>Malay Roads (8)</option>" +
        "<option>Malay Roads (9)</option>" +
        "<option>Malay Roads (10)</option>" +
        "<option>Malay Roads (11)</option>" +
        "<option>Dholtji (W)</option>" +
        "<option>Dholtji</option>" +
        "<option>Dholtji (E 1)</option>" +
        "<option>Dholtji (E 2)</option>" +
        "<option>Dholtji (E 3)</option>" +
        "<option>Dholtji (E 4)</option>" +
        "<option>Dholtji (E 5)</option>" +
        "<option>Dholtji (E 6)</option>" +
        "<option>Dholtji (E 7)</option>" +
        "<option>Dholtji (E 8)</option>" +
        "<option>Malay Roads (22)</option>" +
        "<option>Malay Roads (23)</option>" +
        "<option>Malay Roads (24)</option>" +
        "<option>Malay Roads (25)</option>" +
        "<option>Malay Roads (26)</option>" +
        "<option>Malay Roads (27)</option>" +
        "<option>Malay Roads (28)</option>" +
        "<option>Elizabeth Bay (1)</option>" +
        "<option>Elizabeth Bay (2)</option>" +
        "<option>Elizabeth Bay (3)</option>" +
        "<option>Elizabeth Bay (4)</option>" +
        "<option>Elizabeth Bay (5)</option>" +
        "<option>Elizabeth Bay (6)</option>" +
        "<option>Pt William</option>" +
        "<option>Cape Wilberforce</option>" +
        "<option>Melville Bay (1)</option>" +
        "<option>Melville Bay (2)</option>" +
        "<option>Melville Bay (3)</option>" +
        "<option>Bakirra (E 1)</option>" +
        "<option>Bakirra (E 2)</option>" +
        "<option>Melville Bay (5)</option>" +
        "<option>Melville Bay (6)</option>" +
        "<option>Melville Bay (7)</option>" +
        "<option>Melville Bay (8)</option>" +
        "<option>Melville Bay (9)</option>" +
        "<option>Melville Bay (10)</option>" +
        "<option>Melville Bay (11)</option>" +
        "<option>Melville Bay (12)</option>" +
        "<option>Melville Bay (13)</option>" +
        "<option>Melville Bay (14)</option>" +
        "<option>Melville Bay (15)</option>" +
        "<option>Mount Bonner (N 5)</option>" +
        "<option>Mount Bonner (N 4)</option>" +
        "<option>Mount Bonner (N 3)</option>" +
        "<option>Mount Bonner (N 2)</option>" +
        "<option>Mount Bonner (N 1)</option>" +
        "<option>Mount Bonner (S 1)</option>" +
        "<option>Mount Bonner (S 2)</option>" +
        "<option>Mount Bonner (S 3)</option>" +
        "<option>Mount Bonner (S 4)</option>" +
        "<option>Mount Bonner (S 5)</option>" +
        "<option>Mount Bonner (S 6)</option>" +
        "<option>Melville Bay (27)</option>" +
        "<option>Melville Bay (28)</option>" +
        "<option>Melville Bay (29)</option>" +
        "<option>Melville Bay (30)</option>" +
        "<option>Melville Bay (31)</option>" +
        "<option>Melville Bay (32)</option>" +
        "<option>Melville Bay (33)</option>" +
        "<option>Melville Bay (34)</option>" +
        "<option>Melville Bay (35)</option>" +
        "<option>Melville Bay (36)</option>" +
        "<option>Melville Bay (37)</option>" +
        "<option>Melville Bay (38)</option>" +
        "<option>Melville Bay (39)</option>" +
        "<option>Dolphin Rocks</option>" +
        "<option>Melville Bay (41)</option>" +
        "<option>Melville Bay (42)</option>" +
        "<option>Melville Bay (43)</option>" +
        "<option>Melville Bay (44)</option>" +
        "<option>Melville Bay (45)</option>" +
        "<option>Drimmie Head (E)</option>" +
        "<option>Drimmie Head</option>" +
        "<option>Drimmie Head (W)</option>" +
        "<option>McIntyre Pt (1)</option>" +
        "<option>McIntyre Pt (2)</option>" +
        "<option>McIntyre Pt (3)</option>" +
        "<option>Half Tide Pt</option>" +
        "<option>De Bell Pt</option>" +
        "<option>Inverell Bay</option>" +
        "<option>Inverell Bay(N)</option>" +
        "<option>Gove Harbour (1)</option>" +
        "<option>Gove Harbour (2)</option>" +
        "<option>Dundas Pt (E)</option>" +
        "<option>Dundas Pt (W)</option>" +
        "<option>Wargarpunda Pt (E)</option>" +
        "<option>Wargarpunda Pt (W)</option>" +
        "<option>Wallaby Beach</option>" +
        "<option>Wallaby Beach (E)</option>" +
        "<option>East Woody Pt (W 2)</option>" +
        "<option>East Woody Pt (W 1)</option>" +
        "<option>East Woody Pt</option>" +
        "<option>Gadalathami/Town</option>" +
        "<option>Town Beach (S 1)</option>" +
        "<option>Town Beach (S 2)</option>" +
        "<option>Town Beach (S 3)</option>" +
        "<option>Rainbow Cliffs (N)</option>" +
        "<option>Rainbow Cliffs</option>" +
        "<option>Rainbow Cliffs (S 1)</option>" +
        "<option>Rainbow Cliffs (S 2)</option>" +
        "<option>Mt Dundas (N)</option>" +
        "<option>Mt Dundas</option>" +
        "<option>Mt Dundas (S 1)</option>" +
        "<option>Mt Dundas (S 2)</option>" +
        "<option>Mt Dundas (S 3)</option>" +
        "<option>Yirrakala</option>" +
        "<option>Yirrakala (E 1)</option>" +
        "<option>Yirrakala (E 2)</option>" +
        "<option>Yirrakala (E 3)</option>" +
        "<option>Yirrakala (E 4)</option>" +
        "<option>Yirrakala (S 1)</option>" +
        "<option>Yirrakala (S 2)</option>" +
        "<option>Yirrakala (S 3)</option>" +
        "<option>Miles Is (S 1)</option>" +
        "<option>Miles Is (S 2)</option>" +
        "<option>Rocky Bay (N 2)</option>" +
        "<option>Rocky Bay (N 1)</option>" +
        "<option>Rocky Bay</option>" +
        "<option>Rocky Bay (S 1)</option>" +
        "<option>Rocky Bay (S 2)</option>" +
        "<option>Rocky Bay (S 3)</option>" +
        "<option>Little Bondi</option>" +
        "<option>Turtle Beach</option>" +
        "<option>Macassans (N 2)</option>" +
        "<option>Macassans (N 1)</option>" +
        "<option>Macassans Beach</option>" +
        "<option>Dalywoi Bay (N 2)</option>" +
        "<option>Dalywoi Bay (N 1)</option>" +
        "<option>Dalywoi Bay</option>" +
        "<option>Dalywoi Bay (1)</option>" +
        "<option>Dalywoi Bay (2)</option>" +
        "<option>Dalywoi Bay (3)</option>" +
        "<option>Dalywoi Bay (4)</option>" +
        "<option>Cape Arnhem (N)</option>" +
        "<option>Cape Arnhem (S 1)</option>" +
        "<option>Cape Arnhem (S 2)</option>" +
        "<option>Cape Arnhem (S 3)</option>" +
        "<option>Cape Arnhem (S 4)</option>" +
        "<option>Cape Arnhem (S 5)</option>" +
        "<option>Cape Arnhem (S 6)</option>" +
        "<option>Cape Arnhem (S 7)</option>" +
        "<option>Cape Arnhem (S 8)</option>" +
        "<option>Cape Arnhem (S 9)</option>" +
        "<option>Cape Arnhem (S 10)</option>" +
        "<option>Cape Arnhem (S 11)</option>" +
        "<option>Cape Arnhem (S 12)</option>" +
        "<option>Cape Arnhem (S 13)</option>" +
        "<option>Cape Arnhem (S 14)</option>" +
        "<option>Cape Arnhem (S 15)</option>" +
        "<option>Cape Arnhem (S 16)</option>" +
        "<option>Cape Arnhem (S 17)</option>" +
        "<option>Cape Arnhem (S 18)</option>" +
        "<option>Cape Arnhem (S 19)</option>" +
        "<option>Cape Arnhem (S 20)</option>" +
        "<option>Cape Arnhem (S 21)</option>" +
        "<option>Gwapilina Pt (N)</option>" +
        "<option>Gwapilina Pt</option>" +
        "<option>Port Bradshaw (E 1)</option>" +
        "<option>Port Bradshaw (E 2)</option>" +
        "<option>Port Bradshaw (E 3)</option>" +
        "<option>Yalangbara</option>" +
        "<option>Port Bradshaw (W 1)</option>" +
        "<option>Port Bradshaw (W 2)</option>" +
        "<option>Port Bradshaw (W 3)</option>" +
        "<option>Port Bradshaw (W 4)</option>" +
        "<option>Port Bradshaw (W 5)</option>" +
        "<option>Port Bradshaw (W 6)</option>" +
        "<option>Port Bradshaw (W 7)</option>" +
        "<option>Port Bradshaw (W 8)</option>" +
        "<option>Port Bradshaw (W 9)</option>" +
        "<option>Port Bradshaw (W 10)</option>" +
        "<option>Dhaniya</option>" +
        "<option>Holly Inlet (E)</option>" +
        "<option>Binanangoi Pt (N 5)</option>" +
        "<option>Binanangoi Pt (N 4)</option>" +
        "<option>Binanangoi Pt (N 3)</option>" +
        "<option>Binanangoi Pt (N 2)</option>" +
        "<option>Binanangoi Pt (N 1)</option>" +
        "<option>Binanangoi Pt (S 1)</option>" +
        "<option>Binanangoi Pt (S 2)</option>" +
        "<option>Binanangoi Pt (S 3)</option>" +
        "<option>Binanangoi Pt (S 4)</option>" +
        "<option>Holly Inlet</option>" +
        "<option>Holly Inlet (S)</option>" +
        "<option>Mt Alexander (N 6)</option>" +
        "<option>Mt Alexander (N 5)</option>" +
        "<option>Mt Alexander (N 4)</option>" +
        "<option>Mt Alexander (N 3)</option>" +
        "<option>Mt Alexander (N 2)</option>" +
        "<option>Mt Alexander (N 1)</option>" +
        "<option>Wanyanmera Pt</option>" +
        "<option>Wanyanmera Pt (W 1)</option>" +
        "<option>Wanyanmera Pt (W 2)</option>" +
        "<option>Wanyanmera Pt (W 3)</option>" +
        "<option>Wanyanmera Pt (W 4)</option>" +
        "<option>Buymarr (E)</option>" +
        "<option>Buymarr</option>" +
        "<option>Buymarr (S)</option>" +
        "<option>Pt Alexander (N 11)</option>" +
        "<option>Pt Alexander (N 10)</option>" +
        "<option>Pt Alexander (N 9)</option>" +
        "<option>Pt Alexander (N 8)</option>" +
        "<option>Pt Alexander (N 7)</option>" +
        "<option>Pt Alexander (N 6)</option>" +
        "<option>Pt Alexander (N 5)</option>" +
        "<option>Pt Alexander (N 4)</option>" +
        "<option>Pt Alexander (N 3)</option>" +
        "<option>Pt Alexander (N 2)</option>" +
        "<option>Pt Alexander (N 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Nanjiwoi Ck (S)</option>" +
        "<option>Nanjiwoi Ck (N)</option>" +
        "<option>Garrthalala (S)</option>" +
        "<option>Garrthalala</option>" +
        "<option>Garrthalala (N 1)</option>" +
        "<option>Garrthalala (N 2)</option>" +
        "<option>Garrthalala (N 3)</option>" +
        "<option>Grays Bay</option>" +
        "<option>Grays Bay (W 1)</option>" +
        "<option>Grays Bay (W 2)</option>" +
        "<option>Grays Bay (W 3)</option>" +
        "<option>Grays Bay (W 4)</option>" +
        "<option>Grays Bay (W 5)</option>" +
        "<option>Middle Pt (N)</option>" +
        "<option>Middle Pt (W1)</option>" +
        "<option>Middle Pt (W 2)</option>" +
        "<option>Middle Pt (W 3)</option>" +
        "<option>Middle Pt (W 4)</option>" +
        "<option>Middle Pt (W 5)</option>" +
        "<option>Caledon Bay (N 1)</option>" +
        "<option>Caledon Bay (N 2)</option>" +
        "<option>Caledon Bay (N 3)</option>" +
        "<option>Caledon Bay (N 4)</option>" +
        "<option>Caledon Bay (N 5)</option>" +
        "<option>Caledon Bay (N 6)</option>" +
        "<option>Caledon Bay (N 7)</option>" +
        "<option>Caledon Bay (N 8)</option>" +
        "<option>Caledon Bay (N 9)</option>" +
        "<option>Birany Birany (N)</option>" +
        "<option>Birany Birany</option>" +
        "<option>Birany Birany (S 1)</option>" +
        "<option>Birany Birany (S 2)</option>" +
        "<option>Caledon Pt (N 9)</option>" +
        "<option>Caledon Pt (N 8)</option>" +
        "<option>Caledon Pt (N 7)</option>" +
        "<option>Caledon Pt (N 6)</option>" +
        "<option>Caledon Pt (N 5)</option>" +
        "<option>Caledon Pt (N 4)</option>" +
        "<option>Caledon Pt (N 3)</option>" +
        "<option>Caledon Pt (N 2)</option>" +
        "<option>Caledon Pt (N 1)</option>" +
        "<option>Caledon Pt</option>" +
        "<option>Caledon Pt (S 1)</option>" +
        "<option>Caledon Pt (S 2)</option>" +
        "<option>Caledon Pt (S 3)</option>" +
        "<option>Caledon Pt (S 4)</option>" +
        "<option>Caledon Pt (S 5)</option>" +
        "<option>Caledon Pt (S 6)</option>" +
        "<option>Caledon Pt (S 7)</option>" +
        "<option>Caledon Pt (S 8)</option>" +
        "<option>Caledon Pt (S 9)</option>" +
        "<option>Caledon Pt (S 10)</option>" +
        "<option>Caledon Pt (S 11)</option>" +
        "<option>Caledon Pt (S 12)</option>" +
        "<option>Caledon Pt (S 13)</option>" +
        "<option>Caledon Pt (S 14)</option>" +
        "<option>Caledon Pt (S 15)</option>" +
        "<option>Caledon Pt (S 16)</option>" +
        "<option>Caledon Pt (S 17)</option>" +
        "<option>Caledon Pt (S 18)</option>" +
        "<option>Caledon Pt (S 19)</option>" +
        "<option>Du Pre Bay</option>" +
        "<option>Du Pre Bay (S)</option>" +
        "<option>Du Pre Pt (N)</option>" +
        "<option>Du Pre Pt (S 1)</option>" +
        "<option>Du Pre Pt (S 2)</option>" +
        "<option>Du Pre Pt (S 3)</option>" +
        "<option>Du Pre Pt (S 4)</option>" +
        "<option>Cape Grey</option>" +
        "<option>Cape Grey (S 1)</option>" +
        "<option>Cape Grey (S 2)</option>" +
        "<option>Cape Grey (S 3)</option>" +
        "<option>Wonga Bay (E 1)</option>" +
        "<option>Wonga Bay (E 2)</option>" +
        "<option>Wonga Bay (E 3)</option>" +
        "<option>Wonga Bay (E 4)</option>" +
        "<option>Bukudal</option>" +
        "<option>Wonga Bay (W 1)</option>" +
        "<option>Wonga Bay (W 2)</option>" +
        "<option>Wonga Bay (W 3)</option>" +
        "<option>Wonga Bay (W 4)</option>" +
        "<option>Wonga Bay (W 5)</option>" +
        "<option>Wonga Bay (W 6)</option>" +
        "<option>Wonga Bay (W 7)</option>" +
        "<option>Guyuwiri Pt (N 2)</option>" +
        "<option>Guyuwiri Pt (N 1)</option>" +
        "<option>Guyuwiri Pt</option>" +
        "<option>Guyuwiri Pt (W 1)</option>" +
        "<option>Guyuwiri Pt (W 2)</option>" +
        "<option>Guyuwiri Pt (W 3)</option>" +
        "<option>Guyuwiri Pt (W 4)</option>" +
        "<option>Trial Bay (E 1)</option>" +
        "<option>Trial Bay (E 2)</option>" +
        "<option>Trial Bay (E 3)</option>" +
        "<option>Trial Bay (E 4)</option>" +
        "<option>Trial Bay (E 5)</option>" +
        "<option>Trial Bay (E 6)</option>" +
        "<option>Trial Bay (E 7)</option>" +
        "<option>Trial Bay (E 8)</option>" +
        "<option>Trial Bay (E 9)</option>" +
        "<option>Trial Bay (E 10)</option>" +
        "<option>Trial Bay (E 11)</option>" +
        "<option>St Davids Bay (1)</option>" +
        "<option>St Davids Bay (2)</option>" +
        "<option>St Davids Bay (3)</option>" +
        "<option>St Davids Bay (4)</option>" +
        "<option>St Davids Bay (5)</option>" +
        "<option>Trial Bay (N 1)</option>" +
        "<option>Trial Bay (N 2)</option>" +
        "<option>Trial Bay (N 3)</option>" +
        "<option>Gurkawuy</option>" +
        "<option>Gurkawuy (W)</option>" +
        "<option>Trial Bay (W 1)</option>" +
        "<option>Trial Bay (W 2)</option>" +
        "<option>Trial Bay (W 3)</option>" +
        "<option>Trial Bay (W 4)</option>" +
        "<option>Trial Bay (W 5)</option>" +
        "<option>Trial Bay (W 6)</option>" +
        "<option>Bald Pt (W 5)</option>" +
        "<option>Bald Pt (W 4)</option>" +
        "<option>Bald Pt (W 3)</option>" +
        "<option>Bald Pt (W 2)</option>" +
        "<option>Bald Pt (W 1)</option>" +
        "<option>Bald Pt</option>" +
        "<option>Bald Pt (S 1)</option>" +
        "<option>Bald Pt (S 2)</option>" +
        "<option>Bald Pt (S 3)</option>" +
        "<option>Bagbiringura Pt (N 4)</option>" +
        "<option>Bagbiringura Pt (N 3)</option>" +
        "<option>Bagbiringura Pt (N 2)</option>" +
        "<option>Bagbiringura Pt (N 1)</option>" +
        "<option>Bagbiringura Pt (W 1)</option>" +
        "<option>Bagbiringura Pt (W 2)</option>" +
        "<option>Bagbiringura Pt (W 3)</option>" +
        "<option>Bagbiringura Pt (W 4)</option>" +
        "<option>Bagbiringura Pt (W 5)</option>" +
        "<option>Bagbiringura Pt (W 6)</option>" +
        "<option>Bagbiringura Pt (W 7)</option>" +
        "<option>Wardarlea Bay (1)</option>" +
        "<option>Wardarlea Bay (2)</option>" +
        "<option>Wardarlea Bay (3)</option>" +
        "<option>Wardarlea Bay (4)</option>" +
        "<option>Wardarlea Bay (5)</option>" +
        "<option>Point Arrowsmith (N 5)</option>" +
        "<option>Point Arrowsmith (N 4)</option>" +
        "<option>Point Arrowsmith (N 3)</option>" +
        "<option>Point Arrowsmith (N 2)</option>" +
        "<option>Point Arrowsmith (N 1)</option>" +
        "<option>Point Arrowsmith (E)</option>" +
        "<option>Point Arrowsmith (W 1)</option>" +
        "<option>Point Arrowsmith (W 2)</option>" +
        "<option>Point Arrowsmith (W 3)</option>" +
        "<option>Marasella Bay (1)</option>" +
        "<option>Marasella Bay (2)</option>" +
        "<option>Marasella Bay (3)</option>" +
        "<option>Marasella Bay (4)</option>" +
        "<option>Marasella Bay (5)</option>" +
        "<option>Djarrakpi (1)</option>" +
        "<option>Djarrakpi (2)</option>" +
        "<option>Djarrakpi (3)</option>" +
        "<option>Djarrakpi (4)</option>" +
        "<option>Djarrakpi (5)</option>" +
        "<option>Cape Shield (E 2)</option>" +
        "<option>Cape Shield (E 1)</option>" +
        "<option>Cape Shield</option>" +
        "<option>Cape Shield (W 1)</option>" +
        "<option>Cape Shield (W 2)</option>" +
        "<option>Cape Shield (W 3)</option>" +
        "<option>Cape Shield (W 4)</option>" +
        "<option>Cape Shield (W 5)</option>" +
        "<option>Cape Shield (W 6)</option>" +
        "<option>Barraratjpi (S)</option>" +
        "<option>Barraratjpi</option>" +
        "<option>Barraratjpi (N 1)</option>" +
        "<option>Barraratjpi (N 2)</option>" +
        "<option>Barraratjpi (N 3)</option>" +
        "<option>Barraratjpi (N 4)</option>" +
        "<option>Barraratjpi (N 5)</option>" +
        "<option>Myaoola Bay (E 1)</option>" +
        "<option>Myaoola Bay (E 2)</option>" +
        "<option>Myaoola Bay (E 3)</option>" +
        "<option>Myaoola Bay (E 4)</option>" +
        "<option>Myaoola Bay (W 1)</option>" +
        "<option>Myaoola Bay (W 2)</option>" +
        "<option>Myaoola Bay (W 3)</option>" +
        "<option>Blue Mud Bay (N 1)</option>" +
        "<option>Blue Mud Bay (N 2)</option>" +
        "<option>Blue Mud Bay (N 3)</option>" +
        "<option>Blue Mud Bay (N 4)</option>" +
        "<option>Blue Mud Bay (N 5)</option>" +
        "<option>Baniyala (N 3)</option>" +
        "<option>Baniyala (N 2)</option>" +
        "<option>Baniyala (N 1)</option>" +
        "<option>Baniyala</option>" +
        "<option>Baniyala (S 1)</option>" +
        "<option>Baniyala (S 2)</option>" +
        "<option>Baniyala (S 3)</option>" +
        "<option>Pt Blane (N 2)</option>" +
        "<option>Pt Blane (N 1)</option>" +
        "<option>Pt Blane</option>" +
        "<option>Pt Blane (W 1)</option>" +
        "<option>Pt Blane (W 2)</option>" +
        "<option>Pt Blane (W 3)</option>" +
        "<option>Grindall Bay (E 1)</option>" +
        "<option>Grindall Bay (E 2)</option>" +
        "<option>Grindall Bay (W 1)</option>" +
        "<option>Grindall Bay (W 2)</option>" +
        "<option>Grindall Bay (W 3)</option>" +
        "<option>Grindall Bay (W 4)</option>" +
        "<option>Grindall Bay (W 5)</option>" +
        "<option>Grindall Bay (W 6)</option>" +
        "<option>Grindall Bay (W 7)</option>" +
        "<option>Grindall Bay (W 8)</option>" +
        "<option>Mt Grindall (N 5)</option>" +
        "<option>Mt Grindall (N 4)</option>" +
        "<option>Mt Grindall (N 3)</option>" +
        "<option>Mt Grindall (N 2)</option>" +
        "<option>Mt Grindall (N 1)</option>" +
        "<option>Grindall Pt (N 4)</option>" +
        "<option>Grindall Pt (N3)</option>" +
        "<option>Grindall Pt (N 2)</option>" +
        "<option>Grindall Pt (N 1)</option>" +
        "<option>Grindall Pt</option>" +
        "<option>Grindall Pt (W)</option>" +
        "<option>Jalma Bay (E 1)</option>" +
        "<option>Jalma Bay (E 2)</option>" +
        "<option>Jalma Bay (E 3)</option>" +
        "<option>Jalma Bay (E 4)</option>" +
        "<option>Jalma Bay (E 5)</option>" +
        "<option>Jalma Bay (W)</option>" +
        "<option>Kapui Pt (N 3)</option>" +
        "<option>Kapui Pt (N 2)</option>" +
        "<option>Kapui Pt (N 1)</option>" +
        "<option>Kapui Pt</option>" +
        "<option>Haddon Hd (N 6)</option>" +
        "<option>Haddon Hd (N 5)</option>" +
        "<option>Haddon Hd (N 4)</option>" +
        "<option>Haddon Hd (N 3)</option>" +
        "<option>Haddon Hd (N 2)</option>" +
        "<option>Haddon Hd (N 1)</option>" +
        "<option>Haddon Hd</option>" +
        "<option>Haddon Hd (S 1)</option>" +
        "<option>Haddon Hd (S 2)</option>" +
        "<option>Haddon Hd (S 3)</option>" +
        "<option>Haddon Hd (S 4)</option>" +
        "<option>Haddon Hd (W 1)</option>" +
        "<option>Haddon Hd (W 2)</option>" +
        "<option>Yilila (N 3)</option>" +
        "<option>Yilila (N 2)</option>" +
        "<option>Yilila (N 1)</option>" +
        "<option>Cape Barrow (W 8)</option>" +
        "<option>Cape Barrow (W 7)</option>" +
        "<option>Cape Barrow (W 6)</option>" +
        "<option>Cape Barrow (W 5)</option>" +
        "<option>Cape Barrow (W 4)</option>" +
        "<option>Cape Barrow (W 3)</option>" +
        "<option>Cape Barrow (W 2)</option>" +
        "<option>Cape Barrow (W 1)</option>" +
        "<option>Cape Barrow (S 1)</option>" +
        "<option>Cape Barrow (S 2)</option>" +
        "<option>Cape Barrow (S 3)</option>" +
        "<option>Cape Barrow (S 4)</option>" +
        "<option>Cape Barrow (S 5)</option>" +
        "<option>Cape Barrow (S 6)</option>" +
        "<option>Cape Barrow (S 7)</option>" +
        "<option>Cape Barrow (S 8)</option>" +
        "<option>Amaya</option>" +
        "<option>Amaya (S)</option>" +
        "<option>Dharni</option>" +
        "<option>Almarlangij Ck</option>" +
        "<option>Almarlangij Ck (S 1)</option>" +
        "<option>Almarlangij Ck (S 2)</option>" +
        "<option>Aryillarlarg</option>" +
        "<option>Aryillarlarg (S)</option>" +
        "<option>Arndani (N 2)</option>" +
        "<option>Arndani (N 1)</option>" +
        "<option>Arndani</option>" +
        "<option>Minnie Ck</option>" +
        "<option>Minnie Ck (S)</option>" +
        "<option>Miwul</option>" +
        "<option>Miwal</option>" +
        "<option>Hart River</option>" +
        "<option>Muntak Creek (N)</option>" +
        "<option>Muntak Creek</option>" +
        "<option>Rantyirrity Pt (N)</option>" +
        "<option>Rantyirrity Pt</option>" +
        "<option>Rantyirrity Pt (S 1)</option>" +
        "<option>Rantyirrity Pt (S 2)</option>" +
        "<option>Rantyirrity Pt (S 3)</option>" +
        "<option>Minntirri (1)</option>" +
        "<option>Minntirri (2)</option>" +
        "<option>Amamarrity (1)</option>" +
        "<option>Amamarrity (2)</option>" +
        "<option>Kularruty Ck (N)</option>" +
        "<option>Kularruty Ck (S 1)</option>" +
        "<option>Kularruty Ck (S 2)</option>" +
        "<option>Numbulwar</option>" +
        "<option>Wiyakipa (N 2)</option>" +
        "<option>Wiyakipa (N 1)</option>" +
        "<option>Wiyakipa Beach</option>" +
        "<option>Wuyagiba</option>" +
        "<option>Yikikukunyiyanga</option>" +
        "<option>Roper River</option>" +
        "<option>Towns R (N)</option>" +
        "<option>Towns R</option>" +
        "<option>Towns R (S 1)</option>" +
        "<option>Towns R (S 2)</option>" +
        "<option>Spillen Ck (W)</option>" +
        "<option>Spillen Ck (E)</option>" +
        "<option>Wuraliwuntya Ck (W)</option>" +
        "<option>Wuraliwuntya Ck (E 1)</option>" +
        "<option>Wuraliwuntya Ck (E 2)</option>" +
        "<option>Wuraliwuntya Ck (E 3)</option>" +
        "<option>Wuraliwuntya Ck (E 4)</option>" +
        "<option>Rosie Ck (W)</option>" +
        "<option>Rosie Ck</option>" +
        "<option>Rosie Ck (E 1)</option>" +
        "<option>Rosie Ck (E 2)</option>" +
        "<option>Rosie Ck (S 1)</option>" +
        "<option>Rosie Ck (S 2)</option>" +
        "<option>Rosie Ck (S 3)</option>" +
        "<option>Rosie Ck (S 4)</option>" +
        "<option>Rosie Ck (S 5)</option>" +
        "<option>Rosie Ck (S 6)</option>" +
        "<option>South West Is (N 1)</option>" +
        "<option>South West Is (N 2)</option>" +
        "<option>South West Is (N 3)</option>" +
        "<option>South West Is (N 4)</option>" +
        "<option>South West Is (N 5)</option>" +
        "<option>South West Is (N 6)</option>" +
        "<option>Pelican Pt</option>" +
        "<option>Robinson R (W 3)</option>" +
        "<option>Robinson R (W 2)</option>" +
        "<option>Robinson R (W 1)</option>" +
        "<option>Robinson R</option>" +
        "<option>Robinson R (E)</option>" +
        "<option>Shark Ck</option>" +
        "<option>Seven Emu Ck</option>" +
        "<option>Seven Emu Ck (E)</option>" +
        "<option>Stockyard Ck</option>" +
        "<option>Skeleton Ck</option>" +
        "<option>Skeleton Ck (E)</option>" +
        "<option>Calvert R (W 3)</option>" +
        "<option>Calvert R (W 2)</option>" +
        "<option>Calvert R (W 1)</option>" +
        "<option>Calvert R</option>" +
        "<option>Calvert R (E 1)</option>" +
        "<option>Calvert R (E 2)</option>" +
        "<option>Sandy Ck</option>" +
        "<option>Dingo Ck</option>" +
        "<option>Mountain Ck</option>" +
        "<option>Mountain Ck (E)</option>" +
        "<option>Darwin Recreation Lagoon</option>" +
        "<option>Darwin Wave Lagoon</option>" +
        "<option>Gun Ck (W 2)</option>" +
        "<option>Gun Ck (W 1)</option>" +
        "<option>Gun Ck (e)</option>" +
        "<option>Tully Inlet</option>" +
        "<option>Tully-Massacre inlet</option>" +
        "<option>Horse Island</option>" +
        "<option>Horse Island (E)</option>" +
        "<option>Hann Ck (W)</option>" +
        "<option>Hann Ck (E)</option>" +
        "<option>Eight Mike CK (E 1)</option>" +
        "<option>Eight Mike CK (E 2)</option>" +
        "<option>Eight Mike CK (E 3)</option>" +
        "<option>Cliffdale Ck (W 2)</option>" +
        "<option>Cliffdale Ck (W 1)</option>" +
        "<option>Cliffdale Ck (E)</option>" +
        "<option>Beryl Ck (E)</option>" +
        "<option>Passmore Creek</option>" +
        "<option>Bayley Pt</option>" +
        "<option>Syrell Ck</option>" +
        "<option>Pt Parker</option>" +
        "<option>Pt Parker (S)</option>" +
        "<option>James Ck</option>" +
        "<option>Albert R (W)</option>" +
        "<option>Albert R (E)</option>" +
        "<option>Gore Pt (W 3)</option>" +
        "<option>Gore Pt (W 2)</option>" +
        "<option>Gore Pt (W 1)</option>" +
        "<option>Spring Ck</option>" +
        "<option>Boyne Inlet (W)</option>" +
        "<option>Boyne Inlet (E)</option>" +
        "<option>Karumba</option>" +
        "<option>Brannigan Ck (S 3)</option>" +
        "<option>Brannigan Ck (S 2)</option>" +
        "<option>Brannigan Ck (S 1)</option>" +
        "<option>Accident Ck (S)</option>" +
        "<option>Accident Ck (N 1)</option>" +
        "<option>Accident Ck (N 2)</option>" +
        "<option>Bold Pt</option>" +
        "<option>Van Diemen Inlet</option>" +
        "<option>Duck Ck</option>" +
        "<option>Kelso Ck</option>" +
        "<option>Staaten River (S)</option>" +
        "<option>Staaten River (N 1)</option>" +
        "<option>Staaten River (N 2)</option>" +
        "<option>Salt Arm Ck (S)</option>" +
        "<option>Salt Arm Ck (N)</option>" +
        "<option>Jacks Pocket (N)</option>" +
        "<option>Jacks Pocket (S)</option>" +
        "<option>Rocky Ck (S 2)</option>" +
        "<option>Rocky Ck (S 1)</option>" +
        "<option>Nassau R (mouth)</option>" +
        "<option>Nassau R (N)</option>" +
        "<option>Horse Ck (N)</option>" +
        "<option>Horse-Topsy Ck</option>" +
        "<option>South Mitchell R (S)</option>" +
        "<option>South Mitchell R</option>" +
        "<option>South Mitchell R (N)</option>" +
        "<option>Mitchell R (N 1)</option>" +
        "<option>Mitchell R (N 2)</option>" +
        "<option>North Arm</option>" +
        "<option>Coleman R</option>" +
        "<option>Malaman Ck</option>" +
        "<option>Melamen Plain</option>" +
        "<option>Pormpuraaw</option>" +
        "<option>Moonkam Ck</option>" +
        "<option>Edward R</option>" +
        "<option>Christmas Ck</option>" +
        "<option>Hersey Ck</option>" +
        "<option>Hersey-King cks</option>" +
        "<option>Holroyd R (S)</option>" +
        "<option>Holroyd R mouth</option>" +
        "<option>Holroyd R mouth (N)</option>" +
        "<option>Holroyd R (N)</option>" +
        "<option>Cape Keerweer</option>" +
        "<option>Kirke R</option>" +
        "<option>Love R</option>" +
        "<option>Wallaby Is</option>" +
        "<option>Worbody Pt (S)</option>" +
        "<option>Worbody Pt (N 1)</option>" +
        "<option>Worbody Pt (N 2)</option>" +
        "<option>Ina Ck (S 5)</option>" +
        "<option>Ina Ck (S 4)</option>" +
        "<option>Ina Ck (S 3)</option>" +
        "<option>Ina Ck (S 2)</option>" +
        "<option>Ina Ck (S 1)</option>" +
        "<option>Ina Ck</option>" +
        "<option>Ina Ck (N 1)</option>" +
        "<option>Ina Ck (N 2)</option>" +
        "<option>False Pera Hd (S 3)</option>" +
        "<option>False Pera Hd (S 2)</option>" +
        "<option>False Pera Hd (S 1)</option>" +
        "<option>False Pera Hd</option>" +
        "<option>Norman Ck (S)</option>" +
        "<option>Norman Ck (N)</option>" +
        "<option>Thud Pt (S)</option>" +
        "<option>Thud Pt (N)</option>" +
        "<option>Pear Hd (S 2)</option>" +
        "<option>Pear Hd (S 1)</option>" +
        "<option>Pear Hd</option>" +
        "<option>Pear Hd (N)</option>" +
        "<option>Boyd Pt (W)</option>" +
        "<option>Boyd Pt (E 1)</option>" +
        "<option>Boyd Pt (E 2)</option>" +
        "<option>Boyd Pt (E 3)</option>" +
        "<option>Boyd Pt (E 4)</option>" +
        "<option>Boyd Pt (E 5)</option>" +
        "<option>Boyd Pt (E 6)</option>" +
        "<option>Boyd Pt (E 7)</option>" +
        "<option>Boyd Pt (E 8)</option>" +
        "<option>Boyd Pt (E 9)</option>" +
        "<option>Boyd Pt (E 10)</option>" +
        "<option>Trillick Ck (S 2)</option>" +
        "<option>Trillick Ck (S 1)</option>" +
        "<option>Woodrum Pt (S)</option>" +
        "<option>Woodrum Pt (E)</option>" +
        "<option>Urquhart Pt (E)</option>" +
        "<option>Franjum Pt</option>" +
        "<option>Weipa South</option>" +
        "<option>Napranum</option>" +
        "<option>Lorim Pt</option>" +
        "<option>Evans Landing</option>" +
        "<option>Gonbung Pt (E)</option>" +
        "<option>Gonbung Pt (W)</option>" +
        "<option>Kerr Pt (S)</option>" +
        "<option>Kerr Pt (N)</option>" +
        "<option>Nghanamboona Pt</option>" +
        "<option>Nanum Beach (S)</option>" +
        "<option>Nanum Beach (N)</option>" +
        "<option>Kimrunja Beach</option>" +
        "<option>Rocky Pt (E)</option>" +
        "<option>Red Beach (W)</option>" +
        "<option>Red Beach (E)</option>" +
        "<option>Andoomajettie Pt</option>" +
        "<option>Bagley Channel (1)</option>" +
        "<option>Bagley Channel (2)</option>" +
        "<option>Bagley Channel (3)</option>" +
        "<option>Landfall Pt</option>" +
        "<option>Hatchman Pt</option>" +
        "<option>Duyfken Pt</option>" +
        "<option>Jantz Pt</option>" +
        "<option>Jantz Pt (N 1)</option>" +
        "<option>Jantz Pt (N 2)</option>" +
        "<option>Pennefather R (S)</option>" +
        "<option>Pennefather R (N)</option>" +
        "<option>Flinders Camp</option>" +
        "<option>Janie Creek</option>" +
        "<option>Sammy's Camp</option>" +
        "<option>Cullen Pt (S)</option>" +
        "<option>Red Beach</option>" +
        "<option>Namaleta Ck</option>" +
        "<option>Skardon R (S 2)</option>" +
        "<option>Skardon R (S 1)</option>" +
        "<option>Skardon R</option>" +
        "<option>Skardon-Jackson R</option>" +
        "<option>Jackson R</option>" +
        "<option>Jackson-MacDonald R</option>" +
        "<option>MacDonald R</option>" +
        "<option>MacDonald R (N)</option>" +
        "<option>MacDonald-Doughboy R</option>" +
        "<option>Doughboy R</option>" +
        "<option>Doughboy R (N)</option>" +
        "<option>Doughboy-Cotterell R)</option>" +
        "<option>Cotterell R mouth</option>" +
        "<option>Cotterell R (N)</option>" +
        "<option>Vrilya Pt (S 3)</option>" +
        "<option>Vrilya Pt (S 2)</option>" +
        "<option>Vrilya Pt (S 1)</option>" +
        "<option>Vrilya Pt</option>" +
        "<option>Vrilya Pt (N 1)</option>" +
        "<option>Vrilya Pt (N 2)</option>" +
        "<option>Vrilya Pt (N 3)</option>" +
        "<option>Crystal Ck (S 2)</option>" +
        "<option>Crystal Ck (S 1)</option>" +
        "<option>Crystal Ck (N 1)</option>" +
        "<option>Crystal Ck (N 2)</option>" +
        "<option>Crab Island</option>" +
        "<option>Slade Pt (N 1)</option>" +
        "<option>Slade Pt (N 2)</option>" +
        "<option>Van Speult Pt</option>" +
        "<option>Jardine R mouth</option>" +
        "<option>Jardine R (E)</option>" +
        "<option>Mutee Head</option>" +
        "<option>Ichera Head (W)</option>" +
        "<option>Ichera Head (E 1)</option>" +
        "<option>Ichera Head (E 2)</option>" +
        "<option>Ichera Head (E 3)</option>" +
        "<option>Cowral Ck (W)</option>" +
        "<option>Cowral Ck mouth</option>" +
        "<option>Cowral Ck (N 1)</option>" +
        "<option>Cowral Ck (N 2)</option>" +
        "<option>Cowral Ck (N 3)</option>" +
        "<option>Aloa Beach (1)</option>" +
        "<option>Aloa Beach (2)</option>" +
        "<option>Aloa Beach (3)</option>" +
        "<option>Seisia (S)</option>" +
        "<option>Seisia</option>" +
        "<option>Seisia (N 1)</option>" +
        "<option>Seisia (N 2)</option>" +
        "<option>Paterson Ck (S)</option>" +
        "<option>Paterson Ck</option>" +
        "<option>Paterson Hill</option>" +
        "<option>Laradeenya Ck (S 2)</option>" +
        "<option>Laradeenya Ck (S 1)</option>" +
        "<option>Laradeenya Ck (N 1)</option>" +
        "<option>Laradeenya Ck (N 2)</option>" +
        "<option>Roonga Pt</option>" +
        "<option>Peak Pt</option>" +
        "<option>Smiley Pt</option>" +
        "<option>Smiley Pt (E)</option>" +
        "<option>Battery Pt</option>" +
        "<option>Big Ck</option>" +
        "<option>Big Ck (E)</option>" +
        "<option>Bay Pt</option>" +
        "<option>Frangapini Beach</option>" +
        "<option>Evans Pt</option>" +
        "<option>Evans Bay</option>" +
        "<option>Muddy Bay</option>" +
        "<option>Somerset Bay</option>" +
        "<option>Lyons Pt</option>" +
        "<option>Putta Putta Beach</option>" +
        "<option>Putta Putta Beach (S)</option>" +
        "<option>Freshwater Beach</option>" +
        "<option>Nanthau Beach (N)</option>" +
        "<option>Nanthau Beach</option>" +
        "<option>Narau Beach</option>" +
        "<option>Chandogo Pt (W 1)</option>" +
        "<option>Chandogo Pt (W 2)</option>" +
        "<option>Saldogoo Beach</option>" +
        "<option>Kilbie Beach</option>" +
        "<option>Congora Beach</option>" +
        "<option>Kennedy Inlet (W)</option>" +
        "<option>Kennedy Inlet (E)</option>" +
        "<option>Sharp Pt (S 1)</option>" +
        "<option>Sharp Pt (S 2)</option>" +
        "<option>Sharp Pt (S 3)</option>" +
        "<option>Shadwell Pt (N 3)</option>" +
        "<option>Shadwell Pt (N 2)</option>" +
        "<option>Shadwell Pt (N 1)</option>" +
        "<option>Shadwell Pt</option>" +
        "<option>Tern Cliffs</option>" +
        "<option>Tern Cliffs (S 1)</option>" +
        "<option>Tern Cliffs (S 2)</option>" +
        "<option>Tern Cliffs (S 3)</option>" +
        "<option>Tern Cliffs (S 4)</option>" +
        "<option>Tern Cliffs (S 5)</option>" +
        "<option>Sadd Point (N 4)</option>" +
        "<option>Sadd Point (N 3)</option>" +
        "<option>Sadd Point (N 2)</option>" +
        "<option>Sadd Point (N 1)</option>" +
        "<option>Sadd Point</option>" +
        "<option>Furze Pt</option>" +
        "<option>Furze Pt (S 1)</option>" +
        "<option>Furze Pt (S 2)</option>" +
        "<option>Furze Pt (S 3)</option>" +
        "<option>Reid Pt</option>" +
        "<option>Reid Pt (S 1)</option>" +
        "<option>Reid Pt (S 2)</option>" +
        "<option>Reid Pt (S 3)</option>" +
        "<option>No 2 Point</option>" +
        "<option>No 2 Point (S 1)</option>" +
        "<option>No 2 Point (S 2)</option>" +
        "<option>No 2 Point (S 3)</option>" +
        "<option>No 2 Point (S 4)</option>" +
        "<option>No 2 Point (S 5)</option>" +
        "<option>No 2 Point (S 6)</option>" +
        "<option>Ussher Pt (N 2)</option>" +
        "<option>Ussher Pt (N 1)</option>" +
        "<option>Ussher Pt (S 1)</option>" +
        "<option>Ussher Pt (S 2)</option>" +
        "<option>Ussher Pt (S 3)</option>" +
        "<option>Ussher Pt (S 4)</option>" +
        "<option>Left Hill</option>" +
        "<option>Logan Jack Ck (N)</option>" +
        "<option>Logan Jack Ck (S)</option>" +
        "<option>Orford Bay (S 1)</option>" +
        "<option>Orford Bay (S 2)</option>" +
        "<option>Orford Ness</option>" +
        "<option>Orford Ness (S 1)</option>" +
        "<option>Orford Ness (S 2)</option>" +
        "<option>Orford Ness (S 3)</option>" +
        "<option>Orford Ness (S 4)</option>" +
        "<option>Orford Ness (S 5)</option>" +
        "<option>Orford Ness (S 6)</option>" +
        "<option>Orford Ness (S 7)</option>" +
        "<option>Orford Ness (S 8)</option>" +
        "<option>False Orford Ness (N 3)</option>" +
        "<option>False Orford Ness (N 2)</option>" +
        "<option>False Orford Ness (N 1)</option>" +
        "<option>False Orford Ness</option>" +
        "<option>False Orford Ness S)</option>" +
        "<option>Hunter Ck</option>" +
        "<option>Hunter Pt (N)</option>" +
        "<option>Hunter Pt (S 1)</option>" +
        "<option>Hunter Pt (S 2)</option>" +
        "<option>Camisade Ck</option>" +
        "<option>Camisade Ck (S 1)</option>" +
        "<option>Camisade Ck (S 2)</option>" +
        "<option>Captain Billy Landing (N 3)</option>" +
        "<option>Captain Billy Landing (N 2)</option>" +
        "<option>Captain Billy Landing (N 1)</option>" +
        "<option>Captain Billy Landing</option>" +
        "<option>Captain Billy Landing (S 1)</option>" +
        "<option>Captain Billy Landing (S 2)</option>" +
        "<option>Captain Billy Landing (S 3)</option>" +
        "<option>Messum Hill (N)</option>" +
        "<option>Messum Hill</option>" +
        "<option>Messum Hill (S)</option>" +
        "<option>Red Cliffs (N)</option>" +
        "<option>Red Cliffs</option>" +
        "<option>Red Cliffs (S)</option>" +
        "<option>Etatapuma Pt (N 2)</option>" +
        "<option>Etatapuma Pt (N 1)</option>" +
        "<option>Etatapuma Pt</option>" +
        "<option>Etatapuma Pt (S 1)</option>" +
        "<option>Etatapuma Pt (S 2)</option>" +
        "<option>Wolona Pt (W)</option>" +
        "<option>Wolona Pt (E)</option>" +
        "<option>Round Pt (S 1)</option>" +
        "<option>Round Pt (S 2)</option>" +
        "<option>Round Pt (S 3)</option>" +
        "<option>Round Pt (S 4)</option>" +
        "<option>Thorpe Pt (N)</option>" +
        "<option>Thorpe Pt</option>" +
        "<option>Thorpe Pt (S 1)</option>" +
        "<option>Thorpe Pt (S 2)</option>" +
        "<option>Thorpe Pt (S 3)</option>" +
        "<option>Thorpe Pt (S 4)</option>" +
        "<option>MacMillan R (N)</option>" +
        "<option>Margaret Bay (E 1)</option>" +
        "<option>Margaret Bay (E 2)</option>" +
        "<option>Warerhole Bay</option>" +
        "<option>Warerhole Bay (E 1)</option>" +
        "<option>Warerhole Bay (E 2)</option>" +
        "<option>Cape Grenville (NE 1)</option>" +
        "<option>Cape Grenville (NE 2)</option>" +
        "<option>Cape Grenville (NE 3)</option>" +
        "<option>Cape Grenville (NE 4)</option>" +
        "<option>Cape Grenville (NE 5)</option>" +
        "<option>Cape Grenville (NE 6)</option>" +
        "<option>Cape Grenville (S 1)</option>" +
        "<option>Cape Grenville (S 2)</option>" +
        "<option>Cape Grenville (S 3)</option>" +
        "<option>Indian Bay</option>" +
        "<option>Temple Bay (N 1)</option>" +
        "<option>Temple Bay (N 2)</option>" +
        "<option>Temple Bay (N 3)</option>" +
        "<option>Temple Bay (N 4)</option>" +
        "<option>Temple Bay (N 5)</option>" +
        "<option>Temple Bay (N 6)</option>" +
        "<option>Olive R (N)</option>" +
        "<option>Olive R (S 1)</option>" +
        "<option>Olive R (S 2)</option>" +
        "<option>Olive R (S 3)</option>" +
        "<option>Olive R (S 4)</option>" +
        "<option>Olive R (S 5)</option>" +
        "<option>Olive R (S 6)</option>" +
        "<option>Bolt Head (N 2)</option>" +
        "<option>Bolt Head (N 1)</option>" +
        "<option>Bolt Head</option>" +
        "<option>Bolt Head (S 1)</option>" +
        "<option>Bolt Head (S 2)</option>" +
        "<option>Bolt Head (S 3)</option>" +
        "<option>Bolt Head (S 4)</option>" +
        "<option>Mosquito Pt (W 3)</option>" +
        "<option>Mosquito Pt (W 2)</option>" +
        "<option>Mosquito Pt (W 1)</option>" +
        "<option>Mosquito Pt (E 1)</option>" +
        "<option>Mosquito Pt (E 2)</option>" +
        "<option>Mosquito Pt (E 3)</option>" +
        "<option>Mosquito Pt (E 4)</option>" +
        "<option>Mosquito Pt (E 5)</option>" +
        "<option>Second Stony Pt (W 2)</option>" +
        "<option>Second Stony Pt (W 1)</option>" +
        "<option>Second Stony Pt</option>" +
        "<option>First Stony Pt (W 2)</option>" +
        "<option>First Stony Pt (W 1)</option>" +
        "<option>First Stony Pt</option>" +
        "<option>First Stony Pt (S 1)</option>" +
        "<option>First Stony Pt (S 2)</option>" +
        "<option>Fair Cape (N 2)</option>" +
        "<option>Fair Cape (N 1)</option>" +
        "<option>Fair Cape (S 1)</option>" +
        "<option>Fair Cape (S 2)</option>" +
        "<option>Fair Cape (S 3)</option>" +
        "<option>Fair Cape (S 4)</option>" +
        "<option>Fair Cape (S 5)</option>" +
        "<option>Fair Cape (S 6)</option>" +
        "<option>Fair Cape (S 7)</option>" +
        "<option>Stanley Hill (1)</option>" +
        "<option>Stanley Hill (2)</option>" +
        "<option>Stanley Hill (3)</option>" +
        "<option>Pascoe R (N 3)</option>" +
        "<option>Pascoe R (N 2)</option>" +
        "<option>Pascoe R (N 1)</option>" +
        "<option>Pascoe R (S 1)</option>" +
        "<option>Pascoe R (S 2)</option>" +
        "<option>Pascoe R (S 3)</option>" +
        "<option>Pigeon Is (S)</option>" +
        "<option>Weymouth Bay (1)</option>" +
        "<option>Weymouth Bay (2)</option>" +
        "<option>Weymouth Bay (3)</option>" +
        "<option>Weymouth Bay (4)</option>" +
        "<option>Weymouth Bay (5)</option>" +
        "<option>Portland Roads</option>" +
        "<option>Portland Roads (E 1)</option>" +
        "<option>Portland Roads (E 2)</option>" +
        "<option>Cape Weymouth (S 1)</option>" +
        "<option>Cape Weymouth (S 2)</option>" +
        "<option>Cape Weymouth (S 3)</option>" +
        "<option>Chili Beach (N 2)</option>" +
        "<option>Chili Beach (N 1)</option>" +
        "<option>Chili Beach</option>" +
        "<option>Albatross Bay (1)</option>" +
        "<option>Albatross Bay (2)</option>" +
        "<option>Cape Griffith (S 1)</option>" +
        "<option>Cape Griffith (S 2)</option>" +
        "<option>Cape Griffith (S 3)</option>" +
        "<option>Spring Ck</option>" +
        "<option>Lockhart R (N)</option>" +
        "<option>Quintel Beach</option>" +
        "<option>Orchid Pt (W)</option>" +
        "<option>Orchid Pt (E 1)</option>" +
        "<option>Orchid Pt (E 2)</option>" +
        "<option>Orchid Pt (E 3)</option>" +
        "<option>Orchid Pt (E 4)</option>" +
        "<option>Chisolm Pt (W)</option>" +
        "<option>Chisolm Pt (E)</option>" +
        "<option>Cape Direction (W 2)</option>" +
        "<option>Cape Direction (W 1)</option>" +
        "<option>Cape Direction (S)</option>" +
        "<option>Villis Pt</option>" +
        "<option>Villis Pt (S)</option>" +
        "<option>Old Lockhart R</option>" +
        "<option>Cutter Ck</option>" +
        "<option>Cutter Ck (S)</option>" +
        "<option>Round Pt (N 2)</option>" +
        "<option>Round Pt (N 1)</option>" +
        "<option>Round Pt</option>" +
        "<option>Round Pt (S 1)</option>" +
        "<option>Round Pt (S 2)</option>" +
        "<option>Round Pt (S 3)</option>" +
        "<option>Round Pt (S 4)</option>" +
        "<option>First Red Rocky Pt (N 5)</option>" +
        "<option>First Red Rocky Pt (N 4)</option>" +
        "<option>First Red Rocky Pt (N 3)</option>" +
        "<option>First Red Rocky Pt (N 2)</option>" +
        "<option>First Red Rocky Pt (N 1)</option>" +
        "<option>First Red Rocky Pt</option>" +
        "<option>First Red Rocky Pt (S 1)</option>" +
        "<option>First Red Rocky Pt (S 2)</option>" +
        "<option>First Red Rocky Pt (S 3)</option>" +
        "<option>First Red Rocky Pt (S 4)</option>" +
        "<option>Bobardt Pt (N)</option>" +
        "<option>Bobardt Pt</option>" +
        "<option>Bobardt Pt (S)</option>" +
        "<option>Voaden Pt</option>" +
        "<option>Friendly Pt (N 4)</option>" +
        "<option>Friendly Pt (N 3)</option>" +
        "<option>Friendly Pt (N 2)</option>" +
        "<option>Friendly Pt (N 1)</option>" +
        "<option>Friendly Pt</option>" +
        "<option>Friendly Pt (S 1)</option>" +
        "<option>Friendly Pt (S 2)</option>" +
        "<option>Cape Sidmouth (N)</option>" +
        "<option>Cape Sidmouth</option>" +
        "<option>Cape Sidmouth (S 1)</option>" +
        "<option>Cape Sidmouth (S 2)</option>" +
        "<option>Cape Sidmouth (S 3)</option>" +
        "<option>Campbell Pt (3)</option>" +
        "<option>Campbell Pt (2)</option>" +
        "<option>Campbell Pt (1)</option>" +
        "<option>Nesbit R Delta</option>" +
        "<option>Nesbit R (S)</option>" +
        "<option>Chester R (N)</option>" +
        "<option>Chester R (S)</option>" +
        "<option>Rocky R (N)</option>" +
        "<option>Rocky R (S)</option>" +
        "<option>Roberts Pt (N 2)</option>" +
        "<option>Roberts Pt (N 1)</option>" +
        "<option>Roberts Pt</option>" +
        "<option>Massy Ck (S 1)</option>" +
        "<option>Massy Ck (S 2)</option>" +
        "<option>Breakfast CK (S)</option>" +
        "<option>Claremont Pt (N 2)</option>" +
        "<option>Claremont Pt (N 1)</option>" +
        "<option>Claremont Pt</option>" +
        "<option>Stewart R (N)</option>" +
        "<option>Stewart R (S)</option>" +
        "<option>Three Mile Lagoon</option>" +
        "<option>Evanson Pt</option>" +
        "<option>Balclutha Ck</option>" +
        "<option>Balclutha Ck (S)</option>" +
        "<option>Running Ck</option>" +
        "<option>Goose Ck</option>" +
        "<option>Bathurst Head (S 5)</option>" +
        "<option>Bathurst Head (S 4)</option>" +
        "<option>Bathurst Head (S 3)</option>" +
        "<option>Bathurst Head (S 2)</option>" +
        "<option>Bathurst Head (S 1)</option>" +
        "<option>Bathurst Head</option>" +
        "<option>Combe Pt (W)</option>" +
        "<option>Combe Pt</option>" +
        "<option>Combe Pt (E 1)</option>" +
        "<option>Combe Pt (E 2)</option>" +
        "<option>Bathurst Bay (1)</option>" +
        "<option>Bathurst Bay (2)</option>" +
        "<option>Bathurst Bay (3)</option>" +
        "<option>Bathurst Bay (4)</option>" +
        "<option>Bathurst Bay (5)</option>" +
        "<option>Bay Hill (1)</option>" +
        "<option>Bay Hill (2)</option>" +
        "<option>Bay Hill (3)</option>" +
        "<option>Bay Hill (4)</option>" +
        "<option>Bay Hill (5)</option>" +
        "<option>Bay Hill (6)</option>" +
        "<option>Cape Melville (W 2)</option>" +
        "<option>Cape Melville (W 1)</option>" +
        "<option>Cape Melville</option>" +
        "<option>Cape Melville (E 1)</option>" +
        "<option>Cape Melville (E 2)</option>" +
        "<option>Cape Melville (E 3)</option>" +
        "<option>Cape Melville (E 4)</option>" +
        "<option>Cape Melville (E 4)</option>" +
        "<option>Cape Melville (E 6)</option>" +
        "<option>Wedge Rocks</option>" +
        "<option>Wedge Rocks (S 1)</option>" +
        "<option>Wedge Rocks (S 2)</option>" +
        "<option>Wedge Rocks (S 3)</option>" +
        "<option>Wedge Rocks (S 4)</option>" +
        "<option>Wedge Rocks (S 5)</option>" +
        "<option>Wedge Rocks (S 5)</option>" +
        "<option>Hales Is (S 1)</option>" +
        "<option>Hales Is (S 2)</option>" +
        "<option>Hales Is (S 3)</option>" +
        "<option>Hales Is</option>" +
        "<option>Rocky Pt (N 3)</option>" +
        "<option>Rocky Pt (N 2)</option>" +
        "<option>Rocky Pt (N 1)</option>" +
        "<option>Rocky Pt</option>" +
        "<option>Rocky Pt (S 1)</option>" +
        "<option>North Bay Pt (N)</option>" +
        "<option>North Bay Pt (S 1)</option>" +
        "<option>North Bay Pt (S 2)</option>" +
        "<option>North Bay Pt (S 3)</option>" +
        "<option>North Bay Pt (S 4)</option>" +
        "<option>Temple Ck</option>" +
        "<option>Beabey Hill</option>" +
        "<option>Ninian Bay (W)</option>" +
        "<option>Ninian Bay (S 1)</option>" +
        "<option>Ninian Bay (S 2)</option>" +
        "<option>Ninian Bay (S 3)</option>" +
        "<option>Ninian Bay (S 4)</option>" +
        "<option>Barrow Pt (W 2)</option>" +
        "<option>Barrow Pt (W 1)</option>" +
        "<option>Barrow Pt (S 1)</option>" +
        "<option>Barrow Pt (S 2)</option>" +
        "<option>Barrow Pt (S 3)</option>" +
        "<option>Barrow Pt (S 4)</option>" +
        "<option>Barrow Pt (S 5)</option>" +
        "<option>Saltwater Ck</option>" +
        "<option>Wakooka Ck (N)</option>" +
        "<option>Wakooka Ck (S 1)</option>" +
        "<option>Wakooka Ck (S 2)</option>" +
        "<option>Wakooka Ck (S 3)</option>" +
        "<option>Cape Bowen (N 5)</option>" +
        "<option>Cape Bowen (N 4)</option>" +
        "<option>Cape Bowen (N 3)</option>" +
        "<option>Cape Bowen (N 2)</option>" +
        "<option>Cape Bowen (N 1)</option>" +
        "<option>Cape Bowen (S 1)</option>" +
        "<option>Cape Bowen (S 2)</option>" +
        "<option>Cape Bowen (S 13</option>" +
        "<option>Red Pt (W 3)</option>" +
        "<option>Red Pt (W 2)</option>" +
        "<option>Red Pt (W 1)</option>" +
        "<option>Red Pt</option>" +
        "<option>Red Pt (S 1)</option>" +
        "<option>Red Pt (S 2)</option>" +
        "<option>Brown Peak (1)</option>" +
        "<option>Brown Peak (2)</option>" +
        "<option>Brown Peak (3)</option>" +
        "<option>Murdoch Pt</option>" +
        "<option>Murdoch Pt (S 1)</option>" +
        "<option>Murdoch Pt (S 2)</option>" +
        "<option>Jeannie R (N 2)</option>" +
        "<option>Jeannie R (N 1)</option>" +
        "<option>Jeannie R (S 1)</option>" +
        "<option>Jeannie R (S 2)</option>" +
        "<option>Jeannie R (S 3)</option>" +
        "<option>Jeannie R (S 4)</option>" +
        "<option>Jeannie R (S 5)</option>" +
        "<option>Jeannie R (S 6)</option>" +
        "<option>Jeannie R (S 7)</option>" +
        "<option>Jeannie R (S 8)</option>" +
        "<option>Jeannie R (S 9)</option>" +
        "<option>Starcke R</option>" +
        "<option>Lookout Pt (W)</option>" +
        "<option>Lookout Pt</option>" +
        "<option>Lookout Pt (S 1)</option>" +
        "<option>Lookout Pt (S 2)</option>" +
        "<option>Lookout Pt (S 3)</option>" +
        "<option>Flattery Harbour (1)</option>" +
        "<option>Flattery Harbour (2)</option>" +
        "<option>Flattery Harbour (3)</option>" +
        "<option>Flattery Harbour (4)</option>" +
        "<option>Flattery Harbour (5)</option>" +
        "<option>Flattery Harbour (6)</option>" +
        "<option>Flattery Harbour (7)</option>" +
        "<option>Flattery Harbour (8)</option>" +
        "<option>Cape Flattery (W 6)</option>" +
        "<option>Cape Flattery (W 5)</option>" +
        "<option>Cape Flattery (W 4)</option>" +
        "<option>Cape Flattery (W 3)</option>" +
        "<option>Cape Flattery (W 2)</option>" +
        "<option>Cape Flattery (W 1)</option>" +
        "<option>Cape Flattery</option>" +
        "<option>Cape Flattery (S 1)</option>" +
        "<option>Cape Flattery (S 2)</option>" +
        "<option>Cape Flattery (S 3)</option>" +
        "<option>Cape Flattery (S 4)</option>" +
        "<option>Cape Flattery (S 5)</option>" +
        "<option>Cape Flattery-Murray Pt</option>" +
        "<option>Murray Pt-McIvor R</option>" +
        "<option>McIvor R (S 1)</option>" +
        "<option>McIvor R (S 2)</option>" +
        "<option>McIvor R (S 3)</option>" +
        "<option>Elim (W)</option>" +
        "<option>Elim</option>" +
        "<option>Elim (E 1)</option>" +
        "<option>Elim (E 2)</option>" +
        "<option>Cape Bedford</option>" +
        "<option>Cape Bedford (S)</option>" +
        "<option>Nob Point (N 3)</option>" +
        "<option>Nob Point (N 2)</option>" +
        "<option>Nob Point (N 1)</option>" +
        "<option>Nob Point (S 1)</option>" +
        "<option>Nob Point (S 2)</option>" +
        "<option>Indian Head (N)</option>" +
        "<option>Indian Head (S)</option>" +
        "<option>Indian Head</option>" +
        "<option>Saunders Point</option>" +
        "<option>Cherry Tree Bay</option>" +
        "<option>Finch Bay</option>" +
        "<option>Quarantine Bay</option>" +
        "<option>Golf Course</option>" +
        "<option>Annan (south)</option>" +
        "<option>Mount McIntosh (1)</option>" +
        "<option>Mount McIntosh (2)</option>" +
        "<option>Mount McIntosh (3)</option>" +
        "<option>Mount McIntosh (4)</option>" +
        "<option>Walker Bay</option>" +
        "<option>Walker Point (north)</option>" +
        "<option>Walker Point (south 1)</option>" +
        "<option>Walker Point (south 2)</option>" +
        "<option>Walker Point (south 3)</option>" +
        "<option>Archer Point (north 2)</option>" +
        "<option>Archer Point (north 1)</option>" +
        "<option>Archer Point (wharf north)</option>" +
        "<option>Archer Point (wharf south)</option>" +
        "<option>Archer Hill (south)</option>" +
        "<option>Walsh Bay (north)</option>" +
        "<option>Forsberg Point</option>" +
        "<option>Whalebone Beach</option>" +
        "<option>Cedar Bay (north)</option>" +
        "<option>Cedar Bay (south)</option>" +
        "<option>Weary Bay</option>" +
        "<option>Weary Bay (south)</option>" +
        "<option>667</option>" +
        "<option>Cowie Pt Bay</option>" +
        "<option>Donovan Pt (north)</option>" +
        "<option>Donovan Pt (south)</option>" +
        "<option>Emmagen Creek</option>" +
        "<option>Pilgrim Sands</option>" +
        "<option>Cape Tribulation</option>" +
        "<option>Coconut</option>" +
        "<option>Myall Creek</option>" +
        "<option>Noah Head</option>" +
        "<option>Noah Creek (north)</option>" +
        "<option>Noah Creek (south)</option>" +
        "<option>Bouncing Stones</option>" +
        "<option>Thornton</option>" +
        "<option>Alexandria Bay</option>" +
        "<option>Alexandria Bay (south)</option>" +
        "<option>Bailey Point</option>" +
        "<option>Cow Bay (north)</option>" +
        "<option>Cow Bay (mid)</option>" +
        "<option>Cow Bay(south < /option>" +
        "<option>Black Rock (north)</option>" +
        "<option>Black Rock (south)</option>" +
        "<option>Mount Alexandria</option>" +
        "<option>Cape Kimberley (north)</option>" +"<option>Cape Kimberley (south)</option>" +
        "<option>Wonga</option>" +
        "<option>Rocky Point (Daydream)</option>" +
        "<option>Rocky Point (south)</option>" +
        "<option>Palm Beach (Newell)</option>" +
        "<option>Cooya</option>" +
        "<option>Port Douglas (Four Mile)</option>" +
        "<option>Douglas Beach</option>" +
        "<option>Alexandria Reefs</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>White Cliffs</option>" +
        "<option>Oak Beach</option>" +
        "<option>Little Reef Beach</option>" +
        "<option>Turtle Creek Beach</option>" +
        "<option>Turtle Creek Beach (south)</option>" +
        "<option>Wangetti Beach</option>" +
        "<option>Red Cliff Point (south)</option>" +
        "<option>708</option>" +
        "<option>Simpson Point (west)</option>" +
        "<option>Simpson Point (south 1)</option>" +
        "<option>Simpson Point (south 2)</option>" +
        "<option>Ellis</option>" +
        "<option>Buchan Point</option>" +
        "<option>Palm Beach Point</option>" +
        "<option>Palm Cove</option>" +
        "<option>Kewarra Beach</option>" +
        "<option>Trinity Beach</option>" +
        "<option>Moon River</option>" +
        "<option>Yorkeys Point</option>" +
        "<option>Yorkeys Knob</option>" +
        "<option>Holloway</option>" +
        "<option>Machans</option>" +
        "<option>Barron</option>" +
        "<option>Ellie Point</option>" +
        "<option>Cairns</option>" +
        "<option>Cairns Esplanade Lagoon</option>" +
        "<option>Giangurra</option>" +
        "<option>Second Beach</option>" +
        "<option>Brown Bay</option>" +
        "<option>Koombal</option>" +
        "<option>Sunny Bay</option>" +
        "<option>False Cape (east)</option>" +
        "<option>Yarrabah Beach</option>" +
        "<option>Bulburra Beach</option>" +
        "<option>Palm Beach</option>" +
        "<option>Turtle Bay</option>" +
        "<option>Little Turtle Bay</option>" +
        "<option>King Beach (north)</option>" +
        "<option>King Beach</option>" +
        "<option>Oombunghi Beach</option>" +
        "<option>Oombunghi Beach (south 1)</option>" +
        "<option>Oombunghi Beach (south 2)</option>" +
        "<option>Saltwater Creek Beach</option>" +
        "<option>742</option>" +
        "<option>743</option>" +
        "<option>744</option>" +
        "<option>745</option>" +
        "<option>746</option>" +
        "<option>747</option>" +
        "<option>748</option>" +
        "<option>Palmer Point (north)</option>" +
        "<option>Flirt Point (Woolanmarroo)</option>" +
        "<option>Constantine Point (Woolanmarroo S)</option>" +
        "<option>Bramston Point</option>" +
        "<option>Bramston Point (south)</option>" +
        "<option>Bramston Beach (north)</option>" +
        "<option>Bramston Beach</option>" +
        "<option>Rocky Point (south)</option>" +
        "<option>Cooper Point (1)</option>" +
        "<option>Cooper Point (2)</option>" +
        "<option>Cooper Point (3)</option>" +
        "<option>Ella Bay (north)</option>" +
        "<option>Ella Bay</option>" +
        "<option>Heath Point (1)</option>" +
        "<option>Heath Point (2)</option>" +
        "<option>Heath Point (3)</option>" +
        "<option>Flying Fish Point</option>" +
        "<option>Coconut Bay</option>" +
        "<option>Conquette Point</option>" +
        "<option>Etty Bay</option>" +
        "<option>Robinson</option>" +
        "<option>Robinson (south)</option>" +
        "<option>Browns</option>" +
        "<option>Browns (south)</option>" +
        "<option>Cowley</option>" +
        "<option>Murdering Point (north)</option>" +
        "<option>Kurrimine</option>" +
        "<option>Maria Creek</option>" +
        "<option>Garner (north)</option>" +
        "<option>Garner</option>" +
        "<option>Brooks</option>" +
        "<option>Bingal Bay</option>" +
        "<option>Bicton Hill</option>" +
        "<option>Narragon</option>" +
        "<option>Clump Point</option>" +
        "<option>Mission Beach</option>" +
        "<option>Lover Beach</option>" +
        "<option>Lover Beach (south)</option>" +
        "<option>Lugger Bay</option>" +
        "<option>Kennedy Bay</option>" +
        "<option>Googarra Beach</option>" +
        "<option>Tully-Murray Rivers</option>" +
        "<option>Murray R-Dallachy Ck</option>" +
        "<option>Dallachy-Wreck Ck</option>" +
        "<option>Wreck-Meunga Ck</option>" +
        "<option>Cardwell</option>" +
        "<option>Waggon Wheels</option>" +
        "<option>Missionary Bay (1)</option>" +
        "<option>Missionary Bay (2)</option>" +
        "<option>Macushla Cove</option>" +
        "<option>Two Sisters (1)</option>" +
        "<option>Two Sisters (2)</option>" +
        "<option>Cape Richards</option>" +
        "<option>North Shepherd Beach</option>" +
        "<option>South Shepherd Beach</option>" +
        "<option>Sheperd Bay (2)</option>" +
        "<option>Sheperd Bay (3)</option>" +
        "<option>Sheperd Bay (4)</option>" +
        "<option>Sheperd Bay (5)</option>" +
        "<option>Cape Sandwich (1)</option>" +
        "<option>Cape Sandwich (2)</option>" +
        "<option>Ramsay Bay</option>" +
        "<option>Ramsay Bay (south)</option>" +
        "<option>Nina Beach</option>" +
        "<option>Little Ramsey Bay</option>" +
        "<option>The Thumb (south)</option>" +
        "<option>Agnes Island (west)</option>" +
        "<option>Agnes island</option>" +
        "<option>817</option>" +
        "<option>Zoe Bay</option>" +
        "<option>819</option>" +
        "<option>820</option>" +
        "<option>Hillock Point (north)</option>" +
        "<option>Hillock Point (south)</option>" +
        "<option>823</option>" +
        "<option>824</option>" +
        "<option>Mulligan Bay</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Dungeness</option>" +
        "<option>Lucinda</option>" +
        "<option>Lucinda Point</option>" +
        "<option>Gentle Annie Creek</option>" +
        "<option>Taylors Beach</option>" +
        "<option>Forrest Beach</option>" +
        "<option>Palm Creek</option>" +
        "<option>Bronte Beach</option>" +
        "<option>Orient-Cattle Cks</option>" +
        "<option>Eleanor-Crystal Cks</option>" +
        "<option>Crystal-Ollera Cks</option>" +
        "<option>Ollera Ck</option>" +
        "<option>Hencamp Creek</option>" +
        "<option>Balgal</option>" +
        "<option>Douglas Hill</option>" +
        "<option>Toomulla (point)</option>" +
        "<option>Toomulla</option>" +
        "<option>Cassoway Creek</option>" +
        "<option>Leichhardt Creek</option>" +
        "<option>Christmas Creek</option>" +
        "<option>Toolakea</option>" +
        "<option>Bluewater Beach</option>" +
        "<option>Saunders Beach</option>" +
        "<option>Black River</option>" +
        "<option>Bolhe River</option>" +
        "<option>852</option>" +
        "<option>853</option>" +
        "<option>Shelly Creek (west)</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly Creek (east)</option>" +
        "<option>Cape Pallarenda (1)</option>" +
        "<option>Cape Pallarenda (2)</option>" +
        "<option>Pallarenda</option>" +
        "<option>Rowes Bay</option>" +
        "<option>Kissing Point</option>" +
        "<option>The Strand</option>" +
        "<option>Magazine Island</option>" +
        "<option>Riverway Lagoon</option>" +
        "<option>Ross River (east)</option>" +
        "<option>Sandfly Creek</option>" +
        "<option>Launs Beach</option>" +
        "<option>867</option>" +
        "<option>868</option>" +
        "<option>869</option>" +
        "<option>870</option>" +
        "<option>871</option>" +
        "<option>Long Beach</option>" +
        "<option>Red Rock Bay</option>" +
        "<option>Cape Cleveland</option>" +
        "<option>Twenty Foot</option>" +
        "<option>Paradise Bay</option>" +
        "<option>Bray Island</option>" +
        "<option>Turtle Bay (AIMS)</option>" +
        "<option>Chunda Bay</option>" +
        "<option>Salmon Creek</option>" +
        "<option>Big Beach</option>" +
        "<option>Cungulla</option>" +
        "<option>Connors Island</option>" +
        "<option>Barramundi Creek</option>" +
        "<option>885</option>" +
        "<option>Hucks</option>" +
        "<option>Sheepwash Creek</option>" +
        "<option>888</option>" +
        "<option>Hughes Creek</option>" +
        "<option>Cape Bowling Green</option>" +
        "<option>Alva Beach</option>" +
        "<option>Plantation Creek</option>" +
        "<option>Anabranch</option>" +
        "<option>Rita Island (north)</option>" +
        "<option>Rita Island (centre)</option>" +
        "<option>Rita Island (south)</option>" +
        "<option>Scotties Beach</option>" +
        "<option>Big Hill Beach</option>" +
        "<option>Wunjunga</option>" +
        "<option>RM Beach</option>" +
        "<option>Molongle Creek</option>" +
        "<option>The Spit</option>" +
        "<option>Beach 903</option>" +
        "<option>Windy Point (south)</option>" +
        "<option>Windy Point (north)</option>" +
        "<option>Beach 906</option>" +
        "<option>Beach 907</option>" +
        "<option>Flagstaff Bay (south)</option>" +
        "<option>Flagstaff Bay</option>" +
        "<option>Beach 910</option>" +
        "<option>Beach 911</option>" +
        "<option>Moonlight Bay</option>" +
        "<option>Beach 913</option>" +
        "<option>Beach 914</option>" +
        "<option>Shark Bay (south)</option>" +
        "<option>Shark Bay (north)</option>" +
        "<option>Beach 917</option>" +
        "<option>Beach 918</option>" +
        "<option>Beach 919</option>" +
        "<option>Beach 920</option>" +
        "<option>Cape Upstart</option>" +
        "<option>Beach 922</option>" +
        "<option>Beach 923</option>" +
        "<option>Beach 924</option>" +
        "<option>Kingfisher Bay (north)</option>" +
        "<option>Kingfisher Bay (south)</option>" +
        "<option>Coconut Bay</option>" +
        "<option>Beach 928</option>" +
        "<option>The Cape</option>" +
        "<option>Elliott River</option>" +
        "<option>Saltwater Creek</option>" +
        "<option>Mount Curlewis (west)</option>" +
        "<option>Mount Curlewis</option>" +
        "<option>Mount Curlewis (east)</option>" +
        "<option>Splitters Creek</option>" +
        "<option>Branch Creek</option>" +
        "<option>Mount Bruce (spit)</option>" +
        "<option>Mount Bruce (west)</option>" +
        "<option>Mount Bruce</option>" +
        "<option>Mount Bruce (east 1)</option>" +
        "<option>Mount Bruce (east 2)</option>" +
        "<option>Dingo Beach</option>" +
        "<option>Abbott Point (groyne)</option>" +
        "<option>Abbott Point</option>" +
        "<option>Euri Creek</option>" +
        "<option>Don River (west 4)</option>" +
        "<option>Don River (west 3)</option>" +
        "<option>Don River (west 2)</option>" +
        "<option>Don River (west 1)</option>" +
        "<option>Queens Beach</option>" +
        "<option>Greys Bay</option>" +
        "<option>Beach 952</option>" +
        "<option>Beach 953</option>" +
        "<option>Cape Edgecumbe</option>" +
        "<option>Horseshoe Bay</option>" +
        "<option>Murrays Bay</option>" +
        "<option>Rose Bay</option>" +
        "<option>Kings Beach (north)</option>" +
        "<option>Kings Beach</option>" +
        "<option>Flagstaff Hill</option>" +
        "<option>Quay St</option>" +
        "<option>Mount Gordon</option>" +
        "<option>Mount Bramston</option>" +
        "<option>Duck Creek</option>" +
        "<option>Brisk Bay</option>" +
        "<option>Miowera</option>" +
        "<option>Emu Creek (west)</option>" +
        "<option>Emu Creek (east)</option>" +
        "<option>White Cliffs (west)</option>" +
        "<option>White Cliffs (east)</option>" +
        "<option>Sinclaire Bay</option>" +
        "<option>Sinclaire Bay (west)</option>" +
        "<option>Beach 973</option>" +
        "<option>Beach 974</option>" +
        "<option>Beach 975</option>" +
        "<option>Beach 976</option>" +
        "<option>Passage Islet (south)</option>" +
        "<option>Cape Gloucester (west)</option>" +
        "<option>Cape Gloucester (east 1)</option>" +
        "<option>Cape Gloucester (east 2)</option>" +
        "<option>Cape Gloucester (east 3)</option>" +
        "<option>Shoal (Hideaway) Bay</option>" +
        "<option>Black Currant Island</option>" +
        "<option>Dingo Beach</option>" +
        "<option>Nelly Bay</option>" +
        "<option>Jonah Bay</option>" +
        "<option>Little Jonah Bay</option>" +
        "<option>Beach 988</option>" +
        "<option>Beach 989</option>" +
        "<option>George Bay</option>" +
        "<option>George Point (east)</option>" +
        "<option>Beach 992</option>" +
        "<option>Beach 993</option>" +
        "<option>Beach 994</option>" +
        "<option>Beach 995</option>" +
        "<option>Beach 996</option>" +
        "<option>Beach 997</option>" +
        "<option>Beach 998</option>" +
        "<option>Beach 999</option>" +
        "<option>Beach 1000</option>" +
        "<option>Earlando</option>" +
        "<option>Beach 1002</option>" +
        "<option>Double Bay (west)</option>" +
        "<option>Double Bay (east)</option>" +
        "<option>Datum Rock</option>" +
        "<option>Beach 1006</option>" +
        "<option>Woodwark Bay (1)</option>" +
        "<option>Woodwark Bay (2)</option>" +
        "<option>Woodwark Bay (3)</option>" +
        "<option>Woodwark Bay (4)</option>" +
        "<option>Beach 1011</option>" +
        "<option>Beach 1012</option>" +
        "<option>Beach 1013</option>" +
        "<option>Cannonvale</option>" +
        "<option>Shingley Beach</option>" +
        "<option>Airlie Beach (1)</option>" +
        "<option>Airlie Beach (2)</option>" +
        "<option>Funnel Bay</option>" +
        "<option>Pioneer Point</option>" +
        "<option>Notch Hill (north)</option>" +
        "<option>Notch Hill (south)</option>" +
        "<option>Green Point (north)</option>" +
        "<option>Green Point (south)</option>" +
        "<option>Swamp Bay</option>" +
        "<option>Coral Beach</option>" +
        "<option>The Beak (1)</option>" +
        "<option>The Beak (2)</option>" +
        "<option>Canecutters Beach</option>" +
        "<option>Cow Island (north)</option>" +
        "<option>Cow Island</option>" +
        "<option>Boulder 1031</option>" +
        "<option>Puritan Bay</option>" +
        "<option>Boulder lagoon</option>" +
        "<option>Round Head</option>" +
        "<option>Genesta Bay</option>" +
        "<option>Boulder 1036</option>" +
        "<option>Cape Conway (north)</option>" +
        "<option>Cape Conway (west 1)</option>" +
        "<option>Cape Conway (west 2)</option>" +
        "<option>Cape Conway (west 3)</option>" +
        "<option>Cape Conway (west 4)</option>" +
        "<option>Boulder 1042</option>" +
        "<option>Boulder 1043</option>" +
        "<option>Boulder 1044</option>" +
        "<option>Boulder 1045</option>" +
        "<option>Repulse Beach</option>" +
        "<option>Conway Beach</option>" +
        "<option>Beach 1048</option>" +
        "<option>Beach 1049</option>" +
        "<option>Wilson Beach</option>" +
        "<option>New Beach (north 2)</option>" +
        "<option>New Beach (north 1)</option>" +
        "<option>New Beach</option>" +
        "<option>Letherbrook</option>" +
        "<option>O'Connell River mouth</option>" +
        "<option>Covering Beach (1)</option>" +
        "<option>Covering Beach (2)  Laguna Quay</option>" +
        "<option>Covering Beach (3)</option>" +
        "<option>Beach 1059</option>" +
        "<option>Beach 1060</option>" +
        "<option>Beach 1061</option>" +
        "<option>Midgeton</option>" +
        "<option>Dempster Creek (north 1)</option>" +
        "<option>Dempster Creek (north 2)</option>" +
        "<option>Beach 1065</option>" +
        "<option>Beach 1066</option>" +
        "<option>Ten Mile Beach</option>" +
        "<option>Beach 1068</option>" +
        "<option>Beach 1069</option>" +
        "<option>Beach 1070</option>" +
        "<option>Beach 1071</option>" +
        "<option>Beach 1072</option>" +
        "<option>Rosella Creek (west)</option>" +
        "<option>Rosella Creek (east)</option>" +
        "<option>Flaggy Rock (north)</option>" +
        "<option>Flaggy Rock Creek</option>" +
        "<option>Mentmore (north)</option>" +
        "<option>Mentmore Beach</option>" +
        "<option>Dewars Beach</option>" +
        "<option>St Helens Beach</option>" +
        "<option>Rabbit Island (1)</option>" +
        "<option>Rabbit Island (2)</option>" +
        "<option>Rabbit Island (3)</option>" +
        "<option>Newry Island (1)</option>" +
        "<option>Newry Island (2)</option>" +
        "<option>Newry Island (3)</option>" +
        "<option>Finlayson Point (west)</option>" +
        "<option>Finlayson Point</option>" +
        "<option>Seaforth</option>" +
        "<option>Blue Bay</option>" +
        "<option>Halliday Bay</option>" +
        "<option>McBrides Point</option>" +
        "<option>Ball Bay</option>" +
        "<option>Smalleys Beach</option>" +
        "<option>Beachcomber Cove</option>" +
        "<option>Cape Hillsborough</option>" +
        "<option>Wedge Island</option>" +
        "<option>Nobbies Creek</option>" +
        "<option>Belmunda Beach (1)</option>" +
        "<option>Belmunda Beach (2)</option>" +
        "<option>Williamsons Beach</option>" +
        "<option>Neils Beach</option>" +
        "<option>Shoal Point (spit)</option>" +
        "<option>Shoal Point</option>" +
        "<option>Bucasia</option>" +
        "<option>Sunset Bay</option>" +
        "<option>Eimeo</option>" +
        "<option>Dolphin Heads</option>" +
        "<option>Blacks (1)</option>" +
        "<option>Blacks (2)</option>" +
        "<option>Blacks Beach</option>" +
        "<option>Slade Bay</option>" +
        "<option>Slade Point</option>" +
        "<option>Lamberts</option>" +
        "<option>North Harbour</option>" +
        "<option>Mackay Harbour (north)</option>" +
        "<option>Mackay Harbour (boat ramp)</option>" +
        "<option>Mackay</option>" +
        "<option>South Wall</option>" +
        "<option>Town Beach</option>" +
        "<option>Far Beach</option>" +
        "<option>Far Beach (south)</option>" +
        "<option>Bakers Creek (south)</option>" +
        "<option>McEwens Beach (north)</option>" +
        "<option>McEwens Beach</option>" +
        "<option>Dudgeon Point (west 2)</option>" +
        "<option>Dudgeon Point (west 1)</option>" +
        "<option>Dudgeon Point</option>" +
        "<option>Dudgeon Beach</option>" +
        "<option>Hector Point</option>" +
        "<option>Hector Beach</option>" +
        "<option>Hector Beach (east)</option>" +
        "<option>Hay Point</option>" +
        "<option>Half Tide</option>" +
        "<option>Salonika</option>" +
        "<option>Salonika (south)</option>" +
        "<option>Mick Ready</option>" +
        "<option>Beach 1138</option>" +
        "<option>Grasstree</option>" +
        "<option>Campwin</option>" +
        "<option>Sarina</option>" +
        "<option>Point Salisbury</option>" +
        "<option>Sarina Inlet (south)</option>" +
        "<option>Freshwater Point (north 1)</option>" +
        "<option>Freshwater Point (north 2)</option>" +
        "<option>Freshwater Point (north 3)</option>" +
        "<option>Deception Inlet</option>" +
        "<option>Armstrong Beach</option>" +
        "<option>Figtree Point</option>" +
        "<option>Allom Point (west)</option>" +
        "<option>Allom Point</option>" +
        "<option>Allom Point (east 1)</option>" +
        "<option>Allom Point (east 2)</option>" +
        "<option>Allom Point (east 3)</option>" +
        "<option>Dawson Creek</option>" +
        "<option>Dawson Beach</option>" +
        "<option>Glendower Point (west 2)</option>" +
        "<option>Glendower Point (west 1)</option>" +
        "<option>Glendower Point (south 1)</option>" +
        "<option>Glendower Point (south 2)</option>" +
        "<option>Glendower Point (south 3)</option>" +
        "<option>Glendower Point (south 4)</option>" +
        "<option>Glendower Point (south 5)</option>" +
        "<option>Glendower Point (south 6)</option>" +
        "<option>Ince Bay (west)</option>" +
        "<option>Cutlack Island</option>" +
        "<option>Hogans Camp</option>" +
        "<option>Cape Palmerston (west 3)</option>" +
        "<option>Cape Palmerston (west 2)</option>" +
        "<option>Cape Palmerston (west 1)</option>" +
        "<option>Cape Palmerston (south 1)</option>" +
        "<option>Cape Palmerston (south 2)</option>" +
        "<option>Cape Palmerston (south 3)</option>" +
        "<option>Cape Palmerston (south 4)</option>" +
        "<option>Cape Palmerston (south 5)</option>" +
        "<option>Coconut Point (north)</option>" +
        "<option>Coconut Point (south)</option>" +
        "<option>Daintry Creek</option>" +
        "<option>Little Daintry Creek</option>" +
        "<option>Knobler Creek</option>" +
        "<option>Green Hill (1)</option>" +
        "<option>Green Hill (2)</option>" +
        "<option>Green Hill (3)</option>" +
        "<option>Mosquito Hill</option>" +
        "<option>Hall Creek</option>" +
        "<option>Notch Point</option>" +
        "<option>Yarrawonga Point</option>" +
        "<option>Yarrawonga Point (west)</option>" +
        "<option>Marion Creek</option>" +
        "<option>Four Mile Beach</option>" +
        "<option>Four Mile Beach (south)</option>" +
        "<option>West Hill (north)</option>" +
        "<option>West Hill Island (1)</option>" +
        "<option>West Hill Island (2)</option>" +
        "<option>West Hill Island (3)</option>" +
        "<option>West Hill point</option>" +
        "<option>Couran Cove</option>" +
        "<option>Sheraton Mirage Gold Coast</option>" +
        "<option>West Hill creek</option>" +
        "<option>Blind Creek</option>" +
        "<option>Carmila</option>" +
        "<option>Three Mile Beach</option>" +
        "<option>Flaggy Rock Creek</option>" +
        "<option>Stockyard Creek</option>" +
        "<option>Lantana Creek</option>" +
        "<option>Oaky Creek</option>" +
        "<option>Apple Tree Creek</option>" +
        "<option>Dry Creek</option>" +
        "<option>Turner Hut Creek</option>" +
        "<option>Clairview</option>" +
        "<option>Dingo Creek</option>" +
        "<option>Clairview Bluff (north)</option>" +
        "<option>Clairview Bluff</option>" +
        "<option>Clairview Island</option>" +
        "<option>North Red Bluff</option>" +
        "<option>Rosewood Island (west)</option>" +
        "<option>Rosewood Island (east)</option>" +
        "<option>Charon Point</option>" +
        "<option>Beach 1217</option>" +
        "<option>Dick Creek</option>" +
        "<option>Beach 1219</option>" +
        "<option>Rowdy Creek</option>" +
        "<option>North Point (west)</option>" +
        "<option>North Point (east)</option>" +
        "<option>Sand Bank Bay (1)</option>" +
        "<option>Sand Bank Bay (2)</option>" +
        "<option>Sand Bank Bay (3)</option>" +
        "<option>Sand Bank Bay (4)</option>" +
        "<option>Sand Bank Bay (5)</option>" +
        "<option>Sand Bank Bay (6)</option>" +
        "<option>Sand Bank Bay (7)</option>" +
        "<option>Sand Bank Bay (8)</option>" +
        "<option>Sand Bank Bay (9)</option>" +
        "<option>Sand Bank Bay (10)</option>" +
        "<option>Sand Bank Bay (11)</option>" +
        "<option>Middle Passage (1)</option>" +
        "<option>Middle Passage (2)</option>" +
        "<option>Quail Island (1)</option>" +
        "<option>Quail Island (2)</option>" +
        "<option>Quail Island (3)</option>" +
        "<option>Quail Island (4)</option>" +
        "<option>Lucy Ravel Point (west 2)</option>" +
        "<option>Lucy Ravel Point (west 1)</option>" +
        "<option>Lucy Ravel Point</option>" +
        "<option>Lucy Ravel Point (east 1)</option>" +
        "<option>Lucy Ravel Point (east 2)</option>" +
        "<option>Pier Head</option>" +
        "<option>Pier Head (west)</option>" +
        "<option>Quail Island landing</option>" +
        "<option>Parker Creek</option>" +
        "<option>Plum Tree</option>" +
        "<option>Arthur Point (west)</option>" +
        "<option>Arthur Point</option>" +
        "<option>Arthur Point (east 1)</option>" +
        "<option>Arthur Point (east 2)</option>" +
        "<option>Alligator Bay (north)</option>" +
        "<option>Alligator Bay</option>" +
        "<option>Stanage Bay</option>" +
        "<option>Stanage Point (1)</option>" +
        "<option>Stanage Point (2)</option>" +
        "<option>Corisande Hills (north)</option>" +
        "<option>Corisande Hills (south 1)</option>" +
        "<option>Corisande Hills (south 2)</option>" +
        "<option>Hollis Creek (north)</option>" +
        "<option>Hollis Creek</option>" +
        "<option>The Shack</option>" +
        "<option>The Shack (south)</option>" +
        "<option>Beach 1266</option>" +
        "<option>Beach 1267</option>" +
        "<option>Beach 1268</option>" +
        "<option>Yenyardindle Huts (west)</option>" +
        "<option>Yenyardindle Huts</option>" +
        "<option>Yenyardindle Huts (east)</option>" +
        "<option>Broome Head</option>" +
        "<option>Broome Head (south 1)</option>" +
        "<option>Broome Head (south 2)</option>" +
        "<option>Broome Head (south 3)</option>" +
        "<option>Broome Head (south 4)</option>" +
        "<option>Macdonald Point (west 2)</option>" +
        "<option>Macdonald Point (west 1)</option>" +
        "<option>Macdonald Point (south)</option>" +
        "<option>Kreutzer</option>" +
        "<option>West Bight</option>" +
        "<option>West Bight (south)</option>" +
        "<option>Charcoal Creek (north 2)</option>" +
        "<option>Charcoal Creek (north 1)</option>" +
        "<option>Charcoal Creek (east)</option>" +
        "<option>Akens (west)</option>" +
        "<option>Akens (east)</option>" +
        "<option>Sabina Point (west 2)</option>" +
        "<option>Sabina Point (west 1)</option>" +
        "<option>Sabina Point</option>" +
        "<option>Rocky Creek</option>" +
        "<option>Mooly Creek</option>" +
        "<option>Mooly Creek (east 1)</option>" +
        "<option>Mooly Creek (east 2)</option>" +
        "<option>Little Creek (west)</option>" +
        "<option>Little Creek (east)</option>" +
        "<option>Oyster fence (west)</option>" +
        "<option>Oyster fence</option>" +
        "<option>Shoalwater Creek</option>" +
        "<option>Reef Point (west 2)</option>" +
        "<option>Reef Point (west 1)</option>" +
        "<option>Reef Point</option>" +
        "<option>Reef Point (south1)</option>" +
        "<option>Reef Point (south 2)</option>" +
        "<option>Notch</option>" +
        "<option>Notch boulder</option>" +
        "<option>Beach 1307</option>" +
        "<option>Pinetrees (west)</option>" +
        "<option>Pinetrees camp</option>" +
        "<option>Pinetrees Point</option>" +
        "<option>Island Head Inlet (1)</option>" +
        "<option>Island Head Inlet (2)</option>" +
        "<option>Island Head (east 1)</option>" +
        "<option>Island Head (east 2)</option>" +
        "<option>Island Head (east 3)</option>" +
        "<option>Island Head (east 4)</option>" +
        "<option>Brown Rock</option>" +
        "<option>Pearl Bay (north)</option>" +
        "<option>Pearl Bay</option>" +
        "<option>Peral Bay (south 1)</option>" +
        "<option>Pearl Bay (south 2)</option>" +
        "<option>Pearl Bay (south 3)</option>" +
        "<option>Delcomyn (north)</option>" +
        "<option>Delcomyn (south)</option>" +
        "<option>boulder</option>" +
        "<option>Perforated Point (north)</option>" +
        "<option>Perforated Point (south)</option>" +
        "<option>Port Clinton</option>" +
        "<option>Port Clinton (inlet)</option>" +
        "<option>Holtness Point</option>" +
        "<option>Bullock Point</option>" +
        "<option>Inner Head</option>" +
        "<option>Obeservation Rock</option>" +
        "<option>Round Island</option>" +
        "<option>Launch Rocks</option>" +
        "<option>Cape Clinton (north)</option>" +
        "<option>Cape Clinton (south 1)</option>" +
        "<option>Cape Clinton (south 2)</option>" +
        "<option>Cape Clinton (south 3)</option>" +
        "<option>Quoin Island (1)</option>" +
        "<option>Quoin Island (2)</option>" +
        "<option>Freshwater Camp</option>" +
        "<option>Freshwater Camp (east)</option>" +
        "<option>Cliff Point (west)</option>" +
        "<option>Cliff Point</option>" +
        "<option>Cape Manifold (west 2)</option>" +
        "<option>Cape Manifold (west 1)</option>" +
        "<option>Cape Manifold (south 1)</option>" +
        "<option>Cape Manifold (south 2)</option>" +
        "<option>Cape Manifold (south 3)</option>" +
        "<option>Cape Manifold (south 4)</option>" +
        "<option>Cape Manifold (south 5)</option>" +
        "<option>Cape Manifold (south 6)</option>" +
        "<option>Five Rocks</option>" +
        "<option>Five Rocks (south)</option>" +
        "<option>Stockyard Point (north)</option>" +
        "<option>Nine Mile</option>" +
        "<option>Water Park Point (1)</option>" +
        "<option>Water Park Point (2)</option>" +
        "<option>Litttle Corio Bay</option>" +
        "<option>Sandy Point-Farnborough</option>" +
        "<option>Barwell Creek</option>" +
        "<option>Yeppoon</option>" +
        "<option>Wave Point</option>" +
        "<option>Cooee Bay</option>" +
        "<option>Lammermoor</option>" +
        "<option>Statue Bay</option>" +
        "<option>Rosslyn Boat Harbour</option>" +
        "<option>Kemp Beach</option>" +
        "<option>Mulambin Beach</option>" +
        "<option>Kinka Beach</option>" +
        "<option>Kinka (south 1)</option>" +
        "<option>Kinka (south 2)</option>" +
        "<option>Tanby Point</option>" +
        "<option>Fishermans Beach</option>" +
        "<option>Ladies Beach</option>" +
        "<option>Emu Park</option>" +
        "<option>Rocky Point</option>" +
        "<option>Arthur Point</option>" +
        "<option>Zilzie Beach</option>" +
        "<option>Cocoanut Beach</option>" +
        "<option>Cocoanut Point</option>" +
        "<option>Castle Bellas</option>" +
        "<option>Keppel Sands (north 2)</option>" +
        "<option>Keppel Sands (north 1)</option>" +
        "<option>Keppel Sands</option>" +
        "<option>Keppel Sands Point</option>" +
        "<option>Pumpkin Creek</option>" +
        "<option>Cattle Point</option>" +
        "<option>Rundles Beach</option>" +
        "<option>Sea Hill Point</option>" +
        "<option>Warner Point</option>" +
        "<option>Station Point (west)</option>" +
        "<option>Station Point</option>" +
        "<option>Station Point (east)</option>" +
        "<option>Cape Keppel (spit)</option>" +
        "<option>Cape Keppel</option>" +
        "<option>Cape Keppel (east)</option>" +
        "<option>Camp Island (north)</option>" +
        "<option>Camp Island</option>" +
        "<option>Camp Island (south)</option>" +
        "<option>Red Beach</option>" +
        "<option>Cape Capricorn (spit)</option>" +
        "<option>Cape Capricorn (west 2)</option>" +
        "<option>Cape Capricorn (west 1)</option>" +
        "<option>Cape Capricorn</option>" +
        "<option>Cape Capricorn (south 1)</option>" +
        "<option>Cape Capricorn (south 2)</option>" +
        "<option>Cape Capricorn (south 3)</option>" +
        "<option>Curtis Island 1410</option>" +
        "<option>Curtis Island 1411</option>" +
        "<option>Curtis Island 1412</option>" +
        "<option>Curtis Island 1413</option>" +
        "<option>Curtis Island 1414</option>" +
        "<option>Sandhill</option>" +
        "<option>Curtis Island 1416</option>" +
        "<option>Curtis Island 1417</option>" +
        "<option>Curtis Island 1418</option>" +
        "<option>Curtis Island 1419</option>" +
        "<option>Curtis Island 1420</option>" +
        "<option>Curtis Island 1421</option>" +
        "<option>Curtis Island 1422</option>" +
        "<option>Curtis Island 1423</option>" +
        "<option>Black Head (west)</option>" +
        "<option>Black Head</option>" +
        "<option>Connor Bluff</option>" +
        "<option>Southend</option>" +
        "<option>Barney Point</option>" +
        "<option>Boyne Island</option>" +
        "<option>Canoe Point (west)</option>" +
        "<option>Canoe Point (east)</option>" +
        "<option>Tannum Sands (north)</option>" +
        "<option>Tannum Sands</option>" +
        "<option>Wild Cattle Island (north)</option>" +
        "<option>Wild Cattle Island (south)</option>" +
        "<option>Hummock Hill Island (west)</option>" +
        "<option>Hummock Hill Island (centre)</option>" +
        "<option>Hummock Hill Island (east)</option>" +
        "<option>Norton Point</option>" +
        "<option>Middle Head</option>" +
        "<option>Spit End</option>" +
        "<option>Spit End (north)</option>" +
        "<option>Flora Point</option>" +
        "<option>Richards Point (west 2)</option>" +
        "<option>Richards Point (west 1)</option>" +
        "<option>Richards Point</option>" +
        "<option>Ethel Rocks</option>" +
        "<option>Ethel Rocks (east 1)</option>" +
        "<option>Ethel Rocks (east 2)</option>" +
        "<option>Ethel Rocks (east 3)</option>" +
        "<option>Pancake Point</option>" +
        "<option>Clews Point (south 3)</option>" +
        "<option>Clews Point (south 2)</option>" +
        "<option>Clews Point (south 1)</option>" +
        "<option>Clews Point</option>" +
        "<option>Clews Point (east)</option>" +
        "<option>Clews Point (south)</option>" +
        "<option>Bustard Head (north 1)</option>" +
        "<option>Bustard Head (north 2)</option>" +
        "<option>Jenny Lind Creek</option>" +
        "<option>Middle Island</option>" +
        "<option>Bustard Bay (south)</option>" +
        "<option>Eurimbula Creek</option>" +
        "<option>Seventeen Seventy</option>" +
        "<option>Monument Point</option>" +
        "<option>Round Hill (west 2)</option>" +
        "<option>Round Hill (west 1)</option>" +
        "<option>Round Hill (east 1)</option>" +
        "<option>Round Hill (east 2)</option>" +
        "<option>Round Hill (east 3)</option>" +
        "<option>Agnes Water</option>" +
        "<option>Agnes Water (south 1)</option>" +
        "<option>Agnes Water (south 2)</option>" +
        "<option>Agnes Water (south 3)</option>" +
        "<option>Beach 1475</option>" +
        "<option>Beach 1476</option>" +
        "<option>Beach 1477</option>" +
        "<option>Rocky Point (north 2)</option>" +
        "<option>Rocky Point (north 1)</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point (south 1)</option>" +
        "<option>Rocky Point (south 2)</option>" +
        "<option>Red Rock (north)</option>" +
        "<option>Red Rock (south)</option>" +
        "<option>Wreck Rock (north 2)</option>" +
        "<option>Wreck Rock (north 1)</option>" +
        "<option>Wreck Rock</option>" +
        "<option>Broadwater Creek</option>" +
        "<option>Rules Beach</option>" +
        "<option>Baffle Creek</option>" +
        "<option>Kolan River</option>" +
        "<option>Moore Park</option>" +
        "<option>Croome Creek</option>" +
        "<option>Welcome Creek</option>" +
        "<option>Barubbra Island</option>" +
        "<option>Clark Point</option>" +
        "<option>South Head</option>" +
        "<option>The Oaks</option>" +
        "<option>Ricketts</option>" +
        "<option>Mon Repos</option>" +
        "<option>Nielson Park</option>" +
        "<option>Bargara</option>" +
        "<option>Kellys</option>" +
        "<option>Kellys (south)</option>" +
        "<option>Woongarra</option>" +
        "<option>Innes Park (north)</option>" +
        "<option>Innes Park</option>" +
        "<option>Barolin Rocks</option>" +
        "<option>Elliott Heads</option>" +
        "<option>Elliott Heads groyne</option>" +
        "<option>Elliott Heads spit</option>" +
        "<option>Coonarr</option>" +
        "<option>Coonarr Creek</option>" +
        "<option>Woodgate</option>" +
        "<option>Burrum Point</option>" +
        "<option>Burrum River</option>" +
        "<option>Burrum Heads</option>" +
        "<option>Toogoom</option>" +
        "<option>Dundowran</option>" +
        "<option>Eli Creek</option>" +
        "<option>Gatakers Bay</option>" +
        "<option>Point Vernon</option>" +
        "<option>Gables Point</option>" +
        "<option>Pialba</option>" +
        "<option>Scarness-Torquay</option>" +
        "<option>Urangan</option>" +
        "<option>Urangan (south)</option>" +
        "<option>Inskip Point</option>" +
        "<option>Rainbow Beach</option>" +
        "<option>Rainbow Beach (south)</option>" +
        "<option>Cooloola</option>" +
        "<option>Noosa</option>" +
        "<option>Noosa West</option>" +
        "<option>Little Cove</option>" +
        "<option>Tea Tree</option>" +
        "<option>Granite Bay</option>" +
        "<option>Fairy Pools</option>" +
        "<option>Alexandria Bay</option>" +
        "<option>Devils Kitchen</option>" +
        "<option>Sunshine-Coolum</option>" +
        "<option>Sunshine</option>" +
        "<option>Sunrise</option>" +
        "<option>Marcus</option>" +
        "<option>Peregian</option>" +
        "<option>Coolum</option>" +
        "<option>Point Perry (1)</option>" +
        "<option>Point Perry (2)</option>" +
        "<option>Point Arkwright</option>" +
        "<option>Marcoola (Yaroomba-Mudjimba)</option>" +
        "<option>Yaroomba</option>" +
        "<option>Coolum Resort</option>" +
        "<option>Marcoola</option>" +
        "<option>Mudjimba</option>" +
        "<option>Mudjimba (Ninderry-Twin Waters)</option>" +
        "<option>Ninderry</option>" +
        "<option>Twin Waters</option>" +
        "<option>Maroochydore-Alex Headland</option>" +
        "<option>Maroochydore</option>" +
        "<option>Alexandra Headland</option>" +
        "<option>Alexandra Head</option>" +
        "<option>Mooloolaba</option>" +
        "<option>Point Cartwright</option>" +
        "<option>Kawana Waters</option>" +
        "<option>Point Cartwright</option>" +
        "<option>Buddina</option>" +
        "<option>Kawana</option>" +
        "<option>Warana</option>" +
        "<option>Bokarina</option>" +
        "<option>Wurtulla</option>" +
        "<option>Currmundi</option>" +
        "<option>Dicky</option>" +
        "<option>Moffat</option>" +
        "<option>Shelly</option>" +
        "<option>Kings (Caloundra)</option>" +
        "<option>Bulcock</option>" +
        "<option>Woorim</option>" +
        "<option>Skirmish-South points</option>" +
        "<option>Bongaree</option>" +
        "<option>Pebble Beach</option>" +
        "<option>Godwin Beach</option>" +
        "<option>Beachmere</option>" +
        "<option>Deception Bay</option>" +
        "<option>Scarborough Jetty</option>" +
        "<option>Scarborough Beach</option>" +
        "<option>Scarborough Point</option>" +
        "<option>Drury Point</option>" +
        "<option>Queens Beach North</option>" +
        "<option>Queens Beach</option>" +
        "<option>Queens-Redcliffe</option>" +
        "<option>Settlement Cove Lagoon</option>" +
        "<option>Suttons-Margate</option>" +
        "<option>Scotts Point</option>" +
        "<option>Woody Point</option>" +
        "<option>Clontarf</option>" +
        "<option>Nudgee Beach</option>" +
        "<option>Cribb Island</option>" +
        "<option>Adams Beach</option>" +
        "<option>Dunwich</option>" +
        "<option>One Mile</option>" +
        "<option>Amity</option>" +
        "<option>Amity Point</option>" +
        "<option>Flinders Beach</option>" +
        "<option>Rocky Point</option>" +
        "<option>Cylinder Beach</option>" +
        "<option>Deadmans Beach</option>" +
        "<option>Frenchmans Bay</option>" +
        "<option>North Gorge</option>" +
        "<option>South Head</option>" +
        "<option>Point Lookout/Blue Lake Beach</option>" +
        "<option>Point Lookout</option>" +
        "<option>Blue Lake</option>" +
        "<option>Jumpinpin Inlet</option>" +
        "<option>South Stradbroke</option>" +
        "<option>The Spit-Miami</option>" +
        "<option>The Spit</option>" +
        "<option>Southport</option>" +
        "<option>Surfers Paradise</option>" +
        "<option>Northcliffe</option>" +
        "<option>Broadbeach</option>" +
        "<option>Kurrawa</option>" +
        "<option>Mermaid Beach</option>" +
        "<option>Nobby's Beach</option>" +
        "<option>Miami Beach</option>" +
        "<option>Burleigh Beach</option>" +
        "<option>North Burleigh</option>" +
        "<option>Burleigh Heads</option>" +
        "<option>Palm Beach</option>" +
        "<option>Tallebudgera</option>" +
        "<option>Tallebudgera Creek</option>" +
        "<option>Pacific</option>" +
        "<option>Palm Beach</option>" +
        "<option>Currumbin Inlet</option>" +
        "<option>Currumbin</option>" +
        "<option>Flat Rock</option>" +
        "<option>Tugun-Kirra</option>" +
        "<option>Tugun</option>" +
        "<option>Bilinga</option>" +
        "<option>North Kirra</option>" +
        "<option>Kirra</option>" +
        "<option>Coolangatta-Greenmount</option>" +
        "<option>Coolangatta</option>" +
        "<option>Greenmount</option>" +
        "<option>Rainbow Bay</option>" +
        "<option>Snapper Rocks</option>" +
        "<option>Sandy Point (north)</option>" +
        "<option>Sandy Point (west)</option>" +
        "<option>Main Beach (Coochiemudlo Island)</option>" +
        "<option>Pallon</option>" +
        "<option>Brammo Bay</option>" +
        "<option>Daydream North</option>" +
        "<option>Beach Club</option>" +
        "<option>Sunlovers</option>" +
        "<option>North Point (east)</option>" +
        "<option>Castle Rocks</option>" +
        "<option>Pearl Ledge</option>" +
        "<option>Sable Chief Rocks</option>" +
        "<option>Facing 5</option>" +
        "<option>Casuarina Clump</option>" +
        "<option>East Point</option>" +
        "<option>Settlement Point (1)</option>" +
        "<option>Settlement Point (2)</option>" +
        "<option>Settlement Point (west1)</option>" +
        "<option>Gatcombe Head</option>" +
        "<option>Gatcombe (1)</option>" +
        "<option>Gatcombe (2)</option>" +
        "<option>Farmers Point</option>" +
        "<option>The Oaks</option>" +
        "<option>North Point (west)</option>" +
        "<option>Manann</option>" +
        "<option>Ngkala</option>" +
        "<option>Orchid</option>" +
        "<option>Waddy Point</option>" +
        "<option>Middle Rocks (1)</option>" +
        "<option>Middle Rocks (2)</option>" +
        "<option>Indian Head</option>" +
        "<option>Seventy Five Mile</option>" +
        "<option>Corroboree</option>" +
        "<option>Cathedral</option>" +
        "<option>Maheno</option>" +
        "<option>Happy Valley</option>" +
        "<option>Poyungan</option>" +
        "<option>Eurong</option>" +
        "<option>Five Mile</option>" +
        "<option>North Spit</option>" +
        "<option>Hook Point</option>" +
        "<option>White Cliffs</option>" +
        "<option>Sandy Point</option>" +
        "<option>Moon Point</option>" +
        "<option>Coongul Creek</option>" +
        "<option>Triangle Cliff</option>" +
        "<option>Platypus Bay</option>" +
        "<option>Sandy Cape</option>" +
        "<option>Wreck</option>" +
        "<option>Wreck (1)</option>" +
        "<option>Wreck (2)</option>" +
        "<option>Wreck (3)</option>" +
        "<option>Red</option>" +
        "<option>Clam Bay (east)</option>" +
        "<option>Clam Bay</option>" +
        "<option>Mount Windham (1)</option>" +
        "<option>Mount Windham (2)</option>" +
        "<option>Long</option>" +
        "<option>Monkey</option>" +
        "<option>Monkey (north)</option>" +
        "<option>Fishermans</option>" +
        "<option>Putney</option>" +
        "<option>Parasail</option>" +
        "<option>Lecks</option>" +
        "<option>Beach 17</option>" +
        "<option>Svendsen</option>" +
        "<option>Svendsen (north)</option>" +
        "<option>Beach 20</option>" +
        "<option>Beach 21</option>" +
        "<option>Green Island Beach (Green Island)</option>" +
        "<option>Resort (east)</option>" +
        "<option>Resort (west)</option>" +
        "<option>Catseye Bay</option>" +
        "<option>Rescue Point</option>" +
        "<option>Barbecue Bay</option>" +
        "<option>Blue Pearl Bay (south)</option>" +
        "<option>Blue Pearl Bay (north)</option>" +
        "<option>Palm Bay</option>" +
        "<option>Happy Bay</option>" +
        "<option>Gap Beach</option>" +
        "<option>East Point</option>" +
        "<option>Alexandra Bay</option>" +
        "<option>Plantation Bay</option>" +
        "<option>Home Beach</option>" +
        "<option>Coconut Beach</option>" +
        "<option>Boat Port</option>" +
        "<option>Boat Port (north 1)</option>" +
        "<option>Boat Port (north 2)</option>" +
        "<option>Honeymoon Bay</option>" +
        "<option>Tallallebela</option>" +
        "<option>Cape Moreton (west 2)</option>" +
        "<option>Cape Moreton (west 1)</option>" +
        "<option>Braydon-Sovereign</option>" +
        "<option>Braydon</option>" +
        "<option>Spitfire</option>" +
        "<option>Warrajamra</option>" +
        "<option>Eager</option>" +
        "<option>Jason</option>" +
        "<option>Gonzales</option>" +
        "<option>Toompawi</option>" +
        "<option>Sovereign</option>" +
        "<option>South Passage</option>" +
        "<option>Mays Hole</option>" +
        "<option>Kooringal</option>" +
        "<option>Koonungai</option>" +
        "<option>Square patch</option>" +
        "<option>Wangalooma</option>" +
        "<option>Bulwer</option>" +
        "<option>Kianga Channel</option>" +
        "<option>Heath Island</option>" +
        "<option>Yellow Patch</option>" +
        "<option>Balding Bay</option>" +
        "<option>Radical Bay</option>" +
        "<option>Florence Bay</option>" +
        "<option>Arthur Bay</option>" +
        "<option>Alma Bay</option>" +
        "<option>Geoffrey Bay</option>" +
        "<option>Nelly Bay</option>" +
        "<option>Rocky Bay</option>" +
        "<option>Picnic Bay</option>" +
        "<option>Cockle Bay</option>" +
        "<option>Young Bay</option>" +
        "<option>West Point</option>" +
        "<option>Rollingstone Bay</option>" +
        "<option>Liver Point</option>" +
        "<option>Huntingfield Bay</option>" +
        "<option>Wilson Bay</option>" +
        "<option>Joyce Bay</option>" +
        "<option>Norris Bay</option>" +
        "<option>Maud Bay</option>" +
        "<option>Lovers Bay</option>" +
        "<option>Horseshoe Bay</option>" +
        "<option>White Lady Rock</option>" +
        "<option>Resort</option>" +
        "<option>Streets Beach Lagoon</option>" +
        "<option>Whitehaven</option>" +
        "<option>Piccaninnie Ponds</option>" +
        "<option>Brown Bay</option>" +
        "<option>Riddoch Bay</option>" +
        "<option>Stony Point (west)</option>" +
        "<option>Racecourse Bay</option>" +
        "<option>French Point (east)</option>" +
        "<option>French Point (west)</option>" +
        "<option>Orwell Rocks</option>" +
        "<option>Port MacDonnell</option>" +
        "<option>Port MacDonnell harbour</option>" +
        "<option>Port MacDonnell (west)</option>" +
        "<option>Springs Road</option>" +
        "<option>Smiths Road</option>" +
        "<option>Frog Rock</option>" +
        "<option>Cape Northumberland (east)</option>" +
        "<option>Cape Northumberland (west 1)</option>" +
        "<option>Cape Northumberland (west 2)</option>" +
        "<option>Finger Point</option>" +
        "<option>Blanche Bay</option>" +
        "<option>Middle Point (east)</option>" +
        "<option>Middle Point (west))</option>" +
        "<option>Umpherstone Bay</option>" +
        "<option>Douglas Point (east)</option>" +
        "<option>Douglas Point (west 1)</option>" +
        "<option>Douglas Point (west 2)</option>" +
        "<option>Douglas Point 'bay'</option>" +
        "<option>Nene valley (east)</option>" +
        "<option>Nene Valley</option>" +
        "<option>Nene Valley (west)</option>" +
        "<option>Beach 30</option>" +
        "<option>Blackfellows Caves (east)</option>" +
        "<option>Blackfellows Caves (west 1)</option>" +
        "<option>Blackfellows Caves (west 2)</option>" +
        "<option>Beach 34</option>" +
        "<option>Pelican Point (east)</option>" +
        "<option>Bungaloo Bay</option>" +
        "<option>Bungaloo Bay (west 1)</option>" +
        "<option>Bungaloo Bay (west 2)</option>" +
        "<option>The Rapids</option>" +
        "<option>The Rapids (point)</option>" +
        "<option>Bucks Bay</option>" +
        "<option>Bucks Bay (point)</option>" +
        "<option>Cape Banks</option>" +
        "<option>Admella beach (1)</option>" +
        "<option>Admella beach (2)</option>" +
        "<option>Number Two Rocks (1)</option>" +
        "<option>Number two Rocks (2)</option>" +
        "<option>Number Two Rocks (3)</option>" +
        "<option>Number Two Rocks (4)</option>" +
        "<option>Number One Rock (south)</option>" +
        "<option>Number One Rock (north)</option>" +
        "<option>Canunda Beach</option>" +
        "<option>Gletwood Beach</option>" +
        "<option>Pether Rocks</option>" +
        "<option>Cameron Rocks</option>" +
        "<option>Mounce and Battye Rocks</option>" +
        "<option>McIntyre Beach (east)</option>" +
        "<option>McIntyre Beach (west)</option>" +
        "<option>Cullen Bay</option>" +
        "<option>Eddy Bay (1)</option>" +
        "<option>Eddy Bay (2)</option>" +
        "<option>Double Island</option>" +
        "<option>Back beach</option>" +
        "<option>Cape Buffon (1)</option>" +
        "<option>Cape Buffon (2)</option>" +
        "<option>Cape Boffon (3)</option>" +
        "<option>Southend Jetty</option>" +
        "<option>Southend (west)</option>" +
        "<option>Southend (main)</option>" +
        "<option>Southend/Burdon</option>" +
        "<option>Town beach</option>" +
        "<option>Back beach</option>" +
        "<option>Port William</option>" +
        "<option>Snapper Point (east)</option>" +
        "<option>Snapper Point (west)</option>" +
        "<option>Salmon Hole</option>" +
        "<option>Post Office Rock</option>" +
        "<option>Cowrie island</option>" +
        "<option>Wooley Rock</option>" +
        "<option>Piegon Cove</option>" +
        "<option>Beach 81</option>" +
        "<option>Beach 82</option>" +
        "<option>Beach 83</option>" +
        "<option>Beach 84</option>" +
        "<option>Three Mile Rocks (south)</option>" +
        "<option>Three Mile Rocks (north)</option>" +
        "<option>Five Mile Rocks (south)</option>" +
        "<option>Five Mile Rocks (north)</option>" +
        "<option>Euro Point</option>" +
        "<option>Nine Mile sandhills</option>" +
        "<option>Beach 91</option>" +
        "<option>Lurline Point</option>" +
        "<option>Stinky Bay</option>" +
        "<option>Nora Creina</option>" +
        "<option>Rabelais</option>" +
        "<option>Beach 96</option>" +
        "<option>German point (south)</option>" +
        "<option>German Point</option>" +
        "<option>German Point (north)</option>" +
        "<option>Errington Hole (south)</option>" +
        "<option>Errington Hole</option>" +
        "<option>Errington Hole (north)</option>" +
        "<option>Errington Hole beach</option>" +
        "<option>Little Dip (south)</option>" +
        "<option>Little Dip</option>" +
        "<option>Perch Hole (1)</option>" +
        "<option>Perch Hole (2)</option>" +
        "<option>Perch Hole (3)</option>" +
        "<option>Long Gully (1)</option>" +
        "<option>Long Gully (2)</option>" +
        "<option>Long Gully (3)</option>" +
        "<option>Long Gully (4)</option>" +
        "<option>Beach 113</option>" +
        "<option>Bishops Pate (south)</option>" +
        "<option>Bishops Pate beach</option>" +
        "<option>Beach 116</option>" +
        "<option>Beach 117</option>" +
        "<option>Beach 118</option>" +
        "<option>Beach 119</option>" +
        "<option>Beach 120</option>" +
        "<option>Domaschenz beach</option>" +
        "<option>Queen Head beach</option>" +
        "<option>Back beach</option>" +
        "<option>Stony Rise (1)</option>" +
        "<option>Stony Rise (2)</option>" +
        "<option>Stong Rise (3)</option>" +
        "<option>Evans Cave beach</option>" +
        "<option>Cape Lannes</option>" +
        "<option>West beach</option>" +
        "<option>Factory Bay (1)</option>" +
        "<option>Factory Bay (2)</option>" +
        "<option>Factory Bay (3)</option>" +
        "<option>Factory Bay (4)</option>" +
        "<option>Factory Bay (5)</option>" +
        "<option>Factory Bay (6)</option>" +
        "<option>Cape Dombey</option>" +
        "<option>Karratta</option>" +
        "<option>Town</option>" +
        "<option>Hooper</option>" +
        "<option>Fox</option>" +
        "<option>Long</option>" +
        "<option>Boatswain Point</option>" +
        "<option>Cape Thomas</option>" +
        "<option>Aram Cove (1)</option>" +
        "<option>Aram Cove (2)</option>" +
        "<option>Wright Bay</option>" +
        "<option>Cape Jaffa</option>" +
        "<option>The Coorong</option>" +
        "<option>Kings Camp</option>" +
        "<option>Lacapede Bay</option>" +
        "<option>Wyomi</option>" +
        "<option>Kingston SE</option>" +
        "<option>Long Beach (south)</option>" +
        "<option>The Granites</option>" +
        "<option>Long Beach (north)</option>" +
        "<option>28-32 Mile Crossing</option>" +
        "<option>32-42 Mile Crossing</option>" +
        "<option>42 Mile-Tea Tree Crossing</option>" +
        "<option>Tea Tree-Murray Mouth</option>" +
        "<option>Goolwa-Middleton</option>" +
        "<option>Goolwa</option>" +
        "<option>Surfers</option>" +
        "<option>Middleton</option>" +
        "<option>Middleton Rocks</option>" +
        "<option>Basham</option>" +
        "<option>Crockery Bay</option>" +
        "<option>Port Elliot</option>" +
        "<option>Ladies beach</option>" +
        "<option>Rocky Bay</option>" +
        "<option>Green Bay</option>" +
        "<option>Boomers-Chiton Rocks</option>" +
        "<option>Boomer</option>" +
        "<option>Watsons Gap</option>" +
        "<option>Chiton Rocks</option>" +
        "<option>Hindmarsh River</option>" +
        "<option>Victor Harbour (east)</option>" +
        "<option>Victor Harbour (west)</option>" +
        "<option>Inman River</option>" +
        "<option>Yilki beach</option>" +
        "<option>Rosetta Head</option>" +
        "<option>Petrel Cove</option>" +
        "<option>Ralgnal</option>" +
        "<option>Kings beach</option>" +
        "<option>King Head 1</option>" +
        "<option>King Head 2</option>" +
        "<option>King Head 3</option>" +
        "<option>Waitpinga</option>" +
        "<option>Parsons</option>" +
        "<option>Beach 172</option>" +
        "<option>Coolawang</option>" +
        "<option>Ballapanudda beach</option>" +
        "<option>Callawonga beach</option>" +
        "<option>Tunk Head</option>" +
        "<option>Tunkalilla beach</option>" +
        "<option>Boat Harbour beach</option>" +
        "<option>Deep Creek Cove</option>" +
        "<option>Blowhole Creek</option>" +
        "<option>Naiko Inlet (1)</option>" +
        "<option>Naiko Inlet (2)</option>" +
        "<option>Coalinga Creek</option>" +
        "<option>Beach 184</option>" +
        "<option>Fishery Bay</option>" +
        "<option>Lands End</option>" +
        "<option>Cape Jervis harbour</option>" +
        "<option>Morgan beach</option>" +
        "<option>Tea Tree Creek</option>" +
        "<option>Beach 190</option>" +
        "<option>Beach 191</option>" +
        "<option>Salt Creek</option>" +
        "<option>Beach 193</option>" +
        "<option>Beach 194</option>" +
        "<option>Beach 195</option>" +
        "<option>New Yohoe Creek</option>" +
        "<option>Stockyard Creek</option>" +
        "<option>Becah 198</option>" +
        "<option>Beach 199</option>" +
        "<option>Rapid Head (south)</option>" +
        "<option>Rapid Bay</option>" +
        "<option>Rapid Bay (north)</option>" +
        "<option>Second Valley (1)</option>" +
        "<option>Second Valley (2)</option>" +
        "<option>Wirruna</option>" +
        "<option>Yankalilla Bay</option>" +
        "<option>Normanville</option>" +
        "<option>Carrickalinga</option>" +
        "<option>Carrickalinga Head</option>" +
        "<option>Beach 210</option>" +
        "<option>Beach 211</option>" +
        "<option>Myponga beach</option>" +
        "<option>Beach 213</option>" +
        "<option>Cactus Canyon</option>" +
        "<option>Sellicks-Silver Sands</option>" +
        "<option>Sellicks</option>" +
        "<option>Silver Sands</option>" +
        "<option>Aldinga</option>" +
        "<option>Port Wilunga</option>" +
        "<option>Port Wilunga (north)</option>" +
        "<option>Maslins Beach</option>" +
        "<option>Ochre Point</option>" +
        "<option>Moana</option>" +
        "<option>Robinson Point</option>" +
        "<option>Southport</option>" +
        "<option>Port Noralunga</option>" +
        "<option>Christies Beach</option>" +
        "<option>O'Sullivan Beach</option>" +
        "<option>O'Sullivan Beach harbour</option>" +
        "<option>Port Stanvac</option>" +
        "<option>Hallett Cove</option>" +
        "<option>Seacliff-Glenelg</option>" +
        "<option>Seacliff</option>" +
        "<option>Brighton</option>" +
        "<option>Somerton</option>" +
        "<option>Glenelg</option>" +
        "<option>Glenelg entrance</option>" +
        "<option>West Beach</option>" +
        "<option>West beach (south)</option>" +
        "<option>West beach (marina)</option>" +
        "<option>West Beach</option>" +
        "<option>Henley-Largs Bay</option>" +
        "<option>Henley</option>" +
        "<option>Grange</option>" +
        "<option>Tennyson</option>" +
        "<option>West Lake</option>" +
        "<option>Semaphore</option>" +
        "<option>Largs Bay</option>" +
        "<option>North Haven</option>" +
        "<option>Port Gawler</option>" +
        "<option>Middle Beach</option>" +
        "<option>Light Beach</option>" +
        "<option>Prime Beach</option>" +
        "<option>Great Sandy Point</option>" +
        "<option>Webb Beach</option>" +
        "<option>Parham</option>" +
        "<option>Lorne</option>" +
        "<option>Bald Hill Beach</option>" +
        "<option>Port Wakefield</option>" +
        "<option>Clinton</option>" +
        "<option>Clinton (west)</option>" +
        "<option>Port Clinton (north)</option>" +
        "<option>Port Clinton</option>" +
        "<option>Port Clinton (south)</option>" +
        "<option>Macs-Tiddy Widdy</option>" +
        "<option>Ardrossan</option>" +
        "<option>Parara</option>" +
        "<option>James Well</option>" +
        "<option>Rouges Point</option>" +
        "<option>Mennie Hill (south 1)</option>" +
        "<option>Mennie Hill (south 2)</option>" +
        "<option>Mennie Hill (south 3)</option>" +
        "<option>Muloowurite Point (north 2)</option>" +
        "<option>Muloowurite Point (north 1)</option>" +
        "<option>Muloowurite Point (south 1)</option>" +
        "<option>Muloowurite Point (south 2)</option>" +
        "<option>Muloowurite Point (south 3)</option>" +
        "<option>Muloowurite Point (south 4)</option>" +
        "<option>Throoka Creek</option>" +
        "<option>Throoka Creek (south 1)</option>" +
        "<option>Throoka Creek (south 2)</option>" +
        "<option>Throoka Creek (south 3)</option>" +
        "<option>Pine Point (north)</option>" +
        "<option>Pine Point (south 1)</option>" +
        "<option>Pine Point (south 2)</option>" +
        "<option>Pine Point (south 3)</option>" +
        "<option>Pine Point (south 4)</option>" +
        "<option>Rocky Point (north 3)</option>" +
        "<option>Rocky Point (north 2)</option>" +
        "<option>Rocky Point (north 1)</option>" +
        "<option>Black Point (north)</option>" +
        "<option>Black Point (south)</option>" +
        "<option>Port Julia (north 2)</option>" +
        "<option>Port Julia (north 1)</option>" +
        "<option>Port Julia</option>" +
        "<option>Port Julia (south 1)</option>" +
        "<option>Port Julia (south 2)</option>" +
        "<option>Port Julia (south 3)</option>" +
        "<option>Port Julia (south 4)</option>" +
        "<option>Sheoak Flat (north)</option>" +
        "<option>Sheoak Flat</option>" +
        "<option>Dowcer Bluff (1)</option>" +
        "<option>Dowcer Bluff (2)</option>" +
        "<option>Dowcer Bluff (3)</option>" +
        "<option>Dowcer Bluff (4</option>" +
        "<option>Dowcer Bluff (5)</option>" +
        "<option>Dowcer Bluff (6)</option>" +
        "<option>Port Vincent (north)</option>" +
        "<option>Port Vincent (south)</option>" +
        "<option>Devil Gully</option>" +
        "<option>Beach 295</option>" +
        "<option>Beach 296</option>" +
        "<option>Beach 297</option>" +
        "<option>Beach 298</option>" +
        "<option>Beach 299</option>" +
        "<option>Beach 300</option>" +
        "<option>Beach 301</option>" +
        "<option>Beach 302</option>" +
        "<option>Beach 303</option>" +
        "<option>Beach Point (north)</option>" +
        "<option>Beach Point (south)</option>" +
        "<option>Oyster Bay (1)</option>" +
        "<option>Oyster Bay (2)</option>" +
        "<option>Oyster Bay (3)</option>" +
        "<option>Oyster Bay (4)</option>" +
        "<option>Oyster Bay (5)</option>" +
        "<option>Stansbury jetty</option>" +
        "<option>Stansbury</option>" +
        "<option>Stansbury (south)</option>" +
        "<option>Beach 314</option>" +
        "<option>Beach 315</option>" +
        "<option>Beach 316</option>" +
        "<option>Beach 317</option>" +
        "<option>Beach 318</option>" +
        "<option>Beach 319</option>" +
        "<option>Klein Point (north)</option>" +
        "<option>Klein Point (south)</option>" +
        "<option>Wool Bay (north 2)</option>" +
        "<option>Wool Bay (north 1)</option>" +
        "<option>Wool Bay</option>" +
        "<option>Wool Bay (south)</option>" +
        "<option>Port Giles (north)</option>" +
        "<option>Port Giles</option>" +
        "<option>Port Giles (south)</option>" +
        "<option>Giles Point (1)</option>" +
        "<option>Giles Point (2)</option>" +
        "<option>Coobowie</option>" +
        "<option>Edithburgh</option>" +
        "<option>Edithburgh (boat ramp)</option>" +
        "<option>Edithburgh (jetty)</option>" +
        "<option>Hungry Point</option>" +
        "<option>Sultana Point</option>" +
        "<option>Sheoak beach</option>" +
        "<option>Goldsmith Beach</option>" +
        "<option>Tourbridge Point (west)</option>" +
        "<option>Tourbridge Hill (west 1)</option>" +
        "<option>Tourbridge Hill (west 2)</option>" +
        "<option>Tourbridge Hill (west 3)</option>" +
        "<option>Kemp Bay (1)</option>" +
        "<option>Kemp Bay (2)</option>" +
        "<option>Waterloo Bay bluffs (1)</option>" +
        "<option>Waterloo Bay bluffs (2)</option>" +
        "<option>Waterloo Bay bluffs (3)</option>" +
        "<option>Waterloo Bay</option>" +
        "<option>Port Moorowie</option>" +
        "<option>Port Moorowie (boat ramp)</option>" +
        "<option>McLeod Harbour (1)</option>" +
        "<option>McLeod Harbour (2)</option>" +
        "<option>McLeod Harbour (3)</option>" +
        "<option>Point Gilbert</option>" +
        "<option>Sturt  Bay</option>" +
        "<option>Point Davenport</option>" +
        "<option>Foul Bay (east)</option>" +
        "<option>Foul Bay</option>" +
        "<option>Point Yorke (north 3)</option>" +
        "<option>Point Yorke (north 2)</option>" +
        "<option>Point Yorke (north 1)</option>" +
        "<option>Point Yorke (south 1)</option>" +
        "<option>Point Yorke (south 2)</option>" +
        "<option>Point Yorke (south 3)</option>" +
        "<option>Foul Hill (1)</option>" +
        "<option>Foul Hill (2)</option>" +
        "<option>Meteor Bay</option>" +
        "<option>Bangalee</option>" +
        "<option>T Cove</option>" +
        "<option>boulder beach 1</option>" +
        "<option>boulder beach 2</option>" +
        "<option>Coffin Bay</option>" +
        "<option>Butlers Beach</option>" +
        "<option>Butlers Beach (west)</option>" +
        "<option>Hillock Point</option>" +
        "<option>Salmon Beach</option>" +
        "<option>Butterfish Bay (1)</option>" +
        "<option>Butterfish Bay (2)</option>" +
        "<option>Marion Bay</option>" +
        "<option>Penguin Point</option>" +
        "<option>Jollys Beach</option>" +
        "<option>Rhino Point (north)</option>" +
        "<option>Rhino Point (south)</option>" +
        "<option>Stenhouse Bay (north)</option>" +
        "<option>Stenhouse Bay (centre)</option>" +
        "<option>Stenhouse Bay (jetty)</option>" +
        "<option>Chinamans Hat</option>" +
        "<option>Cable Bay (east 2)</option>" +
        "<option>Cable Bay (east 1)</option>" +
        "<option>Cable Bay (main)</option>" +
        "<option>Cable Bay (west)</option>" +
        "<option>Cape Spencer (north 1)</option>" +
        "<option>Cape Spencer (north 2)</option>" +
        "<option>Cape Spencer (north 3)</option>" +
        "<option>Cape Spencer (north 4)</option>" +
        "<option>Cape Spencer (north 5)</option>" +
        "<option>The Gap</option>" +
        "<option>Howling Cove</option>" +
        "<option>Reef Head (north)</option>" +
        "<option>Ethel Wreck</option>" +
        "<option>Ethel (north 1)</option>" +
        "<option>Ethel (north 2)</option>" +
        "<option>West Cape</option>" +
        "<option>Groper Bay</option>" +
        "<option>Groper Bay (north)</option>" +
        "<option>Pondalowie Bay</option>" +
        "<option>Pondalowie Bay (north)</option>" +
        "<option>Royston Head (south 2)</option>" +
        "<option>Royston Head (south 1)</option>" +
        "<option>Royston Head</option>" +
        "<option>Royston Head (east)</option>" +
        "<option>Dolphin Beach</option>" +
        "<option>Shell Beach</option>" +
        "<option>Beach 414</option>" +
        "<option>Beach 415</option>" +
        "<option>Browns Beach</option>" +
        "<option>Beach 417</option>" +
        "<option>Beach 418</option>" +
        "<option>Beach 419</option>" +
        "<option>Beach 420</option>" +
        "<option>Gym Beach</option>" +
        "<option>Beach 422</option>" +
        "<option>Beach 423</option>" +
        "<option>Beach 424</option>" +
        "<option>Point Margaret (south 3)</option>" +
        "<option>Point Margaret (south 2)</option>" +
        "<option>Point Margaret (south 1)</option>" +
        "<option>Constance Bay</option>" +
        "<option>Constance Bay (north)</option>" +
        "<option>Baby Lizard</option>" +
        "<option>Baby Lizard (north)</option>" +
        "<option>Formby Bay</option>" +
        "<option>Daly Head (north 1)</option>" +
        "<option>Daly Head (north 2)</option>" +
        "<option>Gleesons Landing</option>" +
        "<option>Swincers Rocks (south)</option>" +
        "<option>Swincers Rocks</option>" +
        "<option>Point Annie</option>" +
        "<option>Point Deburg (north 1)</option>" +
        "<option>Point Deburg (north 2)</option>" +
        "<option>Point Deburg (north 3)</option>" +
        "<option>Berry Bay (1)</option>" +
        "<option>Berry Bay (2)</option>" +
        "<option>Berry Bay (3)</option>" +
        "<option>Berry Bay (4)</option>" +
        "<option>North Berry Bay</option>" +
        "<option>Corny Point (west)</option>" +
        "<option>Corny Point</option>" +
        "<option>Corny Point (east 1)</option>" +
        "<option>Corny Point (east 2)</option>" +
        "<option>Greig Lookout</option>" +
        "<option>Dandy Beach</option>" +
        "<option>Dunn Point</option>" +
        "<option>Couchs Beach</option>" +
        "<option>Levens Beach</option>" +
        "<option>Galway Bay</option>" +
        "<option>Galway Bay (east 1)</option>" +
        "<option>Point Souttar (east 2)</option>" +
        "<option>Point Souttar (east)</option>" +
        "<option>Brutus</option>" +
        "<option>Fish Point</option>" +
        "<option>Point Turton</option>" +
        "<option>Point Turton (jetty)</option>" +
        "<option>Flattery Beach</option>" +
        "<option>Hardewicke Bay</option>" +
        "<option>Parsons Beach</option>" +
        "<option>Bluff Beach</option>" +
        "<option>Rudis Bay</option>" +
        "<option>Barker Rocks</option>" +
        "<option>Barker Rocks (north)</option>" +
        "<option>Port Rickaby</option>" +
        "<option>Bush Beach</option>" +
        "<option>Second Beach</option>" +
        "<option>Rifle Butts Beach</option>" +
        "<option>Point Gawler</option>" +
        "<option>Port Victoria (south 2)</option>" +
        "<option>Port Victoria (south 1)</option>" +
        "<option>Port Victoria (jetty)</option>" +
        "<option>Port Victoria (north)</option>" +
        "<option>Point Pearce (east)</option>" +
        "<option>Point Pearce (bay)</option>" +
        "<option>Point Pearce (landing)</option>" +
        "<option>Point Pearce (west)</option>" +
        "<option>Island Point</option>" +
        "<option>Island-Reef points</option>" +
        "<option>Chinaman Well</option>" +
        "<option>Balgowan</option>" +
        "<option>Balgowan (north 1)</option>" +
        "<option>Balgowan (north 2)</option>" +
        "<option>Balgowan (north 31)</option>" +
        "<option>Tiparra Rocks</option>" +
        "<option>The Bamboos (point 1)</option>" +
        "<option>The Bamboos (point 2)</option>" +
        "<option>The Bamboos (point 3)</option>" +
        "<option>The Bamboos (point 4)</option>" +
        "<option>The Bamboos</option>" +
        "<option>The Gap (south)</option>" +
        "<option>The Gap</option>" +
        "<option>Cape Elizabeth (south)</option>" +
        "<option>Cape Elizabeth</option>" +
        "<option>Cape Elizabeth (east 1)</option>" +
        "<option>Cape Elizabeth (east 2)</option>" +
        "<option>Cape Elizabeth (east 3)</option>" +
        "<option>Cape Elizabeth (spit)</option>" +
        "<option>Tiparra Bay (south)</option>" +
        "<option>Tiparra Bay (foreland)</option>" +
        "<option>South Beach</option>" +
        "<option>Port Hughes jetty</option>" +
        "<option>Port Hughes harbour</option>" +
        "<option>Port Hughes</option>" +
        "<option>Harry Point</option>" +
        "<option>Sim Cove</option>" +
        "<option>Possiters Point</option>" +
        "<option>Moonta jetty</option>" +
        "<option>Moonta Bay</option>" +
        "<option>Moonta Bay (north)</option>" +
        "<option>Warburto Point (north)</option>" +
        "<option>Bird Island</option>" +
        "<option>Point Hughes (south)</option>" +
        "<option>Point Hughes (north 1)</option>" +
        "<option>Point Hughes (north 2)</option>" +
        "<option>Office Beach</option>" +
        "<option>Wallaroo (boat ramp)</option>" +
        "<option>Wallaroo Bay</option>" +
        "<option>North Beach</option>" +
        "<option>Point Riley (south 2)</option>" +
        "<option>Point Riley (south 1)</option>" +
        "<option>Point Riley</option>" +
        "<option>Point Riley (north 1)</option>" +
        "<option>Point Riley (north 2)</option>" +
        "<option>Point Riley (north 3)</option>" +
        "<option>Point Riley (north 4)</option>" +
        "<option>Point Riley (north 5)</option>" +
        "<option>Point Riley (north 6)</option>" +
        "<option>Myponie Point (north 1)</option>" +
        "<option>Myponie Point (north 2)</option>" +
        "<option>Black Rock (north 1)</option>" +
        "<option>Black Rock (north 2)</option>" +
        "<option>Lochmore</option>" +
        "<option>Tickera Bay</option>" +
        "<option>Tickera Bay (north)</option>" +
        "<option>Webling Point</option>" +
        "<option>Port Broughton (jetty)</option>" +
        "<option>Port Broughton)</option>" +
        "<option>Port Broughton (north)</option>" +
        "<option>Munderoo Bay</option>" +
        "<option>Fisherman Bay</option>" +
        "<option>Fisherman Bay (north)</option>" +
        "<option>Wood Point</option>" +
        "<option>Beach 550</option>" +
        "<option>Jarrod Point</option>" +
        "<option>Weeroona Island</option>" +
        "<option>Telowie Beach</option>" +
        "<option>Port Germein</option>" +
        "<option>Port Germein (north)</option>" +
        "<option>Mount Mambray</option>" +
        "<option>Mount Gullett</option>" +
        "<option>Mount Grainger</option>" +
        "<option>Mount Grainger (north)</option>" +
        "<option>Red Cliff Point</option>" +
        "<option>Point Paterson (south)</option>" +
        "<option>Point Paterson</option>" +
        "<option>Port Paterson</option>" +
        "<option>Port Augusta (east)</option>" +
        "<option>Port Augusta (west 1)</option>" +
        "<option>Port Augusta (west 2)</option>" +
        "<option>Commissariat Point</option>" +
        "<option>Mangrove Point</option>" +
        "<option>Two Hummock Hill</option>" +
        "<option>Monument Hill</option>" +
        "<option>Barbwire Beach</option>" +
        "<option>Black Stump Bay</option>" +
        "<option>Douglas Point (north)</option>" +
        "<option>Tea Tree Bay</option>" +
        "<option>Douglas Point</option>" +
        "<option>One Shack Bay</option>" +
        "<option>Backy Bay</option>" +
        "<option>Fitzgerald Bay (1)</option>" +
        "<option>Fitzgerald Bay (2)</option>" +
        "<option>Fitzgerald Bay (3)</option>" +
        "<option>Fitzgerald Bay (4)</option>" +
        "<option>Fitzgerald Bay (5)</option>" +
        "<option>Lowry Point (east)</option>" +
        "<option>Lowry Beach (1)</option>" +
        "<option>Lowry Beach (2)</option>" +
        "<option>Weeroome Bay (1)</option>" +
        "<option>Weeroome Bay (2)</option>" +
        "<option>Black Point</option>" +
        "<option>False Bay (1)</option>" +
        "<option>False Bay (2)</option>" +
        "<option>False Bay (3)</option>" +
        "<option>False Bay (4)</option>" +
        "<option>False Bay (5)</option>" +
        "<option>Whyalla jetty</option>" +
        "<option>Whyalla boat ramp</option>" +
        "<option>Whyalla</option>" +
        "<option>Beach 597</option>" +
        "<option>Eight Mile Creek</option>" +
        "<option>Murrippi (Free) Beach</option>" +
        "<option>Mount Young</option>" +
        "<option>Mount Young (1)</option>" +
        "<option>Cowleds Landing</option>" +
        "<option>Beach 603</option>" +
        "<option>Murninnie (north)</option>" +
        "<option>Murninnie Beach</option>" +
        "<option>Murninnie (south 1)</option>" +
        "<option>Murninnie (south 2)</option>" +
        "<option>Plank Point (north 3)</option>" +
        "<option>Plank Point (north 2)</option>" +
        "<option>Plank Point (north 1)</option>" +
        "<option>Plank Point</option>" +
        "<option>Plank Point (south)</option>" +
        "<option>Plank Point-Shoalwater Point</option>" +
        "<option>Shoalwater Point</option>" +
        "<option>Beach 615</option>" +
        "<option>Lucky Bay</option>" +
        "<option>Red Cliff</option>" +
        "<option>Victoria Point</option>" +
        "<option>Observation Point</option>" +
        "<option>Windmill Beach</option>" +
        "<option>The Knob</option>" +
        "<option>Port Gibbon (east)</option>" +
        "<option>Port Gibbon</option>" +
        "<option>Point Gibbon (1)</option>" +
        "<option>Point Gibbon (2)</option>" +
        "<option>Point Gibbon (3)</option>" +
        "<option>Mills Beach</option>" +
        "<option>Poverty Bay (north 3)</option>" +
        "<option>Poverty Bay (north 2)</option>" +
        "<option>Poverty Bay (north 1)</option>" +
        "<option>Poverty Bay</option>" +
        "<option>Poverty Bay (south)</option>" +
        "<option>Beach 633</option>" +
        "<option>Beach 634</option>" +
        "<option>Red Banks (north 1)</option>" +
        "<option>Red Banks</option>" +
        "<option>Arno Bay (north 3)</option>" +
        "<option>Arno Bay (north 2)</option>" +
        "<option>Arno Bay (north 1)</option>" +
        "<option>Arno Bay (1)</option>" +
        "<option>Arno Bay (2)</option>" +
        "<option>Cape Driver (north)</option>" +
        "<option>Cape Driver</option>" +
        "<option>Cape Driver (south 1)</option>" +
        "<option>Cape Driver (south 2)</option>" +
        "<option>Cape Driver (south 3)</option>" +
        "<option>Mokami (north 3)</option>" +
        "<option>Mokami (north 2)</option>" +
        "<option>Mokami (north 1)</option>" +
        "<option>Mokami</option>" +
        "<option>Bratten Cairn (north)</option>" +
        "<option>Bratten Cairn (south)</option>" +
        "<option>Dutton Bay (1)</option>" +
        "<option>Dutton Bay (2)</option>" +
        "<option>Dutton River</option>" +
        "<option>Dutton River (south 1)</option>" +
        "<option>Dutton River (south 2)</option>" +
        "<option>Dutton River (south 3)</option>" +
        "<option>Port Neill (north 2)</option>" +
        "<option>Port Neill (north 1)</option>" +
        "<option>Port Neill</option>" +
        "<option>Cape Burr</option>" +
        "<option>Back Beach</option>" +
        "<option>Golf course (1)</option>" +
        "<option>Golf course (2)</option>" +
        "<option>Golf course (3)</option>" +
        "<option>Golf course (4)</option>" +
        "<option>Golf course (5)</option>" +
        "<option>Carrow Well (north)</option>" +
        "<option>Carrow Well</option>" +
        "<option>Carrow Well (south 1)</option>" +
        "<option>Carrow Well (south 2)</option>" +
        "<option>Cape Hardy (north 5)</option>" +
        "<option>Cape Hardy (north 4)</option>" +
        "<option>Cape Hardy (north 3)</option>" +
        "<option>Cape Hardy (north 2)</option>" +
        "<option>Cape Hardy (north 1)</option>" +
        "<option>Cape Hardy (south 1)</option>" +
        "<option>Cape Hardy (south 2)</option>" +
        "<option>Kiandra (1)</option>" +
        "<option>Kiandra (2)</option>" +
        "<option>Kiandra (3)</option>" +
        "<option>Beach 683</option>" +
        "<option>Ponto Creek</option>" +
        "<option>Beach 685</option>" +
        "<option>Sheep Hill (1)</option>" +
        "<option>Sheep Hill (2)</option>" +
        "<option>Sheep Hill (3)</option>" +
        "<option>Rogers Beach</option>" +
        "<option>Lipson Cove (north)</option>" +
        "<option>Lipson Cove</option>" +
        "<option>Lipson Cove (south 1)</option>" +
        "<option>Lipson Cove (south 2)</option>" +
        "<option>Oswald (1)</option>" +
        "<option>Oswald (2)</option>" +
        "<option>Oswald (3)</option>" +
        "<option>Oswald (4)</option>" +
        "<option>Oswald (5)</option>" +
        "<option>Oswald (6)</option>" +
        "<option>Oswald (7)</option>" +
        "<option>Oswald (8)</option>" +
        "<option>Salt Creek</option>" +
        "<option>Tumby Bay</option>" +
        "<option>Tumby Bay inlet</option>" +
        "<option>Tumby Bay (south)</option>" +
        "<option>Tumby Island</option>" +
        "<option>Tumby point (north)</option>" +
        "<option>Tumby point (south)</option>" +
        "<option>Second Creek</option>" +
        "<option>Cape Euler (north)</option>" +
        "<option>Cape Euler</option>" +
        "<option>Trinity Haven</option>" +
        "<option>Trinity Haven (south)</option>" +
        "<option>Red Cliff (north 2)</option>" +
        "<option>Red Cliff (north 1)</option>" +
        "<option>Red Cliff</option>" +
        "<option>Massena Bay</option>" +
        "<option>Massena Bay (south 1)</option>" +
        "<option>Massena Bay (south 2)</option>" +
        "<option>Red Point (north 3)</option>" +
        "<option>Red Point (north 2)</option>" +
        "<option>Red Point (north 1)</option>" +
        "<option>Red Point (south 1)</option>" +
        "<option>Red Point (south 2)</option>" +
        "<option>Point Bolingbroke (north 2)</option>" +
        "<option>Point Bolingbroke (north 1)</option>" +
        "<option>Point Bolingbroke (east)</option>" +
        "<option>Point Bolingbroke (west)</option>" +
        "<option>Point Bolingbroke (north-westI</option>" +
        "<option>Picnic Rocks (south)</option>" +
        "<option>Picnic Rocks (north)</option>" +
        "<option>Peake Bay</option>" +
        "<option>Peake Point (north 2)</option>" +
        "<option>Peake Point (north 1)</option>" +
        "<option>Peake Point (west 1)</option>" +
        "<option>Peake Point (west 2)</option>" +
        "<option>Beach 737</option>" +
        "<option>Louth Bay (north)</option>" +
        "<option>Louth Bay</option>" +
        "<option>Louth Bay (jetty)</option>" +
        "<option>Point Warna (1)</option>" +
        "<option>Point Warna (2)</option>" +
        "<option>Point Warna (3)</option>" +
        "<option>Poonindie</option>" +
        "<option>Tod River</option>" +
        "<option>Point Boston (north 4)</option>" +
        "<option>Point Boston (north 3)</option>" +
        "<option>Point Boston (north 2)</option>" +
        "<option>Point Boston (north 1)</option>" +
        "<option>Point Boston (west 1)</option>" +
        "<option>North Shields</option>" +
        "<option>Beach 750</option>" +
        "<option>Port Linclon (north)</option>" +
        "<option>Town Beach</option>" +
        "<option>Kirton Point</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Kirton Point (caravan park)</option>" +
        "<option>Porter Bay (north)</option>" +
        "<option>Porter Bay (south)</option>" +
        "<option>Billy Lights Point (west)</option>" +
        "<option>Billy Lights Point (south)</option>" +
        "<option>Billy Lights Point (jetty)</option>" +
        "<option>Tulka</option>" +
        "<option>Tulka West</option>" +
        "<option>Tulka (east)</option>" +
        "<option>Horse Point (west 2)</option>" +
        "<option>Horse Point (west 1)</option>" +
        "<option>Horse Point (east 1)</option>" +
        "<option>Horse Point (east 2)</option>" +
        "<option>Horse Point (east 3)</option>" +
        "<option>Woodcutters beach (south 2)</option>" +
        "<option>Woodcutters beach (south 1)</option>" +
        "<option>Woodcutters Beach</option>" +
        "<option>Woodcutters beach (north 1)</option>" +
        "<option>Stamford Beach</option>" +
        "<option>Surfleet Point (west)</option>" +
        "<option>Surfleet Cove</option>" +
        "<option>Spalding Cove</option>" +
        "<option>Spalding Cove (north 1)</option>" +
        "<option>Spalding Cove (north 2)</option>" +
        "<option>Fisherman Point</option>" +
        "<option>Engine Point</option>" +
        "<option>Cape Colbert</option>" +
        "<option>Cape Donnington</option>" +
        "<option>Cape Donnington (south)</option>" +
        "<option>Beach 786</option>" +
        "<option>Beach 787</option>" +
        "<option>Carcase Rock (1)</option>" +
        "<option>Carcase Rock (2)</option>" +
        "<option>Maclean Point (north)</option>" +
        "<option>Maclean Point</option>" +
        "<option>Maclean Point (south)</option>" +
        "<option>Point Haselgrove</option>" +
        "<option>Taylors Landing (north)</option>" +
        "<option>Taylors Landing</option>" +
        "<option>Taylors Landing (south 1)</option>" +
        "<option>Taylors Landing (south 2)</option>" +
        "<option>Shag Cove</option>" +
        "<option>Beach 799</option>" +
        "<option>Becah 800</option>" +
        "<option>Memory Cove (north 2)</option>" +
        "<option>Memory Cove (north 1)</option>" +
        "<option>Memory Cove</option>" +
        "<option>Cape Catastrophe (1)</option>" +
        "<option>Cape Catastrophe (2)</option>" +
        "<option>West Point (1)</option>" +
        "<option>West Point (2)</option>" +
        "<option>Termination Beach</option>" +
        "<option>Jussieu Bay (east)</option>" +
        "<option>Jussieu Bay (west)</option>" +
        "<option>Curta Rocks (1)</option>" +
        "<option>Curta Rocks (2)</option>" +
        "<option>Cape Tournefort</option>" +
        "<option>Wanna (south)</option>" +
        "<option>Wanna (north 1)</option>" +
        "<option>Wanna (north 2)</option>" +
        "<option>Sleaford Bay (1)</option>" +
        "<option>Sleaford Bay (2)</option>" +
        "<option>Sleaford Bay (3)</option>" +
        "<option>Sleaford Bay (4)</option>" +
        "<option>Sleaford Bay (5)</option>" +
        "<option>Sleaford Bay (6)</option>" +
        "<option>Sleaford Bay (7)</option>" +
        "<option>Sleaford Bay (8)</option>" +
        "<option>Sleaford Bay (9)</option>" +
        "<option>Beach 826</option>" +
        "<option>Beach 827</option>" +
        "<option>Beach 828</option>" +
        "<option>Fishery Bay</option>" +
        "<option>Cape Wiles (west 1)</option>" +
        "<option>Cape Wiles (west 2)</option>" +
        "<option>Black Lookout</option>" +
        "<option>Groper Bay</option>" +
        "<option>Cowrie Beach</option>" +
        "<option>Red Banks Beach</option>" +
        "<option>D'Anville Bay</option>" +
        "<option>Shoal Point</option>" +
        "<option>Gunyah Beach</option>" +
        "<option>Point Avoid</option>" +
        "<option>Point Aviod (north 1)</option>" +
        "<option>Point Avoid (north 2)</option>" +
        "<option>Point Avoid (north 3)</option>" +
        "<option>Point Avoid (boat ramp)</option>" +
        "<option>Avoid Bay (east 1)</option>" +
        "<option>Avoid Bay (east)</option>" +
        "<option>Avoid Bay (rocks)</option>" +
        "<option>Avoid Bay (west)</option>" +
        "<option>Black Rocks (east)</option>" +
        "<option>Black Rocks (west 2)</option>" +
        "<option>Black Rocks (west 2)</option>" +
        "<option>Black Rocks (west 3)</option>" +
        "<option>Black Rocks (west 4)</option>" +
        "<option>Black Rocks (west 5)</option>" +
        "<option>Black Rocks (west 6)</option>" +
        "<option>Black Rocks (west 7)</option>" +
        "<option>Sensation Beach (east)</option>" +
        "<option>Sensation Beach</option>" +
        "<option>Misery Bay (point)</option>" +
        "<option>Whidbey Beach (1)</option>" +
        "<option>Whidbey Beach (2)</option>" +
        "<option>Whidbey Beach (3)</option>" +
        "<option>Whidbey Beach (4)</option>" +
        "<option>Whidbey Beach (5)</option>" +
        "<option>Whidbey Beach (6)</option>" +
        "<option>Whidbey Beach (7)</option>" +
        "<option>Whidbey Beach (8)</option>" +
        "<option>Whidbey Beach (9)</option>" +
        "<option>Whidbey Beach (10)</option>" +
        "<option>Whidbey Beach (11)</option>" +
        "<option>Whidbey Beach (12)</option>" +
        "<option>Point Whidbey (east 1)</option>" +
        "<option>Point Whidbey (east 2)</option>" +
        "<option>Point Whidbey (north 1)</option>" +
        "<option>Point Whidbey (north 2)</option>" +
        "<option>Point Whidbey (north 3)</option>" +
        "<option>Boarding House Bay (1)</option>" +
        "<option>Boarding House Bay (2)</option>" +
        "<option>Boarding House Bay (3)</option>" +
        "<option>Boarding House Bay (4)</option>" +
        "<option>Boarding House Bay (5)</option>" +
        "<option>Reef Point (south)</option>" +
        "<option>Reef Point (north 1)</option>" +
        "<option>Reef Point (north 2)</option>" +
        "<option>Reef Point (north 3)</option>" +
        "<option>Reef Point (north 4)</option>" +
        "<option>Reef Point (north 5)</option>" +
        "<option>Reef Point (north 6)</option>" +
        "<option>Mullalong Beach</option>" +
        "<option>Mullalong Beach (north 1)</option>" +
        "<option>Mullalong Beach (north 2)</option>" +
        "<option>Mullalong Beach (north 3)</option>" +
        "<option>Mullalong Beach (north 4)</option>" +
        "<option>Mullalong Beach (north 5)</option>" +
        "<option>Seasick Bay</option>" +
        "<option>Point Sir Issac (south 1)</option>" +
        "<option>Point Sir Issac (south 2)</option>" +
        "<option>Point Burgess (north)</option>" +
        "<option>Point Burgess (south)</option>" +
        "<option>Phantom Cove</option>" +
        "<option>Seven Mile Beach</option>" +
        "<option>Point Longnose (north)</option>" +
        "<option>Point Longnose (south)</option>" +
        "<option>Salt Waterhole</option>" +
        "<option>Port Douglas (3)</option>" +
        "<option>Port Douglas (4)</option>" +
        "<option>Port Douglas (5)</option>" +
        "<option>Port Douglas (6)</option>" +
        "<option>Black Springs (1))</option>" +
        "<option>Black Springs (2)</option>" +
        "<option>Black Springs (3)</option>" +
        "<option>Black Springs (4)</option>" +
        "<option>Port Douglas (11)</option>" +
        "<option>Port Douglas (12)</option>" +
        "<option>Eely Point (north)</option>" +
        "<option>Eely Point (south)</option>" +
        "<option>Port Douglas (15)</option>" +
        "<option>Port Douglas (16)</option>" +
        "<option>Port Douglas (17)</option>" +
        "<option>Port Douglas (18)</option>" +
        "<option>Port Douglas (19)</option>" +
        "<option>Kangie Bay</option>" +
        "<option>Port Douglas (21)</option>" +
        "<option>Port Douglas (22)</option>" +
        "<option>Coffin Bay (1)</option>" +
        "<option>Coffin Bay (2)</option>" +
        "<option>Coffin Bay (3)</option>" +
        "<option>Coffin Bay (4)</option>" +
        "<option>Coffin Bay (5)</option>" +
        "<option>Coffin Bay (6)</option>" +
        "<option>Coffin Bay (7)</option>" +
        "<option>Kooromoonah</option>" +
        "<option>Horse Peninsula (2)</option>" +
        "<option>Horse Peninsula (3)</option>" +
        "<option>Horse Peninsula (4)</option>" +
        "<option>Horse Peninsula (5)</option>" +
        "<option>Horse Peninsula (6)</option>" +
        "<option>Horse Peninsula (7)</option>" +
        "<option>Horse Peninsula (8)</option>" +
        "<option>Horse Peninsula (9)</option>" +
        "<option>Horse Peninsula (10)</option>" +
        "<option>Little Douglas</option>" +
        "<option>Farm Beach (south)</option>" +
        "<option>Farm Beach</option>" +
        "<option>Farm Beach (north)</option>" +
        "<option>Beach 945</option>" +
        "<option>Beach 946</option>" +
        "<option>Gallipoli Beach</option>" +
        "<option>Mena Hill (1)</option>" +
        "<option>Mena Hill (2)</option>" +
        "<option>Mena Hill (3)</option>" +
        "<option>Mena Hill (4)</option>" +
        "<option>Mena Hill (5)</option>" +
        "<option>Frenchman Bluff (south 3)</option>" +
        "<option>Frenchman Bluff (south 2)</option>" +
        "<option>Frenchman Bluff (south 1)</option>" +
        "<option>Frenchman Bluff (north)</option>" +
        "<option>Coles Point (south 4)</option>" +
        "<option>Coles Point (south 3)</option>" +
        "<option>Coles Point (south 2)</option>" +
        "<option>Coles Point (south 1)</option>" +
        "<option>Greenly Beach</option>" +
        "<option>Greenly Beach (north)</option>" +
        "<option>Mount Greenly (1)</option>" +
        "<option>Mount Greenly (2)</option>" +
        "<option>Mount Greenly (3)</option>" +
        "<option>Mount Greenly (4)</option>" +
        "<option>Mount Greenly (5)</option>" +
        "<option>Kapunta (1)</option>" +
        "<option>Kapunta (2)</option>" +
        "<option>Kapunta (3)</option>" +
        "<option>Kapunta (4)</option>" +
        "<option>Kapunta (5)</option>" +
        "<option>Convention Beach (south 3)</option>" +
        "<option>Convention Beach (south 2)</option>" +
        "<option>Convention Beach (south 1)</option>" +
        "<option>Convention Beach</option>" +
        "<option>Convention Beach (north 1)</option>" +
        "<option>Convention Beach (north 2)</option>" +
        "<option>Convention Beach (north 3)</option>" +
        "<option>Convention Beach (north 4)</option>" +
        "<option>Convention Beach (north 5)</option>" +
        "<option>Convention Beach (north 6)</option>" +
        "<option>Convention Beach (north 7)</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Picnic Beach (west 1)</option>" +
        "<option>Picnic Beach (west 2)</option>" +
        "<option>Point Drummond (south 14)</option>" +
        "<option>Point Drummond (south 13)</option>" +
        "<option>Point Drummond (south 12)</option>" +
        "<option>Point Drummond (south 11)</option>" +
        "<option>Point Drummond (south 10)</option>" +
        "<option>Point Drummond (south 9)</option>" +
        "<option>Point Drummond (south 8)</option>" +
        "<option>Point Drummond (south 7)</option>" +
        "<option>Point Drummond (south 6)</option>" +
        "<option>Point Drummond (south 5)</option>" +
        "<option>Point Drummond (south 4)</option>" +
        "<option>Point Drummond (south 3)</option>" +
        "<option>Point Drummond (south 2)</option>" +
        "<option>Point Drummond (south 1)</option>" +
        "<option>Point Drummond</option>" +
        "<option>Point Drummond (north 1)</option>" +
        "<option>Point Drummond (north 2)</option>" +
        "<option>Hill Bay</option>" +
        "<option>Hill Bay (north)</option>" +
        "<option>Kiana Beach</option>" +
        "<option>Kiana Beach (north)</option>" +
        "<option>Sheringa (south 8)</option>" +
        "<option>Sheringa (south 7)</option>" +
        "<option>Sheringa (south 6)</option>" +
        "<option>Sheringa (south 5)</option>" +
        "<option>Sheringa (south 4)</option>" +
        "<option>Sheringa (south 3)</option>" +
        "<option>Sheringa (south 2)</option>" +
        "<option>Sheringa (south 1)</option>" +
        "<option>Sheringa Beach</option>" +
        "<option>Back Sheringa</option>" +
        "<option>Back Sheringa (north 1)</option>" +
        "<option>Back Sheringa (north 2)</option>" +
        "<option>Back Sheringa (north 3)</option>" +
        "<option>Back Sheringa (north 4)</option>" +
        "<option>Back Sheringa (north 5)</option>" +
        "<option>Back Sheringa (north 6)</option>" +
        "<option>Back Sheringa (north 7)</option>" +
        "<option>Back Sheringa (north 8)</option>" +
        "<option>Back Sheringa (north 9)</option>" +
        "<option>Tungketta</option>" +
        "<option>Loch Well (south 4)</option>" +
        "<option>Loch Well (south 3)</option>" +
        "<option>Loch Well (south 2)</option>" +
        "<option>Loch Well (south 1)</option>" +
        "<option>Loch Well Beach</option>" +
        "<option>Loch Well (north 1)</option>" +
        "<option>Loch Well (north 2)</option>" +
        "<option>Loch Well (north 3)</option>" +
        "<option>Loch Well (north 4)</option>" +
        "<option>Back beach</option>" +
        "<option>Boord Beach</option>" +
        "<option>Main Beach</option>" +
        "<option>Jetty beach</option>" +
        "<option>Wellesley beach</option>" +
        "<option>Salmon Point (1)</option>" +
        "<option>Salmon Point (2)</option>" +
        "<option>Cape Finniss (south 3)</option>" +
        "<option>Cape Finniss (south 2)</option>" +
        "<option>Cape Finniss (south 1)</option>" +
        "<option>Cape Finniss</option>" +
        "<option>Cape Finniss (north)</option>" +
        "<option>Walkers Rock (south 3)</option>" +
        "<option>Walkers Rock (south 2)</option>" +
        "<option>Walkers Rock (south 1)</option>" +
        "<option>Walkers Rock</option>" +
        "<option>Walkers Rock (north)</option>" +
        "<option>Anxious Bay</option>" +
        "<option>Talia (north)</option>" +
        "<option>Mount Carmel (south)</option>" +
        "<option>Mount Carmel</option>" +
        "<option>Mount Carmel (north)</option>" +
        "<option>Beach 1059</option>" +
        "<option>Beach 1060</option>" +
        "<option>Beach 1061</option>" +
        "<option>Needle Eye (south 2)</option>" +
        "<option>Needle Eye (south 1)</option>" +
        "<option>Needle Eye (north)</option>" +
        "<option>Venus Bay (back beach 1)</option>" +
        "<option>Venus Bay (back beach 2)</option>" +
        "<option>Venus Bay (back beach 3)</option>" +
        "<option>South Head</option>" +
        "<option>Venus Bay (jetty)</option>" +
        "<option>Cape Weyland (1)</option>" +
        "<option>Cape Weyland (2)</option>" +
        "<option>Cape Weyland (3)</option>" +
        "<option>Cape Weyland (north 1)</option>" +
        "<option>Cape Weyland (north 2)</option>" +
        "<option>Cape Weyland (north 3)</option>" +
        "<option>Horseshore Bay (east)</option>" +
        "<option>Horseshore Bay</option>" +
        "<option>Horseshore Bay (west)</option>" +
        "<option>Tyringa beach (east 4)</option>" +
        "<option>Tyringa beach (east 3)</option>" +
        "<option>Tyringa beach (east 2)</option>" +
        "<option>Tyringa Beach (east 1)</option>" +
        "<option>Tyringa Beach</option>" +
        "<option>Tyringa Beach (west 1)</option>" +
        "<option>Tyringa Beach (west 2)</option>" +
        "<option>Silica Beach</option>" +
        "<option>Baird Bay beach</option>" +
        "<option>Baird Bay (west 1)</option>" +
        "<option>Baird Bay (west 2)</option>" +
        "<option>Baird Bay (west 3)</option>" +
        "<option>Baird Bay (west 4)</option>" +
        "<option>Baird Bay (west 5)</option>" +
        "<option>Point Labatt</option>" +
        "<option>Searcy Bay (1)</option>" +
        "<option>Searcy Bay (2)</option>" +
        "<option>Searcy Bay (3)</option>" +
        "<option>Searcy Bay (4)</option>" +
        "<option>Searcy Bay (5)</option>" +
        "<option>Searcy Bay (6)</option>" +
        "<option>Searcy Bay (7)</option>" +
        "<option>Searcy Bay (8)</option>" +
        "<option>Searcy Bay (9)</option>" +
        "<option>Searcy Bay (10)</option>" +
        "<option>Searcy Bay (11)</option>" +
        "<option>Searcy Bay (12)</option>" +
        "<option>Searcy Bay (13)</option>" +
        "<option>Searcy Bay (14)</option>" +
        "<option>Searcy Bay (15)</option>" +
        "<option>Searcy Bay (16)</option>" +
        "<option>Searcy Bay (17)</option>" +
        "<option>Searcy Bay (18)</option>" +
        "<option>Searcy Bay (19)</option>" +
        "<option>Searcy Bay (20)</option>" +
        "<option>Searcy Bay (21)</option>" +
        "<option>Searcy Bay (22)</option>" +
        "<option>Searcy Bay (23)</option>" +
        "<option>Searcy Bay (24)</option>" +
        "<option>Searcy Bay (25)</option>" +
        "<option>Searcy Bay (26)</option>" +
        "<option>Searcy Bay (27)</option>" +
        "<option>Searcy Bay (28)</option>" +
        "<option>Searcy Bay (29)</option>" +
        "<option>Searcy Bay (30)</option>" +
        "<option>Searcy Bay (31)</option>" +
        "<option>Slade Point (1)</option>" +
        "<option>Slade Point (2)</option>" +
        "<option>Cape Blanche (1)</option>" +
        "<option>Cape Blanche (2)</option>" +
        "<option>Cape Blanche (3)</option>" +
        "<option>Sceale Bay</option>" +
        "<option>Sceale Bay-Yanerbie</option>" +
        "<option>Speed Point</option>" +
        "<option>Speed Point (north 1)</option>" +
        "<option>Speed Point (north 2)</option>" +
        "<option>Speed Point (north 3)</option>" +
        "<option>Speed Point-Smooth Pool</option>" +
        "<option>Smooth Pool (east 2)</option>" +
        "<option>Smooth Pool (east 1)</option>" +
        "<option>Smooth Pool (north)</option>" +
        "<option>Point Westall</option>" +
        "<option>Granite Rock</option>" +
        "<option>The Dreadnoughts (west 1)</option>" +
        "<option>The Dreadnoughts (west 2)</option>" +
        "<option>The Dreadnoughts (west 3)</option>" +
        "<option>High Cliff</option>" +
        "<option>Corvisart Bay (1)</option>" +
        "<option>Corvisart Bay (2)</option>" +
        "<option>Corvisart Bay (3)</option>" +
        "<option>Corvisart Bay (4)</option>" +
        "<option>Corvisart Bay (5)</option>" +
        "<option>Corvisart Bay (6)</option>" +
        "<option>Corvisart Bay (7)</option>" +
        "<option>Corvisart Bay (8)</option>" +
        "<option>Back Beach</option>" +
        "<option>Cape Bauer (1)</option>" +
        "<option>Cape Bauer (2)</option>" +
        "<option>Cape Bauer (3)</option>" +
        "<option>Cape Bauer (4)</option>" +
        "<option>Cape Bauer (5)</option>" +
        "<option>Cape Bauer (6)</option>" +
        "<option>The Spit (1)</option>" +
        "<option>The Spit (2)</option>" +
        "<option>The Spit (3)</option>" +
        "<option>The Spit (4)</option>" +
        "<option>The Spit (5)</option>" +
        "<option>The Spit (6)</option>" +
        "<option>Shag Point (north)</option>" +
        "<option>Shag Point (south)</option>" +
        "<option>Doctors Beach (west)</option>" +
        "<option>Doctors Beach</option>" +
        "<option>Jetty beach</option>" +
        "<option>Jetty beach (east)</option>" +
        "<option>Yacht club beach</option>" +
        "<option>Crawfords Landing (south)</option>" +
        "<option>Crawfords Landing</option>" +
        "<option>Perforated Landing (south 2)</option>" +
        "<option>Perforated Landing (south 1)</option>" +
        "<option>Perforated Landing (north 1)</option>" +
        "<option>Perforated Landing (north 2)</option>" +
        "<option>Perforated Landing (north 3)</option>" +
        "<option>Perlubie (south 3)</option>" +
        "<option>Perlubie (south 2)</option>" +
        "<option>Perlubie (south 1)</option>" +
        "<option>Perlubie Beach</option>" +
        "<option>Perlubie (north)</option>" +
        "<option>Thomas Landing</option>" +
        "<option>Thomas Landing (north 1)</option>" +
        "<option>Thomas Landing (north 2)</option>" +
        "<option>Perlubie Hill</option>" +
        "<option>Aldergrove</option>" +
        "<option>Haslam</option>" +
        "<option>Haslam (north 1)</option>" +
        "<option>Haslam (north 2)</option>" +
        "<option>Haslam (north 3)</option>" +
        "<option>Haslam (north 4)</option>" +
        "<option>Haslam (north 5)</option>" +
        "<option>Flagstaff Landing (east)</option>" +
        "<option>Acraman Ceek (east)</option>" +
        "<option>Acraman Ceek (inlet 1)</option>" +
        "<option>Acraman Ceek (inlet 2)</option>" +
        "<option>Point Lindsay</option>" +
        "<option>Point Lindsay (west)</option>" +
        "<option>Point De Mole (east 3)</option>" +
        "<option>Point De Mole (east 2)</option>" +
        "<option>Point De Mole (east 1)</option>" +
        "<option>Point De Mole</option>" +
        "<option>Point De Mole (west)</option>" +
        "<option>Gascoigne Bay</option>" +
        "<option>Point Collinson (east 5)</option>" +
        "<option>Point Collinson (east 4)</option>" +
        "<option>Point Collinson (east 3)</option>" +
        "<option>Point Collinson (east 2)</option>" +
        "<option>Point Collinson (east 1)</option>" +
        "<option>Point Collinson</option>" +
        "<option>Point Collinson (west 1)</option>" +
        "<option>Point Collinson (west 2)</option>" +
        "<option>Point Collinson (west 1)</option>" +
        "<option>Point Collinson (west 4)</option>" +
        "<option>Edward Bay (east 2)</option>" +
        "<option>Edward Bay (east 1)</option>" +
        "<option>Edward Bay</option>" +
        "<option>St Mary Bay</option>" +
        "<option>St Mary Bay (north)</option>" +
        "<option>Point Dillon (north 1)</option>" +
        "<option>Point Dillon (north 2)</option>" +
        "<option>Point Dillon (north 3)</option>" +
        "<option>Point Dillon (north 4)</option>" +
        "<option>Cape Missiessy (south)</option>" +
        "<option>Cape Missiessy</option>" +
        "<option>Cape Missiessy (east)</option>" +
        "<option>Smoky Bay (south 3)</option>" +
        "<option>Smoky Bay (south 2)</option>" +
        "<option>Smoky Bay (south 1)</option>" +
        "<option>Smoky Bay</option>" +
        "<option>Smoky Bay (north)</option>" +
        "<option>Koppi Tucka (1)</option>" +
        "<option>Koppi Tucka (2)</option>" +
        "<option>Koppi Tucka (3)</option>" +
        "<option>Saddle Peak (south)</option>" +
        "<option>Saddle Peak</option>" +
        "<option>Saddle Peak (north)</option>" +
        "<option>Pines Way (1)</option>" +
        "<option>Pines Way (2)</option>" +
        "<option>Pines Way (3)</option>" +
        "<option>Dog Point (west)</option>" +
        "<option>Sandy Cove</option>" +
        "<option>Laura Bay (south)</option>" +
        "<option>Laura Bay (east)</option>" +
        "<option>Laura Bay</option>" +
        "<option>Laura Bay (west)</option>" +
        "<option>Cape D'Estrees (east 4)</option>" +
        "<option>Cape D'Estrees (east 3)</option>" +
        "<option>Cape D'Estrees (east 2)</option>" +
        "<option>Cape D'Estrees (east 1)</option>" +
        "<option>Cape D'Estrees (west 1)</option>" +
        "<option>Cape D'Estrees (west 2)</option>" +
        "<option>Cape D'Estrees (west 3)</option>" +
        "<option>Decres Bay (west)</option>" +
        "<option>Decres Bay</option>" +
        "<option>Wittelbee Point (west 1)</option>" +
        "<option>Wittelbee Point (west 2)</option>" +
        "<option>Wittelbee Point (west 3)</option>" +
        "<option>Cape Vivonne (east 4)</option>" +
        "<option>Cape Vivonne (east 3)</option>" +
        "<option>Cape Vivonne (east 2)</option>" +
        "<option>Cape Vivonne (east 1)</option>" +
        "<option>Cape Vivonne</option>" +
        "<option>Cape Vivonne (north 1)</option>" +
        "<option>Cape Vivonne (north 2)</option>" +
        "<option>Cape Vivonne (north 3)</option>" +
        "<option>Cape Vivonne (north 4)</option>" +
        "<option>Bosanquet Bay</option>" +
        "<option>Cape Thevenard (east 4)</option>" +
        "<option>Cape Thevenard (east 3)</option>" +
        "<option>Cape Thevenard (east 2)</option>" +
        "<option>Cape Thevenard (east 1)</option>" +
        "<option>Cape Thevenard</option>" +
        "<option>Cape Thevenard (north 1)</option>" +
        "<option>Cape Thevenard (boat ramp)</option>" +
        "<option>Cape Thevenard (north 3)</option>" +
        "<option>Ceduna</option>" +
        "<option>Ceduna (north 1)</option>" +
        "<option>Ceduna (north 2)</option>" +
        "<option>Ceduna (north 3)</option>" +
        "<option>Ceduna (north 4)</option>" +
        "<option>Round Point (1)</option>" +
        "<option>Round Point (2)</option>" +
        "<option>Low Point</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point (west)</option>" +
        "<option>McKenzie Landing</option>" +
        "<option>Denial Bay (west)</option>" +
        "<option>Denial Bay</option>" +
        "<option>Denial Bay (south 1)</option>" +
        "<option>Matts Point (north 2)</option>" +
        "<option>Matts Point (north 1)</option>" +
        "<option>Matts Point (south 1)</option>" +
        "<option>Matts Point (south 2)</option>" +
        "<option>Cape Beaufort</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point (west 1)</option>" +
        "<option>Rocky Point (west 2)</option>" +
        "<option>Rocky Point (west 3)</option>" +
        "<option>Rocky Point (west 4)</option>" +
        "<option>Point Peter (north)</option>" +
        "<option>Point Peter</option>" +
        "<option>Davenport</option>" +
        "<option>Point James (east)</option>" +
        "<option>Point James</option>" +
        "<option>Bielamah</option>" +
        "<option>Bielamah (west 1)</option>" +
        "<option>Bielamah (west 2)</option>" +
        "<option>Bielamah (west 3)</option>" +
        "<option>Bielamah (west 4)</option>" +
        "<option>Rocky Point (east 3)</option>" +
        "<option>Rocky Point (east 2)</option>" +
        "<option>Rocky Point (east 1)</option>" +
        "<option>Rocky Point (west 1)</option>" +
        "<option>Rocky Point (west 2)</option>" +
        "<option>Rocky Point - Point Bell</option>" +
        "<option>Point Bell (west 1)</option>" +
        "<option>Point Bell (west 2)</option>" +
        "<option>Point Bell (west 3)</option>" +
        "<option>Cantaby Sandhills-Shelly</option>" +
        "<option>Port le Hunte</option>" +
        "<option>Cactus</option>" +
        "<option>Castles</option>" +
        "<option>Chadinga Sandhills</option>" +
        "<option>Beach 1329</option>" +
        "<option>Beach 1330</option>" +
        "<option>Beach 1331</option>" +
        "<option>Beach 1332</option>" +
        "<option>Beach 1333</option>" +
        "<option>Beach 1334</option>" +
        "<option>Beach 1335</option>" +
        "<option>Beach 1336</option>" +
        "<option>Eyre Bluff (east 3)</option>" +
        "<option>Eyre Bluff (east 2)</option>" +
        "<option>Eyre Bluff (east 1)</option>" +
        "<option>Eyre Bluff (west 1)</option>" +
        "<option>Eyre Bluff (west 2)</option>" +
        "<option>Eyre Bluff (west 3)</option>" +
        "<option>Clare Bay (east)</option>" +
        "<option>Clare Bay</option>" +
        "<option>Clare Bay (west 1)</option>" +
        "<option>Clare Bay (west 2)</option>" +
        "<option>Clare Bay (west 3)</option>" +
        "<option>Clare Bay (west 4)</option>" +
        "<option>Clare Bay (west 5)</option>" +
        "<option>Clare Bay (west 6)</option>" +
        "<option>Fowlers Bay</option>" +
        "<option>Fowlers Bay spit</option>" +
        "<option>Point Fowler (east 2)</option>" +
        "<option>Point Fowler (east 1)</option>" +
        "<option>Point Fowler (west 1)</option>" +
        "<option>Point Fowler (west 2)</option>" +
        "<option>Scott Bay</option>" +
        "<option>Scott Point (east)</option>" +
        "<option>Scott Point (west 1)</option>" +
        "<option>Scott Point (west 2)</option>" +
        "<option>Mexican Hat</option>" +
        "<option>Mexican Hat (west)</option>" +
        "<option>Cape Nuyts</option>" +
        "<option>Cape Nuyts (west 1)</option>" +
        "<option>Cape Nuyts (west 2)</option>" +
        "<option>Cape Nuyts (west 3)</option>" +
        "<option>Cape Nuyts (west 4)</option>" +
        "<option>Cape Nuyts (west 5)</option>" +
        "<option>Wandilla (east)</option>" +
        "<option>Wandilla Bay</option>" +
        "<option>Wandilla Bay (west 1)</option>" +
        "<option>Wandilla Bay (west 2)</option>" +
        "<option>Cabbots Well</option>" +
        "<option>Cabbots Beach</option>" +
        "<option>Cabbots beach (west 1)</option>" +
        "<option>Cabbots beach (west 2)</option>" +
        "<option>Cheetima Beach</option>" +
        "<option>Cape Adieu</option>" +
        "<option>Cape Adieu (west 1)</option>" +
        "<option>Cape Adieu (west 2)</option>" +
        "<option>Cape Adieu (west 3)</option>" +
        "<option>Cape Adieu (west 4)</option>" +
        "<option>Cape Adieu (west 5)</option>" +
        "<option>Cape Adieu (west 6)</option>" +
        "<option>Beach 1385</option>" +
        "<option>Beach 1386</option>" +
        "<option>Beach 1387</option>" +
        "<option>Beach 1388</option>" +
        "<option>Beach 1389</option>" +
        "<option>Beach 1390</option>" +
        "<option>Beach 1391</option>" +
        "<option>Tchalingaby (east 5)</option>" +
        "<option>Tchalingaby (east 4)</option>" +
        "<option>Tchalingaby (east 3)</option>" +
        "<option>Tchalingaby (east 2)</option>" +
        "<option>Tchalingaby (east 1)</option>" +
        "<option>Tchalingaby</option>" +
        "<option>Chalgonippi dunes</option>" +
        "<option>Chalgonippi dunes (west)</option>" +
        "<option>Wahgunyah Well (east)</option>" +
        "<option>Wahgunyah Well</option>" +
        "<option>Wahgunyah dunes (west 1)</option>" +
        "<option>Wahgunyah dunes (west 2)</option>" +
        "<option>Wahgunyah dunes (west 3)</option>" +
        "<option>Wahgunyah dunes (west 4)</option>" +
        "<option>Coroma Well</option>" +
        "<option>Ocock dunes</option>" +
        "<option>Ocock dunes (west)</option>" +
        "<option>Dog Fence (1)</option>" +
        "<option>Dog Fence (2)</option>" +
        "<option>Dog Fence Beach</option>" +
        "<option>Dog Fence (west)</option>" +
        "<option>Shoulder Hill</option>" +
        "<option>Yalata</option>" +
        "<option>Yalata (west)</option>" +
        "<option>Coymbra (1)</option>" +
        "<option>Coymbra (2)</option>" +
        "<option>Coymbra (3)</option>" +
        "<option>Coymbra (4)</option>" +
        "<option>Coymbra (4)</option>" +
        "<option>Coymbra (6)</option>" +
        "<option>Coymbra (7)</option>" +
        "<option>Coymbra (8)</option>" +
        "<option>Coymbra (9)</option>" +
        "<option>Coymbra (10)</option>" +
        "<option>Coymbra (11-camp)</option>" +
        "<option>Coymbra (12)</option>" +
        "<option>Coymbra (13)</option>" +
        "<option>Coymbra (14)</option>" +
        "<option>Beach 1430</option>" +
        "<option>Beach 1431</option>" +
        "<option>Beach 1432</option>" +
        "<option>Beach 1433</option>" +
        "<option>Beach 1434</option>" +
        "<option>Beach 1435</option>" +
        "<option>Beach 1436</option>" +
        "<option>Beach 1437</option>" +
        "<option>Beach 1438</option>" +
        "<option>Beach 1439</option>" +
        "<option>Yalata dunes</option>" +
        "<option>Twin Rocks</option>" +
        "<option>Beach 1442</option>" +
        "<option>Merdayerrah 1</option>" +
        "<option>Merdayerrah 2</option>" +
        "<option>Merdayerrah 3</option>" +
        "<option>Merdayerrah 4</option>" +
        "<option>Merdayerrah 5</option>" +
        "<option>Merdayerrah 6</option>" +
        "<option>Merdayerrah 7</option>" +
        "<option>Merdayerrah 8</option>" +
        "<option>Merdayerrah 9</option>" +
        "<option>Merdayerrah 10</option>" +
        "<option>Merdayerrah 11</option>" +
        "<option>Merdayerrah Sandpatch</option>" +
        "<option>Squeaky Beach</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Hayden Point</option>" +
        "<option>Cemetery</option>" +
        "<option>McLachlan Point (east)</option>" +
        "<option>McLachlan Point (south)</option>" +
        "<option>Point Watson (north)</option>" +
        "<option>Point Watson</option>" +
        "<option>Goose Hill</option>" +
        "<option>west beach</option>" +
        "<option>north beach 1</option>" +
        "<option>north beach 2</option>" +
        "<option>north beach 3</option>" +
        "<option>McLachlan Point (west 2)</option>" +
        "<option>McLachlan Point (west 1)</option>" +
        "<option>Eyre Island (south)</option>" +
        "<option>Eyre Island (north 1)</option>" +
        "<option>Eyre Island (north 2)</option>" +
        "<option>Eyre Island (north 3)</option>" +
        "<option>Eyre Island (north 4)</option>" +
        "<option>Point Malcolm (south 1)</option>" +
        "<option>Point Malcolm (south 2)</option>" +
        "<option>Point Malcolm (south 3)</option>" +
        "<option>Point Malcolm (south 4)</option>" +
        "<option>Bobs Nose (east)</option>" +
        "<option>Bobs Nose (west)</option>" +
        "<option>settlement (north)</option>" +
        "<option>settlement</option>" +
        "<option>Flinders Island 9</option>" +
        "<option>Flinders Island 10</option>" +
        "<option>Flinders Island 11</option>" +
        "<option>Flinders Island 12</option>" +
        "<option>Flinders Island 13</option>" +
        "<option>Flinders Island 14</option>" +
        "<option>Flinders Island 15</option>" +
        "<option>Flinders Island 16</option>" +
        "<option>Flinders Island 17</option>" +
        "<option>Flinders Island 18</option>" +
        "<option>Flinders Island 19</option>" +
        "<option>Flinders Island 20</option>" +
        "<option>Flinders Island 21</option>" +
        "<option>Flinders Bay (west)</option>" +
        "<option>Flinders Bay (east)</option>" +
        "<option>Cape Rouge</option>" +
        "<option>Bay of Shoals (north)</option>" +
        "<option>Bay of Shoals (south)</option>" +
        "<option>The Bluff</option>" +
        "<option>Beatrice Point (west)</option>" +
        "<option>Beatrice Point (south)</option>" +
        "<option>Kingscote Jetty (north)</option>" +
        "<option>Kingscote Jetty (south)</option>" +
        "<option>Kingscote pool</option>" +
        "<option>Rolls Point</option>" +
        "<option>Yacht Club</option>" +
        "<option>Yacht Club (south)</option>" +
        "<option>Brownlow</option>" +
        "<option>Cygnet River delta</option>" +
        "<option>Nepean Bay</option>" +
        "<option>Morrison Beach</option>" +
        "<option>Red Banks (1)</option>" +
        "<option>Red Banks (2)</option>" +
        "<option>Red Banks (3)</option>" +
        "<option>Red Banks (4)</option>" +
        "<option>Red Banks (5)</option>" +
        "<option>Red Banks (6)</option>" +
        "<option>Beach KI-23</option>" +
        "<option>Point Morrsion (west)</option>" +
        "<option>Point Morrsion (south 1)</option>" +
        "<option>Point Morrsion (south 2)</option>" +
        "<option>Norma Cove</option>" +
        "<option>Newland Bay</option>" +
        "<option>American River (north)</option>" +
        "<option>American River</option>" +
        "<option>Buicks Point (north)</option>" +
        "<option>Buicks Point (south 1)</option>" +
        "<option>Buicks Point (south 2)</option>" +
        "<option>Strawbridge Point</option>" +
        "<option>Island Beach</option>" +
        "<option>Rocky Point</option>" +
        "<option>Brown Beach</option>" +
        "<option>Brown Beach (north)</option>" +
        "<option>American Beach (1)</option>" +
        "<option>American Beach (2)</option>" +
        "<option>American Beach (3)</option>" +
        "<option>American Beach (4)</option>" +
        "<option>American Beach (5)</option>" +
        "<option>Congony Beach</option>" +
        "<option>Kangaroo Head</option>" +
        "<option>Christmas Cove</option>" +
        "<option>Hog Bay</option>" +
        "<option>Beach KI-48</option>" +
        "<option>Alex Lookout (south)</option>" +
        "<option>Cuttle Fish Bay</option>" +
        "<option>Snapper Point (west)</option>" +
        "<option>Cape Coutts (south 1)</option>" +
        "<option>Cape Coutts (south 2)</option>" +
        "<option>Antechamber Bay</option>" +
        "<option>Red House Bay</option>" +
        "<option>Pink Bay</option>" +
        "<option>Cape Willoughby</option>" +
        "<option>Windmill Bay</option>" +
        "<option>Cape Hart (1)</option>" +
        "<option>Cape Hart (2)</option>" +
        "<option>Cape Hart (3)</option>" +
        "<option>False Cape</option>" +
        "<option>False Cape beach</option>" +
        "<option>Black Head</option>" +
        "<option>Murray Flat Beach</option>" +
        "<option>Beach KI-66</option>" +
        "<option>Sandhurst</option>" +
        "<option>Beach KI-68</option>" +
        "<option>Pennington Bay (1)</option>" +
        "<option>Pennington Bay (2)</option>" +
        "<option>Pennington Bay (3)</option>" +
        "<option>Pennington Bay (4)</option>" +
        "<option>Flour Cask Bay</option>" +
        "<option>D'Estrees Bay</option>" +
        "<option>Osmanli Reef</option>" +
        "<option>Point Tinline (1)</option>" +
        "<option>Point Tinline (2)</option>" +
        "<option>Point Tinline (3)</option>" +
        "<option>Point Tinline (4)</option>" +
        "<option>Cape Linois (north)</option>" +
        "<option>Cape Linois (south)</option>" +
        "<option>Cape Gantheaume (1)</option>" +
        "<option>Cape Gantheaume (2)</option>" +
        "<option>Cape Gantheaume (west 1)</option>" +
        "<option>Cape Gantheaume (west 2)</option>" +
        "<option>Cape Gantheaume (west 3)</option>" +
        "<option>Cape Gantheaume (west 4)</option>" +
        "<option>Cape Gantheaume (west 5)</option>" +
        "<option>Cape Gantheaume (west 6)</option>" +
        "<option>Cape Gantheaume (west 7)</option>" +
        "<option>Cape Gantheaume (west 8)</option>" +
        "<option>Cape Gantheaume (west 9)</option>" +
        "<option>Bales Beach (1)</option>" +
        "<option>Bales Beach (2)</option>" +
        "<option>Bales Beach (3)</option>" +
        "<option>Bales Beach-Seal Bay (1)</option>" +
        "<option>Bales Beach-Seal Bay (2)</option>" +
        "<option>Bales Beach-Seal Bay (3)</option>" +
        "<option>Bales Beach-Seal Bay (4)</option>" +
        "<option>Bales Beach-Seal Bay (5)</option>" +
        "<option>Seal Bay</option>" +
        "<option>Sea Bay (west)</option>" +
        "<option>Seal-Vivonne bays (1)</option>" +
        "<option>Seal-Vivonne bays (2)</option>" +
        "<option>Seal-Vivonne bays (3)</option>" +
        "<option>Seal-Vivonne bays (4)</option>" +
        "<option>Seal-Vivonne bays (5)</option>" +
        "<option>Seal-Vivonne bays (6)</option>" +
        "<option>Vivonne Bay (east 2)</option>" +
        "<option>Vivonne Bay (east 1)</option>" +
        "<option>Vivonne Bay</option>" +
        "<option>Vivonne Bay jetty</option>" +
        "<option>Point Ellen (west 1)</option>" +
        "<option>Point Ellen (west 2)</option>" +
        "<option>Point Ellen (west 3)</option>" +
        "<option>Point Ellen (west 4)</option>" +
        "<option>Cape Kersaint (west 1)</option>" +
        "<option>Cape Kersaint (west 2)</option>" +
        "<option>Cape Kersaint (west 3)</option>" +
        "<option>Stun'sail Boom</option>" +
        "<option>Beach 121</option>" +
        "<option>Hanson Bay (east 3)</option>" +
        "<option>Hanson Bay (east 2)</option>" +
        "<option>Hanson Bay (east 1)</option>" +
        "<option>Hanson Bay</option>" +
        "<option>Hanson Bay (west 1)</option>" +
        "<option>Hanson Bay (west 2)</option>" +
        "<option>Hanson Bay (west 3)</option>" +
        "<option>Sanderson Bay (1)</option>" +
        "<option>Sanderson Bay (2)</option>" +
        "<option>Sanderson Bay (3)</option>" +
        "<option>Weirs Cove (1)</option>" +
        "<option>Weirs Cove (2)</option>" +
        "<option>Weirs Cove (3)</option>" +
        "<option>Cape Du Couedic</option>" +
        "<option>Maupertuis Bay (1)</option>" +
        "<option>Maupertuis Bay (2)</option>" +
        "<option>Maupertuis Bay (3)</option>" +
        "<option>Maupertuis Bay (4)</option>" +
        "<option>Rocky River</option>" +
        "<option>Sandy Beach</option>" +
        "<option>Knapmans Creek</option>" +
        "<option>Breakneck River</option>" +
        "<option>West Bay</option>" +
        "<option>Ravine des Casoars</option>" +
        "<option>Scott Cove</option>" +
        "<option>Harveys Return</option>" +
        "<option>Cape Torrens (west)</option>" +
        "<option>Cape Torrens (east)</option>" +
        "<option>Cape Forbin (west)</option>" +
        "<option>Kangaroo Gully (west)</option>" +
        "<option>Kangaroo Gully</option>" +
        "<option>Snug Cove (west)</option>" +
        "<option>Snug Cove</option>" +
        "<option>Seal Beach (west)</option>" +
        "<option>Seal Beach (east)</option>" +
        "<option>Waterfall Creek</option>" +
        "<option>Goat Hill Creek (1)</option>" +
        "<option>Goat Hill Creek (2)</option>" +
        "<option>Castle Gully (west)</option>" +
        "<option>Castle Gully (east)</option>" +
        "<option>Valley Creek</option>" +
        "<option>Western River Cove</option>" +
        "<option>Western River Cove (east)</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>Snellings Beach</option>" +
        "<option>KI-167</option>" +
        "<option>KI-168</option>" +
        "<option>KI-169</option>" +
        "<option>KI-170</option>" +
        "<option>King George Beach (1)</option>" +
        "<option>King George Beach (2)</option>" +
        "<option>King George Beach (3)</option>" +
        "<option>King George Beach (4)</option>" +
        "<option>King George Beach (5)</option>" +
        "<option>King George Beach (6)</option>" +
        "<option>Dutton Park</option>" +
        "<option>Cape Dutton (west)</option>" +
        "<option>Sandy Creek</option>" +
        "<option>Springy Creek</option>" +
        "<option>Springy Creek (east)</option>" +
        "<option>Beach KI-182</option>" +
        "<option>Stokes Bay (1)</option>" +
        "<option>Stokes Bay (2)</option>" +
        "<option>Stokes Bay (3)</option>" +
        "<option>Beach 186</option>" +
        "<option>Beach 187</option>" +
        "<option>Hummocky Gorge (1)</option>" +
        "<option>Hummocky Gorge (2)</option>" +
        "<option>Cape Cassini (west 6)</option>" +
        "<option>Cape Cassini (west 5)</option>" +
        "<option>Cape Cassini (west 4)</option>" +
        "<option>Cape Cassini (west 3)</option>" +
        "<option>Cape Cassini (west 2)</option>" +
        "<option>Cape Cassini (west 1)</option>" +
        "<option>Cape Cassini</option>" +
        "<option>Cape Cassini (east 1)</option>" +
        "<option>Dashwood Bay</option>" +
        "<option>Dashwood Bay (east 1)</option>" +
        "<option>Dashwood Bay (east 2)</option>" +
        "<option>Dashwood Bay (east 3)</option>" +
        "<option>Smith Bay (west)</option>" +
        "<option>Smith Bay (marina)</option>" +
        "<option>Smith Bay (east)</option>" +
        "<option>Emu Bay (west 3)</option>" +
        "<option>Emu Bay (west 2)</option>" +
        "<option>Emu Bay (west 1)</option>" +
        "<option>Emu Bay</option>" +
        "<option>Emu Bay (east 1)</option>" +
        "<option>Emu Bay (east 2)</option>" +
        "<option>Emu Bay (east 3)</option>" +
        "<option>Emu Bay (east 4)</option>" +
        "<option>White Point (west)</option>" +
        "<option>Boxing Bay (1)</option>" +
        "<option>Boxing Bay (2)</option>" +
        "<option>North Cape (1)</option>" +
        "<option>North Cape (2)</option>" +
        "<option>Point Marsden (west)</option>" +
        "<option>Shell Beach</option>" +
        "<option>McLeod landing</option>" +
        "<option>Carl Cove</option>" +
        "<option>Barry Landing</option>" +
        "<option>Homestead Bay</option>" +
        "<option>The Spit (west)</option>" +
        "<option>St Peter spit (south 1)</option>" +
        "<option>St Peter spit (south 2)</option>" +
        "<option>Mt Younghusband (south)</option>" +
        "<option>St Peter Island 4</option>" +
        "<option>St Peter Island 5</option>" +
        "<option>St Peter Island 6</option>" +
        "<option>Hawks Nest (east)</option>" +
        "<option>Hawks Nest</option>" +
        "<option>Hawks Nest (west)</option>" +
        "<option>St Peter Island 10</option>" +
        "<option>St Peter Island 11</option>" +
        "<option>St Peter Island 12</option>" +
        "<option>St Peter Island 13</option>" +
        "<option>St Peter Island 14</option>" +
        "<option>St Peter Island 15</option>" +
        "<option>Bob Bay</option>" +
        "<option>Bob Bay (north)</option>" +
        "<option>Mt Younghusband (north)</option>" +
        "<option>St Peter spit (north)</option>" +
        "<option>Observatory Point (east)</option>" +
        "<option>Crawford Beach (north)</option>" +
        "<option>Crawford Beach (south)</option>" +
        "<option>Nautilus Beach</option>" +
        "<option>Trevally Point</option>" +
        "<option>Whalers Bay</option>" +
        "<option>Marble Bay</option>" +
        "<option>Hecla Cove (north)</option>" +
        "<option>Hecla Cove (south)</option>" +
        "<option>Osprey Point (north 2)</option>" +
        "<option>Osprey Point (north 1)</option>" +
        "<option>Loot Bay</option>" +
        "<option>Waterhouse Bay (north)</option>" +
        "<option>Waterhouse Bay</option>" +
        "<option>Waterhouse Bay (south)</option>" +
        "<option>Waterhouse Point (west 1)</option>" +
        "<option>Waterhouse Point (west 2)</option>" +
        "<option>Pinnacle Rock</option>" +
        "<option>Beach T-19</option>" +
        "<option>False Creek</option>" +
        "<option>False Creek (north 1)</option>" +
        "<option>False Creek (north 2)</option>" +
        "<option>Mitlers Cove</option>" +
        "<option>Snug Cove (west)</option>" +
        "<option>Snug Cove</option>" +
        "<option>Cape Portland (E 1)</option>" +
        "<option>Cape Portland (E 2)</option>" +
        "<option>Tebrakunna Bay (1)</option>" +
        "<option>Tebrakunna Bay (2)</option>" +
        "<option>Tebrakunna Bay (3)</option>" +
        "<option>Lonoma Point</option>" +
        "<option>Lonoma Point (E 1)</option>" +
        "<option>Lonoma Point (E 2)</option>" +
        "<option>Lonoma Point (E 3)</option>" +
        "<option>Lonoma Point (E 4)</option>" +
        "<option>Lonoma Point (E 5)</option>" +
        "<option>Lonoma Point (E 6)</option>" +
        "<option>Lonoma Point (E 7)</option>" +
        "<option>Little Musselroe Bay (W 3)</option>" +
        "<option>Little Musselroe Bay (W 2)</option>" +
        "<option>Little Musselroe Bay (W 1)</option>" +
        "<option>Little Musselroe Bay</option>" +
        "<option>Tree Point (S 1)</option>" +
        "<option>Tree Point (S 2)</option>" +
        "<option>Tree Point (S 3)</option>" +
        "<option>Great Musselroe Bay</option>" +
        "<option>Musselroe Point (W)</option>" +
        "<option>Musselroe Point (E)</option>" +
        "<option>Musselroe Point (S 1)</option>" +
        "<option>Musselroe Point (S 2)</option>" +
        "<option>Cape Naturaliste (W)</option>" +
        "<option>Stumpys Bay</option>" +
        "<option>Stumpys Rock</option>" +
        "<option>Boulder Point (W 2)</option>" +
        "<option>Boulder Point (W 1)</option>" +
        "<option>Boulder Point</option>" +
        "<option>Tennis Ball Rock (N)</option>" +
        "<option>Tennis Ball Rock (S)</option>" +
        "<option>Coblers Rock</option>" +
        "<option>Cvray Creek</option>" +
        "<option>Cod Bay</option>" +
        "<option>Rock Creel</option>" +
        "<option>Bens Creek</option>" +
        "<option>Bens Creek (S)</option>" +
        "<option>Purdon Bay (N)</option>" +
        "<option>Purdon Bay (S)</option>" +
        "<option>Deep Creek</option>" +
        "<option>Picnic Rocks</option>" +
        "<option>Picnic Rocks (S)</option>" +
        "<option>Picnic Point (N)</option>" +
        "<option>Picnic Point</option>" +
        "<option>Picnic Corner</option>" +
        "<option>Larc Beach (W)</option>" +
        "<option>Larc Beach (E)</option>" +
        "<option>Eddystone Point</option>" +
        "<option>Bay of Fires</option>" +
        "<option>Red Rocks</option>" +
        "<option>Red Rocks (S)</option>" +
        "<option>Bayley Rock (N)</option>" +
        "<option>Bayley Hummock (1)</option>" +
        "<option>Bayley Hummock (2)</option>" +
        "<option>Abbotsbury Beach</option>" +
        "<option>Policemans Point</option>" +
        "<option>Policemans Point (S)</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>Jacks Lookout</option>" +
        "<option>Breake Yorke Beach (N)</option>" +
        "<option>Breake Yorke Beach</option>" +
        "<option>Breake Yorke Beach (S)</option>" +
        "<option>Breake Yorke Creek</option>" +
        "<option>Breake Yorke Creek (S 1)</option>" +
        "<option>Breake Yorke Creek (S 2)</option>" +
        "<option>Breake Yorke Creek (S 3)</option>" +
        "<option>Garden Lagoon Beach</option>" +
        "<option>Garden Lagoon Beach (S 1)</option>" +
        "<option>Garden Lagoon Beach (S 2)</option>" +
        "<option>Mateys Gulch</option>" +
        "<option>Coffeys Gulch</option>" +
        "<option>The Gardens</option>" +
        "<option>Suicide Point</option>" +
        "<option>Suicide Point (S)</option>" +
        "<option>Honeymoon Point</option>" +
        "<option>Margreys Corner</option>" +
        "<option>Taylors Beach (N)</option>" +
        "<option>Taylors Beach</option>" +
        "<option>Sloop Lagoon</option>" +
        "<option>Seaton Cove</option>" +
        "<option>Cosy Corner</option>" +
        "<option>Cosy Corner (S)</option>" +
        "<option>Old Man Rocks</option>" +
        "<option>Swimcart (N)</option>" +
        "<option>Swimcart Beach</option>" +
        "<option>Jeanneret Beach</option>" +
        "<option>Bindalong Bay</option>" +
        "<option>Boat Harbour Point</option>" +
        "<option>Skeleton Bay</option>" +
        "<option>Dora Point (N)</option>" +
        "<option>Dora Point</option>" +
        "<option>Blanche Point</option>" +
        "<option>Blanche Point (E 1)</option>" +
        "<option>Blanche Point (E 2)</option>" +
        "<option>Burns Bay (W 3)</option>" +
        "<option>Burns Bay (W 2)</option>" +
        "<option>Burns Bay (W 1)</option>" +
        "<option>Burns Bay</option>" +
        "<option>Beerbarrel (N)</option>" +
        "<option>Beerbarrel Beach</option>" +
        "<option>Maurouard Beach</option>" +
        "<option>Onion Creek (N)</option>" +
        "<option>Onion Creek</option>" +
        "<option>Onion Creek (S 1)</option>" +
        "<option>Onion Creek (S 2)</option>" +
        "<option>Onion Creek (S 3)</option>" +
        "<option>Dianas (N)</option>" +
        "<option>Dianas Beach</option>" +
        "<option>Beaumaris Beach</option>" +
        "<option>Beaumaris (S)</option>" +
        "<option>Shelly Point</option>" +
        "<option>Wrinklers Beach</option>" +
        "<option>Steels Beach</option>" +
        "<option>Falmouth (S 1)</option>" +
        "<option>Falmouth (S 2)</option>" +
        "<option>Falmouth (S 3)</option>" +
        "<option>Mariposa Point</option>" +
        "<option>Mariposa Beach</option>" +
        "<option>Mariposa (S)</option>" +
        "<option>Four Mile Creek Beach</option>" +
        "<option>Burial Point</option>" +
        "<option>McIntyres Beach</option>" +
        "<option>Ironhouse Point</option>" +
        "<option>Little Beach</option>" +
        "<option>Hughes Point (S)</option>" +
        "<option>Hughes Creek (N)</option>" +
        "<option>Hughes Creek (S)</option>" +
        "<option>Lagoons Beach (N)</option>" +
        "<option>Lagoons Beach (S)</option>" +
        "<option>Piccaninny Point</option>" +
        "<option>Templestowe Beach</option>" +
        "<option>Balck Dog Reef</option>" +
        "<option>Long Point</option>" +
        "<option>Seymour Beach</option>" +
        "<option>The Porches</option>" +
        "<option>Denison Beach (N)</option>" +
        "<option>Denison Beach</option>" +
        "<option>Denison Beach (S)</option>" +
        "<option>Denison Beach (S 1)</option>" +
        "<option>Diamond</option>" +
        "<option>Redbill Beach</option>" +
        "<option>Waubs Bay</option>" +
        "<option>Bicheno</option>" +
        "<option>Rice Beach</option>" +
        "<option>Muir Rock</option>" +
        "<option>Courland Bay</option>" +
        "<option>Courland Bay (S 1)</option>" +
        "<option>Courland Bay (S 2)</option>" +
        "<option>Butler Point (N)</option>" +
        "<option>Friendly Beach</option>" +
        "<option>Isaacs Point (N)</option>" +
        "<option>Isaacs Point (S)</option>" +
        "<option>The Friendly Beaches (1)</option>" +
        "<option>The Friendly Beaches (2)</option>" +
        "<option>The Friendly Beaches (3)</option>" +
        "<option>Freshwater Lagoon</option>" +
        "<option>Bluestone Bay</option>" +
        "<option>Wineglass Bay</option>" +
        "<option>Passage Beach</option>" +
        "<option>Bryans Beach</option>" +
        "<option>Weatherhead Pt (E)</option>" +
        "<option>Cooks Corner (1)</option>" +
        "<option>Cooks Corner (2)</option>" +
        "<option>Cooks Beach</option>" +
        "<option>Promise Bay (S 1)</option>" +
        "<option>Promise Bay (S 2)</option>" +
        "<option>Promise Bay (S 3)</option>" +
        "<option>Hazards Beach</option>" +
        "<option>Hazards (N)</option>" +
        "<option>Lemna</option>" +
        "<option>Fisheries</option>" +
        "<option>Parsons Cove</option>" +
        "<option>Parsons Cove (jetty)</option>" +
        "<option>Honeymoon Bay (1)</option>" +
        "<option>Honeymoon Bay (2)</option>" +
        "<option>Honeymoon Bay (3)</option>" +
        "<option>Honeymoon Bay (3)</option>" +
        "<option>Richardsons Beach</option>" +
        "<option>Richardsons Beach (N)</option>" +
        "<option>Coles Bay (boat ramp)</option>" +
        "<option>Coles Bay (slipway)</option>" +
        "<option>Coles Bay (W)</option>" +
        "<option>Muirs Beach</option>" +
        "<option>Muirs (W 1)</option>" +
        "<option>Muirs (W 2)</option>" +
        "<option>Muirs (W 3)</option>" +
        "<option>Hepburn Point (E)</option>" +
        "<option>Hepburn Point (N)</option>" +
        "<option>Swanwick</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Meredith River mouth</option>" +
        "<option>Swansea caravan park</option>" +
        "<option>Jubliee Beach</option>" +
        "<option>Waterloo Beach</option>" +
        "<option>Schouten House Beach</option>" +
        "<option>Swansea boat ramp</option>" +
        "<option>Kennedia Beach</option>" +
        "<option>Maysons Bluff (S)</option>" +
        "<option>Coswell Beach</option>" +
        "<option>Piedmont Beach</option>" +
        "<option>Cowrie Beach</option>" +
        "<option>Webber Point (N)</option>" +
        "<option>Cressy Beach</option>" +
        "<option>Spiky Beach</option>" +
        "<option>Spikey Beach (S)</option>" +
        "<option>Dwarf Point</option>" +
        "<option>Kelvedon Beach</option>" +
        "<option>Shelly Point (S 1)</option>" +
        "<option>Shelly Point (S 2)</option>" +
        "<option>Rope Gully (N)</option>" +
        "<option>Rope Gully</option>" +
        "<option>Freemans Beach</option>" +
        "<option>Tirzah Beach</option>" +
        "<option>De Gillern Beach</option>" +
        "<option>Mayfield Bay (N 2)</option>" +
        "<option>Mayfield Bay (N 1)</option>" +
        "<option>Brickfield Beach</option>" +
        "<option>Mayfield Beach</option>" +
        "<option>Mayfield Point</option>" +
        "<option>Front Beach</option>" +
        "<option>Buxton River mouth</option>" +
        "<option>Penquite Point (S)</option>" +
        "<option>Boags Point (N 2)</option>" +
        "<option>Boags Point (N 1)</option>" +
        "<option>Lisdillon Beach</option>" +
        "<option>Mitchells Reef (S 1)</option>" +
        "<option>Mitchells Reef (S 2)</option>" +
        "<option>Saltworks (N 2)</option>" +
        "<option>Saltworks (N 1)</option>" +
        "<option>Saltworks Beach</option>" +
        "<option>Limekiln Point</option>" +
        "<option>Seaford Point</option>" +
        "<option>Drakeys Bay (N)</option>" +
        "<option>Drakeys Bay</option>" +
        "<option>Drakeys Bay (S)</option>" +
        "<option>Maddons Cove</option>" +
        "<option>Point Bailly (S)</option>" +
        "<option>Square Bay</option>" +
        "<option>Banwell Beach</option>" +
        "<option>Beckles Hill (1)</option>" +
        "<option>Beckles Hill (2)</option>" +
        "<option>Beckles Hill (3)</option>" +
        "<option>Boultons Beach</option>" +
        "<option>Rough Hill (N)</option>" +
        "<option>Low Bay</option>" +
        "<option>Grindstone Bay (N)</option>" +
        "<option>Grindstone Beach</option>" +
        "<option>Middle Bluff (S 1)</option>" +
        "<option>Middle Bluff (S 2)</option>" +
        "<option>Middle Bluff (S 3)</option>" +
        "<option>Plain Place Beach</option>" +
        "<option>Plain Place (S 1)</option>" +
        "<option>Plain Place (S 2)</option>" +
        "<option>Okehampton Beach</option>" +
        "<option>Reids Beach</option>" +
        "<option>Windlass Bay</option>" +
        "<option>Freestone Cove</option>" +
        "<option>Paddys Point</option>" +
        "<option>Alginote Bay</option>" +
        "<option>Raspins Beach</option>" +
        "<option>Orford Beach</option>" +
        "<option>Orford Beach (S)</option>" +
        "<option>Orford Beach (E)</option>" +
        "<option>Shelly Beach (1)</option>" +
        "<option>Shelly Beach (2)</option>" +
        "<option>Spring Beach</option>" +
        "<option>Stapleton Beach</option>" +
        "<option>South East Corner</option>" +
        "<option>Stapleton Point (S)</option>" +
        "<option>Emerald Bay</option>" +
        "<option>Carrickfrgus Bay (N)</option>" +
        "<option>Carrickfrgus Bay (1)</option>" +
        "<option>Carrickfrgus Bay (2)</option>" +
        "<option>Rheban Beach</option>" +
        "<option>Sandspit Point</option>" +
        "<option>Rheban (S)</option>" +
        "<option>Point des Galett (N)</option>" +
        "<option>Point des Galett (S)</option>" +
        "<option>Boot Bay (N)</option>" +
        "<option>Boot Bay</option>" +
        "<option>Cockle Bay</option>" +
        "<option>Cockle Bay (S)</option>" +
        "<option>Blowhole Point (E 2)</option>" +
        "<option>Blowhole Point (E 1)</option>" +
        "<option>Bluff Beach</option>" +
        "<option>Pine Creek Beach</option>" +
        "<option>Point du Ressac (S)</option>" +
        "<option>Point du Ressac (S 1)</option>" +
        "<option>Point du Ressac (S 2)</option>" +
        "<option>Eagle Beach</option>" +
        "<option>Eagle Beach (S 1)</option>" +
        "<option>Eagle Beach (S 2)</option>" +
        "<option>Marion Beach</option>" +
        "<option>Gardiners Cove</option>" +
        "<option>Watsons Bay</option>" +
        "<option>Tasman Bay</option>" +
        "<option>Two Mile Beach</option>" +
        "<option>Lagoon Bay</option>" +
        "<option>Lagoon Bay (S)</option>" +
        "<option>Hyatts Beach</option>" +
        "<option>Goat Hull Creek</option>" +
        "<option>Lufra Cove</option>" +
        "<option>Eaglehawk Neck</option>" +
        "<option>Quarry beach</option>" +
        "<option>Egg Beach</option>" +
        "<option>Doo Beach</option>" +
        "<option>Fortescue Bay</option>" +
        "<option>Surveyors Cove</option>" +
        "<option>Denmans Cove</option>" +
        "<option>Stinking Cove</option>" +
        "<option>Stewarts Bay</option>" +
        "<option>Ladies Bay</option>" +
        "<option>Big Possum Beach</option>" +
        "<option>Little Possum Beach</option>" +
        "<option>Briar Paddock Beach</option>" +
        "<option>Puer Road</option>" +
        "<option>Old Station Beach</option>" +
        "<option>Point Puer Beach</option>" +
        "<option>Safety Cove</option>" +
        "<option>Crescent Bay</option>" +
        "<option>Basket Bay</option>" +
        "<option>Tunnel Bay</option>" +
        "<option>Slaters Bay</option>" +
        "<option>Rush Lagoon</option>" +
        "<option>Quoin Channel</option>" +
        "<option>Wades Corner</option>" +
        "<option>White Beach</option>" +
        "<option>White Beach (N)</option>" +
        "<option>Parsons Bay (S)</option>" +
        "<option>Nubeena</option>" +
        "<option>Nubeena (N)</option>" +
        "<option>Creeses Mistake</option>" +
        "<option>Roaring Beach</option>" +
        "<option>Black Jack Bight</option>" +
        "<option>Black Jack Point (W)</option>" +
        "<option>Black Jack Point (E 1)</option>" +
        "<option>Black Jack Point (E 2)</option>" +
        "<option>Sloping Main</option>" +
        "<option>Lobster Point (S 2)</option>" +
        "<option>Lobster Point (S 1)</option>" +
        "<option>Lagoon Beach</option>" +
        "<option>Lagoon Beach (N 1)</option>" +
        "<option>Lagoon Beach (N 2)</option>" +
        "<option>Green Head (W 3)</option>" +
        "<option>Green Head (W 2)</option>" +
        "<option>Green Head (W 1)</option>" +
        "<option>Lime Bay (W)</option>" +
        "<option>Lime Bay (E)</option>" +
        "<option>Monk Nay (N)</option>" +
        "<option>Monk Nay (S)</option>" +
        "<option>Ironstone Point</option>" +
        "<option>Ironstone Bay</option>" +
        "<option>Ironstone Bay (S 1)</option>" +
        "<option>Ironstone Bay (S 2)</option>" +
        "<option>Turner Point (N)</option>" +
        "<option>Salem Bay (N)</option>" +
        "<option>Salem Bay</option>" +
        "<option>Prices Bay</option>" +
        "<option>Parkers Beach</option>" +
        "<option>Eli Point (E)</option>" +
        "<option>Parkinsons Point (W)</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Newmans Beach</option>" +
        "<option>Eaglehawk Neck (W)</option>" +
        "<option>Flinders Bay</option>" +
        "<option>Sommers Bay</option>" +
        "<option>Dick Creek</option>" +
        "<option>Bellettes Point (S)</option>" +
        "<option>Bellettes Bay</option>" +
        "<option>Daltons Beach</option>" +
        "<option>Dunbabin Point (E)</option>" +
        "<option>Wiggins Point (E 1)</option>" +
        "<option>Wiggins Point (E 2)</option>" +
        "<option>Carlisle Beach</option>" +
        "<option>Dunalley Beach</option>" +
        "<option>Dunalley Beach (N)</option>" +
        "<option>Dunalley Bay (N)</option>" +
        "<option>Breaknock Bay (E)</option>" +
        "<option>Breaknock Bay (W)</option>" +
        "<option>Fulham Point (W)</option>" +
        "<option>Wykeholm Point (W)</option>" +
        "<option>Dorman Point (E)</option>" +
        "<option>Dorman Point (W)</option>" +
        "<option>Connellys Bay</option>" +
        "<option>Susan Bay (W)</option>" +
        "<option>Susan Bay (E)</option>" +
        "<option>Gypsy Bay</option>" +
        "<option>Primrose Point (W)</option>" +
        "<option>Primrose Beach</option>" +
        "<option>Carlton Beach</option>" +
        "<option>Red Ochre Beach (1)</option>" +
        "<option>Red Ochre Beach (2)</option>" +
        "<option>Tiger Bay Beach</option>" +
        "<option>Okines Beach</option>" +
        "<option>Seven Mile Beach</option>" +
        "<option>Roches Beach (N 4)</option>" +
        "<option>Roches Beach (N 3)</option>" +
        "<option>Roches Beach (N 2)</option>" +
        "<option>Roches Beach (N 1)</option>" +
        "<option>Roches Beach</option>" +
        "<option>Mays Beach</option>" +
        "<option>Cremorne (N)</option>" +
        "<option>Cremorne Beach</option>" +
        "<option>Pipe Clay Point (S)</option>" +
        "<option>Cape Deslacs (N)</option>" +
        "<option>Clifton Beach</option>" +
        "<option>Smugglers Cove</option>" +
        "<option>Cape Contrariety</option>" +
        "<option>Calverts Beach</option>" +
        "<option>Goat Bluff</option>" +
        "<option>Hope Beach</option>" +
        "<option>Cape Direction</option>" +
        "<option>Pot Bay</option>" +
        "<option>Fort Beach</option>" +
        "<option>Johns Point (N)</option>" +
        "<option>South Arm Beach</option>" +
        "<option>Pigeon Holes</option>" +
        "<option>Glenvar Beach</option>" +
        "<option>Opossum Bay</option>" +
        "<option>Mitchells Beach</option>" +
        "<option>Mary Ann Bay</option>" +
        "<option>Gellibrand Point (W)</option>" +
        "<option>The Spit (N)</option>" +
        "<option>The Spit (S)</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Musk Beach</option>" +
        "<option>South Arm Neck (N)</option>" +
        "<option>Collins Spring Hill (1)</option>" +
        "<option>Collins Spring Hill (2)</option>" +
        "<option>Collins Spring Hill (3)</option>" +
        "<option>Gorringes Beach</option>" +
        "<option>Mortimer Bay (N)</option>" +
        "<option>Maria Pt (E)</option>" +
        "<option>Maria Pt (N)</option>" +
        "<option>Huxleys Beach</option>" +
        "<option>Richardsons Beach</option>" +
        "<option>Lauderdale (W 1)</option>" +
        "<option>Lauderdale (W 2)</option>" +
        "<option>Rokebys Beach</option>" +
        "<option>Droughty Point (W)</option>" +
        "<option>Trywork Point (E)</option>" +
        "<option>Tranmere Point (S)</option>" +
        "<option>Tranmere Point (N 1)</option>" +
        "<option>Tranmere Point (N 2)</option>" +
        "<option>Tranmere</option>" +
        "<option>Little Howrah Beach</option>" +
        "<option>Howrah Beach</option>" +
        "<option>Bellerive Beach</option>" +
        "<option>Short Beach</option>" +
        "<option>Lords Beach</option>" +
        "<option>Red Chapel Beach</option>" +
        "<option>Nutgrove Beach</option>" +
        "<option>Long Beach</option>" +
        "<option>Blinking Billy Point (S)</option>" +
        "<option>Blinking Billy Point (S 1)</option>" +
        "<option>Blinking Billy Point (S 2)</option>" +
        "<option>Cartwright Point (S)</option>" +
        "<option>Dixons Beach</option>" +
        "<option>Taroona High School (S 1)</option>" +
        "<option>Taroona High School (S 2)</option>" +
        "<option>Taroons Beach</option>" +
        "<option>Hinsby Beach</option>" +
        "<option>Tyndall Beach</option>" +
        "<option>Kingston Beach</option>" +
        "<option>Blackmans Bay Beach</option>" +
        "<option>Flowerpot Point (S)</option>" +
        "<option>Soldiers Rocks (S 1)</option>" +
        "<option>Soldiers Rocks (S 2)</option>" +
        "<option>Fishermans Haul</option>" +
        "<option>Fishermans Haul (S)</option>" +
        "<option>Piersons Point (S 1)</option>" +
        "<option>Piersons Point (S 2)</option>" +
        "<option>Tinderbox Bay</option>" +
        "<option>Peggys Beach</option>" +
        "<option>Snug Beach</option>" +
        "<option>Snug Bay (S)</option>" +
        "<option>Little Coningham Beach</option>" +
        "<option>Coningham Beach</option>" +
        "<option>Legacy Beach</option>" +
        "<option>Oyster Cove (N)</option>" +
        "<option>Oyster Cove</option>" +
        "<option>Trial Bay (N)</option>" +
        "<option>Trial Bay (S)</option>" +
        "<option>Perch Bay</option>" +
        "<option>Little Peppermint Bay</option>" +
        "<option>Peppermint Bay (N)</option>" +
        "<option>Peppermint Bay (S)</option>" +
        "<option>Birches Bay (N)</option>" +
        "<option>Yellow Point (S)</option>" +
        "<option>Fleurtys Point (N)</option>" +
        "<option>Fleurtys Point (S)</option>" +
        "<option>Flowerpot Rock (S)</option>" +
        "<option>Dripstone Point (N)</option>" +
        "<option>Whaleboat Rock (N)</option>" +
        "<option>Middleton</option>" +
        "<option>McDowall Rivulet</option>" +
        "<option>Webster Road</option>" +
        "<option>Three Hut Point</option>" +
        "<option>Pensioners Bay</option>" +
        "<option>Wells Road</option>" +
        "<option>Pickup Beach</option>" +
        "<option>Garden Island Sands</option>" +
        "<option>Randalls Bay</option>" +
        "<option>Cray Point (N)</option>" +
        "<option>Eggs and Bacon Bay</option>" +
        "<option>Barretts Bay</option>" +
        "<option>Surveyors Bay</option>" +
        "<option>Roaring Bay Beach</option>" +
        "<option>Little Roaring Bay Beach</option>" +
        "<option>Roaring Bay (S 1)</option>" +
        "<option>Roaring Bay (S 2)</option>" +
        "<option>Esperance Point (N)</option>" +
        "<option>Bulbber Head Road</option>" +
        "<option>Kents Beach</option>" +
        "<option>Kents Beach (W)</option>" +
        "<option>Dover Beach</option>" +
        "<option>Brick Kiln</option>" +
        "<option>Hopetoun Beach</option>" +
        "<option>Slacks Point</option>" +
        "<option>Garretts Bight</option>" +
        "<option>Little Garretts Bight</option>" +
        "<option>Lady Bay (N)</option>" +
        "<option>Lady Bay (S)</option>" +
        "<option>Browns Point</option>" +
        "<option>Sisters Bay</option>" +
        "<option>Roaring Beach (E)</option>" +
        "<option>Roaring Beach (W)</option>" +
        "<option>Walpoles Creek</option>" +
        "<option>Southport</option>" +
        "<option>Kingfish Beach</option>" +
        "<option>Southport Narrows</option>" +
        "<option>Elliott Beach (W)</option>" +
        "<option>Elliott Beach (E)</option>" +
        "<option>Deephole Bay</option>" +
        "<option>Southport Bluff (N 3)</option>" +
        "<option>Southport Bluff (N 2)</option>" +
        "<option>Southport Bluff (N 1)</option>" +
        "<option>Southport Bluff (S)</option>" +
        "<option>Southport Lagoon</option>" +
        "<option>Southport Lagoon (S 1)</option>" +
        "<option>Southport Lagoon (S 2)</option>" +
        "<option>Big Lagoon Beach</option>" +
        "<option>Big Lagoon Beach (S)</option>" +
        "<option>Bowdens Mistake (W)</option>" +
        "<option>Little Lagoon Beach</option>" +
        "<option>Little Lagoon Beach (W)</option>" +
        "<option>Moss Glen</option>" +
        "<option>Moss Glen (S)</option>" +
        "<option>Gilhams Beach</option>" +
        "<option>Gilhams Beach (S)</option>" +
        "<option>Finns Beach</option>" +
        "<option>Catamaran (1)</option>" +
        "<option>Catamaran (2)</option>" +
        "<option>Mary Ann Point</option>" +
        "<option>Ramsgate (N 2)</option>" +
        "<option>Ramsgate (N 1)</option>" +
        "<option>Ramsgate</option>" +
        "<option>Cockle Creek</option>" +
        "<option>Fords Green</option>" +
        "<option>Snake Point (W 2)</option>" +
        "<option>Snake Point (W 1)</option>" +
        "<option>Planters Beach</option>" +
        "<option>Planters Beach (E)</option>" +
        "<option>South Cape Bay (1)</option>" +
        "<option>South Cape Bay (2)</option>" +
        "<option>South Cape Bay (3)</option>" +
        "<option>South East Cape Rivulet</option>" +
        "<option>Granite Beach</option>" +
        "<option>Surprise Bay</option>" +
        "<option>Osmiridrium Beach (E)</option>" +
        "<option>Osmiridrium Beach (W)</option>" +
        "<option>Rocky Plains Bay</option>" +
        "<option>Rocky Boat Inlet</option>" +
        "<option>Wireah Hill</option>" +
        "<option>Prion Beach (E)</option>" +
        "<option>Prion Beach</option>" +
        "<option>Turua Beach (E)</option>" +
        "<option>Turua Beach</option>" +
        "<option>Purrar Point (E)</option>" +
        "<option>Lousy Bay</option>" +
        "<option>Louisa Point</option>" +
        "<option>Louisa Island</option>" +
        "<option>Louisa River</option>" +
        "<option>Louisa Bay (1)</option>" +
        "<option>Louisa Bay (2)</option>" +
        "<option>Louisa Bay (2)</option>" +
        "<option>Louisa Creek</option>" +
        "<option>Louisa Bay (4)</option>" +
        "<option>Louisa Bay (5)</option>" +
        "<option>Louisa Bay (6)</option>" +
        "<option>Louisa Bay (7)</option>" +
        "<option>Swallow Creek (E)</option>" +
        "<option>Swallow Creek</option>" +
        "<option>Anchorage Cove</option>" +
        "<option>Anchorage Cove (S 1)</option>" +
        "<option>Anchorage Cove (S 2)</option>" +
        "<option>Zebra Bay</option>" +
        "<option>Zebra Bay (N)</option>" +
        "<option>Cox Bight (1)</option>" +
        "<option>Cox Bight (1)</option>" +
        "<option>Cox Bight (3)</option>" +
        "<option>Abeona Head</option>" +
        "<option>New Harbour</option>" +
        "<option>Hidden Bay</option>" +
        "<option>Ketchem Bay (1)</option>" +
        "<option>Ketchem Bay (2)</option>" +
        "<option>Ketchem Bay (3)</option>" +
        "<option>Wilson Bight (E 2)</option>" +
        "<option>Wilson Bight (E 1)</option>" +
        "<option>Wilson Bight (W 1)</option>" +
        "<option>Wilson Bight (W 2)</option>" +
        "<option>Wilson Bight (W 3)</option>" +
        "<option>McKays Gulch</option>" +
        "<option>Window Pane Bay</option>" +
        "<option>Window Pane Bay (W)</option>" +
        "<option>Island Bay (1)</option>" +
        "<option>Island Bay (2)</option>" +
        "<option>Faults Bay (S 2)</option>" +
        "<option>Faults Bay (S 1)</option>" +
        "<option>Faults Bay</option>" +
        "<option>Noyhener Beach</option>" +
        "<option>Chatfield Point (S)</option>" +
        "<option>Chatfield Point (N)</option>" +
        "<option>Stephens Bay</option>" +
        "<option>Stephens Bay (N 1)</option>" +
        "<option>Stephens Bay (N 2)</option>" +
        "<option>Stephens Bay (N 3)</option>" +
        "<option>Stephens Bay (N 4)</option>" +
        "<option>Norman Cove</option>" +
        "<option>Spain Bay (1)</option>" +
        "<option>Spain Bay (2)</option>" +
        "<option>Spain Bay (3)</option>" +
        "<option>Hannant Point (E)</option>" +
        "<option>Hannant Inlet</option>" +
        "<option>Bramble Cove</option>" +
        "<option>Bramble Cove (N 1)</option>" +
        "<option>Bramble Cove (N 2)</option>" +
        "<option>Bramble Cove (N 3)</option>" +
        "<option>Bramble Cove (N 4)</option>" +
        "<option>Toogelow Beach</option>" +
        "<option>Mavourneen Rocks (S)</option>" +
        "<option>Mavourneen Rocks (N)</option>" +
        "<option>Ashley Point (S 2)</option>" +
        "<option>Ashley Point (S 1)</option>" +
        "<option>Wallaby Bay</option>" +
        "<option>Wallaby Bay (N)</option>" +
        "<option>Coffin Creek</option>" +
        "<option>Schooner Point (S)</option>" +
        "<option>Schooner Point (N 1)</option>" +
        "<option>Schooner Point (N 2)</option>" +
        "<option>Woody Point (S)</option>" +
        "<option>Woody Point (N)</option>" +
        "<option>Heather Bay</option>" +
        "<option>Fitzroy Point (E)</option>" +
        "<option>Fitzroy Point (N)</option>" +
        "<option>Curtis Point</option>" +
        "<option>Curtis Point (W)</option>" +
        "<option>Bond Bay</option>" +
        "<option>Garden Point (E)</option>" +
        "<option>Eagles Point (S 1)</option>" +
        "<option>Eagles Point (S 2)</option>" +
        "<option>Whalers Point ( N 2)</option>" +
        "<option>Whalers Point ( N 1)</option>" +
        "<option>Saddle Bight</option>" +
        "<option>South East Bight (S 4)</option>" +
        "<option>South East Bight (S 3)</option>" +
        "<option>South East Bight (S 2)</option>" +
        "<option>South East Bight (S 1)</option>" +
        "<option>South East Bight (N 1)</option>" +
        "<option>South East Bight (N 2)</option>" +
        "<option>Quail Flat</option>" +
        "<option>Gulches Reef</option>" +
        "<option>Sandblow Bay (1)</option>" +
        "<option>Sandblow Bay (2)</option>" +
        "<option>Sandblow Bay (3)</option>" +
        "<option>Sandblow Bay (N)</option>" +
        "<option>Dennis Gulch</option>" +
        "<option>Alfhild Bight (1)</option>" +
        "<option>Alfhild Bight (2)</option>" +
        "<option>Alfhild Bight (3)</option>" +
        "<option>Alfhild Bight (N)</option>" +
        "<option>Towterer Beach</option>" +
        "<option>Towterer Beach (N)</option>" +
        "<option>Wreck Bay (1)</option>" +
        "<option>Wreck Bay (2)</option>" +
        "<option>Svenor Point (E)</option>" +
        "<option>Svenor Point (N)</option>" +
        "<option>Mulcahy Bay (S)</option>" +
        "<option>Mulcahy Bay</option>" +
        "<option>Mulcahy River</option>" +
        "<option>Nye Bay</option>" +
        "<option>Middle Rock (E 3)</option>" +
        "<option>Middle Rock (E 2)</option>" +
        "<option>Middle Rock (E 1)</option>" +
        "<option>Middle Rock</option>" +
        "<option>Big Beach</option>" +
        "<option>Barrel Creek</option>" +
        "<option>Elliott Bay (2)</option>" +
        "<option>Cowrie Beach</option>" +
        "<option>Elliott Bay (4)</option>" +
        "<option>Elliott Bay (5)</option>" +
        "<option>Drake Creek</option>" +
        "<option>Low Rocky Point (E)</option>" +
        "<option>Black Island</option>" +
        "<option>Sassy Creek (S 2)</option>" +
        "<option>Sassy Creek (S 1)</option>" +
        "<option>Sassy Creek</option>" +
        "<option>Sassy Creek (W)</option>" +
        "<option>Cooper Creek (S)</option>" +
        "<option>Cooper Creek</option>" +
        "<option>Diorite Point (E)</option>" +
        "<option>Abo Creek</option>" +
        "<option>The Shank</option>" +
        "<option>The Shank (N 1)</option>" +
        "<option>The Shank (N 2)</option>" +
        "<option>The Shank (N 3)</option>" +
        "<option>Mainwaring Inlet</option>" +
        "<option>Mainwaring Inlet (N 1)</option>" +
        "<option>Mainwaring Inlet (N 2)</option>" +
        "<option>Urquhart River</option>" +
        "<option>Hartwell Cove (1)</option>" +
        "<option>Hartwell Cove (2)</option>" +
        "<option>Christmas Cove</option>" +
        "<option>Christmas Cove (N 1)</option>" +
        "<option>Christmas Cove (N 2)</option>" +
        "<option>Endeavour Bay</option>" +
        "<option>Spero River (1)</option>" +
        "<option>Spero River (2)</option>" +
        "<option>Spero River (3)</option>" +
        "<option>Spero River (4)</option>" +
        "<option>Whitehorses Beach (E 2)</option>" +
        "<option>Whitehorses Beach (E 1)</option>" +
        "<option>Whitehorses Beach (1)</option>" +
        "<option>Whitehorses Beach (2)</option>" +
        "<option>Hayes Reef Cliff</option>" +
        "<option>Sanctuary Bay</option>" +
        "<option>Meerim Beach</option>" +
        "<option>Meerim (N 1)</option>" +
        "<option>Meerim (N 2)</option>" +
        "<option>Hibbs Bay (S)</option>" +
        "<option>Hibbs Lagoon (1)</option>" +
        "<option>Hibbs Lagoon (2)</option>" +
        "<option>Hibbs Bay (N 1)</option>" +
        "<option>Hibbs Bay (N 2)</option>" +
        "<option>Hibbs Bay (N 3)</option>" +
        "<option>Jones Creek</option>" +
        "<option>Pennerowne Point (S)</option>" +
        "<option>Varna Bay (1)</option>" +
        "<option>Varna Bay (2)</option>" +
        "<option>Varna Bay (3)</option>" +
        "<option>Varna Bay (4)</option>" +
        "<option>Varna Bay (5)</option>" +
        "<option>Birthday Bay (S 2)</option>" +
        "<option>Birthday Bay (S 1)</option>" +
        "<option>Birthday Creek (1)</option>" +
        "<option>Birthday Creek (2)</option>" +
        "<option>Nielsen River (1)</option>" +
        "<option>Nielsen River (2)</option>" +
        "<option>Albina Rock (S 4)</option>" +
        "<option>Albina Rock (S 3)</option>" +
        "<option>Albina Rock (S 2)</option>" +
        "<option>Albina Rock (S 1)</option>" +
        "<option>Waller Creek</option>" +
        "<option>Albina Creek</option>" +
        "<option>Albina Creek (N 1)</option>" +
        "<option>Albina Creek (N 2)</option>" +
        "<option>Discovery Beach</option>" +
        "<option>Discovery Beach (N)</option>" +
        "<option>George Point (S 3)</option>" +
        "<option>George Point (S 2)</option>" +
        "<option>George Point (S 1)</option>" +
        "<option>George Point (N)</option>" +
        "<option>Sloop Point (N 1)</option>" +
        "<option>Sloop Point (N 2)</option>" +
        "<option>Sloop Point (N 3)</option>" +
        "<option>Dunes Creek</option>" +
        "<option>Dunes Creek (N 1)</option>" +
        "<option>Dunes Creek (N 2)</option>" +
        "<option>Dunes Creek (N 3)</option>" +
        "<option>Dunes Creek (N 4)</option>" +
        "<option>Dunes Creek (N 5)</option>" +
        "<option>Dunes Creek (N 6)</option>" +
        "<option>Grandfathers Beach</option>" +
        "<option>Charleys Beach</option>" +
        "<option>Tiddys Beach</option>" +
        "<option>Pebblys Beach</option>" +
        "<option>Pebblys (W)</option>" +
        "<option>Pilot Beach</option>" +
        "<option>Macquarie Heads</option>" +
        "<option>Ocean Beach (S)</option>" +
        "<option>Ocean Beach (mid)</option>" +
        "<option>Ocean Beach (N)</option>" +
        "<option>Ocean Beach (N 1)</option>" +
        "<option>Trial Harbour (S 2)</option>" +
        "<option>Trial Harbour (S 1)</option>" +
        "<option>Trial Harbour (S)</option>" +
        "<option>Trial Harbour</option>" +
        "<option>Tasman River</option>" +
        "<option>Cannonball Bay</option>" +
        "<option>Granville Harbour</option>" +
        "<option>Stingray Bay</option>" +
        "<option>McGinness Gut</option>" +
        "<option>McGinness Gut (N)</option>" +
        "<option>Duck Creek (S 4)</option>" +
        "<option>Duck Creek (S 3)</option>" +
        "<option>Duck Creek (S 2)</option>" +
        "<option>Duck Creek (S 1)</option>" +
        "<option>Duck Creek</option>" +
        "<option>Duck Creek (N 1)</option>" +
        "<option>Duck Creek (N 2)</option>" +
        "<option>Duck Creek (N 3)</option>" +
        "<option>Hoyle Creek (S)</option>" +
        "<option>Hoyle Creek</option>" +
        "<option>Four Mile Beach</option>" +
        "<option>Conical Harbour</option>" +
        "<option>Hardwicke Bay (S 2)</option>" +
        "<option>Hardwicke Bay (S 1)</option>" +
        "<option>Pieman River</option>" +
        "<option>Foam Creek (S)</option>" +
        "<option>Foam Creek</option>" +
        "<option>Lanes Tor</option>" +
        "<option>Interview River</option>" +
        "<option>Lagoon River</option>" +
        "<option>Lagoon River (N 1)</option>" +
        "<option>Lagoon River (N 2)</option>" +
        "<option>Lagoon River (N 3)</option>" +
        "<option>Lagoon River (N 4)</option>" +
        "<option>Lagoon River (N 5)</option>" +
        "<option>Lagoon River (N 6)</option>" +
        "<option>Lagoon River (N 7)</option>" +
        "<option>Lagoon River (N 8)</option>" +
        "<option>Lagoon River (N 9)</option>" +
        "<option>Lagoon River (N 10)</option>" +
        "<option>Lagoon River (N 11)</option>" +
        "<option>Italian River</option>" +
        "<option>Italian River (N)</option>" +
        "<option>Johnsons Bay</option>" +
        "<option>Johnsons Head</option>" +
        "<option>Johnsons Head (N)</option>" +
        "<option>Sea Devil Rivulet (S)</option>" +
        "<option>Sea Devil Rivulet (N)</option>" +
        "<option>Blue Lagoon</option>" +
        "<option>Native Well Bay (S)</option>" +
        "<option>Native Well Bay</option>" +
        "<option>Sandy Cape (1)</option>" +
        "<option>Sandy Cape (2)</option>" +
        "<option>Sandy Cape Beach (1)</option>" +
        "<option>Sandy Cape Beach (2)</option>" +
        "<option>Sandy Cape Beach (3)</option>" +
        "<option>Sandy Cape Beach (N 1)</option>" +
        "<option>Sandy Cape Beach (N 2)</option>" +
        "<option>Sandy Cape Beach (N 3)</option>" +
        "<option>Greene Point (S 3)</option>" +
        "<option>Greene Point (S 2)</option>" +
        "<option>Greene Point (S 1)</option>" +
        "<option>Greene Point (N)</option>" +
        "<option>Ordnance Point (S 3)</option>" +
        "<option>Ordnance Point (S 2)</option>" +
        "<option>Ordnance Point (S 1)</option>" +
        "<option>Ordnance Point (N)</option>" +
        "<option>Brooks Creek</option>" +
        "<option>Smiths Gulch</option>" +
        "<option>Gannet Gulch</option>" +
        "<option>Dawson Creek</option>" +
        "<option>Dawson Bay (N)</option>" +
        "<option>Ingram Bay</option>" +
        "<option>Hazards Bay (S)</option>" +
        "<option>Hazards Bay</option>" +
        "<option>Dartys Corner</option>" +
        "<option>Richardsons Point (S)</option>" +
        "<option>Temma Harbour</option>" +
        "<option>Gaffney Point (N)</option>" +
        "<option>Poppys Lagoon (N)</option>" +
        "<option>Barney Creek</option>" +
        "<option>Pollys Bay</option>" +
        "<option>Lady Kathleen Beach</option>" +
        "<option>Rebceea Point (S)</option>" +
        "<option>Rebceea Point (N)</option>" +
        "<option>Couta Rocks (S)</option>" +
        "<option>Couta Rocks (1)</option>" +
        "<option>Couta Rocks (2)</option>" +
        "<option>Couta Rocks (N)</option>" +
        "<option>Sarah Anne Rocks</option>" +
        "<option>Sardine Creek</option>" +
        "<option>Nelson Bay</option>" +
        "<option>Nelson Bay (N 1)</option>" +
        "<option>Nelson Bay (N 2)</option>" +
        "<option>Sundown Point (S 2)</option>" +
        "<option>Sundown Point (S 1)</option>" +
        "<option>Sundown Point (N 1)</option>" +
        "<option>Sundown Point (N 2)</option>" +
        "<option>Sundown Creek (N)</option>" +
        "<option>Bottle Creek (S)</option>" +
        "<option>Arthur Beach</option>" +
        "<option>Arthur Beach (M)</option>" +
        "<option>Gardiner Point (S 3)</option>" +
        "<option>Gardiner Point (S 2)</option>" +
        "<option>Gardiner Point (S 1)</option>" +
        "<option>Gardiner Point (E)</option>" +
        "<option>Arthur River (S)</option>" +
        "<option>Arthur River (N)</option>" +
        "<option>Australia Point (S)</option>" +
        "<option>Australia Point</option>" +
        "<option>Australia Point (N)</option>" +
        "<option>Church Rock (S)</option>" +
        "<option>Church Rock (N)</option>" +
        "<option>Bluff Hill (1)</option>" +
        "<option>Bluff Hill (2)</option>" +
        "<option>Bluff Hill Point (E1)</option>" +
        "<option>Bluff Hill Point (E2)</option>" +
        "<option>Bluff Hill Point (E3)</option>" +
        "<option>Nimble Creek</option>" +
        "<option>Nimble Creek (N)</option>" +
        "<option>Woodside Creek</option>" +
        "<option>Black Rocks</option>" +
        "<option>Black Rocks (N 1)</option>" +
        "<option>Black Rocks (N 1)</option>" +
        "<option>Maswon Bay (1)</option>" +
        "<option>Maswon Bay (2)</option>" +
        "<option>Doctors Creek</option>" +
        "<option>Doctors Creek (N)</option>" +
        "<option>Lighthouse Beach</option>" +
        "<option>West Point</option>" +
        "<option>Gales Bay</option>" +
        "<option>Nettley Bay</option>" +
        "<option>Pavement Point</option>" +
        "<option>Pavement Point (E)</option>" +
        "<option>Periwinkle Beach</option>" +
        "<option>Periwinkle Beach (N)</option>" +
        "<option>Marrawah</option>" +
        "<option>Mount Cameron Beach</option>" +
        "<option>Mount Cameron (N 1)</option>" +
        "<option>Mount Cameron (N 2)</option>" +
        "<option>Maxies Point (S 3)</option>" +
        "<option>Maxies Point (S 2)</option>" +
        "<option>Maxies Point (S 1)</option>" +
        "<option>Maxies Point (N 1)</option>" +
        "<option>Maxies Point (N 2)</option>" +
        "<option>Maxies Point (N 3)</option>" +
        "<option>Maxies Point (N 4)</option>" +
        "<option>Maxies Point (N 5)</option>" +
        "<option>Calm Bay</option>" +
        "<option>Calm Bay (N 1)</option>" +
        "<option>Calm Bay (N 2)</option>" +
        "<option>Calm Bay (N 3)</option>" +
        "<option>Calm Bay (N 4)</option>" +
        "<option>Calm Bay (N 5)</option>" +
        "<option>Dodgers Point (1)</option>" +
        "<option>Dodgers Point (2)</option>" +
        "<option>Studland Bay</option>" +
        "<option>Hippo Point (N)</option>" +
        "<option>Valley Bay</option>" +
        "<option>Victory Hill</option>" +
        "<option>Davisons Point (1)</option>" +
        "<option>Davisons Point (2)</option>" +
        "<option>Davisons Point (3)</option>" +
        "<option>Davisons Point (4)</option>" +
        "<option>Davisons Point (5)</option>" +
        "<option>Davisons Point (6)</option>" +
        "<option>Davisons Point (7)</option>" +
        "<option>Woolnorth Point (W 2)</option>" +
        "<option>Woolnorth Point (W 1)</option>" +
        "<option>Colliboi Beach</option>" +
        "<option>Woolnorth Anchorage</option>" +
        "<option>Woolnorth Anchorage (S 1)</option>" +
        "<option>Woolnorth Anchorage (S 2)</option>" +
        "<option>Anns Bay</option>" +
        "<option>Anns Bay (S)</option>" +
        "<option>Shoal Inlet (E)</option>" +
        "<option>Welcome Inlet (W)</option>" +
        "<option>Welcome Inlet (E)</option>" +
        "<option>North Shore</option>" +
        "<option>Anthony Beach</option>" +
        "<option>West Inlet</option>" +
        "<option>Green Hills</option>" +
        "<option>Cable Point (S 3)</option>" +
        "<option>Cable Point (S 2)</option>" +
        "<option>Cable Point (S 2)</option>" +
        "<option>Cable Point (N 1)</option>" +
        "<option>Cable Point (N 2)</option>" +
        "<option>North Point (W 2)</option>" +
        "<option>North Point (W 1)</option>" +
        "<option>North Point (E 1)</option>" +
        "<option>North Point (E 2)</option>" +
        "<option>North Point (E 3)</option>" +
        "<option>Halfmoon Bay (N)</option>" +
        "<option>Halfmoon Bay</option>" +
        "<option>Godfrey Beach</option>" +
        "<option>Tatlows Beach</option>" +
        "<option>Black River Beach</option>" +
        "<option>Peggs Beach</option>" +
        "<option>Little Peggs Beach</option>" +
        "<option>Brickmakers Bay</option>" +
        "<option>Cowrie Point</option>" +
        "<option>Cowrie Point (E 1)</option>" +
        "<option>Cowrie Point (E 2)</option>" +
        "<option>Crayfish Creek Beach</option>" +
        "<option>Crayfish Creek (E 2)</option>" +
        "<option>Crayfish Creek (E 1)</option>" +
        "<option>Crayfish Creek (W 1)</option>" +
        "<option>Crayfish Creek (W 2)</option>" +
        "<option>Edgecumbe Beach (W)</option>" +
        "<option>Edgecumbe Beach</option>" +
        "<option>Edgecumbe Beach (E 1)</option>" +
        "<option>Edgecumbe Beach (E 2)</option>" +
        "<option>Edgecumbe Beach (E 3)</option>" +
        "<option>Edgecumbe Beach (E 4)</option>" +
        "<option>Hellyer Beach</option>" +
        "<option>Forwards Beach</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Picnic Beach (E 1)</option>" +
        "<option>Picnic Beach (E 2)</option>" +
        "<option>Picnic Beach (E 3)</option>" +
        "<option>Picnic Beach (E 4)</option>" +
        "<option>Rocky Cape Beach (W 2)</option>" +
        "<option>Rocky Cape Beach (W 1)</option>" +
        "<option>Rocky Cape Beach</option>" +
        "<option>Mary Ann Cove</option>" +
        "<option>Mary Ann Cove (N)</option>" +
        "<option>Rocky Cape (W 2)</option>" +
        "<option>Rocky Cape (W 1)</option>" +
        "<option>Cave Bay</option>" +
        "<option>Cave Bay (S)</option>" +
        "<option>Burgess Cove</option>" +
        "<option>Burgess Cove (S)</option>" +
        "<option>Blue Rocks Point</option>" +
        "<option>Cathedral Rocks</option>" +
        "<option>Castle Rocks (1)</option>" +
        "<option>Castle Rocks (2)</option>" +
        "<option>Castle Rocks (3)</option>" +
        "<option>Castle Rocks (4)</option>" +
        "<option>Droone Creek</option>" +
        "<option>The Gut (W)</option>" +
        "<option>The Gut (E)</option>" +
        "<option>Anniversary Bay 1</option>" +
        "<option>Anniversary Bay 2</option>" +
        "<option>Anniversary Bay 3</option>" +
        "<option>Leearcher Cave</option>" +
        "<option>Wet Cave Point</option>" +
        "<option>Razor Beach</option>" +
        "<option>Sisters Beach 1</option>" +
        "<option>Sisters Beach 2</option>" +
        "<option>Sisters Beach 3</option>" +
        "<option>Sisters Beach 4</option>" +
        "<option>Sisters Beach 5</option>" +
        "<option>Breakneck Point (W)</option>" +
        "<option>Breakneck Point</option>" +
        "<option>Walkers Cove</option>" +
        "<option>Banksia Corner 1</option>" +
        "<option>Banksia Corner 2</option>" +
        "<option>Western Cove</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour (SLSC)</option>" +
        "<option>Boat Harbour beach 1</option>" +
        "<option>Boat Harbour beach 2</option>" +
        "<option>Boat Harbour beach 3</option>" +
        "<option>Chambers Cove</option>" +
        "<option>Fossil Beach</option>" +
        "<option>Wynyard Golf Course 1</option>" +
        "<option>Wynyard Golf Course 2</option>" +
        "<option>East Wynyard Beach</option>" +
        "<option>East Wynyard Beach (E)</option>" +
        "<option>Port Creek</option>" +
        "<option>Seabrook (W)</option>" +
        "<option>Seabrook Beach</option>" +
        "<option>Seabrook (E1)</option>" +
        "<option>Seabrook (E2)</option>" +
        "<option>Seabrook Creek</option>" +
        "<option>Doctors Rocks 1</option>" +
        "<option>Doctors Rocks 2</option>" +
        "<option>Doctors Rocks 3</option>" +
        "<option>McKenzies Beach 1</option>" +
        "<option>McKenzies Beach 2</option>" +
        "<option>Woody Hill Point (W)</option>" +
        "<option>Woody Hill Point (E 1)</option>" +
        "<option>Woody Hill Point (E 2)</option>" +
        "<option>Fairbanks Beach</option>" +
        "<option>Somerset Beach</option>" +
        "<option>Camdale</option>" +
        "<option>Ocean Vista</option>" +
        "<option>Cooee Beach</option>" +
        "<option>Cooee Point (W)</option>" +
        "<option>Red Rock Point (W)</option>" +
        "<option>Red Rock Point (E)</option>" +
        "<option>West Beach</option>" +
        "<option>Burnie yacht club</option>" +
        "<option>South Burnie Beach</option>" +
        "<option>Wivenhoe Beach</option>" +
        "<option>Round Hill</option>" +
        "<option>Round Hill Point (E)</option>" +
        "<option>Titan Point (W)</option>" +
        "<option>Blythe River</option>" +
        "<option>Blythe  mouth</option>" +
        "<option>Blythe Heads</option>" +
        "<option>Heybridge</option>" +
        "<option>Howth 1</option>" +
        "<option>Howth 2</option>" +
        "<option>Howth 3</option>" +
        "<option>Sulphur Creek</option>" +
        "<option>Midway Beach</option>" +
        "<option>Preservation Bay</option>" +
        "<option>Johnsons Beach</option>" +
        "<option>Penguin Beach</option>" +
        "<option>Watcombe Beach</option>" +
        "<option>Watcombe (E)</option>" +
        "<option>Tea TreePoint (W)</option>" +
        "<option>Penguin Point (E)</option>" +
        "<option>Three Sisters 1</option>" +
        "<option>Three Sisters 2</option>" +
        "<option>Three Sisters 3</option>" +
        "<option>Goat Island</option>" +
        "<option>Picnic Point (W)</option>" +
        "<option>Picnic Point (E)</option>" +
        "<option>Buttons Beach</option>" +
        "<option>The Fish Pond</option>" +
        "<option>Claytons</option>" +
        "<option>Claytons Bay</option>" +
        "<option>Turners Beach</option>" +
        "<option>Leith</option>" +
        "<option>Leith (E)</option>" +
        "<option>Lillico Beach</option>" +
        "<option>Lillico Beach (E)</option>" +
        "<option>Don Heads (W 5)</option>" +
        "<option>Don Heads (W 4)</option>" +
        "<option>Don Heads (W 3)</option>" +
        "<option>Don Heads (W 2)</option>" +
        "<option>Don Heads (W 1)</option>" +
        "<option>Don Heads (W)</option>" +
        "<option>Don Heads (E)</option>" +
        "<option>Coles Beach</option>" +
        "<option>Coles (E 1)</option>" +
        "<option>Coles (E 2)</option>" +
        "<option>Back Beach</option>" +
        "<option>Bluff Beach</option>" +
        "<option>Bluff Beach (E)</option>" +
        "<option>Regatta Point</option>" +
        "<option>Police Point</option>" +
        "<option>East Devonport Beach</option>" +
        "<option>Pardoe Downs 1</option>" +
        "<option>Pardoe Downs 2</option>" +
        "<option>Pardoe Downs 3</option>" +
        "<option>Pardoe Beach</option>" +
        "<option>Moorland Beach</option>" +
        "<option>Moorland Point (E)</option>" +
        "<option>Northdown Beach</option>" +
        "<option>The Water Rat</option>" +
        "<option>The Water Rat (E)</option>" +
        "<option>Margaret Rocks (S 3)</option>" +
        "<option>Margaret Rocks (S 2)</option>" +
        "<option>Margaret Rocks (S 1)</option>" +
        "<option>Margaret Rocks</option>" +
        "<option>Point Sorrell (W)</option>" +
        "<option>Point Sorrell (E)</option>" +
        "<option>Edies Point (N)</option>" +
        "<option>Edies Point (S)</option>" +
        "<option>Fishpond Rocks (N)</option>" +
        "<option>Hawley Beach (N)</option>" +
        "<option>Hawley Beach</option>" +
        "<option>Taroona Point</option>" +
        "<option>Freers Beach</option>" +
        "<option>Port Sorell</option>" +
        "<option>Springlawn Beach</option>" +
        "<option>Bakers Point</option>" +
        "<option>Griffiths Point</option>" +
        "<option>Bakers Beach</option>" +
        "<option>Little Badgers Head 1</option>" +
        "<option>Little Badgers Head 2</option>" +
        "<option>Little Badgers Head 3</option>" +
        "<option>Little Badgers Head 4</option>" +
        "<option>Little Badgers Head 5</option>" +
        "<option>Badgers Beach</option>" +
        "<option>West Head (E)</option>" +
        "<option>Nudist Beach</option>" +
        "<option>Greens Beach</option>" +
        "<option>Friend Point (W)</option>" +
        "<option>Friend Point (E)</option>" +
        "<option>Kelso</option>" +
        "<option>Sheoak Point</option>" +
        "<option>Lagoon Point</option>" +
        "<option>Pilots Bay</option>" +
        "<option>Pilots Bay harbour</option>" +
        "<option>Pilots Bay (N 1)</option>" +
        "<option>Pilots Bay (N)</option>" +
        "<option>Low Head (W)</option>" +
        "<option>East Beach</option>" +
        "<option>East Beach (E)</option>" +
        "<option>Potato Hill</option>" +
        "<option>Bellbuoy Beach</option>" +
        "<option>Four Mile Bluff</option>" +
        "<option>Five Mile Bluff (W)</option>" +
        "<option>Five Mile Bluff (E)</option>" +
        "<option>Five Mile Bluff (E 1)</option>" +
        "<option>Curries Creek (E)</option>" +
        "<option>Beechford (W 2)</option>" +
        "<option>Beechford (W 1)</option>" +
        "<option>Beechford (E)</option>" +
        "<option>Stony Head (W)</option>" +
        "<option>Stony Head</option>" +
        "<option>Maitland Bay</option>" +
        "<option>Stony Head (E)</option>" +
        "<option>Black Rock Point (E)</option>" +
        "<option>Tam O'Shanter Bay</option>" +
        "<option>Tam O'Shanter Bay (E 1)</option>" +
        "<option>Tam O'Shanter Bay (E 2)</option>" +
        "<option>Tam O'Shanter Bay (E 3)</option>" +
        "<option>Fannys Bay</option>" +
        "<option>Fannys Bay (E 1)</option>" +
        "<option>Fannys Bay (E 2)</option>" +
        "<option>Weymouth (W)</option>" +
        "<option>Weymouth</option>" +
        "<option>Pipers River (E)</option>" +
        "<option>Pipers Head (E 1)</option>" +
        "<option>Pipers Head (E 2)</option>" +
        "<option>Fordington</option>" +
        "<option>Single Tree Plain (S)</option>" +
        "<option>Single Tree Plain (N)</option>" +
        "<option>West Sandy Point (W 3)</option>" +
        "<option>West Sandy Point (W 2)</option>" +
        "<option>West Sandy Point (W 1)</option>" +
        "<option>West Sandy Point</option>" +
        "<option>St Albans Bay</option>" +
        "<option>East Sandy Point</option>" +
        "<option>East Sandy Point (E)</option>" +
        "<option>Lades Beach</option>" +
        "<option>Adams Beach</option>" +
        "<option>Granite Point</option>" +
        "<option>Granite Point (E)</option>" +
        "<option>Mermain Beach</option>" +
        "<option>Old Pier Beach</option>" +
        "<option>Mattingleys Beach</option>" +
        "<option>Croquet Lawn Beach</option>" +
        "<option>Eastmans Beach</option>" +
        "<option>Goftons  Beach</option>" +
        "<option>Barnbougie Beach</option>" +
        "<option>Waterhouse Beach</option>" +
        "<option>Croppies Beach</option>" +
        "<option>Croppies Bay (1)</option>" +
        "<option>Croppies Bay (2)</option>" +
        "<option>Croppies Bay (3)</option>" +
        "<option>Croppies Point (E)</option>" +
        "<option>Blizzards Landing</option>" +
        "<option>Waterhouse Point (W 6)</option>" +
        "<option>Waterhouse Point (W 5)</option>" +
        "<option>Waterhouse Point (W 4)</option>" +
        "<option>Waterhouse Point (W 3)</option>" +
        "<option>Waterhouse Point (W 2)</option>" +
        "<option>Waterhouse Point (W 2)</option>" +
        "<option>Waterhouse Point</option>" +
        "<option>Waterhouse Point (E 1)</option>" +
        "<option>Waterhouse Point (E 2)</option>" +
        "<option>Rasnon Beach</option>" +
        "<option>West Tomahawk Beach</option>" +
        "<option>Tomahawk Point (W)</option>" +
        "<option>Tomahawk Point (E)</option>" +
        "<option>Tomahawk Beach</option>" +
        "<option>Tomahawk Beach (E)</option>" +
        "<option>Tomahawk (E 1)</option>" +
        "<option>Tomahawk (E 2)</option>" +
        "<option>Murdochs (W 2)</option>" +
        "<option>Murdochs (W 2)</option>" +
        "<option>Murdochs Beach</option>" +
        "<option>Boobyalla Beach</option>" +
        "<option>Boobyalla (N)</option>" +
        "<option>Lemons Beach</option>" +
        "<option>Home Beach</option>" +
        "<option>Semaphore Hill (E 2)</option>" +
        "<option>Semaphore Hill (E 1)</option>" +
        "<option>Bull Bay (1)</option>" +
        "<option>Bull Bay (2)</option>" +
        "<option>Bull Bay (3)</option>" +
        "<option>Patricks Bight</option>" +
        "<option>Mother Hayles Beach</option>" +
        "<option>One Tree Point (N)</option>" +
        "<option>Trumpeter Bay (1)</option>" +
        "<option>Trumpeter Bay (2)</option>" +
        "<option>Lookout Bay</option>" +
        "<option>Miles Beach</option>" +
        "<option>Mars Bluff</option>" +
        "<option>Neck Beach</option>" +
        "<option>Dunckels Beach</option>" +
        "<option>Dunckels Beach (S)</option>" +
        "<option>Two Tree Point</option>" +
        "<option>Adventure Bay Beach</option>" +
        "<option>East Cove</option>" +
        "<option>Bay of Islands (1)</option>" +
        "<option>Bay of Islands (2)</option>" +
        "<option>Bay of Islands (3)</option>" +
        "<option>Bay of Islands (4)</option>" +
        "<option>Haulage Bay (N)</option>" +
        "<option>Haulage Bay (S)</option>" +
        "<option>Arched Island (1)</option>" +
        "<option>Arched Island (2)</option>" +
        "<option>Pine Log Bay (1)</option>" +
        "<option>Pine Log Bay (2)</option>" +
        "<option>Beaufort Bay</option>" +
        "<option>Cloudy Bay (E)</option>" +
        "<option>Cloudy Bay</option>" +
        "<option>Cloudy Bay (W)</option>" +
        "<option>Inlet Beach</option>" +
        "<option>Mabel Cove (N)</option>" +
        "<option>Mabel Cove</option>" +
        "<option>West Cloudy Head (1)</option>" +
        "<option>West Cloudy Head (2)</option>" +
        "<option>Lighthouse Bay (E)</option>" +
        "<option>Lighthouse Bay</option>" +
        "<option>Hopwood Beach</option>" +
        "<option>Hopwood (N)</option>" +
        "<option>Partridge Narrows</option>" +
        "<option>Butlers Beach</option>" +
        "<option>Taylors Reef (1)</option>" +
        "<option>Taylors Reef (2)</option>" +
        "<option>Lighthouse Jetty Beach</option>" +
        "<option>Kingfisher Beach</option>" +
        "<option>Kingfisher Beach (E)</option>" +
        "<option>Stinking Beach (S)</option>" +
        "<option>Stinking Beach</option>" +
        "<option>Mickeys Bay (S)</option>" +
        "<option>Mickeys Bay (N)</option>" +
        "<option>Tinpot Bay</option>" +
        "<option>North Tinpot</option>" +
        "<option>Conleys Beach</option>" +
        "<option>Ventenat Point</option>" +
        "<option>Quarries Bay</option>" +
        "<option>Quarries Bay (S 1)</option>" +
        "<option>Quarries Bay (S 2)</option>" +
        "<option>Quarries Bay (S 3)</option>" +
        "<option>Swifts Point (S 1)</option>" +
        "<option>Swifts Point (S 2)</option>" +
        "<option>Swifts Point (S 3)</option>" +
        "<option>Swifts Point (S 4)</option>" +
        "<option>Swifts Point (S 5)</option>" +
        "<option>LittleTaylors Bay</option>" +
        "<option>Daniels Bay</option>" +
        "<option>Cemetery Beach</option>" +
        "<option>Little Reef</option>" +
        "<option>Big Reef</option>" +
        "<option>Sunset Bay</option>" +
        "<option>Alonnah</option>" +
        "<option>Alonnah boat harbour</option>" +
        "<option>Isthmus Bay</option>" +
        "<option>Propoise Head</option>" +
        "<option>Fancy Bay</option>" +
        "<option>Little Fancy Bay</option>" +
        "<option>Ford Bay</option>" +
        "<option>Sadgrove Point (N)</option>" +
        "<option>Smoothys Point (S)</option>" +
        "<option>Great Bay (1)</option>" +
        "<option>Great Bay (2)</option>" +
        "<option>Great Bay (3)</option>" +
        "<option>Adams Bay</option>" +
        "<option>Black Rock Point</option>" +
        "<option>Cockleshell Beach (S)</option>" +
        "<option>Cockleshell Beach (N)</option>" +
        "<option>Rat Bay</option>" +
        "<option>Longfords Beach</option>" +
        "<option>Bligh Point (E 1)</option>" +
        "<option>Bligh Point (E 2)</option>" +
        "<option>Bligh Point (E 3)</option>" +
        "<option>Nebraska Beach</option>" +
        "<option>Boulder Point (S)</option>" +
        "<option>Jetty Beach</option>" +
        "<option>Holloway Beach</option>" +
        "<option>North East Inlet</option>" +
        "<option>Foochow Beach</option>" +
        "<option>Foochow Beach (S)</option>" +
        "<option>Patriarch Inlet</option>" +
        "<option>Swimming Beach</option>" +
        "<option>Swimming Beach (E)</option>" +
        "<option>Planter Beach (N)</option>" +
        "<option>Planter Beach (S)</option>" +
        "<option>Pot Boil Beach</option>" +
        "<option>White Beach</option>" +
        "<option>Yellow Beach</option>" +
        "<option>Silas Beach</option>" +
        "<option>Store Point (W)</option>" +
        "<option>Gunter Bay</option>" +
        "<option>Badger Corner</option>" +
        "<option>Tommy Rews Point (W)</option>" +
        "<option>Watering Beach</option>" +
        "<option>Tongue Point (N)</option>" +
        "<option>Reddins Creek</option>" +
        "<option>Reddins Creek (W)</option>" +
        "<option>Joes Creek</option>" +
        "<option>Joes Creek (W)</option>" +
        "<option>Pigs Head Point (E)</option>" +
        "<option>Pigs Head Point (W)</option>" +
        "<option>Little River</option>" +
        "<option>Big River Cove</option>" +
        "<option>Sarah Blanche Point (W)</option>" +
        "<option>Buffalos Beach</option>" +
        "<option>Cronleys Creek (W 1)</option>" +
        "<option>Cronleys Creek (W 2)</option>" +
        "<option>Cronleys Creek (W 3)</option>" +
        "<option>Holts Point (E)</option>" +
        "<option>Trousers Point Beach</option>" +
        "<option>Trousers Point (S 1)</option>" +
        "<option>Trousers Point (S 2)</option>" +
        "<option>Fotheringate (S)</option>" +
        "<option>Fotheringate Beach</option>" +
        "<option>Whitemark Beach</option>" +
        "<option>Bluff Beach</option>" +
        "<option>The Bluff</option>" +
        "<option>Pats River</option>" +
        "<option>Parrys Bay (N 1)</option>" +
        "<option>Parrys Bay (N 2)</option>" +
        "<option>Long Point (E)</option>" +
        "<option>Long Point Beach</option>" +
        "<option>Blue Rocks</option>" +
        "<option>Blue Rocks (N 1)</option>" +
        "<option>Blue Rocks (N 2)</option>" +
        "<option>Sawyers Bay (1)</option>" +
        "<option>Sawyers Bay (2)</option>" +
        "<option>Sawyers Bay (3)</option>" +
        "<option>Sawyers Bay (4)</option>" +
        "<option>Sawyers Bay (5)</option>" +
        "<option>Sawyers Bay (6)</option>" +
        "<option>Sawyers Bay (7)</option>" +
        "<option>Sawyers Bay (8)</option>" +
        "<option>Half Mile Rock (S 2)</option>" +
        "<option>Half Mile Rock (S 1)</option>" +
        "<option>Half Mile Rock</option>" +
        "<option>Settlement Beach</option>" +
        "<option>Lillies beach (1)</option>" +
        "<option>Lillies beach (2)</option>" +
        "<option>Lillies beach (3)</option>" +
        "<option>Settlement Point (S )</option>" +
        "<option>Settlement Point</option>" +
        "<option>Settlement Point (N 1)</option>" +
        "<option>Settlement Point (N 2)</option>" +
        "<option>Settlement Point (N 3)</option>" +
        "<option>Settlement Point (N 4)</option>" +
        "<option>Port Davies</option>" +
        "<option>Cave Beach</option>" +
        "<option>Cave Beach (E 1)</option>" +
        "<option>Cave Beach (E 2)</option>" +
        "<option>Allports (W)</option>" +
        "<option>Allports Beach</option>" +
        "<option>Old Jetty Beach</option>" +
        "<option>Emita</option>" +
        "<option>Castle Rock Point (S 3)</option>" +
        "<option>Castle Rock Point (S 2)</option>" +
        "<option>Castle Rock Point (S 1)</option>" +
        "<option>Marshall Beach (S)</option>" +
        "<option>Marshall Beach (N)</option>" +
        "<option>Mines Creek (S)</option>" +
        "<option>Mines Creek (N)</option>" +
        "<option>Duck Island (E 4)</option>" +
        "<option>Duck Island (E 3)</option>" +
        "<option>Duck Island (E 2)</option>" +
        "<option>Duck Island (E 1)</option>" +
        "<option>Duck Island (W 1)</option>" +
        "<option>Duck Island (W 2)</option>" +
        "<option>Pine Scrub (1)</option>" +
        "<option>Pine Scrub (2)</option>" +
        "<option>Pine Scrub (3)</option>" +
        "<option>Pine Scrub (4)</option>" +
        "<option>Pine Scrub (5)</option>" +
        "<option>Bun Beetons Point (E)</option>" +
        "<option>West End Beach</option>" +
        "<option>West End (1)</option>" +
        "<option>West End (2)</option>" +
        "<option>West End (3)</option>" +
        "<option>Egg Beach (S)</option>" +
        "<option>Egg Beach (N)</option>" +
        "<option>Barbers (S)</option>" +
        "<option>Barbers Beach</option>" +
        "<option>Bottlerush Beach</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour (mid)</option>" +
        "<option>Boat Harbour Beach</option>" +
        "<option>Boat Harbour (N)</option>" +
        "<option>Killiecrankie</option>" +
        "<option>Killiecrankie Bay</option>" +
        "<option>Killiecrankie (N)</option>" +
        "<option>Stackys Bight (1)</option>" +
        "<option>Stackys Bight (2)</option>" +
        "<option>The Dock (1)</option>" +
        "<option>The Dock (2)</option>" +
        "<option>The Dock (3)</option>" +
        "<option>The Dock (4)</option>" +
        "<option>The Dock (5)</option>" +
        "<option>Green Island (S 3)</option>" +
        "<option>Green Island (S 2)</option>" +
        "<option>Green Island (S 1)</option>" +
        "<option>Green Island (N 1)</option>" +
        "<option>Green Island (N 2)</option>" +
        "<option>Limestone Bay (1)</option>" +
        "<option>Limestone Bay (2)</option>" +
        "<option>Palana Beach</option>" +
        "<option>Palana (E)</option>" +
        "<option>Blyth Bay (E1)</option>" +
        "<option>Blyth Bay (E 2)</option>" +
        "<option>Sleepy (W)</option>" +
        "<option>Sleepy Beach</option>" +
        "<option>Jacksons Cove</option>" +
        "<option>Disappointment Bay</option>" +
        "<option>Rocky Point (S 1)</option>" +
        "<option>Rocky Point (S 2)</option>" +
        "<option>White Beach</option>" +
        "<option>White Beach (S)</option>" +
        "<option>Boulder Point (N)</option>" +
        "<option>Boulder Point (S)</option>" +
        "<option>Lavania Beach</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Cowper Point (S)</option>" +
        "<option>Fraser Beach</option>" +
        "<option>Naracoopa (W)</option>" +
        "<option>Naracoopa (E)</option>" +
        "<option>Fraser Bluff (S)</option>" +
        "<option>Forrests Creek</option>" +
        "<option>Barrier Creek</option>" +
        "<option>Grimes Creek</option>" +
        "<option>Skipworths Creek</option>" +
        "<option>City of Melbourne Bay</option>" +
        "<option>City of Melbourne Bay (S)</option>" +
        "<option>Cottons Creek</option>" +
        "<option>Cottons Creek (S)</option>" +
        "<option>Bold Head (N 2)</option>" +
        "<option>Bold Head (N 1)</option>" +
        "<option>Bold Head</option>" +
        "<option>Bold Head (S)</option>" +
        "<option>Grassy Bay (1)</option>" +
        "<option>Grassy Bay (2)</option>" +
        "<option>Grassy Bay (3)</option>" +
        "<option>Grassy tailings</option>" +
        "<option>Grassy Harbour</option>" +
        "<option>Grassy Harbour (W)</option>" +
        "<option>Sandblow Point (S)</option>" +
        "<option>Broken Arm Beach</option>" +
        "<option>Broken Arm (S)</option>" +
        "<option>Broken Arm (S 1)</option>" +
        "<option>Broken Arm (S 2)</option>" +
        "<option>Crown Creek</option>" +
        "<option>Red Hut Point (E 2)</option>" +
        "<option>Red Hut Point (E 1)</option>" +
        "<option>Colliers Beach</option>" +
        "<option>Seal Point</option>" +
        "<option>Seal Bay (N)</option>" +
        "<option>Seal Bay (S)</option>" +
        "<option>Stokes Point (E)</option>" +
        "<option>Surprise Bay</option>" +
        "<option>Denbys Bay</option>" +
        "<option>Fitzmaurice Bay (S)</option>" +
        "<option>Fitzmaurice Bay</option>" +
        "<option>Ettrick Beach</option>" +
        "<option>Millers Bay (S)</option>" +
        "<option>Millers Bay (N)</option>" +
        "<option>Sandfly Beach</option>" +
        "<option>Badger Box Creek (S)</option>" +
        "<option>Badger Box Creek (N)</option>" +
        "<option>British Admiral Beach</option>" +
        "<option>Halfmoon Bay</option>" +
        "<option>Netherby Bay</option>" +
        "<option>Little Beach</option>" +
        "<option>Big Beach</option>" +
        "<option>Gull Rock</option>" +
        "<option>Whalebone (S)</option>" +
        "<option>Whalebone Beach</option>" +
        "<option>Little Porky (S)</option>" +
        "<option>Little Porky Beach</option>" +
        "<option>Little Porky (N)</option>" +
        "<option>Porky Beach</option>" +
        "<option>Porky (N)</option>" +
        "<option>Unlucky Bay</option>" +
        "<option>Pass River</option>" +
        "<option>Percys Road</option>" +
        "<option>Bungaree Creek (S 2)</option>" +
        "<option>Bungaree Creek (S 1)</option>" +
        "<option>Eel River</option>" +
        "<option>Duck Bay (S)</option>" +
        "<option>Duck Bay</option>" +
        "<option>Quarantine Bay</option>" +
        "<option>Yellow Rock Beach</option>" +
        "<option>The Springs</option>" +
        "<option>Victoria Cove</option>" +
        "<option>Beaching Bay</option>" +
        "<option>Red Rock Point (E)</option>" +
        "<option>Riedle Bay</option>" +
        "<option>Shoal Bay</option>" +
        "<option>Encampment Cove</option>" +
        "<option>Goldings Reef</option>" +
        "<option>Guards Lagoon</option>" +
        "<option>Point Lesueur</option>" +
        "<option>Goodstone Point (W)</option>" +
        "<option>Goodstone Point</option>" +
        "<option>Bloodstone Beach</option>" +
        "<option>Soldiers Beach</option>" +
        "<option>Return Point (S)</option>" +
        "<option>Return Point (W)</option>" +
        "<option>Return Point (N)</option>" +
        "<option>Four Mile Creek</option>" +
        "<option>Howells Point</option>" +
        "<option>Hopground Beach</option>" +
        "<option>Darlington Bay</option>" +
        "<option>Little Creek</option>" +
        "<option>Bird Point (S)</option>" +
        "<option>Bird Point (N)</option>" +
        "<option>Back Banks</option>" +
        "<option>Big Bluff</option>" +
        "<option>Guyton Point (W)</option>" +
        "<option>Guyton Point (E)</option>" +
        "<option>East Beach</option>" +
        "<option>Cape Elie (W 1)</option>" +
        "<option>Cape Elie (W 2)</option>" +
        "<option>Cape Elie (W 3)</option>" +
        "<option>Egging Point (W)</option>" +
        "<option>Walker Island (W 1)</option>" +
        "<option>Walker Island (W 2)</option>" +
        "<option>Walker Island (W 3)</option>" +
        "<option>Walker Island (W 4)</option>" +
        "<option>Love Bay</option>" +
        "<option>Cathedral Point (S 1)</option>" +
        "<option>Cathedral Point (S 2)</option>" +
        "<option>Rookery Beach</option>" +
        "<option>Mosquito Inlet (N)</option>" +
        "<option>CAPE HOWE</option>" +
        "<option>IRON PRINCE</option>" +
        "<option>GABO-TULLABERGO</option>" +
        "<option>MALLACOOTA SPIT</option>" +
        "<option>MAIN - BASTION POINT</option>" +
        "<option>BETKA (SURF)</option>" +
        "<option>BETKA SOUTH</option>" +
        "<option>BEACH 8</option>" +
        "<option>TOWER</option>" +
        "<option>QUARRY</option>" +
        "<option>SEA CAVE NORTH</option>" +
        "<option>SEA CAVE MAIN</option>" +
        "<option>COBBLE</option>" +
        "<option>BOULDER</option>" +
        "<option>SHIP WRECK CREEK NORTH</option>" +
        "<option>SHIP WRECK CREEK</option>" +
        "<option>BEACH 17</option>" +
        "<option>BEACH 18</option>" +
        "<option>SEAL CREEK NORTH</option>" +
        "<option>SEAL CREEK MID</option>" +
        "<option>SEAL CREEK</option>" +
        "<option>LITTLE RAME HEAD 1</option>" +
        "<option>LITTLE RAME HEAD 2</option>" +
        "<option>LITTLE RAME HEAD 3</option>" +
        "<option>LITTLE RAME HEAD 4</option>" +
        "<option>LITTLE RAME HEAD 5</option>" +
        "<option>LITTLE RAME HEAD 6</option>" +
        "<option>BENEDORE RIVER 1</option>" +
        "<option>BENEDORE RIVER 2</option>" +
        "<option>BENEDORE RIVER 3</option>" +
        "<option>BENEDORE RIVER 4</option>" +
        "<option>RED RIVER 1</option>" +
        "<option>RED RIVER 2</option>" +
        "<option>RED RIVER 3</option>" +
        "<option>RED RIVER 4</option>" +
        "<option>EASBY 1</option>" +
        "<option>EASBY 2</option>" +
        "<option>EASBY 3</option>" +
        "<option>WINGAN POINT NORTH</option>" +
        "<option>WINGAN POINT</option>" +
        "<option>WINGAN INLET</option>" +
        "<option>WINGAN</option>" +
        "<option>RAME HEAD  1</option>" +
        "<option>RAME HEAD  2</option>" +
        "<option>RAME HEAD  3</option>" +
        "<option>PETREL POINT EAST 1</option>" +
        "<option>PETREL POINT EAST 2</option>" +
        "<option>PETREL POINT WEST 1</option>" +
        "<option>PETREL POINT WEST 2 (GALE)</option>" +
        "<option>PETREL POINT WEST 3</option>" +
        "<option>PETREL POINT WEST 4</option>" +
        "<option>PETREL POINT WEST 5</option>" +
        "<option>PETREL POINT WEST 6</option>" +
        "<option>MUELLER RIVER</option>" +
        "<option>MUELLER RIVER SOUTH</option>" +
        "<option>THURRA</option>" +
        "<option>THURRA SOUTH</option>" +
        "<option>POINT HICKS EAST</option>" +
        "<option>POINT HICKS WEST 1</option>" +
        "<option>POINT HICKS WEST 2</option>" +
        "<option>POINT HICKS - CLINTON ROCKS</option>" +
        "<option>CLINTON ROCKS WEST 1</option>" +
        "<option>CLINTON ROCKS WEST 2</option>" +
        "<option>CLINTON ROCKS WEST 3</option>" +
        "<option>TAMBOON INLET</option>" +
        "<option>TAMBOON - SYDENHAM INLET</option>" +
        "<option>BEMM RIVER</option>" +
        "<option>PEARL POINT EAST</option>" +
        "<option>Dock Inlet-Yerrung</option>" +
        "<option>DOCK INLET</option>" +
        "<option>YERRUNG</option>" +
        "<option>EAST CAPE</option>" +
        "<option>COWRIE BAY</option>" +
        "<option>SALMON ROCKS</option>" +
        "<option>CAPE CONRAN - POINT RICARDO</option>" +
        "<option>POINT RICARDO - MARLO</option>" +
        "<option>Corringle-Pettman</option>" +
        "<option>CORRINGLE</option>" +
        "<option>EWINGS MARSH</option>" +
        "<option>PETTMAN - LAKE TYERS</option>" +
        "<option>SHELLY</option>" +
        "<option>EASTERN</option>" +
        "<option>Main Beach</option>" +
        "<option>Eastern</option>" +
        "<option>Ninety Mile Beach</option>" +
        "<option>BARRIER LANDING</option>" +
        "<option>SECOND BLOWHOLE</option>" +
        "<option>FIRST BLOW HOLE</option>" +
        "<option>BUNGA ARM</option>" +
        "<option>STEAMER LANDING</option>" +
        "<option>OCEAN GRANGE</option>" +
        "<option>LAKE REEVE</option>" +
        "<option>LOCHS PORT/STOCKYARD HILL</option>" +
        "<option>PARADISE</option>" +
        "<option>GOLDEN</option>" +
        "<option>DELRAY</option>" +
        "<option>THE WRECK</option>" +
        "<option>FLAMINGO</option>" +
        "<option>GLOMAR</option>" +
        "<option>THE HONEYSUCKLES</option>" +
        "<option>SEASPRAY</option>" +
        "<option>LAKE DENISON</option>" +
        "<option>MCGAURANS</option>" +
        "<option>JACK SMITH LAKE</option>" +
        "<option>WOODSIDE</option>" +
        "<option>REEVES</option>" +
        "<option>MCLAUGHLINS</option>" +
        "<option>SHOAL INLET ISLAND</option>" +
        "<option>SHALLOW INLET ISLAND</option>" +
        "<option>CLONMEL ISLAND</option>" +
        "<option>CLONMEL BANKS</option>" +
        "<option>Snake Island</option>" +
        "<option>SNAKE ISLAND  EAST</option>" +
        "<option>SNAKE ISLAND  WEST</option>" +
        "<option>SHELTER COVE WEST</option>" +
        "<option>SHELTER COVE EAST</option>" +
        "<option>BIDDIES COVE</option>" +
        "<option>ENTRANCE POINT</option>" +
        "<option>ENTRANCE POINT SOUTH</option>" +
        "<option>HUNTER POINT SOUTH</option>" +
        "<option>THREE MILE</option>" +
        "<option>ROUNDBACK</option>" +
        "<option>JOHNNY SOUEY COVE</option>" +
        "<option>MONKEY POINT NORTH</option>" +
        "<option>MIRANDA BAY</option>" +
        "<option>FIVE MILE</option>" +
        "<option>SEALERS COVE</option>" +
        "<option>SMITH COVE</option>" +
        "<option>REFUGE COVE NORTH</option>" +
        "<option>REFUGE COVE SOUTH</option>" +
        "<option>LARKIN COVE</option>" +
        "<option>BARE BACK COVE</option>" +
        "<option>NORTH WATERLOO BAY EAST</option>" +
        "<option>NORTH WATERLOO BAY WEST</option>" +
        "<option>LITTLE WATERLOO BAY</option>" +
        "<option>WATERLOO BAY</option>" +
        "<option>HOME COVE</option>" +
        "<option>OBERON BAY</option>" +
        "<option>LITTLE OBERON BAY</option>" +
        "<option>TIDAL RIVER/NORMAN</option>" +
        "<option>SQUEAKY</option>" +
        "<option>LEONARD BAY 1</option>" +
        "<option>LEONARD BAY 2</option>" +
        "<option>PICNIC BAY</option>" +
        "<option>WHISKY BAY</option>" +
        "<option>TONGUE POINT</option>" +
        "<option>FAIRY COVE</option>" +
        "<option>DARBY BAY</option>" +
        "<option>DARBY/COTTERS</option>" +
        "<option>Waratah Bay</option>" +
        "<option>SANDY POINT (WARATAH BAY)</option>" +
        "<option>WARATAH BAY</option>" +
        "<option>COOKS CREEK</option>" +
        "<option>PONY CREEK</option>" +
        "<option>WALKERVILLE NORTH</option>" +
        "<option>THE BLUFF</option>" +
        "<option>WALKERVILLE</option>" +
        "<option>BIRD ROCK NORTH</option>" +
        "<option>BIRD ROCK SOUTH</option>" +
        "<option>DIGGERS ISLAND NORTH</option>" +
        "<option>DIGGERS ISLAND SOUTH</option>" +
        "<option>BELL POINT NORTH</option>" +
        "<option>BELL POINT</option>" +
        "<option>BELL POINT SOUTH</option>" +
        "<option>BELL POINT BOULDER</option>" +
        "<option>MAITLAND</option>" +
        "<option>GRINDER POINT EAST</option>" +
        "<option>GRINDER POINT WEST</option>" +
        "<option>CAPE LIPTRAP</option>" +
        "<option>MORGAN</option>" +
        "<option>ARCH ROCK 1</option>" +
        "<option>ARCH ROCK 2</option>" +
        "<option>TEN MILE CREEK</option>" +
        "<option>VENUS BAY</option>" +
        "<option>INVERLOCH</option>" +
        "<option>POINT HUGHES</option>" +
        "<option>MAIN (SURF BEACH)</option>" +
        "<option>PETREL ROCK</option>" +
        "<option>THE CAVES 1</option>" +
        "<option>THE CAVES 2</option>" +
        "<option>EAGLES NEST</option>" +
        "<option>SHACK BAY</option>" +
        "<option>TWIN REEFS</option>" +
        "<option>OAKS EAST</option>" +
        "<option>THE OAKS</option>" +
        "<option>UNDERTOW BAY</option>" +
        "<option>THE BAY</option>" +
        "<option>THE CHANNEL</option>" +
        "<option>CAPE PATERSON\FIRST SURF</option>" +
        "<option>SECOND SURF</option>" +
        "<option>WRECK BAY</option>" +
        "<option>COAL POINT EAST</option>" +
        "<option>COAL POINT WEST</option>" +
        "<option>CUTLERS</option>" +
        "<option>WILLIAMSONS</option>" +
        "<option>POWLETT RIVER EAST</option>" +
        "<option>POWLETT RIVER WEST</option>" +
        "<option>KILCUNDA EAST</option>" +
        "<option>KILCUNDA WEST 1</option>" +
        "<option>KILCUNDA WEST 2</option>" +
        "<option>SHELLY</option>" +
        "<option>BEACH 169</option>" +
        "<option>BEACH 170</option>" +
        "<option>BEACH 171</option>" +
        "<option>BEACH 172</option>" +
        "<option>BEACH 173</option>" +
        "<option>PUNCHBOWL</option>" +
        "<option>BEACH 175</option>" +
        "<option>BACK</option>" +
        "<option>GRIFFITH POINT</option>" +
        "<option>BONSWICK</option>" +
        "<option>BEACH 179</option>" +
        "<option>BACK</option>" +
        "<option>CHILDRENS</option>" +
        "<option>SAN REMO</option>" +
        "<option>NEW HAVEN/HOMESTEAD</option>" +
        "<option>WOOLAMAI SAFETY</option>" +
        "<option>CAPE WOOLAMAI NORTH 1</option>" +
        "<option>CAPE WOOLAMAI NORTH 2</option>" +
        "<option>CAPE WOOLAMAI SOUTH</option>" +
        "<option>MAGIC LANDS</option>" +
        "<option>MAGIC LANDS WEST</option>" +
        "<option>WOOLAMAI</option>" +
        "<option>THE COLONNADES</option>" +
        "<option>FORREST CAVES</option>" +
        "<option>FORREST BLUFF EAST</option>" +
        "<option>FORREST BLUFF WEST</option>" +
        "<option>SURF</option>" +
        "<option>SURFIES POINT EAST</option>" +
        "<option>SURFIES POINT WEST</option>" +
        "<option>SUNDERLAND BAY</option>" +
        "<option>SMITH</option>" +
        "<option>YCW</option>" +
        "<option>THE GAP</option>" +
        "<option>RACETRACK</option>" +
        "<option>JESSIE</option>" +
        "<option>STORM BAY</option>" +
        "<option>BERRY</option>" +
        "<option>HUTCHINSON</option>" +
        "<option>THORNY</option>" +
        "<option>KITTY MILLER BAY</option>" +
        "<option>SUMMERLAND BAY</option>" +
        "<option>COWRIE BAY</option>" +
        "<option>SHELLY</option>" +
        "<option>FLYNN</option>" +
        "<option>FARM</option>" +
        "<option>WOOLSHED</option>" +
        "<option>ANGELINA</option>" +
        "<option>HEN AND CHICKEN</option>" +
        "<option>ELIZABETH COVE</option>" +
        "<option>VENTNOR</option>" +
        "<option>SALTWATER CREEK</option>" +
        "<option>RED ROCK WEST</option>" +
        "<option>RED ROCK EAST</option>" +
        "<option>SHEOAK</option>" +
        "<option>YACHT CLUB</option>" +
        "<option>MUSSEL ROCKS</option>" +
        "<option>COWES</option>" +
        "<option>OBSERVATION</option>" +
        "<option>NAVY/SANDY POINT</option>" +
        "<option>SOUTH</option>" +
        "<option>SOMERS</option>" +
        "<option>BALNARRING</option>" +
        "<option>BALNARRING WEST</option>" +
        "<option>MERRICKS</option>" +
        "<option>EAST CREEK</option>" +
        "<option>POINT LEO</option>" +
        "<option>POINT LEO POINT</option>" +
        "<option>POINT LEO SURF</option>" +
        "<option>SHOREHAM CAMPING</option>" +
        "<option>SHOREHAM</option>" +
        "<option>PINES</option>" +
        "<option>BEACH 240</option>" +
        "<option>MUSK CREEK</option>" +
        "<option>MORNINGTON PARK</option>" +
        "<option>DODDS CREEK</option>" +
        "<option>KENNON COVE</option>" +
        "<option>PILOT STATION</option>" +
        "<option>OCEAN</option>" +
        "<option>TEA TREE CREEK</option>" +
        "<option>CAIRNS BAY</option>" +
        "<option>SIMMONS BAY</option>" +
        "<option>BUSHRANGER BAY</option>" +
        "<option>FINGAL 1</option>" +
        "<option>FINGAL 2</option>" +
        "<option>GUNNAMATTA</option>" +
        "<option>ST ANDREWS</option>" +
        "<option>RYE OCEAN</option>" +
        "<option>ORR POINT</option>" +
        "<option>NUMBER 16</option>" +
        "<option>DIMMICKS 1</option>" +
        "<option>DIMMICKS 2</option>" +
        "<option>PEARSES 1</option>" +
        "<option>PEARSES 2</option>" +
        "<option>BRIDGEWATER BAY</option>" +
        "<option>FOWLERS</option>" +
        "<option>MONTFORTS</option>" +
        "<option>KOONYA</option>" +
        "<option>DIAMOND BAY</option>" +
        "<option>ST PAULS</option>" +
        "<option>SORRENTO OCEAN (BACK)</option>" +
        "<option>PORTSEA (BACK)</option>" +
        "<option>LONDON BRIDGE 1</option>" +
        "<option>LONDON BRIDGE 2</option>" +
        "<option>BEACH 272</option>" +
        "<option>BEACH 273</option>" +
        "<option>BEACH 274</option>" +
        "<option>BEACH 275</option>" +
        "<option>RIFLE RANGE</option>" +
        "<option>CHEVIOT</option>" +
        "<option>PEARCE HILL</option>" +
        "<option>NEPEAN HILL</option>" +
        "<option>POINT NEPEAN</option>" +
        "<option>STEPS BEACH</option>" +
        "<option>POINT LONSDALE (BACK) SURF</option>" +
        "<option>Collendina - Raffs</option>" +
        "<option>COLLENDINA</option>" +
        "<option>OCEAN GROVE</option>" +
        "<option>RAFFS</option>" +
        "<option>BARWON RIVER</option>" +
        "<option>POINT FLINDERS</option>" +
        "<option>BARWON HEADS 1</option>" +
        "<option>BARWON HEADS 2</option>" +
        "<option>13TH</option>" +
        "<option>BLACK ROCKS</option>" +
        "<option>BANCOORA</option>" +
        "<option>BUCKLEYS BAY</option>" +
        "<option>BREAMLEA</option>" +
        "<option>POINT IMPOSSIBLE</option>" +
        "<option>WHITES</option>" +
        "<option>FISHERMANS</option>" +
        "<option>FRONT</option>" +
        "<option>TORQUAY</option>" +
        "<option>JAN JUC</option>" +
        "<option>PRINCES STREET</option>" +
        "<option>BEACH 300</option>" +
        "<option>DEADMAN</option>" +
        "<option>BELLS</option>" +
        "<option>SOUTHSIDE</option>" +
        "<option>ADDISCOT</option>" +
        "<option>POINT ADDISS</option>" +
        "<option>BLACK ROCKS</option>" +
        "<option>EUMERALLA</option>" +
        "<option>DEMONS BLUFF</option>" +
        "<option>ANGLESEA RIVER</option>" +
        "<option>ANGLESEA</option>" +
        "<option>SOAPY ROCKS</option>" +
        "<option>POINT ROADKNIGHT</option>" +
        "<option>POINT ROADKNIGHT 'POINT'</option>" +
        "<option>URQUHART BLUFF</option>" +
        "<option>URQUHART BLUFF SOUTH</option>" +
        "<option>BEACH 316</option>" +
        "<option>BEACH 317</option>" +
        "<option>BEACH 318</option>" +
        "<option>BEACH 319</option>" +
        "<option>EAGLE NEST REEF NORTH</option>" +
        "<option>EAGLE NEST REEF SOUTH</option>" +
        "<option>AIREYS INLET</option>" +
        "<option>AIREYS INLET SOUTH</option>" +
        "<option>BEACH 324</option>" +
        "<option>EAGLE ROCK</option>" +
        "<option>SPLIT ROCK</option>" +
        "<option>TABLE ROCK</option>" +
        "<option>FAIRHAVEN</option>" +
        "<option>CINEMA POINT NORTH</option>" +
        "<option>CINEMA POINT</option>" +
        "<option>CARYARD</option>" +
        "<option>CATHEDRAL ROCKS</option>" +
        "<option>BEACH 333</option>" +
        "<option>REEDY CREEK</option>" +
        "<option>NORTH LORNE</option>" +
        "<option>LORNE</option>" +
        "<option>LORNE JETTY</option>" +
        "<option>POINT GREY</option>" +
        "<option>SHELLY</option>" +
        "<option>ST GEORGE RIVER</option>" +
        "<option>SHEOAK CREEK</option>" +
        "<option>CUMBERLAND RIVER NORTH</option>" +
        "<option>CUMBERLAND RIVER</option>" +
        "<option>JAMIESON CREEK</option>" +
        "<option>ARTILLERY ROCKS</option>" +
        "<option>GODFREY CREEK</option>" +
        "<option>BEACH 347</option>" +
        "<option>BOGGALEY CREEK</option>" +
        "<option>SEPARATION CREEK</option>" +
        "<option>SEPARATION CREEK SOUTH</option>" +
        "<option>WYE RIVER</option>" +
        "<option>WYE RIVER SOUTH</option>" +
        "<option>POINT STURT SOUTH 1</option>" +
        "<option>POINT STURT SOUTH 2</option>" +
        "<option>VIEW POINT</option>" +
        "<option>MONASH GULLY</option>" +
        "<option>BEACH 357</option>" +
        "<option>HITCHCOCK GULLY</option>" +
        "<option>KENNETT RIVER</option>" +
        "<option>POINT HAWDON</option>" +
        "<option>ADDIS BAY 1</option>" +
        "<option>ADDIS BAY 2</option>" +
        "<option>GREY RIVER</option>" +
        "<option>SHRAPNEL GULLY</option>" +
        "<option>CAPE PATTON</option>" +
        "<option>CARISBROOK CREEK</option>" +
        "<option>SAN JOSE</option>" +
        "<option>SUGARLOAF</option>" +
        "<option>WHITE CREST</option>" +
        "<option>SMYTHE CREEK</option>" +
        "<option>BEACH 371</option>" +
        "<option>BROWNS CREEK</option>" +
        "<option>BEACH 373</option>" +
        "<option>BEACH 374</option>" +
        "<option>SKENES CREEK</option>" +
        "<option>BEACH 376</option>" +
        "<option>SEAFARER</option>" +
        "<option>APOLLO BAY</option>" +
        "<option>APOLLO BAY HARBOUR</option>" +
        "<option>BORROW</option>" +
        "<option>POINT BUNBURY</option>" +
        "<option>MOUNTS BAY</option>" +
        "<option>MARENGO</option>" +
        "<option>SWELL POINT</option>" +
        "<option>STORM POINT NORTH</option>" +
        "<option>STORM POINT SOUTH</option>" +
        "<option>THE BLOWHOLE SOUTH 1</option>" +
        "<option>THE BLOWHOLE SOUTH 2</option>" +
        "<option>BEACH 389</option>" +
        "<option>SHELLY NORTH</option>" +
        "<option>SHELLY</option>" +
        "<option>GEARY RIVER</option>" +
        "<option>GEARY RIVER SOUTH</option>" +
        "<option>BEACH 394</option>" +
        "<option>BEACH 395</option>" +
        "<option>BEACH 396</option>" +
        "<option>BLANKET BAY NORTH</option>" +
        "<option>BLANKET BAY</option>" +
        "<option>PARKER RIVER</option>" +
        "<option>ERIC THE RED</option>" +
        "<option>BEACH 401</option>" +
        "<option>POINT FRANKLIN EAST</option>" +
        "<option>POINT FRANKLIN WEST</option>" +
        "<option>SEAL POINT</option>" +
        "<option>CRAYFISH BAY</option>" +
        "<option>CRAYFISH BAY WEST</option>" +
        "<option>CRAYFISH POINT</option>" +
        "<option>KELP COVE</option>" +
        "<option>SHELLY</option>" +
        "<option>OTWAY COVE</option>" +
        "<option>POINT FLINDERS</option>" +
        "<option>STATION</option>" +
        "<option>GLENAIRE EAST</option>" +
        "<option>GLENAIRE</option>" +
        "<option>SENTINEL ROCKS</option>" +
        "<option>EAGLE NEST ROCK</option>" +
        "<option>CASTLE COVE EAST</option>" +
        "<option>CASTLE COVE</option>" +
        "<option>DINOSAUR COVE</option>" +
        "<option>JOHANNA</option>" +
        "<option>SLIPPERY POINT</option>" +
        "<option>SUTHERLAND</option>" +
        "<option>DEEP CREEK</option>" +
        "<option>MILANESIA</option>" +
        "<option>CAPE VOLNEY</option>" +
        "<option>THE GABLE</option>" +
        "<option>WRECK</option>" +
        "<option>MOONLIGHT</option>" +
        "<option>OLIVER HILL</option>" +
        "<option>PEBBLE POINT</option>" +
        "<option>GELLIBRAND EAST 1</option>" +
        "<option>GELLIBRAND EAST 2</option>" +
        "<option>GELLIBRAND EAST 3</option>" +
        "<option>GELLIBRAND EAST 4</option>" +
        "<option>GELLIBRAND</option>" +
        "<option>POINT RONALD</option>" +
        "<option>BEACH 437</option>" +
        "<option>BEACH 438</option>" +
        "<option>BROWN HILL</option>" +
        "<option>GIBSON</option>" +
        "<option>GIBSON STEPS</option>" +
        "<option>TWELVE APOSTLES</option>" +
        "<option>BEACH 443</option>" +
        "<option>BRIDGE ISLAND</option>" +
        "<option>LOCH ARD GORGE</option>" +
        "<option>BROKEN HEAD</option>" +
        "<option>SHERBROOK CREEK</option>" +
        "<option>RUTLEDGE CREEK</option>" +
        "<option>BEACH 449</option>" +
        "<option>SENTINEL ROCK</option>" +
        "<option>PORT CAMPBELL</option>" +
        "<option>SHELLY</option>" +
        "<option>TWO MILE BAY CENTRE</option>" +
        "<option>TWO MILE BAY  WEST</option>" +
        "<option>LONDON BRIDGE</option>" +
        "<option>LONDON BRIDGE WEST</option>" +
        "<option>NEWFIELD BAY</option>" +
        "<option>PETERBOROUGH</option>" +
        "<option>JAMES IRVINE</option>" +
        "<option>WATER TOWER</option>" +
        "<option>WILD DOG COVE 1</option>" +
        "<option>WILD DOG COVE 2</option>" +
        "<option>WILD DOG COVE 3</option>" +
        "<option>WILD DOG COVE 4</option>" +
        "<option>WILD DOG COVE 5</option>" +
        "<option>BEACH 466</option>" +
        "<option>FALLS OF HALLADALE 1</option>" +
        "<option>FALLS OF HALLADALE 2</option>" +
        "<option>WORM BAY</option>" +
        "<option>BAY OF MARTYRS</option>" +
        "<option>MASSACRE HILL</option>" +
        "<option>MASSACRE BAY 1</option>" +
        "<option>MASSACRE BAY 2</option>" +
        "<option>MASSACRE BAY 3</option>" +
        "<option>BEACH 475</option>" +
        "<option>BEACH 476</option>" +
        "<option>CROFTS BAY</option>" +
        "<option>BEACH 478</option>" +
        "<option>BEACH 479</option>" +
        "<option>BAY OF ISLANDS BOAT RAMP</option>" +
        "<option>BEACH 481</option>" +
        "<option>BEACH 482</option>" +
        "<option>BEACH 483</option>" +
        "<option>RADFORDS</option>" +
        "<option>BEACH 485</option>" +
        "<option>FLAXMAN HILL</option>" +
        "<option>FLAXMAN</option>" +
        "<option>BUTTRESS POINT</option>" +
        "<option>STANHOPE BAY</option>" +
        "<option>DOG TRAP BAY</option>" +
        "<option>BUCKLEY CREEK</option>" +
        "<option>MURANE BAY</option>" +
        "<option>CHILDERS COVE</option>" +
        "<option>BEACH 494</option>" +
        "<option>BEACH 495</option>" +
        "<option>BEACH 496</option>" +
        "<option>BEACH 497</option>" +
        "<option>BEACH 498</option>" +
        "<option>LOGANS</option>" +
        "<option>WARRNAMBOOL</option>" +
        "<option>MERRI</option>" +
        "<option>BEACH 502</option>" +
        "<option>SHELLY</option>" +
        "<option>ARMSTRONG BAY/LEVY POINT</option>" +
        "<option>BELFAST</option>" +
        "<option>THE BASIN EAST</option>" +
        "<option>THE BASIN WEST</option>" +
        "<option>SISTER POINT</option>" +
        "<option>KILLARNEY</option>" +
        "<option>REEF POINT</option>" +
        "<option>PORT FAIRY</option>" +
        "<option>SOUTH MOLE</option>" +
        "<option>GRIFFITHS ISLAND</option>" +
        "<option>PEA SOUP/SOUTH</option>" +
        "<option>BEACH 515</option>" +
        "<option>BEACH 516</option>" +
        "<option>BEACH 517</option>" +
        "<option>BEACH 518</option>" +
        "<option>BEACH 519</option>" +
        "<option>BEACH 520</option>" +
        "<option>BEACH 521</option>" +
        "<option>CAPE REAMUR</option>" +
        "<option>MC KECHNIE CRAIG</option>" +
        "<option>BEACH 524</option>" +
        "<option>BEACH 525</option>" +
        "<option>BEACH 526</option>" +
        "<option>BEACH 527</option>" +
        "<option>BEACH 528</option>" +
        "<option>THE CRAIGS EAST</option>" +
        "<option>THE CRAIGS WEST 1</option>" +
        "<option>THE CRAIGS WEST 2</option>" +
        "<option>BEACH 532</option>" +
        "<option>HUMMOCKS</option>" +
        "<option>YAMBUK</option>" +
        "<option>EUMERALLA</option>" +
        "<option>FITZROY RIVER</option>" +
        "<option>SURF</option>" +
        "<option>ANDERSON POINT</option>" +
        "<option>WHALERS POINT</option>" +
        "<option>NUNNS</option>" +
        "<option>HENTY PARK</option>" +
        "<option>PIVOT</option>" +
        "<option>BLACK NOSE POINT</option>" +
        "<option>GRANT BAY</option>" +
        "<option>NELSON BAY 1</option>" +
        "<option>NELSON BAY 2</option>" +
        "<option>NELSON BAY 3</option>" +
        "<option>BRIDGEWATER BAY 1</option>" +
        "<option>BRIDGEWATER BAY 2</option>" +
        "<option>BRIDGEWATER BAY 3</option>" +
        "<option>BRIDGEWATER BAY CENTRE</option>" +
        "<option>SHELLY 1</option>" +
        "<option>SHELLY 2</option>" +
        "<option>BRIDGEWATER BAY SURF</option>" +
        "<option>FISHERMAN COVE</option>" +
        "<option>WHITES</option>" +
        "<option>DESCARTES/DISCOVERY BAY</option>" +
        "<option>NOBLES ROCKS</option>" +
        "<option>DISCOVERY BAY/NELSON</option>" +
        "<option>DISCOVERY BAY WEST/GLENELG RIVER WE</option>" +
        "<option>Apex Park</option>" +
        "<option>POINT NEPEAN JETTY</option>" +
        "<option>NEPEAN BAY 1</option>" +
        "<option>NEPEAN BAY 2</option>" +
        "<option>NEPEAN BAY 3</option>" +
        "<option>OBSERVATORY POINT</option>" +
        "<option>TICONDEROGA BAY</option>" +
        "<option>CADET</option>" +
        "<option>WEROONA BAY (PORTSEA)</option>" +
        "<option>SHELLY</option>" +
        "<option>POINT MACARTHUR</option>" +
        "<option>POINT KING 1</option>" +
        "<option>POINT KING 2</option>" +
        "<option>SORRENTO PARK</option>" +
        "<option>SORRENTO FRONT</option>" +
        "<option>SULLIVAN BAY</option>" +
        "<option>BLAIRGOWRIE</option>" +
        "<option>Rye - Safety</option>" +
        "<option>RYE</option>" +
        "<option>ROSEBUD</option>" +
        "<option>DROMANA</option>" +
        "<option>SAFETY</option>" +
        "<option>MOUNT MARTHA POINT</option>" +
        "<option>MOUNT MARTHA SOUTH</option>" +
        "<option>MOUNT MARTHA NORTH</option>" +
        "<option>HAWKER</option>" +
        "<option>CRAIGIE</option>" +
        "<option>BIRDROCK</option>" +
        "<option>DAVA</option>" +
        "<option>FOSSIL</option>" +
        "<option>FOSTERS</option>" +
        "<option>FISHERMANS</option>" +
        "<option>ROYAL</option>" +
        "<option>MOTHERS/SCOUT/SHIRE HALL</option>" +
        "<option>MILLS</option>" +
        "<option>MILLS EAST</option>" +
        "<option>CARAAR</option>" +
        "<option>SUNNYSIDE</option>" +
        "<option>SUNNYSIDE NORTH</option>" +
        "<option>MOONDAH</option>" +
        "<option>EARIMIL</option>" +
        "<option>RANELAGH</option>" +
        "<option>HALF MOON BAY</option>" +
        "<option>CANADIAN BAY</option>" +
        "<option>PELICAN POINT</option>" +
        "<option>DAVEYS BAY</option>" +
        "<option>KACKERABOITE CREEK</option>" +
        "<option>Frankston-Carrum</option>" +
        "<option>FRANKSTON</option>" +
        "<option>SEAFORD</option>" +
        "<option>CARRUM</option>" +
        "<option>Bonbeach-Aspendale</option>" +
        "<option>BONBEACH</option>" +
        "<option>CHELSEA</option>" +
        "<option>EDITHVALE</option>" +
        "<option>ASPENDALE</option>" +
        "<option>Mordialloc-Mentone</option>" +
        "<option>MORDIALLOC</option>" +
        "<option>PARKDALE</option>" +
        "<option>MENTONE</option>" +
        "<option>BEAUMARIS</option>" +
        "<option>BEAUMARIS YACHT CLUB</option>" +
        "<option>BEAUMARIS NORTH</option>" +
        "<option>QUIET CORNER</option>" +
        "<option>BLACK ROCK</option>" +
        "<option>BLACK ROCK POINT</option>" +
        "<option>HALF MOON BAY</option>" +
        "<option>SANDRINGHAM</option>" +
        "<option>HAMPTON</option>" +
        "<option>BRIGHTON</option>" +
        "<option>HOLLOWAY</option>" +
        "<option>DENDY STREET</option>" +
        "<option>MIDDLE BRIGHTON</option>" +
        "<option>MIDDLE BRIGHTON BATHS</option>" +
        "<option>SANDON STREET</option>" +
        "<option>ELWOOD</option>" +
        "<option>ST KILDA MARINA</option>" +
        "<option>ST KILDA</option>" +
        "<option>St Kilda Pier-Port Melbourne</option>" +
        "<option>ST KILDA PIER</option>" +
        "<option>MIDDLE PARK</option>" +
        "<option>SOUTH MELBOURNE</option>" +
        "<option>PORT MELBOURNE</option>" +
        "<option>STATION PIER</option>" +
        "<option>SANDRIDGE</option>" +
        "<option>WEBB DOCK</option>" +
        "<option>POINT GELLIBRAND</option>" +
        "<option>WILLIAMSTOWN</option>" +
        "<option>ALTONA (BURNS RESERVE)</option>" +
        "<option>ALTONA (CRESSER)</option>" +
        "<option>ALTONA (MAIN)</option>" +
        "<option>SKELETON CREEK</option>" +
        "<option>POINT COOK NORTH</option>" +
        "<option>POINT COOK HOMESTEAD</option>" +
        "<option>Point Cook South</option>" +
        "<option>POINT COOK SOUTH 1</option>" +
        "<option>POINT COOK SOUTH 2</option>" +
        "<option>CAMPBELLS COVE NORTH</option>" +
        "<option>CAMPBELLS COVE SOUTH</option>" +
        "<option>DUNCANS ROAD NORTH</option>" +
        "<option>DUNCANS ROAD SOUTH</option>" +
        "<option>WERRIBEE SOUTH</option>" +
        "<option>WERRIBEE SEWER FARM NORTH</option>" +
        "<option>WERRIBEE SEWER FARM SOUTH</option>" +
        "<option>LAKE BOWRIE</option>" +
        "<option>BEACON POINT</option>" +
        "<option>BEACON POINT BOAT RAMP</option>" +
        "<option>KIRK POINT</option>" +
        "<option>KIRK POINT WEST</option>" +
        "<option>SAND HUMMOCKS NORTH</option>" +
        "<option>SAND HUMMOCKS MID</option>" +
        "<option>SAND HUMMOCKS SOUTH</option>" +
        "<option>POINT WILSON NORTH</option>" +
        "<option>POINT WILSON EAST</option>" +
        "<option>POINT WILSON WEST</option>" +
        "<option>SNAKE ISLAND</option>" +
        "<option>SNAKE ISLAND WEST 1</option>" +
        "<option>SNAKE ISLAND WEST 2</option>" +
        "<option>AVALON</option>" +
        "<option>POINT ABEONA</option>" +
        "<option>GEELONG GRAMMAR</option>" +
        "<option>MOORPANYAL PARK</option>" +
        "<option>ST HELENS</option>" +
        "<option>RIPPLESIDE</option>" +
        "<option>WESTERN</option>" +
        "<option>EASTERN</option>" +
        "<option>POINT HENRY</option>" +
        "<option>SEABRAE-SANDS</option>" +
        "<option>GRAND SCENIC</option>" +
        "<option>HERMSLEY</option>" +
        "<option>CLIFTON SPRINGS WEST</option>" +
        "<option>CLIFTON SPRINGS MAIN</option>" +
        "<option>CLIFTON SPRINGS EAST</option>" +
        "<option>POINT RICHARDS WEST</option>" +
        "<option>PORTARLINGTON</option>" +
        "<option>PORTARLINGTON JETTY</option>" +
        "<option>STEELES WEST</option>" +
        "<option>STEELES</option>" +
        "<option>STEELES EAST</option>" +
        "<option>GRASSY POINT WEST</option>" +
        "<option>GRASSY/ POINT GEORGE</option>" +
        "<option>POINT GEORGE SOUTH</option>" +
        "<option>HALF MOON BAY</option>" +
        "<option>HOOD BIGHT</option>" +
        "<option>ST LEONARDS</option>" +
        "<option>ST LEONARDS PIER</option>" +
        "<option>RED BLUFF</option>" +
        "<option>SWAN ISLAND</option>" +
        "<option>SAND ISLAND</option>" +
        "<option>QUEENSCLIFF - PIER BEACH</option>" +
        "<option>LONSDALE BAY - SANTA CASA</option>" +
        "<option>FRONT</option>" +
        "<option>POINT LONSDALE EAST</option>" +
        "<option>Eucla</option>" +
        "<option>Eucla (W)</option>" +
        "<option>Hearder Hill</option>" +
        "<option>Mundrabilla</option>" +
        "<option>Low Pt</option>" +
        "<option>Noonaera</option>" +
        "<option>Red Rock</option>" +
        "<option>Red Rock Point</option>" +
        "<option>Middini Beach</option>" +
        "<option>Mandura</option>" +
        "<option>Scorpion Bight</option>" +
        "<option>Burremul</option>" +
        "<option>Kaniaal Beach</option>" +
        "<option>Kaniaal (W)</option>" +
        "<option>Twilight Cove (E)</option>" +
        "<option>Twilight Cove</option>" +
        "<option>Baxter Cliffs (329 km)</option>" +
        "<option>Toolinna Cove</option>" +
        "<option>Bilbunya (E 4)</option>" +
        "<option>Bilbunya (E 3)</option>" +
        "<option>Bilbunya (E 2)</option>" +
        "<option>Bilbunya (E 1)</option>" +
        "<option>Bilbunya</option>" +
        "<option>Point Lorenzen (E 3)</option>" +
        "<option>Point Lorenzen (E 2)</option>" +
        "<option>Point Lorenzen (E 1)</option>" +
        "<option>Point Lorenzen</option>" +
        "<option>Israelite Bay</option>" +
        "<option>Israelite Bay Spit</option>" +
        "<option>Point Dempster-Malcolm</option>" +
        "<option>Point Malcolm</option>" +
        "<option>Point Malcolm (W 1)</option>" +
        "<option>Point Malcolm (W 2)</option>" +
        "<option>Point Malcolm (W 3)</option>" +
        "<option>Point Malcolm (W 4)</option>" +
        "<option>Point Malcolm (W 5)</option>" +
        "<option>Point Malcolm (W 6)</option>" +
        "<option>Bellinger Is (E 4)</option>" +
        "<option>Bellinger Is (E 3)</option>" +
        "<option>Bellinger Is (E 2)</option>" +
        "<option>Bellinger Is (E 1)</option>" +
        "<option>Bellinger Is</option>" +
        "<option>Bellinger Is (W)</option>" +
        "<option>Marlbemup (W 2)</option>" +
        "<option>Marlbemup (W 1)</option>" +
        "<option>Marlbemup</option>" +
        "<option>Cape Pasley (W 3)</option>" +
        "<option>Cape Pasley (W 2)</option>" +
        "<option>Cape Pasley (W 1)</option>" +
        "<option>Cape Pasley (1)</option>" +
        "<option>Cape Pasley (2)</option>" +
        "<option>Cape Pasley (3)</option>" +
        "<option>Sandy Bight</option>" +
        "<option>Sandy Bight (W)</option>" +
        "<option>Fern-Poison Ck</option>" +
        "<option>Seal Ck (N)</option>" +
        "<option>Seal Ck</option>" +
        "<option>Seal Ck (S)</option>" +
        "<option>Jorndee Ck</option>" +
        "<option>Sandy Bight (W 1)</option>" +
        "<option>Sandy Bight (W 2)</option>" +
        "<option>Sandy Bight (W 3)</option>" +
        "<option>Sandy Bight (W 4)</option>" +
        "<option>Sandy Bight (W 5)</option>" +
        "<option>Sandy Bight (W 6)</option>" +
        "<option>Sandy Bight (W 7)</option>" +
        "<option>Sandy Bight (W 8)</option>" +
        "<option>Sandy Bight (W 9)</option>" +
        "<option>Thomas Fishery (E 3)</option>" +
        "<option>Thomas Fishery (E 2)</option>" +
        "<option>Thomas Fishery (E 1)</option>" +
        "<option>Thomas Fishery</option>" +
        "<option>Cape Arid (E)</option>" +
        "<option>Arid Bay (1)</option>" +
        "<option>Arid Bay (2)</option>" +
        "<option>Arid Bay (3)</option>" +
        "<option>Barrier Anchorage</option>" +
        "<option>Jenamullup Ck (1)</option>" +
        "<option>Jenamullup Ck (2)</option>" +
        "<option>Point Jedacorrudup (S 5)</option>" +
        "<option>Point Jedacorrudup (S 4)</option>" +
        "<option>Point Jedacorrudup (S 3)</option>" +
        "<option>Point Jedacorrudup (S 2)</option>" +
        "<option>Point Jedacorrudup (S 1)</option>" +
        "<option>Yokingup Bay (Thomas River)</option>" +
        "<option>Dolphin Cove</option>" +
        "<option>Little Tagon</option>" +
        "<option>Tagon</option>" +
        "<option>Tagon Point (W 1)</option>" +
        "<option>Tagon Point (W 2)</option>" +
        "<option>Kennedys beach</option>" +
        "<option>Kennedys (W)</option>" +
        "<option>Taylor Boat Harbour (W)</option>" +
        "<option>Taylor Boat Harbour</option>" +
        "<option>Alexander Bay (1)</option>" +
        "<option>Alexander Bay (2)</option>" +
        "<option>Alexander Bay (3)</option>" +
        "<option>Ben Island (W 1)</option>" +
        "<option>Ben Island (W 2)</option>" +
        "<option>Ben Island (W 2)</option>" +
        "<option>Menbinup</option>" +
        "<option>Menbinup (W 1)</option>" +
        "<option>Menbinup (W 2)</option>" +
        "<option>Dailey River</option>" +
        "<option>Duke of Orleans Bay</option>" +
        "<option>Duke of Orleans Bay (S)</option>" +
        "<option>Nares Island</option>" +
        "<option>Hammer Head (E 1)</option>" +
        "<option>Hammer Head (E 2)</option>" +
        "<option>Hammer Head (W 1)</option>" +
        "<option>Hammer Head (W 2)</option>" +
        "<option>Hammer Head (W 3)</option>" +
        "<option>Hammer Head (W 4)</option>" +
        "<option>Hammer Head (W 5)</option>" +
        "<option>Wharton Beach</option>" +
        "<option>Chryne Point</option>" +
        "<option>Victoria Harbour (1)</option>" +
        "<option>Victoria Harbour (2)</option>" +
        "<option>Victoria Harbour (W 1)</option>" +
        "<option>Victoria Harbour (W 2)</option>" +
        "<option>Victoria Harbour (W 3)</option>" +
        "<option>Victoria Harbour (W 4)</option>" +
        "<option>Dunn Rocks</option>" +
        "<option>Rossiter Bay</option>" +
        "<option>Rossiter Bay (S 1)</option>" +
        "<option>Rossiter Bay (S 2)</option>" +
        "<option>Mississippi Point</option>" +
        "<option>Mississippi Hill</option>" +
        "<option>Lucky Bay (1)</option>" +
        "<option>Lucky Bay (2)</option>" +
        "<option>Lucky Bay (3)</option>" +
        "<option>Lucky Bay</option>" +
        "<option>Thistle Cove</option>" +
        "<option>Thistle Cove</option>" +
        "<option>Hellfire Bay (E)</option>" +
        "<option>Hellfire Bay</option>" +
        "<option>Cape Le Grand (E 2)</option>" +
        "<option>Cape Le Grand (E 1)</option>" +
        "<option>Cape Le Grand (W)</option>" +
        "<option>Cape Le Grand (N)</option>" +
        "<option>Le Grand Beach</option>" +
        "<option>Wylie Bay</option>" +
        "<option>Wylie Head</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Brandy Creek (E)</option>" +
        "<option>Brandy Creek (W)</option>" +
        "<option>Castletown</option>" +
        "<option>Esplanade</option>" +
        "<option>Yachet Club</option>" +
        "<option>Harbour</option>" +
        "<option>Breakwater</option>" +
        "<option>Lovers Beach</option>" +
        "<option>West-Second Beach</option>" +
        "<option>Blue Haven</option>" +
        "<option>Salmon Beach</option>" +
        "<option>Twilight Beach</option>" +
        "<option>Picnic Cove-Fifth Beach</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Ten Mile Lagoon</option>" +
        "<option>Eleven Mile Beach</option>" +
        "<option>Butty Harbour (1)</option>" +
        "<option>Butty Harbour (2)</option>" +
        "<option>Plumpudding Beach</option>" +
        "<option>Butty Head (E 1)</option>" +
        "<option>Butty Head (E 2)</option>" +
        "<option>Butty Head (W 1)</option>" +
        "<option>Butty Head (W 2)</option>" +
        "<option>Roses-Quallup Beach</option>" +
        "<option>Munroe Point (1)</option>" +
        "<option>Munroe Point (2)</option>" +
        "<option>Munroe Point (3)</option>" +
        "<option>Shelly Beach (1)</option>" +
        "<option>Shelly Beach (2)</option>" +
        "<option>Warrenup (1)</option>" +
        "<option>Warrenup (2)</option>" +
        "<option>Warrenup (3)</option>" +
        "<option>Warrenup (4)</option>" +
        "<option>Barker Inlet</option>" +
        "<option>Quagi (E)</option>" +
        "<option>Quagi Beach</option>" +
        "<option>Quagi (W 1)</option>" +
        "<option>Quagi (W 2)</option>" +
        "<option>Quagi (W 3)</option>" +
        "<option>Fanny Cove</option>" +
        "<option>Shoal Cape (E 2)</option>" +
        "<option>Shoal Cape (E 1)</option>" +
        "<option>Shoal Cape (W 1)</option>" +
        "<option>Shoal Cape (W 2)</option>" +
        "<option>Stokes Inlet (E)</option>" +
        "<option>Stokes Inlet (W)</option>" +
        "<option>Dunster Castle (1)</option>" +
        "<option>Dunster Castle (2)</option>" +
        "<option>Dunster Castle (3)</option>" +
        "<option>Skippy Rocks (W 3)</option>" +
        "<option>Skippy Rocks (W 2)</option>" +
        "<option>Skippy Rocks (W 1)</option>" +
        "<option>Skippy Rocks</option>" +
        "<option>Torradup River (W)</option>" +
        "<option>Torradup River (E)</option>" +
        "<option>Margaret Cove</option>" +
        "<option>Pincer Point (E 5)</option>" +
        "<option>Pincer Point (E 4)</option>" +
        "<option>Pincer Point (E 3)</option>" +
        "<option>Pincer Point (E 2)</option>" +
        "<option>Pincer Point (E 1)</option>" +
        "<option>Pincer Point</option>" +
        "<option>Pincer Point (W 1)</option>" +
        "<option>Pincer Point (W 2)</option>" +
        "<option>Pincer Point (W 3)</option>" +
        "<option>Munglinup (E 5)</option>" +
        "<option>Munglinup (E 4)</option>" +
        "<option>Munglinup (E 3)</option>" +
        "<option>Munglinup (E 2)</option>" +
        "<option>Munglinup (E 1)</option>" +
        "<option>Munglinup Beach</option>" +
        "<option>Munglinup Beach (W 1)</option>" +
        "<option>Munglinup Beach (W 2)</option>" +
        "<option>Lake Shaster 1</option>" +
        "<option>Lake Shaster 2</option>" +
        "<option>Parriup 1</option>" +
        "<option>Parriup 2</option>" +
        "<option>Swan Hill</option>" +
        "<option>Emu Hill 1</option>" +
        "<option>Emu Hill 2</option>" +
        "<option>Emu Hill 3</option>" +
        "<option>Starvation Boat Hbr</option>" +
        "<option>Starvation Boat Hbr 2</option>" +
        "<option>Powell Pt</option>" +
        "<option>Powell Pt (W)</option>" +
        "<option>Mason Bay (E 3)</option>" +
        "<option>Mason Bay (E 2)</option>" +
        "<option>Mason Bay (E 1)</option>" +
        "<option>Mason Bay</option>" +
        "<option>Mason Bay(W 1)</option>" +
        "<option>Mason Bay(W 2)</option>" +
        "<option>Mason Bay(W 3)</option>" +
        "<option>Fifteen Mile</option>" +
        "<option>Fouteen Mile</option>" +
        "<option>Thirteen Mile</option>" +
        "<option>Twelve Mile (E 4)</option>" +
        "<option>Twelve Mile (E 3)</option>" +
        "<option>Twelve Mile (E 2)</option>" +
        "<option>Twelve Mile (E 1)</option>" +
        "<option>Twelve Mile</option>" +
        "<option>Eight Mile</option>" +
        "<option>Seven Mile</option>" +
        "<option>Six Mile</option>" +
        "<option>Five Mile</option>" +
        "<option>Four Mile</option>" +
        "<option>Two Mile (E)</option>" +
        "<option>Two Mile</option>" +
        "<option>Two Mile (W)</option>" +
        "<option>Hopetoun</option>" +
        "<option>Mary Ann Haven</option>" +
        "<option>Whale Bay</option>" +
        "<option>Four Mile Beach (E)</option>" +
        "<option>Four Mile Beach (W 1)</option>" +
        "<option>Four Mile Beach (W 2)</option>" +
        "<option>Barrens Beach</option>" +
        "<option>Barrens (W)</option>" +
        "<option>Mylies Beach</option>" +
        "<option>Cave Pt</option>" +
        "<option>West Beach</option>" +
        "<option>Hammersley Inlet</option>" +
        "<option>Hammersley Inlet (W)</option>" +
        "<option>Whalebone (E)</option>" +
        "<option>Whalebone Beach</option>" +
        "<option>Whalebone (W 1)</option>" +
        "<option>Whalebone (W 2)</option>" +
        "<option>Whalebone (W 3)</option>" +
        "<option>Whalebone (W 4)</option>" +
        "<option>Whalebone (W 5)</option>" +
        "<option>Whalebone (W 6)</option>" +
        "<option>Quoin Head</option>" +
        "<option>Quoin Head (W 1)</option>" +
        "<option>Quoin Head (W 1)</option>" +
        "<option>Marshes Beach</option>" +
        "<option>WA 278</option>" +
        "<option>WA 279</option>" +
        "<option>Twin Bays (E 1)</option>" +
        "<option>Twin Bays (E 2)</option>" +
        "<option>Twin Bays (E 3)</option>" +
        "<option>Twin Bays (E 4)</option>" +
        "<option>Twin Bays (W)</option>" +
        "<option>Twin Bays (W 1)</option>" +
        "<option>Dempster-Fitzgerald Inlets</option>" +
        "<option>Pt Charles Bay</option>" +
        "<option>St Mary Inlet (E)</option>" +
        "<option>St Mary Inlet (W)</option>" +
        "<option>Pt Ann</option>" +
        "<option>Pt Ann (1)</option>" +
        "<option>Pt Ann (2)</option>" +
        "<option>Cheadanup Cliffs (1)</option>" +
        "<option>Cheadanup Cliffs (2)</option>" +
        "<option>Cheadanup Cliffs (3)</option>" +
        "<option>Cheadanup Cliffs (4)</option>" +
        "<option>Trigelow Beach</option>" +
        "<option>Tooregullup Beach</option>" +
        "<option>House Beach</option>" +
        "<option>Corner Cove</option>" +
        "<option>Whalebone Pt</option>" +
        "<option>Point Hood (1)</option>" +
        "<option>Point Hood (2)</option>" +
        "<option>Peppermint Beach</option>" +
        "<option>Bremer Beach</option>" +
        "<option>John Cove</option>" +
        "<option>Back Beach</option>" +
        "<option>Fishery Beach</option>" +
        "<option>Short Beach</option>" +
        "<option>Banky Beach</option>" +
        "<option>Point Henry</option>" +
        "<option>Little Boat Harbour</option>" +
        "<option>Little Boat Harbour (N)</option>" +
        "<option>Blossoms Beach</option>" +
        "<option>Native Dog Beach</option>" +
        "<option>Dillon Beach</option>" +
        "<option>Dillon Beach (W)</option>" +
        "<option>Stream (N)</option>" +
        "<option>Stream Beach</option>" +
        "<option>Stream (S 1)</option>" +
        "<option>Stream (S 2)</option>" +
        "<option>Foster Beach</option>" +
        "<option>Reef Beach</option>" +
        "<option>Wray Bay (1)</option>" +
        "<option>Wray Bay (2)</option>" +
        "<option>Pallinup Beach</option>" +
        "<option>Groper Bluff (N 5)</option>" +
        "<option>Groper Bluff (N 4)</option>" +
        "<option>Groper Bluff (N 3)</option>" +
        "<option>Groper Bluff (N 2)</option>" +
        "<option>Groper Bluff (N 1)</option>" +
        "<option>Groper Bluff (W 1)</option>" +
        "<option>Groper Bluff (W 2)</option>" +
        "<option>Groper Bluff (W 3)</option>" +
        "<option>Groper Bluff (W 4)</option>" +
        "<option>Boat Harbour (E 3)</option>" +
        "<option>Boat Harbour (E 2)</option>" +
        "<option>Boat Harbour (E 2)</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Long Beach (1)</option>" +
        "<option>Long Beach (2)</option>" +
        "<option>Long Beach (3)</option>" +
        "<option>Long Beach (4)</option>" +
        "<option>Schooner Beach</option>" +
        "<option>Schooner (S)</option>" +
        "<option>Cheyne Inlet</option>" +
        "<option>Cape Riche (S)</option>" +
        "<option>Ledge Point (W)</option>" +
        "<option>Willyun Beach</option>" +
        "<option>Willyun (S)</option>" +
        "<option>Salmon Bay</option>" +
        "<option>Salmon Bay (W 1)</option>" +
        "<option>Salmon Bay (W 2)</option>" +
        "<option>Salmon Bay (W 3)</option>" +
        "<option>WA 355</option>" +
        "<option>Cordinup (E)</option>" +
        "<option>Cordinup</option>" +
        "<option>Cordinup (W)</option>" +
        "<option>South Warrinup (E 2)</option>" +
        "<option>South Warrinup (E 1)</option>" +
        "<option>South Warrinup</option>" +
        "<option>Hassell Beach</option>" +
        "<option>Lookout Point</option>" +
        "<option>Mermaid Pt (W 1)</option>" +
        "<option>Mermaid Pt (W 2)</option>" +
        "<option>Normans Beach</option>" +
        "<option>Bettys Beach</option>" +
        "<option>Bettys (1)</option>" +
        "<option>Bettys (2)</option>" +
        "<option>Bettys (3)</option>" +
        "<option>Two Peoples Bay (N 3)</option>" +
        "<option>Two Peoples Bay (N 2)</option>" +
        "<option>Two Peoples Bay (N 1)</option>" +
        "<option>Two Peoples Bay</option>" +
        "<option>Two Peoples Bay (S 1)</option>" +
        "<option>South Point (E)</option>" +
        "<option>Waterfall Beach</option>" +
        "<option>Little Beach</option>" +
        "<option>Cape Vancouver</option>" +
        "<option>Inner Island</option>" +
        "<option>Rocky Pt</option>" +
        "<option>Nanarup Beach</option>" +
        "<option>Nanarup (W)</option>" +
        "<option>Islet Point</option>" +
        "<option>Ben Dearg Beach (E)</option>" +
        "<option>Ben Dearg Beach (W 1)</option>" +
        "<option>Ben Dearg Beach (W 2)</option>" +
        "<option>Herald Pt (E)</option>" +
        "<option>Herald Pt (W 1)</option>" +
        "<option>Herald Pt (W 2)</option>" +
        "<option>Ledge Pt</option>" +
        "<option>Ledge Bay</option>" +
        "<option>Cheyne Head (E)</option>" +
        "<option>Cheyne Head (W)</option>" +
        "<option>Mount Martin (1)</option>" +
        "<option>Mount Martin (2)</option>" +
        "<option>Emu Point (N)</option>" +
        "<option>Emu Beach</option>" +
        "<option>Middleton Beach</option>" +
        "<option>Barker Bay</option>" +
        "<option>Whaling Cove (1)</option>" +
        "<option>Whaling Cove (2)</option>" +
        "<option>Whaling Cove (3)</option>" +
        "<option>Goode Beach</option>" +
        "<option>Whalers Beach</option>" +
        "<option>Cheyne Beach</option>" +
        "<option>Whaling Station</option>" +
        "<option>Misery Beach</option>" +
        "<option>Flat Rock</option>" +
        "<option>Isthmus Hill (W)</option>" +
        "<option>Isthmus Hill (E)</option>" +
        "<option>Isthmus Bay (E)</option>" +
        "<option>Isthmus Bay (W)</option>" +
        "<option>Salmon Pools</option>" +
        "<option>Peak Head</option>" +
        "<option>Jimmy Newhills Harbour</option>" +
        "<option>Black Head</option>" +
        "<option>Cable Beach (E)</option>" +
        "<option>Cable Beach (W)</option>" +
        "<option>Sharp Point (E)</option>" +
        "<option>Sand Patch</option>" +
        "<option>Hanging Rock</option>" +
        "<option>Port Hughes</option>" +
        "<option>Perkins Beach (N)</option>" +
        "<option>Perkins Beach (S)</option>" +
        "<option>Port Harding</option>" +
        "<option>Cosy Corner</option>" +
        "<option>Migo Island</option>" +
        "<option>Dingo Beach</option>" +
        "<option>Shelley Beach</option>" +
        "<option>Dunksy Beach</option>" +
        "<option>Golden Gate Beach</option>" +
        "<option>Bornholm Beach</option>" +
        "<option>Bornholm (W)</option>" +
        "<option>Lowlands Beach (1)</option>" +
        "<option>Lowlands Beach (2)</option>" +
        "<option>Knapp Head (W 1)</option>" +
        "<option>Knapp Head (W 2)</option>" +
        "<option>Knapp Head (W 3)</option>" +
        "<option>Anvil (E)</option>" +
        "<option>Anvil Beach</option>" +
        "<option>Ratcliffe Bay (1)</option>" +
        "<option>Ratcliffe Bay (2)</option>" +
        "<option>Ocean Beach Denmark</option>" +
        "<option>Point Walton (W 1)</option>" +
        "<option>Point Walton (W 2)</option>" +
        "<option>Back Beach</option>" +
        "<option>Point Walton (W 4)</option>" +
        "<option>Point Walton (W 5)</option>" +
        "<option>Point Walton (W 6)</option>" +
        "<option>Waterfall (E)</option>" +
        "<option>Waterfall Beach</option>" +
        "<option>Waterfall (W)</option>" +
        "<option>Lights beach (E 2)</option>" +
        "<option>Lights beach (E 1)</option>" +
        "<option>Lights Beach</option>" +
        "<option>Madfish Bay (1)</option>" +
        "<option>Madfish Bay (2)</option>" +
        "<option>Madfish Bay (3)</option>" +
        "<option>Smooth Pool</option>" +
        "<option>Elephant Rocks Beach</option>" +
        "<option>Green Pool</option>" +
        "<option>Mazzoletti (E)</option>" +
        "<option>Mazzoletti Beach</option>" +
        "<option>Parry Inlet</option>" +
        "<option>Parry Beach</option>" +
        "<option>Parry (S 1)</option>" +
        "<option>Parry (S 2)</option>" +
        "<option>Point Hillier (N)</option>" +
        "<option>Point Hillier</option>" +
        "<option>Point Hillier (S)</option>" +
        "<option>Point Hillier (W 1)</option>" +
        "<option>Point Hillier (W 2)</option>" +
        "<option>Point Hillier (W 2)</option>" +
        "<option>Point Hillier (W 4)</option>" +
        "<option>Point Hillier (W 5)</option>" +
        "<option>Point Hillier (W 6)</option>" +
        "<option>Point Hillier (W 7)</option>" +
        "<option>Point Hillier (W 8)</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Owingup (1)</option>" +
        "<option>Owingup (2)</option>" +
        "<option>Owingup (3)</option>" +
        "<option>Owingup (4)</option>" +
        "<option>Owingup (5)</option>" +
        "<option>Owingup (6)</option>" +
        "<option>Owingup (7)</option>" +
        "<option>Little Quarram Beach</option>" +
        "<option>Little Quarram  (W)</option>" +
        "<option>Quarram Beach</option>" +
        "<option>Peaceful Bay (N)</option>" +
        "<option>Peaceful Bay</option>" +
        "<option>Peaceful Bay (S 1)</option>" +
        "<option>Peaceful Bay (S 2)</option>" +
        "<option>Peaceful Bay (S 3)</option>" +
        "<option>Peaceful Bay (S 4)</option>" +
        "<option>Point Irwin (W 1)</option>" +
        "<option>Point Irwin (W 2)</option>" +
        "<option>The Gap (E)</option>" +
        "<option>The Gap (W)</option>" +
        "<option>Herring Rock (E 3)</option>" +
        "<option>Herring Rock (E 2)</option>" +
        "<option>Herring Rock (E 1)</option>" +
        "<option>Herring Rock</option>" +
        "<option>Herring Rock (W 1)</option>" +
        "<option>Rame Head (1)</option>" +
        "<option>Rame Head (2)</option>" +
        "<option>Rame Head (3)</option>" +
        "<option>Rame Head (W1)</option>" +
        "<option>Rame Head (W 2)</option>" +
        "<option>Conspicious Beach (E)</option>" +
        "<option>Conspicious Beach</option>" +
        "<option>Conspicious (W 1)</option>" +
        "<option>Conspicious (W 2)</option>" +
        "<option>Conspicious (W 3)</option>" +
        "<option>Bellanger Beach</option>" +
        "<option>East Point</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly (W)</option>" +
        "<option>Circus Beach</option>" +
        "<option>Thompson Cove</option>" +
        "<option>Aldridge Cove</option>" +
        "<option>Lost Beach</option>" +
        "<option>Hush Hush Beach</option>" +
        "<option>Hush Hush (W)</option>" +
        "<option>Long Point (W 1)</option>" +
        "<option>Long Point (W 2)</option>" +
        "<option>Long Point (W 3)</option>" +
        "<option>Long Point (W 4)</option>" +
        "<option>Long Point (W 5)</option>" +
        "<option>Long Point (W 6)</option>" +
        "<option>Long Point (W 7)</option>" +
        "<option>Mandalay Beach</option>" +
        "<option>Banksia Camp (E 2)</option>" +
        "<option>Banksia Camp (E 1)</option>" +
        "<option>Banksia Camp</option>" +
        "<option>Banksia Camp (W)</option>" +
        "<option>Cliffy Head</option>" +
        "<option>Cliffy Head (W 1)</option>" +
        "<option>Cliffy Head (W 2)</option>" +
        "<option>Cliffy Head (W 3)</option>" +
        "<option>Cliffy Head (W 4)</option>" +
        "<option>Broke Inlet (E 7)</option>" +
        "<option>Broke Inlet (E 6)</option>" +
        "<option>Broke Inlet (E 5)</option>" +
        "<option>Broke Inlet (E 4)</option>" +
        "<option>Broke Inlet (E 3)</option>" +
        "<option>Broke Inlet (E 2)</option>" +
        "<option>Broke Inlet (E 1)</option>" +
        "<option>Broke Inlet  (E)</option>" +
        "<option>Broke Inlet  (W 1)</option>" +
        "<option>Broke Inlet  (W 2)</option>" +
        "<option>Broke Inlet  (W 3)</option>" +
        "<option>West Cliff Point (E 9)</option>" +
        "<option>West Cliff Point (E 8)</option>" +
        "<option>West Cliff Point (E 7)</option>" +
        "<option>West Cliff Point (E 6)</option>" +
        "<option>West Cliff Point (E 5)</option>" +
        "<option>West Cliff Point (E 4)</option>" +
        "<option>West Cliff Point (E 3)</option>" +
        "<option>West Cliff Point (E 2)</option>" +
        "<option>West Cliff Point (E 1)</option>" +
        "<option>West Cliff Point (E)</option>" +
        "<option>West Cliff Point (W)</option>" +
        "<option>Gardner Beach</option>" +
        "<option>Ledge Islet</option>" +
        "<option>Flat Rock</option>" +
        "<option>Windy Harbour</option>" +
        "<option>Windy Harbour (W)</option>" +
        "<option>Salmon Beach</option>" +
        "<option>Salmon (W)</option>" +
        "<option>Sandy Peak</option>" +
        "<option>Wheatley (1)</option>" +
        "<option>Wheatley (2)</option>" +
        "<option>Doggerup</option>" +
        "<option>Black Head (W 1)</option>" +
        "<option>Black Head (W 2)</option>" +
        "<option>Black Head (W 3)</option>" +
        "<option>Black Head (W 4)</option>" +
        "<option>Black Head (W 5)</option>" +
        "<option>Meerup</option>" +
        "<option>Warren Beach</option>" +
        "<option>Yeagarup</option>" +
        "<option>Broadwater (E 3)</option>" +
        "<option>Broadwater (E 2)</option>" +
        "<option>Broadwater (E 1)</option>" +
        "<option>Donnelly R (E)</option>" +
        "<option>Donnelly R (W 1)</option>" +
        "<option>Donnelly R (W 2)</option>" +
        "<option>Donnelly R (W 3)</option>" +
        "<option>Donnelly R (W 4)</option>" +
        "<option>Donnelly R (W 5)</option>" +
        "<option>Jasper Beach</option>" +
        "<option>Jasper (W)</option>" +
        "<option>Black Point (E 4)</option>" +
        "<option>Black Point (E 3)</option>" +
        "<option>Black Point (E 2)</option>" +
        "<option>Black Point (E 1)</option>" +
        "<option>Black Point (W 1)</option>" +
        "<option>Black Point (W 2)</option>" +
        "<option>Black Point (W 3)</option>" +
        "<option>White Point (E)</option>" +
        "<option>White-Freferick Points</option>" +
        "<option>Seine Bay</option>" +
        "<option>Duke Head</option>" +
        "<option>Storm Bay</option>" +
        "<option>Granny Pool</option>" +
        "<option>Barrack Point (S 1)</option>" +
        "<option>Barrack Point (S 2)</option>" +
        "<option>Barrack Point (S 3)</option>" +
        "<option>Point Matthew (N 3)</option>" +
        "<option>Point Matthew (N 2)</option>" +
        "<option>Point Matthew (N 1)</option>" +
        "<option>Groper Bay</option>" +
        "<option>Ringbolt Bay</option>" +
        "<option>Sarge Bay</option>" +
        "<option>Sarge Bay (W)</option>" +
        "<option>Cape Leeuwin (N)</option>" +
        "<option>Quarry Bay</option>" +
        "<option>Skippy Rock (S 2)</option>" +
        "<option>Skippy Rock (S 1)</option>" +
        "<option>Skippy Rock (N 1)</option>" +
        "<option>Skippy Rock (N 2)</option>" +
        "<option>Skippy Rock (N 3)</option>" +
        "<option>Skippy Rock (N 4)</option>" +
        "<option>Skippy Rock (N 5)</option>" +
        "<option>Skippy Rock (N 6)</option>" +
        "<option>Skippy Rock (N 7)</option>" +
        "<option>Deepende (S 2)</option>" +
        "<option>Deepende (S 1)</option>" +
        "<option>Deepende Beach</option>" +
        "<option>Cape Hamelin (S)</option>" +
        "<option>Cape Hamelin</option>" +
        "<option>Cape Hamelin (N)</option>" +
        "<option>Cosy Corner</option>" +
        "<option>Foul Bay (1)</option>" +
        "<option>Foul Bay (2)</option>" +
        "<option>Foul Bay (3)</option>" +
        "<option>Foul Bay (4)</option>" +
        "<option>Foul Bay (5)</option>" +
        "<option>Foul Bay (6)</option>" +
        "<option>Foul Bay (7)</option>" +
        "<option>Boranup Beach</option>" +
        "<option>North Point (S 2)</option>" +
        "<option>North Point (S 1)</option>" +
        "<option>North Point (N)</option>" +
        "<option>Cape Freycinet (S 2)</option>" +
        "<option>Cape Freycinet (S 1)</option>" +
        "<option>Contis Beach</option>" +
        "<option>The Fishing Place</option>" +
        "<option>Bobs Hollow</option>" +
        "<option>Redgate Beach</option>" +
        "<option>Redgate (N)</option>" +
        "<option>Boodjidup (S)</option>" +
        "<option>Boodjidup Beach</option>" +
        "<option>Grunters Beach</option>" +
        "<option>Gnarabup (S)</option>" +
        "<option>Gnarabup Beach</option>" +
        "<option>Margaret River car park</option>" +
        "<option>Margaret River mouth</option>" +
        "<option>Margaret River (N)</option>" +
        "<option>Cape Mentelle (S 2)</option>" +
        "<option>Cape Mentelle (S 1)</option>" +
        "<option>Cape Mentelle (N 1)</option>" +
        "<option>Cape Mentelle (N 2)</option>" +
        "<option>Cape Mentelle (N 3)</option>" +
        "<option>Kilcarnup Beach (1)</option>" +
        "<option>Kilcarnup Beach (2)</option>" +
        "<option>Kilcarnup Beach (N)</option>" +
        "<option>Dallip Springs</option>" +
        "<option>Gnoocardup Beach (1)</option>" +
        "<option>Gnoocardup Beach (2)</option>" +
        "<option>Ellensbrook (S)</option>" +
        "<option>Ellensbrook</option>" +
        "<option>Ellensbrook (N)</option>" +
        "<option>Big Rock</option>" +
        "<option>Cowaramup Pt (S)</option>" +
        "<option>Cowaramup Bay (S)</option>" +
        "<option>Cowaramup Bay</option>" +
        "<option>Cowaramup Bay (N)</option>" +
        "<option>North Point</option>" +
        "<option>Cullen Road (S 3)</option>" +
        "<option>Cullen Road (S 2)</option>" +
        "<option>Cullen Road (S 1)</option>" +
        "<option>Cullen Road</option>" +
        "<option>Cullen Road (N 1)</option>" +
        "<option>Cullen Road (N 2)</option>" +
        "<option>Wilyabrup Beach</option>" +
        "<option>Wilyabrup (N 1)</option>" +
        "<option>Wilyabrup (N 2)</option>" +
        "<option>Wilyabrup (N 3)</option>" +
        "<option>Moses Rock (S 2)</option>" +
        "<option>Moses Rock (S 1)</option>" +
        "<option>Moses Rock</option>" +
        "<option>Moses Rock (N 1)</option>" +
        "<option>Moses Rock (N 2)</option>" +
        "<option>Quininup Beach</option>" +
        "<option>Cape Clairault (S 6)</option>" +
        "<option>Cape Clairault (S 5)</option>" +
        "<option>Cape Clairault (S 4)</option>" +
        "<option>Cape Clairault (S 3)</option>" +
        "<option>Cape Clairault (S 2)</option>" +
        "<option>Cape Clairault (S 1)</option>" +
        "<option>Cape Clairault</option>" +
        "<option>Injidup Point</option>" +
        "<option>Injidup (1)</option>" +
        "<option>Injidup (2)</option>" +
        "<option>Injidup (3)</option>" +
        "<option>Wyadup</option>" +
        "<option>Canal Rocks</option>" +
        "<option>Canal Rocks (N)</option>" +
        "<option>Smiths Beach</option>" +
        "<option>Smiths Beach (1)</option>" +
        "<option>Smiths Beach (2)</option>" +
        "<option>Yallingup reef</option>" +
        "<option>Yallingup Beach</option>" +
        "<option>Yallingup (N 1)</option>" +
        "<option>Yallingup (N 2)</option>" +
        "<option>Yallingup (N 3)</option>" +
        "<option>Yallingup (N 4)</option>" +
        "<option>Kabbijgup (S 3)</option>" +
        "<option>Kabbijgup (S 2)</option>" +
        "<option>Kabbijgup (S 1)</option>" +
        "<option>Kabbijgup Beach</option>" +
        "<option>Kabbijgup (N 1)</option>" +
        "<option>Kabbijgup (N 2)</option>" +
        "<option>Sugraloaf Rock (S)</option>" +
        "<option>Gull Rock (S 2)</option>" +
        "<option>Gull Rock (S 1)</option>" +
        "<option>Cape Naturaliste</option>" +
        "<option>Cape Naturaliste (E)</option>" +
        "<option>Shelley Beach</option>" +
        "<option>Bunker Bay</option>" +
        "<option>Rocky Point (1)</option>" +
        "<option>Rocky Point (2)</option>" +
        "<option>Eagle Bay (N)</option>" +
        "<option>Eagle Bay</option>" +
        "<option>Eagle Bay (S)</option>" +
        "<option>Meelup Beach</option>" +
        "<option>Castle Bay</option>" +
        "<option>Castle Point</option>" +
        "<option>Castle Point (S)</option>" +
        "<option>Curtis Bay</option>" +
        "<option>Point Dalling</option>" +
        "<option>Point Daking</option>" +
        "<option>Dunn Bay</option>" +
        "<option>Dunsborough Beach</option>" +
        "<option>Toby Inlet</option>" +
        "<option>Busselton beach</option>" +
        "<option>Port Geographe (1)</option>" +
        "<option>Port Geographe (2)</option>" +
        "<option>Port Geographe (3)</option>" +
        "<option>Port Geographe (4)</option>" +
        "<option>Wonnerup Beach</option>" +
        "<option>Forrest-Peppermint Grove</option>" +
        "<option>Stirling Beach</option>" +
        "<option>Dalyellup Beach</option>" +
        "<option>Bunbury Beach</option>" +
        "<option>Lighthouse Beach</option>" +
        "<option>Casuarina Point</option>" +
        "<option>Casuarina Point (N)</option>" +
        "<option>McKenna Point (W)</option>" +
        "<option>McKenna Point (E)</option>" +
        "<option>Harbour Beach</option>" +
        "<option>Harbour jetty</option>" +
        "<option>Point McLeod (W)</option>" +
        "<option>Point McLeod (E)</option>" +
        "<option>Koombana Beach</option>" +
        "<option>Point Hamilla</option>" +
        "<option>The Cut</option>" +
        "<option>Binningup Beach</option>" +
        "<option>Myalup-Cape Bouvard</option>" +
        "<option>Tims Thicket (S)</option>" +
        "<option>Tims Thicket</option>" +
        "<option>Melros</option>" +
        "<option>Florida (S)</option>" +
        "<option>Florida (Bay)</option>" +
        "<option>Pyramids</option>" +
        "<option>Northport (1)</option>" +
        "<option>Northport (2)</option>" +
        "<option>Avalon</option>" +
        "<option>Falcon</option>" +
        "<option>Falcon Bay (1)</option>" +
        "<option>Falcon Bay (2)</option>" +
        "<option>Falcon  (N 1)</option>" +
        "<option>Falcon  (N 2)</option>" +
        "<option>Polleys Hole</option>" +
        "<option>Leighton Park</option>" +
        "<option>Bule Bay (S)</option>" +
        "<option>Blue Bay</option>" +
        "<option>Halls Head Beach</option>" +
        "<option>Town Beach</option>" +
        "<option>Silver Sands</option>" +
        "<option>San Remo-Secret Harbour</option>" +
        "<option>San Remo</option>" +
        "<option>Mandora</option>" +
        "<option>Singleton</option>" +
        "<option>Golden Bay</option>" +
        "<option>Secret Harbour</option>" +
        "<option>Becher Pt</option>" +
        "<option>Kennedy Bay</option>" +
        "<option>Warnbro Beach</option>" +
        "<option>Safety Bay</option>" +
        "<option>Shoalwater</option>" +
        "<option>Peron</option>" +
        "<option>White Rock</option>" +
        "<option>Point Peron (S 3)</option>" +
        "<option>Point Peron (S 2)</option>" +
        "<option>Point Peron (S 1)</option>" +
        "<option>Point Peron</option>" +
        "<option>John Point</option>" +
        "<option>John Point (E)</option>" +
        "<option>Causeway</option>" +
        "<option>Peron (N)</option>" +
        "<option>Rockingham Beach</option>" +
        "<option>Kwinana Beach (S)</option>" +
        "<option>Kwinana boat harbour</option>" +
        "<option>Kwinana Beach (N)</option>" +
        "<option>James Point (S 2)</option>" +
        "<option>James Point (S 1)</option>" +
        "<option>James Point</option>" +
        "<option>James Point (N)</option>" +
        "<option>Power house</option>" +
        "<option>Challenger Beach</option>" +
        "<option>Jervoise Bay (1)</option>" +
        "<option>Jervoise Bay (2)</option>" +
        "<option>Jervoise Bay (3)</option>" +
        "<option>Woodman Point (S)</option>" +
        "<option>Woodman Point</option>" +
        "<option>Woodman Point (N)</option>" +
        "<option>Coogee Beach</option>" +
        "<option>James Rocks</option>" +
        "<option>Power station</option>" +
        "<option>South Beach (1)</option>" +
        "<option>South Beach (2)</option>" +
        "<option>South Beach (3)</option>" +
        "<option>South Beach (4)</option>" +
        "<option>Success Harbour</option>" +
        "<option>Bathers Beach</option>" +
        "<option>Port Beach</option>" +
        "<option>Leighton Beach</option>" +
        "<option>Cable Station</option>" +
        "<option>Dutch Inn</option>" +
        "<option>Cottesloe Beach</option>" +
        "<option>North Cottesloe</option>" +
        "<option>Swanbourne Beach</option>" +
        "<option>City Beach</option>" +
        "<option>Floreat-Scarborough</option>" +
        "<option>Scarborough</option>" +
        "<option>Floreat</option>" +
        "<option>Trigg Island</option>" +
        "<option>Benniou Beach</option>" +
        "<option>Benniou (N)</option>" +
        "<option>Bailey St</option>" +
        "<option>Bailey St (N 1)</option>" +
        "<option>Bailey St (N 2)</option>" +
        "<option>Mettams Pool</option>" +
        "<option>Centaur</option>" +
        "<option>Hammersley Pool</option>" +
        "<option>North Beach</option>" +
        "<option>Hale St</option>" +
        "<option>Margaret St</option>" +
        "<option>Waterman Bay</option>" +
        "<option>Lennard Pool</option>" +
        "<option>Marmion Beach</option>" +
        "<option>Sorrento Beach</option>" +
        "<option>Sorrento Beach (N)</option>" +
        "<option>Hillarys Boat Harbour (S)</option>" +
        "<option>Hillarys Boat Harbour (N)</option>" +
        "<option>Hillarys Beach</option>" +
        "<option>Mullaloo Beach</option>" +
        "<option>Mullaloo (N)</option>" +
        "<option>Mullaloo (N 1)</option>" +
        "<option>Ocean Reef (S 4)</option>" +
        "<option>Ocean Reef (S 3)</option>" +
        "<option>Ocean Reef (S 2)</option>" +
        "<option>Ocean Reef (S 1)</option>" +
        "<option>Ocean Reef Boat Harbour (S)</option>" +
        "<option>Ocean Reef Boat Harbour (N1)</option>" +
        "<option>Ocean Reef Boat Harbour (N 2)</option>" +
        "<option>Ocean Reef (N)</option>" +
        "<option>Beaumaris (S)</option>" +
        "<option>Beaumaris</option>" +
        "<option>Burns Beach (S 3)</option>" +
        "<option>Burns Beach (S 2)</option>" +
        "<option>Burns Beach (S 1)</option>" +
        "<option>Burns Beach</option>" +
        "<option>Burns Beach (N)</option>" +
        "<option>Mindarie (S)</option>" +
        "<option>Mindarie Keys (N)</option>" +
        "<option>Mindarie Keys groyne (S)</option>" +
        "<option>Mindarie Keys groyne (N)</option>" +
        "<option>Mindarie Keys (N 1)</option>" +
        "<option>Mindarie Keys (N 2)</option>" +
        "<option>Mindarie Keys (N 3)</option>" +
        "<option>Quinns Rocks Beach</option>" +
        "<option>Wanneroo Beach</option>" +
        "<option>Eglington Hill (1)</option>" +
        "<option>Eglington Hill (2)</option>" +
        "<option>Pamela Shoal</option>" +
        "<option>Alkimos-Pipidinny-Yanchep (S)</option>" +
        "<option>Yanchep Lagoon (S)</option>" +
        "<option>Yanchep Lagoon</option>" +
        "<option>Yanchep Beach</option>" +
        "<option>Capricorn</option>" +
        "<option>The Spot (S)</option>" +
        "<option>The Spot</option>" +
        "<option>Wreck Point</option>" +
        "<option>Two Rocks (N)</option>" +
        "<option>Two Rocks (N 1)</option>" +
        "<option>Two Rocks (N 2)</option>" +
        "<option>Tuart Road (1)</option>" +
        "<option>Tuart Road (2)</option>" +
        "<option>Moore River (S)</option>" +
        "<option>Moore River (N)</option>" +
        "<option>Guilderton</option>" +
        "<option>Guilderton (N 1)</option>" +
        "<option>Guilderton (N 2)</option>" +
        "<option>Cape Leschenault (S 2)</option>" +
        "<option>Cape Leschenault (S 1)</option>" +
        "<option>Cape Leschenault</option>" +
        "<option>Seabird</option>" +
        "<option>Second Bluff</option>" +
        "<option>Breton Bay</option>" +
        "<option>First Bluff</option>" +
        "<option>First Bluff (N)</option>" +
        "<option>Manakoora</option>" +
        "<option>Ledge Point (S 1)</option>" +
        "<option>Ledge Point (S)</option>" +
        "<option>Ledge Point groynes</option>" +
        "<option>Ledge Point (N)</option>" +
        "<option>Ledge Point (N 1)</option>" +
        "<option>Lancelin (S)</option>" +
        "<option>Lancelin</option>" +
        "<option>Lancelin (N)</option>" +
        "<option>Horseshoe Reef (S)</option>" +
        "<option>Horseshoe-Virgin Reef</option>" +
        "<option>Virgin Reef (N)</option>" +
        "<option>Dide Bay (S)</option>" +
        "<option>Didie Bay-Narrow Neck</option>" +
        "<option>Narrow Neck (N)</option>" +
        "<option>Wedge Island (S 1)</option>" +
        "<option>Wedge Island (S)</option>" +
        "<option>Wedge Island</option>" +
        "<option>Wedge Island (N)</option>" +
        "<option>Flat Rock Reef</option>" +
        "<option>Flat Rock Reef (N)</option>" +
        "<option>Flat Rock (S 3)</option>" +
        "<option>Flat Rock (S 2)</option>" +
        "<option>Flat Rock (S 1)</option>" +
        "<option>Flat Rock</option>" +
        "<option>Flat Rock (N 1)</option>" +
        "<option>Flat Rock (N 2)</option>" +
        "<option>Flat Rock (N 3)</option>" +
        "<option>Grey (S 2)</option>" +
        "<option>Grey (S 1)</option>" +
        "<option>Grey point</option>" +
        "<option>Grey</option>" +
        "<option>Grey (N)</option>" +
        "<option>Grey (N 1)</option>" +
        "<option>Grey (N 2)</option>" +
        "<option>Boggy Bay</option>" +
        "<option>Shag Rock (S)</option>" +
        "<option>Shag Rock</option>" +
        "<option>Hangover Bay (1)</option>" +
        "<option>Hangover Bay (2)</option>" +
        "<option>Hangover Bay 31)</option>" +
        "<option>Kangaroo Point (S)</option>" +
        "<option>Kangaroo Point</option>" +
        "<option>Nambung Bay</option>" +
        "<option>Hansen Bay</option>" +
        "<option>Thirsty Point</option>" +
        "<option>Cervantes</option>" +
        "<option>Ronsard Bay</option>" +
        "<option>Black Point (N)</option>" +
        "<option>Black Point (N 1)</option>" +
        "<option>Hill River (S)</option>" +
        "<option>Hill River (N)</option>" +
        "<option>Island Point (S 1)</option>" +
        "<option>Island Point (S)</option>" +
        "<option>Island Point (N)</option>" +
        "<option>Jurien</option>" +
        "<option>Jurien groyne (1)</option>" +
        "<option>Jurien groyne (2)</option>" +
        "<option>Jurien harbour (S 1)</option>" +
        "<option>Jurien harbour (S 2)</option>" +
        "<option>Jurien harbour (N)</option>" +
        "<option>Middle Head (S)</option>" +
        "<option>Middle Head (N)</option>" +
        "<option>Pumpkin Hollow (1)</option>" +
        "<option>Pumpkin Hollow (2)</option>" +
        "<option>Pumpkin Hollow (3)</option>" +
        "<option>Pumpkin Hollow (4)</option>" +
        "<option>Pumpkin Hollow (5)</option>" +
        "<option>North Head (E)</option>" +
        "<option>North Head</option>" +
        "<option>North Head (N 1)</option>" +
        "<option>North Head (N 2)</option>" +
        "<option>North Head (N 3)</option>" +
        "<option>Sandland (S)</option>" +
        "<option>Sandland (N)</option>" +
        "<option>Sandy Point (S)</option>" +
        "<option>Sandy Point (N)</option>" +
        "<option>Sandy Point (N 1)</option>" +
        "<option>Sandy Point (N 2)</option>" +
        "<option>Sandy Point (N 3)</option>" +
        "<option>Sandy Point (N 4)</option>" +
        "<option>Sandy Point (N 5)</option>" +
        "<option>Sandy Point (N 6)</option>" +
        "<option>Sandy Point (N 7)</option>" +
        "<option>Sandy Point (N 8)</option>" +
        "<option>Sandy Point (N 9)</option>" +
        "<option>Sandy Point (N 10)</option>" +
        "<option>South Bay (S 2)</option>" +
        "<option>South Bay (S 1)</option>" +
        "<option>South Bay</option>" +
        "<option>Green Head (1)</option>" +
        "<option>Green Head (2)</option>" +
        "<option>Green Head (3)</option>" +
        "<option>Green Head (4)</option>" +
        "<option>Green Head (5)</option>" +
        "<option>Dynamite Bay</option>" +
        "<option>Cambawarra Head</option>" +
        "<option>Anchorage Bay</option>" +
        "<option>Point Louise</option>" +
        "<option>Point Louise (N)</option>" +
        "<option>Point Break</option>" +
        "<option>Billy Goat Bay</option>" +
        "<option>Lipfert island</option>" +
        "<option>Tea Tree</option>" +
        "<option>Little Anchorage</option>" +
        "<option>Shell Beach</option>" +
        "<option>Webb island (S)</option>" +
        "<option>Webb island</option>" +
        "<option>Webb island (N 1)</option>" +
        "<option>Webb island (N 2)</option>" +
        "<option>Bill Wilson Reef (1)</option>" +
        "<option>Bill Wilson Reef (2)</option>" +
        "<option>Leeman</option>" +
        "<option>Leeman (N)</option>" +
        "<option>Taylor Bay (S)</option>" +
        "<option>Taylor Bay</option>" +
        "<option>Taylor Bay (N)</option>" +
        "<option>Dumper Bay</option>" +
        "<option>Dumper Bay (N)</option>" +
        "<option>Mace Beach (S)</option>" +
        "<option>Mace Beach</option>" +
        "<option>Coolimba (S 2)</option>" +
        "<option>Coolimba (S 1)</option>" +
        "<option>Coolimba (S)</option>" +
        "<option>Coolimba</option>" +
        "<option>Coolimba (N 1)</option>" +
        "<option>Coolimba (N 2)</option>" +
        "<option>Gum Tree Bay (S)</option>" +
        "<option>Gum Tree Bay</option>" +
        "<option>Gum Tree Bay (N)</option>" +
        "<option>Illawong (S 3)</option>" +
        "<option>Illawong (S 2)</option>" +
        "<option>Illawong (S 1)</option>" +
        "<option>Illawong</option>" +
        "<option>Illawong (N)</option>" +
        "<option>Knobby Head</option>" +
        "<option>Freshwater Point</option>" +
        "<option>Cliff Head (S)</option>" +
        "<option>Cliff Head</option>" +
        "<option>Cliff Head (N)</option>" +
        "<option>Carsons Beach</option>" +
        "<option>Ten Mile Beach</option>" +
        "<option>South Beach</option>" +
        "<option>Port Denison Harbour</option>" +
        "<option>Arurine Bay</option>" +
        "<option>Irwin River mouth (S)</option>" +
        "<option>Irwin River mouth (N)</option>" +
        "<option>Dongara</option>" +
        "<option>King Bay</option>" +
        "<option>Five Mile Beach</option>" +
        "<option>Five-Seven Mile</option>" +
        "<option>Seven-Nine Mile</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Nine Mile (N)</option>" +
        "<option>Flat Rock (S)</option>" +
        "<option>Flat Rock</option>" +
        "<option>S Bend</option>" +
        "<option>Lucys Beach</option>" +
        "<option>Greenough River mouth (S)</option>" +
        "<option>Greenough River mouth (N)</option>" +
        "<option>Southgate Dunes (S)</option>" +
        "<option>Southgate Dunes (N)</option>" +
        "<option>Geraldton Back Beach</option>" +
        "<option>Greys Beach</option>" +
        "<option>Point Moore</option>" +
        "<option>Point Moore (N)</option>" +
        "<option>Pages Beach</option>" +
        "<option>Town Beach (1)</option>" +
        "<option>Town Beach (2)</option>" +
        "<option>Town Beach (3)</option>" +
        "<option>Champion-St George Beach</option>" +
        "<option>Sunset Beach</option>" +
        "<option>Drummond Cove (S)</option>" +
        "<option>Drummond Cove</option>" +
        "<option>Drummond Cove (N 1)</option>" +
        "<option>Drummond Cove (N 2)</option>" +
        "<option>Buller River</option>" +
        "<option>Buller River (N 1)</option>" +
        "<option>Buller River (N 2)</option>" +
        "<option>Oakajee River</option>" +
        "<option>Oakajee River (N)</option>" +
        "<option>Coronation Beach</option>" +
        "<option>Oakabella Creek</option>" +
        "<option>Oakabella Creek (N)</option>" +
        "<option>Woolawar Gully</option>" +
        "<option>Teakle Hill</option>" +
        "<option>Bowes River mouth</option>" +
        "<option>Bowes River (N)</option>" +
        "<option>Horrocks</option>" +
        "<option>Three Mile Beach</option>" +
        "<option>Whalebone Cove</option>" +
        "<option>Deep Gorge</option>" +
        "<option>White Cliffs</option>" +
        "<option>White Cliffs (N)</option>" +
        "<option>Menai Hills (1)</option>" +
        "<option>Menai Hills (2)</option>" +
        "<option>Menai Hills (3)</option>" +
        "<option>Menai Hills (4)</option>" +
        "<option>Broken Anchor Bay</option>" +
        "<option>Broken Anchor Bay(N)</option>" +
        "<option>Port Gregory (S)</option>" +
        "<option>Port Gregory</option>" +
        "<option>Leander Passage-Shoal Point</option>" +
        "<option>Shoal Point (N)</option>" +
        "<option>Sandlewood Bay</option>" +
        "<option>Halfway Bay</option>" +
        "<option>Lucky Bay</option>" +
        "<option>Wagoe</option>" +
        "<option>Pot Alley Gorge (N)</option>" +
        "<option>Pot Alley Gorge (S)</option>" +
        "<option>Red Bluff-Nancy</option>" +
        "<option>Jakes (S)</option>" +
        "<option>Jakes</option>" +
        "<option>Blue Holes</option>" +
        "<option>Kalbarri</option>" +
        "<option>Kalbarri (N)</option>" +
        "<option>Gantheaume Bay</option>" +
        "<option>First Fence</option>" +
        "<option>First Fence (N 1)</option>" +
        "<option>First Fence (N 2)</option>" +
        "<option>Second Fence</option>" +
        "<option>Second Fence (N 1)</option>" +
        "<option>Second Fence (N 2)</option>" +
        "<option>Third Fence</option>" +
        "<option>Third Fence (N 1)</option>" +
        "<option>Third Fence (N 2)</option>" +
        "<option>Fourth Fence</option>" +
        "<option>Fourth Fence (N 1)</option>" +
        "<option>Fourth Fence (N 2)</option>" +
        "<option>Fourth Fence (N 3)</option>" +
        "<option>Fourth Fence (N 4)</option>" +
        "<option>Fourth Fence (N 5)</option>" +
        "<option>Fourth Fence (N 6)</option>" +
        "<option>Fifth Fence</option>" +
        "<option>Fifth Fence (N 1)</option>" +
        "<option>Fifth Fence (N 2)</option>" +
        "<option>Fifth Fence (N 3)</option>" +
        "<option>Fifth Fence (N 4)</option>" +
        "<option>Fifth Fence (N 5)</option>" +
        "<option>Fifth Fence (N 6)</option>" +
        "<option>Fifth Fence (N 7)</option>" +
        "<option>Fifth Fence (N 8)</option>" +
        "<option>Zuytdorp Wreck (S 9)</option>" +
        "<option>Zuytdorp Wreck (S 8)</option>" +
        "<option>Zuytdorp Wreck (S 7)</option>" +
        "<option>Zuytdorp Wreck (S 6)</option>" +
        "<option>Zuytdorp Wreck (S 5)</option>" +
        "<option>Zuytdorp Wreck (S 4)</option>" +
        "<option>Zuytdorp Wreck (S 3)</option>" +
        "<option>Zuytdorp Wreck (S 2)</option>" +
        "<option>Zuytdorp Wreck (S 1)</option>" +
        "<option>Zuytdorp Wreck (N 1)</option>" +
        "<option>Zuytdorp Wreck (N 2)</option>" +
        "<option>Zuytdorp Wreck (N 3)</option>" +
        "<option>Zuytdorp Wreck (N 4)</option>" +
        "<option>Zuytdorp Wreck (N 5)</option>" +
        "<option>Zuytdorp Wreck (N 6)</option>" +
        "<option>Zuytdorp Wreck (N 7)</option>" +
        "<option>Zuytdorp Wreck (N 8)</option>" +
        "<option>Zuytdorp Wreck (N 9)</option>" +
        "<option>Zuytdorp Wreck (N 10)</option>" +
        "<option>Zuytdorp Wreck (N 11)</option>" +
        "<option>Zuytdorp Wreck (N 12)</option>" +
        "<option>Zuytdorp Wreck (N 13)</option>" +
        "<option>Zuytdorp Wreck (N 14)</option>" +
        "<option>Zuytdorp Wreck (N 15)</option>" +
        "<option>Zuytdorp Wreck (N 16)</option>" +
        "<option>NO Entrance</option>" +
        "<option>Catfish Bay</option>" +
        "<option>Steep Point (E)</option>" +
        "<option>Steep Point (E 1)</option>" +
        "<option>Steep Point (E 2)</option>" +
        "<option>Cape Ransonnet (W)</option>" +
        "<option>Cape Ransonnet (E)</option>" +
        "<option>Cape Ransonnet (E 1)</option>" +
        "<option>Cape Ransonnet (E 2)</option>" +
        "<option>Cape Ransonnet (E 3)</option>" +
        "<option>Shoal Flats</option>" +
        "<option>Bellefin Prong (W 1)</option>" +
        "<option>Bellefin Prong (W 2)</option>" +
        "<option>Bellefin Prong (W 3)</option>" +
        "<option>Bellefin Prong (W 4)</option>" +
        "<option>Bellefin Prong (W 5)</option>" +
        "<option>Bellefin Prong (W 6)</option>" +
        "<option>Bellefin Prong (W 7)</option>" +
        "<option>Cape Bellefin  (W)</option>" +
        "<option>Cape Bellefin  (E)</option>" +
        "<option>Bellefin  Prong (E 1)</option>" +
        "<option>Bellefin  Prong (E 2)</option>" +
        "<option>Bellefin  Prong (E 3)</option>" +
        "<option>Bellefin  Prong (E 4)</option>" +
        "<option>Bellefin  Prong (E 5)</option>" +
        "<option>Bellefin  Prong (E 6)</option>" +
        "<option>Bellefin  Prong (E 7)</option>" +
        "<option>Bellefin  Prong (E 8)</option>" +
        "<option>Bellefin  Prong (E 9)</option>" +
        "<option>Bellefin  Prong (E 10)</option>" +
        "<option>Bellefin  Prong (E 11)</option>" +
        "<option>Bellefin  Prong (E 12)</option>" +
        "<option>Bellefin  Prong (E 13)</option>" +
        "<option>Bellefin  Prong (E 14)</option>" +
        "<option>Bellefin  Prong (E 15)</option>" +
        "<option>Bellefin  Prong (E 16)</option>" +
        "<option>Heirisson Prong (E 1)</option>" +
        "<option>Heirisson Prong (E 2)</option>" +
        "<option>Heirisson Prong (E 3)</option>" +
        "<option>Heirisson Prong (E 4)</option>" +
        "<option>Heirisson Prong (E 5)</option>" +
        "<option>Heirisson Prong (E 6)</option>" +
        "<option>Heirisson Prong (E 7)</option>" +
        "<option>Heirisson Prong (E 8)</option>" +
        "<option>Heirisson Prong (E 9)</option>" +
        "<option>Heirisson Prong (E 10)</option>" +
        "<option>Heirisson Prong (E 11)</option>" +
        "<option>Heirisson Prong (E 12)</option>" +
        "<option>Heirisson Prong (E 13)</option>" +
        "<option>Heirisson Prong (E 14)</option>" +
        "<option>Heirisson Prong (E 15)</option>" +
        "<option>Heirisson Prong (E 16)</option>" +
        "<option>Heirisson Prong (E 17)</option>" +
        "<option>Heirisson Prong (E 18)</option>" +
        "<option>Heirisson Prong (E 19)</option>" +
        "<option>Heirisson Prong (E 20)</option>" +
        "<option>Heirisson Prong (E 21)</option>" +
        "<option>Heirisson Prong (E 22)</option>" +
        "<option>Heirisson Prong (E 23)</option>" +
        "<option>Cape Heirisson</option>" +
        "<option>Cape Heirisson (E)</option>" +
        "<option>Cape Heirisson (S 1)</option>" +
        "<option>Cape Heirisson (S 2)</option>" +
        "<option>Cape Heirisson (S 3)</option>" +
        "<option>Cape Heirisson (S 4)</option>" +
        "<option>Cape Heirisson (S 5)</option>" +
        "<option>Smith Rock (1)</option>" +
        "<option>Smith Rock (2)</option>" +
        "<option>Spit (N)</option>" +
        "<option>Spit (S)</option>" +
        "<option>Useless Loop (1)</option>" +
        "<option>Useless Loop (2)</option>" +
        "<option>Useless Loop (3)</option>" +
        "<option>Useless Loop (S 1)</option>" +
        "<option>Useless Loop (S 2)</option>" +
        "<option>Useless Loop (S 3)</option>" +
        "<option>Useless Loop (S 4)</option>" +
        "<option>Useless Loop (S 5)</option>" +
        "<option>Useless Loop (S 6)</option>" +
        "<option>Briggs Rock (N 3)</option>" +
        "<option>Briggs Rock (N 2)</option>" +
        "<option>Briggs Rock (N 1)</option>" +
        "<option>Briggs Rock</option>" +
        "<option>Cararang Peninsula (N 1)</option>" +
        "<option>Cararang Peninsula (N 2)</option>" +
        "<option>Cararang Peninsula (N 3)</option>" +
        "<option>Cararang Peninsula (S 1)</option>" +
        "<option>Cararang Peninsula (S 2)</option>" +
        "<option>Cararang Peninsula (S 3)</option>" +
        "<option>Cararang Peninsula (S 4)</option>" +
        "<option>Cararang Peninsula (S 5)</option>" +
        "<option>Cararang Peninsula (S 6)</option>" +
        "<option>Cararang Peninsula (S 7)</option>" +
        "<option>Cararang Peninsula (S 8)</option>" +
        "<option>Cararang Peninsula (S 9)</option>" +
        "<option>Cararang Peninsula (S 10)</option>" +
        "<option>Cararang Peninsula (S 11)</option>" +
        "<option>Cararang Peninsula (S 12)</option>" +
        "<option>Giraud Point</option>" +
        "<option>Giraud Point (S 1)</option>" +
        "<option>Giraud Point (S 2)</option>" +
        "<option>Giraud Point (S 3)</option>" +
        "<option>Giraud Point (S 4)</option>" +
        "<option>Giraud Point (S 5)</option>" +
        "<option>Giraud Point (S 6)</option>" +
        "<option>Giraud Point (S 7)</option>" +
        "<option>Disapointment Loop (W)</option>" +
        "<option>Baba Head</option>" +
        "<option>Baba Head (E 1)</option>" +
        "<option>Baba Head (E 2)</option>" +
        "<option>Baba Head (E 3)</option>" +
        "<option>Baba Head (E 4)</option>" +
        "<option>Baba Head (E 5)</option>" +
        "<option>Baba Head (E 6)</option>" +
        "<option>Baba Head (E 7)</option>" +
        "<option>Baba Head (E 8)</option>" +
        "<option>Garden Point (S)</option>" +
        "<option>Garden Point (N)</option>" +
        "<option>Gnungah Well</option>" +
        "<option>Gnungah Well (N)</option>" +
        "<option>Nanga</option>" +
        "<option>Nanga Bay (N 1)</option>" +
        "<option>Nanga Bay (N 2)</option>" +
        "<option>Nanga Bay (N 3)</option>" +
        "<option>Goulet Bluff (S 2)</option>" +
        "<option>Goulet Bluff (S 1)</option>" +
        "<option>Goulet Bluff (N 1)</option>" +
        "<option>Goulet Bluff (N 2)</option>" +
        "<option>Goulet Bluff (N 3)</option>" +
        "<option>Whalebone Road (S 4)</option>" +
        "<option>Whalebone Road (S 3)</option>" +
        "<option>Whalebone Road (S 2)</option>" +
        "<option>Whalebone Road (S 1)</option>" +
        "<option>Whalebone Road</option>" +
        "<option>Whalebone Road (N 1)</option>" +
        "<option>Whalebone Road (N 2)</option>" +
        "<option>Whalebone Road (N 3)</option>" +
        "<option>Whalebone Road (N 4)</option>" +
        "<option>Fowlers Camp</option>" +
        "<option>Fowlers Camp (W)</option>" +
        "<option>Eagle Bluff (E)</option>" +
        "<option>Eagle Bluff (N 1)</option>" +
        "<option>Eagle Bluff (N 2)</option>" +
        "<option>Eagle Bluff (N 3)</option>" +
        "<option>Eagle Bluff (N 4)</option>" +
        "<option>Eagle Bluff (N 5)</option>" +
        "<option>Eagle Bluff (N 6)</option>" +
        "<option>Eagle Bluff (N 7)</option>" +
        "<option>Eagle Bluff (N 8)</option>" +
        "<option>Eagle Bluff (N 9)</option>" +
        "<option>Eagle Bluff (N 10)</option>" +
        "<option>Denham Lookout (S)</option>" +
        "<option>Denham Lookout</option>" +
        "<option>Denham</option>" +
        "<option>Denham (N)</option>" +
        "<option>Lagoon Point (S)</option>" +
        "<option>Lagoon Point (N)</option>" +
        "<option>Little Lagoon</option>" +
        "<option>Little Lagoon (N 1)</option>" +
        "<option>Little Lagoon (N 2)</option>" +
        "<option>Little Lagoon (N 3)</option>" +
        "<option>Little Lagoon (N 4)</option>" +
        "<option>Middle Bluff</option>" +
        "<option>Cape Lesueur (S 5)</option>" +
        "<option>Cape Lesueur (S 4)</option>" +
        "<option>Cape Lesueur (S 3)</option>" +
        "<option>Cape Lesueur (S 2)</option>" +
        "<option>Cape Lesueur (S 1)</option>" +
        "<option>Cape Lesueur</option>" +
        "<option>Cape Lesueur (N 1)</option>" +
        "<option>Cape Lesueur (N 2)</option>" +
        "<option>Cape Lesueur (N 3)</option>" +
        "<option>Cape Lesueur (N 4)</option>" +
        "<option>Cattle Well (S)</option>" +
        "<option>Cattle Well</option>" +
        "<option>South Gregory</option>" +
        "<option>Gregory</option>" +
        "<option>Gregory (N)</option>" +
        "<option>Bottle Bay</option>" +
        "<option>Bottle Bay (N)</option>" +
        "<option>Cape Peron North (W)</option>" +
        "<option>Cape Peron North</option>" +
        "<option>Cape Peron North (E)</option>" +
        "<option>Cape Peron North (S 1)</option>" +
        "<option>Cape Peron North (S 2)</option>" +
        "<option>Cape Peron North (S 3)</option>" +
        "<option>Cape Peron North (S 4)</option>" +
        "<option>Cape Peron North (S 5)</option>" +
        "<option>Herald Bight (N)</option>" +
        "<option>Herald Bight</option>" +
        "<option>Guichenault Point</option>" +
        "<option>Herald Bluff</option>" +
        "<option>Herald Bluff (S 1)</option>" +
        "<option>Herald Bluff (S 2)</option>" +
        "<option>Herald Bluff (S 3)</option>" +
        "<option>Cape Rose</option>" +
        "<option>Monkey Mia</option>" +
        "<option>Monkey Mia (S)</option>" +
        "<option>Eastern Bluff (N)</option>" +
        "<option>Eastern Bluff (S)</option>" +
        "<option>Dubaut Creek</option>" +
        "<option>Dubaut Point (S)</option>" +
        "<option>Dubaut Point (S 1)</option>" +
        "<option>Dubaut Point (S 2)</option>" +
        "<option>Dubaut Point (S 3)</option>" +
        "<option>Lharidon Bight (W 1)</option>" +
        "<option>Lharidon Bight (W 2)</option>" +
        "<option>Lharidon Bight (W 3)</option>" +
        "<option>Shell Beach</option>" +
        "<option>Lharidon Bight (E 1)</option>" +
        "<option>Lharidon Bight (E 2)</option>" +
        "<option>Petit Point</option>" +
        "<option>Petit Point (E)</option>" +
        "<option>Petit Point (E 1)</option>" +
        "<option>Hamelin Pool (W 1)</option>" +
        "<option>Hamelin Pool (W 2)</option>" +
        "<option>Hamelin Pool (W 3)</option>" +
        "<option>Hamelin Pool (W 4)</option>" +
        "<option>Flint Cliff (W)</option>" +
        "<option>Flint Cliff (N 1)</option>" +
        "<option>Flint Cliff (N 2)</option>" +
        "<option>Flint Cliff (N 3)</option>" +
        "<option>Flint Cliff (N 4)</option>" +
        "<option>Carbla Point (S)</option>" +
        "<option>Carbla Point (N 1)</option>" +
        "<option>Carbla Point (N 2)</option>" +
        "<option>Carbla Point (N 3)</option>" +
        "<option>Yaringa Point (S)</option>" +
        "<option>Yaringa Point</option>" +
        "<option>Yaringa Point (N)</option>" +
        "<option>Hutchinson Island</option>" +
        "<option>Kopke Point (S 4)</option>" +
        "<option>Kopke Point (S 3)</option>" +
        "<option>Kopke Point (S 2)</option>" +
        "<option>Kopke Point (S 1)</option>" +
        "<option>Kopke Point</option>" +
        "<option>Gladstone (S)</option>" +
        "<option>Gladstone Jetty</option>" +
        "<option>New Beach</option>" +
        "<option>Bush Bay</option>" +
        "<option>Grey Point (S)</option>" +
        "<option>Uendoo Creek</option>" +
        "<option>Pelican Point Beach</option>" +
        "<option>Whitmore Island</option>" +
        "<option>Whitmore Point</option>" +
        "<option>Miaboolya Beach</option>" +
        "<option>Point Quobba (S 4)</option>" +
        "<option>Point Quobba (S 3)</option>" +
        "<option>Point Quobba (S 2)</option>" +
        "<option>Point Quobba (S 1)</option>" +
        "<option>Point Quobba</option>" +
        "<option>Quobba</option>" +
        "<option>Quobba (N 1)</option>" +
        "<option>Quobba (N 2)</option>" +
        "<option>Two Mile</option>" +
        "<option>Three Mile</option>" +
        "<option>Four Mile</option>" +
        "<option>Five Mile</option>" +
        "<option>Six Mile</option>" +
        "<option>Nine Mile</option>" +
        "<option>Point Culver (S)</option>" +
        "<option>Point Culver (E)</option>" +
        "<option>17 Mile Well</option>" +
        "<option>17 Mile Well (N 1)</option>" +
        "<option>17 Mile Well (N 2)</option>" +
        "<option>17 Mile Well (N 3)</option>" +
        "<option>Red Bluff</option>" +
        "<option>Red Bluff (N 1)</option>" +
        "<option>Red Bluff (N 2)</option>" +
        "<option>Red Bluff (N 3)</option>" +
        "<option>Red Bluff (N 4)</option>" +
        "<option>Red Bluff (N 5)</option>" +
        "<option>Red Bluff (N 6)</option>" +
        "<option>Red Bluff (N 7)</option>" +
        "<option>Red Bluff (N 8)</option>" +
        "<option>Three Mile Well (S 2)</option>" +
        "<option>Three Mile Well (S 1)</option>" +
        "<option>Three Mile Well</option>" +
        "<option>Three Mile Well (N 1)</option>" +
        "<option>Gnaraloo</option>" +
        "<option>Gnaraloo (N 1)</option>" +
        "<option>Gnaraloo (N 2)</option>" +
        "<option>Gnaraloo (N 3)</option>" +
        "<option>Gnaraloo Bay</option>" +
        "<option>Nine Mile Bore</option>" +
        "<option>Nine Mile Bore (N 1)</option>" +
        "<option>Nine Mile Bore (N 2)</option>" +
        "<option>Cape Farquhar (S)</option>" +
        "<option>Cape Farquhar (N)</option>" +
        "<option>Cape Farquhar (N 1)</option>" +
        "<option>Lagoon Tank (S)</option>" +
        "<option>Lagoon Tank (N)</option>" +
        "<option>Amherst Point (S)</option>" +
        "<option>Amherst Point (N)</option>" +
        "<option>Bulbari Point (N)</option>" +
        "<option>Bulbari Point (N 1)</option>" +
        "<option>Bulbari Point (N 2)</option>" +
        "<option>Boolbarly Well</option>" +
        "<option>Boolbarly Well (N 1)</option>" +
        "<option>Boolbarly Well (N 2)</option>" +
        "<option>Boolbarly Well (N 3)</option>" +
        "<option>Boolbarly Well (N 4)</option>" +
        "<option>Upper Boolbarly Well</option>" +
        "<option>Alison Point</option>" +
        "<option>Warroora</option>" +
        "<option>Stevensons Well</option>" +
        "<option>Magies Reef</option>" +
        "<option>Magies Reef (N)</option>" +
        "<option>Pelican Point</option>" +
        "<option>Pelican Point (N)</option>" +
        "<option>Pelican Point (N 1)</option>" +
        "<option>Fourteen Mile Camp (S 2)</option>" +
        "<option>Fourteen Mile Camp (S 1)</option>" +
        "<option>Fourteen Mile Camp</option>" +
        "<option>Fourteen Mile Camp (N)</option>" +
        "<option>Turtlet Bay</option>" +
        "<option>Turtlet Bay (N 1)</option>" +
        "<option>Turtlet Bay (N 2)</option>" +
        "<option>Point Anderson (S 1)</option>" +
        "<option>Point Anderson (S)</option>" +
        "<option>Point Anderson (N)</option>" +
        "<option>South Passage (S)</option>" +
        "<option>Bifocal Beach</option>" +
        "<option>Five Finger Reef</option>" +
        "<option>NO Passage (S)</option>" +
        "<option>NO Passage (N)</option>" +
        "<option>View Rock</option>" +
        "<option>Boggy Hill</option>" +
        "<option>Coral Bay</option>" +
        "<option>Skeleton Bay</option>" +
        "<option>Mauds Landing</option>" +
        "<option>Oyster Bridge</option>" +
        "<option>NO Teeth Reef</option>" +
        "<option>The Lagoon</option>" +
        "<option>Crayfish Rock</option>" +
        "<option>Bolman Hill</option>" +
        "<option>Gooseneck Hill</option>" +
        "<option>Doublet Hill</option>" +
        "<option>Nine Mile Camp</option>" +
        "<option>Nine Mile Camp (N)</option>" +
        "<option>Lund Hill</option>" +
        "<option>Twin Hill (S)</option>" +
        "<option>Twin Hill (N 1)</option>" +
        "<option>Twin Hill (N 2)</option>" +
        "<option>North Hill</option>" +
        "<option>Carter Hill</option>" +
        "<option>Black Rock Passage</option>" +
        "<option>Point Cloates</option>" +
        "<option>Ningaloo</option>" +
        "<option>Beacon Point (S)</option>" +
        "<option>Norwegian Bay</option>" +
        "<option>Billie Point</option>" +
        "<option>Lefroy Bay (S)</option>" +
        "<option>Lefroy Bay</option>" +
        "<option>Winderbandi Point (N)</option>" +
        "<option>Winderbandi Point (N 1)</option>" +
        "<option>Winderbandi Point (N 2)</option>" +
        "<option>Sandy Point (S 3)</option>" +
        "<option>Sandy Point (S 2)</option>" +
        "<option>Sandy Point (S 1)</option>" +
        "<option>Sandy Point (N 1)</option>" +
        "<option>Sandy Point (N 2)</option>" +
        "<option>Sandy Point (N 3)</option>" +
        "<option>Sandy Point (N 4)</option>" +
        "<option>Sandy Point (N 5)</option>" +
        "<option>Sandy Point (N 6)</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Yardie Creek (S)</option>" +
        "<option>Yardie Creek (N)</option>" +
        "<option>Yardie Creek (N 1)</option>" +
        "<option>Osprey Bay (S 2)</option>" +
        "<option>Osprey Bay (S 1)</option>" +
        "<option>Osprey Bay (S )</option>" +
        "<option>Osprey Bay (N)</option>" +
        "<option>Sandy Bay</option>" +
        "<option>Piglonaman Bay (S 2)</option>" +
        "<option>Piglonaman Bay (S 1)</option>" +
        "<option>Piglonaman Bay</option>" +
        "<option>Piglonaman Bay (N)</option>" +
        "<option>Bloodwood Creek (S)</option>" +
        "<option>Bloodwood Creek</option>" +
        "<option>Mandu Mandu</option>" +
        "<option>Oyster Stacks</option>" +
        "<option>Turquoise Beach</option>" +
        "<option>Turquoise Bay</option>" +
        "<option>Tuki Bay</option>" +
        "<option>Tuki Bay (N)</option>" +
        "<option>Channel</option>" +
        "<option>Camp 13</option>" +
        "<option>Camp 14</option>" +
        "<option>Lakeside</option>" +
        "<option>T Bone Bay</option>" +
        "<option>Mesa Camp</option>" +
        "<option>Neds Camp</option>" +
        "<option>Low Point (W)</option>" +
        "<option>Low Point (E)</option>" +
        "<option>Mangrove Bay (S)</option>" +
        "<option>Mangrove Bay</option>" +
        "<option>Mangrove Bay (N 1)</option>" +
        "<option>Mangrove Bay (N 2)</option>" +
        "<option>Mangrove Bay (N 3)</option>" +
        "<option>Tantabiddi Well (S)</option>" +
        "<option>Tantabiddi Well</option>" +
        "<option>Tantabiddi Creek (S)</option>" +
        "<option>Tantabiddi Creek (N)</option>" +
        "<option>Jurabi Point (S)</option>" +
        "<option>Jurabi Point (N)</option>" +
        "<option>NO Island Point</option>" +
        "<option>NO Island Point (N)</option>" +
        "<option>Torpedo Bay</option>" +
        "<option>Fibe Mile</option>" +
        "<option>Jensz</option>" +
        "<option>Jims Beach</option>" +
        "<option>Vlaming Head</option>" +
        "<option>Vlaming Head (E)</option>" +
        "<option>Mildura Road (1)</option>" +
        "<option>Mildura Road (2)</option>" +
        "<option>North West Cape</option>" +
        "<option>Point Murat (N)</option>" +
        "<option>Point Murat (S)</option>" +
        "<option>Bundegi</option>" +
        "<option>Bundegi Reef</option>" +
        "<option>Exmouth (Town) Beach</option>" +
        "<option>McLeod St Beach</option>" +
        "<option>Mowbowra Well</option>" +
        "<option>Mowbowra Creek</option>" +
        "<option>Qualing Pool</option>" +
        "<option>Pebble Beach</option>" +
        "<option>Shothole Creek</option>" +
        "<option>Badijirrajirra Creek</option>" +
        "<option>Kailis</option>" +
        "<option>Kailis (S)</option>" +
        "<option>Potshot Beach</option>" +
        "<option>Learmouth</option>" +
        "<option>Heron Point (N)</option>" +
        "<option>Heron Point (S)</option>" +
        "<option>Bay of Rest</option>" +
        "<option>William Preston Point</option>" +
        "<option>Point Lefroy (W 1)</option>" +
        "<option>Point Lefroy (W)</option>" +
        "<option>Point Lefroy</option>" +
        "<option>Rest Bay (1)</option>" +
        "<option>Rest Bay (2)</option>" +
        "<option>Rest Bay (3)</option>" +
        "<option>Rest Bay (4)</option>" +
        "<option>Lefroy Hill</option>" +
        "<option>Point Maxwell</option>" +
        "<option>Sandalwood</option>" +
        "<option>Hope Island</option>" +
        "<option>Simpson Island (W)</option>" +
        "<option>Simpson Island (N)</option>" +
        "<option>Burnside Island</option>" +
        "<option>Burnside Island (N-1)</option>" +
        "<option>Burnside Island (N-2)</option>" +
        "<option>Burnside Island (N-3)</option>" +
        "<option>Burnside Island (N-4)</option>" +
        "<option>Tent Island (S 5)</option>" +
        "<option>Tent Island (S 4)</option>" +
        "<option>Tent Island (S 3)</option>" +
        "<option>Tent Island (S 2)</option>" +
        "<option>Tent Island (S 1)</option>" +
        "<option>Tent Island (E)</option>" +
        "<option>Tent Island (N 1)</option>" +
        "<option>Tent Island (N 2)</option>" +
        "<option>Tent Island (N 3)</option>" +
        "<option>Urala Creek (S 1)</option>" +
        "<option>Urala Creek (S)</option>" +
        "<option>Urala Creek (N)</option>" +
        "<option>Locker Island (E)</option>" +
        "<option>Locker Island (N 1)</option>" +
        "<option>Locker Island (N 2)</option>" +
        "<option>Locker Point (W 2)</option>" +
        "<option>Locker Point (W 1)</option>" +
        "<option>Whittackers Well</option>" +
        "<option>Urala</option>" +
        "<option>Rocky Point (S)</option>" +
        "<option>Rocky Point (N)</option>" +
        "<option>Baresand Pt (S)</option>" +
        "<option>Ashburton River (S)</option>" +
        "<option>Ashburton River (E)</option>" +
        "<option>Entrance Point</option>" +
        "<option>Casuarina Point</option>" +
        "<option>Hooley Creek</option>" +
        "<option>Back Beach</option>" +
        "<option>Onslow</option>" +
        "<option>Bendon Creek (E)</option>" +
        "<option>Bendon Creek (E 1)</option>" +
        "<option>Bendon Creek (E 2)</option>" +
        "<option>Bendon Creek (E 3)</option>" +
        "<option>Coolgra Point (S 2)</option>" +
        "<option>Coolgra Point (S 1)</option>" +
        "<option>Barrigoombar Creek (W)</option>" +
        "<option>Barrigoombar Creek (E)</option>" +
        "<option>Yardie Landing (W)</option>" +
        "<option>Yardie Landing (E)</option>" +
        "<option>Port Weld (N 1)</option>" +
        "<option>Port Weld (N 2)</option>" +
        "<option>Port Weld (N 3)</option>" +
        "<option>Port Weld (N 4)</option>" +
        "<option>Thringa Island</option>" +
        "<option>Point Robe (S 2)</option>" +
        "<option>Point Robe (S 1)</option>" +
        "<option>Point Robe (S)</option>" +
        "<option>Mount Salt (S 2)</option>" +
        "<option>Mount Salt (S 1)</option>" +
        "<option>Mount Salt</option>" +
        "<option>Mount Salt (N)</option>" +
        "<option>Coonga Creek (S 1)</option>" +
        "<option>Coonga Creek (S)</option>" +
        "<option>Diver Inlet (S)</option>" +
        "<option>Diver Inlet (W)</option>" +
        "<option>Diver Inlet</option>" +
        "<option>Diver Inlet (E 1)</option>" +
        "<option>Diver Inlet (E 2)</option>" +
        "<option>James Point (S 3)</option>" +
        "<option>James Point (S 2)</option>" +
        "<option>James Point (S 1)</option>" +
        "<option>James Point</option>" +
        "<option>James Point (E)</option>" +
        "<option>Mount Rough</option>" +
        "<option>Preston Spit (S)</option>" +
        "<option>Preston Spit (N)</option>" +
        "<option>Cape Preston (E 1)</option>" +
        "<option>Cape Preston (E 2)</option>" +
        "<option>Cape Preston spit</option>" +
        "<option>Gnoorea (W)</option>" +
        "<option>Gnoorea (pipeline)</option>" +
        "<option>Gnoorea (E)</option>" +
        "<option>Yanyare River</option>" +
        "<option>Boodamurra Hill (S)</option>" +
        "<option>Boodamurra Hill (N)</option>" +
        "<option>Maitland River (W 4)</option>" +
        "<option>Maitland River (W 3)</option>" +
        "<option>Maitland River (W 2)</option>" +
        "<option>Maitland River (W 1)</option>" +
        "<option>Maitland River (W)</option>" +
        "<option>Maitland River (E)</option>" +
        "<option>Maitland River (E 1)</option>" +
        "<option>Maitland River (E 2)</option>" +
        "<option>Maitland River (E 3)</option>" +
        "<option>West Intercourse Island (W 1)</option>" +
        "<option>West Intercourse Island (W 2)</option>" +
        "<option>West Intercourse Island (W 3)</option>" +
        "<option>West Intercourse Island (W 4)</option>" +
        "<option>West Intercourse Island (N 1)</option>" +
        "<option>West Intercourse Island (N 2)</option>" +
        "<option>West Intercourse Island (N 3)</option>" +
        "<option>West Intercourse Island (N 4)</option>" +
        "<option>West Intercourse Island (N 5)</option>" +
        "<option>West Intercourse Island (N 6)</option>" +
        "<option>West Intercourse Island (N 7)</option>" +
        "<option>West Intercourse Island (N 8)</option>" +
        "<option>West Intercourse Island (N 9)</option>" +
        "<option>Dampier (Hampton)</option>" +
        "<option>Dampier (Boat Club)</option>" +
        "<option>Dampier (Pool)</option>" +
        "<option>Harbour Mound</option>" +
        "<option>Dampier (Power Station)</option>" +
        "<option>Dampier (Oil Tanks)</option>" +
        "<option>King Bay (1)</option>" +
        "<option>King Bay (2)</option>" +
        "<option>King Bay (3)</option>" +
        "<option>King Bay (4)</option>" +
        "<option>Phillip Point</option>" +
        "<option>Holden Point (S)</option>" +
        "<option>Holden Point (N 1)</option>" +
        "<option>Holden Point (N 2)</option>" +
        "<option>Woodside Jetty</option>" +
        "<option>Withnell Bay (S)</option>" +
        "<option>Withnell Bay (N 1)</option>" +
        "<option>Withnell Bay (N 1)</option>" +
        "<option>Withnell Bay (N 1)</option>" +
        "<option>Withnell Bay (W)</option>" +
        "<option>Conzinc Bay (1)</option>" +
        "<option>Conzinc Bay (2)</option>" +
        "<option>Conzinc Bay (3)</option>" +
        "<option>Conzinc Bay (4)</option>" +
        "<option>Conzinc Bay (5)</option>" +
        "<option>Conzinc Bay (6)</option>" +
        "<option>Conzinc Bay (7)</option>" +
        "<option>Conzinc Bay (N 1)</option>" +
        "<option>Conzinc Bay (N 2)</option>" +
        "<option>Conzinc Bay (N 3)</option>" +
        "<option>Searipple Passage (W 1)</option>" +
        "<option>Searipple Passage (W 2)</option>" +
        "<option>Searipple Passage (W 3)</option>" +
        "<option>Flying Foam Passage (1)</option>" +
        "<option>Flying Foam Passage (2)</option>" +
        "<option>Flying Foam Passage (3)</option>" +
        "<option>Flying Foam Passage (4)</option>" +
        "<option>Flying Foam Passage (5)</option>" +
        "<option>Flying Foam Passage (6)</option>" +
        "<option>Dolphin Island (NE 1)</option>" +
        "<option>Dolphin Island (NE 2)</option>" +
        "<option>Dolphin Island (NE 3)</option>" +
        "<option>Dolphin Island (NE 4)</option>" +
        "<option>Dolphin Island (NE 5)</option>" +
        "<option>Searipple Passage (E 1)</option>" +
        "<option>Searipple Passage (E 2)</option>" +
        "<option>Searipple Passage (E 3)</option>" +
        "<option>Searipple Passage (E 4)</option>" +
        "<option>Searipple Passage (E 5)</option>" +
        "<option>Sloping Point (S)</option>" +
        "<option>Watering Cove (N)</option>" +
        "<option>Watering Cove (S)</option>" +
        "<option>Cowrie Cove (N 1)</option>" +
        "<option>Cowrie Cove (N 2)</option>" +
        "<option>Cowrie Cove (S 1)</option>" +
        "<option>Cowrie Cove (S 2)</option>" +
        "<option>Hearson Cove</option>" +
        "<option>Hearson Cove</option>" +
        "<option>Karratha Beach</option>" +
        "<option>Cleaverville Creek (W 3)</option>" +
        "<option>Cleaverville Creek (W 2)</option>" +
        "<option>Cleaverville Creek (W 1)</option>" +
        "<option>Cleaverville  (E 1)</option>" +
        "<option>Cleaverville  (E 2)</option>" +
        "<option>Cleaverville  (E 3)</option>" +
        "<option>Cleaverville  (E 4)</option>" +
        "<option>Cleaverville  (E 5)</option>" +
        "<option>Cleaverville  (E 6)</option>" +
        "<option>Cleaverville  (E 7)</option>" +
        "<option>Dixon Island (W 1)</option>" +
        "<option>Dixon Island (W 2)</option>" +
        "<option>Dixon Island (E 1)</option>" +
        "<option>Dixon Island (E 2)</option>" +
        "<option>Bougner Entrance (W 4)</option>" +
        "<option>Bougner Entrance (W 3)</option>" +
        "<option>Bougner Entrance (W 2)</option>" +
        "<option>Bougner Entrance (W 1)</option>" +
        "<option>Bougner Entrance (E 1)</option>" +
        "<option>Bougner Entrance (E 2)</option>" +
        "<option>Bougner Entrance (E 3)</option>" +
        "<option>Cape Lambert (S 8)</option>" +
        "<option>Cape Lambert (S 7)</option>" +
        "<option>Cape Lambert (S 6)</option>" +
        "<option>Cape Lambert (S 5)</option>" +
        "<option>Cape Lambert (S 4)</option>" +
        "<option>Cape Lambert (S 3)</option>" +
        "<option>Cape Lambert (S 2)</option>" +
        "<option>Cape Lambert (S 1)</option>" +
        "<option>Cape Lambert (W 4)</option>" +
        "<option>Cape Lambert (W 3)</option>" +
        "<option>Cape Lambert (W 2)</option>" +
        "<option>Cape Lambert (W 1)</option>" +
        "<option>Cape Lambert</option>" +
        "<option>Sams Creek</option>" +
        "<option>Point Samson (N)</option>" +
        "<option>Point Samson</option>" +
        "<option>Point Samson (E 1)</option>" +
        "<option>Point Samson (E 2)</option>" +
        "<option>Honeymoon Cove</option>" +
        "<option>Point Samson (E 4)</option>" +
        "<option>Port Walcott</option>" +
        "<option>Mount Beach</option>" +
        "<option>Reader Point (W)</option>" +
        "<option>Reader Point (E)</option>" +
        "<option>Cossack</option>" +
        "<option>Butcher Inlet</option>" +
        "<option>Sherlock Bay (1)</option>" +
        "<option>Sherlock Bay (2)</option>" +
        "<option>Sherlock Bay (3)</option>" +
        "<option>Sherlock Bay (4)</option>" +
        "<option>Sherlock Bay (5)</option>" +
        "<option>Sherlock Bay (6)</option>" +
        "<option>Sherlock Bay (7)</option>" +
        "<option>Sherlock Bay (8)</option>" +
        "<option>Sherlock Bay (9)</option>" +
        "<option>Sherlock Bay (10)</option>" +
        "<option>Sherlock River (W)</option>" +
        "<option>Sherlock River (E)</option>" +
        "<option>Forestier Island (W 1)</option>" +
        "<option>Forestier Island (W 2)</option>" +
        "<option>Forestier Island (W 3)</option>" +
        "<option>Forestier Island (W 4)</option>" +
        "<option>Forestier Island (W 5)</option>" +
        "<option>Forestier Island (W 6)</option>" +
        "<option>Peawah (1)</option>" +
        "<option>Peawah (2)</option>" +
        "<option>Cape Cossigny (S 3)</option>" +
        "<option>Cape Cossigny (S 2)</option>" +
        "<option>Cape Cossigny (S 1)</option>" +
        "<option>Cape Cossigny</option>" +
        "<option>Cape Cossigny (E)</option>" +
        "<option>Cowerie Well (1)</option>" +
        "<option>Cowerie Well (2)</option>" +
        "<option>Cowerie Well (3)</option>" +
        "<option>Cape Thouin (W 2)</option>" +
        "<option>Cape Thouin (W 1)</option>" +
        "<option>Cape Thouin</option>" +
        "<option>Cape Thouin (E)</option>" +
        "<option>Yule River mouth (1)</option>" +
        "<option>Yule River mouth (2)</option>" +
        "<option>Yule River mouth (3)</option>" +
        "<option>Yule River (E 1)</option>" +
        "<option>Yule River (E 2)</option>" +
        "<option>Yule River (E 3)</option>" +
        "<option>Yule River (E 4)</option>" +
        "<option>Yule River (E 5)</option>" +
        "<option>Yule River (E 6)</option>" +
        "<option>Yule River (E 7)</option>" +
        "<option>Yule River (E 8)</option>" +
        "<option>Yule River (E 9)</option>" +
        "<option>Boodarrie (W 3)</option>" +
        "<option>Boodarrie (W 2)</option>" +
        "<option>Boodarrie (W 1)</option>" +
        "<option>Downes Island (W)</option>" +
        "<option>Downes Island</option>" +
        "<option>Finucare</option>" +
        "<option>Airey Point</option>" +
        "<option>Port Hedland groyne</option>" +
        "<option>Port Hedland marina</option>" +
        "<option>Port Hedland spoil bank (W)</option>" +
        "<option>Port Hedland spoil bank (E)</option>" +
        "<option>Cemetery Beach</option>" +
        "<option>Cooke Point (1)</option>" +
        "<option>Cooke Point (2)</option>" +
        "<option>Pretty Pool</option>" +
        "<option>Four Mile Creek (W)</option>" +
        "<option>Four Mile Creek (E)</option>" +
        "<option>Beebingarra Creek (W 3)</option>" +
        "<option>Beebingarra Creek (W 2)</option>" +
        "<option>Beebingarra Creek (W 1)</option>" +
        "<option>Beebingarra Creek (E)</option>" +
        "<option>Petermarer Creek (1)</option>" +
        "<option>Petermarer Creek (2)</option>" +
        "<option>Petermarer Creek (3)</option>" +
        "<option>Petermarer Creek (4)</option>" +
        "<option>Petermarer Creek (5)</option>" +
        "<option>Ridley River mouth</option>" +
        "<option>Spit Point (S 3)</option>" +
        "<option>Spit Point (S 2)</option>" +
        "<option>Spit Point (S 1)</option>" +
        "<option>Spit Point</option>" +
        "<option>Spit Point (E)</option>" +
        "<option>Spit Point (E 1)</option>" +
        "<option>Spit Point (E 2)</option>" +
        "<option>Larrey Point (W)</option>" +
        "<option>Larrey Point</option>" +
        "<option>Larrey Point (E)</option>" +
        "<option>Navy Rise</option>" +
        "<option>Poissonnier Point (S)</option>" +
        "<option>Poissonnier Point</option>" +
        "<option>Poissonnier Point (E)</option>" +
        "<option>Condini Landing</option>" +
        "<option>Mangrove Creek</option>" +
        "<option>Shellborough</option>" +
        "<option>Condon Creek mouth</option>" +
        "<option>Condon Creek (E)</option>" +
        "<option>Cartaminia Point (1)</option>" +
        "<option>Cartaminia Point (2)</option>" +
        "<option>Cartaminia Point (3)</option>" +
        "<option>Cartaminia Point (4)</option>" +
        "<option>Cartaminia Point (4)</option>" +
        "<option>Cartaminia Point (E)</option>" +
        "<option>Mulla Mulla Downs Creek (W 2)</option>" +
        "<option>Mulla Mulla Downs Creek (W 1)</option>" +
        "<option>Mulla Mulla Downs Creek</option>" +
        "<option>Padroo Well</option>" +
        "<option>Pardoo Creek (W)</option>" +
        "<option>Pardoo Creek (E)</option>" +
        "<option>Red Point</option>" +
        "<option>Red Point (E 1)</option>" +
        "<option>Red Point (E 2)</option>" +
        "<option>Banningarra Creek</option>" +
        "<option>Point Poolingerena (E 1)</option>" +
        "<option>Point Poolingerena (E 2)</option>" +
        "<option>Cape Keraudren (1)</option>" +
        "<option>Cape Keraudren (2)</option>" +
        "<option>Cootenbrand Creek</option>" +
        "<option>Meetyou Creek</option>" +
        "<option>Planaires bank</option>" +
        "<option>Ngooba Bore</option>" +
        "<option>Louis Well</option>" +
        "<option>Bimbiarra Well</option>" +
        "<option>Chirrup Well</option>" +
        "<option>Chirrup Bore</option>" +
        "<option>Red Hill (W)</option>" +
        "<option>Red Hill (E)</option>" +
        "<option>Eighty Mile Beach</option>" +
        "<option>Worroo Well</option>" +
        "<option>Wyndhams Bore</option>" +
        "<option>Maxwell Well</option>" +
        "<option>Eighty Mile Beach (N)</option>" +
        "<option>Desault Bay (1)</option>" +
        "<option>Desault Bay (2)</option>" +
        "<option>Desault Bay (3)</option>" +
        "<option>Cape Jaubert (S)</option>" +
        "<option>Cape Jaubert</option>" +
        "<option>Cape Jaubert (N 1)</option>" +
        "<option>Cape Jaubert (N 2)</option>" +
        "<option>Cape Jaubert (N 3)</option>" +
        "<option>Geoffroy Bay (S)</option>" +
        "<option>Geoffroy Bay (N)</option>" +
        "<option>Cape Frezier (S)</option>" +
        "<option>Cape Frezier</option>" +
        "<option>Cape Frezier (N)</option>" +
        "<option>Cape Duhamel (S)</option>" +
        "<option>Cape Duhamel</option>" +
        "<option>Cape Duhamel (N)</option>" +
        "<option>McKelson Creek (S)</option>" +
        "<option>McKelson Creek (N)</option>" +
        "<option>Admiral Bay (1)</option>" +
        "<option>Admiral Bay (2)</option>" +
        "<option>Admiral Bay (3)</option>" +
        "<option>Tryon Point</option>" +
        "<option>Cape Bossut</option>" +
        "<option>Spit Point</option>" +
        "<option>Ledge point</option>" +
        "<option>Middle Creek (W)</option>" +
        "<option>Middle Creek (E)</option>" +
        "<option>Islet Point (E)</option>" +
        "<option>Cliff Point</option>" +
        "<option>Rockey Point</option>" +
        "<option>Cowan Creek</option>" +
        "<option>Black Rock Point (1)</option>" +
        "<option>Black Rock Point (2)</option>" +
        "<option>Black Rock Point (E 1)</option>" +
        "<option>Black Rock Point (E 2)</option>" +
        "<option>Gururu Creek (S 1)</option>" +
        "<option>Gururu Creek (S)</option>" +
        "<option>Gururu Creek (N)</option>" +
        "<option>NO Cape Bissut (S 2)</option>" +
        "<option>NO Cape Bissut (S 1)</option>" +
        "<option>NO Cape Bissut (1)</option>" +
        "<option>NO Cape Bissut (2)</option>" +
        "<option>NO Cape Creek (S)</option>" +
        "<option>NO Cape Creek (N)</option>" +
        "<option>Port Smith (S 1)</option>" +
        "<option>Port Smith (S 2)</option>" +
        "<option>Port Smith (S 1)</option>" +
        "<option>Port Smith (N 1)</option>" +
        "<option>Port Smith (N 2)</option>" +
        "<option>Cape Latouche Treville (W 2)</option>" +
        "<option>Cape Latouche Treville (W 1)</option>" +
        "<option>Cape Latouche Treville</option>" +
        "<option>Cape Latouche Treville (E 1)</option>" +
        "<option>Cape Latouche Treville (E 2)</option>" +
        "<option>Cape Latouche Treville (E 3)</option>" +
        "<option>Gourdon Bay</option>" +
        "<option>Cape Du Boulay (S)</option>" +
        "<option>Cape Du Boulay (N)</option>" +
        "<option>Cape Gourdon (S)</option>" +
        "<option>Cape Gourdon</option>" +
        "<option>Cape Gourdon (E 1)</option>" +
        "<option>Cape Gourdon (E 2)</option>" +
        "<option>Cape Gourdon (E 3)</option>" +
        "<option>Cape Gourdon (E 4)</option>" +
        "<option>Cape Gourdon (E 5)</option>" +
        "<option>Cape Gourdon (E 6)</option>" +
        "<option>Cape Gourdon (E 7)</option>" +
        "<option>Barn Hill</option>" +
        "<option>Barn Hill (N)</option>" +
        "<option>Cape Villaret (S 3)</option>" +
        "<option>Cape Villaret (S 2)</option>" +
        "<option>Cape Villaret (S 1)</option>" +
        "<option>Cape Villaret</option>" +
        "<option>Cape Villaret (E 1)</option>" +
        "<option>Cape Villaret (E 2)</option>" +
        "<option>Cape Villaret (E 3)</option>" +
        "<option>Cape Villaret (E 4)</option>" +
        "<option>Eco Beach</option>" +
        "<option>Yardoogarra</option>" +
        "<option>Sandy Point</option>" +
        "<option>Bush Point (1)</option>" +
        "<option>Bush Point (2)</option>" +
        "<option>Crab Ck</option>" +
        "<option>Fall Pt</option>" +
        "<option>Fall Pt (W)</option>" +
        "<option>Fishermen Bend (E 4)</option>" +
        "<option>Fishermen Bend (E 3)</option>" +
        "<option>Fishermen Bend (E 2)</option>" +
        "<option>Fishermen Bend (E 1)</option>" +
        "<option>Town Beach</option>" +
        "<option>Broome golf course</option>" +
        "<option>Broome jetty (N)</option>" +
        "<option>Broome jetty (S)</option>" +
        "<option>Entrance Pt</option>" +
        "<option>Bitern Rock</option>" +
        "<option>Riddell Pt (S)</option>" +
        "<option>Riddell Pt</option>" +
        "<option>Riddell Beach</option>" +
        "<option>Riddell Beach (N)</option>" +
        "<option>Gantheaume Pt</option>" +
        "<option>Cable Beach</option>" +
        "<option>Cable Beach (N)</option>" +
        "<option>Willie Creek (S)</option>" +
        "<option>Willie Creek (N)</option>" +
        "<option>Cape Boileau</option>" +
        "<option>Quondong Pt (S 6)</option>" +
        "<option>Quondong Pt (S 5)</option>" +
        "<option>Quondong Pt (S 4)</option>" +
        "<option>Quondong Pt (S 3)</option>" +
        "<option>Quondong Pt (S 2)</option>" +
        "<option>Quondong Pt (S 1)</option>" +
        "<option>Quondong Beach</option>" +
        "<option>Quondong Pt (N)</option>" +
        "<option>James Price Pt (S)</option>" +
        "<option>James Price Pt (N)</option>" +
        "<option>Coulomb Pt (S)</option>" +
        "<option>Coulomb Pt (N 1)</option>" +
        "<option>Coulomb Pt (N 2)</option>" +
        "<option>Coulomb Pt (N 3)</option>" +
        "<option>Cape Bertholet (S)</option>" +
        "<option>Cape Bertholet (N)</option>" +
        "<option>Carnot Bay</option>" +
        "<option>Cape Baskerville</option>" +
        "<option>Red Bluff</option>" +
        "<option>Low Sandy Point</option>" +
        "<option>Camp Inlet</option>" +
        "<option>South Head</option>" +
        "<option>Sandy Pt</option>" +
        "<option>Ledge Pt</option>" +
        "<option>Tooker Pt</option>" +
        "<option>Alligator Ck</option>" +
        "<option>Henty Well</option>" +
        "<option>Mangrove Pt (S 2)</option>" +
        "<option>Mangrove Pt (S 1)</option>" +
        "<option>Mangrove Pt (N)</option>" +
        "<option>Yallet Ck</option>" +
        "<option>East Sandy Pt (S 1)</option>" +
        "<option>East Sandy Pt (N 1)</option>" +
        "<option>East Sandy Pt (N 2)</option>" +
        "<option>East Sandy Pt (N 3)</option>" +
        "<option>Cliff Pt (S 2)</option>" +
        "<option>Cliff Pt (S 1)</option>" +
        "<option>North Head (S)</option>" +
        "<option>Trappers Inlet (S)</option>" +
        "<option>Trappers Inlet (N 1)</option>" +
        "<option>Trappers Inlet (N 2)</option>" +
        "<option>Trappers Inlet (N 3)</option>" +
        "<option>Middle Lagoon (S 2)</option>" +
        "<option>Middle Lagoon (S 1)</option>" +
        "<option>Middle Lagoon</option>" +
        "<option>Emeriau Pt (S)</option>" +
        "<option>Emeriau Pt (N)</option>" +
        "<option>Chimney Rocks</option>" +
        "<option>Chimney Rocks (E)</option>" +
        "<option>Perpendicular Pt (W)</option>" +
        "<option>Perpendicular Pt (S 1)</option>" +
        "<option>Perpendicular Pt (S 2)</option>" +
        "<option>Perpendicular Pt (S 3)</option>" +
        "<option>Embalgun</option>" +
        "<option>Bell Pt</option>" +
        "<option>Weedong</option>" +
        "<option>Pender</option>" +
        "<option>Cape Borda (S)</option>" +
        "<option>Cape Borda</option>" +
        "<option>Cape Borda (N)</option>" +
        "<option>Chile Ck</option>" +
        "<option>Lomdadina</option>" +
        "<option>Thomas Bay (N 1)</option>" +
        "<option>Thomas Bay (N 2)</option>" +
        "<option>Cape Leveque (W)</option>" +
        "<option>Cape Leveque (E 1)</option>" +
        "<option>Cape Leveque (E 2)</option>" +
        "<option>Cape Leveque (E 3)</option>" +
        "<option>Hunter Creek</option>" +
        "<option>Swan Pt (W)</option>" +
        "<option>Swan Pt (S)</option>" +
        "<option>Nellie Pt (W 1)</option>" +
        "<option>Nellie Pt (W 2)</option>" +
        "<option>Karrakatta Bay (1)</option>" +
        "<option>Karrakatta Bay (2)</option>" +
        "<option>Talboys Pt (N)</option>" +
        "<option>Talboys Pt (S)</option>" +
        "<option>Middle</option>" +
        "<option>Jologo</option>" +
        "<option>Lugger Bay</option>" +
        "<option>Riddell Pt (E)</option>" +
        "<option>Mission Bay (E)</option>" +
        "<option>Mission Bay (W)</option>" +
        "<option>Catamaran Bay (1)</option>" +
        "<option>Catamaran Bay (2)</option>" +
        "<option>Catamaran Bay (3)</option>" +
        "<option>Bird Rocks</option>" +
        "<option>Bird Rocks (S 1)</option>" +
        "<option>Bird Rocks (S 2)</option>" +
        "<option>Bird Rocks (S 3)</option>" +
        "<option>Bird Rocks (S 4)</option>" +
        "<option>Bird Rocks (S 5)</option>" +
        "<option>Skeleton Pt (N 3)</option>" +
        "<option>Skeleton Pt (N 2)</option>" +
        "<option>Skeleton Pt (N 1)</option>" +
        "<option>Skeleton Pt</option>" +
        "<option>Skeleton Pt (S)</option>" +
        "<option>Elephant Rock (N)</option>" +
        "<option>Elephant Rock (1)</option>" +
        "<option>Elephant Rock (2)</option>" +
        "<option>Milligan Ck</option>" +
        "<option>Cygnet Bay (S 1)</option>" +
        "<option>Cygnet Bay (S 2)</option>" +
        "<option>Rumble Bay (E)</option>" +
        "<option>Willie Pt (W)</option>" +
        "<option>Willie Pt (S 1)</option>" +
        "<option>Willie Pt (S 2)</option>" +
        "<option>Willie Pt (S 3)</option>" +
        "<option>Deepwater Pt (S 1)</option>" +
        "<option>Deepwater Pt (S 2)</option>" +
        "<option>Deepwater Pt (S 3)</option>" +
        "<option>Deepwater Pt (S 4)</option>" +
        "<option>Deepwater Pt (S 5)</option>" +
        "<option>Deepwater Pt (S 6)</option>" +
        "<option>Deepwater Pt (S 7)</option>" +
        "<option>Cunningham Pt</option>" +
        "<option>Cunningham Pt (S)</option>" +
        "<option>Carlisle Hd (N)</option>" +
        "<option>Carlisle Hd (S)</option>" +
        "<option>Amatangoora Pt (N 2)</option>" +
        "<option>Amatangoora Pt (N 1)</option>" +
        "<option>Goodenough Bay</option>" +
        "<option>Murdeh Pt</option>" +
        "<option>FoulPt</option>" +
        "<option>Cornambie Pt (N)</option>" +
        "<option>Disaster Bay</option>" +
        "<option>Malahurra Springs (N 2)</option>" +
        "<option>Malahurra Springs (N 1)</option>" +
        "<option>Hoon Ck (S)</option>" +
        "<option>Pt Usborne (W 3)</option>" +
        "<option>Pt Usborne (W 2)</option>" +
        "<option>Pt Usborne (W 1)</option>" +
        "<option>Pt Usborne (N)</option>" +
        "<option>Lachlan Is (S 1)</option>" +
        "<option>Lachlan Is (S 2)</option>" +
        "<option>Lachlan Is (S 3)</option>" +
        "<option>Lachlan Is (S 4)</option>" +
        "<option>Sanderson Pt (E 1)</option>" +
        "<option>Sanderson Pt (E 2)</option>" +
        "<option>Sanderson Pt (E 3)</option>" +
        "<option>Sanderson Pt (E 4)</option>" +
        "<option>Cascade Bay (E 1)</option>" +
        "<option>Cascade Bay (E 2)</option>" +
        "<option>Cascade Bay (E 3)</option>" +
        "<option>Cascade Bay (E 4)</option>" +
        "<option>Pecked Island (S 1)</option>" +
        "<option>Pecked Island (S 2)</option>" +
        "<option>Pecked Island (S 3)</option>" +
        "<option>Pecked Island (S 4)</option>" +
        "<option>Pecked Island (S 5)</option>" +
        "<option>Pecked Island (S 6)</option>" +
        "<option>Faint Pt (W 4)</option>" +
        "<option>Faint Pt (W 3)</option>" +
        "<option>Faint Pt (W 2)</option>" +
        "<option>Faint Pt (W 1)</option>" +
        "<option>Crawford Bay (E)</option>" +
        "<option>Cone Bay (S 1)</option>" +
        "<option>Cone Bay (S 2)</option>" +
        "<option>Cone Bay (S 3)</option>" +
        "<option>Cone Bay (S 4)</option>" +
        "<option>Cone Bay (S 5)</option>" +
        "<option>Cone Bay (S 6)</option>" +
        "<option>Cone Bay (S 7)</option>" +
        "<option>Cone Bay (S 8)</option>" +
        "<option>Porter Hill Is (N 1)</option>" +
        "<option>Porter Hill Is (N 2)</option>" +
        "<option>Porter Hill Is (S)</option>" +
        "<option>Cone Bay (SE 1)</option>" +
        "<option>Cone Bay (SE 2)</option>" +
        "<option>Cone Bay (SE 3)</option>" +
        "<option>Cone Bay (SE 4)</option>" +
        "<option>Cone Bay (SE 5)</option>" +
        "<option>Cone Bay (SE 6)</option>" +
        "<option>Cone Hill (1)</option>" +
        "<option>Cone Hill (2)</option>" +
        "<option>Cone Hill (3)</option>" +
        "<option>199 A</option>" +
        "<option>Cone Bay (N 1)</option>" +
        "<option>Cone Bay (N 2)</option>" +
        "<option>Cone Bay (N 3)</option>" +
        "<option>Cone Bay (N 4)</option>" +
        "<option>Cone Bay (N 5)</option>" +
        "<option>Cone Bay (N 6)</option>" +
        "<option>Cone Bay (N 7)</option>" +
        "<option>Cone Bay (N 8)</option>" +
        "<option>Cone Bay (N 9)</option>" +
        "<option>Cone Bay (N 10)</option>" +
        "<option>Sir Richard Is (S 1)</option>" +
        "<option>Sir Richard Is (S 2)</option>" +
        "<option>Sir Richard Is (N 1)</option>" +
        "<option>Sir Richard Is (N 2)</option>" +
        "<option>Beach 214</option>" +
        "<option>Strickland Bay (E 1)</option>" +
        "<option>Strickland Bay (E 2)</option>" +
        "<option>Strickland Bay (E 3)</option>" +
        "<option>Dunvert Is (E)</option>" +
        "<option>Dunvert Is (W)</option>" +
        "<option>Hidden Is (W 1)</option>" +
        "<option>Hidden Is (W 2)</option>" +
        "<option>Hidden Is (N 1)</option>" +
        "<option>Silica Beach</option>" +
        "<option>Hidden Is (N 3)</option>" +
        "<option>Boonook Bay (N 1)</option>" +
        "<option>Boonook Bay (N 2)</option>" +
        "<option>Goose Channel (S 1)</option>" +
        "<option>Goose Channel (S 2)</option>" +
        "<option>Goose Channel (S 3)</option>" +
        "<option>Yumurryumuh Beach</option>" +
        "<option>Margaret Is (W 1)</option>" +
        "<option>Margaret Is (W 2)</option>" +
        "<option>Margaret Is (W 3)</option>" +
        "<option>233A</option>" +
        "<option>Margaret Is (N 1)</option>" +
        "<option>Margaret Is (N 2)</option>" +
        "<option>Margaret Is (E 1)</option>" +
        "<option>Margaret Is (E 2)</option>" +
        "<option>Myridi Bay (W)</option>" +
        "<option>Myridi Bay (E 1)</option>" +
        "<option>Myridi Bay (E 2)</option>" +
        "<option>Nares Pt (W 4)</option>" +
        "<option>Nares Pt (W 3)</option>" +
        "<option>Nares Pt (W 2)</option>" +
        "<option>Nares Pt (W 1)</option>" +
        "<option>Koolan Is (N 1)</option>" +
        "<option>Koolan Is (N 2)</option>" +
        "<option>Beach Beach (1)</option>" +
        "<option>Beach Beach (2)</option>" +
        "<option>Sanders pt (S 1)</option>" +
        "<option>Sanders pt (S 2)</option>" +
        "<option>Koolan (1)</option>" +
        "<option>Koolan (2)</option>" +
        "<option>Koolan (3)</option>" +
        "<option>Koolan (4)</option>" +
        "<option>Koolan (5)</option>" +
        "<option>Front Beach (N 2)</option>" +
        "<option>Front Beach (N 1)</option>" +
        "<option>Front Beach</option>" +
        "<option>South Point</option>" +
        "<option>Catspaw Point</option>" +
        "<option>WA 261</option>" +
        "<option>WA 262</option>" +
        "<option>WA 263</option>" +
        "<option>WA 264</option>" +
        "<option>WA 265</option>" +
        "<option>WA 266</option>" +
        "<option>WA 267</option>" +
        "<option>WA 268</option>" +
        "<option>WA 269</option>" +
        "<option>WA 270</option>" +
        "<option>WA 271</option>" +
        "<option>Shoal Bay Is (1)</option>" +
        "<option>Shoal Bay Is (2)</option>" +
        "<option>Shoal Bay Is (3)</option>" +
        "<option>Shoal Bay Is (4)</option>" +
        "<option>Shoal Bay Is (5)</option>" +
        "<option>Shoal Bay Is (6)</option>" +
        "<option>Shoal Bay Is (7)</option>" +
        "<option>Shoal Bay Is (8)</option>" +
        "<option>Shoal Bay Is (9)</option>" +
        "<option>Shoal Bay Is (10)</option>" +
        "<option>Shoal Bay Is (11)</option>" +
        "<option>Shoal Bay Is (12)</option>" +
        "<option>The Funnel (W 4)</option>" +
        "<option>The Funnel (W 3)</option>" +
        "<option>The Funnel (W 2)</option>" +
        "<option>The Funnel (W 1)</option>" +
        "<option>The Funnel (N 1)</option>" +
        "<option>The Funnel (N 2)</option>" +
        "<option>The Funnel (N 3)</option>" +
        "<option>The Funnel (N 4)</option>" +
        "<option>The Funnel (N 5)</option>" +
        "<option>High Bluff (S 3)</option>" +
        "<option>High Bluff (S 2)</option>" +
        "<option>High Bluff (S 1)</option>" +
        "<option>High Bluff (N)</option>" +
        "<option>Eagle Pt (S 8)</option>" +
        "<option>Eagle Pt (S 7)</option>" +
        "<option>Eagle Pt (S 6)</option>" +
        "<option>Eagle Pt (S 5)</option>" +
        "<option>Eagle Pt (S 4)</option>" +
        "<option>Eagle Pt (S 3)</option>" +
        "<option>Eagle Pt (S 2)</option>" +
        "<option>Eagle Pt (S 1)</option>" +
        "<option>Eagle Pt (E 1)</option>" +
        "<option>Eagle Pt (E 2)</option>" +
        "<option>Raft Pt (S 4)</option>" +
        "<option>Raft Pt (S 3)</option>" +
        "<option>Raft Pt (S 2)</option>" +
        "<option>Raft Pt (S 1)</option>" +
        "<option>Raft Pt</option>" +
        "<option>Doubtful Bay (E 1)</option>" +
        "<option>Doubtful Bay (E 2)</option>" +
        "<option>Doubtful Bay (E 3)</option>" +
        "<option>Doubtful Bay (E 4)</option>" +
        "<option>WA 316</option>" +
        "<option>WA 317</option>" +
        "<option>WA 318</option>" +
        "<option>WA 319</option>" +
        "<option>WA 320</option>" +
        "<option>WA 321</option>" +
        "<option>WA 322</option>" +
        "<option>Freshwater Cove (S 7)</option>" +
        "<option>Freshwater Cove (S 6)</option>" +
        "<option>Freshwater Cove (S 5)</option>" +
        "<option>Freshwater Cove (S 4)</option>" +
        "<option>Freshwater Cove (S 3)</option>" +
        "<option>Freshwater Cove (S 2)</option>" +
        "<option>Freshwater Cove (S 1)</option>" +
        "<option>Freshwater Cove</option>" +
        "<option>Freshwater Cove (N)</option>" +
        "<option>Langgi (S 5)</option>" +
        "<option>Langgi (S 4)</option>" +
        "<option>Langgi (S 3)</option>" +
        "<option>Langgi (S 2)</option>" +
        "<option>Langgi (S 1)</option>" +
        "<option>Langgi</option>" +
        "<option>Prior Pt (S 5)</option>" +
        "<option>Prior Pt (S 4)</option>" +
        "<option>Prior Pt (S 3)</option>" +
        "<option>Prior Pt (S 2)</option>" +
        "<option>Prior Pt (S 1)</option>" +
        "<option>Hall Point (S 5)</option>" +
        "<option>Hall Point (S 4)</option>" +
        "<option>Hall Point (S 3)</option>" +
        "<option>Hall Point (S 2)</option>" +
        "<option>Hall Point (S 1)</option>" +
        "<option>Hall Point (E 1)</option>" +
        "<option>Hall Point (E 2)</option>" +
        "<option>Hall Point (E 3)</option>" +
        "<option>Deception Bay (1)</option>" +
        "<option>Deception Bay (2)</option>" +
        "<option>Wilson Point (S 4)</option>" +
        "<option>Wilson Point (S 3)</option>" +
        "<option>Wilson Point (S 2)</option>" +
        "<option>Wilson Point (S 1)</option>" +
        "<option>Wilson Point</option>" +
        "<option>Wilson Point (E)</option>" +
        "<option>Sampson Inlet (S)</option>" +
        "<option>Needle Rock</option>" +
        "<option>Kuri Bay</option>" +
        "<option>Port George IV (1)</option>" +
        "<option>Port George IV (2)</option>" +
        "<option>Port George (1)</option>" +
        "<option>Port George (2)</option>" +
        "<option>Port George (3)</option>" +
        "<option>Port George (4)</option>" +
        "<option>High Bluff (S 5)</option>" +
        "<option>High Bluff (S 4)</option>" +
        "<option>High Bluff (S 3)</option>" +
        "<option>High Bluff (S 2)</option>" +
        "<option>High Bluff (S 1)</option>" +
        "<option>High Bluff (E 1)</option>" +
        "<option>High Bluff (E 2)</option>" +
        "<option>High Bluff (E 3)</option>" +
        "<option>High Bluff (E 4)</option>" +
        "<option>Hanover Bay (W 1)</option>" +
        "<option>Hanover Bay (W 2)</option>" +
        "<option>Hanover Bay (W 3)</option>" +
        "<option>Hanover Bay (W 4)</option>" +
        "<option>Hanover Bay (W 5)</option>" +
        "<option>Hanover Bay (E 1)</option>" +
        "<option>Hanover Bay (E 2)</option>" +
        "<option>Hanover Bay (E 3)</option>" +
        "<option>Unwins Is (1)</option>" +
        "<option>Unwins Is (2)</option>" +
        "<option>Unwins Is (3)</option>" +
        "<option>Unwins Is (4)</option>" +
        "<option>Unwins Is (5)</option>" +
        "<option>Cape Wellington (S 4)</option>" +
        "<option>Cape Wellington (S 3)</option>" +
        "<option>Cape Wellington (S 2)</option>" +
        "<option>Cape Wellington (S 1)</option>" +
        "<option>Cape Wellington (N 1)</option>" +
        "<option>Cape Wellington (N 2)</option>" +
        "<option>Cape Wellington (N 3)</option>" +
        "<option>Cape Wellington (N 4)</option>" +
        "<option>Cape Wellington (N 5)</option>" +
        "<option>Cape Brewster (W 2)</option>" +
        "<option>Cape Brewster (W 1)</option>" +
        "<option>Cape Brewster (E 1)</option>" +
        "<option>Cape Brewster (E 2)</option>" +
        "<option>Cape Brewster (E 3)</option>" +
        "<option>Cape Brewster (E 4)</option>" +
        "<option>Careening Bay</option>" +
        "<option>Port Nelson (E 1)</option>" +
        "<option>Port Nelson (E 2)</option>" +
        "<option>Port Nelson (E 3)</option>" +
        "<option>Port Nelson (E 4)</option>" +
        "<option>Port Nelson (E 5)</option>" +
        "<option>Port Nelson (E 6)</option>" +
        "<option>Hardy Point (W 2)</option>" +
        "<option>Hardy Point (W 1)</option>" +
        "<option>Hardy Point (E 1)</option>" +
        "<option>Hardy Point (E 2)</option>" +
        "<option>Hardy Point (E 3)</option>" +
        "<option>Hardy Point (E 4)</option>" +
        "<option>Cape Torrens (W 4)</option>" +
        "<option>Cape Torrens (W 3)</option>" +
        "<option>Cape Torrens (W 2)</option>" +
        "<option>Cape Torrens (W 1)</option>" +
        "<option>Cape Torrens (S 1)</option>" +
        "<option>Cape Torrens (S 2)</option>" +
        "<option>Boongaree Is (W 1)</option>" +
        "<option>Boongaree Is (W 2)</option>" +
        "<option>Boongaree Is (W 3)</option>" +
        "<option>Boongaree Is (W 4)</option>" +
        "<option>Boongaree Is (W 5)</option>" +
        "<option>Boongaree Is (NE 1)</option>" +
        "<option>Boongaree Is (NE 2)</option>" +
        "<option>Boongaree Is (NE 3)</option>" +
        "<option>Boongaree Is (NE 4)</option>" +
        "<option>Boongaree Is (NE 5)</option>" +
        "<option>Boongaree Is (NE 6)</option>" +
        "<option>Boongaree Is (NE 7)</option>" +
        "<option>Boongaree Is (NE 7)</option>" +
        "<option>Boongaree Is (NE 7)</option>" +
        "<option>Boongaree Is (E 1)</option>" +
        "<option>Boongaree Is (E 2)</option>" +
        "<option>Boongaree Is (E 3)</option>" +
        "<option>Boongaree Is (E 4)</option>" +
        "<option>Boongaree Is (E 5)</option>" +
        "<option>Boongaree Is (E 6)</option>" +
        "<option>Prince Frederick Hbr (S 1)</option>" +
        "<option>Prince Frederick Hbr (S 2)</option>" +
        "<option>Prince Frederick Hbr (S 3)</option>" +
        "<option>Prince Frederick Hbr (S 4)</option>" +
        "<option>Prince Frederick Hbr (S 5)</option>" +
        "<option>Prince Frederick Hbr (S 6)</option>" +
        "<option>Prince Frederick Hbr (S 7)</option>" +
        "<option>Prince Frederick Hbr (S 8)</option>" +
        "<option>Prince Frederick Hbr (S 9)</option>" +
        "<option>Prince Frederick Hbr (S 10)</option>" +
        "<option>Prince Frederick Hbr (E 1)</option>" +
        "<option>Prince Frederick Hbr (E 2)</option>" +
        "<option>Prince Frederick Hbr (E 3)</option>" +
        "<option>Prince Frederick Hbr (E 4)</option>" +
        "<option>Prince Frederick Hbr (N 1)</option>" +
        "<option>Prince Frederick Hbr (N 2)</option>" +
        "<option>Prince Frederick Hbr (N 3)</option>" +
        "<option>Prince Frederick Hbr (N 4)</option>" +
        "<option>Prince Frederick Hbr (N 5)</option>" +
        "<option>Prince Frederick Hbr (N 6)</option>" +
        "<option>Prince Frederick Hbr (N 7)</option>" +
        "<option>Andredon Is (1)</option>" +
        "<option>Anderdon Is (2)</option>" +
        "<option>Anderdon Is (3)</option>" +
        "<option>Anderdon Is (4)</option>" +
        "<option>Anderdon Is (5)</option>" +
        "<option>Anderdon Is (6)</option>" +
        "<option>Anderdon Is (7)</option>" +
        "<option>Anderdon Is (8)</option>" +
        "<option>Anderdon Is (9)</option>" +
        "<option>Anderdon Is (10)</option>" +
        "<option>Anderdon Is (11)</option>" +
        "<option>Anderdon Is (12)</option>" +
        "<option>Anderdon Is (13)</option>" +
        "<option>Anderdon Is (14)</option>" +
        "<option>Anderdon Is (15)</option>" +
        "<option>Anderdon Is (16)</option>" +
        "<option>Anderdon Is (17)</option>" +
        "<option>Anderdon Is (18)</option>" +
        "<option>Anderdon Is (19)</option>" +
        "<option>Anderdon Is (20)</option>" +
        "<option>Anderdon Is (21)</option>" +
        "<option>Anderdon Is (22)</option>" +
        "<option>Anderdon Is (23)</option>" +
        "<option>Anderdon Is (24)</option>" +
        "<option>Anderdon Is (25)</option>" +
        "<option>York Sound (E 1)</option>" +
        "<option>York Sound (E 2)</option>" +
        "<option>York Sound (E 3)</option>" +
        "<option>York Sound (E 4)</option>" +
        "<option>York Sound (E 5)</option>" +
        "<option>York Sound (E 6)</option>" +
        "<option>York Sound (E 7)</option>" +
        "<option>York Sound (E 8)</option>" +
        "<option>York Sound (E 9)</option>" +
        "<option>York Sound (E 10)</option>" +
        "<option>York Sound (E 11)</option>" +
        "<option>York Sound (E 12)</option>" +
        "<option>York Sound (E 13)</option>" +
        "<option>Augereau Is (S 13)</option>" +
        "<option>Augereau Is (S 12)</option>" +
        "<option>Augereau Is (S 11)</option>" +
        "<option>Augereau Is (S 10)</option>" +
        "<option>Augereau Is (S 9)</option>" +
        "<option>Augereau Is (S 8)</option>" +
        "<option>Augereau Is (S 7)</option>" +
        "<option>Augereau Is (S 6)</option>" +
        "<option>Augereau Is (S 5)</option>" +
        "<option>Augereau Is (S 4)</option>" +
        "<option>Augereau Is (S 3)</option>" +
        "<option>Augereau Is (S 2)</option>" +
        "<option>Augereau Is (S 1)</option>" +
        "<option>Augereau Is (1)</option>" +
        "<option>Augereau Is (2)</option>" +
        "<option>Augereau Is (3)</option>" +
        "<option>Augereau Is (4)</option>" +
        "<option>Augereau Is (5)</option>" +
        "<option>Augereau Is (6)</option>" +
        "<option>Augereau Is (7)</option>" +
        "<option>Augereau Is (8)</option>" +
        "<option>Augereau Is (E 1)</option>" +
        "<option>Augereau Is (E 2)</option>" +
        "<option>Cape Pond (W 4)</option>" +
        "<option>Cape Pond (W 3)</option>" +
        "<option>Cape Pond (W 2)</option>" +
        "<option>Cape Pond (W 1)</option>" +
        "<option>Cape Pond (E 1)</option>" +
        "<option>Cape Pond (E 2)</option>" +
        "<option>Cape Pond (E 3)</option>" +
        "<option>Cape Pond (E 4)</option>" +
        "<option>Cape Pond (E 5)</option>" +
        "<option>Cape Pond (E 6)</option>" +
        "<option>Cape Pond (E 7)</option>" +
        "<option>Cape Pond (E 8)</option>" +
        "<option>Cape Pond (E 9)</option>" +
        "<option>Cape Pond (E 10)</option>" +
        "<option>Cape Pond (E 11)</option>" +
        "<option>Cape Pond (E 12)</option>" +
        "<option>Cape Pond (E 13)</option>" +
        "<option>Cape Pond (E 14)</option>" +
        "<option>Cape Pond (E 15)</option>" +
        "<option>Cape Pond (E 16)</option>" +
        "<option>Scott Strait (1)</option>" +
        "<option>Scott Strait (2)</option>" +
        "<option>Scott Strait (3)</option>" +
        "<option>Scott Strait (4)</option>" +
        "<option>Scott Strait (5)</option>" +
        "<option>Scott Strait (6)</option>" +
        "<option>Scott Strait (7)</option>" +
        "<option>Scott Strait (8)</option>" +
        "<option>Scott Strait (9)</option>" +
        "<option>Scott Strait (10)</option>" +
        "<option>Scott Strait (11)</option>" +
        "<option>Scott Strait (12)</option>" +
        "<option>Scott Strait (13)</option>" +
        "<option>Scott Strait (14)</option>" +
        "<option>Scott Strait (15)</option>" +
        "<option>Scott Strait (16)</option>" +
        "<option>Capstan Is (N 1)</option>" +
        "<option>Capstan Is (N 2)</option>" +
        "<option>Capstan Is (E 1)</option>" +
        "<option>Capstan Is (E 2)</option>" +
        "<option>Capstan Is (E 3)</option>" +
        "<option>Montague Sound 1</option>" +
        "<option>Montague Sound 2</option>" +
        "<option>Montague Sound 3</option>" +
        "<option>Montague Sound 4</option>" +
        "<option>Montague Sound 5</option>" +
        "<option>Montague Sound 6</option>" +
        "<option>Montague Sound 7</option>" +
        "<option>Montague Sound 8</option>" +
        "<option>Montague Sound 9</option>" +
        "<option>Montague Sound 10</option>" +
        "<option>Montague Sound 11</option>" +
        "<option>Montague Sound 12</option>" +
        "<option>Mudge Bay (E 1)</option>" +
        "<option>Mudge Bay (E 2)</option>" +
        "<option>Mudge Bay (E 3)</option>" +
        "<option>Mudge Bay (E 4)</option>" +
        "<option>Mudge Bay (E 5)</option>" +
        "<option>Mudge Bay (E 6)</option>" +
        "<option>Mudge Bay (W 1)</option>" +
        "<option>Mudge Bay (W 2)</option>" +
        "<option>Mudge Bay (W 3)</option>" +
        "<option>Mudge Bay (W 4)</option>" +
        "<option>Mudge Bay (W 5)</option>" +
        "<option>Mudge Bay (W 6)</option>" +
        "<option>Montague Sound 13</option>" +
        "<option>Montague Sound 14</option>" +
        "<option>Montague Sound 15</option>" +
        "<option>Montague Sound 16</option>" +
        "<option>Montague Sound 17</option>" +
        "<option>Montague Sound 18</option>" +
        "<option>Montague Sound 19</option>" +
        "<option>Montague Sound 20</option>" +
        "<option>Montague Sound 21</option>" +
        "<option>Montague Sound 22</option>" +
        "<option>Montague Sound 23</option>" +
        "<option>Swift Bay (W 1)</option>" +
        "<option>Swift Bay (W 2)</option>" +
        "<option>Swift Bay (W 3)</option>" +
        "<option>Swift Bay (W 4)</option>" +
        "<option>Swift Bay (W 5)</option>" +
        "<option>Swift Bay (W 6)</option>" +
        "<option>Swift Bay (W 7)</option>" +
        "<option>Swift Bay (W 8)</option>" +
        "<option>Swift Bay (W 9)</option>" +
        "<option>Swift Bay (W 10)</option>" +
        "<option>Swift Bay (1)</option>" +
        "<option>Swift Bay (2)</option>" +
        "<option>Swift Bay (N 1)</option>" +
        "<option>Swift Bay (N 2)</option>" +
        "<option>Swift Bay (N 3)</option>" +
        "<option>Swift Bay (N 4)</option>" +
        "<option>Montague Sound (E 1)</option>" +
        "<option>Montague Sound (E 2)</option>" +
        "<option>Montague Sound (E 3)</option>" +
        "<option>Montague Sound (E 4)</option>" +
        "<option>Montague Sound (E 5)</option>" +
        "<option>Montague Sound (E 6)</option>" +
        "<option>Montague Sound (E 7)</option>" +
        "<option>Montague Sound (E 8)</option>" +
        "<option>Montague Sound (E 8)</option>" +
        "<option>Montague Sound (E 10)</option>" +
        "<option>Montague Sound (E 11)</option>" +
        "<option>Montague Sound (E 12)</option>" +
        "<option>Montague Sound (E 13)</option>" +
        "<option>Montague Sound (E 14)</option>" +
        "<option>Montague Sound (E 15)</option>" +
        "<option>Montague Sound (E 16)</option>" +
        "<option>Montague Sound (E 17)</option>" +
        "<option>Montague Sound (E 18)</option>" +
        "<option>Montague Sound (E 19)</option>" +
        "<option>Montague Sound (E 20)</option>" +
        "<option>Montague Sound (E 21)</option>" +
        "<option>Montague Sound (E 22)</option>" +
        "<option>Montague Sound (E 23)</option>" +
        "<option>Sharp Peak (S 3)</option>" +
        "<option>Sharp Peak (S 2)</option>" +
        "<option>Sharp Peak (S 1)</option>" +
        "<option>Cape Voltarie (S 4)</option>" +
        "<option>Cape Voltarie (S 3)</option>" +
        "<option>Cape Voltarie (S 2)</option>" +
        "<option>Cape Voltarie (S 1)</option>" +
        "<option>Cape Voltarie</option>" +
        "<option>Davidson Pt (1)</option>" +
        "<option>Davidson Pt (2)</option>" +
        "<option>Krait Bay (W)</option>" +
        "<option>Krait Bay (E 1)</option>" +
        "<option>Krait Bay (E 2)</option>" +
        "<option>Voltaire Passage 1</option>" +
        "<option>Voltaire Passage 2</option>" +
        "<option>Voltaire Passage 3</option>" +
        "<option>Voltaire Passage 4</option>" +
        "<option>Voltaire Passage 5</option>" +
        "<option>Voltaire Passage 6</option>" +
        "<option>Voltaire Passage 7</option>" +
        "<option>Voltaire Passage 8</option>" +
        "<option>Voltaire Passage 9</option>" +
        "<option>Voltaire Passage 10</option>" +
        "<option>Voltaire Passage 11</option>" +
        "<option>Bigge Pt (W 13)</option>" +
        "<option>Bigge Pt (W 12)</option>" +
        "<option>Bigge Pt (W 11)</option>" +
        "<option>Bigge Pt (W 10)</option>" +
        "<option>Bigge Pt (W 9)</option>" +
        "<option>Bigge Pt (W 8)</option>" +
        "<option>Bigge Pt (W 7)</option>" +
        "<option>Bigge Pt (W 6)</option>" +
        "<option>Bigge Pt (W 5)</option>" +
        "<option>Bigge Pt (W 4)</option>" +
        "<option>Bigge Pt (W 3)</option>" +
        "<option>Bigge Pt (W 2)</option>" +
        "<option>Bigge Pt (W 1)</option>" +
        "<option>Bigge Pt</option>" +
        "<option>Bigge Pt (S 1)</option>" +
        "<option>Bigge Pt (S 2)</option>" +
        "<option>Bigge Pt (S 3)</option>" +
        "<option>Bigge Pt (S 4)</option>" +
        "<option>Bigge Pt (S 5)</option>" +
        "<option>Bigge Pt (S 6)</option>" +
        "<option>Pickering Pt (W 4)</option>" +
        "<option>Pickering Pt (W 3)</option>" +
        "<option>Pickering Pt (W 2)</option>" +
        "<option>Pickering Pt (W 1)</option>" +
        "<option>Pickering Pt (S 1)</option>" +
        "<option>Pickering Pt (S 2)</option>" +
        "<option>Pickering Pt (S 3)</option>" +
        "<option>Pickering Pt (S 4)</option>" +
        "<option>Pickering Pt (S 5)</option>" +
        "<option>Pickering Pt (S 6)</option>" +
        "<option>Crystal Ck (W 11)</option>" +
        "<option>Crystal Ck (W 10)</option>" +
        "<option>Crystal Ck (W 9)</option>" +
        "<option>Crystal Ck (W 8)</option>" +
        "<option>Crystal Ck (W 7)</option>" +
        "<option>Crystal Ck (W 6)</option>" +
        "<option>Crystal Ck (W 5)</option>" +
        "<option>Crystal Ck (W 4)</option>" +
        "<option>Crystal Ck (W 3)</option>" +
        "<option>Crystal Ck (W 2)</option>" +
        "<option>Crystal Ck (W 1)</option>" +
        "<option>Crystal Hd (N)</option>" +
        "<option>Crystal Hd (S 1)</option>" +
        "<option>Crystal Hd (S 2)</option>" +
        "<option>Crystal Hd (S 3)</option>" +
        "<option>MacGregor Pt (N 4)</option>" +
        "<option>MacGregor Pt (N 3)</option>" +
        "<option>MacGregor Pt (N 2)</option>" +
        "<option>MacGregor Pt (N 1)</option>" +
        "<option>Port Warrender (S 1)</option>" +
        "<option>Port Warrender (S 2)</option>" +
        "<option>Port Warrender (S 3)</option>" +
        "<option>Port Warrender (SE 1)</option>" +
        "<option>Port Warrender (SE 2)</option>" +
        "<option>Port Warrender (SE 3)</option>" +
        "<option>Port Warrender (SE 4)</option>" +
        "<option>Port Warrender (SE 5)</option>" +
        "<option>Kimberley Coastal Camp</option>" +
        "<option>Port Warrender (SE 7)</option>" +
        "<option>Port Warrender (SE 8)</option>" +
        "<option>Port Warrender (SE 9)</option>" +
        "<option>Port Warrender (SE 10)</option>" +
        "<option>Port Warrender (SE 11)</option>" +
        "<option>Port Warrender (SE 12)</option>" +
        "<option>Port Warrender (E 1)</option>" +
        "<option>Port Warrender (E 2)</option>" +
        "<option>Port Warrender (E 3)</option>" +
        "<option>Port Warrender (E 4)</option>" +
        "<option>Port Warrender (E 5)</option>" +
        "<option>Port Warrender (E 6)</option>" +
        "<option>Port Warrender (E 7)</option>" +
        "<option>Steep Head Is (E 1)</option>" +
        "<option>Steep Head Is (E 2)</option>" +
        "<option>Steep Head Is (E 3)</option>" +
        "<option>Steep Head Is (E 4)</option>" +
        "<option>Steep Head Is (E 5)</option>" +
        "<option>Steep Head Is (E 6)</option>" +
        "<option>Steep Head Is (E 7)</option>" +
        "<option>Steep Head Is (E 8)</option>" +
        "<option>Steep Head Is (E 9)</option>" +
        "<option>Moon Rock pt (1)</option>" +
        "<option>Moon Rock pt (2)</option>" +
        "<option>Moon Rock pt (3)</option>" +
        "<option>Moon Rock pt (4)</option>" +
        "<option>Moon Rock pt (5)</option>" +
        "<option>Moon Rock pt (6)</option>" +
        "<option>Moon Rock pt (7)</option>" +
        "<option>Cliffy Pt (S 1)</option>" +
        "<option>Cliffy Pt (S 2)</option>" +
        "<option>Cliffy Pt (S 3)</option>" +
        "<option>Cliffy Pt (S 4)</option>" +
        "<option>Cliffy Pt (S 5)</option>" +
        "<option>Cliffy Pt (S 6)</option>" +
        "<option>Cliffy Pt (S 7)</option>" +
        "<option>Cliffy Pt (S 8)</option>" +
        "<option>Cliffy Pt (S 9)</option>" +
        "<option>Cliffy Pt (N 1)</option>" +
        "<option>Cliffy Pt (N 2)</option>" +
        "<option>Cliffy Pt (N 3)</option>" +
        "<option>Cliffy Pt (N 4)</option>" +
        "<option>Cliffy Pt (N 5)</option>" +
        "<option>Cliffy Pt (N 6)</option>" +
        "<option>Cliffy Pt (N 7)</option>" +
        "<option>Cliffy Pt (N 8)</option>" +
        "<option>Cliffy Pt (N 9)</option>" +
        "<option>Borda Is (S 12)</option>" +
        "<option>Borda Is (S 11)</option>" +
        "<option>Borda Is (S 10)</option>" +
        "<option>Borda Is (S 9)</option>" +
        "<option>Borda Is (S 8)</option>" +
        "<option>Borda Is (S 7)</option>" +
        "<option>Borda Is (S 6)</option>" +
        "<option>Borda Is (S 5)</option>" +
        "<option>Borda Is (S 4)</option>" +
        "<option>Borda Is (S 3)</option>" +
        "<option>Borda Is (S 3)</option>" +
        "<option>Borda Is (S 1)</option>" +
        "<option>Borda Is (E 1)</option>" +
        "<option>Borda Is (E 2)</option>" +
        "<option>Borda Is (E 3)</option>" +
        "<option>Borda Is (E 4)</option>" +
        "<option>Borda Is (E 5)</option>" +
        "<option>Borda Is (E 6)</option>" +
        "<option>Borda Is (E 7)</option>" +
        "<option>Borda Is (E 8)</option>" +
        "<option>Borda Is (E 9)</option>" +
        "<option>Borda Is (E 10)</option>" +
        "<option>Borda Is (E 11)</option>" +
        "<option>Borda Is (E 12)</option>" +
        "<option>Borda Is (E 13)</option>" +
        "<option>Borda Is (E 14)</option>" +
        "<option>Borda Is (E 15)</option>" +
        "<option>Borda Is (E 16)</option>" +
        "<option>Borda Is (E 17)</option>" +
        "<option>Borda Is (NE 1)</option>" +
        "<option>Borda Is (NE 2)</option>" +
        "<option>Borda Is (NE 3)</option>" +
        "<option>Borda Is (NE 4)</option>" +
        "<option>Borda Is (NE 5)</option>" +
        "<option>Borda Is (NE 6)</option>" +
        "<option>Borda Is (NE 7)</option>" +
        "<option>Borda Is (NE 8)</option>" +
        "<option>Borda Is (NE 9)</option>" +
        "<option>Borda Is (NE 10)</option>" +
        "<option>Borda Is (NE 11)</option>" +
        "<option>Borda Is (NE 12)</option>" +
        "<option>Borda Is (NE 13)</option>" +
        "<option>Borda Is (NE 14)</option>" +
        "<option>Borda Is (NE 15)</option>" +
        "<option>Borda Is (NE 16)</option>" +
        "<option>Gibson Point (S 23)</option>" +
        "<option>Gibson Point (S 22)</option>" +
        "<option>Gibson Point (S 21)</option>" +
        "<option>Gibson Point (S 20)</option>" +
        "<option>Gibson Point (S 19)</option>" +
        "<option>Gibson Point (S 18)</option>" +
        "<option>Gibson Point (S 17)</option>" +
        "<option>Gibson Point (S 16)</option>" +
        "<option>Gibson Point (S 15)</option>" +
        "<option>Gibson Point (S 14)</option>" +
        "<option>Gibson Point (S 13)</option>" +
        "<option>Gibson Point (S 12)</option>" +
        "<option>Gibson Point (S 11)</option>" +
        "<option>Gibson Point (S 10)</option>" +
        "<option>Gibson Point (S 9)</option>" +
        "<option>Gibson Point (S 8)</option>" +
        "<option>Gibson Point (S 7)</option>" +
        "<option>Gibson Point (S 6)</option>" +
        "<option>Gibson Point (S 5)</option>" +
        "<option>Gibson Point (S 4)</option>" +
        "<option>Gibson Point (S 3)</option>" +
        "<option>Gibson Point (S 2)</option>" +
        "<option>Gibson Point (S 1)</option>" +
        "<option>Gibson Pt (E 1)</option>" +
        "<option>Gibson Pt (E 2)</option>" +
        "<option>Gibson Pt (E 3)</option>" +
        "<option>Gibson Pt (E 4)</option>" +
        "<option>Gibson Pt (E 5)</option>" +
        "<option>Gibson Pt (E 6)</option>" +
        "<option>Gibson Pt (E 7)</option>" +
        "<option>Parry Harbour (S 1)</option>" +
        "<option>Parry Harbour (S 2)</option>" +
        "<option>Parry Harbour (S 3)</option>" +
        "<option>Parry Harbour (S 4)</option>" +
        "<option>Parry Harbour (S 5)</option>" +
        "<option>Parry Harbour (S 6)</option>" +
        "<option>Parry Harbour (E 1)</option>" +
        "<option>Parry Harbour (E 2)</option>" +
        "<option>Parry Harbour (E 3)</option>" +
        "<option>Parry Harbour (E 4)</option>" +
        "<option>Parry Harbour (E 5)</option>" +
        "<option>Parry Harbour (E 6)</option>" +
        "<option>Hat Pt (S 13)</option>" +
        "<option>Hat Pt (S 12)</option>" +
        "<option>Hat Pt (S 11)</option>" +
        "<option>Hat Pt (S 10)</option>" +
        "<option>Hat Pt (S 9)</option>" +
        "<option>Hat Pt (S 8)</option>" +
        "<option>Hat Pt (S 7)</option>" +
        "<option>Hat Pt (S 6)</option>" +
        "<option>Hat Pt (S 5)</option>" +
        "<option>Hat Pt (S 4)</option>" +
        "<option>Hat Pt (S 3)</option>" +
        "<option>Hat Pt (S 2)</option>" +
        "<option>Hat Pt (S 1)</option>" +
        "<option>Hat Pt (E 1)</option>" +
        "<option>Hat Pt (E 2)</option>" +
        "<option>Hat Pt (E 3)</option>" +
        "<option>Hat Pt (E 4)</option>" +
        "<option>Hat Pt (E 5)</option>" +
        "<option>Hat Pt (E 6)</option>" +
        "<option>Hat Pt (E 7)</option>" +
        "<option>Hat Pt (E 8)</option>" +
        "<option>Hat Pt (E 9)</option>" +
        "<option>Cape Bougainville (W 3)</option>" +
        "<option>Cape Bougainville (W 2)</option>" +
        "<option>Cape Bougainville (W 1)</option>" +
        "<option>Cape Bougainville (E 1)</option>" +
        "<option>Cape Bougainville (E 2)</option>" +
        "<option>Cape Bougainville (E 3)</option>" +
        "<option>Cape Bougainville (E 4)</option>" +
        "<option>Cape Bougainville (E 5)</option>" +
        "<option>Cape Bougainville (E 6)</option>" +
        "<option>Cape Bougainville (E 7)</option>" +
        "<option>Cape Bougainville (E 8)</option>" +
        "<option>Cape Bougainville (E 9)</option>" +
        "<option>Cape Bougainville (E 10)</option>" +
        "<option>Cape Bougainville (E 11)</option>" +
        "<option>Cape Bougainville (E 12)</option>" +
        "<option>Cape Bougainville (E 13)</option>" +
        "<option>Cape Bougainville (E 14)</option>" +
        "<option>Cape Bougainville (E 15)</option>" +
        "<option>Cape Bougainville (E 16)</option>" +
        "<option>Cape Bougainville (E 17)</option>" +
        "<option>Cape Bougainville (E 18)</option>" +
        "<option>Cape Bougainville (E 19)</option>" +
        "<option>Cape Bougainville (E 20)</option>" +
        "<option>Cape Bougainville (E 21)</option>" +
        "<option>Cape Bougainville (E 22)</option>" +
        "<option>Cape Bougainville (E 23)</option>" +
        "<option>Cape Bougainville (E 24)</option>" +
        "<option>Cape Bougainville (E 25)</option>" +
        "<option>Cape Bougainville (E 26)</option>" +
        "<option>Cape Bougainville (E 27)</option>" +
        "<option>Freshwater Bay (N 1)</option>" +
        "<option>Freshwater Bay (N 2)</option>" +
        "<option>Freshwater Bay (N 3)</option>" +
        "<option>Freshwater Bay (E 1)</option>" +
        "<option>Freshwater Bay (E 2)</option>" +
        "<option>Freshwater Bay (E 3)</option>" +
        "<option>Freshwater Bay (E 4)</option>" +
        "<option>Freshwater Bay (E 5)</option>" +
        "<option>Freshwater Bay (E 6)</option>" +
        "<option>Seaflower Bay (1)</option>" +
        "<option>Seaflower Bay (2)</option>" +
        "<option>Seaflower Bay (3)</option>" +
        "<option>Seaflower Bay (W)</option>" +
        "<option>Seaflower Bay (SW)</option>" +
        "<option>August Pt (W)</option>" +
        "<option>August Pt (N)</option>" +
        "<option>August Pt (S 1)</option>" +
        "<option>August Pt (S 2)</option>" +
        "<option>July Pt (S 1)</option>" +
        "<option>July Pt (S 2)</option>" +
        "<option>July Pt (S 3)</option>" +
        "<option>July Pt (S 4)</option>" +
        "<option>June Pt (N)</option>" +
        "<option>Jar Is (W 1)</option>" +
        "<option>Jar Is (W 2)</option>" +
        "<option>Jar Is (W 3)</option>" +
        "<option>Jar Is (W 4)</option>" +
        "<option>Jar Is (W 5)</option>" +
        "<option>Hill Pt (N 2)</option>" +
        "<option>Hill Pt (N 1)</option>" +
        "<option>Myola Bluff (S 6)</option>" +
        "<option>Myola Bluff (S 5)</option>" +
        "<option>Myola Bluff (S 4)</option>" +
        "<option>Myola Bluff (S 3)</option>" +
        "<option>Myola Bluff (S 2)</option>" +
        "<option>Myola Bluff (S 1)</option>" +
        "<option>Myola Bluff</option>" +
        "<option>Red Bluff (S)</option>" +
        "<option>Red Bluff</option>" +
        "<option>Pauline Bay (S 1)</option>" +
        "<option>Pauline Bay (S 2)</option>" +
        "<option>Pauline Bay (S 3)</option>" +
        "<option>Pauline Bay (N 1)</option>" +
        "<option>Pauline Bay (N 2)</option>" +
        "<option>Truscott (S 6)</option>" +
        "<option>Truscott (S 5)</option>" +
        "<option>Truscott (S 4)</option>" +
        "<option>Truscott (S 3)</option>" +
        "<option>Truscott (S 2)</option>" +
        "<option>Truscott (S 1)</option>" +
        "<option>Truscott (W 1)</option>" +
        "<option>Truscott (W 2)</option>" +
        "<option>Truscott (W 3)</option>" +
        "<option>Truscott (W 4)</option>" +
        "<option>Truscott (W 5)</option>" +
        "<option>Truscott (W 6)</option>" +
        "<option>Truscott (N 1)</option>" +
        "<option>Truscott (N 2)</option>" +
        "<option>Truscott (N 3)</option>" +
        "<option>Truscott (N 4)</option>" +
        "<option>Truscott (N 5)</option>" +
        "<option>Truscott (N 6)</option>" +
        "<option>Truscott (N 7)</option>" +
        "<option>Truscott (N 8)</option>" +
        "<option>Truscott (N 9)</option>" +
        "<option>Truscott (N 10)</option>" +
        "<option>Truscott (N 11)</option>" +
        "<option>Truscott (N 12)</option>" +
        "<option>Truscott (N 31)</option>" +
        "<option>Truscott (NE 1)</option>" +
        "<option>Truscott (NE 2)</option>" +
        "<option>Truscott (NE 3)</option>" +
        "<option>Truscott (NE 4)</option>" +
        "<option>Truscott (NE 5)</option>" +
        "<option>Truscott (NE 6)</option>" +
        "<option>Anjo Peninsula (W 1)</option>" +
        "<option>Anjo Peninsula (W 2)</option>" +
        "<option>Anjo Peninsula (W 3)</option>" +
        "<option>Anjo Peninsula (W 4)</option>" +
        "<option>Anjo Peninsula (W 5)</option>" +
        "<option>Anjo Peninsula (W 6)</option>" +
        "<option>Anjo Peninsula (W 7)</option>" +
        "<option>Sharp Point (W 2)</option>" +
        "<option>Sharp Point (W 1)</option>" +
        "<option>Sharp Point (E)</option>" +
        "<option>Womerah Bay (1)</option>" +
        "<option>Womerah Bay (2)</option>" +
        "<option>Womerah Bay (3)</option>" +
        "<option>Womerah Bay (4)</option>" +
        "<option>Womerah Bay (5)</option>" +
        "<option>Womerah Bay (6)</option>" +
        "<option>Anjo Cove</option>" +
        "<option>Anjo Hills (1)</option>" +
        "<option>Anjo Hills (2)</option>" +
        "<option>Anjo Hills (3)</option>" +
        "<option>Mackenzie Anchorage (N 3)</option>" +
        "<option>Mackenzie Anchorage (N 2)</option>" +
        "<option>Mackenzie Anchorage (N 1)</option>" +
        "<option>West Bay (1)</option>" +
        "<option>West Bay (2)</option>" +
        "<option>West Bay (3)</option>" +
        "<option>West Bay (4)</option>" +
        "<option>West Bay (5)</option>" +
        "<option>West Bay (6)</option>" +
        "<option>West Bay (7)</option>" +
        "<option>West Bay (8)</option>" +
        "<option>Guy Point</option>" +
        "<option>Guy Point (S 1)</option>" +
        "<option>Guy Point (S 2)</option>" +
        "<option>Woppinbie Ck (W 2)</option>" +
        "<option>Woppinbie Ck (W 1)</option>" +
        "<option>King Harman Pt (W 5)</option>" +
        "<option>King Harman Pt (W 4)</option>" +
        "<option>King Harman Pt (W 3)</option>" +
        "<option>King Harman Pt (W 2)</option>" +
        "<option>King Harman Pt (W 1)</option>" +
        "<option>King Harman Pt (S 1)</option>" +
        "<option>King Harman Pt (S 2)</option>" +
        "<option>King Harman Pt (S 3)</option>" +
        "<option>King Harman Pt (S 4)</option>" +
        "<option>Marra Garra</option>" +
        "<option>Wanganjie</option>" +
        "<option>McGowan Island</option>" +
        "<option>McGowan Island (N 1)</option>" +
        "<option>McGowan Island (N 2)</option>" +
        "<option>Jakes Beach (S 3)</option>" +
        "<option>Jakes Beach (S 2)</option>" +
        "<option>Jakes Beach (S 1)</option>" +
        "<option>Jakes Beach</option>" +
        "<option>Fish Rock (S 2)</option>" +
        "<option>Fish Rock (S 1)</option>" +
        "<option>Fish Rock (N 1)</option>" +
        "<option>Fish Rock (N 2)</option>" +
        "<option>Fish Rock (N 3)</option>" +
        "<option>Fish Rock (N 4)</option>" +
        "<option>Bluff Point (E)</option>" +
        "<option>Bluff Point (W)</option>" +
        "<option>Bluff Point (SE 1)</option>" +
        "<option>Bluff Point (SE 2)</option>" +
        "<option>Honeymoon Beach (1)</option>" +
        "<option>Honeymoon Beach (2)</option>" +
        "<option>Tamarinda</option>" +
        "<option>Tidepool Hill (S)</option>" +
        "<option>Tidepool Hill (N)</option>" +
        "<option>Wargally (S 2)</option>" +
        "<option>Wargally (S 1)</option>" +
        "<option>Wargally</option>" +
        "<option>Galley Pt (W)</option>" +
        "<option>Galley Pt (E)</option>" +
        "<option>Lull Bay (N 2)</option>" +
        "<option>Lull Bay (N 1)</option>" +
        "<option>Lull Bay</option>" +
        "<option>Lull Bay (S)</option>" +
        "<option>Beauty Point</option>" +
        "<option>Beauty Point spit</option>" +
        "<option>Drysdale River island</option>" +
        "<option>Curran Pt  (S)</option>" +
        "<option>Curran Pt</option>" +
        "<option>Curran Pt  (N 1)</option>" +
        "<option>Curran Pt  (N 2)</option>" +
        "<option>Curran Pt  (N 3)</option>" +
        "<option>Curran Pt  (N 4)</option>" +
        "<option>Curran Pt  (N 5)</option>" +
        "<option>Curran Pt  (N 6)</option>" +
        "<option>Curran Pt  (N 7)</option>" +
        "<option>Curran Pt  (N 8)</option>" +
        "<option>Curran Pt  (N 9)</option>" +
        "<option>Curran Pt  (N 10)</option>" +
        "<option>Curran Pt  (N 11)</option>" +
        "<option>Cape Talbot (S 2)</option>" +
        "<option>Cape Talbot (S 1)</option>" +
        "<option>Cape Talbot spit</option>" +
        "<option>Sandy Island</option>" +
        "<option>Cape Talbot (E 1)</option>" +
        "<option>Cape Talbot (E 2)</option>" +
        "<option>Cape Talbot (E 3)</option>" +
        "<option>Cape Talbot (E 4)</option>" +
        "<option>Cape Talbot (E 5)</option>" +
        "<option>Cape Talbot (E 6)</option>" +
        "<option>Cape Talbot (E 7)</option>" +
        "<option>Cape Talbot (E 8)</option>" +
        "<option>Cape Talbot (E 9)</option>" +
        "<option>Cape Talbot (E 10)</option>" +
        "<option>Cape Talbot (E 11)</option>" +
        "<option>Cape Londonderry (W 14)</option>" +
        "<option>Cape Londonderry (W 13)</option>" +
        "<option>Cape Londonderry (W 12)</option>" +
        "<option>Cape Londonderry (W 11)</option>" +
        "<option>Cape Londonderry (W 10)</option>" +
        "<option>Cape Londonderry (W 9)</option>" +
        "<option>Cape Londonderry (W 8)</option>" +
        "<option>Cape Londonderry (W 7)</option>" +
        "<option>Cape Londonderry (W 6)</option>" +
        "<option>Cape Londonderry (W 5)</option>" +
        "<option>Cape Londonderry (W 4)</option>" +
        "<option>Cape Londonderry (W 3)</option>" +
        "<option>Cape Londonderry (W 2)</option>" +
        "<option>Cape Londonderry (W 1)</option>" +
        "<option>Cape Londonderry</option>" +
        "<option>Cape Londonderry (E 1)</option>" +
        "<option>Cape Londonderry (E 2)</option>" +
        "<option>Cape Londonderry (E 3)</option>" +
        "<option>Cape Londonderry (E 4)</option>" +
        "<option>Cape Londonderry (E 5)</option>" +
        "<option>Cape Londonderry (E 6)</option>" +
        "<option>Cape Londonderry (E 7)</option>" +
        "<option>Cape Londonderry (E 8)</option>" +
        "<option>Cape Londonderry (E 9)</option>" +
        "<option>Cape Londonderry (E 10)</option>" +
        "<option>Cape Londonderry (E 11)</option>" +
        "<option>Cape Londonderry (E 12)</option>" +
        "<option>Cape Londonderry (E 13)</option>" +
        "<option>Cape Londonderry (E 14)</option>" +
        "<option>Cape Londonderry (E 15)</option>" +
        "<option>Cape Londonderry (E 16)</option>" +
        "<option>Cape Londonderry (E 17)</option>" +
        "<option>Cape Londonderry (E 18)</option>" +
        "<option>Cape Londonderry (E 19)</option>" +
        "<option>Cape Londonderry (E 20)</option>" +
        "<option>Cape Londonderry (E 21)</option>" +
        "<option>Cape Londonderry (E 22)</option>" +
        "<option>Cape Londonderry (E 23)</option>" +
        "<option>Cape Londonderry (E 24)</option>" +
        "<option>Cape Londonderry (E 25)</option>" +
        "<option>Cape Londonderry (E 26)</option>" +
        "<option>Cape Londonderry (E 27)</option>" +
        "<option>Cape Londonderry (E 28)</option>" +
        "<option>Cape Londonderry (E 29)</option>" +
        "<option>Cape Londonderry (E 30)</option>" +
        "<option>Cape Londonderry (E 31)</option>" +
        "<option>Cape Londonderry (E 32)</option>" +
        "<option>Cape Londonderry (E 33)</option>" +
        "<option>Cape Londonderry (E 34)</option>" +
        "<option>Cape Londonderry (E 34)</option>" +
        "<option>Cape Londonderry (E 36)</option>" +
        "<option>Cape Londonderry (E 37)</option>" +
        "<option>Cape Londonderry (E 38)</option>" +
        "<option>Cape Londonderry (E 39)</option>" +
        "<option>Cape Londonderry (E 40)</option>" +
        "<option>Cape Londonderry (E 41)</option>" +
        "<option>Cape Londonderry (E 42)</option>" +
        "<option>Cape Londonderry (E 43)</option>" +
        "<option>Cape Londonderry (E 44)</option>" +
        "<option>Cape Londonderry (E 45)</option>" +
        "<option>Cape Londonderry (E 46)</option>" +
        "<option>Cape Londonderry (E 47)</option>" +
        "<option>Cape Londonderry (E 48)</option>" +
        "<option>Cape Londonderry (E 49)</option>" +
        "<option>Cape Londonderry (E 50)</option>" +
        "<option>Cape Londonderry (E 51)</option>" +
        "<option>Cape Londonderry (E 52)</option>" +
        "<option>Cape Londonderry (E 53)</option>" +
        "<option>Cape Londonderry (E 54)</option>" +
        "<option>Cape Londonderry (E 55)</option>" +
        "<option>Cape Londonderry (E 56)</option>" +
        "<option>Cape Londonderry (E 57)</option>" +
        "<option>Cape Londonderry (E 58)</option>" +
        "<option>Cape Londonderry (E 59)</option>" +
        "<option>Cape Londonderry (E 60)</option>" +
        "<option>Cape Londonderry (E 61)</option>" +
        "<option>Cape Londonderry (E 62)</option>" +
        "<option>Cape Londonderry (E 63)</option>" +
        "<option>Cape Londonderry (E 64)</option>" +
        "<option>Cape Londonderry (E 65)</option>" +
        "<option>Cape Londonderry (E 66)</option>" +
        "<option>Cape Londonderry (E 67)</option>" +
        "<option>Cape Londonderry (E 68)</option>" +
        "<option>Cape Londonderry (E 69)</option>" +
        "<option>Cape Londonderry (E 70)</option>" +
        "<option>Cape Londonderry (E 71)</option>" +
        "<option>Cape Londonderry (E 72)</option>" +
        "<option>Cape Londonderry (E 73)</option>" +
        "<option>Cape Londonderry (E 74)</option>" +
        "<option>Cape Londonderry (E 75)</option>" +
        "<option>Cape Londonderry (E 76)</option>" +
        "<option>Cape Londonderry (E 77)</option>" +
        "<option>Cape Londonderry (E 78)</option>" +
        "<option>Cape Londonderry (E 79)</option>" +
        "<option>Cape Londonderry (E 80)</option>" +
        "<option>Cape Londonderry (E 81)</option>" +
        "<option>Cape Londonderry (E 82)</option>" +
        "<option>Cape Londonderry (E 83)</option>" +
        "<option>Cape Londonderry (E 84)</option>" +
        "<option>Cape Londonderry (E 85)</option>" +
        "<option>Cape Londonderry (E 86)</option>" +
        "<option>Cape Londonderry (E 87)</option>" +
        "<option>Cape Londonderry (E 88)</option>" +
        "<option>Faraway Bay (W 1)</option>" +
        "<option>Faraway Bay (W 2)</option>" +
        "<option>Faraway Bay (W 3)</option>" +
        "<option>Faraway Bay (W 4)</option>" +
        "<option>Faraway Bay (W 5)</option>" +
        "<option>Faraway Bay (W 6)</option>" +
        "<option>Faraway Bay (W 7)</option>" +
        "<option>Faraway Bay camp</option>" +
        "<option>Faraway Bay (W 9)</option>" +
        "<option>Gumboot Bay (W 1)</option>" +
        "<option>Gumboot Bay (W 2)</option>" +
        "<option>Gumboot Bay (S 1)</option>" +
        "<option>Gumboot Bay (S 2)</option>" +
        "<option>Gumboot Bay (S 3)</option>" +
        "<option>Gumboot Bay (E 1)</option>" +
        "<option>Gumboot Bay (E 2)</option>" +
        "<option>Gumboot Bay (E 3)</option>" +
        "<option>Gumboot Bay (E 4)</option>" +
        "<option>Gumboot Bay (E 5)</option>" +
        "<option>Gumboot Bay (E 6)</option>" +
        "<option>Gumboot Bay (E 7)</option>" +
        "<option>Gumboot Bay (E 8)</option>" +
        "<option>Gumboot Bay (E 9)</option>" +
        "<option>Gumboot Bay (E 10)</option>" +
        "<option>Gumboot Bay (E 11)</option>" +
        "<option>Gumboot Bay (E 12)</option>" +
        "<option>Gumboot Bay (E 13)</option>" +
        "<option>Gumboot Bay (E 14)</option>" +
        "<option>King George River (W 3)</option>" +
        "<option>King George River (W 2)</option>" +
        "<option>King George River (W 1)</option>" +
        "<option>King George River</option>" +
        "<option>King George River (E 1)</option>" +
        "<option>Cape Rulhieres</option>" +
        "<option>Cape Rulhieres (E 1)</option>" +
        "<option>Cape Rulhieres (E 2)</option>" +
        "<option>Cape Rulhieres (E 3)</option>" +
        "<option>Cape Rulhieres (E 4)</option>" +
        "<option>Cape Rulhieres (E 5)</option>" +
        "<option>Cape Rulhieres (E 6)</option>" +
        "<option>Cape Rulhieres (E 7)</option>" +
        "<option>Cape Rulhieres (E 8)</option>" +
        "<option>Cape Rulhieres (E 9)</option>" +
        "<option>Cape Rulhieres (E 10)</option>" +
        "<option>Cape Rulhieres (E 11)</option>" +
        "<option>Cape Rulhieres (E 12)</option>" +
        "<option>Cape Rulhieres (E 13)</option>" +
        "<option>Cape Bernier (W 10)</option>" +
        "<option>Cape Bernier (W 9)</option>" +
        "<option>Cape Bernier (W 8)</option>" +
        "<option>Cape Bernier (W 7)</option>" +
        "<option>Cape Bernier (W 6)</option>" +
        "<option>Cape Bernier (W 5)</option>" +
        "<option>Cape Bernier (W 4)</option>" +
        "<option>Cape Bernier (W 3)</option>" +
        "<option>Cape Bernier (W 2)</option>" +
        "<option>Cape Bernier (W 1)</option>" +
        "<option>Cape Bernier</option>" +
        "<option>Cape Bernier (E 1)</option>" +
        "<option>Cape Bernier (E 2)</option>" +
        "<option>Cape Bernier (E 3)</option>" +
        "<option>Cape Bernier (E 4)</option>" +
        "<option>Cape Bernier (E 5)</option>" +
        "<option>Cape Bernier (E 6)</option>" +
        "<option>Cape Bernier (E 7)</option>" +
        "<option>Cape Bernier (E 8)</option>" +
        "<option>Cape Bernier (E 9)</option>" +
        "<option>Rocky Island (W)</option>" +
        "<option>Seaplane Bay</option>" +
        "<option>Rocky Island (S)</option>" +
        "<option>Evelyn Island (E 1)</option>" +
        "<option>Evelyn Island (E 2)</option>" +
        "<option>Evelyn Island (E 3)</option>" +
        "<option>Evelyn Island (E 4)</option>" +
        "<option>Evelyn Island (E 5)</option>" +
        "<option>Cape Whiskey (W 3)</option>" +
        "<option>Cape Whiskey (W 2)</option>" +
        "<option>Cape Whiskey (W 1)</option>" +
        "<option>Cape Whiskey (E 1)</option>" +
        "<option>Cape Whiskey (E 2)</option>" +
        "<option>Cape Whiskey (E 3)</option>" +
        "<option>Cape Whiskey (E 4)</option>" +
        "<option>Cape Whiskey (E 5)</option>" +
        "<option>Cape Whiskey (E 6)</option>" +
        "<option>Cape Whiskey (E 7)</option>" +
        "<option>Elsie Island (W 3)</option>" +
        "<option>Elsie Island (W 2)</option>" +
        "<option>Elsie Island (W 1)</option>" +
        "<option>Elsie Island (E 1)</option>" +
        "<option>Elsie Island (E 2)</option>" +
        "<option>Eric Island (W)</option>" +
        "<option>Eric Island (E 1)</option>" +
        "<option>Eric Island (E 2)</option>" +
        "<option>Eric Island (E 3)</option>" +
        "<option>Cape St Lambert (W 2)</option>" +
        "<option>Cape St Lambert (W 1)</option>" +
        "<option>Cape St Lambert (E)</option>" +
        "<option>Berkeley River (E)</option>" +
        "<option>Berkeley River (W 1)</option>" +
        "<option>Berkeley River (W 2)</option>" +
        "<option>Berkeley River (W 3)</option>" +
        "<option>Berkeley River (W 4)</option>" +
        "<option>Reveley Island (W)</option>" +
        "<option>Reveley Island (E 1)</option>" +
        "<option>Reveley Island (E 2)</option>" +
        "<option>Buckle Head (W)</option>" +
        "<option>Buckle Head (1)</option>" +
        "<option>Buckle Head (2)</option>" +
        "<option>Buckle Head (E 1)</option>" +
        "<option>Buckle Head (E 2)</option>" +
        "<option>Buckle Head (E 3)</option>" +
        "<option>Buckle Head (E 4)</option>" +
        "<option>Buckle Head (E 5)</option>" +
        "<option>Buckle Head (E 6)</option>" +
        "<option>Buckle Head (E 7)</option>" +
        "<option>Buckle Head (E 8)</option>" +
        "<option>Buckle Head (E 9)</option>" +
        "<option>Buckle Head (E 10)</option>" +
        "<option>Buckle Head (E 11)</option>" +
        "<option>Buckle Head (E 12)</option>" +
        "<option>Buckle Head (E 13)</option>" +
        "<option>Buckle Head (E 14)</option>" +
        "<option>Buckle Head (E 15)</option>" +
        "<option>Buckle Head (E 16)</option>" +
        "<option>Buckle Head (E 17)</option>" +
        "<option>Buckle Head (E 18)</option>" +
        "<option>Buckle Head (E 19)</option>" +
        "<option>Buckle Head (E 20)</option>" +
        "<option>Buckle Head (E 21)</option>" +
        "<option>Buckle Head (E 22)</option>" +
        "<option>Buckle Head (E 23)</option>" +
        "<option>Buckle Head (E 24)</option>" +
        "<option>Buckle Head (E 25)</option>" +
        "<option>Buckle Head (E 26)</option>" +
        "<option>Buckle Head (E 27)</option>" +
        "<option>Cape Thurburn (W 2)</option>" +
        "<option>Cape Thurburn (W 1)</option>" +
        "<option>Thurburn Hill (S 1)</option>" +
        "<option>Thurburn Hill (S 2)</option>" +
        "<option>Obstruction Hill (E 1)</option>" +
        "<option>Obstruction Hill (E 2)</option>" +
        "<option>Hope Hill</option>" +
        "<option>Bald Hill (W 6)</option>" +
        "<option>Bald Hill (W 5)</option>" +
        "<option>Bald Hill (W 4)</option>" +
        "<option>Bald Hill (W 3)</option>" +
        "<option>Bald Hill (W 2)</option>" +
        "<option>Bald Hill (W 1)</option>" +
        "<option>Bald Hill</option>" +
        "<option>Bald Hill (S)</option>" +
        "<option>Cape Dussejour</option>" +
        "<option>Cape Dussejour (S)</option>" +
        "<option>Lazy Rocks</option>" +
        "<option>Barnett Point</option>" +
        "<option>Barnett Point (E)</option>" +
        "<option>Cape Domett (S)</option>" +
        "<option>Cape Domett (E 1)</option>" +
        "<option>Cape Domett (E 2)</option>" +
        "<option>Cape Domett (E 3)</option>" +
        "<option>Cape Domett (E 4)</option>" +
        "<option>Cape Domett (E 5)</option>" +
        "<option>Cape Domett (E 6)</option>" +
        "<option>The Needles (W)</option>" +
        "<option>The Needles (E 1)</option>" +
        "<option>The Needles (E 2)</option>" +
        "<option>The Needles (E 3)</option>" +
        "<option>The Needles (E 4)</option>" +
        "<option>The Needles (E 5)</option>" +
        "<option>The Needles (E 6)</option>" +
        "<option>The Needles (E 7)</option>" +
        "<option>The Needles (E 8)</option>" +
        "<option>Pelican Island (S 1)</option>" +
        "<option>Pelican Island (S 2)</option>" +
        "<option>Pelican Island (S 3)</option>" +
        "<option>Pelican Island (S 4)</option>" +
        "<option>Pelican Island (E 1)</option>" +
        "<option>Pelican Island (E 2)</option>" +
        "<option>Pelican Island (E 3)</option>" +
        "<option>Parakeet Bay</option>" +
        "<option>Little Parakeet Bay</option>" +
        "<option>Little Georide Bay</option>" +
        "<option>Geordie Bay (W)</option>" +
        "<option>Geordier Bay</option>" +
        "<option>Geordier Bay (E 1)</option>" +
        "<option>Geordier Bay (E 2)</option>" +
        "<option>Geordier Bay (E 3)</option>" +
        "<option>Fays Bay</option>" +
        "<option>Longreach Bay</option>" +
        "<option>The Basin</option>" +
        "<option>Pinky Beach</option>" +
        "<option>The Settlement</option>" +
        "<option>Hotel Beach</option>" +
        "<option>Kingston (N)</option>" +
        "<option>Bickley Bay</option>" +
        "<option>Bickley Point</option>" +
        "<option>Jubilee Rocks (1)</option>" +
        "<option>Jubilee Rocks (2)</option>" +
        "<option>Patterson Beach</option>" +
        "<option>Henrietta Rocks (1)</option>" +
        "<option>Henrietta Rocks (2)</option>" +
        "<option>Porpoise Bay</option>" +
        "<option>Porpoise Bay (S)</option>" +
        "<option>Pocillopora Reef</option>" +
        "<option>Little Salmon Bay</option>" +
        "<option>Salmon Point</option>" +
        "<option>Salmon Bay</option>" +
        "<option>Fairbridge Bluff (1)</option>" +
        "<option>Fairbridge Bluff (2)</option>" +
        "<option>Salmon Bay (W)</option>" +
        "<option>Nancy Cove</option>" +
        "<option>Green Island</option>" +
        "<option>Kitson Point</option>" +
        "<option>Mary Cove (E)</option>" +
        "<option>Mary Cove</option>" +
        "<option>Strickland Bay (1)</option>" +
        "<option>Strickland Bay (2)</option>" +
        "<option>Strickland Bay (3)</option>" +
        "<option>South Point (1)</option>" +
        "<option>South Point (2)</option>" +
        "<option>Wilson Bay</option>" +
        "<option>Radar Reef</option>" +
        "<option>Cape Vlamingh</option>" +
        "<option>Eagle Bay</option>" +
        "<option>Mabel Cove (1)</option>" +
        "<option>Mabel Cove (2)</option>" +
        "<option>Mabel Cove (3)</option>" +
        "<option>Marjorie Bay</option>" +
        "<option>Rocky Bay (1)</option>" +
        "<option>Rocky Bay (2)</option>" +
        "<option>Lady Edeline Beach (W)</option>" +
        "<option>Lady Edeline Beach (E)</option>" +
        "<option>Stark Bay</option>" +
        "<option>Stark Bay (N 1)</option>" +
        "<option>Stark Bay (N 2)</option>" +
        "<option>Crayfish Point</option>" +
        "<option>Ricey Beach</option>" +
        "<option>City of York Bay (1)</option>" +
        "<option>City of York Bay (2)</option>" +
        "<option>Catherine Beach</option>" +
        "<option>Little Armstrong Bay</option>" +
        "<option>North Point (W)</option>" +
        "</dataList>";

    $('#json-beachList').html(beachOptions);
}
