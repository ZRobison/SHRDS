function loadBeachData(character) {

    var leftOverBeaches =
        "<datalist id='mylist'>" +
        "<option>13TH</option>" +
        "<option>1568 km</option>" +
        "<option>17 Mile Well</option>" +
        "<option>17 Mile Well (N 1)</option>" +
        "<option>17 Mile Well (N 2)</option>" +
        "<option>17 Mile Well (N 3)</option>" +
        "<option>199 A</option>" +
        "<option>233A</option>" +
        "<option>28-32 Mile Crossing</option>" +
        "<option>32-42 Mile Crossing</option>" +
        "<option>42 Mile-Tea Tree Crossing</option>" +
        "<option>667</option>" +
        "<option>708</option>" +
        "<option>742</option>" +
        "<option>743</option>" +
        "<option>744</option>" +
        "<option>745</option>" +
        "<option>746</option>" +
        "<option>747</option>" +
        "<option>748</option>" +
        "<option>817</option>" +
        "<option>819</option>" +
        "<option>820</option>" +
        "<option>823</option>" +
        "<option>824</option>" +
        "<option>852</option>" +
        "<option>853</option>" +
        "<option>867</option>" +
        "<option>868</option>" +
        "<option>869</option>" +
        "<option>870</option>" +
        "<option>871</option>" +
        "<option>885</option>" +
        "<option>888</option>" +
        "</dataList>";

    var aBeaches =
        "<datalist id='mylist'>" +
        "<option>ABRAHAM BOSON</option>" +
        "<option>ACHERON LEDGE</option>" +
        "<option>ACHERON LEDGE NORTH</option>" +
        "<option>ADDIS BAY 1</option>" +
        "<option>ADDIS BAY 2</option>" +
        "<option>ADDISCOT</option>" +
        "<option>AIREYS INLET</option>" +
        "<option>AIREYS INLET SOUTH</option>" +
        "<option>AIRFORCE</option>" +
        "<option>ALTONA (BURNS RESERVE)</option>" +
        "<option>ALTONA (CRESSER)</option>" +
        "<option>ALTONA (MAIN)</option>" +
        "<option>ANDERSON POINT</option>" +
        "<option>ANGELINA</option>" +
        "<option>ANGELS NORTH</option>" +
        "<option>ANGELS SOUTH</option>" +
        "<option>ANGLESEA</option>" +
        "<option>ANGLESEA RIVER</option>" +
        "<option>ANGOURIE</option>" +
        "<option>ANGOURIE POINT</option>" +
        "<option>ANNA BAY (ONE MILE)</option>" +
        "<option>ANNA BAY (SAMURAI)</option>" +
        "<option>APOLLO BAY</option>" +
        "<option>APOLLO BAY HARBOUR</option>" +
        "<option>ARAGUNNU</option>" +
        "<option>ARCH ROCK 1</option>" +
        "<option>ARCH ROCK 2</option>" +
        "<option>ARMONDS BAY</option>" +
        "<option>ARMSTRONG BAY/LEVY POINT</option>" +
        "<option>ARRAWARRA HEADLAND</option>" +
        "<option>ARTILLERY ROCKS</option>" +
        "<option>ASLINGS</option>" +
        "<option>ASPENDALE</option>" +
        "<option>AUSTINMER</option>" +
        "<option>AVALON</option>" +
        "<option>AVALON</option>" +
        "<option>AVENUE</option>" +
        "<option>AVOCA</option>" +
        "<option>Abbotsbury Beach</option>" +
        "<option>Abbott Point</option>" +
        "<option>Abbott Point (groyne)</option>" +
        "<option>Abeona Head</option>" +
        "<option>Abo Creek</option>" +
        "<option>Abrahams Head</option>" +
        "<option>Accident Ck (N 1)</option>" +
        "<option>Accident Ck (N 2)</option>" +
        "<option>Accident Ck (S)</option>" +
        "<option>Acraman Ceek (east)</option>" +
        "<option>Acraman Ceek (inlet 1)</option>" +
        "<option>Acraman Ceek (inlet 2)</option>" +
        "<option>Adam Head</option>" +
        "<option>Adams Bay</option>" +
        "<option>Adams Beach</option>" +
        "<option>Adams Beach</option>" +
        "<option>Admella beach (1)</option>" +
        "<option>Admella beach (2)</option>" +
        "<option>Admiral Bay (1)</option>" +
        "<option>Admiral Bay (2)</option>" +
        "<option>Admiral Bay (3)</option>" +
        "<option>Adventure Bay Beach</option>" +
        "<option>Agnes Island (west)</option>" +
        "<option>Agnes Water</option>" +
        "<option>Agnes Water (south 1)</option>" +
        "<option>Agnes Water (south 2)</option>" +
        "<option>Agnes Water (south 3)</option>" +
        "<option>Agnes island</option>" +
        "<option>Airey Point</option>" +
        "<option>Airlie Beach (1)</option>" +
        "<option>Airlie Beach (2)</option>" +
        "<option>Akens (east)</option>" +
        "<option>Akens (west)</option>" +
        "<option>Alau Creek</option>" +
        "<option>Alau Creek (east)</option>" +
        "<option>Albatross Bay (1)</option>" +
        "<option>Albatross Bay (2)</option>" +
        "<option>Albert R (E)</option>" +
        "<option>Albert R (W)</option>" +
        "<option>Albina Creek</option>" +
        "<option>Albina Creek (N 1)</option>" +
        "<option>Albina Creek (N 2)</option>" +
        "<option>Albina Rock (S 1)</option>" +
        "<option>Albina Rock (S 2)</option>" +
        "<option>Albina Rock (S 3)</option>" +
        "<option>Albina Rock (S 4)</option>" +
        "<option>Alcaro Bay</option>" +
        "<option>Aldergrove</option>" +
        "<option>Aldinga</option>" +
        "<option>Aldridge Cove</option>" +
        "<option>Alex Lookout (south)</option>" +
        "<option>Alexander Bay (1)</option>" +
        "<option>Alexander Bay (2)</option>" +
        "<option>Alexander Bay (3)</option>" +
        "<option>Alexandra Bay</option>" +
        "<option>Alexandra Head</option>" +
        "<option>Alexandra Headland</option>" +
        "<option>Alexandria Bay</option>" +
        "<option>Alexandria Bay</option>" +
        "<option>Alexandria Bay (south)</option>" +
        "<option>Alexandria Reefs</option>" +
        "<option>Alfhild Bight (1)</option>" +
        "<option>Alfhild Bight (2)</option>" +
        "<option>Alfhild Bight (3)</option>" +
        "<option>Alfhild Bight (N)</option>" +
        "<option>Alginote Bay</option>" +
        "<option>Alison Point</option>" +
        "<option>Alkimos-Pipidinny-Yanchep (S)</option>" +
        "<option>Alligator Bay</option>" +
        "<option>Alligator Bay (north)</option>" +
        "<option>Alligator Ck</option>" +
        "<option>Allom Point</option>" +
        "<option>Allom Point (east 1)</option>" +
        "<option>Allom Point (east 2)</option>" +
        "<option>Allom Point (east 3)</option>" +
        "<option>Allom Point (west)</option>" +
        "<option>Allports (W)</option>" +
        "<option>Allports Beach</option>" +
        "<option>Alma Bay</option>" +
        "<option>Almarlangij Ck</option>" +
        "<option>Almarlangij Ck (S 1)</option>" +
        "<option>Almarlangij Ck (S 2)</option>" +
        "<option>Aloa Beach (1)</option>" +
        "<option>Aloa Beach (2)</option>" +
        "<option>Aloa Beach (3)</option>" +
        "<option>Alonnah</option>" +
        "<option>Alonnah boat harbour</option>" +
        "<option>Alva Beach</option>" +
        "<option>Amamarrity (1)</option>" +
        "<option>Amamarrity (2)</option>" +
        "<option>Amatangoora Pt (N 1)</option>" +
        "<option>Amatangoora Pt (N 2)</option>" +
        "<option>Amaya</option>" +
        "<option>Amaya (S)</option>" +
        "<option>American Beach (1)</option>" +
        "<option>American Beach (2)</option>" +
        "<option>American Beach (3)</option>" +
        "<option>American Beach (4)</option>" +
        "<option>American Beach (5)</option>" +
        "<option>American River</option>" +
        "<option>American River (north)</option>" +
        "<option>Amherst Point (N)</option>" +
        "<option>Amherst Point (S)</option>" +
        "<option>Amity</option>" +
        "<option>Amity Point</option>" +
        "<option>Anabranch</option>" +
        "<option>Anchorage Bay</option>" +
        "<option>Anchorage Cove</option>" +
        "<option>Anchorage Cove (S 1)</option>" +
        "<option>Anchorage Cove (S 2)</option>" +
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
        "<option>Anderdon Is (2)</option>" +
        "<option>Anderdon Is (20)</option>" +
        "<option>Anderdon Is (21)</option>" +
        "<option>Anderdon Is (22)</option>" +
        "<option>Anderdon Is (23)</option>" +
        "<option>Anderdon Is (24)</option>" +
        "<option>Anderdon Is (25)</option>" +
        "<option>Anderdon Is (3)</option>" +
        "<option>Anderdon Is (4)</option>" +
        "<option>Anderdon Is (5)</option>" +
        "<option>Anderdon Is (6)</option>" +
        "<option>Anderdon Is (7)</option>" +
        "<option>Anderdon Is (8)</option>" +
        "<option>Anderdon Is (9)</option>" +
        "<option>Andoomajettie Pt</option>" +
        "<option>Andredon Is (1)</option>" +
        "<option>Angulani Creek</option>" +
        "<option>Anjo Cove</option>" +
        "<option>Anjo Hills (1)</option>" +
        "<option>Anjo Hills (2)</option>" +
        "<option>Anjo Hills (3)</option>" +
        "<option>Anjo Peninsula (W 1)</option>" +
        "<option>Anjo Peninsula (W 2)</option>" +
        "<option>Anjo Peninsula (W 3)</option>" +
        "<option>Anjo Peninsula (W 4)</option>" +
        "<option>Anjo Peninsula (W 5)</option>" +
        "<option>Anjo Peninsula (W 6)</option>" +
        "<option>Anjo Peninsula (W 7)</option>" +
        "<option>Annan (south)</option>" +
        "<option>Annesley Point (E 1)</option>" +
        "<option>Annesley Point (E 2)</option>" +
        "<option>Annesley Point (E 3)</option>" +
        "<option>Annesley Point (E 4)</option>" +
        "<option>Annesley Point (W 1)</option>" +
        "<option>Annesley Point (W 2)</option>" +
        "<option>Annesley Point (W 3)</option>" +
        "<option>Anniversary Bay 1</option>" +
        "<option>Anniversary Bay 2</option>" +
        "<option>Anniversary Bay 3</option>" +
        "<option>Anns Bay</option>" +
        "<option>Anns Bay (S)</option>" +
        "<option>Anson Bay (east)</option>" +
        "<option>Anson Bay (west)</option>" +
        "<option>Antechamber Bay</option>" +
        "<option>Anthony Beach</option>" +
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
        "<option>Anvil (E)</option>" +
        "<option>Anvil Beach</option>" +
        "<option>Anxious Bay</option>" +
        "<option>Apex Park</option>" +
        "<option>Apple Tree Creek</option>" +
        "<option>Aralaij Beach</option>" +
        "<option>Aram Cove (1)</option>" +
        "<option>Aram Cove (2)</option>" +
        "<option>Araru Point</option>" +
        "<option>Araru Point (east 1)</option>" +
        "<option>Araru Point (east 2)</option>" +
        "<option>Arched Island (1)</option>" +
        "<option>Arched Island (2)</option>" +
        "<option>Archer Hill (south)</option>" +
        "<option>Archer Point (north 1)</option>" +
        "<option>Archer Point (north 2)</option>" +
        "<option>Archer Point (wharf north)</option>" +
        "<option>Archer Point (wharf south)</option>" +
        "<option>Ardrossan</option>" +
        "<option>Arid Bay (1)</option>" +
        "<option>Arid Bay (2)</option>" +
        "<option>Arid Bay (3)</option>" +
        "<option>Armstrong Beach</option>" +
        "<option>Arndani</option>" +
        "<option>Arndani (N 1)</option>" +
        "<option>Arndani (N 2)</option>" +
        "<option>Arnhem Bay (S 1)</option>" +
        "<option>Arnhem Bay (S 2)</option>" +
        "<option>Arnhem Bay (S 3)</option>" +
        "<option>Arnhem Bay (S 4)</option>" +
        "<option>Arnhem Bay (S 5)</option>" +
        "<option>Arnhem Bay (S 6)</option>" +
        "<option>Arno Bay (1)</option>" +
        "<option>Arno Bay (2)</option>" +
        "<option>Arno Bay (north 1)</option>" +
        "<option>Arno Bay (north 2)</option>" +
        "<option>Arno Bay (north 3)</option>" +
        "<option>Arrla Bay</option>" +
        "<option>Arrla Bay (E 1)</option>" +
        "<option>Arrla Bay (E 2)</option>" +
        "<option>Arrla Bay (E 3)</option>" +
        "<option>Arrla Bay (E 4)</option>" +
        "<option>Arrla Bay (E 5)</option>" +
        "<option>Arrla Bay (E 6)</option>" +
        "<option>Arrla Bay (W 1)</option>" +
        "<option>Arrla Bay (W 2)</option>" +
        "<option>Arthur Bay</option>" +
        "<option>Arthur Beach</option>" +
        "<option>Arthur Beach (M)</option>" +
        "<option>Arthur Point</option>" +
        "<option>Arthur Point</option>" +
        "<option>Arthur Point (east 1)</option>" +
        "<option>Arthur Point (east 2)</option>" +
        "<option>Arthur Point (west)</option>" +
        "<option>Arthur River (N)</option>" +
        "<option>Arthur River (S)</option>" +
        "<option>Arurine Bay</option>" +
        "<option>Aryillarlarg</option>" +
        "<option>Aryillarlarg (S)</option>" +
        "<option>Ashburton River (E)</option>" +
        "<option>Ashburton River (S)</option>" +
        "<option>Ashley Point (S 1)</option>" +
        "<option>Ashley Point (S 2)</option>" +
        "<option>Ashton Reserve</option>" +
        "<option>Athol Bay</option>" +
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
        "<option>Augereau Is (S 1)</option>" +
        "<option>Augereau Is (S 10)</option>" +
        "<option>Augereau Is (S 11)</option>" +
        "<option>Augereau Is (S 12)</option>" +
        "<option>Augereau Is (S 13)</option>" +
        "<option>Augereau Is (S 2)</option>" +
        "<option>Augereau Is (S 3)</option>" +
        "<option>Augereau Is (S 4)</option>" +
        "<option>Augereau Is (S 5)</option>" +
        "<option>Augereau Is (S 6)</option>" +
        "<option>Augereau Is (S 7)</option>" +
        "<option>Augereau Is (S 8)</option>" +
        "<option>Augereau Is (S 9)</option>" +
        "<option>August Pt (N)</option>" +
        "<option>August Pt (S 1)</option>" +
        "<option>August Pt (S 2)</option>" +
        "<option>August Pt (W)</option>" +
        "<option>Australia Point</option>" +
        "<option>Australia Point (N)</option>" +
        "<option>Australia Point (S)</option>" +
        "<option>Avalon</option>" +
        "<option>Avoca Beach</option>" +
        "<option>Avoid Bay (east 1)</option>" +
        "<option>Avoid Bay (east)</option>" +
        "<option>Avoid Bay (rocks)</option>" +
        "<option>Avoid Bay (west)</option>" +
        "<option>Ayres Point (north)</option>" +
        "</dataList>";

    var bBeaches =
        "<datalist id='mylist'>" +
        "<option>BACK</option>" +
        "<option>BACK</option>" +
        "<option>BACK</option>" +
        "<option>BACK</option>" +
        "<option>BACK ANGOURIE/ANGOURIE BAY</option>" +
        "<option>BACK/MINNIE WATERS</option>" +
        "<option>BALNARRING</option>" +
        "<option>BALNARRING WEST</option>" +
        "<option>BANCOORA</option>" +
        "<option>BANGALAY</option>" +
        "<option>BAR</option>" +
        "<option>BAR</option>" +
        "<option>BAR</option>" +
        "<option>BAR SOUTH</option>" +
        "<option>BARAGOOT</option>" +
        "<option>BARCOONGERE ROCKS 1</option>" +
        "<option>BARCOONGERE ROCKS 2</option>" +
        "<option>BARE BACK COVE</option>" +
        "<option>BARFLEUR</option>" +
        "<option>BARLINGS</option>" +
        "<option>BARMOUTH NORTH</option>" +
        "<option>BARMOUTH SOUTH</option>" +
        "<option>BARRAGGA BAY</option>" +
        "<option>BARRI</option>" +
        "<option>BARRIER LANDING</option>" +
        "<option>BARRIES BAY</option>" +
        "<option>BARTLETTS</option>" +
        "<option>BARUNGA POINT</option>" +
        "<option>BARWON HEADS 1</option>" +
        "<option>BARWON HEADS 2</option>" +
        "<option>BARWON RIVER</option>" +
        "<option>BATEAU BAY</option>" +
        "<option>BATEHAVEN/CASEYS</option>" +
        "<option>BAWLEY</option>" +
        "<option>BAY OF ISLANDS BOAT RAMP</option>" +
        "<option>BAY OF MARTYRS</option>" +
        "<option>BEACH 169</option>" +
        "<option>BEACH 17</option>" +
        "<option>BEACH 170</option>" +
        "<option>BEACH 171</option>" +
        "<option>BEACH 172</option>" +
        "<option>BEACH 173</option>" +
        "<option>BEACH 175</option>" +
        "<option>BEACH 179</option>" +
        "<option>BEACH 18</option>" +
        "<option>BEACH 240</option>" +
        "<option>BEACH 272</option>" +
        "<option>BEACH 273</option>" +
        "<option>BEACH 274</option>" +
        "<option>BEACH 275</option>" +
        "<option>BEACH 300</option>" +
        "<option>BEACH 316</option>" +
        "<option>BEACH 317</option>" +
        "<option>BEACH 318</option>" +
        "<option>BEACH 319</option>" +
        "<option>BEACH 324</option>" +
        "<option>BEACH 333</option>" +
        "<option>BEACH 347</option>" +
        "<option>BEACH 357</option>" +
        "<option>BEACH 371</option>" +
        "<option>BEACH 373</option>" +
        "<option>BEACH 374</option>" +
        "<option>BEACH 376</option>" +
        "<option>BEACH 389</option>" +
        "<option>BEACH 394</option>" +
        "<option>BEACH 395</option>" +
        "<option>BEACH 396</option>" +
        "<option>BEACH 401</option>" +
        "<option>BEACH 437</option>" +
        "<option>BEACH 438</option>" +
        "<option>BEACH 443</option>" +
        "<option>BEACH 449</option>" +
        "<option>BEACH 466</option>" +
        "<option>BEACH 475</option>" +
        "<option>BEACH 476</option>" +
        "<option>BEACH 478</option>" +
        "<option>BEACH 479</option>" +
        "<option>BEACH 481</option>" +
        "<option>BEACH 482</option>" +
        "<option>BEACH 483</option>" +
        "<option>BEACH 485</option>" +
        "<option>BEACH 494</option>" +
        "<option>BEACH 495</option>" +
        "<option>BEACH 496</option>" +
        "<option>BEACH 497</option>" +
        "<option>BEACH 498</option>" +
        "<option>BEACH 502</option>" +
        "<option>BEACH 515</option>" +
        "<option>BEACH 516</option>" +
        "<option>BEACH 517</option>" +
        "<option>BEACH 518</option>" +
        "<option>BEACH 519</option>" +
        "<option>BEACH 520</option>" +
        "<option>BEACH 521</option>" +
        "<option>BEACH 524</option>" +
        "<option>BEACH 525</option>" +
        "<option>BEACH 526</option>" +
        "<option>BEACH 527</option>" +
        "<option>BEACH 528</option>" +
        "<option>BEACH 532</option>" +
        "<option>BEACH 8</option>" +
        "<option>BEACON POINT</option>" +
        "<option>BEACON POINT BOAT RAMP</option>" +
        "<option>BEAGLE BAY</option>" +
        "<option>BEARES</option>" +
        "<option>BEARES NORTH</option>" +
        "<option>BEAUMARIS</option>" +
        "<option>BEAUMARIS NORTH</option>" +
        "<option>BEAUMARIS YACHT CLUB</option>" +
        "<option>BEILBYS</option>" +
        "<option>BELFAST</option>" +
        "<option>BELL POINT</option>" +
        "<option>BELL POINT BOULDER</option>" +
        "<option>BELL POINT NORTH</option>" +
        "<option>BELL POINT SOUTH</option>" +
        "<option>BELLAMBI</option>" +
        "<option>BELLAMBI POINT</option>" +
        "<option>BELLS</option>" +
        "<option>BELMORE (WOLLONGONG HARBOUR)</option>" +
        "<option>BELONGIL</option>" +
        "<option>BEMM RIVER</option>" +
        "<option>BENDALONG</option>" +
        "<option>BENEDORE RIVER 1</option>" +
        "<option>BENEDORE RIVER 2</option>" +
        "<option>BENEDORE RIVER 3</option>" +
        "<option>BENEDORE RIVER 4</option>" +
        "<option>BENGELLO/SOUTH BROULEE/SOUTH</option>" +
        "<option>BENGUNNU POINT NORTH</option>" +
        "<option>BENGUNNU POINT SOUTH 1</option>" +
        "<option>BENGUNNU POINT SOUTH 2</option>" +
        "<option>BENNETTS</option>" +
        "<option>BERRARA</option>" +
        "<option>BERRARA POINT</option>" +
        "<option>BERRARA SOUTH</option>" +
        "<option>BERRY</option>" +
        "<option>BESWICKS</option>" +
        "<option>BETKA (SURF)</option>" +
        "<option>BETKA SOUTH</option>" +
        "<option>BHERWERRE</option>" +
        "<option>BIDDIES COVE</option>" +
        "<option>BIG HILL (2)</option>" +
        "<option>BILGOLA</option>" +
        "<option>BINDIJINE</option>" +
        "<option>BINGIE</option>" +
        "<option>BINGIE BINGIE POINT</option>" +
        "<option>BIRD ROCK NORTH</option>" +
        "<option>BIRD ROCK SOUTH</option>" +
        "<option>BIRDROCK</option>" +
        "<option>BIRUBI POINT</option>" +
        "<option>BITHRY INLET</option>" +
        "<option>BITTANGABEE BAY</option>" +
        "<option>BLACK</option>" +
        "<option>BLACK</option>" +
        "<option>BLACK HARBOUR</option>" +
        "<option>BLACK HEAD</option>" +
        "<option>BLACK NOSE POINT</option>" +
        "<option>BLACK ROCK</option>" +
        "<option>BLACK ROCK POINT</option>" +
        "<option>BLACK ROCKS</option>" +
        "<option>BLACK ROCKS</option>" +
        "<option>BLACKFELLOWS POINT</option>" +
        "<option>BLACKSMITHS</option>" +
        "<option>BLACKWOODS</option>" +
        "<option>BLAIRGOWRIE</option>" +
        "<option>BLANKET BAY</option>" +
        "<option>BLANKET BAY NORTH</option>" +
        "<option>BLENHEIM</option>" +
        "<option>BLUE BAY</option>" +
        "<option>BLUE LAGOON</option>" +
        "<option>BLUEYS</option>" +
        "<option>BLUFF</option>" +
        "<option>BOAMBEE</option>" +
        "<option>BOAT</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>BOAT HARBOUR</option>" +
        "<option>BOAT RAMP</option>" +
        "<option>BOGANGAR/CABARITA</option>" +
        "<option>BOGGALEY CREEK</option>" +
        "<option>BOGOLA HEAD</option>" +
        "<option>BOMBO</option>" +
        "<option>BONBEACH</option>" +
        "<option>BONDI</option>" +
        "<option>BONGON</option>" +
        "<option>BONSWICK</option>" +
        "<option>BONVILLE</option>" +
        "<option>BOOMERANG</option>" +
        "<option>BORROW</option>" +
        "<option>BOULDER</option>" +
        "<option>BOULDER</option>" +
        "<option>BOULDER BAY</option>" +
        "<option>BOULDER NORTH</option>" +
        "<option>BOULDER SOUTH</option>" +
        "<option>BOURNDA</option>" +
        "<option>BOURNDA ISLAND</option>" +
        "<option>BOX</option>" +
        "<option>BOYDTOWN</option>" +
        "<option>BRACKEN/MCKENZIES</option>" +
        "<option>BRANDY CREEK</option>" +
        "<option>BRAYS</option>" +
        "<option>BREAKWAY BAY</option>" +
        "<option>BREAMLEA</option>" +
        "<option>BRICKYARD/lLONG POINT</option>" +
        "<option>BRIDGE ISLAND</option>" +
        "<option>BRIDGEWATER BAY</option>" +
        "<option>BRIDGEWATER BAY 1</option>" +
        "<option>BRIDGEWATER BAY 2</option>" +
        "<option>BRIDGEWATER BAY 3</option>" +
        "<option>BRIDGEWATER BAY CENTRE</option>" +
        "<option>BRIDGEWATER BAY SURF</option>" +
        "<option>BRIERLY POINT</option>" +
        "<option>BRIERLY POINT EAST 1</option>" +
        "<option>BRIERLY POINT EAST 2</option>" +
        "<option>BRIGHTON</option>" +
        "<option>BRISTOL POINT</option>" +
        "<option>BRISTOL PT/SCOTTISH ROCKS</option>" +
        "<option>BROADWATER</option>" +
        "<option>BROKEN HEAD</option>" +
        "<option>BROKEN HEAD</option>" +
        "<option>BRONTE</option>" +
        "<option>BROU</option>" +
        "<option>BROULEE</option>" +
        "<option>BROULEE SPIT</option>" +
        "<option>BROWN HILL</option>" +
        "<option>BROWNS CREEK</option>" +
        "<option>BRUNSWICK HEADS</option>" +
        "<option>BUCKLEY CREEK</option>" +
        "<option>BUCKLEYS</option>" +
        "<option>BUCKLEYS BAY</option>" +
        "<option>BULGO</option>" +
        "<option>BULL PUP</option>" +
        "<option>BULLENGELLA</option>" +
        "<option>BULLI</option>" +
        "<option>BULLIMAH</option>" +
        "<option>BUNGA</option>" +
        "<option>BUNGA ARM</option>" +
        "<option>BUNGA SOUTH</option>" +
        "<option>BUNGAN</option>" +
        "<option>BUNGO</option>" +
        "<option>BURGESS</option>" +
        "<option>BURNING PALMS</option>" +
        "<option>BURNS BAY</option>" +
        "<option>BURREWARRA POINT 1</option>" +
        "<option>BURREWARRA POINT 2</option>" +
        "<option>BURREWARRA POINT 3</option>" +
        "<option>BURREWARRA POINT 4</option>" +
        "<option>BURRILL</option>" +
        "<option>BUSHRANGER BAY</option>" +
        "<option>BUSHRANGER BAY</option>" +
        "<option>BUTTER BOX</option>" +
        "<option>BUTTRESS POINT</option>" +
        "<option>Baba Head</option>" +
        "<option>Baba Head (E 1)</option>" +
        "<option>Baba Head (E 2)</option>" +
        "<option>Baba Head (E 3)</option>" +
        "<option>Baba Head (E 4)</option>" +
        "<option>Baba Head (E 5)</option>" +
        "<option>Baba Head (E 6)</option>" +
        "<option>Baba Head (E 7)</option>" +
        "<option>Baba Head (E 8)</option>" +
        "<option>Baby Lizard</option>" +
        "<option>Baby Lizard (north)</option>" +
        "<option>Back Banks</option>" +
        "<option>Back Beach</option>" +
        "<option>Back Beach</option>" +
        "<option>Back Beach</option>" +
        "<option>Back Beach</option>" +
        "<option>Back Beach</option>" +
        "<option>Back Beach</option>" +
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
        "<option>Back beach</option>" +
        "<option>Back beach</option>" +
        "<option>Back beach</option>" +
        "<option>Back beach</option>" +
        "<option>Backy Bay</option>" +
        "<option>Badger Box Creek (N)</option>" +
        "<option>Badger Box Creek (S)</option>" +
        "<option>Badger Corner</option>" +
        "<option>Badgers Beach</option>" +
        "<option>Badijirrajirra Creek</option>" +
        "<option>Baffle Creek</option>" +
        "<option>Bagbiringura Pt (N 1)</option>" +
        "<option>Bagbiringura Pt (N 2)</option>" +
        "<option>Bagbiringura Pt (N 3)</option>" +
        "<option>Bagbiringura Pt (N 4)</option>" +
        "<option>Bagbiringura Pt (W 1)</option>" +
        "<option>Bagbiringura Pt (W 2)</option>" +
        "<option>Bagbiringura Pt (W 3)</option>" +
        "<option>Bagbiringura Pt (W 4)</option>" +
        "<option>Bagbiringura Pt (W 5)</option>" +
        "<option>Bagbiringura Pt (W 6)</option>" +
        "<option>Bagbiringura Pt (W 7)</option>" +
        "<option>Bagley Channel (1)</option>" +
        "<option>Bagley Channel (2)</option>" +
        "<option>Bagley Channel (3)</option>" +
        "<option>Bagnalls</option>" +
        "<option>Bailey Point</option>" +
        "<option>Bailey St</option>" +
        "<option>Bailey St (N 1)</option>" +
        "<option>Bailey St (N 2)</option>" +
        "<option>Baird Bay (west 1)</option>" +
        "<option>Baird Bay (west 2)</option>" +
        "<option>Baird Bay (west 3)</option>" +
        "<option>Baird Bay (west 4)</option>" +
        "<option>Baird Bay (west 5)</option>" +
        "<option>Baird Bay beach</option>" +
        "<option>Bakers Beach</option>" +
        "<option>Bakers Creek (south)</option>" +
        "<option>Bakers Point</option>" +
        "<option>Bakirra (E 1)</option>" +
        "<option>Bakirra (E 2)</option>" +
        "<option>Balck Dog Reef</option>" +
        "<option>Balclutha Ck</option>" +
        "<option>Balclutha Ck (S)</option>" +
        "<option>Bald Hill</option>" +
        "<option>Bald Hill (S)</option>" +
        "<option>Bald Hill (W 1)</option>" +
        "<option>Bald Hill (W 2)</option>" +
        "<option>Bald Hill (W 3)</option>" +
        "<option>Bald Hill (W 4)</option>" +
        "<option>Bald Hill (W 5)</option>" +
        "<option>Bald Hill (W 6)</option>" +
        "<option>Bald Hill Beach</option>" +
        "<option>Bald Pt</option>" +
        "<option>Bald Pt (S 1)</option>" +
        "<option>Bald Pt (S 2)</option>" +
        "<option>Bald Pt (S 3)</option>" +
        "<option>Bald Pt (W 1)</option>" +
        "<option>Bald Pt (W 2)</option>" +
        "<option>Bald Pt (W 3)</option>" +
        "<option>Bald Pt (W 4)</option>" +
        "<option>Bald Pt (W 5)</option>" +
        "<option>Balding Bay</option>" +
        "<option>Bales Beach (1)</option>" +
        "<option>Bales Beach (2)</option>" +
        "<option>Bales Beach (3)</option>" +
        "<option>Bales Beach-Seal Bay (1)</option>" +
        "<option>Bales Beach-Seal Bay (2)</option>" +
        "<option>Bales Beach-Seal Bay (3)</option>" +
        "<option>Bales Beach-Seal Bay (4)</option>" +
        "<option>Bales Beach-Seal Bay (5)</option>" +
        "<option>Balgal</option>" +
        "<option>Balgowan</option>" +
        "<option>Balgowan (north 1)</option>" +
        "<option>Balgowan (north 2)</option>" +
        "<option>Balgowan (north 31)</option>" +
        "<option>Ball Bay</option>" +
        "<option>Ballapanudda beach</option>" +
        "<option>Ballina Head</option>" +
        "<option>Balmoral Beach</option>" +
        "<option>Bangalee</option>" +
        "<option>Bangalley Head</option>" +
        "<option>Baniyala</option>" +
        "<option>Baniyala (N 1)</option>" +
        "<option>Baniyala (N 2)</option>" +
        "<option>Baniyala (N 3)</option>" +
        "<option>Baniyala (S 1)</option>" +
        "<option>Baniyala (S 2)</option>" +
        "<option>Baniyala (S 3)</option>" +
        "<option>Banksia Camp</option>" +
        "<option>Banksia Camp (E 1)</option>" +
        "<option>Banksia Camp (E 2)</option>" +
        "<option>Banksia Camp (W)</option>" +
        "<option>Banksia Corner 1</option>" +
        "<option>Banksia Corner 2</option>" +
        "<option>Banky Beach</option>" +
        "<option>Banningarra Creek</option>" +
        "<option>Bannister Point</option>" +
        "<option>Banthula</option>" +
        "<option>Banwell Beach</option>" +
        "<option>Banyan Island (N 1)</option>" +
        "<option>Banyan Island (N 2)</option>" +
        "<option>Banyan Island (N 3)</option>" +
        "<option>Banyan Island (N 4)</option>" +
        "<option>Banyan Island (N 5)</option>" +
        "<option>Banyan Island (N 6)</option>" +
        "<option>Banyan Island (N 7)</option>" +
        "<option>Banyan Island (W 1)</option>" +
        "<option>Banyan Island (W 2)</option>" +
        "<option>Bar/Dixon/Merewether Beach</option>" +
        "<option>Baragoot Point</option>" +
        "<option>Barbecue Bay</option>" +
        "<option>Barbers (S)</option>" +
        "<option>Barbers Beach</option>" +
        "<option>Barbwire Beach</option>" +
        "<option>Barclay Point</option>" +
        "<option>Barclay Point (E 1)</option>" +
        "<option>Barclay Point (E 2)</option>" +
        "<option>Barclay Point (W 1)</option>" +
        "<option>Barclay Point (W 2)</option>" +
        "<option>Bare Island</option>" +
        "<option>Baresand Pt (S)</option>" +
        "<option>Bargara</option>" +
        "<option>Barker Bay</option>" +
        "<option>Barker Inlet</option>" +
        "<option>Barker Rocks</option>" +
        "<option>Barker Rocks (north)</option>" +
        "<option>Barn Hill</option>" +
        "<option>Barn Hill (N)</option>" +
        "<option>Barnbougie Beach</option>" +
        "<option>Barnett Point</option>" +
        "<option>Barnett Point (E)</option>" +
        "<option>Barney Creek</option>" +
        "<option>Barney Point</option>" +
        "<option>Barolin Rocks</option>" +
        "<option>Barrack Point (S 1)</option>" +
        "<option>Barrack Point (S 2)</option>" +
        "<option>Barrack Point (S 3)</option>" +
        "<option>Barragga Point</option>" +
        "<option>Barramundi Creek</option>" +
        "<option>Barraratjpi</option>" +
        "<option>Barraratjpi (N 1)</option>" +
        "<option>Barraratjpi (N 2)</option>" +
        "<option>Barraratjpi (N 3)</option>" +
        "<option>Barraratjpi (N 4)</option>" +
        "<option>Barraratjpi (N 5)</option>" +
        "<option>Barraratjpi (S)</option>" +
        "<option>Barrel Creek</option>" +
        "<option>Barrenjoey Headland</option>" +
        "<option>Barrens (W)</option>" +
        "<option>Barrens Beach</option>" +
        "<option>Barretts Bay</option>" +
        "<option>Barrier Anchorage</option>" +
        "<option>Barrier Creek</option>" +
        "<option>Barrigoombar Creek (E)</option>" +
        "<option>Barrigoombar Creek (W)</option>" +
        "<option>Barron</option>" +
        "<option>Barrow Pt (S 1)</option>" +
        "<option>Barrow Pt (S 2)</option>" +
        "<option>Barrow Pt (S 3)</option>" +
        "<option>Barrow Pt (S 4)</option>" +
        "<option>Barrow Pt (S 5)</option>" +
        "<option>Barrow Pt (W 1)</option>" +
        "<option>Barrow Pt (W 2)</option>" +
        "<option>Barry Landing</option>" +
        "<option>Barubbra Island</option>" +
        "<option>Barwell Creek</option>" +
        "<option>Basham</option>" +
        "<option>Basket Bay</option>" +
        "<option>Bathers Beach</option>" +
        "<option>Bathurst Bay (1)</option>" +
        "<option>Bathurst Bay (2)</option>" +
        "<option>Bathurst Bay (3)</option>" +
        "<option>Bathurst Bay (4)</option>" +
        "<option>Bathurst Bay (5)</option>" +
        "<option>Bathurst Head</option>" +
        "<option>Bathurst Head (S 1)</option>" +
        "<option>Bathurst Head (S 2)</option>" +
        "<option>Bathurst Head (S 3)</option>" +
        "<option>Bathurst Head (S 4)</option>" +
        "<option>Bathurst Head (S 5)</option>" +
        "<option>Battery Pt</option>" +
        "<option>Bawley Point</option>" +
        "<option>Baxter Cliffs (329 km)</option>" +
        "<option>Bay Cliff</option>" +
        "<option>Bay Hill (1)</option>" +
        "<option>Bay Hill (2)</option>" +
        "<option>Bay Hill (3)</option>" +
        "<option>Bay Hill (4)</option>" +
        "<option>Bay Hill (5)</option>" +
        "<option>Bay Hill (6)</option>" +
        "<option>Bay Pt</option>" +
        "<option>Bay of Fires</option>" +
        "<option>Bay of Islands (1)</option>" +
        "<option>Bay of Islands (2)</option>" +
        "<option>Bay of Islands (3)</option>" +
        "<option>Bay of Islands (4)</option>" +
        "<option>Bay of Rest</option>" +
        "<option>Bay of Shoals (north)</option>" +
        "<option>Bay of Shoals (south)</option>" +
        "<option>Bayley Hummock (1)</option>" +
        "<option>Bayley Hummock (2)</option>" +
        "<option>Bayley Pt</option>" +
        "<option>Bayley Rock (N)</option>" +
        "<option>Beabey Hill</option>" +
        "<option>Beach 1000</option>" +
        "<option>Beach 1002</option>" +
        "<option>Beach 1006</option>" +
        "<option>Beach 1011</option>" +
        "<option>Beach 1012</option>" +
        "<option>Beach 1013</option>" +
        "<option>Beach 1048</option>" +
        "<option>Beach 1049</option>" +
        "<option>Beach 1059</option>" +
        "<option>Beach 1059</option>" +
        "<option>Beach 1060</option>" +
        "<option>Beach 1060</option>" +
        "<option>Beach 1061</option>" +
        "<option>Beach 1061</option>" +
        "<option>Beach 1065</option>" +
        "<option>Beach 1066</option>" +
        "<option>Beach 1068</option>" +
        "<option>Beach 1069</option>" +
        "<option>Beach 1070</option>" +
        "<option>Beach 1071</option>" +
        "<option>Beach 1072</option>" +
        "<option>Beach 113</option>" +
        "<option>Beach 1138</option>" +
        "<option>Beach 116</option>" +
        "<option>Beach 117</option>" +
        "<option>Beach 118</option>" +
        "<option>Beach 119</option>" +
        "<option>Beach 120</option>" +
        "<option>Beach 121</option>" +
        "<option>Beach 1217</option>" +
        "<option>Beach 1219</option>" +
        "<option>Beach 1266</option>" +
        "<option>Beach 1267</option>" +
        "<option>Beach 1268</option>" +
        "<option>Beach 1307</option>" +
        "<option>Beach 1329</option>" +
        "<option>Beach 1330</option>" +
        "<option>Beach 1331</option>" +
        "<option>Beach 1332</option>" +
        "<option>Beach 1333</option>" +
        "<option>Beach 1334</option>" +
        "<option>Beach 1335</option>" +
        "<option>Beach 1336</option>" +
        "<option>Beach 1385</option>" +
        "<option>Beach 1386</option>" +
        "<option>Beach 1387</option>" +
        "<option>Beach 1388</option>" +
        "<option>Beach 1389</option>" +
        "<option>Beach 1390</option>" +
        "<option>Beach 1391</option>" +
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
        "<option>Beach 1442</option>" +
        "<option>Beach 1475</option>" +
        "<option>Beach 1476</option>" +
        "<option>Beach 1477</option>" +
        "<option>Beach 168</option>" +
        "<option>Beach 17</option>" +
        "<option>Beach 170</option>" +
        "<option>Beach 172</option>" +
        "<option>Beach 184</option>" +
        "<option>Beach 186</option>" +
        "<option>Beach 187</option>" +
        "<option>Beach 190</option>" +
        "<option>Beach 191</option>" +
        "<option>Beach 193</option>" +
        "<option>Beach 194</option>" +
        "<option>Beach 195</option>" +
        "<option>Beach 197</option>" +
        "<option>Beach 198</option>" +
        "<option>Beach 199</option>" +
        "<option>Beach 199</option>" +
        "<option>Beach 20</option>" +
        "<option>Beach 21</option>" +
        "<option>Beach 210</option>" +
        "<option>Beach 211</option>" +
        "<option>Beach 213</option>" +
        "<option>Beach 214</option>" +
        "<option>Beach 295</option>" +
        "<option>Beach 296</option>" +
        "<option>Beach 297</option>" +
        "<option>Beach 298</option>" +
        "<option>Beach 299</option>" +
        "<option>Beach 30</option>" +
        "<option>Beach 300</option>" +
        "<option>Beach 301</option>" +
        "<option>Beach 302</option>" +
        "<option>Beach 303</option>" +
        "<option>Beach 314</option>" +
        "<option>Beach 315</option>" +
        "<option>Beach 316</option>" +
        "<option>Beach 317</option>" +
        "<option>Beach 318</option>" +
        "<option>Beach 319</option>" +
        "<option>Beach 34</option>" +
        "<option>Beach 414</option>" +
        "<option>Beach 415</option>" +
        "<option>Beach 417</option>" +
        "<option>Beach 418</option>" +
        "<option>Beach 419</option>" +
        "<option>Beach 420</option>" +
        "<option>Beach 422</option>" +
        "<option>Beach 423</option>" +
        "<option>Beach 424</option>" +
        "<option>Beach 550</option>" +
        "<option>Beach 597</option>" +
        "<option>Beach 603</option>" +
        "<option>Beach 615</option>" +
        "<option>Beach 633</option>" +
        "<option>Beach 634</option>" +
        "<option>Beach 683</option>" +
        "<option>Beach 685</option>" +
        "<option>Beach 737</option>" +
        "<option>Beach 750</option>" +
        "<option>Beach 786</option>" +
        "<option>Beach 787</option>" +
        "<option>Beach 799</option>" +
        "<option>Beach 81</option>" +
        "<option>Beach 82</option>" +
        "<option>Beach 826</option>" +
        "<option>Beach 827</option>" +
        "<option>Beach 828</option>" +
        "<option>Beach 83</option>" +
        "<option>Beach 84</option>" +
        "<option>Beach 903</option>" +
        "<option>Beach 906</option>" +
        "<option>Beach 907</option>" +
        "<option>Beach 91</option>" +
        "<option>Beach 910</option>" +
        "<option>Beach 911</option>" +
        "<option>Beach 913</option>" +
        "<option>Beach 914</option>" +
        "<option>Beach 917</option>" +
        "<option>Beach 918</option>" +
        "<option>Beach 919</option>" +
        "<option>Beach 920</option>" +
        "<option>Beach 922</option>" +
        "<option>Beach 923</option>" +
        "<option>Beach 924</option>" +
        "<option>Beach 928</option>" +
        "<option>Beach 945</option>" +
        "<option>Beach 946</option>" +
        "<option>Beach 952</option>" +
        "<option>Beach 953</option>" +
        "<option>Beach 96</option>" +
        "<option>Beach 973</option>" +
        "<option>Beach 974</option>" +
        "<option>Beach 975</option>" +
        "<option>Beach 976</option>" +
        "<option>Beach 988</option>" +
        "<option>Beach 989</option>" +
        "<option>Beach 992</option>" +
        "<option>Beach 993</option>" +
        "<option>Beach 994</option>" +
        "<option>Beach 995</option>" +
        "<option>Beach 996</option>" +
        "<option>Beach 997</option>" +
        "<option>Beach 998</option>" +
        "<option>Beach 999</option>" +
        "<option>Beach Beach (1)</option>" +
        "<option>Beach Beach (2)</option>" +
        "<option>Beach Club</option>" +
        "<option>Beach KI-182</option>" +
        "<option>Beach KI-23</option>" +
        "<option>Beach KI-48</option>" +
        "<option>Beach KI-66</option>" +
        "<option>Beach KI-68</option>" +
        "<option>Beach NT 83</option>" +
        "<option>Beach NT 84</option>" +
        "<option>Beach NT 85</option>" +
        "<option>Beach NT 86</option>" +
        "<option>Beach Point (north)</option>" +
        "<option>Beach Point (south)</option>" +
        "<option>Beach T-19</option>" +
        "<option>Beachcomber Cove</option>" +
        "<option>Beaching Bay</option>" +
        "<option>Beachmere</option>" +
        "<option>Beacon Point (S)</option>" +
        "<option>Beatrice Point (south)</option>" +
        "<option>Beatrice Point (west)</option>" +
        "<option>Beaufort Bay</option>" +
        "<option>Beaumaris</option>" +
        "<option>Beaumaris (S)</option>" +
        "<option>Beaumaris (S)</option>" +
        "<option>Beaumaris Beach</option>" +
        "<option>Beauty Point</option>" +
        "<option>Beauty Point spit</option>" +
        "<option>Becah 198</option>" +
        "<option>Becah 800</option>" +
        "<option>Becher Pt</option>" +
        "<option>Beckles Hill (1)</option>" +
        "<option>Beckles Hill (2)</option>" +
        "<option>Beckles Hill (3)</option>" +
        "<option>Beebingarra Creek (E)</option>" +
        "<option>Beebingarra Creek (W 1)</option>" +
        "<option>Beebingarra Creek (W 2)</option>" +
        "<option>Beebingarra Creek (W 3)</option>" +
        "<option>Beechford (E)</option>" +
        "<option>Beechford (W 1)</option>" +
        "<option>Beechford (W 2)</option>" +
        "<option>Beecroft Head</option>" +
        "<option>Beerbarrel (N)</option>" +
        "<option>Beerbarrel Beach</option>" +
        "<option>Belait Beach</option>" +
        "<option>Bell Pt</option>" +
        "<option>Bellanger Beach</option>" +
        "<option>Bellbuoy Beach</option>" +
        "<option>Bellefin  Prong (E 1)</option>" +
        "<option>Bellefin  Prong (E 10)</option>" +
        "<option>Bellefin  Prong (E 11)</option>" +
        "<option>Bellefin  Prong (E 12)</option>" +
        "<option>Bellefin  Prong (E 13)</option>" +
        "<option>Bellefin  Prong (E 14)</option>" +
        "<option>Bellefin  Prong (E 15)</option>" +
        "<option>Bellefin  Prong (E 16)</option>" +
        "<option>Bellefin  Prong (E 2)</option>" +
        "<option>Bellefin  Prong (E 3)</option>" +
        "<option>Bellefin  Prong (E 4)</option>" +
        "<option>Bellefin  Prong (E 5)</option>" +
        "<option>Bellefin  Prong (E 6)</option>" +
        "<option>Bellefin  Prong (E 7)</option>" +
        "<option>Bellefin  Prong (E 8)</option>" +
        "<option>Bellefin  Prong (E 9)</option>" +
        "<option>Bellefin Prong (W 1)</option>" +
        "<option>Bellefin Prong (W 2)</option>" +
        "<option>Bellefin Prong (W 3)</option>" +
        "<option>Bellefin Prong (W 4)</option>" +
        "<option>Bellefin Prong (W 5)</option>" +
        "<option>Bellefin Prong (W 6)</option>" +
        "<option>Bellefin Prong (W 7)</option>" +
        "<option>Bellerive Beach</option>" +
        "<option>Bellettes Bay</option>" +
        "<option>Bellettes Point (S)</option>" +
        "<option>Bellinger Is</option>" +
        "<option>Bellinger Is (E 1)</option>" +
        "<option>Bellinger Is (E 2)</option>" +
        "<option>Bellinger Is (E 3)</option>" +
        "<option>Bellinger Is (E 4)</option>" +
        "<option>Bellinger Is (W)</option>" +
        "<option>Belmunda Beach (1)</option>" +
        "<option>Belmunda Beach (2)</option>" +
        "<option>Ben Buckler Point</option>" +
        "<option>Ben Dearg Beach (E)</option>" +
        "<option>Ben Dearg Beach (W 1)</option>" +
        "<option>Ben Dearg Beach (W 2)</option>" +
        "<option>Ben Island (W 1)</option>" +
        "<option>Ben Island (W 2)</option>" +
        "<option>Ben Island (W 2)</option>" +
        "<option>Bendon Creek (E 1)</option>" +
        "<option>Bendon Creek (E 2)</option>" +
        "<option>Bendon Creek (E 3)</option>" +
        "<option>Bendon Creek (E)</option>" +
        "<option>Benniou (N)</option>" +
        "<option>Benniou Beach</option>" +
        "<option>Bens Creek</option>" +
        "<option>Bens Creek (S)</option>" +
        "<option>Berakas Beach</option>" +
        "<option>Berkeley Bay (10)</option>" +
        "<option>Berkeley Bay (4)</option>" +
        "<option>Berkeley Bay (5)</option>" +
        "<option>Berkeley Bay (6)</option>" +
        "<option>Berkeley Bay (7)</option>" +
        "<option>Berkeley Bay (8)</option>" +
        "<option>Berkeley Bay (9)</option>" +
        "<option>Berkeley River (E)</option>" +
        "<option>Berkeley River (W 1)</option>" +
        "<option>Berkeley River (W 2)</option>" +
        "<option>Berkeley River (W 3)</option>" +
        "<option>Berkeley River (W 4)</option>" +
        "<option>Bermagui Inlet 1</option>" +
        "<option>Bermagui Inlet 2</option>" +
        "<option>Bermagui Point</option>" +
        "<option>Berraja</option>" +
        "<option>Berry Bay (1)</option>" +
        "<option>Berry Bay (2)</option>" +
        "<option>Berry Bay (3)</option>" +
        "<option>Berry Bay (4)</option>" +
        "<option>Beryl Ck (E)</option>" +
        "<option>Bettys (1)</option>" +
        "<option>Bettys (2)</option>" +
        "<option>Bettys (3)</option>" +
        "<option>Bettys Beach</option>" +
        "<option>Bicheno</option>" +
        "<option>Bickley Bay</option>" +
        "<option>Bickley Point</option>" +
        "<option>Bicton Hill</option>" +
        "<option>Bielamah</option>" +
        "<option>Bielamah (west 1)</option>" +
        "<option>Bielamah (west 2)</option>" +
        "<option>Bielamah (west 3)</option>" +
        "<option>Bielamah (west 4)</option>" +
        "<option>Bifocal Beach</option>" +
        "<option>Big Beach</option>" +
        "<option>Big Beach</option>" +
        "<option>Big Beach</option>" +
        "<option>Big Bluff</option>" +
        "<option>Big Ck</option>" +
        "<option>Big Ck (E)</option>" +
        "<option>Big Hill Beach</option>" +
        "<option>Big Lagoon Beach</option>" +
        "<option>Big Lagoon Beach (S)</option>" +
        "<option>Big Possum Beach</option>" +
        "<option>Big Reef</option>" +
        "<option>Big River Cove</option>" +
        "<option>Big Rock</option>" +
        "<option>Bigge Pt</option>" +
        "<option>Bigge Pt (S 1)</option>" +
        "<option>Bigge Pt (S 2)</option>" +
        "<option>Bigge Pt (S 3)</option>" +
        "<option>Bigge Pt (S 4)</option>" +
        "<option>Bigge Pt (S 5)</option>" +
        "<option>Bigge Pt (S 6)</option>" +
        "<option>Bigge Pt (W 1)</option>" +
        "<option>Bigge Pt (W 10)</option>" +
        "<option>Bigge Pt (W 11)</option>" +
        "<option>Bigge Pt (W 12)</option>" +
        "<option>Bigge Pt (W 13)</option>" +
        "<option>Bigge Pt (W 2)</option>" +
        "<option>Bigge Pt (W 3)</option>" +
        "<option>Bigge Pt (W 4)</option>" +
        "<option>Bigge Pt (W 5)</option>" +
        "<option>Bigge Pt (W 6)</option>" +
        "<option>Bigge Pt (W 7)</option>" +
        "<option>Bigge Pt (W 8)</option>" +
        "<option>Bigge Pt (W 9)</option>" +
        "<option>Bilbunya</option>" +
        "<option>Bilbunya (E 1)</option>" +
        "<option>Bilbunya (E 2)</option>" +
        "<option>Bilbunya (E 3)</option>" +
        "<option>Bilbunya (E 4)</option>" +
        "<option>Bilgola Head</option>" +
        "<option>Bilinga</option>" +
        "<option>Bill Wilson Reef (1)</option>" +
        "<option>Bill Wilson Reef (2)</option>" +
        "<option>Billie Point</option>" +
        "<option>Billy Goat Bay</option>" +
        "<option>Billy Lights Point (jetty)</option>" +
        "<option>Billy Lights Point (south)</option>" +
        "<option>Billy Lights Point (west)</option>" +
        "<option>Bimbiarra Well</option>" +
        "<option>Binanangoi Pt (N 1)</option>" +
        "<option>Binanangoi Pt (N 2)</option>" +
        "<option>Binanangoi Pt (N 3)</option>" +
        "<option>Binanangoi Pt (N 4)</option>" +
        "<option>Binanangoi Pt (N 5)</option>" +
        "<option>Binanangoi Pt (S 1)</option>" +
        "<option>Binanangoi Pt (S 2)</option>" +
        "<option>Binanangoi Pt (S 3)</option>" +
        "<option>Binanangoi Pt (S 4)</option>" +
        "<option>Bindalong Bay</option>" +
        "<option>Bingal Bay</option>" +
        "<option>Bingie Bingie Point-Bingie Beach</option>" +
        "<option>Binningup Beach</option>" +
        "<option>Birany Birany</option>" +
        "<option>Birany Birany (N)</option>" +
        "<option>Birany Birany (S 1)</option>" +
        "<option>Birany Birany (S 2)</option>" +
        "<option>Birches Bay (N)</option>" +
        "<option>Bird Island</option>" +
        "<option>Bird Point (N)</option>" +
        "<option>Bird Point (S)</option>" +
        "<option>Bird Rocks</option>" +
        "<option>Bird Rocks (S 1)</option>" +
        "<option>Bird Rocks (S 2)</option>" +
        "<option>Bird Rocks (S 3)</option>" +
        "<option>Bird Rocks (S 4)</option>" +
        "<option>Bird Rocks (S 5)</option>" +
        "<option>Birdie / Budgewoi / Lakes</option>" +
        "<option>Birdie Beach</option>" +
        "<option>Birthday Bay (S 1)</option>" +
        "<option>Birthday Bay (S 2)</option>" +
        "<option>Birthday Creek (1)</option>" +
        "<option>Birthday Creek (2)</option>" +
        "<option>Bishops Pate (south)</option>" +
        "<option>Bishops Pate beach</option>" +
        "<option>Bitern Rock</option>" +
        "<option>Bithry Inlet North</option>" +
        "<option>Black Currant Island</option>" +
        "<option>Black Head</option>" +
        "<option>Black Head</option>" +
        "<option>Black Head</option>" +
        "<option>Black Head</option>" +
        "<option>Black Head (W 1)</option>" +
        "<option>Black Head (W 2)</option>" +
        "<option>Black Head (W 3)</option>" +
        "<option>Black Head (W 4)</option>" +
        "<option>Black Head (W 5)</option>" +
        "<option>Black Head (west)</option>" +
        "<option>Black Island</option>" +
        "<option>Black Jack Bight</option>" +
        "<option>Black Jack Point (E 1)</option>" +
        "<option>Black Jack Point (E 2)</option>" +
        "<option>Black Jack Point (W)</option>" +
        "<option>Black Lookout</option>" +
        "<option>Black Point</option>" +
        "<option>Black Point</option>" +
        "<option>Black Point (E 1)</option>" +
        "<option>Black Point (E 2)</option>" +
        "<option>Black Point (E 2)</option>" +
        "<option>Black Point (E 3)</option>" +
        "<option>Black Point (E 3)</option>" +
        "<option>Black Point (E 4)</option>" +
        "<option>Black Point (N 1)</option>" +
        "<option>Black Point (N)</option>" +
        "<option>Black Point (N)</option>" +
        "<option>Black Point (W 1)</option>" +
        "<option>Black Point (W 2)</option>" +
        "<option>Black Point (W 3)</option>" +
        "<option>Black Point (boat ramp)</option>" +
        "<option>Black Point (north)</option>" +
        "<option>Black Point (south)</option>" +
        "<option>Black River</option>" +
        "<option>Black River Beach</option>" +
        "<option>Black Rock (north 1)</option>" +
        "<option>Black Rock (north 2)</option>" +
        "<option>Black Rock (north)</option>" +
        "<option>Black Rock (south)</option>" +
        "<option>Black Rock Passage</option>" +
        "<option>Black Rock Point</option>" +
        "<option>Black Rock Point (1)</option>" +
        "<option>Black Rock Point (2)</option>" +
        "<option>Black Rock Point (E 1)</option>" +
        "<option>Black Rock Point (E 2)</option>" +
        "<option>Black Rock Point (E)</option>" +
        "<option>Black Rocks</option>" +
        "<option>Black Rocks (N 1)</option>" +
        "<option>Black Rocks (N 1)</option>" +
        "<option>Black Rocks (east)</option>" +
        "<option>Black Rocks (west 2)</option>" +
        "<option>Black Rocks (west 2)</option>" +
        "<option>Black Rocks (west 3)</option>" +
        "<option>Black Rocks (west 4)</option>" +
        "<option>Black Rocks (west 5)</option>" +
        "<option>Black Rocks (west 6)</option>" +
        "<option>Black Rocks (west 7)</option>" +
        "<option>Black Springs (1))</option>" +
        "<option>Black Springs (2)</option>" +
        "<option>Black Springs (3)</option>" +
        "<option>Black Springs (4)</option>" +
        "<option>Black Stump Bay</option>" +
        "<option>Blackfellows Caves (east)</option>" +
        "<option>Blackfellows Caves (west 1)</option>" +
        "<option>Blackfellows Caves (west 2)</option>" +
        "<option>Blackmans Bay Beach</option>" +
        "<option>Blacks (1)</option>" +
        "<option>Blacks (2)</option>" +
        "<option>Blacks Beach</option>" +
        "<option>Blanche Bay</option>" +
        "<option>Blanche Point</option>" +
        "<option>Blanche Point (E 1)</option>" +
        "<option>Blanche Point (E 2)</option>" +
        "<option>Bligh Point (E 1)</option>" +
        "<option>Bligh Point (E 2)</option>" +
        "<option>Bligh Point (E 3)</option>" +
        "<option>Blind Creek</option>" +
        "<option>Blinking Billy Point (S 1)</option>" +
        "<option>Blinking Billy Point (S 2)</option>" +
        "<option>Blinking Billy Point (S)</option>" +
        "<option>Blinky</option>" +
        "<option>Blizzards Landing</option>" +
        "<option>Bloodstone Beach</option>" +
        "<option>Bloodwood Creek</option>" +
        "<option>Bloodwood Creek (S)</option>" +
        "<option>Blossoms Beach</option>" +
        "<option>Blowhole Creek</option>" +
        "<option>Blowhole Point (E 1)</option>" +
        "<option>Blowhole Point (E 2)</option>" +
        "<option>Blue Bay</option>" +
        "<option>Blue Bay</option>" +
        "<option>Blue Fish Point</option>" +
        "<option>Blue Haven</option>" +
        "<option>Blue Hole Gap</option>" +
        "<option>Blue Holes</option>" +
        "<option>Blue Lagoon</option>" +
        "<option>Blue Lake</option>" +
        "<option>Blue Mud Bay (N 1)</option>" +
        "<option>Blue Mud Bay (N 2)</option>" +
        "<option>Blue Mud Bay (N 3)</option>" +
        "<option>Blue Mud Bay (N 4)</option>" +
        "<option>Blue Mud Bay (N 5)</option>" +
        "<option>Blue Mud Bay (east 1)</option>" +
        "<option>Blue Mud Bay (east 2)</option>" +
        "<option>Blue Mud Bay (east 3)</option>" +
        "<option>Blue Mud Bay (east 4)</option>" +
        "<option>Blue Mud Bay (east 4)</option>" +
        "<option>Blue Pearl Bay (north)</option>" +
        "<option>Blue Pearl Bay (south)</option>" +
        "<option>Blue Point</option>" +
        "<option>Blue Rocks</option>" +
        "<option>Blue Rocks (N 1)</option>" +
        "<option>Blue Rocks (N 2)</option>" +
        "<option>Blue Rocks Point</option>" +
        "<option>Bluestone Bay</option>" +
        "<option>Bluewater Beach</option>" +
        "<option>Bluff Beach</option>" +
        "<option>Bluff Beach</option>" +
        "<option>Bluff Beach</option>" +
        "<option>Bluff Beach</option>" +
        "<option>Bluff Beach (E)</option>" +
        "<option>Bluff Hill (1)</option>" +
        "<option>Bluff Hill (2)</option>" +
        "<option>Bluff Hill Point (E1)</option>" +
        "<option>Bluff Hill Point (E2)</option>" +
        "<option>Bluff Hill Point (E3)</option>" +
        "<option>Bluff Point (E)</option>" +
        "<option>Bluff Point (SE 1)</option>" +
        "<option>Bluff Point (SE 2)</option>" +
        "<option>Bluff Point (W)</option>" +
        "<option>Blyth Bay (E 2)</option>" +
        "<option>Blyth Bay (E1)</option>" +
        "<option>Blythe  mouth</option>" +
        "<option>Blythe Heads</option>" +
        "<option>Blythe River</option>" +
        "<option>Boags Point (N 1)</option>" +
        "<option>Boags Point (N 2)</option>" +
        "<option>Boambee Headland</option>" +
        "<option>Boarding House Bay (1)</option>" +
        "<option>Boarding House Bay (2)</option>" +
        "<option>Boarding House Bay (3)</option>" +
        "<option>Boarding House Bay (4)</option>" +
        "<option>Boarding House Bay (5)</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour</option>" +
        "<option>Boat Harbour (E 2)</option>" +
        "<option>Boat Harbour (E 2)</option>" +
        "<option>Boat Harbour (E 3)</option>" +
        "<option>Boat Harbour (N)</option>" +
        "<option>Boat Harbour (SLSC)</option>" +
        "<option>Boat Harbour (mid)</option>" +
        "<option>Boat Harbour Beach</option>" +
        "<option>Boat Harbour Point</option>" +
        "<option>Boat Harbour beach</option>" +
        "<option>Boat Harbour beach 1</option>" +
        "<option>Boat Harbour beach 2</option>" +
        "<option>Boat Harbour beach 3</option>" +
        "<option>Boat Port</option>" +
        "<option>Boat Port (north 1)</option>" +
        "<option>Boat Port (north 2)</option>" +
        "<option>Boatswain Point</option>" +
        "<option>Bob Bay</option>" +
        "<option>Bob Bay (north)</option>" +
        "<option>Bobardt Pt</option>" +
        "<option>Bobardt Pt (N)</option>" +
        "<option>Bobardt Pt (S)</option>" +
        "<option>Bobs Hollow</option>" +
        "<option>Bobs Nose (east)</option>" +
        "<option>Bobs Nose (west)</option>" +
        "<option>Boggy Bay</option>" +
        "<option>Boggy Hill</option>" +
        "<option>Bokarina</option>" +
        "<option>Bold Head</option>" +
        "<option>Bold Head (N 1)</option>" +
        "<option>Bold Head (N 2)</option>" +
        "<option>Bold Head (S)</option>" +
        "<option>Bold Pt</option>" +
        "<option>Bolhe River</option>" +
        "<option>Bolman Hill</option>" +
        "<option>Bolt Head</option>" +
        "<option>Bolt Head (N 1)</option>" +
        "<option>Bolt Head (N 2)</option>" +
        "<option>Bolt Head (S 1)</option>" +
        "<option>Bolt Head (S 2)</option>" +
        "<option>Bolt Head (S 3)</option>" +
        "<option>Bolt Head (S 4)</option>" +
        "<option>Bombi Point</option>" +
        "<option>Bonbeach-Aspendale</option>" +
        "<option>Bond Bay</option>" +
        "<option>Bondi Baths</option>" +
        "<option>Bondi Beach</option>" +
        "<option>Bondi Golf Course</option>" +
        "<option>Bongaree</option>" +
        "<option>Bongon Head</option>" +
        "<option>Bonna Point</option>" +
        "<option>Bonnie Doon</option>" +
        "<option>Bonnie Vale</option>" +
        "<option>Bonville Head</option>" +
        "<option>Boobyalla (N)</option>" +
        "<option>Boobyalla Beach</option>" +
        "<option>Boodamurra Hill (N)</option>" +
        "<option>Boodamurra Hill (S)</option>" +
        "<option>Boodarrie (W 1)</option>" +
        "<option>Boodarrie (W 2)</option>" +
        "<option>Boodarrie (W 3)</option>" +
        "<option>Boodjidup (S)</option>" +
        "<option>Boodjidup Beach</option>" +
        "<option>Boolbarly Well</option>" +
        "<option>Boolbarly Well (N 1)</option>" +
        "<option>Boolbarly Well (N 2)</option>" +
        "<option>Boolbarly Well (N 3)</option>" +
        "<option>Boolbarly Well (N 4)</option>" +
        "<option>Boomer</option>" +
        "<option>Boomers-Chiton Rocks</option>" +
        "<option>Boongaree Is (E 1)</option>" +
        "<option>Boongaree Is (E 2)</option>" +
        "<option>Boongaree Is (E 3)</option>" +
        "<option>Boongaree Is (E 4)</option>" +
        "<option>Boongaree Is (E 5)</option>" +
        "<option>Boongaree Is (E 6)</option>" +
        "<option>Boongaree Is (NE 1)</option>" +
        "<option>Boongaree Is (NE 2)</option>" +
        "<option>Boongaree Is (NE 3)</option>" +
        "<option>Boongaree Is (NE 4)</option>" +
        "<option>Boongaree Is (NE 5)</option>" +
        "<option>Boongaree Is (NE 6)</option>" +
        "<option>Boongaree Is (NE 7)</option>" +
        "<option>Boongaree Is (NE 7)</option>" +
        "<option>Boongaree Is (NE 7)</option>" +
        "<option>Boongaree Is (W 1)</option>" +
        "<option>Boongaree Is (W 2)</option>" +
        "<option>Boongaree Is (W 3)</option>" +
        "<option>Boongaree Is (W 4)</option>" +
        "<option>Boongaree Is (W 5)</option>" +
        "<option>Boonook Bay (N 1)</option>" +
        "<option>Boonook Bay (N 2)</option>" +
        "<option>Boord Beach</option>" +
        "<option>Boot Bay</option>" +
        "<option>Boot Bay (N)</option>" +
        "<option>Boranup Beach</option>" +
        "<option>Borda Is (E 1)</option>" +
        "<option>Borda Is (E 10)</option>" +
        "<option>Borda Is (E 11)</option>" +
        "<option>Borda Is (E 12)</option>" +
        "<option>Borda Is (E 13)</option>" +
        "<option>Borda Is (E 14)</option>" +
        "<option>Borda Is (E 15)</option>" +
        "<option>Borda Is (E 16)</option>" +
        "<option>Borda Is (E 17)</option>" +
        "<option>Borda Is (E 2)</option>" +
        "<option>Borda Is (E 3)</option>" +
        "<option>Borda Is (E 4)</option>" +
        "<option>Borda Is (E 5)</option>" +
        "<option>Borda Is (E 6)</option>" +
        "<option>Borda Is (E 7)</option>" +
        "<option>Borda Is (E 8)</option>" +
        "<option>Borda Is (E 9)</option>" +
        "<option>Borda Is (NE 1)</option>" +
        "<option>Borda Is (NE 10)</option>" +
        "<option>Borda Is (NE 11)</option>" +
        "<option>Borda Is (NE 12)</option>" +
        "<option>Borda Is (NE 13)</option>" +
        "<option>Borda Is (NE 14)</option>" +
        "<option>Borda Is (NE 15)</option>" +
        "<option>Borda Is (NE 16)</option>" +
        "<option>Borda Is (NE 2)</option>" +
        "<option>Borda Is (NE 3)</option>" +
        "<option>Borda Is (NE 4)</option>" +
        "<option>Borda Is (NE 5)</option>" +
        "<option>Borda Is (NE 6)</option>" +
        "<option>Borda Is (NE 7)</option>" +
        "<option>Borda Is (NE 8)</option>" +
        "<option>Borda Is (NE 9)</option>" +
        "<option>Borda Is (S 1)</option>" +
        "<option>Borda Is (S 10)</option>" +
        "<option>Borda Is (S 11)</option>" +
        "<option>Borda Is (S 12)</option>" +
        "<option>Borda Is (S 3)</option>" +
        "<option>Borda Is (S 3)</option>" +
        "<option>Borda Is (S 4)</option>" +
        "<option>Borda Is (S 5)</option>" +
        "<option>Borda Is (S 6)</option>" +
        "<option>Borda Is (S 7)</option>" +
        "<option>Borda Is (S 8)</option>" +
        "<option>Borda Is (S 9)</option>" +
        "<option>Bornholm (W)</option>" +
        "<option>Bornholm Beach</option>" +
        "<option>Boronda Head</option>" +
        "<option>Bosanquet Bay</option>" +
        "<option>Bottle Bay</option>" +
        "<option>Bottle Bay (N)</option>" +
        "<option>Bottle Creek (S)</option>" +
        "<option>Bottlerush Beach</option>" +
        "<option>Boucaut Bay (W 1)</option>" +
        "<option>Boucaut Bay (W 2)</option>" +
        "<option>Boucaut Bay (W 3)</option>" +
        "<option>Boucaut Bay (centre)</option>" +
        "<option>Bouddi Point</option>" +
        "<option>Bougner Entrance (E 1)</option>" +
        "<option>Bougner Entrance (E 2)</option>" +
        "<option>Bougner Entrance (E 3)</option>" +
        "<option>Bougner Entrance (W 1)</option>" +
        "<option>Bougner Entrance (W 2)</option>" +
        "<option>Bougner Entrance (W 3)</option>" +
        "<option>Bougner Entrance (W 4)</option>" +
        "<option>Boulder 1031</option>" +
        "<option>Boulder 1036</option>" +
        "<option>Boulder 1042</option>" +
        "<option>Boulder 1043</option>" +
        "<option>Boulder 1044</option>" +
        "<option>Boulder 1045</option>" +
        "<option>Boulder Point</option>" +
        "<option>Boulder Point (N)</option>" +
        "<option>Boulder Point (S)</option>" +
        "<option>Boulder Point (S)</option>" +
        "<option>Boulder Point (W 1)</option>" +
        "<option>Boulder Point (W 2)</option>" +
        "<option>Boulder lagoon</option>" +
        "<option>Boultons Beach</option>" +
        "<option>Bouncing Stones</option>" +
        "<option>Bowdens Mistake (W)</option>" +
        "<option>Bowes River (N)</option>" +
        "<option>Bowes River mouth</option>" +
        "<option>Box Head</option>" +
        "<option>Boxing Bay (1)</option>" +
        "<option>Boxing Bay (2)</option>" +
        "<option>Boy Martin Point</option>" +
        "<option>Boyd Pt (E 1)</option>" +
        "<option>Boyd Pt (E 10)</option>" +
        "<option>Boyd Pt (E 2)</option>" +
        "<option>Boyd Pt (E 3)</option>" +
        "<option>Boyd Pt (E 4)</option>" +
        "<option>Boyd Pt (E 5)</option>" +
        "<option>Boyd Pt (E 6)</option>" +
        "<option>Boyd Pt (E 7)</option>" +
        "<option>Boyd Pt (E 8)</option>" +
        "<option>Boyd Pt (E 9)</option>" +
        "<option>Boyd Pt (W)</option>" +
        "<option>Boyne Inlet (E)</option>" +
        "<option>Boyne Inlet (W)</option>" +
        "<option>Boyne Island</option>" +
        "<option>Bradleys Head</option>" +
        "<option>Braithwaite Point (E)</option>" +
        "<option>Braithwaite Point (N)</option>" +
        "<option>Braithwaite Point (S 1)</option>" +
        "<option>Braithwaite Point (S 2)</option>" +
        "<option>Braithwaite Point (S 3)</option>" +
        "<option>Bramble Cove</option>" +
        "<option>Bramble Cove (N 1)</option>" +
        "<option>Bramble Cove (N 2)</option>" +
        "<option>Bramble Cove (N 3)</option>" +
        "<option>Bramble Cove (N 4)</option>" +
        "<option>Brammo Bay</option>" +
        "<option>Bramston Beach</option>" +
        "<option>Bramston Beach (north)</option>" +
        "<option>Bramston Point</option>" +
        "<option>Bramston Point (south)</option>" +
        "<option>Branch Creek</option>" +
        "<option>Brandy Creek (E)</option>" +
        "<option>Brandy Creek (W)</option>" +
        "<option>Brannigan Ck (S 1)</option>" +
        "<option>Brannigan Ck (S 2)</option>" +
        "<option>Brannigan Ck (S 3)</option>" +
        "<option>Bratten Cairn (north)</option>" +
        "<option>Bratten Cairn (south)</option>" +
        "<option>Bray Island</option>" +
        "<option>Braydon</option>" +
        "<option>Braydon-Sovereign</option>" +
        "<option>Breake Yorke Beach</option>" +
        "<option>Breake Yorke Beach (N)</option>" +
        "<option>Breake Yorke Beach (S)</option>" +
        "<option>Breake Yorke Creek</option>" +
        "<option>Breake Yorke Creek (S 1)</option>" +
        "<option>Breake Yorke Creek (S 2)</option>" +
        "<option>Breake Yorke Creek (S 3)</option>" +
        "<option>Breakfast CK (S)</option>" +
        "<option>Breakneck Point</option>" +
        "<option>Breakneck Point (W)</option>" +
        "<option>Breakneck River</option>" +
        "<option>Breaknock Bay (E)</option>" +
        "<option>Breaknock Bay (W)</option>" +
        "<option>Breakwater</option>" +
        "<option>Bremer Beach</option>" +
        "<option>Breton Bay</option>" +
        "<option>Briar Paddock Beach</option>" +
        "<option>Brick Kiln</option>" +
        "<option>Brickfield Beach</option>" +
        "<option>Brickmakers Bay</option>" +
        "<option>Briggs Rock</option>" +
        "<option>Briggs Rock (N 1)</option>" +
        "<option>Briggs Rock (N 2)</option>" +
        "<option>Briggs Rock (N 3)</option>" +
        "<option>Brighton</option>" +
        "<option>Brisk Bay</option>" +
        "<option>British Admiral Beach</option>" +
        "<option>Broadbeach</option>" +
        "<option>Broadwater (E 1)</option>" +
        "<option>Broadwater (E 2)</option>" +
        "<option>Broadwater (E 3)</option>" +
        "<option>Broadwater Creek</option>" +
        "<option>Brogden Pt (E 1)</option>" +
        "<option>Brogden Pt (E 2)</option>" +
        "<option>Brogden Pt (E 3)</option>" +
        "<option>Brogden Pt (E 4)</option>" +
        "<option>Brogden Pt (W 1)</option>" +
        "<option>Brogden Pt (W 2)</option>" +
        "<option>Broke Inlet  (E)</option>" +
        "<option>Broke Inlet  (W 1)</option>" +
        "<option>Broke Inlet  (W 2)</option>" +
        "<option>Broke Inlet  (W 3)</option>" +
        "<option>Broke Inlet (E 1)</option>" +
        "<option>Broke Inlet (E 2)</option>" +
        "<option>Broke Inlet (E 3)</option>" +
        "<option>Broke Inlet (E 4)</option>" +
        "<option>Broke Inlet (E 5)</option>" +
        "<option>Broke Inlet (E 6)</option>" +
        "<option>Broke Inlet (E 7)</option>" +
        "<option>Broken Anchor Bay</option>" +
        "<option>Broken Anchor Bay(N)</option>" +
        "<option>Broken Arm (S 1)</option>" +
        "<option>Broken Arm (S 2)</option>" +
        "<option>Broken Arm (S)</option>" +
        "<option>Broken Arm Beach</option>" +
        "<option>Bronte Beach</option>" +
        "<option>Brooks</option>" +
        "<option>Brooks Creek</option>" +
        "<option>Broome Head</option>" +
        "<option>Broome Head (south 1)</option>" +
        "<option>Broome Head (south 2)</option>" +
        "<option>Broome Head (south 3)</option>" +
        "<option>Broome Head (south 4)</option>" +
        "<option>Broome golf course</option>" +
        "<option>Broome jetty (N)</option>" +
        "<option>Broome jetty (S)</option>" +
        "<option>Brou-Dalmeny</option>" +
        "<option>Brown Bay</option>" +
        "<option>Brown Bay</option>" +
        "<option>Brown Beach</option>" +
        "<option>Brown Beach (north)</option>" +
        "<option>Brown Peak (1)</option>" +
        "<option>Brown Peak (2)</option>" +
        "<option>Brown Peak (3)</option>" +
        "<option>Brown Rock</option>" +
        "<option>Brownlow</option>" +
        "<option>Browns</option>" +
        "<option>Browns (south)</option>" +
        "<option>Browns Beach</option>" +
        "<option>Browns Point</option>" +
        "<option>Brutus</option>" +
        "<option>Bryans Beach</option>" +
        "<option>Bucasia</option>" +
        "<option>Buchan Point</option>" +
        "<option>Buckingham Bay (E 10)</option>" +
        "<option>Buckingham Bay (E 11)</option>" +
        "<option>Buckingham Bay (E 12)</option>" +
        "<option>Buckingham Bay (E 13)</option>" +
        "<option>Buckingham Bay (E 14)</option>" +
        "<option>Buckingham Bay (E 15)</option>" +
        "<option>Buckingham Bay (E 4)</option>" +
        "<option>Buckingham Bay (E 5)</option>" +
        "<option>Buckingham Bay (E 6)</option>" +
        "<option>Buckingham Bay (E 7)</option>" +
        "<option>Buckingham Bay (E 8)</option>" +
        "<option>Buckingham Bay (E 9)</option>" +
        "<option>Buckle Head (1)</option>" +
        "<option>Buckle Head (2)</option>" +
        "<option>Buckle Head (E 1)</option>" +
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
        "<option>Buckle Head (E 2)</option>" +
        "<option>Buckle Head (E 20)</option>" +
        "<option>Buckle Head (E 21)</option>" +
        "<option>Buckle Head (E 22)</option>" +
        "<option>Buckle Head (E 23)</option>" +
        "<option>Buckle Head (E 24)</option>" +
        "<option>Buckle Head (E 25)</option>" +
        "<option>Buckle Head (E 26)</option>" +
        "<option>Buckle Head (E 27)</option>" +
        "<option>Buckle Head (E 3)</option>" +
        "<option>Buckle Head (E 4)</option>" +
        "<option>Buckle Head (E 5)</option>" +
        "<option>Buckle Head (E 6)</option>" +
        "<option>Buckle Head (E 7)</option>" +
        "<option>Buckle Head (E 8)</option>" +
        "<option>Buckle Head (E 9)</option>" +
        "<option>Buckle Head (W)</option>" +
        "<option>Bucks Bay</option>" +
        "<option>Bucks Bay (point)</option>" +
        "<option>Buddina</option>" +
        "<option>Buffalos Beach</option>" +
        "<option>Buicks Point (north)</option>" +
        "<option>Buicks Point (south 1)</option>" +
        "<option>Buicks Point (south 2)</option>" +
        "<option>Bukudal</option>" +
        "<option>Bulbari Point (N 1)</option>" +
        "<option>Bulbari Point (N 2)</option>" +
        "<option>Bulbari Point (N)</option>" +
        "<option>Bulbber Head Road</option>" +
        "<option>Bulburra Beach</option>" +
        "<option>Bulcock</option>" +
        "<option>Bule Bay (S)</option>" +
        "<option>Bull Bay (1)</option>" +
        "<option>Bull Bay (2)</option>" +
        "<option>Bull Bay (3)</option>" +
        "<option>Buller River</option>" +
        "<option>Buller River (N 1)</option>" +
        "<option>Buller River (N 2)</option>" +
        "<option>Bullock Point</option>" +
        "<option>Bulwer</option>" +
        "<option>Bumbora Rock</option>" +
        "<option>Bun Beetons Point (E)</option>" +
        "<option>Bunbury Beach</option>" +
        "<option>Bundegi</option>" +
        "<option>Bundegi Reef</option>" +
        "<option>Bunga Head</option>" +
        "<option>Bunga North</option>" +
        "<option>Bungaloo Bay</option>" +
        "<option>Bungaloo Bay (west 1)</option>" +
        "<option>Bungaloo Bay (west 2)</option>" +
        "<option>Bungan Head</option>" +
        "<option>Bungaree Creek (S 1)</option>" +
        "<option>Bungaree Creek (S 2)</option>" +
        "<option>Bungo Point</option>" +
        "<option>Bunker Bay</option>" +
        "<option>Burgess Cove</option>" +
        "<option>Burgess Cove (S)</option>" +
        "<option>Burial Point</option>" +
        "<option>Burleigh Beach</option>" +
        "<option>Burleigh Heads</option>" +
        "<option>Burnie yacht club</option>" +
        "<option>Burns Bay</option>" +
        "<option>Burns Bay (W 1)</option>" +
        "<option>Burns Bay (W 2)</option>" +
        "<option>Burns Bay (W 3)</option>" +
        "<option>Burns Beach</option>" +
        "<option>Burns Beach (N)</option>" +
        "<option>Burns Beach (S 1)</option>" +
        "<option>Burns Beach (S 2)</option>" +
        "<option>Burns Beach (S 3)</option>" +
        "<option>Burnside Island</option>" +
        "<option>Burnside Island (N-1)</option>" +
        "<option>Burnside Island (N-2)</option>" +
        "<option>Burnside Island (N-3)</option>" +
        "<option>Burnside Island (N-4)</option>" +
        "<option>Burremul</option>" +
        "<option>Burrum Heads</option>" +
        "<option>Burrum Point</option>" +
        "<option>Burrum River</option>" +
        "<option>Bush Bay</option>" +
        "<option>Bush Beach</option>" +
        "<option>Bush Point (1)</option>" +
        "<option>Bush Point (2)</option>" +
        "<option>Busselton beach</option>" +
        "<option>Bustard Bay (south)</option>" +
        "<option>Bustard Head (north 1)</option>" +
        "<option>Bustard Head (north 2)</option>" +
        "<option>Butcher Inlet</option>" +
        "<option>Butler Point (N)</option>" +
        "<option>Butlers Beach</option>" +
        "<option>Butlers Beach</option>" +
        "<option>Butlers Beach (west)</option>" +
        "<option>Butterfish Bay (1)</option>" +
        "<option>Butterfish Bay (2)</option>" +
        "<option>Buttons Beach</option>" +
        "<option>Butty Harbour (1)</option>" +
        "<option>Butty Harbour (2)</option>" +
        "<option>Butty Head (E 1)</option>" +
        "<option>Butty Head (E 2)</option>" +
        "<option>Butty Head (W 1)</option>" +
        "<option>Butty Head (W 2)</option>" +
        "<option>Buxton River mouth</option>" +
        "<option>Buymarr</option>" +
        "<option>Buymarr (E)</option>" +
        "<option>Buymarr (S)</option>" +
        "<option>By Beach</option>" +
        "<option>Byron Bay</option>" +
        "</dataList>";

    var cBeaches =
        "<datalist id='mylist'>" +
        "<option>CABBAGE TREE</option>" +
        "<option>CABBAGE TREE HARBOUR</option>" +
        "<option>CADET</option>" +
        "<option>CAIRNS BAY</option>" +
        "<option>CALLALA</option>" +
        "<option>CALLALA BAY</option>" +
        "<option>CAMPBELLS</option>" +
        "<option>CAMPBELLS COVE NORTH</option>" +
        "<option>CAMPBELLS COVE SOUTH</option>" +
        "<option>CANADIAN BAY</option>" +
        "<option>CAPE CONRAN - POINT RICARDO</option>" +
        "<option>CAPE DROMEDARY SOUTH 1</option>" +
        "<option>CAPE DROMEDARY SOUTH 2</option>" +
        "<option>CAPE DROMEDARY SOUTH 3</option>" +
        "<option>CAPE HAWKE 1</option>" +
        "<option>CAPE HAWKE 2</option>" +
        "<option>CAPE HOWE</option>" +
        "<option>CAPE HOWE</option>" +
        "<option>CAPE LIPTRAP</option>" +
        "<option>CAPE PATERSON\FIRST SURF</option>" +
        "<option>CAPE PATTON</option>" +
        "<option>CAPE REAMUR</option>" +
        "<option>CAPE VOLNEY</option>" +
        "<option>CAPE WOOLAMAI NORTH 1</option>" +
        "<option>CAPE WOOLAMAI NORTH 2</option>" +
        "<option>CAPE WOOLAMAI SOUTH</option>" +
        "<option>CAPTAINS</option>" +
        "<option>CARAAR</option>" +
        "<option>CARISBROOK CREEK</option>" +
        "<option>CARRUM</option>" +
        "<option>CARTERS</option>" +
        "<option>CARYARD</option>" +
        "<option>CASTLE COVE</option>" +
        "<option>CASTLE COVE EAST</option>" +
        "<option>CAT & KITTEN</option>" +
        "<option>CATHEDRAL ROCKS</option>" +
        "<option>CATHEDRAL ROCKS</option>" +
        "<option>CATTLE BAY</option>" +
        "<option>CAVE</option>" +
        "<option>CAVES</option>" +
        "<option>CAVES</option>" +
        "<option>CHAIN BAY</option>" +
        "<option>CHARLESWORTH BAY/PACIFIC BAY</option>" +
        "<option>CHELSEA</option>" +
        "<option>CHEVIOT</option>" +
        "<option>CHILDERS COVE</option>" +
        "<option>CHILDRENS</option>" +
        "<option>CHINAMANS</option>" +
        "<option>CHINAMANS NORTH</option>" +
        "<option>CHINAMANS SOUTH</option>" +
        "<option>CHINAMANS/GREEN PT</option>" +
        "<option>CINEMA POINT</option>" +
        "<option>CINEMA POINT NORTH</option>" +
        "<option>CIRCUIT</option>" +
        "<option>CLARKS</option>" +
        "<option>CLIFTON SPRINGS EAST</option>" +
        "<option>CLIFTON SPRINGS MAIN</option>" +
        "<option>CLIFTON SPRINGS WEST</option>" +
        "<option>CLINTON ROCKS WEST 1</option>" +
        "<option>CLINTON ROCKS WEST 2</option>" +
        "<option>CLINTON ROCKS WEST 3</option>" +
        "<option>CLONMEL BANKS</option>" +
        "<option>CLONMEL ISLAND</option>" +
        "<option>CLOVELLY</option>" +
        "<option>COAL POINT EAST</option>" +
        "<option>COAL POINT WEST</option>" +
        "<option>COALCLIFF</option>" +
        "<option>COALCLIFF NORTH</option>" +
        "<option>COBBLE</option>" +
        "<option>COBBLE</option>" +
        "<option>COCORA</option>" +
        "<option>COFFS HARBOUR (JETTY)</option>" +
        "<option>COILA BAR</option>" +
        "<option>COILA SOUTH</option>" +
        "<option>COLEDALE</option>" +
        "<option>COLLAROY</option>" +
        "<option>COLLENDINA</option>" +
        "<option>COLLERS</option>" +
        "<option>COLLINGWOOD</option>" +
        "<option>COMORONG ISLAND</option>" +
        "<option>CONGO</option>" +
        "<option>CONGO POINT SOUTH 1</option>" +
        "<option>CONGO POINT SOUTH 2</option>" +
        "<option>CONGWONG BAY 1</option>" +
        "<option>CONGWONG BAY 2</option>" +
        "<option>CONISTON</option>" +
        "<option>CONJOLA</option>" +
        "<option>CONNORS</option>" +
        "<option>CONVENT/MC KITTRICKS</option>" +
        "<option>COOGEE</option>" +
        "<option>COOKS CREEK</option>" +
        "<option>COPACABANA</option>" +
        "<option>CORINDI (NORTH)</option>" +
        "<option>CORINDI/ARRAWARRA</option>" +
        "<option>CORMORANT</option>" +
        "<option>CORRIGANS</option>" +
        "<option>CORRIMAL</option>" +
        "<option>CORRINGLE</option>" +
        "<option>CORUNNA POINT</option>" +
        "<option>COWDROYS</option>" +
        "<option>COWES</option>" +
        "<option>COWRIE BAY</option>" +
        "<option>COWRIE BAY</option>" +
        "<option>CRABBES</option>" +
        "<option>CRABBES CREEK</option>" +
        "<option>CRAIGIE</option>" +
        "<option>CRAYFISH BAY</option>" +
        "<option>CRAYFISH BAY WEST</option>" +
        "<option>CRAYFISH POINT</option>" +
        "<option>CRESCENT HEAD</option>" +
        "<option>CROFTS BAY</option>" +
        "<option>CRONULLA</option>" +
        "<option>CROOKHAVEN/CULBURRA</option>" +
        "<option>CROWDY</option>" +
        "<option>CUDGERA</option>" +
        "<option>CUDMIRRAH</option>" +
        "<option>CULLENDULLA</option>" +
        "<option>CUMBERLAND RIVER</option>" +
        "<option>CUMBERLAND RIVER NORTH</option>" +
        "<option>CUNJURONG POINT</option>" +
        "<option>CURL CURL</option>" +
        "<option>CURRARONG</option>" +
        "<option>CURRAWULLA</option>" +
        "<option>CUTLERS</option>" +
        "<option>CUTTAGEE</option>" +
        "<option>Cabbots Beach</option>" +
        "<option>Cabbots Well</option>" +
        "<option>Cabbots beach (west 1)</option>" +
        "<option>Cabbots beach (west 2)</option>" +
        "<option>Cable Bay (east 1)</option>" +
        "<option>Cable Bay (east 2)</option>" +
        "<option>Cable Bay (main)</option>" +
        "<option>Cable Bay (west)</option>" +
        "<option>Cable Beach</option>" +
        "<option>Cable Beach (E)</option>" +
        "<option>Cable Beach (N)</option>" +
        "<option>Cable Beach (W)</option>" +
        "<option>Cable Point (N 1)</option>" +
        "<option>Cable Point (N 2)</option>" +
        "<option>Cable Point (S 2)</option>" +
        "<option>Cable Point (S 2)</option>" +
        "<option>Cable Point (S 3)</option>" +
        "<option>Cable Station</option>" +
        "<option>Cactus</option>" +
        "<option>Cactus Canyon</option>" +
        "<option>Caiman Creek</option>" +
        "<option>Caiman Creek (north)</option>" +
        "<option>Cairns</option>" +
        "<option>Cairns Esplanade Lagoon</option>" +
        "<option>Caledon Bay (N 1)</option>" +
        "<option>Caledon Bay (N 2)</option>" +
        "<option>Caledon Bay (N 3)</option>" +
        "<option>Caledon Bay (N 4)</option>" +
        "<option>Caledon Bay (N 5)</option>" +
        "<option>Caledon Bay (N 6)</option>" +
        "<option>Caledon Bay (N 7)</option>" +
        "<option>Caledon Bay (N 8)</option>" +
        "<option>Caledon Bay (N 9)</option>" +
        "<option>Caledon Pt</option>" +
        "<option>Caledon Pt (N 1)</option>" +
        "<option>Caledon Pt (N 2)</option>" +
        "<option>Caledon Pt (N 3)</option>" +
        "<option>Caledon Pt (N 4)</option>" +
        "<option>Caledon Pt (N 5)</option>" +
        "<option>Caledon Pt (N 6)</option>" +
        "<option>Caledon Pt (N 7)</option>" +
        "<option>Caledon Pt (N 8)</option>" +
        "<option>Caledon Pt (N 9)</option>" +
        "<option>Caledon Pt (S 1)</option>" +
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
        "<option>Caledon Pt (S 2)</option>" +
        "<option>Caledon Pt (S 3)</option>" +
        "<option>Caledon Pt (S 4)</option>" +
        "<option>Caledon Pt (S 5)</option>" +
        "<option>Caledon Pt (S 6)</option>" +
        "<option>Caledon Pt (S 7)</option>" +
        "<option>Caledon Pt (S 8)</option>" +
        "<option>Caledon Pt (S 9)</option>" +
        "<option>Callala Point</option>" +
        "<option>Callawonga beach</option>" +
        "<option>Calm Bay</option>" +
        "<option>Calm Bay (N 1)</option>" +
        "<option>Calm Bay (N 2)</option>" +
        "<option>Calm Bay (N 3)</option>" +
        "<option>Calm Bay (N 4)</option>" +
        "<option>Calm Bay (N 5)</option>" +
        "<option>Calvert R</option>" +
        "<option>Calvert R (E 1)</option>" +
        "<option>Calvert R (E 2)</option>" +
        "<option>Calvert R (W 1)</option>" +
        "<option>Calvert R (W 2)</option>" +
        "<option>Calvert R (W 3)</option>" +
        "<option>Calverts Beach</option>" +
        "<option>Cambawarra Head</option>" +
        "<option>Camdale</option>" +
        "<option>Camel Rock</option>" +
        "<option>Cameron Beach</option>" +
        "<option>Cameron Rocks</option>" +
        "<option>Camisade Ck</option>" +
        "<option>Camisade Ck (S 1)</option>" +
        "<option>Camisade Ck (S 2)</option>" +
        "<option>Camp 13</option>" +
        "<option>Camp 14</option>" +
        "<option>Camp Cove</option>" +
        "<option>Camp Inlet</option>" +
        "<option>Camp Island</option>" +
        "<option>Camp Island (north)</option>" +
        "<option>Camp Island (south)</option>" +
        "<option>Campbell Pt (1)</option>" +
        "<option>Campbell Pt (2)</option>" +
        "<option>Campbell Pt (3)</option>" +
        "<option>Campwin</option>" +
        "<option>Canal Rocks</option>" +
        "<option>Canal Rocks (N)</option>" +
        "<option>Canecutters Beach</option>" +
        "<option>Cannonball Bay</option>" +
        "<option>Cannonvale</option>" +
        "<option>Canoe Point (east)</option>" +
        "<option>Canoe Point (west)</option>" +
        "<option>Cantaby Sandhills-Shelly</option>" +
        "<option>Canunda Beach</option>" +
        "<option>Cape Adieu</option>" +
        "<option>Cape Adieu (west 1)</option>" +
        "<option>Cape Adieu (west 2)</option>" +
        "<option>Cape Adieu (west 3)</option>" +
        "<option>Cape Adieu (west 4)</option>" +
        "<option>Cape Adieu (west 5)</option>" +
        "<option>Cape Adieu (west 6)</option>" +
        "<option>Cape Arid (E)</option>" +
        "<option>Cape Arnhem (N)</option>" +
        "<option>Cape Arnhem (S 1)</option>" +
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
        "<option>Cape Arnhem (S 2)</option>" +
        "<option>Cape Arnhem (S 20)</option>" +
        "<option>Cape Arnhem (S 21)</option>" +
        "<option>Cape Arnhem (S 3)</option>" +
        "<option>Cape Arnhem (S 4)</option>" +
        "<option>Cape Arnhem (S 5)</option>" +
        "<option>Cape Arnhem (S 6)</option>" +
        "<option>Cape Arnhem (S 7)</option>" +
        "<option>Cape Arnhem (S 8)</option>" +
        "<option>Cape Arnhem (S 9)</option>" +
        "<option>Cape Banks</option>" +
        "<option>Cape Banks - East</option>" +
        "<option>Cape Banks - North</option>" +
        "<option>Cape Banks - West</option>" +
        "<option>Cape Barrow (S 1)</option>" +
        "<option>Cape Barrow (S 2)</option>" +
        "<option>Cape Barrow (S 3)</option>" +
        "<option>Cape Barrow (S 4)</option>" +
        "<option>Cape Barrow (S 5)</option>" +
        "<option>Cape Barrow (S 6)</option>" +
        "<option>Cape Barrow (S 7)</option>" +
        "<option>Cape Barrow (S 8)</option>" +
        "<option>Cape Barrow (W 1)</option>" +
        "<option>Cape Barrow (W 2)</option>" +
        "<option>Cape Barrow (W 3)</option>" +
        "<option>Cape Barrow (W 4)</option>" +
        "<option>Cape Barrow (W 5)</option>" +
        "<option>Cape Barrow (W 6)</option>" +
        "<option>Cape Barrow (W 7)</option>" +
        "<option>Cape Barrow (W 8)</option>" +
        "<option>Cape Baskerville</option>" +
        "<option>Cape Bauer (1)</option>" +
        "<option>Cape Bauer (2)</option>" +
        "<option>Cape Bauer (3)</option>" +
        "<option>Cape Bauer (4)</option>" +
        "<option>Cape Bauer (5)</option>" +
        "<option>Cape Bauer (6)</option>" +
        "<option>Cape Beaufort</option>" +
        "<option>Cape Bedford</option>" +
        "<option>Cape Bedford (S)</option>" +
        "<option>Cape Bellefin  (E)</option>" +
        "<option>Cape Bellefin  (W)</option>" +
        "<option>Cape Belly</option>" +
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
        "<option>Cape Bernier (W 1)</option>" +
        "<option>Cape Bernier (W 10)</option>" +
        "<option>Cape Bernier (W 2)</option>" +
        "<option>Cape Bernier (W 3)</option>" +
        "<option>Cape Bernier (W 4)</option>" +
        "<option>Cape Bernier (W 5)</option>" +
        "<option>Cape Bernier (W 6)</option>" +
        "<option>Cape Bernier (W 7)</option>" +
        "<option>Cape Bernier (W 8)</option>" +
        "<option>Cape Bernier (W 9)</option>" +
        "<option>Cape Bertholet (N)</option>" +
        "<option>Cape Bertholet (S)</option>" +
        "<option>Cape Blanche (1)</option>" +
        "<option>Cape Blanche (2)</option>" +
        "<option>Cape Blanche (3)</option>" +
        "<option>Cape Boffon (3)</option>" +
        "<option>Cape Boileau</option>" +
        "<option>Cape Borda</option>" +
        "<option>Cape Borda (N)</option>" +
        "<option>Cape Borda (S)</option>" +
        "<option>Cape Bossut</option>" +
        "<option>Cape Bougainville (E 1)</option>" +
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
        "<option>Cape Bougainville (E 2)</option>" +
        "<option>Cape Bougainville (E 20)</option>" +
        "<option>Cape Bougainville (E 21)</option>" +
        "<option>Cape Bougainville (E 22)</option>" +
        "<option>Cape Bougainville (E 23)</option>" +
        "<option>Cape Bougainville (E 24)</option>" +
        "<option>Cape Bougainville (E 25)</option>" +
        "<option>Cape Bougainville (E 26)</option>" +
        "<option>Cape Bougainville (E 27)</option>" +
        "<option>Cape Bougainville (E 3)</option>" +
        "<option>Cape Bougainville (E 4)</option>" +
        "<option>Cape Bougainville (E 5)</option>" +
        "<option>Cape Bougainville (E 6)</option>" +
        "<option>Cape Bougainville (E 7)</option>" +
        "<option>Cape Bougainville (E 8)</option>" +
        "<option>Cape Bougainville (E 9)</option>" +
        "<option>Cape Bougainville (W 1)</option>" +
        "<option>Cape Bougainville (W 2)</option>" +
        "<option>Cape Bougainville (W 3)</option>" +
        "<option>Cape Bowen (N 1)</option>" +
        "<option>Cape Bowen (N 2)</option>" +
        "<option>Cape Bowen (N 3)</option>" +
        "<option>Cape Bowen (N 4)</option>" +
        "<option>Cape Bowen (N 5)</option>" +
        "<option>Cape Bowen (S 1)</option>" +
        "<option>Cape Bowen (S 13</option>" +
        "<option>Cape Bowen (S 2)</option>" +
        "<option>Cape Bowling Green</option>" +
        "<option>Cape Brewster (E 1)</option>" +
        "<option>Cape Brewster (E 2)</option>" +
        "<option>Cape Brewster (E 3)</option>" +
        "<option>Cape Brewster (E 4)</option>" +
        "<option>Cape Brewster (W 1)</option>" +
        "<option>Cape Brewster (W 2)</option>" +
        "<option>Cape Buffon (1)</option>" +
        "<option>Cape Buffon (2)</option>" +
        "<option>Cape Burr</option>" +
        "<option>Cape Capricorn</option>" +
        "<option>Cape Capricorn (south 1)</option>" +
        "<option>Cape Capricorn (south 2)</option>" +
        "<option>Cape Capricorn (south 3)</option>" +
        "<option>Cape Capricorn (spit)</option>" +
        "<option>Cape Capricorn (west 1)</option>" +
        "<option>Cape Capricorn (west 2)</option>" +
        "<option>Cape Cassini</option>" +
        "<option>Cape Cassini (east 1)</option>" +
        "<option>Cape Cassini (west 1)</option>" +
        "<option>Cape Cassini (west 2)</option>" +
        "<option>Cape Cassini (west 3)</option>" +
        "<option>Cape Cassini (west 4)</option>" +
        "<option>Cape Cassini (west 5)</option>" +
        "<option>Cape Cassini (west 6)</option>" +
        "<option>Cape Catastrophe (1)</option>" +
        "<option>Cape Catastrophe (2)</option>" +
        "<option>Cape Clairault</option>" +
        "<option>Cape Clairault (S 1)</option>" +
        "<option>Cape Clairault (S 2)</option>" +
        "<option>Cape Clairault (S 3)</option>" +
        "<option>Cape Clairault (S 4)</option>" +
        "<option>Cape Clairault (S 5)</option>" +
        "<option>Cape Clairault (S 6)</option>" +
        "<option>Cape Cleveland</option>" +
        "<option>Cape Clinton (north)</option>" +
        "<option>Cape Clinton (south 1)</option>" +
        "<option>Cape Clinton (south 2)</option>" +
        "<option>Cape Clinton (south 3)</option>" +
        "<option>Cape Cockburn (1)</option>" +
        "<option>Cape Cockburn (2)</option>" +
        "<option>Cape Cockburn (3)</option>" +
        "<option>Cape Cockburn (4)</option>" +
        "<option>Cape Cockburn (5)</option>" +
        "<option>Cape Cockburn (6)</option>" +
        "<option>Cape Cockburn (7)</option>" +
        "<option>Cape Colbert</option>" +
        "<option>Cape Contrariety</option>" +
        "<option>Cape Conway (north)</option>" +
        "<option>Cape Conway (west 1)</option>" +
        "<option>Cape Conway (west 2)</option>" +
        "<option>Cape Conway (west 3)</option>" +
        "<option>Cape Conway (west 4)</option>" +
        "<option>Cape Cossigny</option>" +
        "<option>Cape Cossigny (E)</option>" +
        "<option>Cape Cossigny (S 1)</option>" +
        "<option>Cape Cossigny (S 2)</option>" +
        "<option>Cape Cossigny (S 3)</option>" +
        "<option>Cape Coutts (south 1)</option>" +
        "<option>Cape Coutts (south 2)</option>" +
        "<option>Cape D'Estrees (east 1)</option>" +
        "<option>Cape D'Estrees (east 2)</option>" +
        "<option>Cape D'Estrees (east 3)</option>" +
        "<option>Cape D'Estrees (east 4)</option>" +
        "<option>Cape D'Estrees (west 1)</option>" +
        "<option>Cape D'Estrees (west 2)</option>" +
        "<option>Cape D'Estrees (west 3)</option>" +
        "<option>Cape Deslacs (N)</option>" +
        "<option>Cape Direction</option>" +
        "<option>Cape Direction (S)</option>" +
        "<option>Cape Direction (W 1)</option>" +
        "<option>Cape Direction (W 2)</option>" +
        "<option>Cape Dombey</option>" +
        "<option>Cape Dombey</option>" +
        "<option>Cape Dombey (north 1)</option>" +
        "<option>Cape Dombey (north 2)</option>" +
        "<option>Cape Dombey (north 3)</option>" +
        "<option>Cape Dombey (north 4)</option>" +
        "<option>Cape Dombey (north 5)</option>" +
        "<option>Cape Dombey (north 6)</option>" +
        "<option>Cape Domett (E 1)</option>" +
        "<option>Cape Domett (E 2)</option>" +
        "<option>Cape Domett (E 3)</option>" +
        "<option>Cape Domett (E 4)</option>" +
        "<option>Cape Domett (E 5)</option>" +
        "<option>Cape Domett (E 6)</option>" +
        "<option>Cape Domett (S)</option>" +
        "<option>Cape Donnington</option>" +
        "<option>Cape Donnington (south)</option>" +
        "<option>Cape Driver</option>" +
        "<option>Cape Driver (north)</option>" +
        "<option>Cape Driver (south 1)</option>" +
        "<option>Cape Driver (south 2)</option>" +
        "<option>Cape Driver (south 3)</option>" +
        "<option>Cape Du Boulay (N)</option>" +
        "<option>Cape Du Boulay (S)</option>" +
        "<option>Cape Du Couedic</option>" +
        "<option>Cape Duhamel</option>" +
        "<option>Cape Duhamel (N)</option>" +
        "<option>Cape Duhamel (S)</option>" +
        "<option>Cape Dussejour</option>" +
        "<option>Cape Dussejour (S)</option>" +
        "<option>Cape Dutton (west)</option>" +
        "<option>Cape Edgecumbe</option>" +
        "<option>Cape Elie (W 1)</option>" +
        "<option>Cape Elie (W 2)</option>" +
        "<option>Cape Elie (W 3)</option>" +
        "<option>Cape Elizabeth</option>" +
        "<option>Cape Elizabeth (east 1)</option>" +
        "<option>Cape Elizabeth (east 2)</option>" +
        "<option>Cape Elizabeth (east 3)</option>" +
        "<option>Cape Elizabeth (south)</option>" +
        "<option>Cape Elizabeth (spit)</option>" +
        "<option>Cape Euler</option>" +
        "<option>Cape Euler (north)</option>" +
        "<option>Cape Farquhar (N 1)</option>" +
        "<option>Cape Farquhar (N)</option>" +
        "<option>Cape Farquhar (S)</option>" +
        "<option>Cape Finniss</option>" +
        "<option>Cape Finniss (north)</option>" +
        "<option>Cape Finniss (south 1)</option>" +
        "<option>Cape Finniss (south 2)</option>" +
        "<option>Cape Finniss (south 3)</option>" +
        "<option>Cape Flattery</option>" +
        "<option>Cape Flattery (S 1)</option>" +
        "<option>Cape Flattery (S 2)</option>" +
        "<option>Cape Flattery (S 3)</option>" +
        "<option>Cape Flattery (S 4)</option>" +
        "<option>Cape Flattery (S 5)</option>" +
        "<option>Cape Flattery (W 1)</option>" +
        "<option>Cape Flattery (W 2)</option>" +
        "<option>Cape Flattery (W 3)</option>" +
        "<option>Cape Flattery (W 4)</option>" +
        "<option>Cape Flattery (W 5)</option>" +
        "<option>Cape Flattery (W 6)</option>" +
        "<option>Cape Flattery-Murray Pt</option>" +
        "<option>Cape Forbin (west)</option>" +
        "<option>Cape Ford (east 1)</option>" +
        "<option>Cape Ford (east 2)</option>" +
        "<option>Cape Ford (east 3)</option>" +
        "<option>Cape Ford (east 4)</option>" +
        "<option>Cape Ford (west 1)</option>" +
        "<option>Cape Ford (west 2)</option>" +
        "<option>Cape Ford (west 3)</option>" +
        "<option>Cape Ford (west 4)</option>" +
        "<option>Cape Ford (west 5)</option>" +
        "<option>Cape Freycinet (S 1)</option>" +
        "<option>Cape Freycinet (S 2)</option>" +
        "<option>Cape Frezier</option>" +
        "<option>Cape Frezier (N)</option>" +
        "<option>Cape Frezier (S)</option>" +
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
        "<option>Cape Gloucester (east 1)</option>" +
        "<option>Cape Gloucester (east 2)</option>" +
        "<option>Cape Gloucester (east 3)</option>" +
        "<option>Cape Gloucester (west)</option>" +
        "<option>Cape Gourdon</option>" +
        "<option>Cape Gourdon (E 1)</option>" +
        "<option>Cape Gourdon (E 2)</option>" +
        "<option>Cape Gourdon (E 3)</option>" +
        "<option>Cape Gourdon (E 4)</option>" +
        "<option>Cape Gourdon (E 5)</option>" +
        "<option>Cape Gourdon (E 6)</option>" +
        "<option>Cape Gourdon (E 7)</option>" +
        "<option>Cape Gourdon (S)</option>" +
        "<option>Cape Grenville (NE 1)</option>" +
        "<option>Cape Grenville (NE 2)</option>" +
        "<option>Cape Grenville (NE 3)</option>" +
        "<option>Cape Grenville (NE 4)</option>" +
        "<option>Cape Grenville (NE 5)</option>" +
        "<option>Cape Grenville (NE 6)</option>" +
        "<option>Cape Grenville (S 1)</option>" +
        "<option>Cape Grenville (S 2)</option>" +
        "<option>Cape Grenville (S 3)</option>" +
        "<option>Cape Grey</option>" +
        "<option>Cape Grey (S 1)</option>" +
        "<option>Cape Grey (S 2)</option>" +
        "<option>Cape Grey (S 3)</option>" +
        "<option>Cape Griffith (S 1)</option>" +
        "<option>Cape Griffith (S 2)</option>" +
        "<option>Cape Griffith (S 3)</option>" +
        "<option>Cape Hamelin</option>" +
        "<option>Cape Hamelin (N)</option>" +
        "<option>Cape Hamelin (S)</option>" +
        "<option>Cape Hardy (north 1)</option>" +
        "<option>Cape Hardy (north 2)</option>" +
        "<option>Cape Hardy (north 3)</option>" +
        "<option>Cape Hardy (north 4)</option>" +
        "<option>Cape Hardy (north 5)</option>" +
        "<option>Cape Hardy (south 1)</option>" +
        "<option>Cape Hardy (south 2)</option>" +
        "<option>Cape Hart (1)</option>" +
        "<option>Cape Hart (2)</option>" +
        "<option>Cape Hart (3)</option>" +
        "<option>Cape Hay (south)</option>" +
        "<option>Cape Heirisson</option>" +
        "<option>Cape Heirisson (E)</option>" +
        "<option>Cape Heirisson (S 1)</option>" +
        "<option>Cape Heirisson (S 2)</option>" +
        "<option>Cape Heirisson (S 3)</option>" +
        "<option>Cape Heirisson (S 4)</option>" +
        "<option>Cape Heirisson (S 5)</option>" +
        "<option>Cape Hillsborough</option>" +
        "<option>Cape Hotham (1)</option>" +
        "<option>Cape Hotham (2)</option>" +
        "<option>Cape Hotham (east 1)</option>" +
        "<option>Cape Hotham (east 2)</option>" +
        "<option>Cape Hotham (east 3)</option>" +
        "<option>Cape Hotham (east 4)</option>" +
        "<option>Cape Hotham (west)</option>" +
        "<option>Cape Jaffa</option>" +
        "<option>Cape Jaubert</option>" +
        "<option>Cape Jaubert (N 1)</option>" +
        "<option>Cape Jaubert (N 2)</option>" +
        "<option>Cape Jaubert (N 3)</option>" +
        "<option>Cape Jaubert (S)</option>" +
        "<option>Cape Jervis harbour</option>" +
        "<option>Cape Keerweer</option>" +
        "<option>Cape Keppel</option>" +
        "<option>Cape Keppel (east)</option>" +
        "<option>Cape Keppel (spit)</option>" +
        "<option>Cape Keraudren (1)</option>" +
        "<option>Cape Keraudren (2)</option>" +
        "<option>Cape Kersaint (west 1)</option>" +
        "<option>Cape Kersaint (west 2)</option>" +
        "<option>Cape Kersaint (west 3)</option>" +
        "<option>Cape Kimberley (north)</option>" +
        "<option>Cape Kimberley (south)</option>" +
        "<option>Cape Lambert</option>" +
        "<option>Cape Lambert (S 1)</option>" +
        "<option>Cape Lambert (S 2)</option>" +
        "<option>Cape Lambert (S 3)</option>" +
        "<option>Cape Lambert (S 4)</option>" +
        "<option>Cape Lambert (S 5)</option>" +
        "<option>Cape Lambert (S 6)</option>" +
        "<option>Cape Lambert (S 7)</option>" +
        "<option>Cape Lambert (S 8)</option>" +
        "<option>Cape Lambert (W 1)</option>" +
        "<option>Cape Lambert (W 2)</option>" +
        "<option>Cape Lambert (W 3)</option>" +
        "<option>Cape Lambert (W 4)</option>" +
        "<option>Cape Lannes</option>" +
        "<option>Cape Latouche Treville</option>" +
        "<option>Cape Latouche Treville (E 1)</option>" +
        "<option>Cape Latouche Treville (E 2)</option>" +
        "<option>Cape Latouche Treville (E 3)</option>" +
        "<option>Cape Latouche Treville (W 1)</option>" +
        "<option>Cape Latouche Treville (W 2)</option>" +
        "<option>Cape Le Grand (E 1)</option>" +
        "<option>Cape Le Grand (E 2)</option>" +
        "<option>Cape Le Grand (N)</option>" +
        "<option>Cape Le Grand (W)</option>" +
        "<option>Cape Leeuwin (N)</option>" +
        "<option>Cape Leschenault</option>" +
        "<option>Cape Leschenault (S 1)</option>" +
        "<option>Cape Leschenault (S 2)</option>" +
        "<option>Cape Lesueur</option>" +
        "<option>Cape Lesueur (N 1)</option>" +
        "<option>Cape Lesueur (N 2)</option>" +
        "<option>Cape Lesueur (N 3)</option>" +
        "<option>Cape Lesueur (N 4)</option>" +
        "<option>Cape Lesueur (S 1)</option>" +
        "<option>Cape Lesueur (S 2)</option>" +
        "<option>Cape Lesueur (S 3)</option>" +
        "<option>Cape Lesueur (S 4)</option>" +
        "<option>Cape Lesueur (S 5)</option>" +
        "<option>Cape Leveque (E 1)</option>" +
        "<option>Cape Leveque (E 2)</option>" +
        "<option>Cape Leveque (E 3)</option>" +
        "<option>Cape Leveque (W)</option>" +
        "<option>Cape Linois (north)</option>" +
        "<option>Cape Linois (south)</option>" +
        "<option>Cape Londonderry</option>" +
        "<option>Cape Londonderry (E 1)</option>" +
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
        "<option>Cape Londonderry (E 2)</option>" +
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
        "<option>Cape Londonderry (E 3)</option>" +
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
        "<option>Cape Londonderry (E 4)</option>" +
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
        "<option>Cape Londonderry (E 5)</option>" +
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
        "<option>Cape Londonderry (E 6)</option>" +
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
        "<option>Cape Londonderry (E 7)</option>" +
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
        "<option>Cape Londonderry (E 8)</option>" +
        "<option>Cape Londonderry (E 80)</option>" +
        "<option>Cape Londonderry (E 81)</option>" +
        "<option>Cape Londonderry (E 82)</option>" +
        "<option>Cape Londonderry (E 83)</option>" +
        "<option>Cape Londonderry (E 84)</option>" +
        "<option>Cape Londonderry (E 85)</option>" +
        "<option>Cape Londonderry (E 86)</option>" +
        "<option>Cape Londonderry (E 87)</option>" +
        "<option>Cape Londonderry (E 88)</option>" +
        "<option>Cape Londonderry (E 9)</option>" +
        "<option>Cape Londonderry (W 1)</option>" +
        "<option>Cape Londonderry (W 10)</option>" +
        "<option>Cape Londonderry (W 11)</option>" +
        "<option>Cape Londonderry (W 12)</option>" +
        "<option>Cape Londonderry (W 13)</option>" +
        "<option>Cape Londonderry (W 14)</option>" +
        "<option>Cape Londonderry (W 2)</option>" +
        "<option>Cape Londonderry (W 3)</option>" +
        "<option>Cape Londonderry (W 4)</option>" +
        "<option>Cape Londonderry (W 5)</option>" +
        "<option>Cape Londonderry (W 6)</option>" +
        "<option>Cape Londonderry (W 7)</option>" +
        "<option>Cape Londonderry (W 8)</option>" +
        "<option>Cape Londonderry (W 9)</option>" +
        "<option>Cape Manifold (south 1)</option>" +
        "<option>Cape Manifold (south 2)</option>" +
        "<option>Cape Manifold (south 3)</option>" +
        "<option>Cape Manifold (south 4)</option>" +
        "<option>Cape Manifold (south 5)</option>" +
        "<option>Cape Manifold (south 6)</option>" +
        "<option>Cape Manifold (west 1)</option>" +
        "<option>Cape Manifold (west 2)</option>" +
        "<option>Cape Melville</option>" +
        "<option>Cape Melville (E 1)</option>" +
        "<option>Cape Melville (E 2)</option>" +
        "<option>Cape Melville (E 3)</option>" +
        "<option>Cape Melville (E 4)</option>" +
        "<option>Cape Melville (E 4)</option>" +
        "<option>Cape Melville (E 6)</option>" +
        "<option>Cape Melville (W 1)</option>" +
        "<option>Cape Melville (W 2)</option>" +
        "<option>Cape Mentelle (N 1)</option>" +
        "<option>Cape Mentelle (N 2)</option>" +
        "<option>Cape Mentelle (N 3)</option>" +
        "<option>Cape Mentelle (S 1)</option>" +
        "<option>Cape Mentelle (S 2)</option>" +
        "<option>Cape Missiessy</option>" +
        "<option>Cape Missiessy (east)</option>" +
        "<option>Cape Missiessy (south)</option>" +
        "<option>Cape Moreton (west 1)</option>" +
        "<option>Cape Moreton (west 2)</option>" +
        "<option>Cape Naturaliste</option>" +
        "<option>Cape Naturaliste (E)</option>" +
        "<option>Cape Naturaliste (W)</option>" +
        "<option>Cape Newbold (S 1)</option>" +
        "<option>Cape Newbold (S 2)</option>" +
        "<option>Cape Northumberland (east)</option>" +
        "<option>Cape Northumberland (west 1)</option>" +
        "<option>Cape Northumberland (west 2)</option>" +
        "<option>Cape Nuyts</option>" +
        "<option>Cape Nuyts (west 1)</option>" +
        "<option>Cape Nuyts (west 2)</option>" +
        "<option>Cape Nuyts (west 3)</option>" +
        "<option>Cape Nuyts (west 4)</option>" +
        "<option>Cape Nuyts (west 5)</option>" +
        "<option>Cape Pallarenda (1)</option>" +
        "<option>Cape Pallarenda (2)</option>" +
        "<option>Cape Palmerston (south 1)</option>" +
        "<option>Cape Palmerston (south 2)</option>" +
        "<option>Cape Palmerston (south 3)</option>" +
        "<option>Cape Palmerston (south 4)</option>" +
        "<option>Cape Palmerston (south 5)</option>" +
        "<option>Cape Palmerston (west 1)</option>" +
        "<option>Cape Palmerston (west 2)</option>" +
        "<option>Cape Palmerston (west 3)</option>" +
        "<option>Cape Pasley (1)</option>" +
        "<option>Cape Pasley (2)</option>" +
        "<option>Cape Pasley (3)</option>" +
        "<option>Cape Pasley (W 1)</option>" +
        "<option>Cape Pasley (W 2)</option>" +
        "<option>Cape Pasley (W 3)</option>" +
        "<option>Cape Peron North</option>" +
        "<option>Cape Peron North (E)</option>" +
        "<option>Cape Peron North (S 1)</option>" +
        "<option>Cape Peron North (S 2)</option>" +
        "<option>Cape Peron North (S 3)</option>" +
        "<option>Cape Peron North (S 4)</option>" +
        "<option>Cape Peron North (S 5)</option>" +
        "<option>Cape Peron North (W)</option>" +
        "<option>Cape Pond (E 1)</option>" +
        "<option>Cape Pond (E 10)</option>" +
        "<option>Cape Pond (E 11)</option>" +
        "<option>Cape Pond (E 12)</option>" +
        "<option>Cape Pond (E 13)</option>" +
        "<option>Cape Pond (E 14)</option>" +
        "<option>Cape Pond (E 15)</option>" +
        "<option>Cape Pond (E 16)</option>" +
        "<option>Cape Pond (E 2)</option>" +
        "<option>Cape Pond (E 3)</option>" +
        "<option>Cape Pond (E 4)</option>" +
        "<option>Cape Pond (E 5)</option>" +
        "<option>Cape Pond (E 6)</option>" +
        "<option>Cape Pond (E 7)</option>" +
        "<option>Cape Pond (E 8)</option>" +
        "<option>Cape Pond (E 9)</option>" +
        "<option>Cape Pond (W 1)</option>" +
        "<option>Cape Pond (W 2)</option>" +
        "<option>Cape Pond (W 3)</option>" +
        "<option>Cape Pond (W 4)</option>" +
        "<option>Cape Portland (E 1)</option>" +
        "<option>Cape Portland (E 2)</option>" +
        "<option>Cape Preston (E 1)</option>" +
        "<option>Cape Preston (E 2)</option>" +
        "<option>Cape Preston spit</option>" +
        "<option>Cape Ransonnet (E 1)</option>" +
        "<option>Cape Ransonnet (E 2)</option>" +
        "<option>Cape Ransonnet (E 3)</option>" +
        "<option>Cape Ransonnet (E)</option>" +
        "<option>Cape Ransonnet (W)</option>" +
        "<option>Cape Richards</option>" +
        "<option>Cape Riche (S)</option>" +
        "<option>Cape Rose</option>" +
        "<option>Cape Rouge</option>" +
        "<option>Cape Rulhieres</option>" +
        "<option>Cape Rulhieres (E 1)</option>" +
        "<option>Cape Rulhieres (E 10)</option>" +
        "<option>Cape Rulhieres (E 11)</option>" +
        "<option>Cape Rulhieres (E 12)</option>" +
        "<option>Cape Rulhieres (E 13)</option>" +
        "<option>Cape Rulhieres (E 2)</option>" +
        "<option>Cape Rulhieres (E 3)</option>" +
        "<option>Cape Rulhieres (E 4)</option>" +
        "<option>Cape Rulhieres (E 5)</option>" +
        "<option>Cape Rulhieres (E 6)</option>" +
        "<option>Cape Rulhieres (E 7)</option>" +
        "<option>Cape Rulhieres (E 8)</option>" +
        "<option>Cape Rulhieres (E 9)</option>" +
        "<option>Cape Sandwich (1)</option>" +
        "<option>Cape Sandwich (2)</option>" +
        "<option>Cape Scott</option>" +
        "<option>Cape Scott (east)</option>" +
        "<option>Cape Scott (south)</option>" +
        "<option>Cape Shield</option>" +
        "<option>Cape Shield (E 1)</option>" +
        "<option>Cape Shield (E 2)</option>" +
        "<option>Cape Shield (W 1)</option>" +
        "<option>Cape Shield (W 2)</option>" +
        "<option>Cape Shield (W 3)</option>" +
        "<option>Cape Shield (W 4)</option>" +
        "<option>Cape Shield (W 5)</option>" +
        "<option>Cape Shield (W 6)</option>" +
        "<option>Cape Sidmouth</option>" +
        "<option>Cape Sidmouth (N)</option>" +
        "<option>Cape Sidmouth (S 1)</option>" +
        "<option>Cape Sidmouth (S 2)</option>" +
        "<option>Cape Sidmouth (S 3)</option>" +
        "<option>Cape Solander</option>" +
        "<option>Cape Spencer (north 1)</option>" +
        "<option>Cape Spencer (north 2)</option>" +
        "<option>Cape Spencer (north 3)</option>" +
        "<option>Cape Spencer (north 4)</option>" +
        "<option>Cape Spencer (north 5)</option>" +
        "<option>Cape St Lambert (E)</option>" +
        "<option>Cape St Lambert (W 1)</option>" +
        "<option>Cape St Lambert (W 2)</option>" +
        "<option>Cape Stewart</option>" +
        "<option>Cape Stewart (E 1)</option>" +
        "<option>Cape Stewart (E 2)</option>" +
        "<option>Cape Stewart (E 3)</option>" +
        "<option>Cape Stewart (E 4)</option>" +
        "<option>Cape Stewart (E 5)</option>" +
        "<option>Cape Stewart (W 1)</option>" +
        "<option>Cape Stewart (W 2)</option>" +
        "<option>Cape Talbot (E 1)</option>" +
        "<option>Cape Talbot (E 10)</option>" +
        "<option>Cape Talbot (E 11)</option>" +
        "<option>Cape Talbot (E 2)</option>" +
        "<option>Cape Talbot (E 3)</option>" +
        "<option>Cape Talbot (E 4)</option>" +
        "<option>Cape Talbot (E 5)</option>" +
        "<option>Cape Talbot (E 6)</option>" +
        "<option>Cape Talbot (E 7)</option>" +
        "<option>Cape Talbot (E 8)</option>" +
        "<option>Cape Talbot (E 9)</option>" +
        "<option>Cape Talbot (S 1)</option>" +
        "<option>Cape Talbot (S 2)</option>" +
        "<option>Cape Talbot spit</option>" +
        "<option>Cape Thevenard</option>" +
        "<option>Cape Thevenard (boat ramp)</option>" +
        "<option>Cape Thevenard (east 1)</option>" +
        "<option>Cape Thevenard (east 2)</option>" +
        "<option>Cape Thevenard (east 3)</option>" +
        "<option>Cape Thevenard (east 4)</option>" +
        "<option>Cape Thevenard (north 1)</option>" +
        "<option>Cape Thevenard (north 3)</option>" +
        "<option>Cape Thomas</option>" +
        "<option>Cape Thouin</option>" +
        "<option>Cape Thouin (E)</option>" +
        "<option>Cape Thouin (W 1)</option>" +
        "<option>Cape Thouin (W 2)</option>" +
        "<option>Cape Thurburn (W 1)</option>" +
        "<option>Cape Thurburn (W 2)</option>" +
        "<option>Cape Torrens (S 1)</option>" +
        "<option>Cape Torrens (S 2)</option>" +
        "<option>Cape Torrens (W 1)</option>" +
        "<option>Cape Torrens (W 2)</option>" +
        "<option>Cape Torrens (W 3)</option>" +
        "<option>Cape Torrens (W 4)</option>" +
        "<option>Cape Torrens (east)</option>" +
        "<option>Cape Torrens (west)</option>" +
        "<option>Cape Tournefort</option>" +
        "<option>Cape Tribulation</option>" +
        "<option>Cape Upstart</option>" +
        "<option>Cape Vancouver</option>" +
        "<option>Cape Villaret</option>" +
        "<option>Cape Villaret (E 1)</option>" +
        "<option>Cape Villaret (E 2)</option>" +
        "<option>Cape Villaret (E 3)</option>" +
        "<option>Cape Villaret (E 4)</option>" +
        "<option>Cape Villaret (S 1)</option>" +
        "<option>Cape Villaret (S 2)</option>" +
        "<option>Cape Villaret (S 3)</option>" +
        "<option>Cape Vivonne</option>" +
        "<option>Cape Vivonne (east 1)</option>" +
        "<option>Cape Vivonne (east 2)</option>" +
        "<option>Cape Vivonne (east 3)</option>" +
        "<option>Cape Vivonne (east 4)</option>" +
        "<option>Cape Vivonne (north 1)</option>" +
        "<option>Cape Vivonne (north 2)</option>" +
        "<option>Cape Vivonne (north 3)</option>" +
        "<option>Cape Vivonne (north 4)</option>" +
        "<option>Cape Vlamingh</option>" +
        "<option>Cape Voltarie</option>" +
        "<option>Cape Voltarie (S 1)</option>" +
        "<option>Cape Voltarie (S 2)</option>" +
        "<option>Cape Voltarie (S 3)</option>" +
        "<option>Cape Voltarie (S 4)</option>" +
        "<option>Cape Wellington (N 1)</option>" +
        "<option>Cape Wellington (N 2)</option>" +
        "<option>Cape Wellington (N 3)</option>" +
        "<option>Cape Wellington (N 4)</option>" +
        "<option>Cape Wellington (N 5)</option>" +
        "<option>Cape Wellington (S 1)</option>" +
        "<option>Cape Wellington (S 2)</option>" +
        "<option>Cape Wellington (S 3)</option>" +
        "<option>Cape Wellington (S 4)</option>" +
        "<option>Cape Weyland (1)</option>" +
        "<option>Cape Weyland (2)</option>" +
        "<option>Cape Weyland (3)</option>" +
        "<option>Cape Weyland (north 1)</option>" +
        "<option>Cape Weyland (north 2)</option>" +
        "<option>Cape Weyland (north 3)</option>" +
        "<option>Cape Weymouth (S 1)</option>" +
        "<option>Cape Weymouth (S 2)</option>" +
        "<option>Cape Weymouth (S 3)</option>" +
        "<option>Cape Whiskey (E 1)</option>" +
        "<option>Cape Whiskey (E 2)</option>" +
        "<option>Cape Whiskey (E 3)</option>" +
        "<option>Cape Whiskey (E 4)</option>" +
        "<option>Cape Whiskey (E 5)</option>" +
        "<option>Cape Whiskey (E 6)</option>" +
        "<option>Cape Whiskey (E 7)</option>" +
        "<option>Cape Whiskey (W 1)</option>" +
        "<option>Cape Whiskey (W 2)</option>" +
        "<option>Cape Whiskey (W 3)</option>" +
        "<option>Cape Wilberforce</option>" +
        "<option>Cape Wiles (west 1)</option>" +
        "<option>Cape Wiles (west 2)</option>" +
        "<option>Cape Willoughby</option>" +
        "<option>Capricorn</option>" +
        "<option>Capstan Is (E 1)</option>" +
        "<option>Capstan Is (E 2)</option>" +
        "<option>Capstan Is (E 3)</option>" +
        "<option>Capstan Is (N 1)</option>" +
        "<option>Capstan Is (N 2)</option>" +
        "<option>Captain Billy Landing</option>" +
        "<option>Captain Billy Landing (N 1)</option>" +
        "<option>Captain Billy Landing (N 2)</option>" +
        "<option>Captain Billy Landing (N 3)</option>" +
        "<option>Captain Billy Landing (S 1)</option>" +
        "<option>Captain Billy Landing (S 2)</option>" +
        "<option>Captain Billy Landing (S 3)</option>" +
        "<option>Captains/Greenpatch</option>" +
        "<option>Cararang Peninsula (N 1)</option>" +
        "<option>Cararang Peninsula (N 2)</option>" +
        "<option>Cararang Peninsula (N 3)</option>" +
        "<option>Cararang Peninsula (S 1)</option>" +
        "<option>Cararang Peninsula (S 10)</option>" +
        "<option>Cararang Peninsula (S 11)</option>" +
        "<option>Cararang Peninsula (S 12)</option>" +
        "<option>Cararang Peninsula (S 2)</option>" +
        "<option>Cararang Peninsula (S 3)</option>" +
        "<option>Cararang Peninsula (S 4)</option>" +
        "<option>Cararang Peninsula (S 5)</option>" +
        "<option>Cararang Peninsula (S 6)</option>" +
        "<option>Cararang Peninsula (S 7)</option>" +
        "<option>Cararang Peninsula (S 8)</option>" +
        "<option>Cararang Peninsula (S 9)</option>" +
        "<option>Carbla Point (N 1)</option>" +
        "<option>Carbla Point (N 2)</option>" +
        "<option>Carbla Point (N 3)</option>" +
        "<option>Carbla Point (S)</option>" +
        "<option>Carcase Rock (1)</option>" +
        "<option>Carcase Rock (2)</option>" +
        "<option>Cardwell</option>" +
        "<option>Careel Bay Head</option>" +
        "<option>Careening Bay</option>" +
        "<option>Carl Cove</option>" +
        "<option>Carlisle Beach</option>" +
        "<option>Carlisle Hd (N)</option>" +
        "<option>Carlisle Hd (S)</option>" +
        "<option>Carlton Beach</option>" +
        "<option>Carmila</option>" +
        "<option>Carnot Bay</option>" +
        "<option>Carrickalinga</option>" +
        "<option>Carrickalinga Head</option>" +
        "<option>Carrickfrgus Bay (1)</option>" +
        "<option>Carrickfrgus Bay (2)</option>" +
        "<option>Carrickfrgus Bay (N)</option>" +
        "<option>Carrow Well</option>" +
        "<option>Carrow Well (north)</option>" +
        "<option>Carrow Well (south 1)</option>" +
        "<option>Carrow Well (south 2)</option>" +
        "<option>Carsons Beach</option>" +
        "<option>Cartaminia Point (1)</option>" +
        "<option>Cartaminia Point (2)</option>" +
        "<option>Cartaminia Point (3)</option>" +
        "<option>Cartaminia Point (4)</option>" +
        "<option>Cartaminia Point (4)</option>" +
        "<option>Cartaminia Point (E)</option>" +
        "<option>Carter Hill</option>" +
        "<option>Carthona Ave</option>" +
        "<option>Cartwright Point (S)</option>" +
        "<option>Cascade Bay (E 1)</option>" +
        "<option>Cascade Bay (E 2)</option>" +
        "<option>Cascade Bay (E 3)</option>" +
        "<option>Cascade Bay (E 4)</option>" +
        "<option>Cassoway Creek</option>" +
        "<option>Castle Bay</option>" +
        "<option>Castle Bellas</option>" +
        "<option>Castle Gully (east)</option>" +
        "<option>Castle Gully (west)</option>" +
        "<option>Castle Point</option>" +
        "<option>Castle Point (S)</option>" +
        "<option>Castle Rock</option>" +
        "<option>Castle Rock Point (S 1)</option>" +
        "<option>Castle Rock Point (S 2)</option>" +
        "<option>Castle Rock Point (S 3)</option>" +
        "<option>Castle Rocks</option>" +
        "<option>Castle Rocks (1)</option>" +
        "<option>Castle Rocks (2)</option>" +
        "<option>Castle Rocks (3)</option>" +
        "<option>Castle Rocks (4)</option>" +
        "<option>Castles</option>" +
        "<option>Castletown</option>" +
        "<option>Casuarina Beach</option>" +
        "<option>Casuarina Clump</option>" +
        "<option>Casuarina Point</option>" +
        "<option>Casuarina Point</option>" +
        "<option>Casuarina Point (N)</option>" +
        "<option>Catamaran (1)</option>" +
        "<option>Catamaran (2)</option>" +
        "<option>Catamaran Bay (1)</option>" +
        "<option>Catamaran Bay (2)</option>" +
        "<option>Catamaran Bay (3)</option>" +
        "<option>Catfish Bay</option>" +
        "<option>Cathedral</option>" +
        "<option>Cathedral</option>" +
        "<option>Cathedral Point (S 1)</option>" +
        "<option>Cathedral Point (S 2)</option>" +
        "<option>Cathedral Rocks</option>" +
        "<option>Catherine Beach</option>" +
        "<option>Catherine Hill Bay Platform</option>" +
        "<option>Catherine Hill Bay Rock Platform</option>" +
        "<option>Catseye Bay</option>" +
        "<option>Catspaw Point</option>" +
        "<option>Cattle Point</option>" +
        "<option>Cattle Well</option>" +
        "<option>Cattle Well (S)</option>" +
        "<option>Causeway</option>" +
        "<option>Cave Bay</option>" +
        "<option>Cave Bay (S)</option>" +
        "<option>Cave Beach</option>" +
        "<option>Cave Beach (E 1)</option>" +
        "<option>Cave Beach (E 2)</option>" +
        "<option>Cave Pt</option>" +
        "<option>Caves Bay</option>" +
        "<option>Cedar Bay (north)</option>" +
        "<option>Cedar Bay (south)</option>" +
        "<option>Ceduna</option>" +
        "<option>Ceduna (north 1)</option>" +
        "<option>Ceduna (north 2)</option>" +
        "<option>Ceduna (north 3)</option>" +
        "<option>Ceduna (north 4)</option>" +
        "<option>Cemetery</option>" +
        "<option>Cemetery Beach</option>" +
        "<option>Cemetery Beach</option>" +
        "<option>Centaur</option>" +
        "<option>Cervantes</option>" +
        "<option>Chadinga Sandhills</option>" +
        "<option>Chalgonippi dunes</option>" +
        "<option>Chalgonippi dunes (west)</option>" +
        "<option>Challenger Beach</option>" +
        "<option>Chambers Bay</option>" +
        "<option>Chambers Bay (west)</option>" +
        "<option>Chambers Cove</option>" +
        "<option>Champion-St George Beach</option>" +
        "<option>Chandogo Pt (W 1)</option>" +
        "<option>Chandogo Pt (W 2)</option>" +
        "<option>Channel</option>" +
        "<option>Channel Point</option>" +
        "<option>Channel Point (north)</option>" +
        "<option>Charcoal Creek (east)</option>" +
        "<option>Charcoal Creek (north 1)</option>" +
        "<option>Charcoal Creek (north 2)</option>" +
        "<option>Charleys Beach</option>" +
        "<option>Charon Point</option>" +
        "<option>Chatfield Point (N)</option>" +
        "<option>Chatfield Point (S)</option>" +
        "<option>Chatherine Hill Rock Platform</option>" +
        "<option>Cheadanup Cliffs (1)</option>" +
        "<option>Cheadanup Cliffs (2)</option>" +
        "<option>Cheadanup Cliffs (3)</option>" +
        "<option>Cheadanup Cliffs (4)</option>" +
        "<option>Cheetima Beach</option>" +
        "<option>Cherry Tree Bay</option>" +
        "<option>Chester R (N)</option>" +
        "<option>Chester R (S)</option>" +
        "<option>Cheyne Beach</option>" +
        "<option>Cheyne Head (E)</option>" +
        "<option>Cheyne Head (W)</option>" +
        "<option>Cheyne Inlet</option>" +
        "<option>Chile Ck</option>" +
        "<option>Chili Beach</option>" +
        "<option>Chili Beach (N 1)</option>" +
        "<option>Chili Beach (N 2)</option>" +
        "<option>Chimney Rocks</option>" +
        "<option>Chimney Rocks (E)</option>" +
        "<option>Chinaman Well</option>" +
        "<option>Chinamans Beach</option>" +
        "<option>Chinamans Hat</option>" +
        "<option>Chirrup Bore</option>" +
        "<option>Chirrup Well</option>" +
        "<option>Chisolm Pt (E)</option>" +
        "<option>Chisolm Pt (W)</option>" +
        "<option>Chiton Rocks</option>" +
        "<option>Christies Beach</option>" +
        "<option>Christmas Ck</option>" +
        "<option>Christmas Cove</option>" +
        "<option>Christmas Cove</option>" +
        "<option>Christmas Cove (N 1)</option>" +
        "<option>Christmas Cove (N 2)</option>" +
        "<option>Christmas Creek</option>" +
        "<option>Chryne Point</option>" +
        "<option>Chunda Bay</option>" +
        "<option>Church Rock (N)</option>" +
        "<option>Church Rock (S)</option>" +
        "<option>Circus Beach</option>" +
        "<option>City Beach</option>" +
        "<option>City Rock</option>" +
        "<option>City of Melbourne Bay</option>" +
        "<option>City of Melbourne Bay (S)</option>" +
        "<option>City of York Bay (1)</option>" +
        "<option>City of York Bay (2)</option>" +
        "<option>Clairview</option>" +
        "<option>Clairview Bluff</option>" +
        "<option>Clairview Bluff (north)</option>" +
        "<option>Clairview Island</option>" +
        "<option>Clam Bay</option>" +
        "<option>Clam Bay (east)</option>" +
        "<option>Clare Bay</option>" +
        "<option>Clare Bay (east)</option>" +
        "<option>Clare Bay (west 1)</option>" +
        "<option>Clare Bay (west 2)</option>" +
        "<option>Clare Bay (west 3)</option>" +
        "<option>Clare Bay (west 4)</option>" +
        "<option>Clare Bay (west 5)</option>" +
        "<option>Clare Bay (west 6)</option>" +
        "<option>Claremont Pt</option>" +
        "<option>Claremont Pt (N 1)</option>" +
        "<option>Claremont Pt (N 2)</option>" +
        "<option>Clareville</option>" +
        "<option>Clark Point</option>" +
        "<option>Clarke Reserve</option>" +
        "<option>Claytons</option>" +
        "<option>Claytons Bay</option>" +
        "<option>Clear Point</option>" +
        "<option>Cleaverville  (E 1)</option>" +
        "<option>Cleaverville  (E 2)</option>" +
        "<option>Cleaverville  (E 3)</option>" +
        "<option>Cleaverville  (E 4)</option>" +
        "<option>Cleaverville  (E 5)</option>" +
        "<option>Cleaverville  (E 6)</option>" +
        "<option>Cleaverville  (E 7)</option>" +
        "<option>Cleaverville Creek (W 1)</option>" +
        "<option>Cleaverville Creek (W 2)</option>" +
        "<option>Cleaverville Creek (W 3)</option>" +
        "<option>Clews Point</option>" +
        "<option>Clews Point (east)</option>" +
        "<option>Clews Point (south 1)</option>" +
        "<option>Clews Point (south 2)</option>" +
        "<option>Clews Point (south 3)</option>" +
        "<option>Clews Point (south)</option>" +
        "<option>Cliff Head</option>" +
        "<option>Cliff Head (N)</option>" +
        "<option>Cliff Head (S)</option>" +
        "<option>Cliff Head (east)</option>" +
        "<option>Cliff Head (south 1)</option>" +
        "<option>Cliff Head (south 2)</option>" +
        "<option>Cliff Point</option>" +
        "<option>Cliff Point</option>" +
        "<option>Cliff Point (west)</option>" +
        "<option>Cliff Pt (S 1)</option>" +
        "<option>Cliff Pt (S 2)</option>" +
        "<option>Cliffdale Ck (E)</option>" +
        "<option>Cliffdale Ck (W 1)</option>" +
        "<option>Cliffdale Ck (W 2)</option>" +
        "<option>Cliffy Head</option>" +
        "<option>Cliffy Head (W 1)</option>" +
        "<option>Cliffy Head (W 2)</option>" +
        "<option>Cliffy Head (W 3)</option>" +
        "<option>Cliffy Head (W 4)</option>" +
        "<option>Cliffy Pt (N 1)</option>" +
        "<option>Cliffy Pt (N 2)</option>" +
        "<option>Cliffy Pt (N 3)</option>" +
        "<option>Cliffy Pt (N 4)</option>" +
        "<option>Cliffy Pt (N 5)</option>" +
        "<option>Cliffy Pt (N 6)</option>" +
        "<option>Cliffy Pt (N 7)</option>" +
        "<option>Cliffy Pt (N 8)</option>" +
        "<option>Cliffy Pt (N 9)</option>" +
        "<option>Cliffy Pt (N)</option>" +
        "<option>Cliffy Pt (S 1)</option>" +
        "<option>Cliffy Pt (S 2)</option>" +
        "<option>Cliffy Pt (S 3)</option>" +
        "<option>Cliffy Pt (S 4)</option>" +
        "<option>Cliffy Pt (S 5)</option>" +
        "<option>Cliffy Pt (S 6)</option>" +
        "<option>Cliffy Pt (S 7)</option>" +
        "<option>Cliffy Pt (S 8)</option>" +
        "<option>Cliffy Pt (S 9)</option>" +
        "<option>Clifton Beach</option>" +
        "<option>Clifton Gardens</option>" +
        "<option>Clinton</option>" +
        "<option>Clinton (west)</option>" +
        "<option>Clontarf</option>" +
        "<option>Clontarf (N)</option>" +
        "<option>Clontarf Beach</option>" +
        "<option>Cloudy Bay</option>" +
        "<option>Cloudy Bay (E)</option>" +
        "<option>Cloudy Bay (W)</option>" +
        "<option>Clovelly Pool Car Park</option>" +
        "<option>Clump Point</option>" +
        "<option>Coalinga Creek</option>" +
        "<option>Cobblers Beach</option>" +
        "<option>Coblers Rock</option>" +
        "<option>Cockle Bay</option>" +
        "<option>Cockle Bay</option>" +
        "<option>Cockle Bay (S)</option>" +
        "<option>Cockle Creek</option>" +
        "<option>Cockleshell Beach (N)</option>" +
        "<option>Cockleshell Beach (S)</option>" +
        "<option>Cocoanut Beach</option>" +
        "<option>Cocoanut Point</option>" +
        "<option>Coconut</option>" +
        "<option>Coconut Bay</option>" +
        "<option>Coconut Bay</option>" +
        "<option>Coconut Beach</option>" +
        "<option>Coconut Point (north)</option>" +
        "<option>Coconut Point (south)</option>" +
        "<option>Cocora Point</option>" +
        "<option>Cod Bay</option>" +
        "<option>Coffeys Gulch</option>" +
        "<option>Coffin Bay</option>" +
        "<option>Coffin Bay (1)</option>" +
        "<option>Coffin Bay (2)</option>" +
        "<option>Coffin Bay (3)</option>" +
        "<option>Coffin Bay (4)</option>" +
        "<option>Coffin Bay (5)</option>" +
        "<option>Coffin Bay (6)</option>" +
        "<option>Coffin Bay (7)</option>" +
        "<option>Coffin Creek</option>" +
        "<option>Coleman R</option>" +
        "<option>Coles (E 1)</option>" +
        "<option>Coles (E 2)</option>" +
        "<option>Coles Bay (W)</option>" +
        "<option>Coles Bay (boat ramp)</option>" +
        "<option>Coles Bay (slipway)</option>" +
        "<option>Coles Beach</option>" +
        "<option>Coles Point (south 1)</option>" +
        "<option>Coles Point (south 2)</option>" +
        "<option>Coles Point (south 3)</option>" +
        "<option>Coles Point (south 4)</option>" +
        "<option>Collaroy Point</option>" +
        "<option>Collendina - Raffs</option>" +
        "<option>Colliboi Beach</option>" +
        "<option>Colliers Beach</option>" +
        "<option>Collins Beach</option>" +
        "<option>Collins Spring Hill (1)</option>" +
        "<option>Collins Spring Hill (2)</option>" +
        "<option>Collins Spring Hill (3)</option>" +
        "<option>Combe Pt</option>" +
        "<option>Combe Pt (E 1)</option>" +
        "<option>Combe Pt (E 2)</option>" +
        "<option>Combe Pt (W)</option>" +
        "<option>Commissariat Point</option>" +
        "<option>Condini Landing</option>" +
        "<option>Condon Creek (E)</option>" +
        "<option>Condon Creek mouth</option>" +
        "<option>Cone Bay (N 1)</option>" +
        "<option>Cone Bay (N 10)</option>" +
        "<option>Cone Bay (N 2)</option>" +
        "<option>Cone Bay (N 3)</option>" +
        "<option>Cone Bay (N 4)</option>" +
        "<option>Cone Bay (N 5)</option>" +
        "<option>Cone Bay (N 6)</option>" +
        "<option>Cone Bay (N 7)</option>" +
        "<option>Cone Bay (N 8)</option>" +
        "<option>Cone Bay (N 9)</option>" +
        "<option>Cone Bay (S 1)</option>" +
        "<option>Cone Bay (S 2)</option>" +
        "<option>Cone Bay (S 3)</option>" +
        "<option>Cone Bay (S 4)</option>" +
        "<option>Cone Bay (S 5)</option>" +
        "<option>Cone Bay (S 6)</option>" +
        "<option>Cone Bay (S 7)</option>" +
        "<option>Cone Bay (S 8)</option>" +
        "<option>Cone Bay (SE 1)</option>" +
        "<option>Cone Bay (SE 2)</option>" +
        "<option>Cone Bay (SE 3)</option>" +
        "<option>Cone Bay (SE 4)</option>" +
        "<option>Cone Bay (SE 5)</option>" +
        "<option>Cone Bay (SE 6)</option>" +
        "<option>Cone Hill (1)</option>" +
        "<option>Cone Hill (2)</option>" +
        "<option>Cone Hill (3)</option>" +
        "<option>Conference Point</option>" +
        "<option>Congony Beach</option>" +
        "<option>Congora Beach</option>" +
        "<option>Conical Harbour</option>" +
        "<option>Coningham Beach</option>" +
        "<option>Conleys Beach</option>" +
        "<option>Connellys Bay</option>" +
        "<option>Connor Bluff</option>" +
        "<option>Connors Island</option>" +
        "<option>Conquette Point</option>" +
        "<option>Conroy</option>" +
        "<option>Conspicious (W 1)</option>" +
        "<option>Conspicious (W 2)</option>" +
        "<option>Conspicious (W 3)</option>" +
        "<option>Conspicious Beach</option>" +
        "<option>Conspicious Beach (E)</option>" +
        "<option>Constance Bay</option>" +
        "<option>Constance Bay (north)</option>" +
        "<option>Constantine Point (Woolanmarroo S)</option>" +
        "<option>Contis Beach</option>" +
        "<option>Convention Beach</option>" +
        "<option>Convention Beach (north 1)</option>" +
        "<option>Convention Beach (north 2)</option>" +
        "<option>Convention Beach (north 3)</option>" +
        "<option>Convention Beach (north 4)</option>" +
        "<option>Convention Beach (north 5)</option>" +
        "<option>Convention Beach (north 6)</option>" +
        "<option>Convention Beach (north 7)</option>" +
        "<option>Convention Beach (south 1)</option>" +
        "<option>Convention Beach (south 2)</option>" +
        "<option>Convention Beach (south 3)</option>" +
        "<option>Conway Beach</option>" +
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
        "<option>Coobowie</option>" +
        "<option>Cooee Bay</option>" +
        "<option>Cooee Beach</option>" +
        "<option>Cooee Point (W)</option>" +
        "<option>Coogee Beach</option>" +
        "<option>Cooke Point (1)</option>" +
        "<option>Cooke Point (2)</option>" +
        "<option>Cooks Beach</option>" +
        "<option>Cooks Corner (1)</option>" +
        "<option>Cooks Corner (2)</option>" +
        "<option>Cooks River</option>" +
        "<option>Coolangatta</option>" +
        "<option>Coolangatta-Greenmount</option>" +
        "<option>Coolawang</option>" +
        "<option>Coolgra Point (S 1)</option>" +
        "<option>Coolgra Point (S 2)</option>" +
        "<option>Coolimba</option>" +
        "<option>Coolimba (N 1)</option>" +
        "<option>Coolimba (N 2)</option>" +
        "<option>Coolimba (S 1)</option>" +
        "<option>Coolimba (S 2)</option>" +
        "<option>Coolimba (S)</option>" +
        "<option>Cooloola</option>" +
        "<option>Coolum</option>" +
        "<option>Coolum Resort</option>" +
        "<option>Coombe Point</option>" +
        "<option>Coombe Point (E 1)</option>" +
        "<option>Coombe Point (E 2)</option>" +
        "<option>Coombe Point (S 1)</option>" +
        "<option>Coombe Point (S 2)</option>" +
        "<option>Coombe Point (S 3)</option>" +
        "<option>Coombe Point (S 4)</option>" +
        "<option>Coombe Point (S 5)</option>" +
        "<option>Coonarr</option>" +
        "<option>Coonarr Creek</option>" +
        "<option>Coonga Creek (S 1)</option>" +
        "<option>Coonga Creek (S)</option>" +
        "<option>Coongul Creek</option>" +
        "<option>Cooper Creek</option>" +
        "<option>Cooper Creek (S)</option>" +
        "<option>Cooper Point (1)</option>" +
        "<option>Cooper Point (2)</option>" +
        "<option>Cooper Point (3)</option>" +
        "<option>Cootenbrand Creek</option>" +
        "<option>Cooya</option>" +
        "<option>Copacabana-Macmasters</option>" +
        "<option>Coral Bay</option>" +
        "<option>Coral Bay (4)</option>" +
        "<option>Coral Bay (5)</option>" +
        "<option>Coral Bay (6)</option>" +
        "<option>Coral Bay (7)</option>" +
        "<option>Coral Bay (8)</option>" +
        "<option>Coral Bay (west)</option>" +
        "<option>Coral Beach</option>" +
        "<option>Cordinup</option>" +
        "<option>Cordinup (E)</option>" +
        "<option>Cordinup (W)</option>" +
        "<option>Corisande Hills (north)</option>" +
        "<option>Corisande Hills (south 1)</option>" +
        "<option>Corisande Hills (south 2)</option>" +
        "<option>Corlette</option>" +
        "<option>Cornambie Pt (N)</option>" +
        "<option>Corner Cove</option>" +
        "<option>Corny Point</option>" +
        "<option>Corny Point (east 1)</option>" +
        "<option>Corny Point (east 2)</option>" +
        "<option>Corny Point (west)</option>" +
        "<option>Coroma Well</option>" +
        "<option>Coronation Beach</option>" +
        "<option>Corrie Island</option>" +
        "<option>Corringle-Pettman</option>" +
        "<option>Corroboree</option>" +
        "<option>Corvisart Bay (1)</option>" +
        "<option>Corvisart Bay (2)</option>" +
        "<option>Corvisart Bay (3)</option>" +
        "<option>Corvisart Bay (4)</option>" +
        "<option>Corvisart Bay (5)</option>" +
        "<option>Corvisart Bay (6)</option>" +
        "<option>Corvisart Bay (7)</option>" +
        "<option>Corvisart Bay (8)</option>" +
        "<option>Cossack</option>" +
        "<option>Coswell Beach</option>" +
        "<option>Cosy Corner</option>" +
        "<option>Cosy Corner</option>" +
        "<option>Cosy Corner</option>" +
        "<option>Cosy Corner (S)</option>" +
        "<option>Cotterell R (N)</option>" +
        "<option>Cotterell R mouth</option>" +
        "<option>Cottesloe Beach</option>" +
        "<option>Cottons Creek</option>" +
        "<option>Cottons Creek (S)</option>" +
        "<option>Couchs Beach</option>" +
        "<option>Coulomb Pt (N 1)</option>" +
        "<option>Coulomb Pt (N 2)</option>" +
        "<option>Coulomb Pt (N 3)</option>" +
        "<option>Coulomb Pt (S)</option>" +
        "<option>Couran Cove</option>" +
        "<option>Courland Bay</option>" +
        "<option>Courland Bay (S 1)</option>" +
        "<option>Courland Bay (S 2)</option>" +
        "<option>Couta Rocks (1)</option>" +
        "<option>Couta Rocks (2)</option>" +
        "<option>Couta Rocks (N)</option>" +
        "<option>Couta Rocks (S)</option>" +
        "<option>Covering Beach (1)</option>" +
        "<option>Covering Beach (2)  Laguna Quay</option>" +
        "<option>Covering Beach (3)</option>" +
        "<option>Cow Bay (mid)</option>" +
        "<option>Cow Bay (north)</option>" +
        "<option>Cow Bay (south</option>" +
        "<option>Cow Island</option>" +
        "<option>Cow Island (north)</option>" +
        "<option>Cowan Creek</option>" +
        "<option>Cowaramup Bay</option>" +
        "<option>Cowaramup Bay (N)</option>" +
        "<option>Cowaramup Bay (S)</option>" +
        "<option>Cowaramup Pt (S)</option>" +
        "<option>Cowerie Well (1)</option>" +
        "<option>Cowerie Well (2)</option>" +
        "<option>Cowerie Well (3)</option>" +
        "<option>Cowie Pt Bay</option>" +
        "<option>Cowleds Landing</option>" +
        "<option>Cowley</option>" +
        "<option>Cowper Point (S)</option>" +
        "<option>Cowral Ck (N 1)</option>" +
        "<option>Cowral Ck (N 2)</option>" +
        "<option>Cowral Ck (N 3)</option>" +
        "<option>Cowral Ck (W)</option>" +
        "<option>Cowral Ck mouth</option>" +
        "<option>Cowrie Beach</option>" +
        "<option>Cowrie Beach</option>" +
        "<option>Cowrie Beach</option>" +
        "<option>Cowrie Cove (N 1)</option>" +
        "<option>Cowrie Cove (N 2)</option>" +
        "<option>Cowrie Cove (S 1)</option>" +
        "<option>Cowrie Cove (S 2)</option>" +
        "<option>Cowrie Point</option>" +
        "<option>Cowrie Point (E 1)</option>" +
        "<option>Cowrie Point (E 2)</option>" +
        "<option>Cowrie island</option>" +
        "<option>Cox Bight (1)</option>" +
        "<option>Cox Bight (1)</option>" +
        "<option>Cox Bight (3)</option>" +
        "<option>Coymbra (1)</option>" +
        "<option>Coymbra (10)</option>" +
        "<option>Coymbra (11-camp)</option>" +
        "<option>Coymbra (12)</option>" +
        "<option>Coymbra (13)</option>" +
        "<option>Coymbra (14)</option>" +
        "<option>Coymbra (2)</option>" +
        "<option>Coymbra (3)</option>" +
        "<option>Coymbra (4)</option>" +
        "<option>Coymbra (4)</option>" +
        "<option>Coymbra (6)</option>" +
        "<option>Coymbra (7)</option>" +
        "<option>Coymbra (8)</option>" +
        "<option>Coymbra (9)</option>" +
        "<option>Crab Ck</option>" +
        "<option>Crab Island</option>" +
        "<option>Crawford Bay (E)</option>" +
        "<option>Crawford Beach (north)</option>" +
        "<option>Crawford Beach (south)</option>" +
        "<option>Crawfords Landing</option>" +
        "<option>Crawfords Landing (south)</option>" +
        "<option>Cray Point (N)</option>" +
        "<option>Crayfish Creek (E 1)</option>" +
        "<option>Crayfish Creek (E 2)</option>" +
        "<option>Crayfish Creek (W 1)</option>" +
        "<option>Crayfish Creek (W 2)</option>" +
        "<option>Crayfish Creek Beach</option>" +
        "<option>Crayfish Point</option>" +
        "<option>Crayfish Rock</option>" +
        "<option>Creeses Mistake</option>" +
        "<option>Cremorne (N)</option>" +
        "<option>Cremorne Beach</option>" +
        "<option>Crescent Bay</option>" +
        "<option>Cressy Beach</option>" +
        "<option>Cribb Island</option>" +
        "<option>Crocidile Cave</option>" +
        "<option>Crocidile Head</option>" +
        "<option>Crockery Bay</option>" +
        "<option>Crocodile Head / Three Graves</option>" +
        "<option>Cronleys Creek (W 1)</option>" +
        "<option>Cronleys Creek (W 2)</option>" +
        "<option>Cronleys Creek (W 3)</option>" +
        "<option>Crookhaven Heads</option>" +
        "<option>Croome Creek</option>" +
        "<option>Croppies Bay (1)</option>" +
        "<option>Croppies Bay (2)</option>" +
        "<option>Croppies Bay (3)</option>" +
        "<option>Croppies Beach</option>" +
        "<option>Croppies Point (E)</option>" +
        "<option>Croquet Lawn Beach</option>" +
        "<option>Crown Creek</option>" +
        "<option>Cruwe Cove</option>" +
        "<option>Crystal Ck (N 1)</option>" +
        "<option>Crystal Ck (N 2)</option>" +
        "<option>Crystal Ck (S 1)</option>" +
        "<option>Crystal Ck (S 2)</option>" +
        "<option>Crystal Ck (W 1)</option>" +
        "<option>Crystal Ck (W 10)</option>" +
        "<option>Crystal Ck (W 11)</option>" +
        "<option>Crystal Ck (W 2)</option>" +
        "<option>Crystal Ck (W 3)</option>" +
        "<option>Crystal Ck (W 4)</option>" +
        "<option>Crystal Ck (W 5)</option>" +
        "<option>Crystal Ck (W 6)</option>" +
        "<option>Crystal Ck (W 7)</option>" +
        "<option>Crystal Ck (W 8)</option>" +
        "<option>Crystal Ck (W 9)</option>" +
        "<option>Crystal Hd (N)</option>" +
        "<option>Crystal Hd (S 1)</option>" +
        "<option>Crystal Hd (S 2)</option>" +
        "<option>Crystal Hd (S 3)</option>" +
        "<option>Crystal-Ollera Cks</option>" +
        "<option>Cullen Bay</option>" +
        "<option>Cullen Beach</option>" +
        "<option>Cullen Pt (S)</option>" +
        "<option>Cullen Road</option>" +
        "<option>Cullen Road (N 1)</option>" +
        "<option>Cullen Road (N 2)</option>" +
        "<option>Cullen Road (S 1)</option>" +
        "<option>Cullen Road (S 2)</option>" +
        "<option>Cullen Road (S 3)</option>" +
        "<option>Cungulla</option>" +
        "<option>Cunningham Pt</option>" +
        "<option>Cunningham Pt (S)</option>" +
        "<option>Curl Curl Beach</option>" +
        "<option>Curlew Bay</option>" +
        "<option>Curlew Point</option>" +
        "<option>Curracurong</option>" +
        "<option>Curracurrang</option>" +
        "<option>Curran Pt</option>" +
        "<option>Curran Pt  (N 1)</option>" +
        "<option>Curran Pt  (N 10)</option>" +
        "<option>Curran Pt  (N 11)</option>" +
        "<option>Curran Pt  (N 2)</option>" +
        "<option>Curran Pt  (N 3)</option>" +
        "<option>Curran Pt  (N 4)</option>" +
        "<option>Curran Pt  (N 5)</option>" +
        "<option>Curran Pt  (N 6)</option>" +
        "<option>Curran Pt  (N 7)</option>" +
        "<option>Curran Pt  (N 8)</option>" +
        "<option>Curran Pt  (N 9)</option>" +
        "<option>Curran Pt  (S)</option>" +
        "<option>Currarong Point</option>" +
        "<option>Currawong</option>" +
        "<option>Curries Creek (E)</option>" +
        "<option>Currmundi</option>" +
        "<option>Currumbin</option>" +
        "<option>Currumbin Inlet</option>" +
        "<option>Curta Rocks (1)</option>" +
        "<option>Curta Rocks (2)</option>" +
        "<option>Curtis Bay</option>" +
        "<option>Curtis Island 1410</option>" +
        "<option>Curtis Island 1411</option>" +
        "<option>Curtis Island 1412</option>" +
        "<option>Curtis Island 1413</option>" +
        "<option>Curtis Island 1414</option>" +
        "<option>Curtis Island 1416</option>" +
        "<option>Curtis Island 1417</option>" +
        "<option>Curtis Island 1418</option>" +
        "<option>Curtis Island 1419</option>" +
        "<option>Curtis Island 1420</option>" +
        "<option>Curtis Island 1421</option>" +
        "<option>Curtis Island 1422</option>" +
        "<option>Curtis Island 1423</option>" +
        "<option>Curtis Point</option>" +
        "<option>Curtis Point (W)</option>" +
        "<option>Cuthbert Point</option>" +
        "<option>Cutlack Island</option>" +
        "<option>Cuttagee Point</option>" +
        "<option>Cutter Ck</option>" +
        "<option>Cutter Ck (S)</option>" +
        "<option>Cuttle Fish Bay</option>" +
        "<option>Cvray Creek</option>" +
        "<option>Cygnet Bay (S 1)</option>" +
        "<option>Cygnet Bay (S 2)</option>" +
        "<option>Cygnet River delta</option>" +
        "<option>Cylinder Beach</option>" +
        "</dataList>";

    var dBeaches =
        "<datalist id='mylist'>" +
        "<option>D'Anville Bay</option>" +
        "<option>D'Estrees Bay</option>" +
        "<option>D'Urville Point (N 1)</option>" +
        "<option>D'Urville Point (N 2)</option>" +
        "<option>D'Urville Point (N 3)</option>" +
        "<option>D'Urville Point (S 1)</option>" +
        "<option>D'Urville Point (S 2)</option>" +
        "<option>D'Urville Point (S 3)</option>" +
        "<option>D'Urville Point (S 4)</option>" +
        "<option>DALMENY</option>" +
        "<option>DARBY BAY</option>" +
        "<option>DARBY/COTTERS</option>" +
        "<option>DARK</option>" +
        "<option>DARK POINT NORTH</option>" +
        "<option>DART POINT/LONGNOSE</option>" +
        "<option>DAVA</option>" +
        "<option>DAVEYS BAY</option>" +
        "<option>DAWSON ISLAND NORTH</option>" +
        "<option>DAWSON ISLAND SOUTH</option>" +
        "<option>DEADMAN</option>" +
        "<option>DEADMANS</option>" +
        "<option>DEE</option>" +
        "<option>DEE WHY</option>" +
        "<option>DEEP CREEK</option>" +
        "<option>DELICATE NOBBY</option>" +
        "<option>DELRAY</option>" +
        "<option>DEMONS BLUFF</option>" +
        "<option>DENDY STREET</option>" +
        "<option>DENHAMS</option>" +
        "<option>DEPOT</option>" +
        "<option>DESCARTES/DISCOVERY BAY</option>" +
        "<option>DIAMOND BAY</option>" +
        "<option>DIAMOND REEF</option>" +
        "<option>DIAMOND SOUTH</option>" +
        "<option>DIGGERS CAMP NORTH</option>" +
        "<option>DIGGERS CAMP SOUTH</option>" +
        "<option>DIGGERS ISLAND NORTH</option>" +
        "<option>DIGGERS ISLAND SOUTH</option>" +
        "<option>DIGGERS NORTH (AAUNUKA)</option>" +
        "<option>DIGGERS SOUTH</option>" +
        "<option>DIMMICKS 1</option>" +
        "<option>DIMMICKS 2</option>" +
        "<option>DINOSAUR COVE</option>" +
        "<option>DISASTER BAY</option>" +
        "<option>DISCOVERY BAY WEST/GLENELG RIVER WE</option>" +
        "<option>DISCOVERY BAY/NELSON</option>" +
        "<option>DIXON</option>" +
        "<option>DOCK INLET</option>" +
        "<option>DODDS CREEK</option>" +
        "<option>DOG TRAP BAY</option>" +
        "<option>DREAMTIME/KINGSCLIFF/CUDGEN</option>" +
        "<option>DROMANA</option>" +
        "<option>DUDLEY</option>" +
        "<option>DUESBURYS</option>" +
        "<option>DUNBOGAN</option>" +
        "<option>DUNCANS ROAD NORTH</option>" +
        "<option>DUNCANS ROAD SOUTH</option>" +
        "<option>DURRAS</option>" +
        "<option>DURRAS NORTH</option>" +
        "<option>Dailey River</option>" +
        "<option>Daintry Creek</option>" +
        "<option>Dallachy-Wreck Ck</option>" +
        "<option>Dallip Springs</option>" +
        "<option>Daltons Beach</option>" +
        "<option>Daly Head (north 1)</option>" +
        "<option>Daly Head (north 2)</option>" +
        "<option>Daly River (south)</option>" +
        "<option>Dalyellup Beach</option>" +
        "<option>Dalywoi Bay</option>" +
        "<option>Dalywoi Bay (1)</option>" +
        "<option>Dalywoi Bay (2)</option>" +
        "<option>Dalywoi Bay (3)</option>" +
        "<option>Dalywoi Bay (4)</option>" +
        "<option>Dalywoi Bay (N 1)</option>" +
        "<option>Dalywoi Bay (N 2)</option>" +
        "<option>Dampier (Boat Club)</option>" +
        "<option>Dampier (Hampton)</option>" +
        "<option>Dampier (Oil Tanks)</option>" +
        "<option>Dampier (Pool)</option>" +
        "<option>Dampier (Power Station)</option>" +
        "<option>Dandy Beach</option>" +
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
        "<option>Danger Point (W 1)</option>" +
        "<option>Danger Point (W 2)</option>" +
        "<option>Danger Point (W 3)</option>" +
        "<option>Daniels Bay</option>" +
        "<option>Darbada Is (1)</option>" +
        "<option>Darbada Is (2)</option>" +
        "<option>Darlington Bay</option>" +
        "<option>Darook Park</option>" +
        "<option>Dart Point</option>" +
        "<option>Dartys Corner</option>" +
        "<option>Darwin Recreation Lagoon</option>" +
        "<option>Darwin Wave Lagoon</option>" +
        "<option>Dashwood Bay</option>" +
        "<option>Dashwood Bay (east 1)</option>" +
        "<option>Dashwood Bay (east 2)</option>" +
        "<option>Dashwood Bay (east 3)</option>" +
        "<option>Datum Rock</option>" +
        "<option>Davenport</option>" +
        "<option>Davidson Pt (1)</option>" +
        "<option>Davidson Pt (2)</option>" +
        "<option>Davisons Point (1)</option>" +
        "<option>Davisons Point (2)</option>" +
        "<option>Davisons Point (3)</option>" +
        "<option>Davisons Point (4)</option>" +
        "<option>Davisons Point (5)</option>" +
        "<option>Davisons Point (6)</option>" +
        "<option>Davisons Point (7)</option>" +
        "<option>Dawson Bay (N)</option>" +
        "<option>Dawson Beach</option>" +
        "<option>Dawson Creek</option>" +
        "<option>Dawson Creek</option>" +
        "<option>Daydream North</option>" +
        "<option>De Bell Pt</option>" +
        "<option>De Courcy Head (E 1)</option>" +
        "<option>De Courcy Head (E 10)</option>" +
        "<option>De Courcy Head (E 2)</option>" +
        "<option>De Courcy Head (E 3)</option>" +
        "<option>De Courcy Head (E 4)</option>" +
        "<option>De Courcy Head (E 5)</option>" +
        "<option>De Courcy Head (E 6)</option>" +
        "<option>De Courcy Head (E 7)</option>" +
        "<option>De Courcy Head (E 8)</option>" +
        "<option>De Courcy Head (E 9)</option>" +
        "<option>De Courcy Head (W  3)</option>" +
        "<option>De Courcy Head (W 1)</option>" +
        "<option>De Courcy Head (W 2)</option>" +
        "<option>De Gillern Beach</option>" +
        "<option>Deadmans Beach</option>" +
        "<option>Deception Bay</option>" +
        "<option>Deception Bay (1)</option>" +
        "<option>Deception Bay (2)</option>" +
        "<option>Deception Inlet</option>" +
        "<option>Decres Bay</option>" +
        "<option>Decres Bay (west)</option>" +
        "<option>Dee Why Point/Headland</option>" +
        "<option>Deeban Spit</option>" +
        "<option>Deep Creek</option>" +
        "<option>Deep Creek Cove</option>" +
        "<option>Deep Gorge</option>" +
        "<option>Deepende (S 1)</option>" +
        "<option>Deepende (S 2)</option>" +
        "<option>Deepende Beach</option>" +
        "<option>Deephole Bay</option>" +
        "<option>Deepwater Pt (S 1)</option>" +
        "<option>Deepwater Pt (S 2)</option>" +
        "<option>Deepwater Pt (S 3)</option>" +
        "<option>Deepwater Pt (S 4)</option>" +
        "<option>Deepwater Pt (S 5)</option>" +
        "<option>Deepwater Pt (S 6)</option>" +
        "<option>Deepwater Pt (S 7)</option>" +
        "<option>Delcomyn (north)</option>" +
        "<option>Delcomyn (south)</option>" +
        "<option>Delwood</option>" +
        "<option>Dempster Creek (north 1)</option>" +
        "<option>Dempster Creek (north 2)</option>" +
        "<option>Dempster-Fitzgerald Inlets</option>" +
        "<option>Denbys Bay</option>" +
        "<option>Denham</option>" +
        "<option>Denham (N)</option>" +
        "<option>Denham Lookout</option>" +
        "<option>Denham Lookout (S)</option>" +
        "<option>Denial Bay</option>" +
        "<option>Denial Bay (south 1)</option>" +
        "<option>Denial Bay (west)</option>" +
        "<option>Denison Beach</option>" +
        "<option>Denison Beach (N)</option>" +
        "<option>Denison Beach (S 1)</option>" +
        "<option>Denison Beach (S)</option>" +
        "<option>Denmans Cove</option>" +
        "<option>Dennis Gulch</option>" +
        "<option>Desault Bay (1)</option>" +
        "<option>Desault Bay (2)</option>" +
        "<option>Desault Bay (3)</option>" +
        "<option>Devil Gully</option>" +
        "<option>Devils Gorge</option>" +
        "<option>Devils Inlet</option>" +
        "<option>Devils Kitchen</option>" +
        "<option>Dewars Beach</option>" +
        "<option>Dhambala</option>" +
        "<option>Dhaniya</option>" +
        "<option>Dharni</option>" +
        "<option>Dharrwar (W 2</option>" +
        "<option>Dharrwar (W 3)</option>" +
        "<option>Dharrwar (W1)</option>" +
        "<option>Dhayirri</option>" +
        "<option>Dhayirri (E)</option>" +
        "<option>Dhiprrnjura</option>" +
        "<option>Dhiprrnjura (E 1)</option>" +
        "<option>Dhiprrnjura (E 2)</option>" +
        "<option>Dhiprrnjura (E 3)</option>" +
        "<option>Dhiprrnjura (E 4)</option>" +
        "<option>Dhiprrnjura (E 5)</option>" +
        "<option>Dhiprrnjura (E 6)</option>" +
        "<option>Dholtji</option>" +
        "<option>Dholtji (E 1)</option>" +
        "<option>Dholtji (E 2)</option>" +
        "<option>Dholtji (E 3)</option>" +
        "<option>Dholtji (E 4)</option>" +
        "<option>Dholtji (E 5)</option>" +
        "<option>Dholtji (E 6)</option>" +
        "<option>Dholtji (E 7)</option>" +
        "<option>Dholtji (E 8)</option>" +
        "<option>Dholtji (W)</option>" +
        "<option>Dhudupu</option>" +
        "<option>Dhudupu (S)</option>" +
        "<option>Diamond</option>" +
        "<option>Diamond Bay</option>" +
        "<option>Dianas (N)</option>" +
        "<option>Dianas Beach</option>" +
        "<option>Dick Creek</option>" +
        "<option>Dick Creek</option>" +
        "<option>Dicky</option>" +
        "<option>Dide Bay (S)</option>" +
        "<option>Didie Bay-Narrow Neck</option>" +
        "<option>Digger's Head</option>" +
        "<option>Dillon Beach</option>" +
        "<option>Dillon Beach (W)</option>" +
        "<option>Dingo Beach</option>" +
        "<option>Dingo Beach</option>" +
        "<option>Dingo Beach</option>" +
        "<option>Dingo Ck</option>" +
        "<option>Dingo Creek</option>" +
        "<option>Diorite Point (E)</option>" +
        "<option>Disapointment Loop (W)</option>" +
        "<option>Disappointment Bay</option>" +
        "<option>Disaster Bay</option>" +
        "<option>Discovery Beach</option>" +
        "<option>Discovery Beach (N)</option>" +
        "<option>Ditji Beach</option>" +
        "<option>Ditji Beach (north)</option>" +
        "<option>Diver Inlet</option>" +
        "<option>Diver Inlet (E 1)</option>" +
        "<option>Diver Inlet (E 2)</option>" +
        "<option>Diver Inlet (S)</option>" +
        "<option>Diver Inlet (W)</option>" +
        "<option>Dixon Island (E 1)</option>" +
        "<option>Dixon Island (E 2)</option>" +
        "<option>Dixon Island (W 1)</option>" +
        "<option>Dixon Island (W 2)</option>" +
        "<option>Dixons Beach</option>" +
        "<option>Djarrakpi (1)</option>" +
        "<option>Djarrakpi (2)</option>" +
        "<option>Djarrakpi (3)</option>" +
        "<option>Djarrakpi (4)</option>" +
        "<option>Djarrakpi (5)</option>" +
        "<option>Dock Inlet-Yerrung</option>" +
        "<option>Doctors Beach</option>" +
        "<option>Doctors Beach (west)</option>" +
        "<option>Doctors Creek</option>" +
        "<option>Doctors Creek (N)</option>" +
        "<option>Doctors Rocks 1</option>" +
        "<option>Doctors Rocks 2</option>" +
        "<option>Doctors Rocks 3</option>" +
        "<option>Dodgers Point (1)</option>" +
        "<option>Dodgers Point (2)</option>" +
        "<option>Dog Fence (1)</option>" +
        "<option>Dog Fence (2)</option>" +
        "<option>Dog Fence (west)</option>" +
        "<option>Dog Fence Beach</option>" +
        "<option>Dog Point (west)</option>" +
        "<option>Doggerup</option>" +
        "<option>Dolls Point</option>" +
        "<option>Dolphin Bay</option>" +
        "<option>Dolphin Beach</option>" +
        "<option>Dolphin Cove</option>" +
        "<option>Dolphin Heads</option>" +
        "<option>Dolphin Island (NE 1)</option>" +
        "<option>Dolphin Island (NE 2)</option>" +
        "<option>Dolphin Island (NE 3)</option>" +
        "<option>Dolphin Island (NE 4)</option>" +
        "<option>Dolphin Island (NE 5)</option>" +
        "<option>Dolphin Point</option>" +
        "<option>Dolphin Point</option>" +
        "<option>Dolphin Rocks</option>" +
        "<option>Domaschenz beach</option>" +
        "<option>Don Heads (E)</option>" +
        "<option>Don Heads (W 1)</option>" +
        "<option>Don Heads (W 2)</option>" +
        "<option>Don Heads (W 3)</option>" +
        "<option>Don Heads (W 4)</option>" +
        "<option>Don Heads (W 5)</option>" +
        "<option>Don Heads (W)</option>" +
        "<option>Don River (west 1)</option>" +
        "<option>Don River (west 2)</option>" +
        "<option>Don River (west 3)</option>" +
        "<option>Don River (west 4)</option>" +
        "<option>Dongara</option>" +
        "<option>Donnelly R (E)</option>" +
        "<option>Donnelly R (W 1)</option>" +
        "<option>Donnelly R (W 2)</option>" +
        "<option>Donnelly R (W 3)</option>" +
        "<option>Donnelly R (W 4)</option>" +
        "<option>Donnelly R (W 5)</option>" +
        "<option>Donovan Pt (north)</option>" +
        "<option>Donovan Pt (south)</option>" +
        "<option>Doo Beach</option>" +
        "<option>Dooley Point (north)</option>" +
        "<option>Dooley Point (south)</option>" +
        "<option>Dora Point</option>" +
        "<option>Dora Point (N)</option>" +
        "<option>Dorcherty (north)</option>" +
        "<option>Dorcherty (west)</option>" +
        "<option>Dorman Point (E)</option>" +
        "<option>Dorman Point (W)</option>" +
        "<option>Double Bay</option>" +
        "<option>Double Bay (east)</option>" +
        "<option>Double Bay (west)</option>" +
        "<option>Double Island</option>" +
        "<option>Doublet Hill</option>" +
        "<option>Doubtful Bay (E 1)</option>" +
        "<option>Doubtful Bay (E 2)</option>" +
        "<option>Doubtful Bay (E 3)</option>" +
        "<option>Doubtful Bay (E 4)</option>" +
        "<option>Doughboy Point/Voodoo</option>" +
        "<option>Doughboy R</option>" +
        "<option>Doughboy R (N)</option>" +
        "<option>Doughboy-Cotterell R)</option>" +
        "<option>Douglas Beach</option>" +
        "<option>Douglas Hill</option>" +
        "<option>Douglas Point</option>" +
        "<option>Douglas Point 'bay'</option>" +
        "<option>Douglas Point (east)</option>" +
        "<option>Douglas Point (north)</option>" +
        "<option>Douglas Point (west 1)</option>" +
        "<option>Douglas Point (west 2)</option>" +
        "<option>Dover Beach</option>" +
        "<option>Dover Heights Reserve</option>" +
        "<option>Dowcer Bluff (1)</option>" +
        "<option>Dowcer Bluff (2)</option>" +
        "<option>Dowcer Bluff (3)</option>" +
        "<option>Dowcer Bluff (4</option>" +
        "<option>Dowcer Bluff (5)</option>" +
        "<option>Dowcer Bluff (6)</option>" +
        "<option>Downes Island</option>" +
        "<option>Downes Island (W)</option>" +
        "<option>Drake Creek</option>" +
        "<option>Drakeys Bay</option>" +
        "<option>Drakeys Bay (N)</option>" +
        "<option>Drakeys Bay (S)</option>" +
        "<option>Dreamtime</option>" +
        "<option>Drimmie Head</option>" +
        "<option>Drimmie Head (E)</option>" +
        "<option>Drimmie Head (W)</option>" +
        "<option>Dripstone</option>" +
        "<option>Dripstone Point (N)</option>" +
        "<option>Droone Creek</option>" +
        "<option>Droughty Point (W)</option>" +
        "<option>Drum Inlet</option>" +
        "<option>Drummond Cove</option>" +
        "<option>Drummond Cove (N 1)</option>" +
        "<option>Drummond Cove (N 2)</option>" +
        "<option>Drummond Cove (S)</option>" +
        "<option>Drury Point</option>" +
        "<option>Dry Creek</option>" +
        "<option>Drysdale River island</option>" +
        "<option>Du Pre Bay</option>" +
        "<option>Du Pre Bay (S)</option>" +
        "<option>Du Pre Pt (N)</option>" +
        "<option>Du Pre Pt (S 1)</option>" +
        "<option>Du Pre Pt (S 2)</option>" +
        "<option>Du Pre Pt (S 3)</option>" +
        "<option>Du Pre Pt (S 4)</option>" +
        "<option>Dubaut Creek</option>" +
        "<option>Dubaut Point (S 1)</option>" +
        "<option>Dubaut Point (S 2)</option>" +
        "<option>Dubaut Point (S 3)</option>" +
        "<option>Dubaut Point (S)</option>" +
        "<option>Duck Bay</option>" +
        "<option>Duck Bay (S)</option>" +
        "<option>Duck Ck</option>" +
        "<option>Duck Creek</option>" +
        "<option>Duck Creek</option>" +
        "<option>Duck Creek (N 1)</option>" +
        "<option>Duck Creek (N 2)</option>" +
        "<option>Duck Creek (N 3)</option>" +
        "<option>Duck Creek (S 1)</option>" +
        "<option>Duck Creek (S 2)</option>" +
        "<option>Duck Creek (S 3)</option>" +
        "<option>Duck Creek (S 4)</option>" +
        "<option>Duck Gully</option>" +
        "<option>Duck Island (E 1)</option>" +
        "<option>Duck Island (E 2)</option>" +
        "<option>Duck Island (E 3)</option>" +
        "<option>Duck Island (E 4)</option>" +
        "<option>Duck Island (W 1)</option>" +
        "<option>Duck Island (W 2)</option>" +
        "<option>Dudgeon Beach</option>" +
        "<option>Dudgeon Point</option>" +
        "<option>Dudgeon Point (west 1)</option>" +
        "<option>Dudgeon Point (west 2)</option>" +
        "<option>Dudley Point</option>" +
        "<option>Duke Head</option>" +
        "<option>Duke of Orleans Bay</option>" +
        "<option>Duke of Orleans Bay (S)</option>" +
        "<option>Dumaresq Res</option>" +
        "<option>Dumper Bay</option>" +
        "<option>Dumper Bay (N)</option>" +
        "<option>Dunalley Bay (N)</option>" +
        "<option>Dunalley Beach</option>" +
        "<option>Dunalley Beach (N)</option>" +
        "<option>Dunbabin Point (E)</option>" +
        "<option>Dunckels Beach</option>" +
        "<option>Dunckels Beach (S)</option>" +
        "<option>Dundas Pt (E)</option>" +
        "<option>Dundas Pt (W)</option>" +
        "<option>Dundee Beach (1)</option>" +
        "<option>Dundee Beach (2)</option>" +
        "<option>Dundee Beach (3)</option>" +
        "<option>Dundee Beach (4)</option>" +
        "<option>Dundee Beach (5)</option>" +
        "<option>Dundowran</option>" +
        "<option>Dunes Creek</option>" +
        "<option>Dunes Creek (N 1)</option>" +
        "<option>Dunes Creek (N 2)</option>" +
        "<option>Dunes Creek (N 3)</option>" +
        "<option>Dunes Creek (N 4)</option>" +
        "<option>Dunes Creek (N 5)</option>" +
        "<option>Dunes Creek (N 6)</option>" +
        "<option>Dungeness</option>" +
        "<option>Dunksy Beach</option>" +
        "<option>Dunn Bay</option>" +
        "<option>Dunn Point</option>" +
        "<option>Dunn Rocks</option>" +
        "<option>Dunningham Reserve Rock Platform</option>" +
        "<option>Dunsborough Beach</option>" +
        "<option>Dunster Castle (1)</option>" +
        "<option>Dunster Castle (2)</option>" +
        "<option>Dunster Castle (3)</option>" +
        "<option>Dunvert Is (E)</option>" +
        "<option>Dunvert Is (W)</option>" +
        "<option>Dunwich</option>" +
        "<option>Dutch Inn</option>" +
        "<option>Dutchmans</option>" +
        "<option>Dutton Bay (1)</option>" +
        "<option>Dutton Bay (2)</option>" +
        "<option>Dutton Park</option>" +
        "<option>Dutton River</option>" +
        "<option>Dutton River (south 1)</option>" +
        "<option>Dutton River (south 2)</option>" +
        "<option>Dutton River (south 3)</option>" +
        "<option>Duyfken Pt</option>" +
        "<option>Dwarf Point</option>" +
        "<option>Dynamite Bay</option>" +
        "</dataList>";

    var eBeaches =
        "<datalist id='mylist'>" +
        "<option>EAGLE NEST REEF NORTH</option>" +
        "<option>EAGLE NEST REEF SOUTH</option>" +
        "<option>EAGLE NEST ROCK</option>" +
        "<option>EAGLE ROCK</option>" +
        "<option>EAGLES NEST</option>" +
        "<option>EARIMIL</option>" +
        "<option>EASBY 1</option>" +
        "<option>EASBY 2</option>" +
        "<option>EASBY 3</option>" +
        "<option>EAST CAPE</option>" +
        "<option>EAST CREEK</option>" +
        "<option>EASTERN</option>" +
        "<option>EASTERN</option>" +
        "<option>EASTS</option>" +
        "<option>EDITHVALE</option>" +
        "<option>EDROM 1</option>" +
        "<option>EDROM 2</option>" +
        "<option>ELIZABETH</option>" +
        "<option>ELIZABETH COVE</option>" +
        "<option>ELOUERA</option>" +
        "<option>ELWOOD</option>" +
        "<option>EMERALD</option>" +
        "<option>EMILY MILLER</option>" +
        "<option>ENTRANCE</option>" +
        "<option>ENTRANCE POINT</option>" +
        "<option>ENTRANCE POINT SOUTH</option>" +
        "<option>ERIC THE RED</option>" +
        "<option>EUMERALLA</option>" +
        "<option>EUMERALLA</option>" +
        "<option>EVANS HEAD</option>" +
        "<option>EWINGS MARSH</option>" +
        "<option>Eager</option>" +
        "<option>Eagle Bay</option>" +
        "<option>Eagle Bay</option>" +
        "<option>Eagle Bay (N)</option>" +
        "<option>Eagle Bay (S)</option>" +
        "<option>Eagle Beach</option>" +
        "<option>Eagle Beach (S 1)</option>" +
        "<option>Eagle Beach (S 2)</option>" +
        "<option>Eagle Bluff (E)</option>" +
        "<option>Eagle Bluff (N 1)</option>" +
        "<option>Eagle Bluff (N 10)</option>" +
        "<option>Eagle Bluff (N 2)</option>" +
        "<option>Eagle Bluff (N 3)</option>" +
        "<option>Eagle Bluff (N 4)</option>" +
        "<option>Eagle Bluff (N 5)</option>" +
        "<option>Eagle Bluff (N 6)</option>" +
        "<option>Eagle Bluff (N 7)</option>" +
        "<option>Eagle Bluff (N 8)</option>" +
        "<option>Eagle Bluff (N 9)</option>" +
        "<option>Eagle Pt (E 1)</option>" +
        "<option>Eagle Pt (E 2)</option>" +
        "<option>Eagle Pt (S 1)</option>" +
        "<option>Eagle Pt (S 2)</option>" +
        "<option>Eagle Pt (S 3)</option>" +
        "<option>Eagle Pt (S 4)</option>" +
        "<option>Eagle Pt (S 5)</option>" +
        "<option>Eagle Pt (S 6)</option>" +
        "<option>Eagle Pt (S 7)</option>" +
        "<option>Eagle Pt (S 8)</option>" +
        "<option>Eagle Rock</option>" +
        "<option>Eaglehawk Neck</option>" +
        "<option>Eaglehawk Neck (W)</option>" +
        "<option>Eagles Point (S 1)</option>" +
        "<option>Eagles Point (S 2)</option>" +
        "<option>Earlando</option>" +
        "<option>East Beach</option>" +
        "<option>East Beach</option>" +
        "<option>East Beach (E)</option>" +
        "<option>East Corrimal</option>" +
        "<option>East Cove</option>" +
        "<option>East Devonport Beach</option>" +
        "<option>East Point</option>" +
        "<option>East Point</option>" +
        "<option>East Point</option>" +
        "<option>East Point</option>" +
        "<option>East Point (north 1)</option>" +
        "<option>East Point (north 2)</option>" +
        "<option>East Point (north 3)</option>" +
        "<option>East Sandy Point</option>" +
        "<option>East Sandy Point (E)</option>" +
        "<option>East Sandy Pt (N 1)</option>" +
        "<option>East Sandy Pt (N 2)</option>" +
        "<option>East Sandy Pt (N 3)</option>" +
        "<option>East Sandy Pt (S 1)</option>" +
        "<option>East Station Point</option>" +
        "<option>East Station Point (N 1)</option>" +
        "<option>East Station Point (N 2)</option>" +
        "<option>East Station Point (S 1)</option>" +
        "<option>East Station Point (S 2)</option>" +
        "<option>East Station Point (S 3)</option>" +
        "<option>East Woody Pt</option>" +
        "<option>East Woody Pt (W 1)</option>" +
        "<option>East Woody Pt (W 2)</option>" +
        "<option>East Wynyard Beach</option>" +
        "<option>East Wynyard Beach (E)</option>" +
        "<option>Eastern</option>" +
        "<option>Eastern Bluff (N)</option>" +
        "<option>Eastern Bluff (S)</option>" +
        "<option>Eastern Reserve</option>" +
        "<option>Eastmans Beach</option>" +
        "<option>Echo Hill</option>" +
        "<option>Eco Beach</option>" +
        "<option>Eddy Bay (1)</option>" +
        "<option>Eddy Bay (2)</option>" +
        "<option>Eddystone Point</option>" +
        "<option>Edgecumbe Beach</option>" +
        "<option>Edgecumbe Beach (E 1)</option>" +
        "<option>Edgecumbe Beach (E 2)</option>" +
        "<option>Edgecumbe Beach (E 3)</option>" +
        "<option>Edgecumbe Beach (E 4)</option>" +
        "<option>Edgecumbe Beach (W)</option>" +
        "<option>Edies Point (N)</option>" +
        "<option>Edies Point (S)</option>" +
        "<option>Edithburgh</option>" +
        "<option>Edithburgh (boat ramp)</option>" +
        "<option>Edithburgh (jetty)</option>" +
        "<option>Edward Bay</option>" +
        "<option>Edward Bay (east 1)</option>" +
        "<option>Edward Bay (east 2)</option>" +
        "<option>Edward R</option>" +
        "<option>Edwards Beach</option>" +
        "<option>Edwards Point</option>" +
        "<option>Edwards Point (E 1)</option>" +
        "<option>Edwards Point (E 2)</option>" +
        "<option>Edwards Point (E 3)</option>" +
        "<option>Edwards Point (E 4)</option>" +
        "<option>Edwards Point (E 5)</option>" +
        "<option>Edwards Point (E 6)</option>" +
        "<option>Edwards Point (E 7)</option>" +
        "<option>Edwards Point (S 1)</option>" +
        "<option>Edwards Point (S 2)</option>" +
        "<option>Edwards Point (S 3)</option>" +
        "<option>Eel River</option>" +
        "<option>Eely Point (north)</option>" +
        "<option>Eely Point (south)</option>" +
        "<option>Egg Beach</option>" +
        "<option>Egg Beach (N)</option>" +
        "<option>Egg Beach (S)</option>" +
        "<option>Egging Point (W)</option>" +
        "<option>Eggs and Bacon Bay</option>" +
        "<option>Eglington Hill (1)</option>" +
        "<option>Eglington Hill (2)</option>" +
        "<option>Eight Mike CK (E 1)</option>" +
        "<option>Eight Mike CK (E 2)</option>" +
        "<option>Eight Mike CK (E 3)</option>" +
        "<option>Eight Mile</option>" +
        "<option>Eight Mile Creek</option>" +
        "<option>Eighty Mile Beach</option>" +
        "<option>Eighty Mile Beach (N)</option>" +
        "<option>Eimeo</option>" +
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
        "<option>Eleanor-Crystal Cks</option>" +
        "<option>Elephant Rock (1)</option>" +
        "<option>Elephant Rock (2)</option>" +
        "<option>Elephant Rock (N)</option>" +
        "<option>Elephant Rocks Beach</option>" +
        "<option>Elephants Trunk</option>" +
        "<option>Eleven Mile Beach</option>" +
        "<option>Eli Creek</option>" +
        "<option>Eli Point (E)</option>" +
        "<option>Elim</option>" +
        "<option>Elim (E 1)</option>" +
        "<option>Elim (E 2)</option>" +
        "<option>Elim (W)</option>" +
        "<option>Elizabeth Bay (1)</option>" +
        "<option>Elizabeth Bay (2)</option>" +
        "<option>Elizabeth Bay (3)</option>" +
        "<option>Elizabeth Bay (4)</option>" +
        "<option>Elizabeth Bay (5)</option>" +
        "<option>Elizabeth Bay (6)</option>" +
        "<option>Ella Bay</option>" +
        "<option>Ella Bay (north)</option>" +
        "<option>Ellensbrook</option>" +
        "<option>Ellensbrook (N)</option>" +
        "<option>Ellensbrook (S)</option>" +
        "<option>Ellie Point</option>" +
        "<option>Elliott Bay (2)</option>" +
        "<option>Elliott Bay (4)</option>" +
        "<option>Elliott Bay (5)</option>" +
        "<option>Elliott Beach (E)</option>" +
        "<option>Elliott Beach (W)</option>" +
        "<option>Elliott Heads</option>" +
        "<option>Elliott Heads groyne</option>" +
        "<option>Elliott Heads spit</option>" +
        "<option>Elliott River</option>" +
        "<option>Ellis</option>" +
        "<option>Elsie Island (E 1)</option>" +
        "<option>Elsie Island (E 2)</option>" +
        "<option>Elsie Island (W 1)</option>" +
        "<option>Elsie Island (W 2)</option>" +
        "<option>Elsie Island (W 3)</option>" +
        "<option>Embalgun</option>" +
        "<option>Emerald Bay</option>" +
        "<option>Emeriau Pt (N)</option>" +
        "<option>Emeriau Pt (S)</option>" +
        "<option>Emita</option>" +
        "<option>Emmagen Creek</option>" +
        "<option>Emu Bay</option>" +
        "<option>Emu Bay (east 1)</option>" +
        "<option>Emu Bay (east 2)</option>" +
        "<option>Emu Bay (east 3)</option>" +
        "<option>Emu Bay (east 4)</option>" +
        "<option>Emu Bay (west 1)</option>" +
        "<option>Emu Bay (west 2)</option>" +
        "<option>Emu Bay (west 3)</option>" +
        "<option>Emu Beach</option>" +
        "<option>Emu Creek (east)</option>" +
        "<option>Emu Creek (west)</option>" +
        "<option>Emu Hill 1</option>" +
        "<option>Emu Hill 2</option>" +
        "<option>Emu Hill 3</option>" +
        "<option>Emu Park</option>" +
        "<option>Emu Point (N)</option>" +
        "<option>Encampment Cove</option>" +
        "<option>Endeavour Bay</option>" +
        "<option>Endyalgout Island (west)</option>" +
        "<option>Engine Point</option>" +
        "<option>Entrance Point</option>" +
        "<option>Entrance Pt</option>" +
        "<option>Eric Island (E 1)</option>" +
        "<option>Eric Island (E 2)</option>" +
        "<option>Eric Island (E 3)</option>" +
        "<option>Eric Island (W)</option>" +
        "<option>Errington Hole</option>" +
        "<option>Errington Hole (north)</option>" +
        "<option>Errington Hole (south)</option>" +
        "<option>Errington Hole beach</option>" +
        "<option>Escape Cliffs (north)</option>" +
        "<option>Esperance Point (N)</option>" +
        "<option>Esplanade</option>" +
        "<option>Esplanade Beach</option>" +
        "<option>Etatapuma Pt</option>" +
        "<option>Etatapuma Pt (N 1)</option>" +
        "<option>Etatapuma Pt (N 2)</option>" +
        "<option>Etatapuma Pt (S 1)</option>" +
        "<option>Etatapuma Pt (S 2)</option>" +
        "<option>Ethel (north 1)</option>" +
        "<option>Ethel (north 2)</option>" +
        "<option>Ethel Rocks</option>" +
        "<option>Ethel Rocks (east 1)</option>" +
        "<option>Ethel Rocks (east 2)</option>" +
        "<option>Ethel Rocks (east 3)</option>" +
        "<option>Ethel Wreck</option>" +
        "<option>Ettrick Beach</option>" +
        "<option>Etty Bay</option>" +
        "<option>Eucla</option>" +
        "<option>Eucla (W)</option>" +
        "<option>Euri Creek</option>" +
        "<option>Eurimbula Creek</option>" +
        "<option>Euro Point</option>" +
        "<option>Eurong</option>" +
        "<option>Evans Bay</option>" +
        "<option>Evans Cave beach</option>" +
        "<option>Evans Landing</option>" +
        "<option>Evans Pt</option>" +
        "<option>Evanson Pt</option>" +
        "<option>Evelyn Island (E 1)</option>" +
        "<option>Evelyn Island (E 2)</option>" +
        "<option>Evelyn Island (E 3)</option>" +
        "<option>Evelyn Island (E 4)</option>" +
        "<option>Evelyn Island (E 5)</option>" +
        "<option>Everett Is (E 1)</option>" +
        "<option>Everett Is (E 2)</option>" +
        "<option>Everett Is (E 3)</option>" +
        "<option>Everett Is (E 4)</option>" +
        "<option>Everett Is (N 1)</option>" +
        "<option>Everett Is (N 2)</option>" +
        "<option>Everett Is (N 3)</option>" +
        "<option>Exmouth (Town) Beach</option>" +
        "<option>Eyre Bluff (east 1)</option>" +
        "<option>Eyre Bluff (east 2)</option>" +
        "<option>Eyre Bluff (east 3)</option>" +
        "<option>Eyre Bluff (west 1)</option>" +
        "<option>Eyre Bluff (west 2)</option>" +
        "<option>Eyre Bluff (west 3)</option>" +
        "<option>Eyre Island (north 1)</option>" +
        "<option>Eyre Island (north 2)</option>" +
        "<option>Eyre Island (north 3)</option>" +
        "<option>Eyre Island (north 4)</option>" +
        "<option>Eyre Island (south)</option>" +
        "</dataList>";

    var fBeaches =
        "<datalist id='mylist'>" +
        "<option>FAIRHAVEN</option>" +
        "<option>FAIRY BOWER</option>" +
        "<option>FAIRY COVE</option>" +
        "<option>FAIRY MEADOW</option>" +
        "<option>FALLS OF HALLADALE 1</option>" +
        "<option>FALLS OF HALLADALE 2</option>" +
        "<option>FARM</option>" +
        "<option>FIDDAMANS</option>" +
        "<option>FIGTREE INLET</option>" +
        "<option>FINGAL</option>" +
        "<option>FINGAL</option>" +
        "<option>FINGAL 1</option>" +
        "<option>FINGAL 2</option>" +
        "<option>FIRST BLOW HOLE</option>" +
        "<option>FISHERIES</option>" +
        "<option>FISHERMAN COVE</option>" +
        "<option>FISHERMANS</option>" +
        "<option>FISHERMANS</option>" +
        "<option>FISHERMANS</option>" +
        "<option>FISHERMANS</option>" +
        "<option>FISHERMANS BAY</option>" +
        "<option>FITZROY RIVER</option>" +
        "<option>FIVE MILE</option>" +
        "<option>FLAGSTAFF/DURANBAH</option>" +
        "<option>FLAMINGO</option>" +
        "<option>FLAT ROCK</option>" +
        "<option>FLAXMAN</option>" +
        "<option>FLAXMAN HILL</option>" +
        "<option>FLY ROADS</option>" +
        "<option>FLYNN</option>" +
        "<option>FLYNNS</option>" +
        "<option>FORREST BLUFF EAST</option>" +
        "<option>FORREST BLUFF WEST</option>" +
        "<option>FORREST CAVES</option>" +
        "<option>FORRESTERS</option>" +
        "<option>FORSTER</option>" +
        "<option>FORSTER (SOUTH)/SCOTTS HEAD</option>" +
        "<option>FOSSIL</option>" +
        "<option>FOSTERS</option>" +
        "<option>FOWLERS</option>" +
        "<option>FRANKSTON</option>" +
        "<option>FRAZER</option>" +
        "<option>FRAZER REEF</option>" +
        "<option>FRESHWATER</option>" +
        "<option>FRESHWATER</option>" +
        "<option>FRONT</option>" +
        "<option>FRONT</option>" +
        "<option>FRONT</option>" +
        "<option>FULLERS NORTH</option>" +
        "<option>FULLERS SOUTH</option>" +
        "<option>Facing 5</option>" +
        "<option>Factory Bay (1)</option>" +
        "<option>Factory Bay (2)</option>" +
        "<option>Factory Bay (3)</option>" +
        "<option>Factory Bay (4)</option>" +
        "<option>Factory Bay (5)</option>" +
        "<option>Factory Bay (6)</option>" +
        "<option>Faint Pt (W 1)</option>" +
        "<option>Faint Pt (W 2)</option>" +
        "<option>Faint Pt (W 3)</option>" +
        "<option>Faint Pt (W 4)</option>" +
        "<option>Fair Cape (N 1)</option>" +
        "<option>Fair Cape (N 2)</option>" +
        "<option>Fair Cape (S 1)</option>" +
        "<option>Fair Cape (S 2)</option>" +
        "<option>Fair Cape (S 3)</option>" +
        "<option>Fair Cape (S 4)</option>" +
        "<option>Fair Cape (S 5)</option>" +
        "<option>Fair Cape (S 6)</option>" +
        "<option>Fair Cape (S 7)</option>" +
        "<option>Fairbanks Beach</option>" +
        "<option>Fairbridge Bluff (1)</option>" +
        "<option>Fairbridge Bluff (2)</option>" +
        "<option>Fairlight Beach</option>" +
        "<option>Fairy Bower Point</option>" +
        "<option>Fairy Pools</option>" +
        "<option>Falcon</option>" +
        "<option>Falcon  (N 1)</option>" +
        "<option>Falcon  (N 2)</option>" +
        "<option>Falcon Bay (1)</option>" +
        "<option>Falcon Bay (2)</option>" +
        "<option>Fall Pt</option>" +
        "<option>Fall Pt (W)</option>" +
        "<option>Falmouth (S 1)</option>" +
        "<option>Falmouth (S 2)</option>" +
        "<option>Falmouth (S 3)</option>" +
        "<option>False Bay (1)</option>" +
        "<option>False Bay (2)</option>" +
        "<option>False Bay (3)</option>" +
        "<option>False Bay (4)</option>" +
        "<option>False Bay (5)</option>" +
        "<option>False Cape</option>" +
        "<option>False Cape (east)</option>" +
        "<option>False Cape beach</option>" +
        "<option>False Creek</option>" +
        "<option>False Creek (north 1)</option>" +
        "<option>False Creek (north 2)</option>" +
        "<option>False Orford Ness</option>" +
        "<option>False Orford Ness (N 1)</option>" +
        "<option>False Orford Ness (N 2)</option>" +
        "<option>False Orford Ness (N 3)</option>" +
        "<option>False Orford Ness S)</option>" +
        "<option>False Pera Hd</option>" +
        "<option>False Pera Hd (S 1)</option>" +
        "<option>False Pera Hd (S 2)</option>" +
        "<option>False Pera Hd (S 3)</option>" +
        "<option>False Pt</option>" +
        "<option>False Turtle Point</option>" +
        "<option>False Turtle Point (south)</option>" +
        "<option>Fancy Bay</option>" +
        "<option>Fanny Cove</option>" +
        "<option>Fannys Bay</option>" +
        "<option>Fannys Bay (E 1)</option>" +
        "<option>Fannys Bay (E 2)</option>" +
        "<option>Far Beach</option>" +
        "<option>Far Beach (south)</option>" +
        "<option>Faraway Bay (W 1)</option>" +
        "<option>Faraway Bay (W 2)</option>" +
        "<option>Faraway Bay (W 3)</option>" +
        "<option>Faraway Bay (W 4)</option>" +
        "<option>Faraway Bay (W 5)</option>" +
        "<option>Faraway Bay (W 6)</option>" +
        "<option>Faraway Bay (W 7)</option>" +
        "<option>Faraway Bay (W 9)</option>" +
        "<option>Faraway Bay camp</option>" +
        "<option>Farm Beach</option>" +
        "<option>Farm Beach (north)</option>" +
        "<option>Farm Beach (south)</option>" +
        "<option>Farmers Point</option>" +
        "<option>Farnham Headland</option>" +
        "<option>Faults Bay</option>" +
        "<option>Faults Bay (S 1)</option>" +
        "<option>Faults Bay (S 2)</option>" +
        "<option>Fays Bay</option>" +
        "<option>Fern-Poison Ck</option>" +
        "<option>Fibe Mile</option>" +
        "<option>Fifteen Mile</option>" +
        "<option>Fifth Fence</option>" +
        "<option>Fifth Fence (N 1)</option>" +
        "<option>Fifth Fence (N 2)</option>" +
        "<option>Fifth Fence (N 3)</option>" +
        "<option>Fifth Fence (N 4)</option>" +
        "<option>Fifth Fence (N 5)</option>" +
        "<option>Fifth Fence (N 6)</option>" +
        "<option>Fifth Fence (N 7)</option>" +
        "<option>Fifth Fence (N 8)</option>" +
        "<option>Figtree Point</option>" +
        "<option>Finch Bay</option>" +
        "<option>Finger Point</option>" +
        "<option>Finlayson Point</option>" +
        "<option>Finlayson Point (west)</option>" +
        "<option>Finniss River mouth</option>" +
        "<option>Finns Beach</option>" +
        "<option>Finucare</option>" +
        "<option>First Bluff</option>" +
        "<option>First Bluff (N)</option>" +
        "<option>First Fence</option>" +
        "<option>First Fence (N 1)</option>" +
        "<option>First Fence (N 2)</option>" +
        "<option>First Red Rocky Pt</option>" +
        "<option>First Red Rocky Pt (N 1)</option>" +
        "<option>First Red Rocky Pt (N 2)</option>" +
        "<option>First Red Rocky Pt (N 3)</option>" +
        "<option>First Red Rocky Pt (N 4)</option>" +
        "<option>First Red Rocky Pt (N 5)</option>" +
        "<option>First Red Rocky Pt (S 1)</option>" +
        "<option>First Red Rocky Pt (S 2)</option>" +
        "<option>First Red Rocky Pt (S 3)</option>" +
        "<option>First Red Rocky Pt (S 4)</option>" +
        "<option>First Stony Pt</option>" +
        "<option>First Stony Pt (S 1)</option>" +
        "<option>First Stony Pt (S 2)</option>" +
        "<option>First Stony Pt (W 1)</option>" +
        "<option>First Stony Pt (W 2)</option>" +
        "<option>Fish Point</option>" +
        "<option>Fish Rock (N 1)</option>" +
        "<option>Fish Rock (N 2)</option>" +
        "<option>Fish Rock (N 3)</option>" +
        "<option>Fish Rock (N 4)</option>" +
        "<option>Fish Rock (S 1)</option>" +
        "<option>Fish Rock (S 2)</option>" +
        "<option>Fisheries</option>" +
        "<option>Fisherman Bay</option>" +
        "<option>Fisherman Bay (north)</option>" +
        "<option>Fisherman Point</option>" +
        "<option>Fishermans</option>" +
        "<option>Fishermans</option>" +
        "<option>Fishermans Beach</option>" +
        "<option>Fishermans Haul</option>" +
        "<option>Fishermans Haul (S)</option>" +
        "<option>Fishermen Bend (E 1)</option>" +
        "<option>Fishermen Bend (E 2)</option>" +
        "<option>Fishermen Bend (E 3)</option>" +
        "<option>Fishermen Bend (E 4)</option>" +
        "<option>Fishery Bay</option>" +
        "<option>Fishery Bay</option>" +
        "<option>Fishery Beach</option>" +
        "<option>Fishpond Rocks (N)</option>" +
        "<option>Fitzgerald Bay (1)</option>" +
        "<option>Fitzgerald Bay (2)</option>" +
        "<option>Fitzgerald Bay (3)</option>" +
        "<option>Fitzgerald Bay (4)</option>" +
        "<option>Fitzgerald Bay (5)</option>" +
        "<option>Fitzmaurice Bay</option>" +
        "<option>Fitzmaurice Bay (S)</option>" +
        "<option>Fitzroy Point (E)</option>" +
        "<option>Fitzroy Point (N)</option>" +
        "<option>Five Finger Reef</option>" +
        "<option>Five Mile</option>" +
        "<option>Five Mile</option>" +
        "<option>Five Mile</option>" +
        "<option>Five Mile Beach</option>" +
        "<option>Five Mile Beach</option>" +
        "<option>Five Mile Bluff (E 1)</option>" +
        "<option>Five Mile Bluff (E)</option>" +
        "<option>Five Mile Bluff (W)</option>" +
        "<option>Five Mile Rocks (north)</option>" +
        "<option>Five Mile Rocks (south)</option>" +
        "<option>Five Rocks</option>" +
        "<option>Five Rocks (south)</option>" +
        "<option>Five-Seven Mile</option>" +
        "<option>Flaggy Rock (north)</option>" +
        "<option>Flaggy Rock Creek</option>" +
        "<option>Flaggy Rock Creek</option>" +
        "<option>Flagstaff Bay</option>" +
        "<option>Flagstaff Bay (south)</option>" +
        "<option>Flagstaff Hill</option>" +
        "<option>Flagstaff Hill</option>" +
        "<option>Flagstaff Landing (east)</option>" +
        "<option>Flannel Flower</option>" +
        "<option>Flat Island</option>" +
        "<option>Flat Rock</option>" +
        "<option>Flat Rock</option>" +
        "<option>Flat Rock</option>" +
        "<option>Flat Rock</option>" +
        "<option>Flat Rock</option>" +
        "<option>Flat Rock (N 1)</option>" +
        "<option>Flat Rock (N 2)</option>" +
        "<option>Flat Rock (N 3)</option>" +
        "<option>Flat Rock (S 1)</option>" +
        "<option>Flat Rock (S 2)</option>" +
        "<option>Flat Rock (S 3)</option>" +
        "<option>Flat Rock (S)</option>" +
        "<option>Flat Rock Reef</option>" +
        "<option>Flat Rock Reef (N)</option>" +
        "<option>Flat Rocks</option>" +
        "<option>Flattery Beach</option>" +
        "<option>Flattery Harbour (1)</option>" +
        "<option>Flattery Harbour (2)</option>" +
        "<option>Flattery Harbour (3)</option>" +
        "<option>Flattery Harbour (4)</option>" +
        "<option>Flattery Harbour (5)</option>" +
        "<option>Flattery Harbour (6)</option>" +
        "<option>Flattery Harbour (7)</option>" +
        "<option>Flattery Harbour (8)</option>" +
        "<option>Fleurtys Point (N)</option>" +
        "<option>Fleurtys Point (S)</option>" +
        "<option>Flinders Bay</option>" +
        "<option>Flinders Bay (east)</option>" +
        "<option>Flinders Bay (west)</option>" +
        "<option>Flinders Beach</option>" +
        "<option>Flinders Camp</option>" +
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
        "<option>Flinders Island 9</option>" +
        "<option>Flinders Peninsula (N 1)</option>" +
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
        "<option>Flinders Peninsula (N 2)</option>" +
        "<option>Flinders Peninsula (N 3)</option>" +
        "<option>Flinders Peninsula (N 4)</option>" +
        "<option>Flinders Peninsula (N 5)</option>" +
        "<option>Flinders Peninsula (N 6)</option>" +
        "<option>Flinders Peninsula (N 7)</option>" +
        "<option>Flinders Peninsula (N 8)</option>" +
        "<option>Flinders Peninsula (N 9)</option>" +
        "<option>Flinders Pens. (S)</option>" +
        "<option>Flinders Pt (E 1)</option>" +
        "<option>Flinders Pt (E 2)</option>" +
        "<option>Flinders Pt (E 3)</option>" +
        "<option>Flinders Pt (E 4)</option>" +
        "<option>Flinders Pt (E 5)</option>" +
        "<option>Flinders Pt (W)</option>" +
        "<option>Flint & Steel</option>" +
        "<option>Flint Cliff (N 1)</option>" +
        "<option>Flint Cliff (N 2)</option>" +
        "<option>Flint Cliff (N 3)</option>" +
        "<option>Flint Cliff (N 4)</option>" +
        "<option>Flint Cliff (W)</option>" +
        "<option>Flirt Point (Woolanmarroo)</option>" +
        "<option>Flora Point</option>" +
        "<option>Floreat</option>" +
        "<option>Floreat-Scarborough</option>" +
        "<option>Florence Bay</option>" +
        "<option>Florida (Bay)</option>" +
        "<option>Florida (S)</option>" +
        "<option>Flour Cask Bay</option>" +
        "<option>Flowerpot Point (S)</option>" +
        "<option>Flowerpot Rock (S)</option>" +
        "<option>Flying Fish Point</option>" +
        "<option>Flying Foam Passage (1)</option>" +
        "<option>Flying Foam Passage (2)</option>" +
        "<option>Flying Foam Passage (3)</option>" +
        "<option>Flying Foam Passage (4)</option>" +
        "<option>Flying Foam Passage (5)</option>" +
        "<option>Flying Foam Passage (6)</option>" +
        "<option>Foam Creek</option>" +
        "<option>Foam Creek (S)</option>" +
        "<option>Foochow Beach</option>" +
        "<option>Foochow Beach (S)</option>" +
        "<option>Ford Bay</option>" +
        "<option>Fordington</option>" +
        "<option>Fords Green</option>" +
        "<option>Foreshore</option>" +
        "<option>Foreshore (E)</option>" +
        "<option>Forestier Island (W 1)</option>" +
        "<option>Forestier Island (W 2)</option>" +
        "<option>Forestier Island (W 3)</option>" +
        "<option>Forestier Island (W 4)</option>" +
        "<option>Forestier Island (W 5)</option>" +
        "<option>Forestier Island (W 6)</option>" +
        "<option>Formby Bay</option>" +
        "<option>Forrest Beach</option>" +
        "<option>Forrest-Peppermint Grove</option>" +
        "<option>Forrests Creek</option>" +
        "<option>Forsberg Point</option>" +
        "<option>Forsyth Creek (west(</option>" +
        "<option>Fort Beach</option>" +
        "<option>Fortescue Bay</option>" +
        "<option>Forty Baskets</option>" +
        "<option>Forwards Beach</option>" +
        "<option>Fossil Beach</option>" +
        "<option>Fossil Head</option>" +
        "<option>Foster Beach</option>" +
        "<option>Fotheringate (S)</option>" +
        "<option>Fotheringate Beach</option>" +
        "<option>Foul Bay</option>" +
        "<option>Foul Bay (1)</option>" +
        "<option>Foul Bay (2)</option>" +
        "<option>Foul Bay (3)</option>" +
        "<option>Foul Bay (4)</option>" +
        "<option>Foul Bay (5)</option>" +
        "<option>Foul Bay (6)</option>" +
        "<option>Foul Bay (7)</option>" +
        "<option>Foul Bay (east)</option>" +
        "<option>Foul Hill (1)</option>" +
        "<option>Foul Hill (2)</option>" +
        "<option>FoulPt</option>" +
        "<option>Four Mile</option>" +
        "<option>Four Mile</option>" +
        "<option>Four Mile Beach</option>" +
        "<option>Four Mile Beach</option>" +
        "<option>Four Mile Beach (E)</option>" +
        "<option>Four Mile Beach (W 1)</option>" +
        "<option>Four Mile Beach (W 2)</option>" +
        "<option>Four Mile Beach (south)</option>" +
        "<option>Four Mile Bluff</option>" +
        "<option>Four Mile Creek</option>" +
        "<option>Four Mile Creek (E)</option>" +
        "<option>Four Mile Creek (W)</option>" +
        "<option>Four Mile Creek Beach</option>" +
        "<option>Fourteen Mile Camp</option>" +
        "<option>Fourteen Mile Camp (N)</option>" +
        "<option>Fourteen Mile Camp (S 1)</option>" +
        "<option>Fourteen Mile Camp (S 2)</option>" +
        "<option>Fourth Fence</option>" +
        "<option>Fourth Fence (N 1)</option>" +
        "<option>Fourth Fence (N 2)</option>" +
        "<option>Fourth Fence (N 3)</option>" +
        "<option>Fourth Fence (N 4)</option>" +
        "<option>Fourth Fence (N 5)</option>" +
        "<option>Fourth Fence (N 6)</option>" +
        "<option>Fouteen Mile</option>" +
        "<option>Fowlers Bay</option>" +
        "<option>Fowlers Bay spit</option>" +
        "<option>Fowlers Camp</option>" +
        "<option>Fowlers Camp (W)</option>" +
        "<option>Fox</option>" +
        "<option>Frangapini Beach</option>" +
        "<option>Franjum Pt</option>" +
        "<option>Frankston-Carrum</option>" +
        "<option>Fraser Beach</option>" +
        "<option>Fraser Bluff (S)</option>" +
        "<option>Freemans Beach</option>" +
        "<option>Freers Beach</option>" +
        "<option>Freestone Cove</option>" +
        "<option>French Point (east)</option>" +
        "<option>French Point (west)</option>" +
        "<option>Frenchman Bluff (north)</option>" +
        "<option>Frenchman Bluff (south 1)</option>" +
        "<option>Frenchman Bluff (south 2)</option>" +
        "<option>Frenchman Bluff (south 3)</option>" +
        "<option>Frenchmans Bay</option>" +
        "<option>Frenchmans Bay (N)</option>" +
        "<option>Frenchmans Bay (S)</option>" +
        "<option>Frenchmans Bay (S)</option>" +
        "<option>Freshwater Bay (E 1)</option>" +
        "<option>Freshwater Bay (E 2)</option>" +
        "<option>Freshwater Bay (E 3)</option>" +
        "<option>Freshwater Bay (E 4)</option>" +
        "<option>Freshwater Bay (E 5)</option>" +
        "<option>Freshwater Bay (E 6)</option>" +
        "<option>Freshwater Bay (N 1)</option>" +
        "<option>Freshwater Bay (N 2)</option>" +
        "<option>Freshwater Bay (N 3)</option>" +
        "<option>Freshwater Beach</option>" +
        "<option>Freshwater Camp</option>" +
        "<option>Freshwater Camp (east)</option>" +
        "<option>Freshwater Cove</option>" +
        "<option>Freshwater Cove (N)</option>" +
        "<option>Freshwater Cove (S 1)</option>" +
        "<option>Freshwater Cove (S 2)</option>" +
        "<option>Freshwater Cove (S 3)</option>" +
        "<option>Freshwater Cove (S 4)</option>" +
        "<option>Freshwater Cove (S 5)</option>" +
        "<option>Freshwater Cove (S 6)</option>" +
        "<option>Freshwater Cove (S 7)</option>" +
        "<option>Freshwater Headland</option>" +
        "<option>Freshwater Lagoon</option>" +
        "<option>Freshwater Point</option>" +
        "<option>Freshwater Point (north 1)</option>" +
        "<option>Freshwater Point (north 2)</option>" +
        "<option>Freshwater Point (north 3)</option>" +
        "<option>Friend Point (E)</option>" +
        "<option>Friend Point (W)</option>" +
        "<option>Friendly Beach</option>" +
        "<option>Friendly Pt</option>" +
        "<option>Friendly Pt (N 1)</option>" +
        "<option>Friendly Pt (N 2)</option>" +
        "<option>Friendly Pt (N 3)</option>" +
        "<option>Friendly Pt (N 4)</option>" +
        "<option>Friendly Pt (S 1)</option>" +
        "<option>Friendly Pt (S 2)</option>" +
        "<option>Frog Rock</option>" +
        "<option>Front Beach</option>" +
        "<option>Front Beach</option>" +
        "<option>Front Beach (N 1)</option>" +
        "<option>Front Beach (N 2)</option>" +
        "<option>Fulham Point (W)</option>" +
        "<option>Funnel Bay</option>" +
        "<option>Furze Pt</option>" +
        "<option>Furze Pt (S 1)</option>" +
        "<option>Furze Pt (S 2)</option>" +
        "<option>Furze Pt (S 3)</option>" +
        "</dataList>";

    var gBeaches =
        "<datalist id='mylist'>" +
        "<option>GABO-TULLABERGO</option>" +
        "<option>GALLOWS</option>" +
        "<option>GAMES BAY</option>" +
        "<option>GANNET</option>" +
        "<option>GAP</option>" +
        "<option>GAP</option>" +
        "<option>GARDEN BAY</option>" +
        "<option>GARIE</option>" +
        "<option>GEARY RIVER</option>" +
        "<option>GEARY RIVER SOUTH</option>" +
        "<option>GEELONG GRAMMAR</option>" +
        "<option>GELLIBRAND</option>" +
        "<option>GELLIBRAND EAST 1</option>" +
        "<option>GELLIBRAND EAST 2</option>" +
        "<option>GELLIBRAND EAST 3</option>" +
        "<option>GELLIBRAND EAST 4</option>" +
        "<option>GERRINGONG HARBOUR</option>" +
        "<option>GERROA</option>" +
        "<option>GIBSON</option>" +
        "<option>GIBSON STEPS</option>" +
        "<option>GILLARDS</option>" +
        "<option>GLASSHOUSE ROCKS NORTH</option>" +
        "<option>GLASSHOUSE ROCKS SOUTH 1</option>" +
        "<option>GLASSHOUSE ROCKS SOUTH 2</option>" +
        "<option>GLENAIRE</option>" +
        "<option>GLENAIRE EAST</option>" +
        "<option>GLENROCK/BURWOOD</option>" +
        "<option>GLOMAR</option>" +
        "<option>GODFREY CREEK</option>" +
        "<option>GOLDEN</option>" +
        "<option>GOOLAWAH</option>" +
        "<option>GORDON'S BAY</option>" +
        "<option>GRAND SCENIC</option>" +
        "<option>GRANT BAY</option>" +
        "<option>GRANTS / NORTH HAVEN</option>" +
        "<option>GRASSY</option>" +
        "<option>GRASSY POINT WEST</option>" +
        "<option>GRASSY/ POINT GEORGE</option>" +
        "<option>GRAVELLY</option>" +
        "<option>GREEN ISLAND</option>" +
        "<option>GREEN POINT</option>" +
        "<option>GREENFIELDS</option>" +
        "<option>GREENHILLS</option>" +
        "<option>GREENPATCH/ILUKA</option>" +
        "<option>GREY RIVER</option>" +
        "<option>GRIFFITH POINT</option>" +
        "<option>GRIFFITHS ISLAND</option>" +
        "<option>GRINDER POINT EAST</option>" +
        "<option>GRINDER POINT WEST</option>" +
        "<option>GUERILLA BAY</option>" +
        "<option>GUERILLA BAY NORTH</option>" +
        "<option>GUNNAMATTA</option>" +
        "<option>Gables Point</option>" +
        "<option>Gadalathami/Town</option>" +
        "<option>Gaffney Point (N)</option>" +
        "<option>Gales Bay</option>" +
        "<option>Galiwinku</option>" +
        "<option>Galiwinku (S)</option>" +
        "<option>Galley Pt (E)</option>" +
        "<option>Galley Pt (W)</option>" +
        "<option>Gallipoli Beach</option>" +
        "<option>Galway Bay</option>" +
        "<option>Galway Bay (east 1)</option>" +
        "<option>Ganawa Pt (E 1)</option>" +
        "<option>Ganawa Pt (E 2)</option>" +
        "<option>Ganawa Pt (W)</option>" +
        "<option>Ganbagawirra Pt (E)</option>" +
        "<option>Ganbagawirra Pt (W)</option>" +
        "<option>Gannet Gulch</option>" +
        "<option>Gantheaume Bay</option>" +
        "<option>Gantheaume Pt</option>" +
        "<option>Gap Beach</option>" +
        "<option>Garadandanboi Bay</option>" +
        "<option>Garden Island Sands</option>" +
        "<option>Garden Lagoon Beach</option>" +
        "<option>Garden Lagoon Beach (S 1)</option>" +
        "<option>Garden Lagoon Beach (S 2)</option>" +
        "<option>Garden Point (E)</option>" +
        "<option>Garden Point (N)</option>" +
        "<option>Garden Point (S)</option>" +
        "<option>Gardiner Point (E)</option>" +
        "<option>Gardiner Point (S 1)</option>" +
        "<option>Gardiner Point (S 2)</option>" +
        "<option>Gardiner Point (S 3)</option>" +
        "<option>Gardiners Cove</option>" +
        "<option>Gardner Beach</option>" +
        "<option>Garie North Head</option>" +
        "<option>Garner</option>" +
        "<option>Garner (north)</option>" +
        "<option>Garretts Bight</option>" +
        "<option>Garrthalala</option>" +
        "<option>Garrthalala (N 1)</option>" +
        "<option>Garrthalala (N 2)</option>" +
        "<option>Garrthalala (N 3)</option>" +
        "<option>Garrthalala (S)</option>" +
        "<option>Gascoigne Bay</option>" +
        "<option>Gatakers Bay</option>" +
        "<option>Gatcombe (1)</option>" +
        "<option>Gatcombe (2)</option>" +
        "<option>Gatcombe Head</option>" +
        "<option>Gawa</option>" +
        "<option>Gawa (W)</option>" +
        "<option>Gellibrand Point (W)</option>" +
        "<option>Genesta Bay</option>" +
        "<option>Gentle Annie Creek</option>" +
        "<option>Geoffrey Bay</option>" +
        "<option>Geoffroy Bay (N)</option>" +
        "<option>Geoffroy Bay (S)</option>" +
        "<option>Geordie Bay (W)</option>" +
        "<option>Geordier Bay</option>" +
        "<option>Geordier Bay (E 1)</option>" +
        "<option>Geordier Bay (E 2)</option>" +
        "<option>Geordier Bay (E 3)</option>" +
        "<option>George Bay</option>" +
        "<option>George Point (N)</option>" +
        "<option>George Point (S 1)</option>" +
        "<option>George Point (S 2)</option>" +
        "<option>George Point (S 3)</option>" +
        "<option>George Point (east)</option>" +
        "<option>Geraldton Back Beach</option>" +
        "<option>German Point</option>" +
        "<option>German Point (north)</option>" +
        "<option>German point (south)</option>" +
        "<option>Gerrin Point</option>" +
        "<option>Giangurra</option>" +
        "<option>Gibson Point (S 1)</option>" +
        "<option>Gibson Point (S 10)</option>" +
        "<option>Gibson Point (S 11)</option>" +
        "<option>Gibson Point (S 12)</option>" +
        "<option>Gibson Point (S 13)</option>" +
        "<option>Gibson Point (S 14)</option>" +
        "<option>Gibson Point (S 15)</option>" +
        "<option>Gibson Point (S 16)</option>" +
        "<option>Gibson Point (S 17)</option>" +
        "<option>Gibson Point (S 18)</option>" +
        "<option>Gibson Point (S 19)</option>" +
        "<option>Gibson Point (S 2)</option>" +
        "<option>Gibson Point (S 20)</option>" +
        "<option>Gibson Point (S 21)</option>" +
        "<option>Gibson Point (S 22)</option>" +
        "<option>Gibson Point (S 23)</option>" +
        "<option>Gibson Point (S 3)</option>" +
        "<option>Gibson Point (S 4)</option>" +
        "<option>Gibson Point (S 5)</option>" +
        "<option>Gibson Point (S 6)</option>" +
        "<option>Gibson Point (S 7)</option>" +
        "<option>Gibson Point (S 8)</option>" +
        "<option>Gibson Point (S 9)</option>" +
        "<option>Gibson Pt (E 1)</option>" +
        "<option>Gibson Pt (E 2)</option>" +
        "<option>Gibson Pt (E 3)</option>" +
        "<option>Gibson Pt (E 4)</option>" +
        "<option>Gibson Pt (E 5)</option>" +
        "<option>Gibson Pt (E 6)</option>" +
        "<option>Gibson Pt (E 7)</option>" +
        "<option>Gibsons Beach</option>" +
        "<option>Gikal</option>" +
        "<option>Giles Point (1)</option>" +
        "<option>Giles Point (2)</option>" +
        "<option>Gilhams Beach</option>" +
        "<option>Gilhams Beach (S)</option>" +
        "<option>Gilies Point</option>" +
        "<option>Gilies Point (W 1)</option>" +
        "<option>Gilies Point (W 2)</option>" +
        "<option>Giraud Point</option>" +
        "<option>Giraud Point (S 1)</option>" +
        "<option>Giraud Point (S 2)</option>" +
        "<option>Giraud Point (S 3)</option>" +
        "<option>Giraud Point (S 4)</option>" +
        "<option>Giraud Point (S 5)</option>" +
        "<option>Giraud Point (S 6)</option>" +
        "<option>Giraud Point (S 7)</option>" +
        "<option>Gitan Pt</option>" +
        "<option>Gitan Pt (E 1)</option>" +
        "<option>Gitan Pt (E 2)</option>" +
        "<option>Gitan Pt (E 3)</option>" +
        "<option>Gitan Pt (W)</option>" +
        "<option>Gladstone (S)</option>" +
        "<option>Gladstone Jetty</option>" +
        "<option>Gleesons Landing</option>" +
        "<option>Glendower Point (south 1)</option>" +
        "<option>Glendower Point (south 2)</option>" +
        "<option>Glendower Point (south 3)</option>" +
        "<option>Glendower Point (south 4)</option>" +
        "<option>Glendower Point (south 5)</option>" +
        "<option>Glendower Point (south 6)</option>" +
        "<option>Glendower Point (west 1)</option>" +
        "<option>Glendower Point (west 2)</option>" +
        "<option>Glenelg</option>" +
        "<option>Glenelg entrance</option>" +
        "<option>Glenvar Beach</option>" +
        "<option>Gletwood Beach</option>" +
        "<option>Gnarabup (S)</option>" +
        "<option>Gnarabup Beach</option>" +
        "<option>Gnaraloo</option>" +
        "<option>Gnaraloo (N 1)</option>" +
        "<option>Gnaraloo (N 2)</option>" +
        "<option>Gnaraloo (N 3)</option>" +
        "<option>Gnaraloo Bay</option>" +
        "<option>Gningarg Point (E 1)</option>" +
        "<option>Gningarg Point (E 2)</option>" +
        "<option>Gningarg Point (E 3)</option>" +
        "<option>Gningarg Point (E 4)</option>" +
        "<option>Gningarg Point (E 5)</option>" +
        "<option>Gningarg Point (E 6)</option>" +
        "<option>Gningarg Point (E 7)</option>" +
        "<option>Gningarg Point (W 1)</option>" +
        "<option>Gningarg Point (W 2)</option>" +
        "<option>Gningarg Point (W 3)</option>" +
        "<option>Gningarg Point (W 4)</option>" +
        "<option>Gningarg Point (W 5)</option>" +
        "<option>Gningarg Point (W 6)</option>" +
        "<option>Gningarg Point (W 7)</option>" +
        "<option>Gnoocardup Beach (1)</option>" +
        "<option>Gnoocardup Beach (2)</option>" +
        "<option>Gnoorea (E)</option>" +
        "<option>Gnoorea (W)</option>" +
        "<option>Gnoorea (pipeline)</option>" +
        "<option>Gnungah Well</option>" +
        "<option>Gnungah Well (N)</option>" +
        "<option>Goalen Head</option>" +
        "<option>Goat Bluff</option>" +
        "<option>Goat Hill Creek (1)</option>" +
        "<option>Goat Hill Creek (2)</option>" +
        "<option>Goat Hull Creek</option>" +
        "<option>Goat Island</option>" +
        "<option>Godfrey Beach</option>" +
        "<option>Godwin Beach</option>" +
        "<option>Goftons  Beach</option>" +
        "<option>Golden Bay</option>" +
        "<option>Golden Gate Beach</option>" +
        "<option>Golden Gate Headland/Iron Reef</option>" +
        "<option>Goldings Reef</option>" +
        "<option>Goldsmith Beach</option>" +
        "<option>Golf Course</option>" +
        "<option>Golf Course Reef</option>" +
        "<option>Golf course (1)</option>" +
        "<option>Golf course (2)</option>" +
        "<option>Golf course (3)</option>" +
        "<option>Golf course (4)</option>" +
        "<option>Golf course (5)</option>" +
        "<option>Gonbung Pt (E)</option>" +
        "<option>Gonbung Pt (W)</option>" +
        "<option>Gonzales</option>" +
        "<option>Goodameer Pt (E 1)</option>" +
        "<option>Goodameer Pt (E 2)</option>" +
        "<option>Goodameer Pt (W 1)</option>" +
        "<option>Goodameer Pt (W 2)</option>" +
        "<option>Goodameer Pt (W 3)</option>" +
        "<option>Goodameer Pt (W 4)</option>" +
        "<option>Goode Beach</option>" +
        "<option>Goodenough Bay</option>" +
        "<option>Goodstone Point</option>" +
        "<option>Goodstone Point (W)</option>" +
        "<option>Googarra Beach</option>" +
        "<option>Goolwa</option>" +
        "<option>Goolwa-Middleton</option>" +
        "<option>Goomadeer River (N)</option>" +
        "<option>Goomadeer River (S 1)</option>" +
        "<option>Goomadeer River (S 2)</option>" +
        "<option>Goomadeer River (S 3)</option>" +
        "<option>Goose Channel (S 1)</option>" +
        "<option>Goose Channel (S 2)</option>" +
        "<option>Goose Channel (S 3)</option>" +
        "<option>Goose Ck</option>" +
        "<option>Goose Hill</option>" +
        "<option>Gooseneck Hill</option>" +
        "<option>Gorabi cliffs</option>" +
        "<option>Gorabi cliffs (S)</option>" +
        "<option>Gore Pt (W 1)</option>" +
        "<option>Gore Pt (W 2)</option>" +
        "<option>Gore Pt (W 3)</option>" +
        "<option>Gorringes Beach</option>" +
        "<option>Goulet Bluff (N 1)</option>" +
        "<option>Goulet Bluff (N 2)</option>" +
        "<option>Goulet Bluff (N 3)</option>" +
        "<option>Goulet Bluff (S 1)</option>" +
        "<option>Goulet Bluff (S 2)</option>" +
        "<option>Gourdon Bay</option>" +
        "<option>Gove Harbour (1)</option>" +
        "<option>Gove Harbour (2)</option>" +
        "<option>Grandfathers Beach</option>" +
        "<option>Grange</option>" +
        "<option>Granite Bay</option>" +
        "<option>Granite Beach</option>" +
        "<option>Granite Point</option>" +
        "<option>Granite Point (E)</option>" +
        "<option>Granite Rock</option>" +
        "<option>Granny Pool</option>" +
        "<option>Grant Reserve Rock Platform</option>" +
        "<option>Granville Harbour</option>" +
        "<option>Grasstree</option>" +
        "<option>Grassy Bay (1)</option>" +
        "<option>Grassy Bay (2)</option>" +
        "<option>Grassy Bay (3)</option>" +
        "<option>Grassy Harbour</option>" +
        "<option>Grassy Harbour (W)</option>" +
        "<option>Grassy tailings</option>" +
        "<option>Grays Bay</option>" +
        "<option>Grays Bay (W 1)</option>" +
        "<option>Grays Bay (W 2)</option>" +
        "<option>Grays Bay (W 3)</option>" +
        "<option>Grays Bay (W 4)</option>" +
        "<option>Grays Bay (W 5)</option>" +
        "<option>Great Bay (1)</option>" +
        "<option>Great Bay (2)</option>" +
        "<option>Great Bay (3)</option>" +
        "<option>Great Musselroe Bay</option>" +
        "<option>Great Sandy Point</option>" +
        "<option>Green Bay</option>" +
        "<option>Green Head (1)</option>" +
        "<option>Green Head (2)</option>" +
        "<option>Green Head (3)</option>" +
        "<option>Green Head (4)</option>" +
        "<option>Green Head (5)</option>" +
        "<option>Green Head (W 1)</option>" +
        "<option>Green Head (W 2)</option>" +
        "<option>Green Head (W 3)</option>" +
        "<option>Green Hill (1)</option>" +
        "<option>Green Hill (2)</option>" +
        "<option>Green Hill (3)</option>" +
        "<option>Green Hills</option>" +
        "<option>Green Island</option>" +
        "<option>Green Island (N 1)</option>" +
        "<option>Green Island (N 2)</option>" +
        "<option>Green Island (S 1)</option>" +
        "<option>Green Island (S 2)</option>" +
        "<option>Green Island (S 3)</option>" +
        "<option>Green Island Beach (Green Island)</option>" +
        "<option>Green Point (north)</option>" +
        "<option>Green Point (south)</option>" +
        "<option>Green Pool</option>" +
        "<option>Greencape</option>" +
        "<option>Greene Point (N)</option>" +
        "<option>Greene Point (S 1)</option>" +
        "<option>Greene Point (S 2)</option>" +
        "<option>Greene Point (S 3)</option>" +
        "<option>Greenglade Point</option>" +
        "<option>Greenhills - North Cronulla</option>" +
        "<option>Greenly Beach</option>" +
        "<option>Greenly Beach (north)</option>" +
        "<option>Greenmount</option>" +
        "<option>Greenough River mouth (N)</option>" +
        "<option>Greenough River mouth (S)</option>" +
        "<option>Greens Beach</option>" +
        "<option>Gregory</option>" +
        "<option>Gregory (N)</option>" +
        "<option>Greig Lookout</option>" +
        "<option>Grey</option>" +
        "<option>Grey (N 1)</option>" +
        "<option>Grey (N 2)</option>" +
        "<option>Grey (N)</option>" +
        "<option>Grey (S 1)</option>" +
        "<option>Grey (S 2)</option>" +
        "<option>Grey Point (S)</option>" +
        "<option>Grey point</option>" +
        "<option>Greys Bay</option>" +
        "<option>Greys Beach</option>" +
        "<option>Griffiths Point</option>" +
        "<option>Grimes Creek</option>" +
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
        "<option>Grindall Pt</option>" +
        "<option>Grindall Pt (N 1)</option>" +
        "<option>Grindall Pt (N 2)</option>" +
        "<option>Grindall Pt (N 4)</option>" +
        "<option>Grindall Pt (N3)</option>" +
        "<option>Grindall Pt (W)</option>" +
        "<option>Grindstone Bay (N)</option>" +
        "<option>Grindstone Beach</option>" +
        "<option>Groper Bay</option>" +
        "<option>Groper Bay</option>" +
        "<option>Groper Bay</option>" +
        "<option>Groper Bay (north)</option>" +
        "<option>Groper Bluff (N 1)</option>" +
        "<option>Groper Bluff (N 2)</option>" +
        "<option>Groper Bluff (N 3)</option>" +
        "<option>Groper Bluff (N 4)</option>" +
        "<option>Groper Bluff (N 5)</option>" +
        "<option>Groper Bluff (W 1)</option>" +
        "<option>Groper Bluff (W 2)</option>" +
        "<option>Groper Bluff (W 3)</option>" +
        "<option>Groper Bluff (W 4)</option>" +
        "<option>Groper Coast</option>" +
        "<option>Grunters Beach</option>" +
        "<option>Guailung Point</option>" +
        "<option>Guailung Point (E 1)</option>" +
        "<option>Guailung Point (E 2)</option>" +
        "<option>Guailung Point (E 3)</option>" +
        "<option>Guailung Point (W 1)</option>" +
        "<option>Guailung Point (W 2)</option>" +
        "<option>Guailung Point (W 3)</option>" +
        "<option>Guailung Point (W 4)</option>" +
        "<option>Guailung Point (W 5)</option>" +
        "<option>Guards Lagoon</option>" +
        "<option>Guichenault Point</option>" +
        "<option>Guilderton</option>" +
        "<option>Guilderton (N 1)</option>" +
        "<option>Guilderton (N 2)</option>" +
        "<option>Guion Point (1)</option>" +
        "<option>Guion Point (2)</option>" +
        "<option>Guion Point (E)</option>" +
        "<option>Gulches Reef</option>" +
        "<option>Gull Rock</option>" +
        "<option>Gull Rock (S 1)</option>" +
        "<option>Gull Rock (S 2)</option>" +
        "<option>Gum Getters Inlet</option>" +
        "<option>Gum Getters Point</option>" +
        "<option>Gum Tree Bay</option>" +
        "<option>Gum Tree Bay (N)</option>" +
        "<option>Gum Tree Bay (S)</option>" +
        "<option>Gumboot Bay (E 1)</option>" +
        "<option>Gumboot Bay (E 10)</option>" +
        "<option>Gumboot Bay (E 11)</option>" +
        "<option>Gumboot Bay (E 12)</option>" +
        "<option>Gumboot Bay (E 13)</option>" +
        "<option>Gumboot Bay (E 14)</option>" +
        "<option>Gumboot Bay (E 2)</option>" +
        "<option>Gumboot Bay (E 3)</option>" +
        "<option>Gumboot Bay (E 4)</option>" +
        "<option>Gumboot Bay (E 5)</option>" +
        "<option>Gumboot Bay (E 6)</option>" +
        "<option>Gumboot Bay (E 7)</option>" +
        "<option>Gumboot Bay (E 8)</option>" +
        "<option>Gumboot Bay (E 9)</option>" +
        "<option>Gumboot Bay (S 1)</option>" +
        "<option>Gumboot Bay (S 2)</option>" +
        "<option>Gumboot Bay (S 3)</option>" +
        "<option>Gumboot Bay (W 1)</option>" +
        "<option>Gumboot Bay (W 2)</option>" +
        "<option>Gumeradji Pt (S 1)</option>" +
        "<option>Gumeradji Pt (S 2)</option>" +
        "<option>Gumeradji Pt (S 3)</option>" +
        "<option>Gumeradji Pt (S 4)</option>" +
        "<option>Gumeradji Pt (W)</option>" +
        "<option>Gumugumuk</option>" +
        "<option>Gun Ck (W 1)</option>" +
        "<option>Gun Ck (W 2)</option>" +
        "<option>Gun Ck (e)</option>" +
        "<option>Gunnamatta Park</option>" +
        "<option>Gunnamatta pool</option>" +
        "<option>Gunter Bay</option>" +
        "<option>Gunyah Beach</option>" +
        "<option>Gunyah Beach</option>" +
        "<option>Gupanga</option>" +
        "<option>Gurkawuy</option>" +
        "<option>Gurkawuy (W)</option>" +
        "<option>Gurundu (1)</option>" +
        "<option>Gurundu (2)</option>" +
        "<option>Gurundu (3)</option>" +
        "<option>Gururu Creek (N)</option>" +
        "<option>Gururu Creek (S 1)</option>" +
        "<option>Gururu Creek (S)</option>" +
        "<option>Guy Point</option>" +
        "<option>Guy Point (S 1)</option>" +
        "<option>Guy Point (S 2)</option>" +
        "<option>Guyton Point (E)</option>" +
        "<option>Guyton Point (W)</option>" +
        "<option>Guyuwiri Pt</option>" +
        "<option>Guyuwiri Pt (N 1)</option>" +
        "<option>Guyuwiri Pt (N 2)</option>" +
        "<option>Guyuwiri Pt (W 1)</option>" +
        "<option>Guyuwiri Pt (W 2)</option>" +
        "<option>Guyuwiri Pt (W 3)</option>" +
        "<option>Guyuwiri Pt (W 4)</option>" +
        "<option>Gwapilina Pt</option>" +
        "<option>Gwapilina Pt (N)</option>" +
        "<option>Gym Beach</option>" +
        "<option>Gypsy Bay</option>" +
        "</dataList>";

    var hBeaches =
        "<datalist id='mylist'>" +
        "<option>HALF MOON BAY</option>" +
        "<option>HALF MOON BAY</option>" +
        "<option>HALF MOON BAY</option>" +
        "<option>HAMPTON</option>" +
        "<option>HAMS</option>" +
        "<option>HANDKERCHIEF</option>" +
        "<option>HARE</option>" +
        "<option>HARRINGTON</option>" +
        "<option>HASTINGS POINT INLET</option>" +
        "<option>HAT HEAD</option>" +
        "<option>HATCHCOVER</option>" +
        "<option>HAWKER</option>" +
        "<option>HAYWARD POINT</option>" +
        "<option>HAYWARDS</option>" +
        "<option>HEARNS LAKE</option>" +
        "<option>HEN AND CHICKEN</option>" +
        "<option>HENTY PARK</option>" +
        "<option>HERMSLEY</option>" +
        "<option>HILLS NORTH</option>" +
        "<option>HITCHCOCK GULLY</option>" +
        "<option>HOLLOWAY</option>" +
        "<option>HOME COVE</option>" +
        "<option>HONEYMOON BAY</option>" +
        "<option>HONEYSUCKLE</option>" +
        "<option>HOOD BIGHT</option>" +
        "<option>HORSESHOE BAY</option>" +
        "<option>HORSESHOE BAY</option>" +
        "<option>HUMMOCKS</option>" +
        "<option>HUNGRY HEAD</option>" +
        "<option>HUNGRY HEAD NORTH (SOUTH)</option>" +
        "<option>HUNGRY HEAD SOUTH</option>" +
        "<option>HUNTER POINT SOUTH</option>" +
        "<option>HUSKISSON</option>" +
        "<option>HUTCHINSON</option>" +
        "<option>HYAMS</option>" +
        "<option>HYAMS POINT</option>" +
        "<option>HYLAND</option>" +
        "<option>Haddon Hd</option>" +
        "<option>Haddon Hd (N 1)</option>" +
        "<option>Haddon Hd (N 2)</option>" +
        "<option>Haddon Hd (N 3)</option>" +
        "<option>Haddon Hd (N 4)</option>" +
        "<option>Haddon Hd (N 5)</option>" +
        "<option>Haddon Hd (N 6)</option>" +
        "<option>Haddon Hd (S 1)</option>" +
        "<option>Haddon Hd (S 2)</option>" +
        "<option>Haddon Hd (S 3)</option>" +
        "<option>Haddon Hd (S 4)</option>" +
        "<option>Haddon Hd (W 1)</option>" +
        "<option>Haddon Hd (W 2)</option>" +
        "<option>Hale St</option>" +
        "<option>Hales Is</option>" +
        "<option>Hales Is (S 1)</option>" +
        "<option>Hales Is (S 2)</option>" +
        "<option>Hales Is (S 3)</option>" +
        "<option>Half Mile Rock</option>" +
        "<option>Half Mile Rock (S 1)</option>" +
        "<option>Half Mile Rock (S 2)</option>" +
        "<option>Half Tide</option>" +
        "<option>Half Tide Pt</option>" +
        "<option>Halfmoon Bay</option>" +
        "<option>Halfmoon Bay</option>" +
        "<option>Halfmoon Bay (N)</option>" +
        "<option>Halfway Bay</option>" +
        "<option>Hall Creek</option>" +
        "<option>Hall Point</option>" +
        "<option>Hall Point (E 1)</option>" +
        "<option>Hall Point (E 2)</option>" +
        "<option>Hall Point (E 3)</option>" +
        "<option>Hall Point (E)</option>" +
        "<option>Hall Point (S 1)</option>" +
        "<option>Hall Point (S 2)</option>" +
        "<option>Hall Point (S 3)</option>" +
        "<option>Hall Point (S 4)</option>" +
        "<option>Hall Point (S 5)</option>" +
        "<option>Hall Point (W)</option>" +
        "<option>Hallett Cove</option>" +
        "<option>Halliday Bay</option>" +
        "<option>Halls Head Beach</option>" +
        "<option>Hamelin Pool (W 1)</option>" +
        "<option>Hamelin Pool (W 2)</option>" +
        "<option>Hamelin Pool (W 3)</option>" +
        "<option>Hamelin Pool (W 4)</option>" +
        "<option>Hammer Head (E 1)</option>" +
        "<option>Hammer Head (E 2)</option>" +
        "<option>Hammer Head (W 1)</option>" +
        "<option>Hammer Head (W 2)</option>" +
        "<option>Hammer Head (W 3)</option>" +
        "<option>Hammer Head (W 4)</option>" +
        "<option>Hammer Head (W 5)</option>" +
        "<option>Hammersley Inlet</option>" +
        "<option>Hammersley Inlet (W)</option>" +
        "<option>Hammersley Pool</option>" +
        "<option>Hanging Rock</option>" +
        "<option>Hangover Bay (1)</option>" +
        "<option>Hangover Bay (2)</option>" +
        "<option>Hangover Bay 31)</option>" +
        "<option>Hann Ck (E)</option>" +
        "<option>Hann Ck (W)</option>" +
        "<option>Hannant Inlet</option>" +
        "<option>Hannant Point (E)</option>" +
        "<option>Hanover Bay (E 1)</option>" +
        "<option>Hanover Bay (E 2)</option>" +
        "<option>Hanover Bay (E 3)</option>" +
        "<option>Hanover Bay (W 1)</option>" +
        "<option>Hanover Bay (W 2)</option>" +
        "<option>Hanover Bay (W 3)</option>" +
        "<option>Hanover Bay (W 4)</option>" +
        "<option>Hanover Bay (W 5)</option>" +
        "<option>Hansen Bay</option>" +
        "<option>Hanson Bay</option>" +
        "<option>Hanson Bay (east 1)</option>" +
        "<option>Hanson Bay (east 2)</option>" +
        "<option>Hanson Bay (east 3)</option>" +
        "<option>Hanson Bay (west 1)</option>" +
        "<option>Hanson Bay (west 2)</option>" +
        "<option>Hanson Bay (west 3)</option>" +
        "<option>Happy Bay</option>" +
        "<option>Happy Valley</option>" +
        "<option>Harbour</option>" +
        "<option>Harbour Beach</option>" +
        "<option>Harbour Mound</option>" +
        "<option>Harbour jetty</option>" +
        "<option>Hardewicke Bay</option>" +
        "<option>Hardwicke Bay (S 1)</option>" +
        "<option>Hardwicke Bay (S 2)</option>" +
        "<option>Hardy Point (E 1)</option>" +
        "<option>Hardy Point (E 2)</option>" +
        "<option>Hardy Point (E 3)</option>" +
        "<option>Hardy Point (E 4)</option>" +
        "<option>Hardy Point (W 1)</option>" +
        "<option>Hardy Point (W 2)</option>" +
        "<option>Harry Point</option>" +
        "<option>Hart River</option>" +
        "<option>Hartwell Cove (1)</option>" +
        "<option>Hartwell Cove (2)</option>" +
        "<option>Harveys Beach</option>" +
        "<option>Harveys Beach (E)</option>" +
        "<option>Harveys Beach (W 1)</option>" +
        "<option>Harveys Beach (W 2)</option>" +
        "<option>Harveys Return</option>" +
        "<option>Haslam</option>" +
        "<option>Haslam (north 1)</option>" +
        "<option>Haslam (north 2)</option>" +
        "<option>Haslam (north 3)</option>" +
        "<option>Haslam (north 4)</option>" +
        "<option>Haslam (north 5)</option>" +
        "<option>Hassell Beach</option>" +
        "<option>Hat Pt (E 1)</option>" +
        "<option>Hat Pt (E 2)</option>" +
        "<option>Hat Pt (E 3)</option>" +
        "<option>Hat Pt (E 4)</option>" +
        "<option>Hat Pt (E 5)</option>" +
        "<option>Hat Pt (E 6)</option>" +
        "<option>Hat Pt (E 7)</option>" +
        "<option>Hat Pt (E 8)</option>" +
        "<option>Hat Pt (E 9)</option>" +
        "<option>Hat Pt (S 1)</option>" +
        "<option>Hat Pt (S 10)</option>" +
        "<option>Hat Pt (S 11)</option>" +
        "<option>Hat Pt (S 12)</option>" +
        "<option>Hat Pt (S 13)</option>" +
        "<option>Hat Pt (S 2)</option>" +
        "<option>Hat Pt (S 3)</option>" +
        "<option>Hat Pt (S 4)</option>" +
        "<option>Hat Pt (S 5)</option>" +
        "<option>Hat Pt (S 6)</option>" +
        "<option>Hat Pt (S 7)</option>" +
        "<option>Hat Pt (S 8)</option>" +
        "<option>Hat Pt (S 9)</option>" +
        "<option>Hatchman Pt</option>" +
        "<option>Haulage Bay (N)</option>" +
        "<option>Haulage Bay (S)</option>" +
        "<option>Hawkesbury Pt</option>" +
        "<option>Hawkesbury Pt (E)</option>" +
        "<option>Hawks Nest</option>" +
        "<option>Hawks Nest (east)</option>" +
        "<option>Hawks Nest (west)</option>" +
        "<option>Hawley Beach</option>" +
        "<option>Hawley Beach (N)</option>" +
        "<option>Hay Point</option>" +
        "<option>Haycock Point</option>" +
        "<option>Hayden Point</option>" +
        "<option>Hayes Reef Cliff</option>" +
        "<option>Hazards (N)</option>" +
        "<option>Hazards Bay</option>" +
        "<option>Hazards Bay (S)</option>" +
        "<option>Hazards Beach</option>" +
        "<option>Hearder Hill</option>" +
        "<option>Hearson Cove</option>" +
        "<option>Hearson Cove</option>" +
        "<option>Heath Island</option>" +
        "<option>Heath Point (1)</option>" +
        "<option>Heath Point (2)</option>" +
        "<option>Heath Point (3)</option>" +
        "<option>Heather Bay</option>" +
        "<option>Hecla Cove (north)</option>" +
        "<option>Hecla Cove (south)</option>" +
        "<option>Hector Beach</option>" +
        "<option>Hector Beach (east)</option>" +
        "<option>Hector Point</option>" +
        "<option>Hegartys Bay</option>" +
        "<option>Heirisson Prong (E 1)</option>" +
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
        "<option>Heirisson Prong (E 2)</option>" +
        "<option>Heirisson Prong (E 20)</option>" +
        "<option>Heirisson Prong (E 21)</option>" +
        "<option>Heirisson Prong (E 22)</option>" +
        "<option>Heirisson Prong (E 23)</option>" +
        "<option>Heirisson Prong (E 3)</option>" +
        "<option>Heirisson Prong (E 4)</option>" +
        "<option>Heirisson Prong (E 5)</option>" +
        "<option>Heirisson Prong (E 6)</option>" +
        "<option>Heirisson Prong (E 7)</option>" +
        "<option>Heirisson Prong (E 8)</option>" +
        "<option>Heirisson Prong (E 9)</option>" +
        "<option>Hellfire Bay</option>" +
        "<option>Hellfire Bay (E)</option>" +
        "<option>Hellyer Beach</option>" +
        "<option>Hencamp Creek</option>" +
        "<option>Henley</option>" +
        "<option>Henley-Largs Bay</option>" +
        "<option>Henrietta Rocks (1)</option>" +
        "<option>Henrietta Rocks (2)</option>" +
        "<option>Henry Head</option>" +
        "<option>Henty Well</option>" +
        "<option>Hepburn Point (E)</option>" +
        "<option>Hepburn Point (N)</option>" +
        "<option>Herald Bight</option>" +
        "<option>Herald Bight (N)</option>" +
        "<option>Herald Bluff</option>" +
        "<option>Herald Bluff (S 1)</option>" +
        "<option>Herald Bluff (S 2)</option>" +
        "<option>Herald Bluff (S 3)</option>" +
        "<option>Herald Pt (E)</option>" +
        "<option>Herald Pt (W 1)</option>" +
        "<option>Herald Pt (W 2)</option>" +
        "<option>Herbert Point (north)</option>" +
        "<option>Hermit Bay</option>" +
        "<option>Heron Point (N)</option>" +
        "<option>Heron Point (S)</option>" +
        "<option>Herring Rock</option>" +
        "<option>Herring Rock (E 1)</option>" +
        "<option>Herring Rock (E 2)</option>" +
        "<option>Herring Rock (E 3)</option>" +
        "<option>Herring Rock (W 1)</option>" +
        "<option>Hersey Ck</option>" +
        "<option>Hersey-King cks</option>" +
        "<option>Heybridge</option>" +
        "<option>Hibbs Bay (N 1)</option>" +
        "<option>Hibbs Bay (N 2)</option>" +
        "<option>Hibbs Bay (N 3)</option>" +
        "<option>Hibbs Bay (S)</option>" +
        "<option>Hibbs Lagoon (1)</option>" +
        "<option>Hibbs Lagoon (2)</option>" +
        "<option>Hidden Bay</option>" +
        "<option>Hidden Is (N 1)</option>" +
        "<option>Hidden Is (N 3)</option>" +
        "<option>Hidden Is (W 1)</option>" +
        "<option>Hidden Is (W 2)</option>" +
        "<option>High Bluff (E 1)</option>" +
        "<option>High Bluff (E 2)</option>" +
        "<option>High Bluff (E 3)</option>" +
        "<option>High Bluff (E 4)</option>" +
        "<option>High Bluff (N)</option>" +
        "<option>High Bluff (S 1)</option>" +
        "<option>High Bluff (S 1)</option>" +
        "<option>High Bluff (S 2)</option>" +
        "<option>High Bluff (S 2)</option>" +
        "<option>High Bluff (S 3)</option>" +
        "<option>High Bluff (S 3)</option>" +
        "<option>High Bluff (S 4)</option>" +
        "<option>High Bluff (S 5)</option>" +
        "<option>High Cliff</option>" +
        "<option>High Point (E 1)</option>" +
        "<option>High Point (E 2)</option>" +
        "<option>High Point (E 3)</option>" +
        "<option>High Point (E 4)</option>" +
        "<option>High Point (E 5)</option>" +
        "<option>High Point (E 6)</option>" +
        "<option>High Point (E 7)</option>" +
        "<option>High Point (E 8)</option>" +
        "<option>High Point (E 9)</option>" +
        "<option>High Point (W 1)</option>" +
        "<option>High Point (W 2)</option>" +
        "<option>High Point (W 3)</option>" +
        "<option>High Point (W 4)</option>" +
        "<option>High Point (W 5)</option>" +
        "<option>High Point (W 6)</option>" +
        "<option>Hill 60 Rock Platform</option>" +
        "<option>Hill Bay</option>" +
        "<option>Hill Bay (north)</option>" +
        "<option>Hill Pt (N 1)</option>" +
        "<option>Hill Pt (N 2)</option>" +
        "<option>Hill River (N)</option>" +
        "<option>Hill River (S)</option>" +
        "<option>Hillarys Beach</option>" +
        "<option>Hillarys Boat Harbour (N)</option>" +
        "<option>Hillarys Boat Harbour (S)</option>" +
        "<option>Hillock Point</option>" +
        "<option>Hillock Point (north)</option>" +
        "<option>Hillock Point (south)</option>" +
        "<option>Hindmarsh River</option>" +
        "<option>Hingstone Beach</option>" +
        "<option>Hinsby Beach</option>" +
        "<option>Hippo Point (N)</option>" +
        "<option>Hog Bay</option>" +
        "<option>Hogans Camp</option>" +
        "<option>Holden Point (N 1)</option>" +
        "<option>Holden Point (N 2)</option>" +
        "<option>Holden Point (S)</option>" +
        "<option>Hollis Creek</option>" +
        "<option>Hollis Creek (north)</option>" +
        "<option>Holloway</option>" +
        "<option>Holloway Beach</option>" +
        "<option>Holly Inlet</option>" +
        "<option>Holly Inlet (E)</option>" +
        "<option>Holly Inlet (S)</option>" +
        "<option>Holroyd R (N)</option>" +
        "<option>Holroyd R (S)</option>" +
        "<option>Holroyd R mouth</option>" +
        "<option>Holroyd R mouth (N)</option>" +
        "<option>Holtness Point</option>" +
        "<option>Holts Point (E)</option>" +
        "<option>Home Beach</option>" +
        "<option>Home Beach</option>" +
        "<option>Homestead Bay</option>" +
        "<option>Honeymoon Bay</option>" +
        "<option>Honeymoon Bay (1)</option>" +
        "<option>Honeymoon Bay (2)</option>" +
        "<option>Honeymoon Bay (3)</option>" +
        "<option>Honeymoon Bay (3)</option>" +
        "<option>Honeymoon Beach (1)</option>" +
        "<option>Honeymoon Beach (2)</option>" +
        "<option>Honeymoon Cove</option>" +
        "<option>Honeymoon Point</option>" +
        "<option>Honeysuckle Point</option>" +
        "<option>Honeysuckle Point / Abrahams Head</option>" +
        "<option>Hook Point</option>" +
        "<option>Hooley Creek</option>" +
        "<option>Hoon Ck (S)</option>" +
        "<option>Hooper</option>" +
        "<option>Hope Beach</option>" +
        "<option>Hope Hill</option>" +
        "<option>Hope Island</option>" +
        "<option>Hopetoun</option>" +
        "<option>Hopetoun Beach</option>" +
        "<option>Hopground Beach</option>" +
        "<option>Hopwood (N)</option>" +
        "<option>Hopwood Beach</option>" +
        "<option>Horderns Beach</option>" +
        "<option>Horrocks</option>" +
        "<option>Horse Ck (N)</option>" +
        "<option>Horse Island</option>" +
        "<option>Horse Island (E)</option>" +
        "<option>Horse Peninsula (10)</option>" +
        "<option>Horse Peninsula (2)</option>" +
        "<option>Horse Peninsula (3)</option>" +
        "<option>Horse Peninsula (4)</option>" +
        "<option>Horse Peninsula (5)</option>" +
        "<option>Horse Peninsula (6)</option>" +
        "<option>Horse Peninsula (7)</option>" +
        "<option>Horse Peninsula (8)</option>" +
        "<option>Horse Peninsula (9)</option>" +
        "<option>Horse Point (east 1)</option>" +
        "<option>Horse Point (east 2)</option>" +
        "<option>Horse Point (east 3)</option>" +
        "<option>Horse Point (west 1)</option>" +
        "<option>Horse Point (west 2)</option>" +
        "<option>Horse-Topsy Ck</option>" +
        "<option>Horseshoe Bay</option>" +
        "<option>Horseshoe Bay</option>" +
        "<option>Horseshoe Reef (S)</option>" +
        "<option>Horseshoe-Virgin Reef</option>" +
        "<option>Horseshore Bay</option>" +
        "<option>Horseshore Bay (east)</option>" +
        "<option>Horseshore Bay (west)</option>" +
        "<option>Hotel Beach</option>" +
        "<option>House Beach</option>" +
        "<option>Howells Point</option>" +
        "<option>Howling Cove</option>" +
        "<option>Howrah Beach</option>" +
        "<option>Howth 1</option>" +
        "<option>Howth 2</option>" +
        "<option>Howth 3</option>" +
        "<option>Hoyle Creek</option>" +
        "<option>Hoyle Creek (S)</option>" +
        "<option>Hucks</option>" +
        "<option>Hugh Bamford Reserve</option>" +
        "<option>Hughes Creek</option>" +
        "<option>Hughes Creek (N)</option>" +
        "<option>Hughes Creek (S)</option>" +
        "<option>Hughes Point (S)</option>" +
        "<option>Hummock Hill Island (centre)</option>" +
        "<option>Hummock Hill Island (east)</option>" +
        "<option>Hummock Hill Island (west)</option>" +
        "<option>Hummocky Gorge (1)</option>" +
        "<option>Hummocky Gorge (2)</option>" +
        "<option>Hungry</option>" +
        "<option>Hungry Point</option>" +
        "<option>Hunter Ck</option>" +
        "<option>Hunter Creek</option>" +
        "<option>Hunter Pt (N)</option>" +
        "<option>Hunter Pt (S 1)</option>" +
        "<option>Hunter Pt (S 2)</option>" +
        "<option>Huntingfield Bay</option>" +
        "<option>Hush Hush (W)</option>" +
        "<option>Hush Hush Beach</option>" +
        "<option>Huskisson Point/Inlet</option>" +
        "<option>Hut Point (east)</option>" +
        "<option>Hutchinson Island</option>" +
        "<option>Huxleys Beach</option>" +
        "<option>Hyatts Beach</option>" +
        "<option>Hyland Bay (10)</option>" +
        "<option>Hyland Bay (11)</option>" +
        "<option>Hyland Bay (9)</option>" +
        "<option>Hyland Bay 1</option>" +
        "<option>Hyland Bay 2</option>" +
        "<option>Hyland Bay 3</option>" +
        "<option>Hyland Bay 4</option>" +
        "<option>Hyland Bay 5</option>" +
        "<option>Hyland Bay 6</option>" +
        "</dataList>";

    var iBeaches =
        "<datalist id='mylist'>" +
        "<option>ILLAROO SOUTH</option>" +
        "<option>ILUKA</option>" +
        "<option>INVERLOCH</option>" +
        "<option>IRON LADDER</option>" +
        "<option>IRON PRINCE</option>" +
        "<option>ISLAND</option>" +
        "<option>ISLAND</option>" +
        "<option>Ichera Head (E 1)</option>" +
        "<option>Ichera Head (E 2)</option>" +
        "<option>Ichera Head (E 3)</option>" +
        "<option>Ichera Head (W)</option>" +
        "<option>Illawong</option>" +
        "<option>Illawong (N)</option>" +
        "<option>Illawong (S 1)</option>" +
        "<option>Illawong (S 2)</option>" +
        "<option>Illawong (S 3)</option>" +
        "<option>Imaluk Beach</option>" +
        "<option>Imaluk Beach (E)</option>" +
        "<option>Ina Ck</option>" +
        "<option>Ina Ck (N 1)</option>" +
        "<option>Ina Ck (N 2)</option>" +
        "<option>Ina Ck (S 1)</option>" +
        "<option>Ina Ck (S 2)</option>" +
        "<option>Ina Ck (S 3)</option>" +
        "<option>Ina Ck (S 4)</option>" +
        "<option>Ina Ck (S 5)</option>" +
        "<option>Ince Bay (west)</option>" +
        "<option>Indian Bay</option>" +
        "<option>Indian Head</option>" +
        "<option>Indian Head</option>" +
        "<option>Indian Head (N)</option>" +
        "<option>Indian Head (S)</option>" +
        "<option>Ingram Bay</option>" +
        "<option>Injidup (1)</option>" +
        "<option>Injidup (2)</option>" +
        "<option>Injidup (3)</option>" +
        "<option>Injidup Point</option>" +
        "<option>Injin Beach</option>" +
        "<option>Inlet Beach</option>" +
        "<option>Inman River</option>" +
        "<option>Inner Head</option>" +
        "<option>Inner Island</option>" +
        "<option>Inner Tubes</option>" +
        "<option>Innes Park</option>" +
        "<option>Innes Park (north)</option>" +
        "<option>Inscription Point</option>" +
        "<option>Inskip Point</option>" +
        "<option>Interview River</option>" +
        "<option>Inverell Bay</option>" +
        "<option>Inverell Bay(N)</option>" +
        "<option>Inyadda Point</option>" +
        "<option>Ioala Point</option>" +
        "<option>Irgul Point (E 1)</option>" +
        "<option>Irgul Point (E 2)</option>" +
        "<option>Irgul Point (W 1)</option>" +
        "<option>Irgul Point (W 2)</option>" +
        "<option>Ironhouse Point</option>" +
        "<option>Ironstone Bay</option>" +
        "<option>Ironstone Bay (S 1)</option>" +
        "<option>Ironstone Bay (S 2)</option>" +
        "<option>Ironstone Point</option>" +
        "<option>Irwin River mouth (N)</option>" +
        "<option>Irwin River mouth (S)</option>" +
        "<option>Isaacs Point (N)</option>" +
        "<option>Isaacs Point (S)</option>" +
        "<option>Island Bay (1)</option>" +
        "<option>Island Bay (2)</option>" +
        "<option>Island Beach</option>" +
        "<option>Island Head (east 1)</option>" +
        "<option>Island Head (east 2)</option>" +
        "<option>Island Head (east 3)</option>" +
        "<option>Island Head (east 4)</option>" +
        "<option>Island Head Inlet (1)</option>" +
        "<option>Island Head Inlet (2)</option>" +
        "<option>Island Point</option>" +
        "<option>Island Point (N)</option>" +
        "<option>Island Point (S 1)</option>" +
        "<option>Island Point (S)</option>" +
        "<option>Island-Reef points</option>" +
        "<option>Islet Point</option>" +
        "<option>Islet Point (E)</option>" +
        "<option>Israelite Bay</option>" +
        "<option>Israelite Bay Spit</option>" +
        "<option>Isthmus Bay</option>" +
        "<option>Isthmus Bay (E)</option>" +
        "<option>Isthmus Bay (W)</option>" +
        "<option>Isthmus Hill (E)</option>" +
        "<option>Isthmus Hill (W)</option>" +
        "<option>Italian River</option>" +
        "<option>Italian River (N)</option>" +
        "</dataList>";

    var jBeaches =
        "<datalist id='mylist'>" +
        "<option>JACK SMITH LAKE</option>" +
        "<option>JAMES IRVINE</option>" +
        "<option>JAMIESON CREEK</option>" +
        "<option>JAN JUC</option>" +
        "<option>JANE SPIERS</option>" +
        "<option>JANE SPIERS NORTH</option>" +
        "<option>JANIES CORNER</option>" +
        "<option>JEMISONS</option>" +
        "<option>JENNY DIXONS</option>" +
        "<option>JERIMBUT POINT SOUTH</option>" +
        "<option>JESSIE</option>" +
        "<option>JIBBON</option>" +
        "<option>JIMMIES ISLAND</option>" +
        "<option>JOHANNA</option>" +
        "<option>JOHNNY SOUEY COVE</option>" +
        "<option>JONES</option>" +
        "<option>JONES/BOYDS</option>" +
        "<option>JOSHS</option>" +
        "<option>Jacks Lookout</option>" +
        "<option>Jacks Pocket (N)</option>" +
        "<option>Jacks Pocket (S)</option>" +
        "<option>Jackson R</option>" +
        "<option>Jackson-MacDonald R</option>" +
        "<option>Jacksons Cove</option>" +
        "<option>Jagger Beach</option>" +
        "<option>Jakes</option>" +
        "<option>Jakes (S)</option>" +
        "<option>Jakes Beach</option>" +
        "<option>Jakes Beach (S 1)</option>" +
        "<option>Jakes Beach (S 2)</option>" +
        "<option>Jakes Beach (S 3)</option>" +
        "<option>Jalma Bay (E 1)</option>" +
        "<option>Jalma Bay (E 2)</option>" +
        "<option>Jalma Bay (E 3)</option>" +
        "<option>Jalma Bay (E 4)</option>" +
        "<option>Jalma Bay (E 5)</option>" +
        "<option>Jalma Bay (W)</option>" +
        "<option>James Ck</option>" +
        "<option>James Point</option>" +
        "<option>James Point</option>" +
        "<option>James Point (E)</option>" +
        "<option>James Point (N)</option>" +
        "<option>James Point (S 1)</option>" +
        "<option>James Point (S 1)</option>" +
        "<option>James Point (S 2)</option>" +
        "<option>James Point (S 2)</option>" +
        "<option>James Point (S 3)</option>" +
        "<option>James Price Pt (N)</option>" +
        "<option>James Price Pt (S)</option>" +
        "<option>James Rocks</option>" +
        "<option>James Well</option>" +
        "<option>Janie Creek</option>" +
        "<option>Jantz Pt</option>" +
        "<option>Jantz Pt (N 1)</option>" +
        "<option>Jantz Pt (N 2)</option>" +
        "<option>Jar Is (W 1)</option>" +
        "<option>Jar Is (W 2)</option>" +
        "<option>Jar Is (W 3)</option>" +
        "<option>Jar Is (W 4)</option>" +
        "<option>Jar Is (W 5)</option>" +
        "<option>Jardine R (E)</option>" +
        "<option>Jardine R mouth</option>" +
        "<option>Jarrod Point</option>" +
        "<option>Jason</option>" +
        "<option>Jasper (W)</option>" +
        "<option>Jasper Beach</option>" +
        "<option>Jeanneret Beach</option>" +
        "<option>Jeannie R (N 1)</option>" +
        "<option>Jeannie R (N 2)</option>" +
        "<option>Jeannie R (S 1)</option>" +
        "<option>Jeannie R (S 2)</option>" +
        "<option>Jeannie R (S 3)</option>" +
        "<option>Jeannie R (S 4)</option>" +
        "<option>Jeannie R (S 5)</option>" +
        "<option>Jeannie R (S 6)</option>" +
        "<option>Jeannie R (S 7)</option>" +
        "<option>Jeannie R (S 8)</option>" +
        "<option>Jeannie R (S 9)</option>" +
        "<option>Jenamullup Ck (1)</option>" +
        "<option>Jenamullup Ck (2)</option>" +
        "<option>Jenny Lind Creek</option>" +
        "<option>Jensz</option>" +
        "<option>Jerudong Beach</option>" +
        "<option>Jervoise Bay (1)</option>" +
        "<option>Jervoise Bay (2)</option>" +
        "<option>Jervoise Bay (3)</option>" +
        "<option>Jetty</option>" +
        "<option>Jetty Beach</option>" +
        "<option>Jetty beach</option>" +
        "<option>Jetty beach</option>" +
        "<option>Jetty beach (east)</option>" +
        "<option>Jewin Head</option>" +
        "<option>Jews Head</option>" +
        "<option>Jigaimurra Pt (E)</option>" +
        "<option>Jimmy Newhills Harbour</option>" +
        "<option>Jimmys Beach</option>" +
        "<option>Jims Beach</option>" +
        "<option>Joes Creek</option>" +
        "<option>Joes Creek (W)</option>" +
        "<option>John Cove</option>" +
        "<option>John Point</option>" +
        "<option>John Point (E)</option>" +
        "<option>Johns Point (N)</option>" +
        "<option>Johnsons</option>" +
        "<option>Johnsons Bay</option>" +
        "<option>Johnsons Beach</option>" +
        "<option>Johnsons Head</option>" +
        "<option>Johnsons Head (N)</option>" +
        "<option>Jollys Beach</option>" +
        "<option>Jologo</option>" +
        "<option>Jolong Rocks</option>" +
        "<option>Jonah Bay</option>" +
        "<option>Jones</option>" +
        "<option>Jones Creek</option>" +
        "<option>Jorndee Ck</option>" +
        "<option>Joyce Bay</option>" +
        "<option>Jubilee Rocks (1)</option>" +
        "<option>Jubilee Rocks (2)</option>" +
        "<option>Jubliee Beach</option>" +
        "<option>Julieann Rocks</option>" +
        "<option>July Pt (S 1)</option>" +
        "<option>July Pt (S 2)</option>" +
        "<option>July Pt (S 3)</option>" +
        "<option>July Pt (S 4)</option>" +
        "<option>Jumpinpin Inlet</option>" +
        "<option>Junction Bay (N 1)</option>" +
        "<option>Junction Bay (N 2)</option>" +
        "<option>Junction Bay (N 3)</option>" +
        "<option>Junction Bay (N 4)</option>" +
        "<option>Junction Bay (N 5)</option>" +
        "<option>Junction Bay (N 6)</option>" +
        "<option>Junction Bay (N 7)</option>" +
        "<option>Junction Bay (N 8)</option>" +
        "<option>June Pt (N)</option>" +
        "<option>Jurabi Point (N)</option>" +
        "<option>Jurabi Point (S)</option>" +
        "<option>Jurien</option>" +
        "<option>Jurien groyne (1)</option>" +
        "<option>Jurien groyne (2)</option>" +
        "<option>Jurien harbour (N)</option>" +
        "<option>Jurien harbour (S 1)</option>" +
        "<option>Jurien harbour (S 2)</option>" +
        "<option>Jussieu Bay (east)</option>" +
        "<option>Jussieu Bay (west)</option>" +
        "</dataList>";

    var kBeaches =
        "<datalist id='mylist'>" +
        "<option>KACKERABOITE CREEK</option>" +
        "<option>KEATINGS HEAD</option>" +
        "<option>KELLYS LAKE</option>" +
        "<option>KELP COVE</option>" +
        "<option>KENDALLS</option>" +
        "<option>KENNETT RIVER</option>" +
        "<option>KENNON COVE</option>" +
        "<option>KI-167</option>" +
        "<option>KI-168</option>" +
        "<option>KI-169</option>" +
        "<option>KI-170</option>" +
        "<option>KIANGA</option>" +
        "<option>KIANGA SOUTH</option>" +
        "<option>KIANINNY BAY</option>" +
        "<option>KILCUNDA EAST</option>" +
        "<option>KILCUNDA WEST 1</option>" +
        "<option>KILCUNDA WEST 2</option>" +
        "<option>KILLALEA</option>" +
        "<option>KILLARNEY</option>" +
        "<option>KILLICK</option>" +
        "<option>KINGS 1</option>" +
        "<option>KINGS 2</option>" +
        "<option>KINGSLEY</option>" +
        "<option>KIOLOA</option>" +
        "<option>KIOLOA BOAT RAMP</option>" +
        "<option>KIRK POINT</option>" +
        "<option>KIRK POINT WEST</option>" +
        "<option>KITTY BEACH</option>" +
        "<option>KITTY MILLER BAY</option>" +
        "<option>KOONWARRA</option>" +
        "<option>KOONYA</option>" +
        "<option>KORORA</option>" +
        "<option>KYLIE</option>" +
        "<option>Kabbijgup (N 1)</option>" +
        "<option>Kabbijgup (N 2)</option>" +
        "<option>Kabbijgup (S 1)</option>" +
        "<option>Kabbijgup (S 2)</option>" +
        "<option>Kabbijgup (S 3)</option>" +
        "<option>Kabbijgup Beach</option>" +
        "<option>Kailis</option>" +
        "<option>Kailis (S)</option>" +
        "<option>Kalbarri</option>" +
        "<option>Kalbarri (N)</option>" +
        "<option>Kangaroo Gully</option>" +
        "<option>Kangaroo Gully (west)</option>" +
        "<option>Kangaroo Head</option>" +
        "<option>Kangaroo Point</option>" +
        "<option>Kangaroo Point (S)</option>" +
        "<option>Kangaroo Point (north 1)</option>" +
        "<option>Kangaroo Point (north 2)</option>" +
        "<option>Kangaroo Point (south 1)</option>" +
        "<option>Kangaroo Point (south 2)</option>" +
        "<option>Kangie Bay</option>" +
        "<option>Kaniaal (W)</option>" +
        "<option>Kaniaal Beach</option>" +
        "<option>Kapui Pt</option>" +
        "<option>Kapui Pt (N 1)</option>" +
        "<option>Kapui Pt (N 2)</option>" +
        "<option>Kapui Pt (N 3)</option>" +
        "<option>Kapunta (1)</option>" +
        "<option>Kapunta (2)</option>" +
        "<option>Kapunta (3)</option>" +
        "<option>Kapunta (4)</option>" +
        "<option>Kapunta (5)</option>" +
        "<option>Karrakatta Bay (1)</option>" +
        "<option>Karrakatta Bay (2)</option>" +
        "<option>Karratha Beach</option>" +
        "<option>Karratta</option>" +
        "<option>Karumba</option>" +
        "<option>Kawana</option>" +
        "<option>Kawana Waters</option>" +
        "<option>Kellys</option>" +
        "<option>Kellys (south)</option>" +
        "<option>Kelso</option>" +
        "<option>Kelso Ck</option>" +
        "<option>Kelvedon Beach</option>" +
        "<option>Kemp Bay (1)</option>" +
        "<option>Kemp Bay (2)</option>" +
        "<option>Kemp Beach</option>" +
        "<option>Kennedia Beach</option>" +
        "<option>Kennedy Bay</option>" +
        "<option>Kennedy Bay</option>" +
        "<option>Kennedy Bay (1)</option>" +
        "<option>Kennedy Bay (2)</option>" +
        "<option>Kennedy Bay (3)</option>" +
        "<option>Kennedy Inlet (E)</option>" +
        "<option>Kennedy Inlet (W)</option>" +
        "<option>Kennedys (W)</option>" +
        "<option>Kennedys beach</option>" +
        "<option>Kents Beach</option>" +
        "<option>Kents Beach (W)</option>" +
        "<option>Keppel Sands</option>" +
        "<option>Keppel Sands (north 1)</option>" +
        "<option>Keppel Sands (north 2)</option>" +
        "<option>Keppel Sands Point</option>" +
        "<option>Kerr Pt (N)</option>" +
        "<option>Kerr Pt (S)</option>" +
        "<option>Ketchem Bay (1)</option>" +
        "<option>Ketchem Bay (2)</option>" +
        "<option>Ketchem Bay (3)</option>" +
        "<option>Kewarra Beach</option>" +
        "<option>Kiama Blowhole</option>" +
        "<option>Kiana Beach</option>" +
        "<option>Kiana Beach (north)</option>" +
        "<option>Kiandra (1)</option>" +
        "<option>Kiandra (2)</option>" +
        "<option>Kiandra (3)</option>" +
        "<option>Kianga Channel</option>" +
        "<option>Kilbie Beach</option>" +
        "<option>Kilcarnup Beach (1)</option>" +
        "<option>Kilcarnup Beach (2)</option>" +
        "<option>Kilcarnup Beach (N)</option>" +
        "<option>Killick Beach</option>" +
        "<option>Killiecrankie</option>" +
        "<option>Killiecrankie (N)</option>" +
        "<option>Killiecrankie Bay</option>" +
        "<option>Kimberley Coastal Camp</option>" +
        "<option>Kimrunja Beach</option>" +
        "<option>King Bay</option>" +
        "<option>King Bay (1)</option>" +
        "<option>King Bay (2)</option>" +
        "<option>King Bay (3)</option>" +
        "<option>King Bay (4)</option>" +
        "<option>King Beach</option>" +
        "<option>King Beach (north)</option>" +
        "<option>King George Beach (1)</option>" +
        "<option>King George Beach (2)</option>" +
        "<option>King George Beach (3)</option>" +
        "<option>King George Beach (4)</option>" +
        "<option>King George Beach (5)</option>" +
        "<option>King George Beach (6)</option>" +
        "<option>King George River</option>" +
        "<option>King George River (E 1)</option>" +
        "<option>King George River (W 1)</option>" +
        "<option>King George River (W 2)</option>" +
        "<option>King George River (W 3)</option>" +
        "<option>King Harman Pt (S 1)</option>" +
        "<option>King Harman Pt (S 2)</option>" +
        "<option>King Harman Pt (S 3)</option>" +
        "<option>King Harman Pt (S 4)</option>" +
        "<option>King Harman Pt (W 1)</option>" +
        "<option>King Harman Pt (W 2)</option>" +
        "<option>King Harman Pt (W 3)</option>" +
        "<option>King Harman Pt (W 4)</option>" +
        "<option>King Harman Pt (W 5)</option>" +
        "<option>King Head 1</option>" +
        "<option>King Head 2</option>" +
        "<option>King Head 3</option>" +
        "<option>King River (E 1)</option>" +
        "<option>King River (E 2)</option>" +
        "<option>King River (E 3)</option>" +
        "<option>King River (E 4)</option>" +
        "<option>King River (E 5)</option>" +
        "<option>King River (E 6)</option>" +
        "<option>King River (E 7)</option>" +
        "<option>King River (E 8)</option>" +
        "<option>King River (W 1)</option>" +
        "<option>King River (W 2)</option>" +
        "<option>King River (W 3)</option>" +
        "<option>Kingfish Beach</option>" +
        "<option>Kingfisher Bay (north)</option>" +
        "<option>Kingfisher Bay (south)</option>" +
        "<option>Kingfisher Beach</option>" +
        "<option>Kingfisher Beach (E)</option>" +
        "<option>Kinghorn Point</option>" +
        "<option>Kings</option>" +
        "<option>Kings (Caloundra)</option>" +
        "<option>Kings Beach</option>" +
        "<option>Kings Beach (north)</option>" +
        "<option>Kings Camp</option>" +
        "<option>Kings beach</option>" +
        "<option>Kingscliff/Cudgen</option>" +
        "<option>Kingscote Jetty (north)</option>" +
        "<option>Kingscote Jetty (south)</option>" +
        "<option>Kingscote pool</option>" +
        "<option>Kingston (N)</option>" +
        "<option>Kingston Beach</option>" +
        "<option>Kingston SE</option>" +
        "<option>Kinka (south 1)</option>" +
        "<option>Kinka (south 2)</option>" +
        "<option>Kinka Beach</option>" +
        "<option>Kinmore Point (east 1)</option>" +
        "<option>Kinmore Point (east 2)</option>" +
        "<option>Kinmore Point (west)</option>" +
        "<option>Kirke R</option>" +
        "<option>Kirra</option>" +
        "<option>Kirton Point</option>" +
        "<option>Kirton Point (caravan park)</option>" +
        "<option>Kissing Point</option>" +
        "<option>Kitson Point</option>" +
        "<option>Klein Point (north)</option>" +
        "<option>Klein Point (south)</option>" +
        "<option>Knapmans Creek</option>" +
        "<option>Knapp Head (W 1)</option>" +
        "<option>Knapp Head (W 2)</option>" +
        "<option>Knapp Head (W 3)</option>" +
        "<option>Knobby Head</option>" +
        "<option>Knobler Creek</option>" +
        "<option>Kolan River</option>" +
        "<option>Koolan (1)</option>" +
        "<option>Koolan (2)</option>" +
        "<option>Koolan (3)</option>" +
        "<option>Koolan (4)</option>" +
        "<option>Koolan (5)</option>" +
        "<option>Koolan Is (N 1)</option>" +
        "<option>Koolan Is (N 2)</option>" +
        "<option>Koombal</option>" +
        "<option>Koombana Beach</option>" +
        "<option>Koonungai</option>" +
        "<option>Kooringal</option>" +
        "<option>Kooromoonah</option>" +
        "<option>Kopke Point</option>" +
        "<option>Kopke Point (S 1)</option>" +
        "<option>Kopke Point (S 2)</option>" +
        "<option>Kopke Point (S 3)</option>" +
        "<option>Kopke Point (S 4)</option>" +
        "<option>Koppi Tucka (1)</option>" +
        "<option>Koppi Tucka (2)</option>" +
        "<option>Koppi Tucka (3)</option>" +
        "<option>Krait Bay (E 1)</option>" +
        "<option>Krait Bay (E 2)</option>" +
        "<option>Krait Bay (W)</option>" +
        "<option>Kreutzer</option>" +
        "<option>Kularruty Ck (N)</option>" +
        "<option>Kularruty Ck (S 1)</option>" +
        "<option>Kularruty Ck (S 2)</option>" +
        "<option>Kuper Point</option>" +
        "<option>Kuper Point (E 1)</option>" +
        "<option>Kuper Point (E 2)</option>" +
        "<option>Kuper Point (W 1)</option>" +
        "<option>Kuper Point (W 2)</option>" +
        "<option>Kuper Point (W 3)</option>" +
        "<option>Kuper Point (W 4)</option>" +
        "<option>Kuper Point (W 5)</option>" +
        "<option>Kurala R (E 1)</option>" +
        "<option>Kurala R (E 2)</option>" +
        "<option>Kurala R (E 3)</option>" +
        "<option>Kurala R (E 4)</option>" +
        "<option>Kurala R (E 5)</option>" +
        "<option>Kurala R (W 1)</option>" +
        "<option>Kurala R (W 2)</option>" +
        "<option>Kurala R (W 3)</option>" +
        "<option>Kurala R (W 4)</option>" +
        "<option>Kuri Bay</option>" +
        "<option>Kurnel</option>" +
        "<option>Kurrawa</option>" +
        "<option>Kurrimine</option>" +
        "<option>Kurumba Beach</option>" +
        "<option>Kutti Beach</option>" +
        "<option>Kwinana Beach (N)</option>" +
        "<option>Kwinana Beach (S)</option>" +
        "<option>Kwinana boat harbour</option>" +
        "</dataList>";

    var lBeaches =
        "<datalist id='mylist'>" +
        "<option>LAKE BOWRIE</option>" +
        "<option>LAKE CATHIE</option>" +
        "<option>LAKE DENISON</option>" +
        "<option>LAKE REEVE</option>" +
        "<option>LAKES</option>" +
        "<option>LAKES SOUTH</option>" +
        "<option>LARKIN COVE</option>" +
        "<option>LEATHER JACKET BAY</option>" +
        "<option>LEGGES</option>" +
        "<option>LEONARD BAY 1</option>" +
        "<option>LEONARD BAY 2</option>" +
        "<option>LETITIA SPIT</option>" +
        "<option>LIGHTHOUSE</option>" +
        "<option>LIGHTHOUSE</option>" +
        "<option>LIGHTHOUSE</option>" +
        "<option>LILLI PILLI</option>" +
        "<option>LINDEMAN COVE</option>" +
        "<option>LITTLE</option>" +
        "<option>LITTLE</option>" +
        "<option>LITTLE</option>" +
        "<option>LITTLE / GHOSTIES</option>" +
        "<option>LITTLE AUSTINMER</option>" +
        "<option>LITTLE BAY</option>" +
        "<option>LITTLE BAY</option>" +
        "<option>LITTLE BAY 1</option>" +
        "<option>LITTLE BAY 2</option>" +
        "<option>LITTLE BIRDIE</option>" +
        "<option>LITTLE CREEK</option>" +
        "<option>LITTLE GARIE</option>" +
        "<option>LITTLE KINGSLEY</option>" +
        "<option>LITTLE LAKE</option>" +
        "<option>LITTLE MARLEY</option>" +
        "<option>LITTLE OBERON BAY</option>" +
        "<option>LITTLE PARK</option>" +
        "<option>LITTLE PEBBLY</option>" +
        "<option>LITTLE RAME HEAD 1</option>" +
        "<option>LITTLE RAME HEAD 2</option>" +
        "<option>LITTLE RAME HEAD 3</option>" +
        "<option>LITTLE RAME HEAD 4</option>" +
        "<option>LITTLE RAME HEAD 5</option>" +
        "<option>LITTLE RAME HEAD 6</option>" +
        "<option>LITTLE SHELLY</option>" +
        "<option>LITTLE TALLOW</option>" +
        "<option>LITTLE WATEGOS</option>" +
        "<option>LITTLE WATERLOO BAY</option>" +
        "<option>LITTLE/JIGUMA</option>" +
        "<option>LOADER</option>" +
        "<option>LOBSTER</option>" +
        "<option>LOBSTER BAY</option>" +
        "<option>LOCH ARD GORGE</option>" +
        "<option>LOCHS PORT/STOCKYARD HILL</option>" +
        "<option>LOGANS</option>" +
        "<option>LONDON BRIDGE</option>" +
        "<option>LONDON BRIDGE 1</option>" +
        "<option>LONDON BRIDGE 2</option>" +
        "<option>LONDON BRIDGE WEST</option>" +
        "<option>LONG</option>" +
        "<option>LONG</option>" +
        "<option>LONG</option>" +
        "<option>LONG NORTH 1</option>" +
        "<option>LONG NORTH 2</option>" +
        "<option>LONG REEF</option>" +
        "<option>LONG REEF POINT</option>" +
        "<option>LONSDALE BAY - SANTA CASA</option>" +
        "<option>LORNE</option>" +
        "<option>LORNE JETTY</option>" +
        "<option>Lacapede Bay</option>" +
        "<option>Lachlan Is (S 1)</option>" +
        "<option>Lachlan Is (S 2)</option>" +
        "<option>Lachlan Is (S 3)</option>" +
        "<option>Lachlan Is (S 4)</option>" +
        "<option>Lades Beach</option>" +
        "<option>Ladies Bay</option>" +
        "<option>Ladies Beach</option>" +
        "<option>Ladies beach</option>" +
        "<option>Lady Bay</option>" +
        "<option>Lady Bay (N)</option>" +
        "<option>Lady Bay (S)</option>" +
        "<option>Lady Edeline Beach (E)</option>" +
        "<option>Lady Edeline Beach (W)</option>" +
        "<option>Lady Kathleen Beach</option>" +
        "<option>Lady Martins</option>" +
        "<option>Lady Robinson</option>" +
        "<option>Lagoon</option>" +
        "<option>Lagoon Bay</option>" +
        "<option>Lagoon Bay (S)</option>" +
        "<option>Lagoon Beach</option>" +
        "<option>Lagoon Beach (N 1)</option>" +
        "<option>Lagoon Beach (N 2)</option>" +
        "<option>Lagoon Point</option>" +
        "<option>Lagoon Point (N)</option>" +
        "<option>Lagoon Point (S)</option>" +
        "<option>Lagoon River</option>" +
        "<option>Lagoon River (N 1)</option>" +
        "<option>Lagoon River (N 10)</option>" +
        "<option>Lagoon River (N 11)</option>" +
        "<option>Lagoon River (N 2)</option>" +
        "<option>Lagoon River (N 3)</option>" +
        "<option>Lagoon River (N 4)</option>" +
        "<option>Lagoon River (N 5)</option>" +
        "<option>Lagoon River (N 6)</option>" +
        "<option>Lagoon River (N 7)</option>" +
        "<option>Lagoon River (N 8)</option>" +
        "<option>Lagoon River (N 9)</option>" +
        "<option>Lagoon Tank (N)</option>" +
        "<option>Lagoon Tank (S)</option>" +
        "<option>Lagoons Beach (N)</option>" +
        "<option>Lagoons Beach (S)</option>" +
        "<option>Lake Shaster 1</option>" +
        "<option>Lake Shaster 2</option>" +
        "<option>Lakeside</option>" +
        "<option>Lamberts</option>" +
        "<option>Lameroo Beach</option>" +
        "<option>Lammermoor</option>" +
        "<option>Lamond Head</option>" +
        "<option>Lancelin</option>" +
        "<option>Lancelin (N)</option>" +
        "<option>Lancelin (S)</option>" +
        "<option>Landfall Pt</option>" +
        "<option>Lands End</option>" +
        "<option>Lanes Tor</option>" +
        "<option>Langarra</option>" +
        "<option>Langarra (E)</option>" +
        "<option>Langarra (W 1)</option>" +
        "<option>Langarra (W 2)</option>" +
        "<option>Langarra (W 3)</option>" +
        "<option>Langgi</option>" +
        "<option>Langgi (S 1)</option>" +
        "<option>Langgi (S 2)</option>" +
        "<option>Langgi (S 3)</option>" +
        "<option>Langgi (S 4)</option>" +
        "<option>Langgi (S 5)</option>" +
        "<option>Lantana Creek</option>" +
        "<option>Laradeenya Ck (N 1)</option>" +
        "<option>Laradeenya Ck (N 2)</option>" +
        "<option>Laradeenya Ck (S 1)</option>" +
        "<option>Laradeenya Ck (S 2)</option>" +
        "<option>Larc Beach (E)</option>" +
        "<option>Larc Beach (W)</option>" +
        "<option>Largs Bay</option>" +
        "<option>Larrey Point</option>" +
        "<option>Larrey Point (E)</option>" +
        "<option>Larrey Point (W)</option>" +
        "<option>Laterite Pt</option>" +
        "<option>Laterite Pt (E 1)</option>" +
        "<option>Laterite Pt (E 2)</option>" +
        "<option>Laterite Pt (E 3)</option>" +
        "<option>Laterite Pt (E 4)</option>" +
        "<option>Laterite Pt (W 1)</option>" +
        "<option>Laterite Pt (W 11)</option>" +
        "<option>Laterite Pt (W 11)</option>" +
        "<option>Laterite Pt (W 2)</option>" +
        "<option>Laterite Pt (W 3)</option>" +
        "<option>Laterite Pt (W 4)</option>" +
        "<option>Laterite Pt (W 5)</option>" +
        "<option>Laterite Pt (W 6)</option>" +
        "<option>Laterite Pt (W 7)</option>" +
        "<option>Laterite Pt (W 8)</option>" +
        "<option>Laterite Pt (W 9)</option>" +
        "<option>Lauderdale (W 1)</option>" +
        "<option>Lauderdale (W 2)</option>" +
        "<option>Launch Rocks</option>" +
        "<option>Launs Beach</option>" +
        "<option>Laura Bay</option>" +
        "<option>Laura Bay (east)</option>" +
        "<option>Laura Bay (south)</option>" +
        "<option>Laura Bay (west)</option>" +
        "<option>Lavania Beach</option>" +
        "<option>Lazy Rocks</option>" +
        "<option>Le Grand Beach</option>" +
        "<option>Leander Passage-Shoal Point</option>" +
        "<option>Learmouth</option>" +
        "<option>Lecks</option>" +
        "<option>Ledge Bay</option>" +
        "<option>Ledge Islet</option>" +
        "<option>Ledge Point (N 1)</option>" +
        "<option>Ledge Point (N)</option>" +
        "<option>Ledge Point (S 1)</option>" +
        "<option>Ledge Point (S)</option>" +
        "<option>Ledge Point (W)</option>" +
        "<option>Ledge Point groynes</option>" +
        "<option>Ledge Pt</option>" +
        "<option>Ledge Pt</option>" +
        "<option>Ledge point</option>" +
        "<option>Lee Point (east)</option>" +
        "<option>Leearcher Cave</option>" +
        "<option>Leeman</option>" +
        "<option>Leeman (N)</option>" +
        "<option>Lefroy Bay</option>" +
        "<option>Lefroy Bay (S)</option>" +
        "<option>Lefroy Hill</option>" +
        "<option>Left Hill</option>" +
        "<option>Legacy Beach</option>" +
        "<option>Leichhardt Creek</option>" +
        "<option>Leighton Beach</option>" +
        "<option>Leighton Park</option>" +
        "<option>Leith</option>" +
        "<option>Leith (E)</option>" +
        "<option>Lemna</option>" +
        "<option>Lemons Beach</option>" +
        "<option>Lennard Pool</option>" +
        "<option>Lennards Island</option>" +
        "<option>Letherbrook</option>" +
        "<option>Levens Beach</option>" +
        "<option>Lharidon Bight (E 1)</option>" +
        "<option>Lharidon Bight (E 2)</option>" +
        "<option>Lharidon Bight (W 1)</option>" +
        "<option>Lharidon Bight (W 2)</option>" +
        "<option>Lharidon Bight (W 3)</option>" +
        "<option>Light Beach</option>" +
        "<option>Lighthouse Bay</option>" +
        "<option>Lighthouse Bay (E)</option>" +
        "<option>Lighthouse Beach</option>" +
        "<option>Lighthouse Beach</option>" +
        "<option>Lighthouse Jetty Beach</option>" +
        "<option>Lights Beach</option>" +
        "<option>Lights beach (E 1)</option>" +
        "<option>Lights beach (E 2)</option>" +
        "<option>Lillico Beach</option>" +
        "<option>Lillico Beach (E)</option>" +
        "<option>Lillies beach (1)</option>" +
        "<option>Lillies beach (2)</option>" +
        "<option>Lillies beach (3)</option>" +
        "<option>Lime Bay (E)</option>" +
        "<option>Lime Bay (W)</option>" +
        "<option>Limekiln Point</option>" +
        "<option>Limestone Bay (1)</option>" +
        "<option>Limestone Bay (2)</option>" +
        "<option>Lingi Point</option>" +
        "<option>Lingi Point (east)</option>" +
        "<option>Lipfert island</option>" +
        "<option>Lipson Cove</option>" +
        "<option>Lipson Cove (north)</option>" +
        "<option>Lipson Cove (south 1)</option>" +
        "<option>Lipson Cove (south 2)</option>" +
        "<option>Lisdillon Beach</option>" +
        "<option>Little Anchorage</option>" +
        "<option>Little Armstrong Bay</option>" +
        "<option>Little Avalon</option>" +
        "<option>Little Badgers Head 1</option>" +
        "<option>Little Badgers Head 2</option>" +
        "<option>Little Badgers Head 3</option>" +
        "<option>Little Badgers Head 4</option>" +
        "<option>Little Badgers Head 5</option>" +
        "<option>Little Beach</option>" +
        "<option>Little Beach</option>" +
        "<option>Little Beach</option>" +
        "<option>Little Beecroft Head</option>" +
        "<option>Little Boat Harbour</option>" +
        "<option>Little Boat Harbour (N)</option>" +
        "<option>Little Bondi</option>" +
        "<option>Little Coningham Beach</option>" +
        "<option>Little Cove</option>" +
        "<option>Little Creek</option>" +
        "<option>Little Creek (east)</option>" +
        "<option>Little Creek (west)</option>" +
        "<option>Little Daintry Creek</option>" +
        "<option>Little Dip</option>" +
        "<option>Little Dip (south)</option>" +
        "<option>Little Douglas</option>" +
        "<option>Little Fancy Bay</option>" +
        "<option>Little Garie Point</option>" +
        "<option>Little Garretts Bight</option>" +
        "<option>Little Georide Bay</option>" +
        "<option>Little Greenie</option>" +
        "<option>Little Head</option>" +
        "<option>Little Howrah Beach</option>" +
        "<option>Little Jonah Bay</option>" +
        "<option>Little Lagoon</option>" +
        "<option>Little Lagoon (N 1)</option>" +
        "<option>Little Lagoon (N 2)</option>" +
        "<option>Little Lagoon (N 3)</option>" +
        "<option>Little Lagoon (N 4)</option>" +
        "<option>Little Lagoon Beach</option>" +
        "<option>Little Lagoon Beach (W)</option>" +
        "<option>Little Manly Cove</option>" +
        "<option>Little Musselroe Bay</option>" +
        "<option>Little Musselroe Bay (W 1)</option>" +
        "<option>Little Musselroe Bay (W 2)</option>" +
        "<option>Little Musselroe Bay (W 3)</option>" +
        "<option>Little Nelson Bay</option>" +
        "<option>Little Parakeet Bay</option>" +
        "<option>Little Patonga</option>" +
        "<option>Little Peggs Beach</option>" +
        "<option>Little Peppermint Bay</option>" +
        "<option>Little Porky (N)</option>" +
        "<option>Little Porky (S)</option>" +
        "<option>Little Porky Beach</option>" +
        "<option>Little Possum Beach</option>" +
        "<option>Little Quarram  (W)</option>" +
        "<option>Little Quarram Beach</option>" +
        "<option>Little Ramsey Bay</option>" +
        "<option>Little Reef</option>" +
        "<option>Little Reef Beach</option>" +
        "<option>Little River</option>" +
        "<option>Little Roaring Bay Beach</option>" +
        "<option>Little Salmon Bay</option>" +
        "<option>Little Sirius Cove</option>" +
        "<option>Little Tagon</option>" +
        "<option>Little Turtle Bay</option>" +
        "<option>LittleTaylors Bay</option>" +
        "<option>Litttle Corio Bay</option>" +
        "<option>Liver Point</option>" +
        "<option>Lizard Bay (1)</option>" +
        "<option>Lizard Bay (2)</option>" +
        "<option>Lobster Point (S 1)</option>" +
        "<option>Lobster Point (S 2)</option>" +
        "<option>Loch Well (north 1)</option>" +
        "<option>Loch Well (north 2)</option>" +
        "<option>Loch Well (north 3)</option>" +
        "<option>Loch Well (north 4)</option>" +
        "<option>Loch Well (south 1)</option>" +
        "<option>Loch Well (south 2)</option>" +
        "<option>Loch Well (south 3)</option>" +
        "<option>Loch Well (south 4)</option>" +
        "<option>Loch Well Beach</option>" +
        "<option>Lochmore</option>" +
        "<option>Locker Island (E)</option>" +
        "<option>Locker Island (N 1)</option>" +
        "<option>Locker Island (N 2)</option>" +
        "<option>Locker Point (W 1)</option>" +
        "<option>Locker Point (W 2)</option>" +
        "<option>Lockhart R (N)</option>" +
        "<option>Logan Jack Ck (N)</option>" +
        "<option>Logan Jack Ck (S)</option>" +
        "<option>Lomdadina</option>" +
        "<option>Long</option>" +
        "<option>Long</option>" +
        "<option>Long Beach</option>" +
        "<option>Long Beach</option>" +
        "<option>Long Beach (1)</option>" +
        "<option>Long Beach (2)</option>" +
        "<option>Long Beach (3)</option>" +
        "<option>Long Beach (4)</option>" +
        "<option>Long Beach (north)</option>" +
        "<option>Long Beach (south)</option>" +
        "<option>Long Gully (1)</option>" +
        "<option>Long Gully (2)</option>" +
        "<option>Long Gully (3)</option>" +
        "<option>Long Gully (4)</option>" +
        "<option>Long Point</option>" +
        "<option>Long Point (E)</option>" +
        "<option>Long Point (W 1)</option>" +
        "<option>Long Point (W 2)</option>" +
        "<option>Long Point (W 3)</option>" +
        "<option>Long Point (W 4)</option>" +
        "<option>Long Point (W 5)</option>" +
        "<option>Long Point (W 6)</option>" +
        "<option>Long Point (W 7)</option>" +
        "<option>Long Point Beach</option>" +
        "<option>Long Reef - Dee Why</option>" +
        "<option>Longfords Beach</option>" +
        "<option>Longnose Point</option>" +
        "<option>Longreach Bay</option>" +
        "<option>Lonoma Point</option>" +
        "<option>Lonoma Point (E 1)</option>" +
        "<option>Lonoma Point (E 2)</option>" +
        "<option>Lonoma Point (E 3)</option>" +
        "<option>Lonoma Point (E 4)</option>" +
        "<option>Lonoma Point (E 5)</option>" +
        "<option>Lonoma Point (E 6)</option>" +
        "<option>Lonoma Point (E 7)</option>" +
        "<option>Lookatmenow Rock Platform</option>" +
        "<option>Lookout Bay</option>" +
        "<option>Lookout Point</option>" +
        "<option>Lookout Point</option>" +
        "<option>Lookout Pt</option>" +
        "<option>Lookout Pt (S 1)</option>" +
        "<option>Lookout Pt (S 2)</option>" +
        "<option>Lookout Pt (S 3)</option>" +
        "<option>Lookout Pt (W)</option>" +
        "<option>Loot Bay</option>" +
        "<option>Lords Beach</option>" +
        "<option>Lorim Pt</option>" +
        "<option>Lorne</option>" +
        "<option>Lost Beach</option>" +
        "<option>Louis Well</option>" +
        "<option>Louisa Bay (1)</option>" +
        "<option>Louisa Bay (2)</option>" +
        "<option>Louisa Bay (2)</option>" +
        "<option>Louisa Bay (4)</option>" +
        "<option>Louisa Bay (5)</option>" +
        "<option>Louisa Bay (6)</option>" +
        "<option>Louisa Bay (7)</option>" +
        "<option>Louisa Creek</option>" +
        "<option>Louisa Island</option>" +
        "<option>Louisa Point</option>" +
        "<option>Louisa River</option>" +
        "<option>Lousy Bay</option>" +
        "<option>Louth Bay</option>" +
        "<option>Louth Bay (jetty)</option>" +
        "<option>Louth Bay (north)</option>" +
        "<option>Love Bay</option>" +
        "<option>Love R</option>" +
        "<option>Lover Beach</option>" +
        "<option>Lover Beach (south)</option>" +
        "<option>Lovers Bay</option>" +
        "<option>Lovers Bay</option>" +
        "<option>Lovers Beach</option>" +
        "<option>Low Bay</option>" +
        "<option>Low Head (W)</option>" +
        "<option>Low Point</option>" +
        "<option>Low Point (E)</option>" +
        "<option>Low Point (W)</option>" +
        "<option>Low Point (east 1)</option>" +
        "<option>Low Point (east 2)</option>" +
        "<option>Low Point (east 3)</option>" +
        "<option>Low Point (east 4)</option>" +
        "<option>Low Point (west)</option>" +
        "<option>Low Pt</option>" +
        "<option>Low Rocky Point (E)</option>" +
        "<option>Low Sandy Point</option>" +
        "<option>Lowlands Beach (1)</option>" +
        "<option>Lowlands Beach (2)</option>" +
        "<option>Lowry Beach (1)</option>" +
        "<option>Lowry Beach (2)</option>" +
        "<option>Lowry Point (east)</option>" +
        "<option>Lucinda</option>" +
        "<option>Lucinda Point</option>" +
        "<option>Lucky Bay</option>" +
        "<option>Lucky Bay</option>" +
        "<option>Lucky Bay</option>" +
        "<option>Lucky Bay (1)</option>" +
        "<option>Lucky Bay (2)</option>" +
        "<option>Lucky Bay (3)</option>" +
        "<option>Lucy Ravel Point</option>" +
        "<option>Lucy Ravel Point (east 1)</option>" +
        "<option>Lucy Ravel Point (east 2)</option>" +
        "<option>Lucy Ravel Point (west 1)</option>" +
        "<option>Lucy Ravel Point (west 2)</option>" +
        "<option>Lucys Beach</option>" +
        "<option>Lufra Cove</option>" +
        "<option>Lugano</option>" +
        "<option>Lugger Bay</option>" +
        "<option>Lugger Bay</option>" +
        "<option>Lull Bay</option>" +
        "<option>Lull Bay (N 1)</option>" +
        "<option>Lull Bay (N 2)</option>" +
        "<option>Lull Bay (S)</option>" +
        "<option>Lund Hill</option>" +
        "<option>Lurline Bay</option>" +
        "<option>Lurline Point</option>" +
        "<option>Lyons Pt</option>" +
        "</dataList>";

    var mBeaches =
        "<datalist id='mylist'>" +
        "<option>MACCAULEYS HEADLAND</option>" +
        "<option>MACKENZIES</option>" +
        "<option>MACMASTERS</option>" +
        "<option>MAGIC LANDS</option>" +
        "<option>MAGIC LANDS WEST</option>" +
        "<option>MAIN</option>" +
        "<option>MAIN (BYRON BAY)</option>" +
        "<option>MAIN (SURF BEACH)</option>" +
        "<option>MAIN - BASTION POINT</option>" +
        "<option>MAIN/BROOMS HEAD</option>" +
        "<option>MAITLAND</option>" +
        "<option>MAITLAND BAY</option>" +
        "<option>MALABAR/LONG BAY</option>" +
        "<option>MALLACOOTA SPIT</option>" +
        "<option>MALONEYS</option>" +
        "<option>MALONEYS</option>" +
        "<option>MALUA BAY</option>" +
        "<option>MANLY</option>" +
        "<option>MANNING POINT</option>" +
        "<option>MANYANA</option>" +
        "<option>MARENGO</option>" +
        "<option>MARLEY</option>" +
        "<option>MAROUBRA</option>" +
        "<option>MARY COVE</option>" +
        "<option>MASSACRE BAY 1</option>" +
        "<option>MASSACRE BAY 2</option>" +
        "<option>MASSACRE BAY 3</option>" +
        "<option>MASSACRE HILL</option>" +
        "<option>MC BRIDES</option>" +
        "<option>MC KECHNIE CRAIG</option>" +
        "<option>MCGAURANS</option>" +
        "<option>MCLAUGHLINS</option>" +
        "<option>MENTONE</option>" +
        "<option>MEREWETHER</option>" +
        "<option>MERIMBULA</option>" +
        "<option>MERINGO</option>" +
        "<option>MEROO</option>" +
        "<option>MERRI</option>" +
        "<option>MERRICA</option>" +
        "<option>MERRICKS</option>" +
        "<option>MERRY</option>" +
        "<option>MID SEVEN MILE</option>" +
        "<option>MIDDLE</option>" +
        "<option>MIDDLE</option>" +
        "<option>MIDDLE BRIGHTON</option>" +
        "<option>MIDDLE BRIGHTON BATHS</option>" +
        "<option>MIDDLE CAMP</option>" +
        "<option>MIDDLE CAMP SOUTH</option>" +
        "<option>MIDDLE HEAD</option>" +
        "<option>MIDDLE NORTH</option>" +
        "<option>MIDDLE PARK</option>" +
        "<option>MIDDLE SOUTH</option>" +
        "<option>MILANESIA</option>" +
        "<option>MILLS</option>" +
        "<option>MILLS</option>" +
        "<option>MILLS EAST</option>" +
        "<option>MINERS (N)</option>" +
        "<option>MINERS NORTH</option>" +
        "<option>MINERS SOUTH</option>" +
        "<option>MINNAMURRA</option>" +
        "<option>MINNIE WATER</option>" +
        "<option>MIRANDA BAY</option>" +
        "<option>MM</option>" +
        "<option>MOGAREKA INLET</option>" +
        "<option>MOLLYMOOK</option>" +
        "<option>MONA VALE</option>" +
        "<option>MONASH GULLY</option>" +
        "<option>MONKEY POINT NORTH</option>" +
        "<option>MONTFORTS</option>" +
        "<option>MONUMENT</option>" +
        "<option>MOOBALL</option>" +
        "<option>MOON BAY</option>" +
        "<option>MOONDAH</option>" +
        "<option>MOONEE</option>" +
        "<option>MOONEE</option>" +
        "<option>MOONLIGHT</option>" +
        "<option>MOORPANYAL PARK</option>" +
        "<option>MORDIALLOC</option>" +
        "<option>MORGAN</option>" +
        "<option>MORNINGTON PARK</option>" +
        "<option>MORUYA (HEADS)</option>" +
        "<option>MORUYA HEADS 1</option>" +
        "<option>MORUYA HEADS 2</option>" +
        "<option>MORUYA HEADS 3</option>" +
        "<option>MOSQUITO BAY</option>" +
        "<option>MOTHERS/SCOUT/SHIRE HALL</option>" +
        "<option>MOUNT MARTHA NORTH</option>" +
        "<option>MOUNT MARTHA POINT</option>" +
        "<option>MOUNT MARTHA SOUTH</option>" +
        "<option>MOUNTS BAY</option>" +
        "<option>MOUTRYS POINT</option>" +
        "<option>MOWARRY POINT 1</option>" +
        "<option>MOWARRY POINT 2</option>" +
        "<option>MUELLER RIVER</option>" +
        "<option>MUELLER RIVER SOUTH</option>" +
        "<option>MULLAWAY</option>" +
        "<option>MULLAWAY HEAD</option>" +
        "<option>MULLIMBURRA POINT</option>" +
        "<option>MULLIMBURRA POINT SOUTH 1</option>" +
        "<option>MULLIMBURRA POINT SOUTH 2</option>" +
        "<option>MULLIMBURRA POINT SOUTH 3</option>" +
        "<option>MUNGANNO POINT 1</option>" +
        "<option>MUNGANNO POINT 2</option>" +
        "<option>MUNGO</option>" +
        "<option>MURANE BAY</option>" +
        "<option>MURRAH-BUNGA</option>" +
        "<option>MURRAMARANG</option>" +
        "<option>MURRAYS</option>" +
        "<option>MUSK CREEK</option>" +
        "<option>MUSSEL ROCKS</option>" +
        "<option>MYRTLE</option>" +
        "<option>MYSTERY BAY</option>" +
        "<option>Mabel Cove</option>" +
        "<option>Mabel Cove (1)</option>" +
        "<option>Mabel Cove (2)</option>" +
        "<option>Mabel Cove (3)</option>" +
        "<option>Mabel Cove (N)</option>" +
        "<option>MacDonald R</option>" +
        "<option>MacDonald R (N)</option>" +
        "<option>MacDonald-Doughboy R</option>" +
        "<option>MacGregor Pt (N 1)</option>" +
        "<option>MacGregor Pt (N 2)</option>" +
        "<option>MacGregor Pt (N 3)</option>" +
        "<option>MacGregor Pt (N 4)</option>" +
        "<option>MacKinnon Pt</option>" +
        "<option>MacKinnon Pt (S)</option>" +
        "<option>MacMillan R (N)</option>" +
        "<option>Macassans (N 1)</option>" +
        "<option>Macassans (N 2)</option>" +
        "<option>Macassans Beach</option>" +
        "<option>Macdonald Point (south)</option>" +
        "<option>Macdonald Point (west 1)</option>" +
        "<option>Macdonald Point (west 2)</option>" +
        "<option>Mace Beach</option>" +
        "<option>Mace Beach (S)</option>" +
        "<option>Machans</option>" +
        "<option>Mackay</option>" +
        "<option>Mackay Harbour (boat ramp)</option>" +
        "<option>Mackay Harbour (north)</option>" +
        "<option>Mackenzie Anchorage (N 1)</option>" +
        "<option>Mackenzie Anchorage (N 2)</option>" +
        "<option>Mackenzie Anchorage (N 3)</option>" +
        "<option>Mackeral</option>" +
        "<option>Maclean Point</option>" +
        "<option>Maclean Point (north)</option>" +
        "<option>Maclean Point (south)</option>" +
        "<option>Macquarie Heads</option>" +
        "<option>Macs-Tiddy Widdy</option>" +
        "<option>Macushla Cove</option>" +
        "<option>Maddons Cove</option>" +
        "<option>Madfish Bay (1)</option>" +
        "<option>Madfish Bay (2)</option>" +
        "<option>Madfish Bay (3)</option>" +
        "<option>Magazine Island</option>" +
        "<option>Magies Reef</option>" +
        "<option>Magies Reef (N)</option>" +
        "<option>Maheno</option>" +
        "<option>Mahon Pool Rock Platform</option>" +
        "<option>Main Beach</option>" +
        "<option>Main Beach</option>" +
        "<option>Main Beach (Coochiemudlo Island)</option>" +
        "<option>Mainwaring Inlet</option>" +
        "<option>Mainwaring Inlet (N 1)</option>" +
        "<option>Mainwaring Inlet (N 2)</option>" +
        "<option>Maitland Bay</option>" +
        "<option>Maitland River (E 1)</option>" +
        "<option>Maitland River (E 2)</option>" +
        "<option>Maitland River (E 3)</option>" +
        "<option>Maitland River (E)</option>" +
        "<option>Maitland River (W 1)</option>" +
        "<option>Maitland River (W 2)</option>" +
        "<option>Maitland River (W 3)</option>" +
        "<option>Maitland River (W 4)</option>" +
        "<option>Maitland River (W)</option>" +
        "<option>Majari Creek (E 1)</option>" +
        "<option>Majari Creek (E 2)</option>" +
        "<option>Majari Creek (E 3)</option>" +
        "<option>Majari Creek (W)</option>" +
        "<option>Malahurra Springs (N 1)</option>" +
        "<option>Malahurra Springs (N 2)</option>" +
        "<option>Malaman Ck</option>" +
        "<option>Malay Bay (E 1)</option>" +
        "<option>Malay Bay (E 2)</option>" +
        "<option>Malay Bay (E 3)</option>" +
        "<option>Malay Bay (E 4)</option>" +
        "<option>Malay Bay (E 4)</option>" +
        "<option>Malay Bay (E 6)</option>" +
        "<option>Malay Bay (E 7)</option>" +
        "<option>Malay Bay (E 8)</option>" +
        "<option>Malay Bay (E 9)</option>" +
        "<option>Malay Roads (1)</option>" +
        "<option>Malay Roads (10)</option>" +
        "<option>Malay Roads (11)</option>" +
        "<option>Malay Roads (2)</option>" +
        "<option>Malay Roads (22)</option>" +
        "<option>Malay Roads (23)</option>" +
        "<option>Malay Roads (24)</option>" +
        "<option>Malay Roads (25)</option>" +
        "<option>Malay Roads (26)</option>" +
        "<option>Malay Roads (27)</option>" +
        "<option>Malay Roads (28)</option>" +
        "<option>Malay Roads (3)</option>" +
        "<option>Malay Roads (4)</option>" +
        "<option>Malay Roads (5)</option>" +
        "<option>Malay Roads (6)</option>" +
        "<option>Malay Roads (7)</option>" +
        "<option>Malay Roads (8)</option>" +
        "<option>Malay Roads (9)</option>" +
        "<option>Malga Pt (W 1)</option>" +
        "<option>Malga Pt (W 2)</option>" +
        "<option>Manakoora</option>" +
        "<option>Manann</option>" +
        "<option>Mandalay Beach</option>" +
        "<option>Mandora</option>" +
        "<option>Mandu Mandu</option>" +
        "<option>Mandura</option>" +
        "<option>Mangrove Bay</option>" +
        "<option>Mangrove Bay (N 1)</option>" +
        "<option>Mangrove Bay (N 2)</option>" +
        "<option>Mangrove Bay (N 3)</option>" +
        "<option>Mangrove Bay (S)</option>" +
        "<option>Mangrove Creek</option>" +
        "<option>Mangrove Point</option>" +
        "<option>Mangrove Pt (N)</option>" +
        "<option>Mangrove Pt (S 1)</option>" +
        "<option>Mangrove Pt (S 2)</option>" +
        "<option>Maningrida (N)</option>" +
        "<option>Maningrida (S 1)</option>" +
        "<option>Maningrida (S 2)</option>" +
        "<option>Maningrida (boat ramp)</option>" +
        "<option>Manly Cove E</option>" +
        "<option>Manly Cove W</option>" +
        "<option>Manly Point</option>" +
        "<option>Marasella Bay (1)</option>" +
        "<option>Marasella Bay (2)</option>" +
        "<option>Marasella Bay (3)</option>" +
        "<option>Marasella Bay (4)</option>" +
        "<option>Marasella Bay (5)</option>" +
        "<option>Marble Bay</option>" +
        "<option>Marcoola</option>" +
        "<option>Marcoola (Yaroomba-Mudjimba)</option>" +
        "<option>Marcus</option>" +
        "<option>Margaret Bay (E 1)</option>" +
        "<option>Margaret Bay (E 2)</option>" +
        "<option>Margaret Cove</option>" +
        "<option>Margaret Is (E 1)</option>" +
        "<option>Margaret Is (E 2)</option>" +
        "<option>Margaret Is (N 1)</option>" +
        "<option>Margaret Is (N 2)</option>" +
        "<option>Margaret Is (W 1)</option>" +
        "<option>Margaret Is (W 2)</option>" +
        "<option>Margaret Is (W 3)</option>" +
        "<option>Margaret River (N)</option>" +
        "<option>Margaret River car park</option>" +
        "<option>Margaret River mouth</option>" +
        "<option>Margaret Rocks</option>" +
        "<option>Margaret Rocks (S 1)</option>" +
        "<option>Margaret Rocks (S 2)</option>" +
        "<option>Margaret Rocks (S 3)</option>" +
        "<option>Margaret St</option>" +
        "<option>Margreys Corner</option>" +
        "<option>Maria Creek</option>" +
        "<option>Maria Pt (E)</option>" +
        "<option>Maria Pt (N)</option>" +
        "<option>Marion Bay</option>" +
        "<option>Marion Beach</option>" +
        "<option>Marion Creek</option>" +
        "<option>Mariposa (S)</option>" +
        "<option>Mariposa Beach</option>" +
        "<option>Mariposa Point</option>" +
        "<option>Marjorie Bay</option>" +
        "<option>Marlbemup</option>" +
        "<option>Marlbemup (W 1)</option>" +
        "<option>Marlbemup (W 2)</option>" +
        "<option>Marley Head</option>" +
        "<option>Marligan Creek</option>" +
        "<option>Marmion Beach</option>" +
        "<option>Maroochydore</option>" +
        "<option>Maroochydore-Alex Headland</option>" +
        "<option>Maroubra Beach</option>" +
        "<option>Marra Garra</option>" +
        "<option>Marrawah</option>" +
        "<option>Mars Bluff</option>" +
        "<option>Marshall Beach (N)</option>" +
        "<option>Marshall Beach (S)</option>" +
        "<option>Marshes Beach</option>" +
        "<option>Mary Ann Bay</option>" +
        "<option>Mary Ann Cove</option>" +
        "<option>Mary Ann Cove (N)</option>" +
        "<option>Mary Ann Haven</option>" +
        "<option>Mary Ann Point</option>" +
        "<option>Mary Cove</option>" +
        "<option>Mary Cove (E)</option>" +
        "<option>Maslins Beach</option>" +
        "<option>Mason Bay</option>" +
        "<option>Mason Bay (E 1)</option>" +
        "<option>Mason Bay (E 2)</option>" +
        "<option>Mason Bay (E 3)</option>" +
        "<option>Mason Bay(W 1)</option>" +
        "<option>Mason Bay(W 2)</option>" +
        "<option>Mason Bay(W 3)</option>" +
        "<option>Massena Bay</option>" +
        "<option>Massena Bay (south 1)</option>" +
        "<option>Massena Bay (south 2)</option>" +
        "<option>Massy Ck (S 1)</option>" +
        "<option>Massy Ck (S 2)</option>" +
        "<option>Maswon Bay (1)</option>" +
        "<option>Maswon Bay (2)</option>" +
        "<option>Mateys Gulch</option>" +
        "<option>Matjaagnur Pt (N 1)</option>" +
        "<option>Matjaagnur Pt (N 2)</option>" +
        "<option>Matta Matta</option>" +
        "<option>Mattingleys Beach</option>" +
        "<option>Matts Point (north 1)</option>" +
        "<option>Matts Point (north 2)</option>" +
        "<option>Matts Point (south 1)</option>" +
        "<option>Matts Point (south 2)</option>" +
        "<option>Maud Bay</option>" +
        "<option>Mauds Landing</option>" +
        "<option>Maupertuis Bay (1)</option>" +
        "<option>Maupertuis Bay (2)</option>" +
        "<option>Maupertuis Bay (3)</option>" +
        "<option>Maupertuis Bay (4)</option>" +
        "<option>Maurouard Beach</option>" +
        "<option>Mavourneen Rocks (N)</option>" +
        "<option>Mavourneen Rocks (S)</option>" +
        "<option>Maxies Point (N 1)</option>" +
        "<option>Maxies Point (N 2)</option>" +
        "<option>Maxies Point (N 3)</option>" +
        "<option>Maxies Point (N 4)</option>" +
        "<option>Maxies Point (N 5)</option>" +
        "<option>Maxies Point (S 1)</option>" +
        "<option>Maxies Point (S 2)</option>" +
        "<option>Maxies Point (S 3)</option>" +
        "<option>Maxwell Well</option>" +
        "<option>Mayfield Bay (N 1)</option>" +
        "<option>Mayfield Bay (N 2)</option>" +
        "<option>Mayfield Beach</option>" +
        "<option>Mayfield Point</option>" +
        "<option>Mays Beach</option>" +
        "<option>Mays Hole</option>" +
        "<option>Maysons Bluff (S)</option>" +
        "<option>Mazzoletti (E)</option>" +
        "<option>Mazzoletti Beach</option>" +
        "<option>McBrides Point</option>" +
        "<option>McDowall Rivulet</option>" +
        "<option>McEwens Beach</option>" +
        "<option>McEwens Beach (north)</option>" +
        "<option>McGinness Gut</option>" +
        "<option>McGinness Gut (N)</option>" +
        "<option>McGowan Island</option>" +
        "<option>McGowan Island (N 1)</option>" +
        "<option>McGowan Island (N 2)</option>" +
        "<option>McIntyre Beach (east)</option>" +
        "<option>McIntyre Beach (west)</option>" +
        "<option>McIntyre Pt (1)</option>" +
        "<option>McIntyre Pt (2)</option>" +
        "<option>McIntyre Pt (3)</option>" +
        "<option>McIntyres Beach</option>" +
        "<option>McIvor R (S 1)</option>" +
        "<option>McIvor R (S 2)</option>" +
        "<option>McIvor R (S 3)</option>" +
        "<option>McKays Gulch</option>" +
        "<option>McKell Park</option>" +
        "<option>McKelson Creek (N)</option>" +
        "<option>McKelson Creek (S)</option>" +
        "<option>McKenna Point (E)</option>" +
        "<option>McKenna Point (W)</option>" +
        "<option>McKenzie Landing</option>" +
        "<option>McKenzies Beach 1</option>" +
        "<option>McKenzies Beach 2</option>" +
        "<option>McLachlan Point (east)</option>" +
        "<option>McLachlan Point (south)</option>" +
        "<option>McLachlan Point (west 1)</option>" +
        "<option>McLachlan Point (west 2)</option>" +
        "<option>McLeod Harbour (1)</option>" +
        "<option>McLeod Harbour (2)</option>" +
        "<option>McLeod Harbour (3)</option>" +
        "<option>McLeod St Beach</option>" +
        "<option>McLeod landing</option>" +
        "<option>Meelup Beach</option>" +
        "<option>Meerim (N 1)</option>" +
        "<option>Meerim (N 2)</option>" +
        "<option>Meerim Beach</option>" +
        "<option>Meerup</option>" +
        "<option>Meetyou Creek</option>" +
        "<option>Melamen Plain</option>" +
        "<option>Melros</option>" +
        "<option>Melville Bay (1)</option>" +
        "<option>Melville Bay (10)</option>" +
        "<option>Melville Bay (11)</option>" +
        "<option>Melville Bay (12)</option>" +
        "<option>Melville Bay (13)</option>" +
        "<option>Melville Bay (14)</option>" +
        "<option>Melville Bay (15)</option>" +
        "<option>Melville Bay (2)</option>" +
        "<option>Melville Bay (27)</option>" +
        "<option>Melville Bay (28)</option>" +
        "<option>Melville Bay (29)</option>" +
        "<option>Melville Bay (3)</option>" +
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
        "<option>Melville Bay (41)</option>" +
        "<option>Melville Bay (42)</option>" +
        "<option>Melville Bay (43)</option>" +
        "<option>Melville Bay (44)</option>" +
        "<option>Melville Bay (45)</option>" +
        "<option>Melville Bay (5)</option>" +
        "<option>Melville Bay (6)</option>" +
        "<option>Melville Bay (7)</option>" +
        "<option>Melville Bay (8)</option>" +
        "<option>Melville Bay (9)</option>" +
        "<option>Memory Cove</option>" +
        "<option>Memory Cove (north 1)</option>" +
        "<option>Memory Cove (north 2)</option>" +
        "<option>Mena Hill (1)</option>" +
        "<option>Mena Hill (2)</option>" +
        "<option>Mena Hill (3)</option>" +
        "<option>Mena Hill (4)</option>" +
        "<option>Mena Hill (5)</option>" +
        "<option>Menai Hills (1)</option>" +
        "<option>Menai Hills (2)</option>" +
        "<option>Menai Hills (3)</option>" +
        "<option>Menai Hills (4)</option>" +
        "<option>Menbinup</option>" +
        "<option>Menbinup (W 1)</option>" +
        "<option>Menbinup (W 2)</option>" +
        "<option>Mennie Hill (south 1)</option>" +
        "<option>Mennie Hill (south 2)</option>" +
        "<option>Mennie Hill (south 3)</option>" +
        "<option>Mentmore (north)</option>" +
        "<option>Mentmore Beach</option>" +
        "<option>Meragang Beach</option>" +
        "<option>Merdayerrah 1</option>" +
        "<option>Merdayerrah 10</option>" +
        "<option>Merdayerrah 11</option>" +
        "<option>Merdayerrah 2</option>" +
        "<option>Merdayerrah 3</option>" +
        "<option>Merdayerrah 4</option>" +
        "<option>Merdayerrah 5</option>" +
        "<option>Merdayerrah 6</option>" +
        "<option>Merdayerrah 7</option>" +
        "<option>Merdayerrah 8</option>" +
        "<option>Merdayerrah 9</option>" +
        "<option>Merdayerrah Sandpatch</option>" +
        "<option>Meredith River mouth</option>" +
        "<option>Merimbula Head</option>" +
        "<option>Merimbula-Pambula</option>" +
        "<option>Mermaid Beach</option>" +
        "<option>Mermaid Pt (W 1)</option>" +
        "<option>Mermaid Pt (W 2)</option>" +
        "<option>Mermaids Inlet</option>" +
        "<option>Mermain Beach</option>" +
        "<option>Meroo Head</option>" +
        "<option>Mesa Camp</option>" +
        "<option>Messum Hill</option>" +
        "<option>Messum Hill (N)</option>" +
        "<option>Messum Hill (S)</option>" +
        "<option>Meteor Bay</option>" +
        "<option>Mettams Pool</option>" +
        "<option>Mexican Hat</option>" +
        "<option>Mexican Hat (west)</option>" +
        "<option>Miaboolya Beach</option>" +
        "<option>Miami Beach</option>" +
        "<option>Mica Beach</option>" +
        "<option>Mick Ready</option>" +
        "<option>Mickeys Bay (N)</option>" +
        "<option>Mickeys Bay (S)</option>" +
        "<option>Middini Beach</option>" +
        "<option>Middle</option>" +
        "<option>Middle</option>" +
        "<option>Middle Beach</option>" +
        "<option>Middle Bluff</option>" +
        "<option>Middle Bluff (S 1)</option>" +
        "<option>Middle Bluff (S 2)</option>" +
        "<option>Middle Bluff (S 3)</option>" +
        "<option>Middle Creek (E)</option>" +
        "<option>Middle Creek (W)</option>" +
        "<option>Middle Head</option>" +
        "<option>Middle Head (N)</option>" +
        "<option>Middle Head (S)</option>" +
        "<option>Middle Island</option>" +
        "<option>Middle Lagoon</option>" +
        "<option>Middle Lagoon (S 1)</option>" +
        "<option>Middle Lagoon (S 2)</option>" +
        "<option>Middle Passage (1)</option>" +
        "<option>Middle Passage (2)</option>" +
        "<option>Middle Point (east)</option>" +
        "<option>Middle Point (west))</option>" +
        "<option>Middle Pt (N)</option>" +
        "<option>Middle Pt (W 2)</option>" +
        "<option>Middle Pt (W 3)</option>" +
        "<option>Middle Pt (W 4)</option>" +
        "<option>Middle Pt (W 5)</option>" +
        "<option>Middle Pt (W1)</option>" +
        "<option>Middle Rock</option>" +
        "<option>Middle Rock (E 1)</option>" +
        "<option>Middle Rock (E 2)</option>" +
        "<option>Middle Rock (E 3)</option>" +
        "<option>Middle Rocks (1)</option>" +
        "<option>Middle Rocks (2)</option>" +
        "<option>Middleton</option>" +
        "<option>Middleton</option>" +
        "<option>Middleton Beach</option>" +
        "<option>Middleton Rocks</option>" +
        "<option>Midgeton</option>" +
        "<option>Midjali Point (east 1)</option>" +
        "<option>Midjali Point (east 2)</option>" +
        "<option>Midjali Point (east 3)</option>" +
        "<option>Midjali Point (east 4)</option>" +
        "<option>Midjali Point (south 2</option>" +
        "<option>Midjali Point (south 2</option>" +
        "<option>Midjali Point (south 3)</option>" +
        "<option>Midway Beach</option>" +
        "<option>Migo Island</option>" +
        "<option>Mildura Road (1)</option>" +
        "<option>Mildura Road (2)</option>" +
        "<option>Miles Beach</option>" +
        "<option>Miles Is (S 1)</option>" +
        "<option>Miles Is (S 2)</option>" +
        "<option>Milingimbi</option>" +
        "<option>Milingimbi(S)</option>" +
        "<option>Milk Beach</option>" +
        "<option>Millers Bay (N)</option>" +
        "<option>Millers Bay (S)</option>" +
        "<option>Milligan Ck</option>" +
        "<option>Mills Beach</option>" +
        "<option>Mimosa Rocks</option>" +
        "<option>Mindarie (S)</option>" +
        "<option>Mindarie Keys (N 1)</option>" +
        "<option>Mindarie Keys (N 2)</option>" +
        "<option>Mindarie Keys (N 3)</option>" +
        "<option>Mindarie Keys (N)</option>" +
        "<option>Mindarie Keys groyne (N)</option>" +
        "<option>Mindarie Keys groyne (S)</option>" +
        "<option>Mindil Beach</option>" +
        "<option>Mines Creek (N)</option>" +
        "<option>Mines Creek (S)</option>" +
        "<option>Minnie Ck</option>" +
        "<option>Minnie Ck (S)</option>" +
        "<option>Minntirri (1)</option>" +
        "<option>Minntirri (2)</option>" +
        "<option>Miowera</option>" +
        "<option>Mirare Point</option>" +
        "<option>Misery Bay (point)</option>" +
        "<option>Misery Beach</option>" +
        "<option>Mission Bay (E)</option>" +
        "<option>Mission Bay (W)</option>" +
        "<option>Mission Beach</option>" +
        "<option>Missionary Bay (1)</option>" +
        "<option>Missionary Bay (2)</option>" +
        "<option>Mississippi Hill</option>" +
        "<option>Mississippi Point</option>" +
        "<option>Mitchell R (N 1)</option>" +
        "<option>Mitchell R (N 2)</option>" +
        "<option>Mitchells Beach</option>" +
        "<option>Mitchells Reef (S 1)</option>" +
        "<option>Mitchells Reef (S 2)</option>" +
        "<option>Mitlers Cove</option>" +
        "<option>Miwal</option>" +
        "<option>Miwul</option>" +
        "<option>Moana</option>" +
        "<option>Moffat</option>" +
        "<option>Mokami</option>" +
        "<option>Mokami (north 1)</option>" +
        "<option>Mokami (north 2)</option>" +
        "<option>Mokami (north 3)</option>" +
        "<option>Molongle Creek</option>" +
        "<option>Mon Repos</option>" +
        "<option>Mona Vale Headland</option>" +
        "<option>Monk Nay (N)</option>" +
        "<option>Monk Nay (S)</option>" +
        "<option>Monkey</option>" +
        "<option>Monkey (north)</option>" +
        "<option>Monkey Mia</option>" +
        "<option>Monkey Mia (S)</option>" +
        "<option>Montague Sound (E 1)</option>" +
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
        "<option>Montague Sound (E 2)</option>" +
        "<option>Montague Sound (E 20)</option>" +
        "<option>Montague Sound (E 21)</option>" +
        "<option>Montague Sound (E 22)</option>" +
        "<option>Montague Sound (E 23)</option>" +
        "<option>Montague Sound (E 3)</option>" +
        "<option>Montague Sound (E 4)</option>" +
        "<option>Montague Sound (E 5)</option>" +
        "<option>Montague Sound (E 6)</option>" +
        "<option>Montague Sound (E 7)</option>" +
        "<option>Montague Sound (E 8)</option>" +
        "<option>Montague Sound (E 8)</option>" +
        "<option>Montague Sound 1</option>" +
        "<option>Montague Sound 10</option>" +
        "<option>Montague Sound 11</option>" +
        "<option>Montague Sound 12</option>" +
        "<option>Montague Sound 13</option>" +
        "<option>Montague Sound 14</option>" +
        "<option>Montague Sound 15</option>" +
        "<option>Montague Sound 16</option>" +
        "<option>Montague Sound 17</option>" +
        "<option>Montague Sound 18</option>" +
        "<option>Montague Sound 19</option>" +
        "<option>Montague Sound 2</option>" +
        "<option>Montague Sound 20</option>" +
        "<option>Montague Sound 21</option>" +
        "<option>Montague Sound 22</option>" +
        "<option>Montague Sound 23</option>" +
        "<option>Montague Sound 3</option>" +
        "<option>Montague Sound 4</option>" +
        "<option>Montague Sound 5</option>" +
        "<option>Montague Sound 6</option>" +
        "<option>Montague Sound 7</option>" +
        "<option>Montague Sound 8</option>" +
        "<option>Montague Sound 9</option>" +
        "<option>Monument Hill</option>" +
        "<option>Monument Point</option>" +
        "<option>Mooball - New Brighton</option>" +
        "<option>Mooloolaba</option>" +
        "<option>Mooly Creek</option>" +
        "<option>Mooly Creek (east 1)</option>" +
        "<option>Mooly Creek (east 2)</option>" +
        "<option>Moon Point</option>" +
        "<option>Moon River</option>" +
        "<option>Moon Rock pt (1)</option>" +
        "<option>Moon Rock pt (2)</option>" +
        "<option>Moon Rock pt (3)</option>" +
        "<option>Moon Rock pt (4)</option>" +
        "<option>Moon Rock pt (5)</option>" +
        "<option>Moon Rock pt (6)</option>" +
        "<option>Moon Rock pt (7)</option>" +
        "<option>Moonee Rock Platform</option>" +
        "<option>Moonkam Ck</option>" +
        "<option>Moonlight Bay</option>" +
        "<option>Moonta Bay</option>" +
        "<option>Moonta Bay (north)</option>" +
        "<option>Moonta jetty</option>" +
        "<option>Moore Park</option>" +
        "<option>Moore River (N)</option>" +
        "<option>Moore River (S)</option>" +
        "<option>Moores Inlet</option>" +
        "<option>Moorland Beach</option>" +
        "<option>Moorland Point (E)</option>" +
        "<option>Mordialloc-Mentone</option>" +
        "<option>Morehead</option>" +
        "<option>Morgan beach</option>" +
        "<option>Morrison Beach</option>" +
        "<option>Mortimer Bay (N)</option>" +
        "<option>Moses Rock</option>" +
        "<option>Moses Rock (N 1)</option>" +
        "<option>Moses Rock (N 2)</option>" +
        "<option>Moses Rock (S 1)</option>" +
        "<option>Moses Rock (S 2)</option>" +
        "<option>Mosquito Hill</option>" +
        "<option>Mosquito Inlet (N)</option>" +
        "<option>Mosquito Pt (E 1)</option>" +
        "<option>Mosquito Pt (E 2)</option>" +
        "<option>Mosquito Pt (E 3)</option>" +
        "<option>Mosquito Pt (E 4)</option>" +
        "<option>Mosquito Pt (E 5)</option>" +
        "<option>Mosquito Pt (W 1)</option>" +
        "<option>Mosquito Pt (W 2)</option>" +
        "<option>Mosquito Pt (W 3)</option>" +
        "<option>Moss Glen</option>" +
        "<option>Moss Glen (S)</option>" +
        "<option>Mother Hayles Beach</option>" +
        "<option>Mounce and Battye Rocks</option>" +
        "<option>Mount Alexandria</option>" +
        "<option>Mount Beach</option>" +
        "<option>Mount Bonner (N 1)</option>" +
        "<option>Mount Bonner (N 2)</option>" +
        "<option>Mount Bonner (N 3)</option>" +
        "<option>Mount Bonner (N 4)</option>" +
        "<option>Mount Bonner (N 5)</option>" +
        "<option>Mount Bonner (S 1)</option>" +
        "<option>Mount Bonner (S 2)</option>" +
        "<option>Mount Bonner (S 3)</option>" +
        "<option>Mount Bonner (S 4)</option>" +
        "<option>Mount Bonner (S 5)</option>" +
        "<option>Mount Bonner (S 6)</option>" +
        "<option>Mount Bramston</option>" +
        "<option>Mount Bruce</option>" +
        "<option>Mount Bruce (east 1)</option>" +
        "<option>Mount Bruce (east 2)</option>" +
        "<option>Mount Bruce (spit)</option>" +
        "<option>Mount Bruce (west)</option>" +
        "<option>Mount Cameron (N 1)</option>" +
        "<option>Mount Cameron (N 2)</option>" +
        "<option>Mount Cameron Beach</option>" +
        "<option>Mount Carmel</option>" +
        "<option>Mount Carmel (north)</option>" +
        "<option>Mount Carmel (south)</option>" +
        "<option>Mount Curlewis</option>" +
        "<option>Mount Curlewis (east)</option>" +
        "<option>Mount Curlewis (west)</option>" +
        "<option>Mount Gordon</option>" +
        "<option>Mount Grainger</option>" +
        "<option>Mount Grainger (north)</option>" +
        "<option>Mount Greenly (1)</option>" +
        "<option>Mount Greenly (2)</option>" +
        "<option>Mount Greenly (3)</option>" +
        "<option>Mount Greenly (4)</option>" +
        "<option>Mount Greenly (5)</option>" +
        "<option>Mount Gullett</option>" +
        "<option>Mount Mambray</option>" +
        "<option>Mount Martin (1)</option>" +
        "<option>Mount Martin (2)</option>" +
        "<option>Mount McIntosh (1)</option>" +
        "<option>Mount McIntosh (2)</option>" +
        "<option>Mount McIntosh (3)</option>" +
        "<option>Mount McIntosh (4)</option>" +
        "<option>Mount Rough</option>" +
        "<option>Mount Salt</option>" +
        "<option>Mount Salt (N)</option>" +
        "<option>Mount Salt (S 1)</option>" +
        "<option>Mount Salt (S 2)</option>" +
        "<option>Mount Windham (1)</option>" +
        "<option>Mount Windham (2)</option>" +
        "<option>Mount Young</option>" +
        "<option>Mount Young (1)</option>" +
        "<option>Mountain Ck</option>" +
        "<option>Mountain Ck (E)</option>" +
        "<option>Mountnorris Bay (1)</option>" +
        "<option>Mountnorris Bay (2)</option>" +
        "<option>Mountnorris Bay (3)</option>" +
        "<option>Mountnorris Bay (4)</option>" +
        "<option>Mountnorris Bay (5)</option>" +
        "<option>Mountnorris Bay (6)</option>" +
        "<option>Mourawaring Point (Second Point)</option>" +
        "<option>Mowbowra Creek</option>" +
        "<option>Mowbowra Well</option>" +
        "<option>Moyle River (north)</option>" +
        "<option>Mt Alexander (N 1)</option>" +
        "<option>Mt Alexander (N 2)</option>" +
        "<option>Mt Alexander (N 3)</option>" +
        "<option>Mt Alexander (N 4)</option>" +
        "<option>Mt Alexander (N 5)</option>" +
        "<option>Mt Alexander (N 6)</option>" +
        "<option>Mt Dundas</option>" +
        "<option>Mt Dundas (N)</option>" +
        "<option>Mt Dundas (S 1)</option>" +
        "<option>Mt Dundas (S 2)</option>" +
        "<option>Mt Dundas (S 3)</option>" +
        "<option>Mt Grindall (N 1)</option>" +
        "<option>Mt Grindall (N 2)</option>" +
        "<option>Mt Grindall (N 3)</option>" +
        "<option>Mt Grindall (N 4)</option>" +
        "<option>Mt Grindall (N 5)</option>" +
        "<option>Mt Younghusband (north)</option>" +
        "<option>Mt Younghusband (south)</option>" +
        "<option>Muara Beach</option>" +
        "<option>Muddy Bay</option>" +
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
        "<option>Mudhamul</option>" +
        "<option>Mudjimba</option>" +
        "<option>Mudjimba (Ninderry-Twin Waters)</option>" +
        "<option>Muir Rock</option>" +
        "<option>Muirs (W 1)</option>" +
        "<option>Muirs (W 2)</option>" +
        "<option>Muirs (W 3)</option>" +
        "<option>Muirs Beach</option>" +
        "<option>Mulambin Beach</option>" +
        "<option>Mulcahy Bay</option>" +
        "<option>Mulcahy Bay (S)</option>" +
        "<option>Mulcahy River</option>" +
        "<option>Mulla Mulla Downs Creek</option>" +
        "<option>Mulla Mulla Downs Creek (W 1)</option>" +
        "<option>Mulla Mulla Downs Creek (W 2)</option>" +
        "<option>Mullalong Beach</option>" +
        "<option>Mullalong Beach (north 1)</option>" +
        "<option>Mullalong Beach (north 2)</option>" +
        "<option>Mullalong Beach (north 3)</option>" +
        "<option>Mullalong Beach (north 4)</option>" +
        "<option>Mullalong Beach (north 5)</option>" +
        "<option>Mullaloo (N 1)</option>" +
        "<option>Mullaloo (N)</option>" +
        "<option>Mullaloo Beach</option>" +
        "<option>Mulligan Bay</option>" +
        "<option>Muloowurite Point (north 1)</option>" +
        "<option>Muloowurite Point (north 2)</option>" +
        "<option>Muloowurite Point (south 1)</option>" +
        "<option>Muloowurite Point (south 2)</option>" +
        "<option>Muloowurite Point (south 3)</option>" +
        "<option>Muloowurite Point (south 4)</option>" +
        "<option>Munda Beach</option>" +
        "<option>Munderoo Bay</option>" +
        "<option>Mundrabilla</option>" +
        "<option>Munganno Point</option>" +
        "<option>Munglinup (E 1)</option>" +
        "<option>Munglinup (E 2)</option>" +
        "<option>Munglinup (E 3)</option>" +
        "<option>Munglinup (E 4)</option>" +
        "<option>Munglinup (E 5)</option>" +
        "<option>Munglinup Beach</option>" +
        "<option>Munglinup Beach (W 1)</option>" +
        "<option>Munglinup Beach (W 2)</option>" +
        "<option>Mungora Rocks</option>" +
        "<option>Munroe Point (1)</option>" +
        "<option>Munroe Point (2)</option>" +
        "<option>Munroe Point (3)</option>" +
        "<option>Muntak Creek</option>" +
        "<option>Muntak Creek (N)</option>" +
        "<option>Murdeh Pt</option>" +
        "<option>Murdering Point (north)</option>" +
        "<option>Murdoch Pt</option>" +
        "<option>Murdoch Pt (S 1)</option>" +
        "<option>Murdoch Pt (S 2)</option>" +
        "<option>Murdochs (W 2)</option>" +
        "<option>Murdochs (W 2)</option>" +
        "<option>Murdochs Beach</option>" +
        "<option>Murninnie (north)</option>" +
        "<option>Murninnie (south 1)</option>" +
        "<option>Murninnie (south 2)</option>" +
        "<option>Murninnie Beach</option>" +
        "<option>Murrah Head</option>" +
        "<option>Murray Flat Beach</option>" +
        "<option>Murray Pt-McIvor R</option>" +
        "<option>Murray R-Dallachy Ck</option>" +
        "<option>Murrays Bay</option>" +
        "<option>Murrippi (Free) Beach</option>" +
        "<option>Murrumbulga Point</option>" +
        "<option>Murunna Point</option>" +
        "<option>Musk Beach</option>" +
        "<option>Musselroe Point (E)</option>" +
        "<option>Musselroe Point (S 1)</option>" +
        "<option>Musselroe Point (S 2)</option>" +
        "<option>Musselroe Point (W)</option>" +
        "<option>Mutee Head</option>" +
        "<option>Mutton Bird Island</option>" +
        "<option>Myall Creek</option>" +
        "<option>Myalup-Cape Bouvard</option>" +
        "<option>Myaoola Bay (E 1)</option>" +
        "<option>Myaoola Bay (E 2)</option>" +
        "<option>Myaoola Bay (E 3)</option>" +
        "<option>Myaoola Bay (E 4)</option>" +
        "<option>Myaoola Bay (W 1)</option>" +
        "<option>Myaoola Bay (W 2)</option>" +
        "<option>Myaoola Bay (W 3)</option>" +
        "<option>Mylies Beach</option>" +
        "<option>Myola Bluff</option>" +
        "<option>Myola Bluff (S 1)</option>" +
        "<option>Myola Bluff (S 2)</option>" +
        "<option>Myola Bluff (S 3)</option>" +
        "<option>Myola Bluff (S 4)</option>" +
        "<option>Myola Bluff (S 5)</option>" +
        "<option>Myola Bluff (S 6)</option>" +
        "<option>Myponga beach</option>" +
        "<option>Myponie Point (north 1)</option>" +
        "<option>Myponie Point (north 2)</option>" +
        "<option>Myridi Bay (E 1)</option>" +
        "<option>Myridi Bay (E 2)</option>" +
        "<option>Myridi Bay (W)</option>" +
        "</dataList>";

    var nBeaches =
        "<datalist id='mylist'>" +
        "<option>NADGEE</option>" +
        "<option>NADGEE LAKE</option>" +
        "<option>NADGEE POINT</option>" +
        "<option>NAMBUCCA NORTH</option>" +
        "<option>NAROOMA</option>" +
        "<option>NARRABEEN</option>" +
        "<option>NARRAWALLEE</option>" +
        "<option>NAUTILUS/PELICAN</option>" +
        "<option>NAVY/SANDY POINT</option>" +
        "<option>NELSON</option>" +
        "<option>NELSON</option>" +
        "<option>NELSON BAY 1</option>" +
        "<option>NELSON BAY 2</option>" +
        "<option>NELSON BAY 3</option>" +
        "<option>NEPEAN BAY 1</option>" +
        "<option>NEPEAN BAY 2</option>" +
        "<option>NEPEAN BAY 3</option>" +
        "<option>NEPEAN HILL</option>" +
        "<option>NEW BRIGHTON</option>" +
        "<option>NEW HAVEN/HOMESTEAD</option>" +
        "<option>NEW ZEALAND</option>" +
        "<option>NEWCASTLE</option>" +
        "<option>NEWCASTLE BIGHT/STOCKTON</option>" +
        "<option>NEWFIELD BAY</option>" +
        "<option>NEWPORT</option>" +
        "<option>NEWTONS</option>" +
        "<option>NINE MILE</option>" +
        "<option>NINE MILE</option>" +
        "<option>NO Cape Bissut (1)</option>" +
        "<option>NO Cape Bissut (2)</option>" +
        "<option>NO Cape Bissut (S 1)</option>" +
        "<option>NO Cape Bissut (S 2)</option>" +
        "<option>NO Cape Creek (N)</option>" +
        "<option>NO Cape Creek (S)</option>" +
        "<option>NO Entrance</option>" +
        "<option>NO Island Point</option>" +
        "<option>NO Island Point (N)</option>" +
        "<option>NO Passage (N)</option>" +
        "<option>NO Passage (S)</option>" +
        "<option>NO Teeth Reef</option>" +
        "<option>NOBBYS</option>" +
        "<option>NOBBYS</option>" +
        "<option>NOBBYS HEAD</option>" +
        "<option>NOBLES ROCKS</option>" +
        "<option>NORAH HEAD</option>" +
        "<option>NORRIES HEAD</option>" +
        "<option>NORTH</option>" +
        "<option>NORTH</option>" +
        "<option>NORTH</option>" +
        "<option>NORTH AVOCA</option>" +
        "<option>NORTH BEACH/SOUTH BOGANGAR</option>" +
        "<option>NORTH BONDI</option>" +
        "<option>NORTH CRONULLA</option>" +
        "<option>NORTH CURL CURL</option>" +
        "<option>NORTH ERA</option>" +
        "<option>NORTH HEAD</option>" +
        "<option>NORTH LORNE</option>" +
        "<option>NORTH NARRABEEN</option>" +
        "<option>NORTH PALM</option>" +
        "<option>NORTH SANDON</option>" +
        "<option>NORTH SHORE</option>" +
        "<option>NORTH SMOKY 1</option>" +
        "<option>NORTH SMOKY 2</option>" +
        "<option>NORTH SMOKY 3</option>" +
        "<option>NORTH STEYNE</option>" +
        "<option>NORTH TURA</option>" +
        "<option>NORTH WATERLOO BAY EAST</option>" +
        "<option>NORTH WATERLOO BAY WEST</option>" +
        "<option>NORTH WOLLONGONG</option>" +
        "<option>NORTHCOTE</option>" +
        "<option>NT 1</option>" +
        "<option>NT 18</option>" +
        "<option>NT 19</option>" +
        "<option>NT 2</option>" +
        "<option>NT 54</option>" +
        "<option>NUGGAN POINT</option>" +
        "<option>NUMBER 16</option>" +
        "<option>NUMBER FIVE</option>" +
        "<option>NUMBER FOUR</option>" +
        "<option>NUMBER ONE</option>" +
        "<option>NUMBER SIX</option>" +
        "<option>NUMBER THREE</option>" +
        "<option>NUMBER TWO</option>" +
        "<option>NUN'S</option>" +
        "<option>NUNNS</option>" +
        "<option>Nabbarla</option>" +
        "<option>Nabbarla (W 1)</option>" +
        "<option>Nabbarla (W 2)</option>" +
        "<option>Nabbarla (W 3)</option>" +
        "<option>Nabbarla (W 4)</option>" +
        "<option>Nadgee Moores/Bunyip Hole</option>" +
        "<option>Naiko Inlet (1)</option>" +
        "<option>Naiko Inlet (2)</option>" +
        "<option>Nalwarung Straits (1)</option>" +
        "<option>Nalwarung Straits (14)</option>" +
        "<option>Nalwarung Straits (15)</option>" +
        "<option>Nalwarung Straits (2)</option>" +
        "<option>Nalwarung Straits (3)</option>" +
        "<option>Nalwarung Straits (4)</option>" +
        "<option>Nalwarung Straits (5)</option>" +
        "<option>Nalwarung Straits (7)</option>" +
        "<option>Nalwarung Straits (7)</option>" +
        "<option>Nalwarung Straits (8)</option>" +
        "<option>Namaleta Ck</option>" +
        "<option>Nambung Bay</option>" +
        "<option>Nanarup (W)</option>" +
        "<option>Nanarup Beach</option>" +
        "<option>Nancy Cove</option>" +
        "<option>Nanga</option>" +
        "<option>Nanga Bay (N 1)</option>" +
        "<option>Nanga Bay (N 2)</option>" +
        "<option>Nanga Bay (N 3)</option>" +
        "<option>Naningbura</option>" +
        "<option>Naningbura (S 1)</option>" +
        "<option>Nanjiwoi Ck (N)</option>" +
        "<option>Nanjiwoi Ck (S)</option>" +
        "<option>Nanthau Beach</option>" +
        "<option>Nanthau Beach (N)</option>" +
        "<option>Nanum Beach (N)</option>" +
        "<option>Nanum Beach (S)</option>" +
        "<option>Napier Peninsula (W 1)</option>" +
        "<option>Napier Peninsula (W 2)</option>" +
        "<option>Napier Peninsula (W 3)</option>" +
        "<option>Napier Peninsula (W 4)</option>" +
        "<option>Napier Pens. (S 1)</option>" +
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
        "<option>Napier Pens. (S 2)</option>" +
        "<option>Napier Pens. (S 20)</option>" +
        "<option>Napier Pens. (S 21)</option>" +
        "<option>Napier Pens. (S 22)</option>" +
        "<option>Napier Pens. (S 23)</option>" +
        "<option>Napier Pens. (S 24)</option>" +
        "<option>Napier Pens. (S 25)</option>" +
        "<option>Napier Pens. (S 26)</option>" +
        "<option>Napier Pens. (S 3)</option>" +
        "<option>Napier Pens. (S 4)</option>" +
        "<option>Napier Pens. (S 5)</option>" +
        "<option>Napier Pens. (S 6)</option>" +
        "<option>Napier Pens. (S 7)</option>" +
        "<option>Napier Pens. (S 8)</option>" +
        "<option>Napier Pens. (S 9)</option>" +
        "<option>Napranum</option>" +
        "<option>Naracoopa (E)</option>" +
        "<option>Naracoopa (W)</option>" +
        "<option>Narau Beach</option>" +
        "<option>Nares Island</option>" +
        "<option>Nares Pt (W 1)</option>" +
        "<option>Nares Pt (W 2)</option>" +
        "<option>Nares Pt (W 3)</option>" +
        "<option>Nares Pt (W 4)</option>" +
        "<option>Narrabeen Head</option>" +
        "<option>Narrabeen Headland</option>" +
        "<option>Narrabeen-Collaroy</option>" +
        "<option>Narragon</option>" +
        "<option>Narrawallee Head</option>" +
        "<option>Narrow Neck (N)</option>" +
        "<option>Nassau R (N)</option>" +
        "<option>Nassau R (mouth)</option>" +
        "<option>Native Dog Beach</option>" +
        "<option>Native Point (north 1)</option>" +
        "<option>Native Point (north 2)</option>" +
        "<option>Native Point (north 3)</option>" +
        "<option>Native Point (north 4)</option>" +
        "<option>Native Well Bay</option>" +
        "<option>Native Well Bay (S)</option>" +
        "<option>Nautilus Beach</option>" +
        "<option>Navy Rise</option>" +
        "<option>Nebraska Beach</option>" +
        "<option>Neck Beach</option>" +
        "<option>Neds</option>" +
        "<option>Neds Camp</option>" +
        "<option>Needle Eye (north)</option>" +
        "<option>Needle Eye (south 1)</option>" +
        "<option>Needle Eye (south 2)</option>" +
        "<option>Needle Rock</option>" +
        "<option>Neils Beach</option>" +
        "<option>Nellie Pt (W 1)</option>" +
        "<option>Nellie Pt (W 2)</option>" +
        "<option>Nelly Bay</option>" +
        "<option>Nelly Bay</option>" +
        "<option>Nelson Bay</option>" +
        "<option>Nelson Bay</option>" +
        "<option>Nelson Bay (N 1)</option>" +
        "<option>Nelson Bay (N 2)</option>" +
        "<option>Nelson Bay marina</option>" +
        "<option>Nene Valley</option>" +
        "<option>Nene Valley (west)</option>" +
        "<option>Nene valley (east)</option>" +
        "<option>Nepean Bay</option>" +
        "<option>Nesbit R (S)</option>" +
        "<option>Nesbit R Delta</option>" +
        "<option>Netherby Bay</option>" +
        "<option>Nettley Bay</option>" +
        "<option>New Beach</option>" +
        "<option>New Beach</option>" +
        "<option>New Beach (north 1)</option>" +
        "<option>New Beach (north 2)</option>" +
        "<option>New Harbour</option>" +
        "<option>New Yohoe Creek</option>" +
        "<option>Newland Bay</option>" +
        "<option>Newmans Beach</option>" +
        "<option>Newry Island (1)</option>" +
        "<option>Newry Island (2)</option>" +
        "<option>Newry Island (3)</option>" +
        "<option>Ngandadanda Ck (N 1)</option>" +
        "<option>Ngandadanda Ck (N 2)</option>" +
        "<option>Ngandadanda Ck (N 3)</option>" +
        "<option>Ngayawilli</option>" +
        "<option>Ngayawilli (N)</option>" +
        "<option>Nghanamboona Pt</option>" +
        "<option>Ngkala</option>" +
        "<option>Ngooba Bore</option>" +
        "<option>Ngurubudanamirri Bay (1)</option>" +
        "<option>Ngurubudanamirri Bay (2)</option>" +
        "<option>Ngurubudanamirri Bay (3)</option>" +
        "<option>Nielsen River (1)</option>" +
        "<option>Nielsen River (2)</option>" +
        "<option>Nielson Park</option>" +
        "<option>Nightcliff</option>" +
        "<option>Nikawu</option>" +
        "<option>Nimble Creek</option>" +
        "<option>Nimble Creek (N)</option>" +
        "<option>Nina Beach</option>" +
        "<option>Ninderry</option>" +
        "<option>Nine Mile</option>" +
        "<option>Nine Mile</option>" +
        "<option>Nine Mile (N)</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Nine Mile Beach</option>" +
        "<option>Nine Mile Bore</option>" +
        "<option>Nine Mile Bore (N 1)</option>" +
        "<option>Nine Mile Bore (N 2)</option>" +
        "<option>Nine Mile Camp</option>" +
        "<option>Nine Mile Camp (N)</option>" +
        "<option>Nine Mile sandhills</option>" +
        "<option>Ninety Mile Beach</option>" +
        "<option>Ningaloo</option>" +
        "<option>Ninian Bay (S 1)</option>" +
        "<option>Ninian Bay (S 2)</option>" +
        "<option>Ninian Bay (S 3)</option>" +
        "<option>Ninian Bay (S 4)</option>" +
        "<option>Ninian Bay (W)</option>" +
        "<option>No 2 Point</option>" +
        "<option>No 2 Point (S 1)</option>" +
        "<option>No 2 Point (S 2)</option>" +
        "<option>No 2 Point (S 3)</option>" +
        "<option>No 2 Point (S 4)</option>" +
        "<option>No 2 Point (S 5)</option>" +
        "<option>No 2 Point (S 6)</option>" +
        "<option>Noah Creek (north)</option>" +
        "<option>Noah Creek (south)</option>" +
        "<option>Noah Head</option>" +
        "<option>Nob Point (N 1)</option>" +
        "<option>Nob Point (N 2)</option>" +
        "<option>Nob Point (N 3)</option>" +
        "<option>Nob Point (S 1)</option>" +
        "<option>Nob Point (S 2)</option>" +
        "<option>Nobbies Creek</option>" +
        "<option>Nobby's Beach</option>" +
        "<option>Noonaera</option>" +
        "<option>Noosa</option>" +
        "<option>Noosa West</option>" +
        "<option>Nora Creina</option>" +
        "<option>Norma Cove</option>" +
        "<option>Norman Ck (N)</option>" +
        "<option>Norman Ck (S)</option>" +
        "<option>Norman Cove</option>" +
        "<option>Normans Beach</option>" +
        "<option>Normanville</option>" +
        "<option>Norris Bay</option>" +
        "<option>North</option>" +
        "<option>North Arm</option>" +
        "<option>North Bay Pt (N)</option>" +
        "<option>North Bay Pt (S 1)</option>" +
        "<option>North Bay Pt (S 2)</option>" +
        "<option>North Bay Pt (S 3)</option>" +
        "<option>North Bay Pt (S 4)</option>" +
        "<option>North Beach</option>" +
        "<option>North Beach</option>" +
        "<option>North Berry Bay</option>" +
        "<option>North Burleigh</option>" +
        "<option>North Cape (1)</option>" +
        "<option>North Cape (2)</option>" +
        "<option>North Cottesloe</option>" +
        "<option>North Curl Curl Rock Pool</option>" +
        "<option>North East Inlet</option>" +
        "<option>North Gorge</option>" +
        "<option>North Harbour</option>" +
        "<option>North Haven</option>" +
        "<option>North Head</option>" +
        "<option>North Head</option>" +
        "<option>North Head</option>" +
        "<option>North Head (E)</option>" +
        "<option>North Head (N 1)</option>" +
        "<option>North Head (N 2)</option>" +
        "<option>North Head (N 3)</option>" +
        "<option>North Head (S)</option>" +
        "<option>North Hill</option>" +
        "<option>North Kingscliff</option>" +
        "<option>North Kirra</option>" +
        "<option>North Point</option>" +
        "<option>North Point (E 1)</option>" +
        "<option>North Point (E 2)</option>" +
        "<option>North Point (E 3)</option>" +
        "<option>North Point (N)</option>" +
        "<option>North Point (S 1)</option>" +
        "<option>North Point (S 2)</option>" +
        "<option>North Point (W 1)</option>" +
        "<option>North Point (W 2)</option>" +
        "<option>North Point (W)</option>" +
        "<option>North Point (east)</option>" +
        "<option>North Point (east)</option>" +
        "<option>North Point (west)</option>" +
        "<option>North Point (west)</option>" +
        "<option>North Red Bluff</option>" +
        "<option>North Shepherd Beach</option>" +
        "<option>North Shields</option>" +
        "<option>North Shore</option>" +
        "<option>North Spit</option>" +
        "<option>North Tinpot</option>" +
        "<option>North West Cape</option>" +
        "<option>Northcliffe</option>" +
        "<option>Northcote Point</option>" +
        "<option>Northdown Beach</option>" +
        "<option>Northport (1)</option>" +
        "<option>Northport (2)</option>" +
        "<option>Norton Point</option>" +
        "<option>Norwegian Bay</option>" +
        "<option>Notch</option>" +
        "<option>Notch Hill (north)</option>" +
        "<option>Notch Hill (south)</option>" +
        "<option>Notch Point</option>" +
        "<option>Notch boulder</option>" +
        "<option>Noth East Pt (E)</option>" +
        "<option>Noth East Pt (W)</option>" +
        "<option>Noyhener Beach</option>" +
        "<option>Nubeena</option>" +
        "<option>Nubeena (N)</option>" +
        "<option>Nudgee Beach</option>" +
        "<option>Nudist Beach</option>" +
        "<option>Number One Rock (north)</option>" +
        "<option>Number One Rock (south)</option>" +
        "<option>Number Two Rocks (1)</option>" +
        "<option>Number Two Rocks (3)</option>" +
        "<option>Number Two Rocks (4)</option>" +
        "<option>Number two Rocks (2)</option>" +
        "<option>Numbulwar</option>" +
        "<option>Nutgrove Beach</option>" +
        "<option>Nye Bay</option>" +
        "</dataList>";

    var oBeaches =
        "<datalist id='mylist'>" +
        "<option>O'Connell River mouth</option>" +
        "<option>O'HARA ISLAND SOUTH 1</option>" +
        "<option>O'HARA ISLAND SOUTH 2</option>" +
        "<option>O'HARA ISLAND SOUTH 3</option>" +
        "<option>O'Hara Head</option>" +
        "<option>O'Sullivan Beach</option>" +
        "<option>O'Sullivan Beach harbour</option>" +
        "<option>OAK PARK</option>" +
        "<option>OAKS EAST</option>" +
        "<option>OAKY</option>" +
        "<option>OBERON BAY</option>" +
        "<option>OBSERVATION</option>" +
        "<option>OBSERVATORY POINT</option>" +
        "<option>OCEAN</option>" +
        "<option>OCEAN</option>" +
        "<option>OCEAN GRANGE</option>" +
        "<option>OCEAN GROVE</option>" +
        "<option>OCEAN VIEW</option>" +
        "<option>OLD BAR</option>" +
        "<option>OLIVER HILL</option>" +
        "<option>ONE MILE</option>" +
        "<option>ONE TREE</option>" +
        "<option>OPAL COVE</option>" +
        "<option>ORIOAN</option>" +
        "<option>ORR POINT</option>" +
        "<option>OTWAY COVE</option>" +
        "<option>OXLEYS</option>" +
        "<option>Oak Beach</option>" +
        "<option>Oak Point</option>" +
        "<option>Oakabella Creek</option>" +
        "<option>Oakabella Creek (N)</option>" +
        "<option>Oakajee River</option>" +
        "<option>Oakajee River (N)</option>" +
        "<option>Oaky Creek</option>" +
        "<option>Obelisk Beach</option>" +
        "<option>Obeservation Rock</option>" +
        "<option>Observation Cliff</option>" +
        "<option>Observation Cliff (north 1)</option>" +
        "<option>Observation Cliff (north 2)</option>" +
        "<option>Observation Point</option>" +
        "<option>Observatory Point (east)</option>" +
        "<option>Obstruction Hill (E 1)</option>" +
        "<option>Obstruction Hill (E 2)</option>" +
        "<option>Ocean Beach (N 1)</option>" +
        "<option>Ocean Beach (N)</option>" +
        "<option>Ocean Beach (S)</option>" +
        "<option>Ocean Beach (mid)</option>" +
        "<option>Ocean Beach Denmark</option>" +
        "<option>Ocean Reef (N)</option>" +
        "<option>Ocean Reef (S 1)</option>" +
        "<option>Ocean Reef (S 2)</option>" +
        "<option>Ocean Reef (S 3)</option>" +
        "<option>Ocean Reef (S 4)</option>" +
        "<option>Ocean Reef Boat Harbour (N 2)</option>" +
        "<option>Ocean Reef Boat Harbour (N1)</option>" +
        "<option>Ocean Reef Boat Harbour (S)</option>" +
        "<option>Ocean Vista</option>" +
        "<option>Ocean-Umina Beach</option>" +
        "<option>Ochre Point</option>" +
        "<option>Ocock dunes</option>" +
        "<option>Ocock dunes (west)</option>" +
        "<option>Office Beach</option>" +
        "<option>Okehampton Beach</option>" +
        "<option>Okines Beach</option>" +
        "<option>Old Gulch</option>" +
        "<option>Old Jetty Beach</option>" +
        "<option>Old Lockhart R</option>" +
        "<option>Old Man Rocks</option>" +
        "<option>Old Man's Hat</option>" +
        "<option>Old Mans Hat</option>" +
        "<option>Old Pier Beach</option>" +
        "<option>Old Settlement</option>" +
        "<option>Old Station Beach</option>" +
        "<option>Old Wharf</option>" +
        "<option>Olive R (N)</option>" +
        "<option>Olive R (S 1)</option>" +
        "<option>Olive R (S 2)</option>" +
        "<option>Olive R (S 3)</option>" +
        "<option>Olive R (S 4)</option>" +
        "<option>Olive R (S 5)</option>" +
        "<option>Olive R (S 6)</option>" +
        "<option>Ollera Ck</option>" +
        "<option>Oman Point</option>" +
        "<option>Ommaridge</option>" +
        "<option>One Mile</option>" +
        "<option>One Shack Bay</option>" +
        "<option>One Tree Point (N)</option>" +
        "<option>Onion Creek</option>" +
        "<option>Onion Creek (N)</option>" +
        "<option>Onion Creek (S 1)</option>" +
        "<option>Onion Creek (S 2)</option>" +
        "<option>Onion Creek (S 3)</option>" +
        "<option>Onslow</option>" +
        "<option>Oombunghi Beach</option>" +
        "<option>Oombunghi Beach (south 1)</option>" +
        "<option>Oombunghi Beach (south 2)</option>" +
        "<option>Opossum Bay</option>" +
        "<option>Orchid</option>" +
        "<option>Orchid Pt (E 1)</option>" +
        "<option>Orchid Pt (E 2)</option>" +
        "<option>Orchid Pt (E 3)</option>" +
        "<option>Orchid Pt (E 4)</option>" +
        "<option>Orchid Pt (W)</option>" +
        "<option>Ordnance Point (N)</option>" +
        "<option>Ordnance Point (S 1)</option>" +
        "<option>Ordnance Point (S 2)</option>" +
        "<option>Ordnance Point (S 3)</option>" +
        "<option>Orford Bay (S 1)</option>" +
        "<option>Orford Bay (S 2)</option>" +
        "<option>Orford Beach</option>" +
        "<option>Orford Beach (E)</option>" +
        "<option>Orford Beach (S)</option>" +
        "<option>Orford Ness</option>" +
        "<option>Orford Ness (S 1)</option>" +
        "<option>Orford Ness (S 2)</option>" +
        "<option>Orford Ness (S 3)</option>" +
        "<option>Orford Ness (S 4)</option>" +
        "<option>Orford Ness (S 5)</option>" +
        "<option>Orford Ness (S 6)</option>" +
        "<option>Orford Ness (S 7)</option>" +
        "<option>Orford Ness (S 8)</option>" +
        "<option>Orient-Cattle Cks</option>" +
        "<option>Orwell Rocks</option>" +
        "<option>Osmanli Reef</option>" +
        "<option>Osmiridrium Beach (E)</option>" +
        "<option>Osmiridrium Beach (W)</option>" +
        "<option>Osprey Bay (N)</option>" +
        "<option>Osprey Bay (S )</option>" +
        "<option>Osprey Bay (S 1)</option>" +
        "<option>Osprey Bay (S 2)</option>" +
        "<option>Osprey Point (north 1)</option>" +
        "<option>Osprey Point (north 2)</option>" +
        "<option>Oswald (1)</option>" +
        "<option>Oswald (2)</option>" +
        "<option>Oswald (3)</option>" +
        "<option>Oswald (4)</option>" +
        "<option>Oswald (5)</option>" +
        "<option>Oswald (6)</option>" +
        "<option>Oswald (7)</option>" +
        "<option>Oswald (8)</option>" +
        "<option>Outer Tubes</option>" +
        "<option>Owingup (1)</option>" +
        "<option>Owingup (2)</option>" +
        "<option>Owingup (3)</option>" +
        "<option>Owingup (4)</option>" +
        "<option>Owingup (5)</option>" +
        "<option>Owingup (6)</option>" +
        "<option>Owingup (7)</option>" +
        "<option>Oyster Bay (1)</option>" +
        "<option>Oyster Bay (2)</option>" +
        "<option>Oyster Bay (3)</option>" +
        "<option>Oyster Bay (4)</option>" +
        "<option>Oyster Bay (5)</option>" +
        "<option>Oyster Bridge</option>" +
        "<option>Oyster Cove</option>" +
        "<option>Oyster Cove (N)</option>" +
        "<option>Oyster Point (east 1)</option>" +
        "<option>Oyster Point (east 2)</option>" +
        "<option>Oyster Point (west 1)</option>" +
        "<option>Oyster Point (west 2)</option>" +
        "<option>Oyster Stacks</option>" +
        "<option>Oyster fence</option>" +
        "<option>Oyster fence (west)</option>" +
        "</dataList>";

    var pBeaches =
        "<datalist id='mylist'>" +
        "<option>PALM</option>" +
        "<option>PAMBULA</option>" +
        "<option>PARADISE</option>" +
        "<option>PARK</option>" +
        "<option>PARK SOUTH</option>" +
        "<option>PARKDALE</option>" +
        "<option>PARKER RIVER</option>" +
        "<option>PATCHES</option>" +
        "<option>PEA SOUP/SOUTH</option>" +
        "<option>PEARCE HILL</option>" +
        "<option>PEARL</option>" +
        "<option>PEARL POINT EAST</option>" +
        "<option>PEARSES 1</option>" +
        "<option>PEARSES 2</option>" +
        "<option>PEBBLE POINT</option>" +
        "<option>PEBBLY</option>" +
        "<option>PEBBLY</option>" +
        "<option>PEBBLY</option>" +
        "<option>PEBBLY</option>" +
        "<option>PEBBLY</option>" +
        "<option>PEBBLY</option>" +
        "<option>PEBBLY</option>" +
        "<option>PEDRO</option>" +
        "<option>PELICAN POINT</option>" +
        "<option>PELICAN POINT</option>" +
        "<option>PENDERS</option>" +
        "<option>PETERBOROUGH</option>" +
        "<option>PETREL POINT EAST 1</option>" +
        "<option>PETREL POINT EAST 2</option>" +
        "<option>PETREL POINT WEST 1</option>" +
        "<option>PETREL POINT WEST 2 (GALE)</option>" +
        "<option>PETREL POINT WEST 3</option>" +
        "<option>PETREL POINT WEST 4</option>" +
        "<option>PETREL POINT WEST 5</option>" +
        "<option>PETREL POINT WEST 6</option>" +
        "<option>PETREL ROCK</option>" +
        "<option>PETTMAN - LAKE TYERS</option>" +
        "<option>PICCANINNY</option>" +
        "<option>PICNIC</option>" +
        "<option>PICNIC BAY</option>" +
        "<option>PICNIC POINT</option>" +
        "<option>PILOT</option>" +
        "<option>PILOT STATION</option>" +
        "<option>PINES</option>" +
        "<option>PINNY</option>" +
        "<option>PIPERS HILL</option>" +
        "<option>PIPPI</option>" +
        "<option>PIVOT</option>" +
        "<option>PLUMBAGO</option>" +
        "<option>POINT ABEONA</option>" +
        "<option>POINT ADDISS</option>" +
        "<option>POINT BUNBURY</option>" +
        "<option>POINT COOK HOMESTEAD</option>" +
        "<option>POINT COOK NORTH</option>" +
        "<option>POINT COOK SOUTH 1</option>" +
        "<option>POINT COOK SOUTH 2</option>" +
        "<option>POINT FLINDERS</option>" +
        "<option>POINT FLINDERS</option>" +
        "<option>POINT FRANKLIN EAST</option>" +
        "<option>POINT FRANKLIN WEST</option>" +
        "<option>POINT GELLIBRAND</option>" +
        "<option>POINT GEORGE SOUTH</option>" +
        "<option>POINT GREY</option>" +
        "<option>POINT HAWDON</option>" +
        "<option>POINT HENRY</option>" +
        "<option>POINT HICKS - CLINTON ROCKS</option>" +
        "<option>POINT HICKS EAST</option>" +
        "<option>POINT HICKS WEST 1</option>" +
        "<option>POINT HICKS WEST 2</option>" +
        "<option>POINT HUGHES</option>" +
        "<option>POINT IMPOSSIBLE</option>" +
        "<option>POINT KING 1</option>" +
        "<option>POINT KING 2</option>" +
        "<option>POINT LEO</option>" +
        "<option>POINT LEO POINT</option>" +
        "<option>POINT LEO SURF</option>" +
        "<option>POINT LONSDALE (BACK) SURF</option>" +
        "<option>POINT LONSDALE EAST</option>" +
        "<option>POINT MACARTHUR</option>" +
        "<option>POINT NEPEAN</option>" +
        "<option>POINT NEPEAN JETTY</option>" +
        "<option>POINT PLOMER</option>" +
        "<option>POINT RICARDO - MARLO</option>" +
        "<option>POINT RICHARDS WEST</option>" +
        "<option>POINT ROADKNIGHT</option>" +
        "<option>POINT ROADKNIGHT 'POINT'</option>" +
        "<option>POINT RONALD</option>" +
        "<option>POINT STURT SOUTH 1</option>" +
        "<option>POINT STURT SOUTH 2</option>" +
        "<option>POINT WILSON EAST</option>" +
        "<option>POINT WILSON NORTH</option>" +
        "<option>POINT WILSON WEST</option>" +
        "<option>PONY CREEK</option>" +
        "<option>PORT CAMPBELL</option>" +
        "<option>PORT FAIRY</option>" +
        "<option>PORT HACKING POINT</option>" +
        "<option>PORT KEMBLA HARBOUR</option>" +
        "<option>PORT MELBOURNE</option>" +
        "<option>PORTARLINGTON</option>" +
        "<option>PORTARLINGTON JETTY</option>" +
        "<option>PORTSEA (BACK)</option>" +
        "<option>POTATO</option>" +
        "<option>POTTSVILLE</option>" +
        "<option>POWLETT RIVER EAST</option>" +
        "<option>POWLETT RIVER WEST</option>" +
        "<option>PRETTY</option>" +
        "<option>PRETTY POINT BAY</option>" +
        "<option>PRINCES STREET</option>" +
        "<option>PUNCHBOWL</option>" +
        "<option>PUTTY/KILLCARE</option>" +
        "<option>Pacific</option>" +
        "<option>Paddys Point</option>" +
        "<option>Padroo Well</option>" +
        "<option>Pages Beach</option>" +
        "<option>Palana (E)</option>" +
        "<option>Palana Beach</option>" +
        "<option>Pallarenda</option>" +
        "<option>Pallinup Beach</option>" +
        "<option>Pallon</option>" +
        "<option>Palm Bay</option>" +
        "<option>Palm Beach</option>" +
        "<option>Palm Beach</option>" +
        "<option>Palm Beach</option>" +
        "<option>Palm Beach</option>" +
        "<option>Palm Beach (Newell)</option>" +
        "<option>Palm Beach Point</option>" +
        "<option>Palm Cove</option>" +
        "<option>Palm Creek</option>" +
        "<option>Palmer Point (north)</option>" +
        "<option>Pamela Shoal</option>" +
        "<option>Panaga</option>" +
        "<option>Pancake Point</option>" +
        "<option>Paradise</option>" +
        "<option>Paradise Bay</option>" +
        "<option>Parakeet Bay</option>" +
        "<option>Parara</option>" +
        "<option>Parasail</option>" +
        "<option>Pardoe Beach</option>" +
        "<option>Pardoe Downs 1</option>" +
        "<option>Pardoe Downs 2</option>" +
        "<option>Pardoe Downs 3</option>" +
        "<option>Pardoo Creek (E)</option>" +
        "<option>Pardoo Creek (W)</option>" +
        "<option>Parham</option>" +
        "<option>Parker Creek</option>" +
        "<option>Parkers Beach</option>" +
        "<option>Parkinsons Point (W)</option>" +
        "<option>Parriup 1</option>" +
        "<option>Parriup 2</option>" +
        "<option>Parry (S 1)</option>" +
        "<option>Parry (S 2)</option>" +
        "<option>Parry Beach</option>" +
        "<option>Parry Harbour (E 1)</option>" +
        "<option>Parry Harbour (E 2)</option>" +
        "<option>Parry Harbour (E 3)</option>" +
        "<option>Parry Harbour (E 4)</option>" +
        "<option>Parry Harbour (E 5)</option>" +
        "<option>Parry Harbour (E 6)</option>" +
        "<option>Parry Harbour (S 1)</option>" +
        "<option>Parry Harbour (S 2)</option>" +
        "<option>Parry Harbour (S 3)</option>" +
        "<option>Parry Harbour (S 4)</option>" +
        "<option>Parry Harbour (S 5)</option>" +
        "<option>Parry Harbour (S 6)</option>" +
        "<option>Parry Inlet</option>" +
        "<option>Parrys Bay (N 1)</option>" +
        "<option>Parrys Bay (N 2)</option>" +
        "<option>Parsley Bay</option>" +
        "<option>Parsons</option>" +
        "<option>Parsons Bay (S)</option>" +
        "<option>Parsons Beach</option>" +
        "<option>Parsons Cove</option>" +
        "<option>Parsons Cove (jetty)</option>" +
        "<option>Partridge Narrows</option>" +
        "<option>Pascoe R (N 1)</option>" +
        "<option>Pascoe R (N 2)</option>" +
        "<option>Pascoe R (N 3)</option>" +
        "<option>Pascoe R (S 1)</option>" +
        "<option>Pascoe R (S 2)</option>" +
        "<option>Pascoe R (S 3)</option>" +
        "<option>Paspalum Point</option>" +
        "<option>Pass River</option>" +
        "<option>Passage Beach</option>" +
        "<option>Passage Islet (south)</option>" +
        "<option>Passmore Creek</option>" +
        "<option>Paterson Ck</option>" +
        "<option>Paterson Ck (S)</option>" +
        "<option>Paterson Hill</option>" +
        "<option>Patonga</option>" +
        "<option>Patriarch Inlet</option>" +
        "<option>Patricks Bight</option>" +
        "<option>Pats River</option>" +
        "<option>Patterson Beach</option>" +
        "<option>Pauline Bay (N 1)</option>" +
        "<option>Pauline Bay (N 2)</option>" +
        "<option>Pauline Bay (S 1)</option>" +
        "<option>Pauline Bay (S 2)</option>" +
        "<option>Pauline Bay (S 3)</option>" +
        "<option>Pavement Point</option>" +
        "<option>Pavement Point (E)</option>" +
        "<option>Peaceful Bay</option>" +
        "<option>Peaceful Bay (N)</option>" +
        "<option>Peaceful Bay (S 1)</option>" +
        "<option>Peaceful Bay (S 2)</option>" +
        "<option>Peaceful Bay (S 3)</option>" +
        "<option>Peaceful Bay (S 4)</option>" +
        "<option>Peak Head</option>" +
        "<option>Peak Pt</option>" +
        "<option>Peake Bay</option>" +
        "<option>Peake Point (north 1)</option>" +
        "<option>Peake Point (north 2)</option>" +
        "<option>Peake Point (west 1)</option>" +
        "<option>Peake Point (west 2)</option>" +
        "<option>Pear Hd</option>" +
        "<option>Pear Hd (N)</option>" +
        "<option>Pear Hd (S 1)</option>" +
        "<option>Pear Hd (S 2)</option>" +
        "<option>Pearce Point (east 1)</option>" +
        "<option>Pearce Point (east 2)</option>" +
        "<option>Pearce Point (north 1)</option>" +
        "<option>Pearce Point (north 2)</option>" +
        "<option>Pearl Bay</option>" +
        "<option>Pearl Bay (north)</option>" +
        "<option>Pearl Bay (south 2)</option>" +
        "<option>Pearl Bay (south 3)</option>" +
        "<option>Pearl Ledge</option>" +
        "<option>Peawah (1)</option>" +
        "<option>Peawah (2)</option>" +
        "<option>Pebble Beach</option>" +
        "<option>Pebble Beach</option>" +
        "<option>Pebbly</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>Pebbly Beach</option>" +
        "<option>Pebbly Coast</option>" +
        "<option>Pebblys (W)</option>" +
        "<option>Pebblys Beach</option>" +
        "<option>Pecked Island (S 1)</option>" +
        "<option>Pecked Island (S 2)</option>" +
        "<option>Pecked Island (S 3)</option>" +
        "<option>Pecked Island (S 4)</option>" +
        "<option>Pecked Island (S 5)</option>" +
        "<option>Pecked Island (S 6)</option>" +
        "<option>Peggs Beach</option>" +
        "<option>Peggys Beach</option>" +
        "<option>Pelican Island</option>" +
        "<option>Pelican Island (E 1)</option>" +
        "<option>Pelican Island (E 2)</option>" +
        "<option>Pelican Island (E 3)</option>" +
        "<option>Pelican Island (S 1)</option>" +
        "<option>Pelican Island (S 2)</option>" +
        "<option>Pelican Island (S 3)</option>" +
        "<option>Pelican Island (S 4)</option>" +
        "<option>Pelican Point</option>" +
        "<option>Pelican Point</option>" +
        "<option>Pelican Point (N 1)</option>" +
        "<option>Pelican Point (N)</option>" +
        "<option>Pelican Point (east)</option>" +
        "<option>Pelican Point Beach</option>" +
        "<option>Pelican Pt</option>" +
        "<option>Penanjong Beach</option>" +
        "<option>Pender</option>" +
        "<option>Penguin Beach</option>" +
        "<option>Penguin Head</option>" +
        "<option>Penguin Point</option>" +
        "<option>Penguin Point (E)</option>" +
        "<option>Pennefather R (N)</option>" +
        "<option>Pennefather R (S)</option>" +
        "<option>Pennerowne Point (S)</option>" +
        "<option>Pennington Bay (1)</option>" +
        "<option>Pennington Bay (2)</option>" +
        "<option>Pennington Bay (3)</option>" +
        "<option>Pennington Bay (4)</option>" +
        "<option>Penquite Point (S)</option>" +
        "<option>Penrhyn</option>" +
        "<option>Pensioners Bay</option>" +
        "<option>Peppermint Bay (N)</option>" +
        "<option>Peppermint Bay (S)</option>" +
        "<option>Peppermint Beach</option>" +
        "<option>Peral Bay (south 1)</option>" +
        "<option>Perch Bay</option>" +
        "<option>Perch Hole (1)</option>" +
        "<option>Perch Hole (2)</option>" +
        "<option>Perch Hole (3)</option>" +
        "<option>Percival Park</option>" +
        "<option>Percys Road</option>" +
        "<option>Peregian</option>" +
        "<option>Perforated Landing (north 1)</option>" +
        "<option>Perforated Landing (north 2)</option>" +
        "<option>Perforated Landing (north 3)</option>" +
        "<option>Perforated Landing (south 1)</option>" +
        "<option>Perforated Landing (south 2)</option>" +
        "<option>Perforated Point (north)</option>" +
        "<option>Perforated Point (south)</option>" +
        "<option>Periwinkle Beach</option>" +
        "<option>Periwinkle Beach (N)</option>" +
        "<option>Perkins - Windang</option>" +
        "<option>Perkins Beach (N)</option>" +
        "<option>Perkins Beach (S)</option>" +
        "<option>Perlubie (north)</option>" +
        "<option>Perlubie (south 1)</option>" +
        "<option>Perlubie (south 2)</option>" +
        "<option>Perlubie (south 3)</option>" +
        "<option>Perlubie Beach</option>" +
        "<option>Perlubie Hill</option>" +
        "<option>Peron</option>" +
        "<option>Peron (N)</option>" +
        "<option>Perpendicular Pt (S 1)</option>" +
        "<option>Perpendicular Pt (S 2)</option>" +
        "<option>Perpendicular Pt (S 3)</option>" +
        "<option>Perpendicular Pt (W)</option>" +
        "<option>Petermarer Creek (1)</option>" +
        "<option>Petermarer Creek (2)</option>" +
        "<option>Petermarer Creek (3)</option>" +
        "<option>Petermarer Creek (4)</option>" +
        "<option>Petermarer Creek (5)</option>" +
        "<option>Pether Rocks</option>" +
        "<option>Petit Point</option>" +
        "<option>Petit Point (E 1)</option>" +
        "<option>Petit Point (E)</option>" +
        "<option>Petrel Cove</option>" +
        "<option>Phantom Cove</option>" +
        "<option>Phillip Point</option>" +
        "<option>Pialba</option>" +
        "<option>Piccaninnie Ponds</option>" +
        "<option>Piccaninny Point</option>" +
        "<option>Pickering Pt (S 1)</option>" +
        "<option>Pickering Pt (S 2)</option>" +
        "<option>Pickering Pt (S 3)</option>" +
        "<option>Pickering Pt (S 4)</option>" +
        "<option>Pickering Pt (S 5)</option>" +
        "<option>Pickering Pt (S 6)</option>" +
        "<option>Pickering Pt (W 1)</option>" +
        "<option>Pickering Pt (W 2)</option>" +
        "<option>Pickering Pt (W 3)</option>" +
        "<option>Pickering Pt (W 4)</option>" +
        "<option>Pickup Beach</option>" +
        "<option>Picnic Bay</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Picnic Beach</option>" +
        "<option>Picnic Beach (E 1)</option>" +
        "<option>Picnic Beach (E 2)</option>" +
        "<option>Picnic Beach (E 3)</option>" +
        "<option>Picnic Beach (E 4)</option>" +
        "<option>Picnic Beach (west 1)</option>" +
        "<option>Picnic Beach (west 2)</option>" +
        "<option>Picnic Corner</option>" +
        "<option>Picnic Cove</option>" +
        "<option>Picnic Cove-Fifth Beach</option>" +
        "<option>Picnic North</option>" +
        "<option>Picnic Point</option>" +
        "<option>Picnic Point</option>" +
        "<option>Picnic Point (E)</option>" +
        "<option>Picnic Point (N)</option>" +
        "<option>Picnic Point (W)</option>" +
        "<option>Picnic Rocks</option>" +
        "<option>Picnic Rocks (S)</option>" +
        "<option>Picnic Rocks (north)</option>" +
        "<option>Picnic Rocks (south)</option>" +
        "<option>Piedmont Beach</option>" +
        "<option>Piegon Cove</option>" +
        "<option>Pieman River</option>" +
        "<option>Pier Head</option>" +
        "<option>Pier Head (west)</option>" +
        "<option>Piersons Point (S 1)</option>" +
        "<option>Piersons Point (S 2)</option>" +
        "<option>Pigeon Holes</option>" +
        "<option>Pigeon Is (S)</option>" +
        "<option>Piglonaman Bay</option>" +
        "<option>Piglonaman Bay (N)</option>" +
        "<option>Piglonaman Bay (S 1)</option>" +
        "<option>Piglonaman Bay (S 2)</option>" +
        "<option>Pigs Head Point (E)</option>" +
        "<option>Pigs Head Point (W)</option>" +
        "<option>Pilgrim Sands</option>" +
        "<option>Pilot Beach</option>" +
        "<option>Pilots Bay</option>" +
        "<option>Pilots Bay (N 1)</option>" +
        "<option>Pilots Bay (N)</option>" +
        "<option>Pilots Bay harbour</option>" +
        "<option>Pincer Point</option>" +
        "<option>Pincer Point (E 1)</option>" +
        "<option>Pincer Point (E 2)</option>" +
        "<option>Pincer Point (E 3)</option>" +
        "<option>Pincer Point (E 4)</option>" +
        "<option>Pincer Point (E 5)</option>" +
        "<option>Pincer Point (W 1)</option>" +
        "<option>Pincer Point (W 2)</option>" +
        "<option>Pincer Point (W 3)</option>" +
        "<option>Pine Creek Beach</option>" +
        "<option>Pine Log Bay (1)</option>" +
        "<option>Pine Log Bay (2)</option>" +
        "<option>Pine Point (north)</option>" +
        "<option>Pine Point (south 1)</option>" +
        "<option>Pine Point (south 2)</option>" +
        "<option>Pine Point (south 3)</option>" +
        "<option>Pine Point (south 4)</option>" +
        "<option>Pine Scrub (1)</option>" +
        "<option>Pine Scrub (2)</option>" +
        "<option>Pine Scrub (3)</option>" +
        "<option>Pine Scrub (4)</option>" +
        "<option>Pine Scrub (5)</option>" +
        "<option>Pines Way (1)</option>" +
        "<option>Pines Way (2)</option>" +
        "<option>Pines Way (3)</option>" +
        "<option>Pinetrees (west)</option>" +
        "<option>Pinetrees Point</option>" +
        "<option>Pinetrees camp</option>" +
        "<option>Pink Bay</option>" +
        "<option>Pinky Beach</option>" +
        "<option>Pinnacle Rock</option>" +
        "<option>Pioneer Point</option>" +
        "<option>Pipe Clay Point (S)</option>" +
        "<option>Pipers Head (E 1)</option>" +
        "<option>Pipers Head (E 2)</option>" +
        "<option>Pipers River (E)</option>" +
        "<option>Plain Place (S 1)</option>" +
        "<option>Plain Place (S 2)</option>" +
        "<option>Plain Place Beach</option>" +
        "<option>Planaires bank</option>" +
        "<option>Plank Point</option>" +
        "<option>Plank Point (north 1)</option>" +
        "<option>Plank Point (north 2)</option>" +
        "<option>Plank Point (north 3)</option>" +
        "<option>Plank Point (south)</option>" +
        "<option>Plank Point-Shoalwater Point</option>" +
        "<option>Plantation Bay</option>" +
        "<option>Plantation Creek</option>" +
        "<option>Plantation Point</option>" +
        "<option>Planter Beach (N)</option>" +
        "<option>Planter Beach (S)</option>" +
        "<option>Planters Beach</option>" +
        "<option>Planters Beach (E)</option>" +
        "<option>Plater Beach</option>" +
        "<option>Platypus Bay</option>" +
        "<option>Plum Tree</option>" +
        "<option>Plumpudding Beach</option>" +
        "<option>Pocillopora Reef</option>" +
        "<option>Pococks (S)</option>" +
        "<option>Pococks Beach</option>" +
        "<option>Point Anderson (N)</option>" +
        "<option>Point Anderson (S 1)</option>" +
        "<option>Point Anderson (S)</option>" +
        "<option>Point Annie</option>" +
        "<option>Point Arkwright</option>" +
        "<option>Point Arrowsmith (E)</option>" +
        "<option>Point Arrowsmith (N 1)</option>" +
        "<option>Point Arrowsmith (N 2)</option>" +
        "<option>Point Arrowsmith (N 3)</option>" +
        "<option>Point Arrowsmith (N 4)</option>" +
        "<option>Point Arrowsmith (N 5)</option>" +
        "<option>Point Arrowsmith (W 1)</option>" +
        "<option>Point Arrowsmith (W 2)</option>" +
        "<option>Point Arrowsmith (W 3)</option>" +
        "<option>Point Aviod (north 1)</option>" +
        "<option>Point Avoid</option>" +
        "<option>Point Avoid (boat ramp)</option>" +
        "<option>Point Avoid (north 2)</option>" +
        "<option>Point Avoid (north 3)</option>" +
        "<option>Point Bailly (S)</option>" +
        "<option>Point Bell (west 1)</option>" +
        "<option>Point Bell (west 2)</option>" +
        "<option>Point Bell (west 3)</option>" +
        "<option>Point Blaze (east)</option>" +
        "<option>Point Blaze (south 1)</option>" +
        "<option>Point Blaze (south 2)</option>" +
        "<option>Point Bolingbroke (east)</option>" +
        "<option>Point Bolingbroke (north 1)</option>" +
        "<option>Point Bolingbroke (north 2)</option>" +
        "<option>Point Bolingbroke (north-westI</option>" +
        "<option>Point Bolingbroke (west)</option>" +
        "<option>Point Boston (north 1)</option>" +
        "<option>Point Boston (north 2)</option>" +
        "<option>Point Boston (north 3)</option>" +
        "<option>Point Boston (north 4)</option>" +
        "<option>Point Boston (west 1)</option>" +
        "<option>Point Break</option>" +
        "<option>Point Burgess (north)</option>" +
        "<option>Point Burgess (south)</option>" +
        "<option>Point Cartwright</option>" +
        "<option>Point Cartwright</option>" +
        "<option>Point Charles (east 1)</option>" +
        "<option>Point Charles (east 2)</option>" +
        "<option>Point Charles (east 3)</option>" +
        "<option>Point Charles (west)</option>" +
        "<option>Point Cloates</option>" +
        "<option>Point Collinson</option>" +
        "<option>Point Collinson (east 1)</option>" +
        "<option>Point Collinson (east 2)</option>" +
        "<option>Point Collinson (east 3)</option>" +
        "<option>Point Collinson (east 4)</option>" +
        "<option>Point Collinson (east 5)</option>" +
        "<option>Point Collinson (west 1)</option>" +
        "<option>Point Collinson (west 1)</option>" +
        "<option>Point Collinson (west 2)</option>" +
        "<option>Point Collinson (west 4)</option>" +
        "<option>Point Cook South</option>" +
        "<option>Point Culver (E)</option>" +
        "<option>Point Culver (S)</option>" +
        "<option>Point Daking</option>" +
        "<option>Point Dalling</option>" +
        "<option>Point Davenport</option>" +
        "<option>Point De Mole</option>" +
        "<option>Point De Mole (east 1)</option>" +
        "<option>Point De Mole (east 2)</option>" +
        "<option>Point De Mole (east 3)</option>" +
        "<option>Point De Mole (west)</option>" +
        "<option>Point Deburg (north 1)</option>" +
        "<option>Point Deburg (north 2)</option>" +
        "<option>Point Deburg (north 3)</option>" +
        "<option>Point Dempster-Malcolm</option>" +
        "<option>Point Dickson</option>" +
        "<option>Point Dillon (north 1)</option>" +
        "<option>Point Dillon (north 2)</option>" +
        "<option>Point Dillon (north 3)</option>" +
        "<option>Point Dillon (north 4)</option>" +
        "<option>Point Drummond</option>" +
        "<option>Point Drummond (north 1)</option>" +
        "<option>Point Drummond (north 2)</option>" +
        "<option>Point Drummond (south 1)</option>" +
        "<option>Point Drummond (south 10)</option>" +
        "<option>Point Drummond (south 11)</option>" +
        "<option>Point Drummond (south 12)</option>" +
        "<option>Point Drummond (south 13)</option>" +
        "<option>Point Drummond (south 14)</option>" +
        "<option>Point Drummond (south 2)</option>" +
        "<option>Point Drummond (south 3)</option>" +
        "<option>Point Drummond (south 4)</option>" +
        "<option>Point Drummond (south 5)</option>" +
        "<option>Point Drummond (south 6)</option>" +
        "<option>Point Drummond (south 7)</option>" +
        "<option>Point Drummond (south 8)</option>" +
        "<option>Point Drummond (south 9)</option>" +
        "<option>Point Ellen (west 1)</option>" +
        "<option>Point Ellen (west 2)</option>" +
        "<option>Point Ellen (west 3)</option>" +
        "<option>Point Ellen (west 4)</option>" +
        "<option>Point Fowler (east 1)</option>" +
        "<option>Point Fowler (east 2)</option>" +
        "<option>Point Fowler (west 1)</option>" +
        "<option>Point Fowler (west 2)</option>" +
        "<option>Point Gawler</option>" +
        "<option>Point Gibbon (1)</option>" +
        "<option>Point Gibbon (2)</option>" +
        "<option>Point Gibbon (3)</option>" +
        "<option>Point Gilbert</option>" +
        "<option>Point Guy (E 1)</option>" +
        "<option>Point Guy (E 2)</option>" +
        "<option>Point Guy (E 3)</option>" +
        "<option>Point Guy (E 4)</option>" +
        "<option>Point Hamilla</option>" +
        "<option>Point Haselgrove</option>" +
        "<option>Point Henry</option>" +
        "<option>Point Hillier</option>" +
        "<option>Point Hillier (N)</option>" +
        "<option>Point Hillier (S)</option>" +
        "<option>Point Hillier (W 1)</option>" +
        "<option>Point Hillier (W 2)</option>" +
        "<option>Point Hillier (W 2)</option>" +
        "<option>Point Hillier (W 4)</option>" +
        "<option>Point Hillier (W 5)</option>" +
        "<option>Point Hillier (W 6)</option>" +
        "<option>Point Hillier (W 7)</option>" +
        "<option>Point Hillier (W 8)</option>" +
        "<option>Point Hood (1)</option>" +
        "<option>Point Hood (2)</option>" +
        "<option>Point Hughes (north 1)</option>" +
        "<option>Point Hughes (north 2)</option>" +
        "<option>Point Hughes (south)</option>" +
        "<option>Point Irwin (W 1)</option>" +
        "<option>Point Irwin (W 2)</option>" +
        "<option>Point James</option>" +
        "<option>Point James (east)</option>" +
        "<option>Point Jedacorrudup (S 1)</option>" +
        "<option>Point Jedacorrudup (S 2)</option>" +
        "<option>Point Jedacorrudup (S 3)</option>" +
        "<option>Point Jedacorrudup (S 4)</option>" +
        "<option>Point Jedacorrudup (S 5)</option>" +
        "<option>Point Jenny (east)</option>" +
        "<option>Point Jenny (west)</option>" +
        "<option>Point Labatt</option>" +
        "<option>Point Lefroy</option>" +
        "<option>Point Lefroy (W 1)</option>" +
        "<option>Point Lefroy (W)</option>" +
        "<option>Point Lesueur</option>" +
        "<option>Point Lindsay</option>" +
        "<option>Point Lindsay (west)</option>" +
        "<option>Point Long Nose</option>" +
        "<option>Point Longnose (north)</option>" +
        "<option>Point Longnose (south)</option>" +
        "<option>Point Lookout</option>" +
        "<option>Point Lookout/Blue Lake Beach</option>" +
        "<option>Point Lorenzen</option>" +
        "<option>Point Lorenzen (E 1)</option>" +
        "<option>Point Lorenzen (E 2)</option>" +
        "<option>Point Lorenzen (E 3)</option>" +
        "<option>Point Louise</option>" +
        "<option>Point Louise (N)</option>" +
        "<option>Point Malcolm</option>" +
        "<option>Point Malcolm (W 1)</option>" +
        "<option>Point Malcolm (W 2)</option>" +
        "<option>Point Malcolm (W 3)</option>" +
        "<option>Point Malcolm (W 4)</option>" +
        "<option>Point Malcolm (W 5)</option>" +
        "<option>Point Malcolm (W 6)</option>" +
        "<option>Point Malcolm (south 1)</option>" +
        "<option>Point Malcolm (south 2)</option>" +
        "<option>Point Malcolm (south 3)</option>" +
        "<option>Point Malcolm (south 4)</option>" +
        "<option>Point Margaret (east)</option>" +
        "<option>Point Margaret (south 1)</option>" +
        "<option>Point Margaret (south 2)</option>" +
        "<option>Point Margaret (south 3)</option>" +
        "<option>Point Marsden (west)</option>" +
        "<option>Point Matthew (N 1)</option>" +
        "<option>Point Matthew (N 2)</option>" +
        "<option>Point Matthew (N 3)</option>" +
        "<option>Point Maxwell</option>" +
        "<option>Point McLeod (E)</option>" +
        "<option>Point McLeod (W)</option>" +
        "<option>Point Moore</option>" +
        "<option>Point Moore (N)</option>" +
        "<option>Point Morrsion (south 1)</option>" +
        "<option>Point Morrsion (south 2)</option>" +
        "<option>Point Morrsion (west)</option>" +
        "<option>Point Murat (N)</option>" +
        "<option>Point Murat (S)</option>" +
        "<option>Point Paterson</option>" +
        "<option>Point Paterson (south)</option>" +
        "<option>Point Pearce (bay)</option>" +
        "<option>Point Pearce (east)</option>" +
        "<option>Point Pearce (landing)</option>" +
        "<option>Point Pearce (west)</option>" +
        "<option>Point Peron</option>" +
        "<option>Point Peron (S 1)</option>" +
        "<option>Point Peron (S 2)</option>" +
        "<option>Point Peron (S 3)</option>" +
        "<option>Point Perpendicular</option>" +
        "<option>Point Perry (1)</option>" +
        "<option>Point Perry (2)</option>" +
        "<option>Point Peter</option>" +
        "<option>Point Peter (north)</option>" +
        "<option>Point Poolingerena (E 1)</option>" +
        "<option>Point Poolingerena (E 2)</option>" +
        "<option>Point Puer Beach</option>" +
        "<option>Point Quobba</option>" +
        "<option>Point Quobba (S 1)</option>" +
        "<option>Point Quobba (S 2)</option>" +
        "<option>Point Quobba (S 3)</option>" +
        "<option>Point Quobba (S 4)</option>" +
        "<option>Point Riley</option>" +
        "<option>Point Riley (north 1)</option>" +
        "<option>Point Riley (north 2)</option>" +
        "<option>Point Riley (north 3)</option>" +
        "<option>Point Riley (north 4)</option>" +
        "<option>Point Riley (north 5)</option>" +
        "<option>Point Riley (north 6)</option>" +
        "<option>Point Riley (south 1)</option>" +
        "<option>Point Riley (south 2)</option>" +
        "<option>Point Robe (S 1)</option>" +
        "<option>Point Robe (S 2)</option>" +
        "<option>Point Robe (S)</option>" +
        "<option>Point Salisbury</option>" +
        "<option>Point Samson</option>" +
        "<option>Point Samson (E 1)</option>" +
        "<option>Point Samson (E 2)</option>" +
        "<option>Point Samson (E 4)</option>" +
        "<option>Point Samson (N)</option>" +
        "<option>Point Sir Issac (south 1)</option>" +
        "<option>Point Sir Issac (south 2)</option>" +
        "<option>Point Sorrell (E)</option>" +
        "<option>Point Sorrell (W)</option>" +
        "<option>Point Souttar (east 2)</option>" +
        "<option>Point Souttar (east)</option>" +
        "<option>Point Stephens</option>" +
        "<option>Point Stuart</option>" +
        "<option>Point Tinline (1)</option>" +
        "<option>Point Tinline (2)</option>" +
        "<option>Point Tinline (3)</option>" +
        "<option>Point Tinline (4)</option>" +
        "<option>Point Turton</option>" +
        "<option>Point Turton (jetty)</option>" +
        "<option>Point Up Right</option>" +
        "<option>Point Vernon</option>" +
        "<option>Point Walton (W 1)</option>" +
        "<option>Point Walton (W 2)</option>" +
        "<option>Point Walton (W 4)</option>" +
        "<option>Point Walton (W 5)</option>" +
        "<option>Point Walton (W 6)</option>" +
        "<option>Point Warna (1)</option>" +
        "<option>Point Warna (2)</option>" +
        "<option>Point Warna (3)</option>" +
        "<option>Point Watson</option>" +
        "<option>Point Watson (north)</option>" +
        "<option>Point Westall</option>" +
        "<option>Point Whidbey (east 1)</option>" +
        "<option>Point Whidbey (east 2)</option>" +
        "<option>Point Whidbey (north 1)</option>" +
        "<option>Point Whidbey (north 2)</option>" +
        "<option>Point Whidbey (north 3)</option>" +
        "<option>Point Yorke (north 1)</option>" +
        "<option>Point Yorke (north 2)</option>" +
        "<option>Point Yorke (north 3)</option>" +
        "<option>Point Yorke (south 1)</option>" +
        "<option>Point Yorke (south 2)</option>" +
        "<option>Point Yorke (south 3)</option>" +
        "<option>Point des Galett (N)</option>" +
        "<option>Point des Galett (S)</option>" +
        "<option>Point du Ressac (S 1)</option>" +
        "<option>Point du Ressac (S 2)</option>" +
        "<option>Point du Ressac (S)</option>" +
        "<option>Poissonnier Point</option>" +
        "<option>Poissonnier Point (E)</option>" +
        "<option>Poissonnier Point (S)</option>" +
        "<option>Police Point</option>" +
        "<option>Policemans Point</option>" +
        "<option>Policemans Point (S)</option>" +
        "<option>Polleys Hole</option>" +
        "<option>Pollys Bay</option>" +
        "<option>Pondalowie Bay</option>" +
        "<option>Pondalowie Bay (north)</option>" +
        "<option>Ponto Creek</option>" +
        "<option>Poonindie</option>" +
        "<option>Popham Bay (3)</option>" +
        "<option>Popham Bay (4)</option>" +
        "<option>Popham Bay (5)</option>" +
        "<option>Poppys Lagoon (N)</option>" +
        "<option>Porky (N)</option>" +
        "<option>Porky Beach</option>" +
        "<option>Pormpuraaw</option>" +
        "<option>Porpoise Bay</option>" +
        "<option>Porpoise Bay (S)</option>" +
        "<option>Port Augusta (east)</option>" +
        "<option>Port Augusta (west 1)</option>" +
        "<option>Port Augusta (west 2)</option>" +
        "<option>Port Beach</option>" +
        "<option>Port Bradshaw (E 1)</option>" +
        "<option>Port Bradshaw (E 2)</option>" +
        "<option>Port Bradshaw (E 3)</option>" +
        "<option>Port Bradshaw (W 1)</option>" +
        "<option>Port Bradshaw (W 10)</option>" +
        "<option>Port Bradshaw (W 2)</option>" +
        "<option>Port Bradshaw (W 3)</option>" +
        "<option>Port Bradshaw (W 4)</option>" +
        "<option>Port Bradshaw (W 5)</option>" +
        "<option>Port Bradshaw (W 6)</option>" +
        "<option>Port Bradshaw (W 7)</option>" +
        "<option>Port Bradshaw (W 8)</option>" +
        "<option>Port Bradshaw (W 9)</option>" +
        "<option>Port Bremer (S 1)</option>" +
        "<option>Port Bremer (S 2)</option>" +
        "<option>Port Bremer (S 3)</option>" +
        "<option>Port Broughton (jetty)</option>" +
        "<option>Port Broughton (north)</option>" +
        "<option>Port Broughton)</option>" +
        "<option>Port Clinton</option>" +
        "<option>Port Clinton</option>" +
        "<option>Port Clinton (inlet)</option>" +
        "<option>Port Clinton (north)</option>" +
        "<option>Port Clinton (south)</option>" +
        "<option>Port Creek</option>" +
        "<option>Port Davies</option>" +
        "<option>Port Denison Harbour</option>" +
        "<option>Port Douglas (11)</option>" +
        "<option>Port Douglas (12)</option>" +
        "<option>Port Douglas (15)</option>" +
        "<option>Port Douglas (16)</option>" +
        "<option>Port Douglas (17)</option>" +
        "<option>Port Douglas (18)</option>" +
        "<option>Port Douglas (19)</option>" +
        "<option>Port Douglas (21)</option>" +
        "<option>Port Douglas (22)</option>" +
        "<option>Port Douglas (3)</option>" +
        "<option>Port Douglas (4)</option>" +
        "<option>Port Douglas (5)</option>" +
        "<option>Port Douglas (6)</option>" +
        "<option>Port Douglas (Four Mile)</option>" +
        "<option>Port Elliot</option>" +
        "<option>Port Gawler</option>" +
        "<option>Port Geographe (1)</option>" +
        "<option>Port Geographe (2)</option>" +
        "<option>Port Geographe (3)</option>" +
        "<option>Port Geographe (4)</option>" +
        "<option>Port George (1)</option>" +
        "<option>Port George (2)</option>" +
        "<option>Port George (3)</option>" +
        "<option>Port George (4)</option>" +
        "<option>Port George IV (1)</option>" +
        "<option>Port George IV (2)</option>" +
        "<option>Port Germein</option>" +
        "<option>Port Germein (north)</option>" +
        "<option>Port Gibbon</option>" +
        "<option>Port Gibbon (east)</option>" +
        "<option>Port Giles</option>" +
        "<option>Port Giles (north)</option>" +
        "<option>Port Giles (south)</option>" +
        "<option>Port Gregory</option>" +
        "<option>Port Gregory (S)</option>" +
        "<option>Port Harding</option>" +
        "<option>Port Hedland groyne</option>" +
        "<option>Port Hedland marina</option>" +
        "<option>Port Hedland spoil bank (E)</option>" +
        "<option>Port Hedland spoil bank (W)</option>" +
        "<option>Port Hughes</option>" +
        "<option>Port Hughes</option>" +
        "<option>Port Hughes harbour</option>" +
        "<option>Port Hughes jetty</option>" +
        "<option>Port Julia</option>" +
        "<option>Port Julia (north 1)</option>" +
        "<option>Port Julia (north 2)</option>" +
        "<option>Port Julia (south 1)</option>" +
        "<option>Port Julia (south 2)</option>" +
        "<option>Port Julia (south 3)</option>" +
        "<option>Port Julia (south 4)</option>" +
        "<option>Port Kembla</option>" +
        "<option>Port Linclon (north)</option>" +
        "<option>Port MacDonnell</option>" +
        "<option>Port MacDonnell (west)</option>" +
        "<option>Port MacDonnell harbour</option>" +
        "<option>Port Moorowie</option>" +
        "<option>Port Moorowie (boat ramp)</option>" +
        "<option>Port Neill</option>" +
        "<option>Port Neill (north 1)</option>" +
        "<option>Port Neill (north 2)</option>" +
        "<option>Port Nelson (E 1)</option>" +
        "<option>Port Nelson (E 2)</option>" +
        "<option>Port Nelson (E 3)</option>" +
        "<option>Port Nelson (E 4)</option>" +
        "<option>Port Nelson (E 5)</option>" +
        "<option>Port Nelson (E 6)</option>" +
        "<option>Port Noralunga</option>" +
        "<option>Port Paterson</option>" +
        "<option>Port Rickaby</option>" +
        "<option>Port Smith (N 1)</option>" +
        "<option>Port Smith (N 2)</option>" +
        "<option>Port Smith (S 1)</option>" +
        "<option>Port Smith (S 1)</option>" +
        "<option>Port Smith (S 2)</option>" +
        "<option>Port Sorell</option>" +
        "<option>Port Stanvac</option>" +
        "<option>Port Victoria (jetty)</option>" +
        "<option>Port Victoria (north)</option>" +
        "<option>Port Victoria (south 1)</option>" +
        "<option>Port Victoria (south 2)</option>" +
        "<option>Port Vincent (north)</option>" +
        "<option>Port Vincent (south)</option>" +
        "<option>Port Wakefield</option>" +
        "<option>Port Walcott</option>" +
        "<option>Port Warrender (E 1)</option>" +
        "<option>Port Warrender (E 2)</option>" +
        "<option>Port Warrender (E 3)</option>" +
        "<option>Port Warrender (E 4)</option>" +
        "<option>Port Warrender (E 5)</option>" +
        "<option>Port Warrender (E 6)</option>" +
        "<option>Port Warrender (E 7)</option>" +
        "<option>Port Warrender (S 1)</option>" +
        "<option>Port Warrender (S 2)</option>" +
        "<option>Port Warrender (S 3)</option>" +
        "<option>Port Warrender (SE 1)</option>" +
        "<option>Port Warrender (SE 10)</option>" +
        "<option>Port Warrender (SE 11)</option>" +
        "<option>Port Warrender (SE 12)</option>" +
        "<option>Port Warrender (SE 2)</option>" +
        "<option>Port Warrender (SE 3)</option>" +
        "<option>Port Warrender (SE 4)</option>" +
        "<option>Port Warrender (SE 5)</option>" +
        "<option>Port Warrender (SE 7)</option>" +
        "<option>Port Warrender (SE 8)</option>" +
        "<option>Port Warrender (SE 9)</option>" +
        "<option>Port Weld (N 1)</option>" +
        "<option>Port Weld (N 2)</option>" +
        "<option>Port Weld (N 3)</option>" +
        "<option>Port Weld (N 4)</option>" +
        "<option>Port William</option>" +
        "<option>Port Wilunga</option>" +
        "<option>Port Wilunga (north)</option>" +
        "<option>Port le Hunte</option>" +
        "<option>Porter Bay (north)</option>" +
        "<option>Porter Bay (south)</option>" +
        "<option>Porter Hill Is (N 1)</option>" +
        "<option>Porter Hill Is (N 2)</option>" +
        "<option>Porter Hill Is (S)</option>" +
        "<option>Portland Roads</option>" +
        "<option>Portland Roads (E 1)</option>" +
        "<option>Portland Roads (E 2)</option>" +
        "<option>Portuguese</option>" +
        "<option>Possiters Point</option>" +
        "<option>Post Office Rock</option>" +
        "<option>Pot Alley Gorge (N)</option>" +
        "<option>Pot Alley Gorge (S)</option>" +
        "<option>Pot Bay</option>" +
        "<option>Pot Boil Beach</option>" +
        "<option>Potato Hill</option>" +
        "<option>Potholes</option>" +
        "<option>Potshot Beach</option>" +
        "<option>Poverty Bay</option>" +
        "<option>Poverty Bay (north 1)</option>" +
        "<option>Poverty Bay (north 2)</option>" +
        "<option>Poverty Bay (north 3)</option>" +
        "<option>Poverty Bay (south)</option>" +
        "<option>Powell Pt</option>" +
        "<option>Powell Pt (W)</option>" +
        "<option>Power house</option>" +
        "<option>Power station</option>" +
        "<option>Poyungan</option>" +
        "<option>Preservation Bay</option>" +
        "<option>Preston Spit (N)</option>" +
        "<option>Preston Spit (S)</option>" +
        "<option>Pretty Pool</option>" +
        "<option>Prices Bay</option>" +
        "<option>Prime Beach</option>" +
        "<option>Primrose Beach</option>" +
        "<option>Primrose Point (W)</option>" +
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
        "<option>Prince Frederick Hbr (S 1)</option>" +
        "<option>Prince Frederick Hbr (S 10)</option>" +
        "<option>Prince Frederick Hbr (S 2)</option>" +
        "<option>Prince Frederick Hbr (S 3)</option>" +
        "<option>Prince Frederick Hbr (S 4)</option>" +
        "<option>Prince Frederick Hbr (S 5)</option>" +
        "<option>Prince Frederick Hbr (S 6)</option>" +
        "<option>Prince Frederick Hbr (S 7)</option>" +
        "<option>Prince Frederick Hbr (S 8)</option>" +
        "<option>Prince Frederick Hbr (S 9)</option>" +
        "<option>Prion Beach</option>" +
        "<option>Prion Beach (E)</option>" +
        "<option>Prior Pt (S 1)</option>" +
        "<option>Prior Pt (S 2)</option>" +
        "<option>Prior Pt (S 3)</option>" +
        "<option>Prior Pt (S 4)</option>" +
        "<option>Prior Pt (S 5)</option>" +
        "<option>Probable Is (E 1)</option>" +
        "<option>Probable Is (E 10)</option>" +
        "<option>Probable Is (E 11)</option>" +
        "<option>Probable Is (E 2)</option>" +
        "<option>Probable Is (E 3)</option>" +
        "<option>Probable Is (E 4)</option>" +
        "<option>Probable Is (E 5)</option>" +
        "<option>Probable Is (E 6)</option>" +
        "<option>Probable Is (E 7)</option>" +
        "<option>Probable Is (E 8)</option>" +
        "<option>Probable Is (E 9)</option>" +
        "<option>Promise Bay (S 1)</option>" +
        "<option>Promise Bay (S 2)</option>" +
        "<option>Promise Bay (S 3)</option>" +
        "<option>Propoise Head</option>" +
        "<option>Providential Head</option>" +
        "<option>Pt Alexander (N 1)</option>" +
        "<option>Pt Alexander (N 10)</option>" +
        "<option>Pt Alexander (N 11)</option>" +
        "<option>Pt Alexander (N 2)</option>" +
        "<option>Pt Alexander (N 3)</option>" +
        "<option>Pt Alexander (N 4)</option>" +
        "<option>Pt Alexander (N 5)</option>" +
        "<option>Pt Alexander (N 6)</option>" +
        "<option>Pt Alexander (N 7)</option>" +
        "<option>Pt Alexander (N 8)</option>" +
        "<option>Pt Alexander (N 9)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Alexander (W 1)</option>" +
        "<option>Pt Ann</option>" +
        "<option>Pt Ann (1)</option>" +
        "<option>Pt Ann (2)</option>" +
        "<option>Pt Blane</option>" +
        "<option>Pt Blane (N 1)</option>" +
        "<option>Pt Blane (N 2)</option>" +
        "<option>Pt Blane (W 1)</option>" +
        "<option>Pt Blane (W 2)</option>" +
        "<option>Pt Blane (W 3)</option>" +
        "<option>Pt Bristow</option>" +
        "<option>Pt Bristow (N)</option>" +
        "<option>Pt Charles Bay</option>" +
        "<option>Pt Napier (1)</option>" +
        "<option>Pt Napier (2)</option>" +
        "<option>Pt Napier (3)</option>" +
        "<option>Pt Parker</option>" +
        "<option>Pt Parker (S)</option>" +
        "<option>Pt Usborne (N)</option>" +
        "<option>Pt Usborne (W 1)</option>" +
        "<option>Pt Usborne (W 2)</option>" +
        "<option>Pt Usborne (W 3)</option>" +
        "<option>Pt William</option>" +
        "<option>Puckey's Beach</option>" +
        "<option>Puer Road</option>" +
        "<option>Pulpit Rock</option>" +
        "<option>Pumpkin Creek</option>" +
        "<option>Pumpkin Hollow (1)</option>" +
        "<option>Pumpkin Hollow (2)</option>" +
        "<option>Pumpkin Hollow (3)</option>" +
        "<option>Pumpkin Hollow (4)</option>" +
        "<option>Pumpkin Hollow (5)</option>" +
        "<option>Purdon Bay (N)</option>" +
        "<option>Purdon Bay (S)</option>" +
        "<option>Puritan Bay</option>" +
        "<option>Purrar Point (E)</option>" +
        "<option>Putney</option>" +
        "<option>Putta Putta Beach</option>" +
        "<option>Putta Putta Beach (S)</option>" +
        "<option>Pyramids</option>" +
        "</dataList>";

    var qBeaches =
        "<datalist id='mylist'>" +
        "<option>QUARANTINE BAY</option>" +
        "<option>QUARRY</option>" +
        "<option>QUARRY</option>" +
        "<option>QUEENS HEAD</option>" +
        "<option>QUEENSCLIFF</option>" +
        "<option>QUEENSCLIFF - PIER BEACH</option>" +
        "<option>QUIET CORNER</option>" +
        "<option>QUONDOLO</option>" +
        "<option>Quagi (E)</option>" +
        "<option>Quagi (W 1)</option>" +
        "<option>Quagi (W 2)</option>" +
        "<option>Quagi (W 3)</option>" +
        "<option>Quagi Beach</option>" +
        "<option>Quail Flat</option>" +
        "<option>Quail Island (1)</option>" +
        "<option>Quail Island (2)</option>" +
        "<option>Quail Island (3)</option>" +
        "<option>Quail Island (4)</option>" +
        "<option>Quail Island landing</option>" +
        "<option>Qualing Pool</option>" +
        "<option>Quandoa Point</option>" +
        "<option>Quarantine Bay</option>" +
        "<option>Quarantine Bay</option>" +
        "<option>Quarantine Beach</option>" +
        "<option>Quarantine Head</option>" +
        "<option>Quarram Beach</option>" +
        "<option>Quarries Bay</option>" +
        "<option>Quarries Bay (S 1)</option>" +
        "<option>Quarries Bay (S 2)</option>" +
        "<option>Quarries Bay (S 3)</option>" +
        "<option>Quarry Bay</option>" +
        "<option>Quarry beach</option>" +
        "<option>Quay St</option>" +
        "<option>Queen Head beach</option>" +
        "<option>Queens Beach</option>" +
        "<option>Queens Beach</option>" +
        "<option>Queens Beach</option>" +
        "<option>Queens Beach North</option>" +
        "<option>Queens-Redcliffe</option>" +
        "<option>Queenscliff Headland</option>" +
        "<option>Queenscliff/North Steyne/Manly</option>" +
        "<option>Quininup Beach</option>" +
        "<option>Quinns Rocks Beach</option>" +
        "<option>Quintel Beach</option>" +
        "<option>Quobba</option>" +
        "<option>Quobba (N 1)</option>" +
        "<option>Quobba (N 2)</option>" +
        "<option>Quoin Channel</option>" +
        "<option>Quoin Head</option>" +
        "<option>Quoin Head (W 1)</option>" +
        "<option>Quoin Head (W 1)</option>" +
        "<option>Quoin Island (1)</option>" +
        "<option>Quoin Island (2)</option>" +
        "<option>Quondong Beach</option>" +
        "<option>Quondong Pt (N)</option>" +
        "<option>Quondong Pt (S 1)</option>" +
        "<option>Quondong Pt (S 2)</option>" +
        "<option>Quondong Pt (S 3)</option>" +
        "<option>Quondong Pt (S 4)</option>" +
        "<option>Quondong Pt (S 5)</option>" +
        "<option>Quondong Pt (S 6)</option>" +
        "</dataList>";

    var rBeaches =
        "<datalist id='mylist'>" +
        "<option>RACECOURSE</option>" +
        "<option>RACECOURSE</option>" +
        "<option>RACECOURSE HEAD</option>" +
        "<option>RACECOURSE SOUTH (SUPER TUBES)</option>" +
        "<option>RACETRACK</option>" +
        "<option>RADFORDS</option>" +
        "<option>RAFFS</option>" +
        "<option>RAINBOW/BONNY HILLS</option>" +
        "<option>RAME HEAD  1</option>" +
        "<option>RAME HEAD  2</option>" +
        "<option>RAME HEAD  3</option>" +
        "<option>RANELAGH</option>" +
        "<option>RAZORBACK/LITTLE</option>" +
        "<option>RED BLUFF</option>" +
        "<option>RED CLIFF</option>" +
        "<option>RED HEAD</option>" +
        "<option>RED HILL</option>" +
        "<option>RED RIVER 1</option>" +
        "<option>RED RIVER 2</option>" +
        "<option>RED RIVER 3</option>" +
        "<option>RED RIVER 4</option>" +
        "<option>RED ROCK (NORTH)</option>" +
        "<option>RED ROCK (SOUTH)</option>" +
        "<option>RED ROCK EAST</option>" +
        "<option>RED ROCK WEST</option>" +
        "<option>REDHEAD</option>" +
        "<option>REEDY CREEK</option>" +
        "<option>REEF POINT</option>" +
        "<option>REEVES</option>" +
        "<option>REFUGE COVE NORTH</option>" +
        "<option>REFUGE COVE SOUTH</option>" +
        "<option>RENNIES</option>" +
        "<option>RICHMOND</option>" +
        "<option>RIECKS POINT</option>" +
        "<option>RIFLE RANGE</option>" +
        "<option>RIPPLESIDE</option>" +
        "<option>RIXONS</option>" +
        "<option>RM Beach</option>" +
        "<option>ROBINS</option>" +
        "<option>ROCKY</option>" +
        "<option>ROCKY POINT</option>" +
        "<option>ROSEBUD</option>" +
        "<option>ROSEDALE</option>" +
        "<option>ROSEDALE NORTH</option>" +
        "<option>ROUNDBACK</option>" +
        "<option>ROYAL</option>" +
        "<option>RUTLEDGE CREEK</option>" +
        "<option>RYE</option>" +
        "<option>RYE OCEAN</option>" +
        "<option>Rabbit Island (1)</option>" +
        "<option>Rabbit Island (2)</option>" +
        "<option>Rabbit Island (3)</option>" +
        "<option>Rabelais</option>" +
        "<option>Racecourse Bay</option>" +
        "<option>Radar Reef</option>" +
        "<option>Radical Bay</option>" +
        "<option>Raffles Bay (E 1)</option>" +
        "<option>Raffles Bay (E 2)</option>" +
        "<option>Raffles Bay (W 1)</option>" +
        "<option>Raffles Bay (W 2)</option>" +
        "<option>Raft Pt</option>" +
        "<option>Raft Pt (S 1)</option>" +
        "<option>Raft Pt (S 2)</option>" +
        "<option>Raft Pt (S 3)</option>" +
        "<option>Raft Pt (S 4)</option>" +
        "<option>Rainbow Bay</option>" +
        "<option>Rainbow Beach</option>" +
        "<option>Rainbow Beach (south)</option>" +
        "<option>Rainbow Cliffs</option>" +
        "<option>Rainbow Cliffs (N)</option>" +
        "<option>Rainbow Cliffs (S 1)</option>" +
        "<option>Rainbow Cliffs (S 2)</option>" +
        "<option>Ralgnal</option>" +
        "<option>Rame Head (1)</option>" +
        "<option>Rame Head (2)</option>" +
        "<option>Rame Head (3)</option>" +
        "<option>Rame Head (W 2)</option>" +
        "<option>Rame Head (W1)</option>" +
        "<option>Ramsay Bay</option>" +
        "<option>Ramsay Bay (south)</option>" +
        "<option>Ramsgate</option>" +
        "<option>Ramsgate (N 1)</option>" +
        "<option>Ramsgate (N 2)</option>" +
        "<option>Ramsgate Beach</option>" +
        "<option>Randalls Bay</option>" +
        "<option>Rantyirrity Pt</option>" +
        "<option>Rantyirrity Pt (N)</option>" +
        "<option>Rantyirrity Pt (S 1)</option>" +
        "<option>Rantyirrity Pt (S 2)</option>" +
        "<option>Rantyirrity Pt (S 3)</option>" +
        "<option>Rapid Bay</option>" +
        "<option>Rapid Bay (north)</option>" +
        "<option>Rapid Creek</option>" +
        "<option>Rapid Head (south)</option>" +
        "<option>Rasnon Beach</option>" +
        "<option>Raspins Beach</option>" +
        "<option>Rat Bay</option>" +
        "<option>Ratcliffe Bay (1)</option>" +
        "<option>Ratcliffe Bay (2)</option>" +
        "<option>Ravine des Casoars</option>" +
        "<option>Raymangirr</option>" +
        "<option>Raymangirr (N)</option>" +
        "<option>Razor Beach</option>" +
        "<option>Reader Point (E)</option>" +
        "<option>Reader Point (W)</option>" +
        "<option>Rebceea Point (N)</option>" +
        "<option>Rebceea Point (S)</option>" +
        "<option>Record Point</option>" +
        "<option>Red</option>" +
        "<option>Red Banks</option>" +
        "<option>Red Banks (1)</option>" +
        "<option>Red Banks (2)</option>" +
        "<option>Red Banks (3)</option>" +
        "<option>Red Banks (4)</option>" +
        "<option>Red Banks (5)</option>" +
        "<option>Red Banks (6)</option>" +
        "<option>Red Banks (north 1)</option>" +
        "<option>Red Banks Beach</option>" +
        "<option>Red Beach</option>" +
        "<option>Red Beach</option>" +
        "<option>Red Beach (E)</option>" +
        "<option>Red Beach (W)</option>" +
        "<option>Red Bluff</option>" +
        "<option>Red Bluff</option>" +
        "<option>Red Bluff</option>" +
        "<option>Red Bluff (N 1)</option>" +
        "<option>Red Bluff (N 2)</option>" +
        "<option>Red Bluff (N 3)</option>" +
        "<option>Red Bluff (N 4)</option>" +
        "<option>Red Bluff (N 5)</option>" +
        "<option>Red Bluff (N 6)</option>" +
        "<option>Red Bluff (N 7)</option>" +
        "<option>Red Bluff (N 8)</option>" +
        "<option>Red Bluff (S)</option>" +
        "<option>Red Bluff-Nancy</option>" +
        "<option>Red Chapel Beach</option>" +
        "<option>Red Cliff</option>" +
        "<option>Red Cliff</option>" +
        "<option>Red Cliff (east 1)</option>" +
        "<option>Red Cliff (east 2)</option>" +
        "<option>Red Cliff (east 3)</option>" +
        "<option>Red Cliff (east 4)</option>" +
        "<option>Red Cliff (north 1)</option>" +
        "<option>Red Cliff (north 2)</option>" +
        "<option>Red Cliff (west)</option>" +
        "<option>Red Cliff Point</option>" +
        "<option>Red Cliff Point (south)</option>" +
        "<option>Red Cliffs</option>" +
        "<option>Red Cliffs (N)</option>" +
        "<option>Red Cliffs (S)</option>" +
        "<option>Red Head Point</option>" +
        "<option>Red Hill (E)</option>" +
        "<option>Red Hill (W)</option>" +
        "<option>Red House Bay</option>" +
        "<option>Red Hut Point (E 1)</option>" +
        "<option>Red Hut Point (E 2)</option>" +
        "<option>Red Ochre Beach (1)</option>" +
        "<option>Red Ochre Beach (2)</option>" +
        "<option>Red Ochre Rock Platform</option>" +
        "<option>Red Point</option>" +
        "<option>Red Point</option>" +
        "<option>Red Point</option>" +
        "<option>Red Point (E 1)</option>" +
        "<option>Red Point (E 2)</option>" +
        "<option>Red Point (north 1)</option>" +
        "<option>Red Point (north 2)</option>" +
        "<option>Red Point (north 3)</option>" +
        "<option>Red Point (south 1)</option>" +
        "<option>Red Point (south 2)</option>" +
        "<option>Red Pt</option>" +
        "<option>Red Pt (S 1)</option>" +
        "<option>Red Pt (S 2)</option>" +
        "<option>Red Pt (W 1)</option>" +
        "<option>Red Pt (W 2)</option>" +
        "<option>Red Pt (W 3)</option>" +
        "<option>Red Rock</option>" +
        "<option>Red Rock (north)</option>" +
        "<option>Red Rock (south)</option>" +
        "<option>Red Rock Bay</option>" +
        "<option>Red Rock Point</option>" +
        "<option>Red Rock Point (E)</option>" +
        "<option>Red Rock Point (E)</option>" +
        "<option>Red Rock Point (W)</option>" +
        "<option>Red Rocks</option>" +
        "<option>Red Rocks (S)</option>" +
        "<option>Red Sands Bay</option>" +
        "<option>Redbill Beach</option>" +
        "<option>Reddins Creek</option>" +
        "<option>Reddins Creek (W)</option>" +
        "<option>Redgate (N)</option>" +
        "<option>Redgate Beach</option>" +
        "<option>Reef Beach</option>" +
        "<option>Reef Beach</option>" +
        "<option>Reef Head (north)</option>" +
        "<option>Reef Point</option>" +
        "<option>Reef Point (north 1)</option>" +
        "<option>Reef Point (north 2)</option>" +
        "<option>Reef Point (north 3)</option>" +
        "<option>Reef Point (north 4)</option>" +
        "<option>Reef Point (north 5)</option>" +
        "<option>Reef Point (north 6)</option>" +
        "<option>Reef Point (north)</option>" +
        "<option>Reef Point (south 2)</option>" +
        "<option>Reef Point (south)</option>" +
        "<option>Reef Point (south)</option>" +
        "<option>Reef Point (south1)</option>" +
        "<option>Reef Point (west 1)</option>" +
        "<option>Reef Point (west 2)</option>" +
        "<option>Refuge Bay (1)</option>" +
        "<option>Refuge Bay (2)</option>" +
        "<option>Refuge Bay (4)</option>" +
        "<option>Refuge Bay (5)</option>" +
        "<option>Regatta Point</option>" +
        "<option>Reid Pt</option>" +
        "<option>Reid Pt (S 1)</option>" +
        "<option>Reid Pt (S 2)</option>" +
        "<option>Reid Pt (S 3)</option>" +
        "<option>Reids Beach</option>" +
        "<option>Relief Point</option>" +
        "<option>Relief Point (W 1)</option>" +
        "<option>Relief Point (W 2)</option>" +
        "<option>Repulse Beach</option>" +
        "<option>Rescue Point</option>" +
        "<option>Resolute</option>" +
        "<option>Resort</option>" +
        "<option>Resort (east)</option>" +
        "<option>Resort (west)</option>" +
        "<option>Rest Bay (1)</option>" +
        "<option>Rest Bay (2)</option>" +
        "<option>Rest Bay (3)</option>" +
        "<option>Rest Bay (4)</option>" +
        "<option>Return Point (N)</option>" +
        "<option>Return Point (S)</option>" +
        "<option>Return Point (W)</option>" +
        "<option>Reveley Island (E 1)</option>" +
        "<option>Reveley Island (E 2)</option>" +
        "<option>Reveley Island (W)</option>" +
        "<option>Rheban (S)</option>" +
        "<option>Rheban Beach</option>" +
        "<option>Rhino Point (north)</option>" +
        "<option>Rhino Point (south)</option>" +
        "<option>Rhodes Pt (E)</option>" +
        "<option>Rhodes Pt (N 1)</option>" +
        "<option>Rhodes Pt (N 2)</option>" +
        "<option>Rhodes Pt (N 3)</option>" +
        "<option>Rice Beach</option>" +
        "<option>Ricey Beach</option>" +
        "<option>Richards Point</option>" +
        "<option>Richards Point (west 1)</option>" +
        "<option>Richards Point (west 2)</option>" +
        "<option>Richardsons Beach</option>" +
        "<option>Richardsons Beach</option>" +
        "<option>Richardsons Beach (N)</option>" +
        "<option>Richardsons Point (S)</option>" +
        "<option>Ricketts</option>" +
        "<option>Riddell Beach</option>" +
        "<option>Riddell Beach (N)</option>" +
        "<option>Riddell Pt</option>" +
        "<option>Riddell Pt (E)</option>" +
        "<option>Riddell Pt (S)</option>" +
        "<option>Riddoch Bay</option>" +
        "<option>Ridley River mouth</option>" +
        "<option>Riedle Bay</option>" +
        "<option>Rifle Butts Beach</option>" +
        "<option>Ringbolt Bay</option>" +
        "<option>Rita Island (centre)</option>" +
        "<option>Rita Island (north)</option>" +
        "<option>Rita Island (south)</option>" +
        "<option>Riverway Lagoon</option>" +
        "<option>Roaring Bay (S 1)</option>" +
        "<option>Roaring Bay (S 2)</option>" +
        "<option>Roaring Bay Beach</option>" +
        "<option>Roaring Beach</option>" +
        "<option>Roaring Beach (E)</option>" +
        "<option>Roaring Beach (W)</option>" +
        "<option>Roberts Pt</option>" +
        "<option>Roberts Pt (N 1)</option>" +
        "<option>Roberts Pt (N 2)</option>" +
        "<option>Robinson</option>" +
        "<option>Robinson (south)</option>" +
        "<option>Robinson Point</option>" +
        "<option>Robinson R</option>" +
        "<option>Robinson R (E)</option>" +
        "<option>Robinson R (W 1)</option>" +
        "<option>Robinson R (W 2)</option>" +
        "<option>Robinson R (W 3)</option>" +
        "<option>Roches Beach</option>" +
        "<option>Roches Beach (N 1)</option>" +
        "<option>Roches Beach (N 2)</option>" +
        "<option>Roches Beach (N 3)</option>" +
        "<option>Roches Beach (N 4)</option>" +
        "<option>Rock Creel</option>" +
        "<option>Rockey Point</option>" +
        "<option>Rockingham Beach</option>" +
        "<option>Rocksitters</option>" +
        "<option>Rocky Bay</option>" +
        "<option>Rocky Bay</option>" +
        "<option>Rocky Bay</option>" +
        "<option>Rocky Bay (1)</option>" +
        "<option>Rocky Bay (2)</option>" +
        "<option>Rocky Bay (N 1)</option>" +
        "<option>Rocky Bay (N 2)</option>" +
        "<option>Rocky Bay (S 1)</option>" +
        "<option>Rocky Bay (S 2)</option>" +
        "<option>Rocky Bay (S 3)</option>" +
        "<option>Rocky Boat Inlet</option>" +
        "<option>Rocky Cape (W 1)</option>" +
        "<option>Rocky Cape (W 2)</option>" +
        "<option>Rocky Cape Beach</option>" +
        "<option>Rocky Cape Beach (W 1)</option>" +
        "<option>Rocky Cape Beach (W 2)</option>" +
        "<option>Rocky Ck (S 1)</option>" +
        "<option>Rocky Ck (S 2)</option>" +
        "<option>Rocky Creek</option>" +
        "<option>Rocky Island (S)</option>" +
        "<option>Rocky Island (W)</option>" +
        "<option>Rocky Plains Bay</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point</option>" +
        "<option>Rocky Point (1)</option>" +
        "<option>Rocky Point (2)</option>" +
        "<option>Rocky Point (Daydream)</option>" +
        "<option>Rocky Point (N)</option>" +
        "<option>Rocky Point (S 1)</option>" +
        "<option>Rocky Point (S 2)</option>" +
        "<option>Rocky Point (S)</option>" +
        "<option>Rocky Point (east 1)</option>" +
        "<option>Rocky Point (east 2)</option>" +
        "<option>Rocky Point (east 3)</option>" +
        "<option>Rocky Point (north 1)</option>" +
        "<option>Rocky Point (north 1)</option>" +
        "<option>Rocky Point (north 2)</option>" +
        "<option>Rocky Point (north 2)</option>" +
        "<option>Rocky Point (north 3)</option>" +
        "<option>Rocky Point (south 1)</option>" +
        "<option>Rocky Point (south 2)</option>" +
        "<option>Rocky Point (south)</option>" +
        "<option>Rocky Point (south)</option>" +
        "<option>Rocky Point (west 1)</option>" +
        "<option>Rocky Point (west 1)</option>" +
        "<option>Rocky Point (west 2)</option>" +
        "<option>Rocky Point (west 2)</option>" +
        "<option>Rocky Point (west 3)</option>" +
        "<option>Rocky Point (west 4)</option>" +
        "<option>Rocky Point (west)</option>" +
        "<option>Rocky Point - Point Bell</option>" +
        "<option>Rocky Pt</option>" +
        "<option>Rocky Pt</option>" +
        "<option>Rocky Pt (E)</option>" +
        "<option>Rocky Pt (N 1)</option>" +
        "<option>Rocky Pt (N 2)</option>" +
        "<option>Rocky Pt (N 3)</option>" +
        "<option>Rocky Pt (S 1)</option>" +
        "<option>Rocky R (N)</option>" +
        "<option>Rocky R (S)</option>" +
        "<option>Rocky River</option>" +
        "<option>Rodney Reserve</option>" +
        "<option>Rogers Beach</option>" +
        "<option>Rokebys Beach</option>" +
        "<option>Rolling Bay (E 1)</option>" +
        "<option>Rolling Bay (E 2)</option>" +
        "<option>Rolling Bay (E 3)</option>" +
        "<option>Rolling Bay (E 4)</option>" +
        "<option>Rolling Bay (W 1)</option>" +
        "<option>Rolling Bay (W 2)</option>" +
        "<option>Rollingstone Bay</option>" +
        "<option>Rolls Point</option>" +
        "<option>Ronsard Bay</option>" +
        "<option>Rookery Beach</option>" +
        "<option>Roonga Pt</option>" +
        "<option>Rope Gully</option>" +
        "<option>Rope Gully (N)</option>" +
        "<option>Roper River</option>" +
        "<option>Rorruwuy</option>" +
        "<option>Rorruwuy (W 1)</option>" +
        "<option>Rorruwuy (W 2)</option>" +
        "<option>Rose Bay</option>" +
        "<option>Rose Bay Park</option>" +
        "<option>Rosella Creek (east)</option>" +
        "<option>Rosella Creek (west)</option>" +
        "<option>Roses-Quallup Beach</option>" +
        "<option>Rosetta Head</option>" +
        "<option>Rosewood Island (east)</option>" +
        "<option>Rosewood Island (west)</option>" +
        "<option>Rosie Ck</option>" +
        "<option>Rosie Ck (E 1)</option>" +
        "<option>Rosie Ck (E 2)</option>" +
        "<option>Rosie Ck (S 1)</option>" +
        "<option>Rosie Ck (S 2)</option>" +
        "<option>Rosie Ck (S 3)</option>" +
        "<option>Rosie Ck (S 4)</option>" +
        "<option>Rosie Ck (S 5)</option>" +
        "<option>Rosie Ck (S 6)</option>" +
        "<option>Rosie Ck (W)</option>" +
        "<option>Ross Point</option>" +
        "<option>Ross Point (S)</option>" +
        "<option>Ross River (east)</option>" +
        "<option>Rossiter Bay</option>" +
        "<option>Rossiter Bay (S 1)</option>" +
        "<option>Rossiter Bay (S 2)</option>" +
        "<option>Rosslyn Boat Harbour</option>" +
        "<option>Rouges Point</option>" +
        "<option>Rough Hill (N)</option>" +
        "<option>Round Head</option>" +
        "<option>Round Hill</option>" +
        "<option>Round Hill (east 1)</option>" +
        "<option>Round Hill (east 2)</option>" +
        "<option>Round Hill (east 3)</option>" +
        "<option>Round Hill (west 1)</option>" +
        "<option>Round Hill (west 2)</option>" +
        "<option>Round Hill Point (E)</option>" +
        "<option>Round Island</option>" +
        "<option>Round Point (1)</option>" +
        "<option>Round Point (2)</option>" +
        "<option>Round Pt</option>" +
        "<option>Round Pt (N 1)</option>" +
        "<option>Round Pt (N 2)</option>" +
        "<option>Round Pt (S 1)</option>" +
        "<option>Round Pt (S 1)</option>" +
        "<option>Round Pt (S 2)</option>" +
        "<option>Round Pt (S 2)</option>" +
        "<option>Round Pt (S 3)</option>" +
        "<option>Round Pt (S 3)</option>" +
        "<option>Round Pt (S 4)</option>" +
        "<option>Round Pt (S 4)</option>" +
        "<option>Rowdy Creek</option>" +
        "<option>Rowes Bay</option>" +
        "<option>Royston Head</option>" +
        "<option>Royston Head (east)</option>" +
        "<option>Royston Head (south 1)</option>" +
        "<option>Royston Head (south 2)</option>" +
        "<option>Rudis Bay</option>" +
        "<option>Rules Beach</option>" +
        "<option>Rumble Bay (E)</option>" +
        "<option>Rundles Beach</option>" +
        "<option>Running Ck</option>" +
        "<option>Rush Lagoon</option>" +
        "<option>Rye - Safety</option>" +
        "</dataList>";

    var sBeaches =
        "<datalist id='mylist'>" +
        "<option>S Bend</option>" +
        "<option>SAFETY</option>" +
        "<option>SAFETY</option>" +
        "<option>SALMON ROCKS</option>" +
        "<option>SALTWATER</option>" +
        "<option>SALTWATER CREEK</option>" +
        "<option>SALTWATER CREEK</option>" +
        "<option>SALTWATER CREEK NORTH</option>" +
        "<option>SALTWATER/DIAMOND</option>" +
        "<option>SAN JOSE</option>" +
        "<option>SAN REMO</option>" +
        "<option>SAND HUMMOCKS MID</option>" +
        "<option>SAND HUMMOCKS NORTH</option>" +
        "<option>SAND HUMMOCKS SOUTH</option>" +
        "<option>SAND ISLAND</option>" +
        "<option>SANDBAR</option>" +
        "<option>SANDON POINT</option>" +
        "<option>SANDON STREET</option>" +
        "<option>SANDON/ILLAROO</option>" +
        "<option>SANDRIDGE</option>" +
        "<option>SANDRINGHAM</option>" +
        "<option>SANDY</option>" +
        "<option>SANDY POINT (WARATAH BAY)</option>" +
        "<option>SAPPHIRE</option>" +
        "<option>SAWTELL</option>" +
        "<option>SCARBOROUGH</option>" +
        "<option>SCARBOROUGH NORTH</option>" +
        "<option>SCOTTISH ROCKS/HOLE IN THE WALL</option>" +
        "<option>SCOTTS HEAD</option>" +
        "<option>SEA CAVE MAIN</option>" +
        "<option>SEA CAVE NORTH</option>" +
        "<option>SEABRAE-SANDS</option>" +
        "<option>SEAFARER</option>" +
        "<option>SEAFORD</option>" +
        "<option>SEAL CREEK</option>" +
        "<option>SEAL CREEK MID</option>" +
        "<option>SEAL CREEK NORTH</option>" +
        "<option>SEAL POINT</option>" +
        "<option>SEALERS COVE</option>" +
        "<option>SEASPRAY</option>" +
        "<option>SECOND BLOWHOLE</option>" +
        "<option>SECOND SURF</option>" +
        "<option>SENTINEL ROCK</option>" +
        "<option>SENTINEL ROCKS</option>" +
        "<option>SEPARATION CREEK</option>" +
        "<option>SEPARATION CREEK SOUTH</option>" +
        "<option>SEVEN MILE</option>" +
        "<option>SEVEN MILE/LENNOX HEAD</option>" +
        "<option>SHACK BAY</option>" +
        "<option>SHALLOW INLET ISLAND</option>" +
        "<option>SHARK</option>" +
        "<option>SHARK BAY</option>" +
        "<option>SHARK BAY</option>" +
        "<option>SHARKY</option>" +
        "<option>SHARPS</option>" +
        "<option>SHELLHARBOUR</option>" +
        "<option>SHELLHARBOUR NORTH/NUNS</option>" +
        "<option>SHELLHARBOUR SOUTH</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY</option>" +
        "<option>SHELLY 1</option>" +
        "<option>SHELLY 2</option>" +
        "<option>SHELLY NORTH</option>" +
        "<option>SHELTER COVE EAST</option>" +
        "<option>SHELTER COVE WEST</option>" +
        "<option>SHEOAK</option>" +
        "<option>SHEOAK CREEK</option>" +
        "<option>SHERBROOK CREEK</option>" +
        "<option>SHIP WRECK CREEK</option>" +
        "<option>SHIP WRECK CREEK NORTH</option>" +
        "<option>SHOAL INLET ISLAND</option>" +
        "<option>SHOALHAVEN HEADS</option>" +
        "<option>SHOREHAM</option>" +
        "<option>SHOREHAM CAMPING</option>" +
        "<option>SHRAPNEL GULLY</option>" +
        "<option>SIMMONS BAY</option>" +
        "<option>SISTER POINT</option>" +
        "<option>SKELETON CREEK</option>" +
        "<option>SKENES CREEK</option>" +
        "<option>SLIPPERY POINT</option>" +
        "<option>SMITH</option>" +
        "<option>SMITH COVE</option>" +
        "<option>SMYTHE CREEK</option>" +
        "<option>SNAKE BAY</option>" +
        "<option>SNAKE BAY SOUTH</option>" +
        "<option>SNAKE ISLAND</option>" +
        "<option>SNAKE ISLAND  EAST</option>" +
        "<option>SNAKE ISLAND  WEST</option>" +
        "<option>SNAKE ISLAND WEST 1</option>" +
        "<option>SNAKE ISLAND WEST 2</option>" +
        "<option>SNUG COVE/EDEN HARBOUR</option>" +
        "<option>SOAPY ROCKS</option>" +
        "<option>SOLDIERS</option>" +
        "<option>SOMERS</option>" +
        "<option>SORRENTO FRONT</option>" +
        "<option>SORRENTO OCEAN (BACK)</option>" +
        "<option>SORRENTO PARK</option>" +
        "<option>SOUTH</option>" +
        "<option>SOUTH BALLINA</option>" +
        "<option>SOUTH DURRAS</option>" +
        "<option>SOUTH ERA</option>" +
        "<option>SOUTH MAROUBRA</option>" +
        "<option>SOUTH MELBOURNE</option>" +
        "<option>SOUTH MOLE</option>" +
        "<option>SOUTH MULLAWAY</option>" +
        "<option>SOUTH MYRTLE</option>" +
        "<option>SOUTH NARRABEEN</option>" +
        "<option>SOUTH SMOKY 1</option>" +
        "<option>SOUTH SMOKY 2</option>" +
        "<option>SOUTH SURFSIDE</option>" +
        "<option>SOUTH THIRROUL</option>" +
        "<option>SOUTH TUROSS</option>" +
        "<option>SOUTHSIDE</option>" +
        "<option>SPLIT ROCK</option>" +
        "<option>SPOON BAY</option>" +
        "<option>SQUEAKY</option>" +
        "<option>ST ANDREWS</option>" +
        "<option>ST GEORGE HEAD 2</option>" +
        "<option>ST GEORGE RIVER</option>" +
        "<option>ST HELENS</option>" +
        "<option>ST KILDA</option>" +
        "<option>ST KILDA MARINA</option>" +
        "<option>ST KILDA PIER</option>" +
        "<option>ST LEONARDS</option>" +
        "<option>ST LEONARDS PIER</option>" +
        "<option>ST PAULS</option>" +
        "<option>STANHOPE BAY</option>" +
        "<option>STANWELL PARK</option>" +
        "<option>STATION</option>" +
        "<option>STATION CREEK</option>" +
        "<option>STATION PIER</option>" +
        "<option>STEAMER LANDING</option>" +
        "<option>STEAMERS</option>" +
        "<option>STEELES</option>" +
        "<option>STEELES EAST</option>" +
        "<option>STEELES WEST</option>" +
        "<option>STEPS BEACH</option>" +
        "<option>STINKY POINT</option>" +
        "<option>STOCKTON</option>" +
        "<option>STOKES ISLAND</option>" +
        "<option>STONY</option>" +
        "<option>STORM BAY</option>" +
        "<option>STORM POINT NORTH</option>" +
        "<option>STORM POINT SOUTH</option>" +
        "<option>STUARTS POINT</option>" +
        "<option>SUBMARINE/FIONA</option>" +
        "<option>SUFFOLK PARK</option>" +
        "<option>SUGARLOAF</option>" +
        "<option>SULLIVAN BAY</option>" +
        "<option>SUMMERCLOUD BAY</option>" +
        "<option>SUMMERLAND BAY</option>" +
        "<option>SUNBURNT</option>" +
        "<option>SUNDERLAND BAY</option>" +
        "<option>SUNNYSIDE</option>" +
        "<option>SUNNYSIDE NORTH</option>" +
        "<option>SUNSHINE COVE</option>" +
        "<option>SURF</option>" +
        "<option>SURF</option>" +
        "<option>SURF</option>" +
        "<option>SURF</option>" +
        "<option>SURFIES POINT EAST</option>" +
        "<option>SURFIES POINT WEST</option>" +
        "<option>SURFSIDE</option>" +
        "<option>SUSAN GILMOUR</option>" +
        "<option>SUSSEX INLET</option>" +
        "<option>SUTHERLAND</option>" +
        "<option>SWAN ISLAND</option>" +
        "<option>SWANSEA HEADS</option>" +
        "<option>SWANSEA WALL</option>" +
        "<option>SWELL POINT</option>" +
        "<option>Sabina Point</option>" +
        "<option>Sabina Point (west 1)</option>" +
        "<option>Sabina Point (west 2)</option>" +
        "<option>Sable Chief Rocks</option>" +
        "<option>Sadd Point</option>" +
        "<option>Sadd Point (N 1)</option>" +
        "<option>Sadd Point (N 2)</option>" +
        "<option>Sadd Point (N 3)</option>" +
        "<option>Sadd Point (N 4)</option>" +
        "<option>Saddle Bight</option>" +
        "<option>Saddle Peak</option>" +
        "<option>Saddle Peak (north)</option>" +
        "<option>Saddle Peak (south)</option>" +
        "<option>Sadgrove Point (N)</option>" +
        "<option>Safety Bay</option>" +
        "<option>Safety Cove</option>" +
        "<option>Salamander Bay</option>" +
        "<option>Saldogoo Beach</option>" +
        "<option>Salem Bay</option>" +
        "<option>Salem Bay (N)</option>" +
        "<option>Salmon</option>" +
        "<option>Salmon (W)</option>" +
        "<option>Salmon Bay</option>" +
        "<option>Salmon Bay</option>" +
        "<option>Salmon Bay (W 1)</option>" +
        "<option>Salmon Bay (W 2)</option>" +
        "<option>Salmon Bay (W 3)</option>" +
        "<option>Salmon Bay (W)</option>" +
        "<option>Salmon Beach</option>" +
        "<option>Salmon Beach</option>" +
        "<option>Salmon Beach</option>" +
        "<option>Salmon Creek</option>" +
        "<option>Salmon Hole</option>" +
        "<option>Salmon Point</option>" +
        "<option>Salmon Point (1)</option>" +
        "<option>Salmon Point (2)</option>" +
        "<option>Salmon Pools</option>" +
        "<option>Salonika</option>" +
        "<option>Salonika (south)</option>" +
        "<option>Salt Arm Ck (N)</option>" +
        "<option>Salt Arm Ck (S)</option>" +
        "<option>Salt Creek</option>" +
        "<option>Salt Creek</option>" +
        "<option>Salt Waterhole</option>" +
        "<option>Saltwater Ck</option>" +
        "<option>Saltwater Creek</option>" +
        "<option>Saltwater Creek Beach</option>" +
        "<option>Saltworks (N 1)</option>" +
        "<option>Saltworks (N 2)</option>" +
        "<option>Saltworks Beach</option>" +
        "<option>Sammy's Camp</option>" +
        "<option>Sampson Inlet (S)</option>" +
        "<option>Sams Creek</option>" +
        "<option>San Remo</option>" +
        "<option>San Remo-Secret Harbour</option>" +
        "<option>Sanctuary Bay</option>" +
        "<option>Sand Bank Bay (1)</option>" +
        "<option>Sand Bank Bay (10)</option>" +
        "<option>Sand Bank Bay (11)</option>" +
        "<option>Sand Bank Bay (2)</option>" +
        "<option>Sand Bank Bay (3)</option>" +
        "<option>Sand Bank Bay (4)</option>" +
        "<option>Sand Bank Bay (5)</option>" +
        "<option>Sand Bank Bay (6)</option>" +
        "<option>Sand Bank Bay (7)</option>" +
        "<option>Sand Bank Bay (8)</option>" +
        "<option>Sand Bank Bay (9)</option>" +
        "<option>Sand Patch</option>" +
        "<option>Sandalwood</option>" +
        "<option>Sandblow Bay (1)</option>" +
        "<option>Sandblow Bay (2)</option>" +
        "<option>Sandblow Bay (3)</option>" +
        "<option>Sandblow Bay (N)</option>" +
        "<option>Sandblow Point (S)</option>" +
        "<option>Sanders pt (S 1)</option>" +
        "<option>Sanders pt (S 2)</option>" +
        "<option>Sanderson Bay (1)</option>" +
        "<option>Sanderson Bay (2)</option>" +
        "<option>Sanderson Bay (3)</option>" +
        "<option>Sanderson Pt (E 1)</option>" +
        "<option>Sanderson Pt (E 2)</option>" +
        "<option>Sanderson Pt (E 3)</option>" +
        "<option>Sanderson Pt (E 4)</option>" +
        "<option>Sandfly Beach</option>" +
        "<option>Sandfly Beach</option>" +
        "<option>Sandfly Creek</option>" +
        "<option>Sandhill</option>" +
        "<option>Sandhurst</option>" +
        "<option>Sandland (N)</option>" +
        "<option>Sandland (S)</option>" +
        "<option>Sandlewood Bay</option>" +
        "<option>Sandringham</option>" +
        "<option>Sandringham (N)</option>" +
        "<option>Sandringham (S)</option>" +
        "<option>Sandspit Point</option>" +
        "<option>Sandy</option>" +
        "<option>Sandy Bay</option>" +
        "<option>Sandy Bay</option>" +
        "<option>Sandy Beach</option>" +
        "<option>Sandy Bight</option>" +
        "<option>Sandy Bight (W 1)</option>" +
        "<option>Sandy Bight (W 2)</option>" +
        "<option>Sandy Bight (W 3)</option>" +
        "<option>Sandy Bight (W 4)</option>" +
        "<option>Sandy Bight (W 5)</option>" +
        "<option>Sandy Bight (W 6)</option>" +
        "<option>Sandy Bight (W 7)</option>" +
        "<option>Sandy Bight (W 8)</option>" +
        "<option>Sandy Bight (W 9)</option>" +
        "<option>Sandy Bight (W)</option>" +
        "<option>Sandy Cape</option>" +
        "<option>Sandy Cape (1)</option>" +
        "<option>Sandy Cape (2)</option>" +
        "<option>Sandy Cape Beach (1)</option>" +
        "<option>Sandy Cape Beach (2)</option>" +
        "<option>Sandy Cape Beach (3)</option>" +
        "<option>Sandy Cape Beach (N 1)</option>" +
        "<option>Sandy Cape Beach (N 2)</option>" +
        "<option>Sandy Cape Beach (N 3)</option>" +
        "<option>Sandy Ck</option>" +
        "<option>Sandy Cove</option>" +
        "<option>Sandy Creek</option>" +
        "<option>Sandy Island</option>" +
        "<option>Sandy Peak</option>" +
        "<option>Sandy Point</option>" +
        "<option>Sandy Point</option>" +
        "<option>Sandy Point (N 1)</option>" +
        "<option>Sandy Point (N 1)</option>" +
        "<option>Sandy Point (N 10)</option>" +
        "<option>Sandy Point (N 2)</option>" +
        "<option>Sandy Point (N 2)</option>" +
        "<option>Sandy Point (N 3)</option>" +
        "<option>Sandy Point (N 3)</option>" +
        "<option>Sandy Point (N 4)</option>" +
        "<option>Sandy Point (N 4)</option>" +
        "<option>Sandy Point (N 5)</option>" +
        "<option>Sandy Point (N 5)</option>" +
        "<option>Sandy Point (N 6)</option>" +
        "<option>Sandy Point (N 6)</option>" +
        "<option>Sandy Point (N 7)</option>" +
        "<option>Sandy Point (N 8)</option>" +
        "<option>Sandy Point (N 9)</option>" +
        "<option>Sandy Point (N)</option>" +
        "<option>Sandy Point (S 1)</option>" +
        "<option>Sandy Point (S 2)</option>" +
        "<option>Sandy Point (S 3)</option>" +
        "<option>Sandy Point (S)</option>" +
        "<option>Sandy Point (north)</option>" +
        "<option>Sandy Point (west)</option>" +
        "<option>Sandy Point-Farnborough</option>" +
        "<option>Sandy Pt</option>" +
        "<option>Sarah Anne Rocks</option>" +
        "<option>Sarah Blanche Point (W)</option>" +
        "<option>Sardine Creek</option>" +
        "<option>Sarge Bay</option>" +
        "<option>Sarge Bay (W)</option>" +
        "<option>Sarina</option>" +
        "<option>Sarina Inlet (south)</option>" +
        "<option>Sassy Creek</option>" +
        "<option>Sassy Creek (S 1)</option>" +
        "<option>Sassy Creek (S 2)</option>" +
        "<option>Sassy Creek (W)</option>" +
        "<option>Saunders Beach</option>" +
        "<option>Saunders Point</option>" +
        "<option>Sawyers Bay (1)</option>" +
        "<option>Sawyers Bay (2)</option>" +
        "<option>Sawyers Bay (3)</option>" +
        "<option>Sawyers Bay (4)</option>" +
        "<option>Sawyers Bay (5)</option>" +
        "<option>Sawyers Bay (6)</option>" +
        "<option>Sawyers Bay (7)</option>" +
        "<option>Sawyers Bay (8)</option>" +
        "<option>Scarborough</option>" +
        "<option>Scarborough Beach</option>" +
        "<option>Scarborough Jetty</option>" +
        "<option>Scarborough Point</option>" +
        "<option>Scarness-Torquay</option>" +
        "<option>Sceale Bay</option>" +
        "<option>Sceale Bay-Yanerbie</option>" +
        "<option>Schooner (S)</option>" +
        "<option>Schooner Beach</option>" +
        "<option>Schooner Point (N 1)</option>" +
        "<option>Schooner Point (N 2)</option>" +
        "<option>Schooner Point (S)</option>" +
        "<option>Schouten House Beach</option>" +
        "<option>Scorpion Bight</option>" +
        "<option>Scott Bay</option>" +
        "<option>Scott Cove</option>" +
        "<option>Scott Point (east)</option>" +
        "<option>Scott Point (west 1)</option>" +
        "<option>Scott Point (west 2)</option>" +
        "<option>Scott Strait (1)</option>" +
        "<option>Scott Strait (10)</option>" +
        "<option>Scott Strait (11)</option>" +
        "<option>Scott Strait (12)</option>" +
        "<option>Scott Strait (13)</option>" +
        "<option>Scott Strait (14)</option>" +
        "<option>Scott Strait (15)</option>" +
        "<option>Scott Strait (16)</option>" +
        "<option>Scott Strait (2)</option>" +
        "<option>Scott Strait (3)</option>" +
        "<option>Scott Strait (4)</option>" +
        "<option>Scott Strait (5)</option>" +
        "<option>Scott Strait (6)</option>" +
        "<option>Scott Strait (7)</option>" +
        "<option>Scott Strait (8)</option>" +
        "<option>Scott Strait (9)</option>" +
        "<option>Scotties Beach</option>" +
        "<option>Scotts Point</option>" +
        "<option>Sea Bay (west)</option>" +
        "<option>Sea Devil Rivulet (N)</option>" +
        "<option>Sea Devil Rivulet (S)</option>" +
        "<option>Sea Hill Point</option>" +
        "<option>Seabird</option>" +
        "<option>Seabrook (E1)</option>" +
        "<option>Seabrook (E2)</option>" +
        "<option>Seabrook (W)</option>" +
        "<option>Seabrook Beach</option>" +
        "<option>Seabrook Creek</option>" +
        "<option>Seacliff</option>" +
        "<option>Seacliff-Glenelg</option>" +
        "<option>Seaflower Bay (1)</option>" +
        "<option>Seaflower Bay (2)</option>" +
        "<option>Seaflower Bay (3)</option>" +
        "<option>Seaflower Bay (SW)</option>" +
        "<option>Seaflower Bay (W)</option>" +
        "<option>Seaford Point</option>" +
        "<option>Seaforth</option>" +
        "<option>Seal Bay</option>" +
        "<option>Seal Bay (N)</option>" +
        "<option>Seal Bay (S)</option>" +
        "<option>Seal Beach (east)</option>" +
        "<option>Seal Beach (west)</option>" +
        "<option>Seal Ck</option>" +
        "<option>Seal Ck (N)</option>" +
        "<option>Seal Ck (S)</option>" +
        "<option>Seal Point</option>" +
        "<option>Seal-Vivonne bays (1)</option>" +
        "<option>Seal-Vivonne bays (2)</option>" +
        "<option>Seal-Vivonne bays (3)</option>" +
        "<option>Seal-Vivonne bays (4)</option>" +
        "<option>Seal-Vivonne bays (5)</option>" +
        "<option>Seal-Vivonne bays (6)</option>" +
        "<option>Seaplane Bay</option>" +
        "<option>Searcy Bay (1)</option>" +
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
        "<option>Searcy Bay (2)</option>" +
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
        "<option>Searcy Bay (3)</option>" +
        "<option>Searcy Bay (30)</option>" +
        "<option>Searcy Bay (31)</option>" +
        "<option>Searcy Bay (4)</option>" +
        "<option>Searcy Bay (5)</option>" +
        "<option>Searcy Bay (6)</option>" +
        "<option>Searcy Bay (7)</option>" +
        "<option>Searcy Bay (8)</option>" +
        "<option>Searcy Bay (9)</option>" +
        "<option>Searipple Passage (E 1)</option>" +
        "<option>Searipple Passage (E 2)</option>" +
        "<option>Searipple Passage (E 3)</option>" +
        "<option>Searipple Passage (E 4)</option>" +
        "<option>Searipple Passage (E 5)</option>" +
        "<option>Searipple Passage (W 1)</option>" +
        "<option>Searipple Passage (W 2)</option>" +
        "<option>Searipple Passage (W 3)</option>" +
        "<option>Seasick Bay</option>" +
        "<option>Seaton Cove</option>" +
        "<option>Second Beach</option>" +
        "<option>Second Beach</option>" +
        "<option>Second Bluff</option>" +
        "<option>Second Creek</option>" +
        "<option>Second Fence</option>" +
        "<option>Second Fence (N 1)</option>" +
        "<option>Second Fence (N 2)</option>" +
        "<option>Second Stony Pt</option>" +
        "<option>Second Stony Pt (W 1)</option>" +
        "<option>Second Stony Pt (W 2)</option>" +
        "<option>Second Valley (1)</option>" +
        "<option>Second Valley (2)</option>" +
        "<option>Secret Harbour</option>" +
        "<option>Seine Bay</option>" +
        "<option>Seisia</option>" +
        "<option>Seisia (N 1)</option>" +
        "<option>Seisia (N 2)</option>" +
        "<option>Seisia (S)</option>" +
        "<option>Sellicks</option>" +
        "<option>Sellicks-Silver Sands</option>" +
        "<option>Semaphore</option>" +
        "<option>Semaphore Hill (E 1)</option>" +
        "<option>Semaphore Hill (E 2)</option>" +
        "<option>Sensation Beach</option>" +
        "<option>Sensation Beach (east)</option>" +
        "<option>Serasa Beach</option>" +
        "<option>Seri Kenangan Beach</option>" +
        "<option>Seria Beach</option>" +
        "<option>Settlement Beach</option>" +
        "<option>Settlement Cove Lagoon</option>" +
        "<option>Settlement Point</option>" +
        "<option>Settlement Point (1)</option>" +
        "<option>Settlement Point (2)</option>" +
        "<option>Settlement Point (N 1)</option>" +
        "<option>Settlement Point (N 2)</option>" +
        "<option>Settlement Point (N 3)</option>" +
        "<option>Settlement Point (N 4)</option>" +
        "<option>Settlement Point (S )</option>" +
        "<option>Settlement Point (west1)</option>" +
        "<option>Seven Emu Ck</option>" +
        "<option>Seven Emu Ck (E)</option>" +
        "<option>Seven Mile</option>" +
        "<option>Seven Mile Beach</option>" +
        "<option>Seven Mile Beach</option>" +
        "<option>Seven Mile Beach</option>" +
        "<option>Seven Shillings</option>" +
        "<option>Seven Spirit Bay</option>" +
        "<option>Seven Spirit Bay (head)</option>" +
        "<option>Seven-Nine Mile</option>" +
        "<option>Seventeen Seventy</option>" +
        "<option>Seventy Five Mile</option>" +
        "<option>Seymour Beach</option>" +
        "<option>Sg Liang Beach</option>" +
        "<option>Shadwell Pt</option>" +
        "<option>Shadwell Pt (N 1)</option>" +
        "<option>Shadwell Pt (N 2)</option>" +
        "<option>Shadwell Pt (N 3)</option>" +
        "<option>Shag Cove</option>" +
        "<option>Shag Point (north)</option>" +
        "<option>Shag Point (south)</option>" +
        "<option>Shag Rock</option>" +
        "<option>Shag Rock (S)</option>" +
        "<option>Shark Bay (north)</option>" +
        "<option>Shark Bay (south)</option>" +
        "<option>Shark Beach</option>" +
        "<option>Shark Ck</option>" +
        "<option>Shark Point</option>" +
        "<option>Sharp Peak (S 1)</option>" +
        "<option>Sharp Peak (S 2)</option>" +
        "<option>Sharp Peak (S 3)</option>" +
        "<option>Sharp Point (E)</option>" +
        "<option>Sharp Point (E)</option>" +
        "<option>Sharp Point (W 1)</option>" +
        "<option>Sharp Point (W 2)</option>" +
        "<option>Sharp Pt (S 1)</option>" +
        "<option>Sharp Pt (S 2)</option>" +
        "<option>Sharp Pt (S 3)</option>" +
        "<option>Sheep Hill (1)</option>" +
        "<option>Sheep Hill (2)</option>" +
        "<option>Sheep Hill (3)</option>" +
        "<option>Sheepwash Creek</option>" +
        "<option>Shell Beach</option>" +
        "<option>Shell Beach</option>" +
        "<option>Shell Beach</option>" +
        "<option>Shell Beach</option>" +
        "<option>Shellborough</option>" +
        "<option>Shelley Beach</option>" +
        "<option>Shelley Beach</option>" +
        "<option>Shelly</option>" +
        "<option>Shelly (W)</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly Beach</option>" +
        "<option>Shelly Beach (1)</option>" +
        "<option>Shelly Beach (1)</option>" +
        "<option>Shelly Beach (2)</option>" +
        "<option>Shelly Beach (2)</option>" +
        "<option>Shelly Creek (east)</option>" +
        "<option>Shelly Creek (west)</option>" +
        "<option>Shelly Point</option>" +
        "<option>Shelly Point (S 1)</option>" +
        "<option>Shelly Point (S 2)</option>" +
        "<option>Sheoak Flat</option>" +
        "<option>Sheoak Flat (north)</option>" +
        "<option>Sheoak Point</option>" +
        "<option>Sheoak beach</option>" +
        "<option>Sheperd Bay (2)</option>" +
        "<option>Sheperd Bay (3)</option>" +
        "<option>Sheperd Bay (4)</option>" +
        "<option>Sheperd Bay (5)</option>" +
        "<option>Sheraton Mirage Gold Coast</option>" +
        "<option>Sheringa (south 1)</option>" +
        "<option>Sheringa (south 2)</option>" +
        "<option>Sheringa (south 3)</option>" +
        "<option>Sheringa (south 4)</option>" +
        "<option>Sheringa (south 5)</option>" +
        "<option>Sheringa (south 6)</option>" +
        "<option>Sheringa (south 7)</option>" +
        "<option>Sheringa (south 8)</option>" +
        "<option>Sheringa Beach</option>" +
        "<option>Sherlock Bay (1)</option>" +
        "<option>Sherlock Bay (10)</option>" +
        "<option>Sherlock Bay (2)</option>" +
        "<option>Sherlock Bay (3)</option>" +
        "<option>Sherlock Bay (4)</option>" +
        "<option>Sherlock Bay (5)</option>" +
        "<option>Sherlock Bay (6)</option>" +
        "<option>Sherlock Bay (7)</option>" +
        "<option>Sherlock Bay (8)</option>" +
        "<option>Sherlock Bay (9)</option>" +
        "<option>Sherlock River (E)</option>" +
        "<option>Sherlock River (W)</option>" +
        "<option>Shingley Beach</option>" +
        "<option>Shoal (Hideaway) Bay</option>" +
        "<option>Shoal Bay</option>" +
        "<option>Shoal Bay</option>" +
        "<option>Shoal Bay</option>" +
        "<option>Shoal Bay Is (1)</option>" +
        "<option>Shoal Bay Is (10)</option>" +
        "<option>Shoal Bay Is (11)</option>" +
        "<option>Shoal Bay Is (12)</option>" +
        "<option>Shoal Bay Is (2)</option>" +
        "<option>Shoal Bay Is (3)</option>" +
        "<option>Shoal Bay Is (4)</option>" +
        "<option>Shoal Bay Is (5)</option>" +
        "<option>Shoal Bay Is (6)</option>" +
        "<option>Shoal Bay Is (7)</option>" +
        "<option>Shoal Bay Is (8)</option>" +
        "<option>Shoal Bay Is (9)</option>" +
        "<option>Shoal Cape (E 1)</option>" +
        "<option>Shoal Cape (E 2)</option>" +
        "<option>Shoal Cape (W 1)</option>" +
        "<option>Shoal Cape (W 2)</option>" +
        "<option>Shoal Flats</option>" +
        "<option>Shoal Inlet (E)</option>" +
        "<option>Shoal Point</option>" +
        "<option>Shoal Point</option>" +
        "<option>Shoal Point (N)</option>" +
        "<option>Shoal Point (spit)</option>" +
        "<option>Shoalwater</option>" +
        "<option>Shoalwater Creek</option>" +
        "<option>Shoalwater Point</option>" +
        "<option>Shooting Range Rock Platform</option>" +
        "<option>Short Beach</option>" +
        "<option>Short Beach</option>" +
        "<option>Short Point</option>" +
        "<option>Shothole Creek</option>" +
        "<option>Shoulder Hill</option>" +
        "<option>Silas Beach</option>" +
        "<option>Silica Beach</option>" +
        "<option>Silica Beach</option>" +
        "<option>Silver Beach</option>" +
        "<option>Silver Beach</option>" +
        "<option>Silver Sands</option>" +
        "<option>Silver Sands</option>" +
        "<option>Silversands</option>" +
        "<option>Silvid Bay (north)</option>" +
        "<option>Sim Cove</option>" +
        "<option>Simpson Island (N)</option>" +
        "<option>Simpson Island (W)</option>" +
        "<option>Simpson Point (south 1)</option>" +
        "<option>Simpson Point (south 2)</option>" +
        "<option>Simpson Point (west)</option>" +
        "<option>Sinclaire Bay</option>" +
        "<option>Sinclaire Bay (west)</option>" +
        "<option>Single Tree Plain (N)</option>" +
        "<option>Single Tree Plain (S)</option>" +
        "<option>Singleton</option>" +
        "<option>Sir Richard Is (N 1)</option>" +
        "<option>Sir Richard Is (N 2)</option>" +
        "<option>Sir Richard Is (S 1)</option>" +
        "<option>Sir Richard Is (S 2)</option>" +
        "<option>Sirius Cove</option>" +
        "<option>Sisters Bay</option>" +
        "<option>Sisters Beach 1</option>" +
        "<option>Sisters Beach 2</option>" +
        "<option>Sisters Beach 3</option>" +
        "<option>Sisters Beach 4</option>" +
        "<option>Sisters Beach 5</option>" +
        "<option>Six Mile</option>" +
        "<option>Six Mile</option>" +
        "<option>Skardon R</option>" +
        "<option>Skardon R (S 1)</option>" +
        "<option>Skardon R (S 2)</option>" +
        "<option>Skardon-Jackson R</option>" +
        "<option>Skeleton Bay</option>" +
        "<option>Skeleton Bay</option>" +
        "<option>Skeleton Ck</option>" +
        "<option>Skeleton Ck (E)</option>" +
        "<option>Skeleton Pt</option>" +
        "<option>Skeleton Pt (N 1)</option>" +
        "<option>Skeleton Pt (N 2)</option>" +
        "<option>Skeleton Pt (N 3)</option>" +
        "<option>Skeleton Pt (S)</option>" +
        "<option>Skennars Head Rock Platform</option>" +
        "<option>Skillion Head</option>" +
        "<option>Skippy Rock (N 1)</option>" +
        "<option>Skippy Rock (N 2)</option>" +
        "<option>Skippy Rock (N 3)</option>" +
        "<option>Skippy Rock (N 4)</option>" +
        "<option>Skippy Rock (N 5)</option>" +
        "<option>Skippy Rock (N 6)</option>" +
        "<option>Skippy Rock (N 7)</option>" +
        "<option>Skippy Rock (S 1)</option>" +
        "<option>Skippy Rock (S 2)</option>" +
        "<option>Skippy Rocks</option>" +
        "<option>Skippy Rocks (W 1)</option>" +
        "<option>Skippy Rocks (W 2)</option>" +
        "<option>Skippy Rocks (W 3)</option>" +
        "<option>Skipworths Creek</option>" +
        "<option>Skirmish Pt</option>" +
        "<option>Skirmish Pt (E 1)</option>" +
        "<option>Skirmish Pt (E 2)</option>" +
        "<option>Skirmish Pt (E 3)</option>" +
        "<option>Skirmish Pt (E 4)</option>" +
        "<option>Skirmish-South points</option>" +
        "<option>Slacks Point</option>" +
        "<option>Slade Bay</option>" +
        "<option>Slade Point</option>" +
        "<option>Slade Point (1)</option>" +
        "<option>Slade Point (2)</option>" +
        "<option>Slade Pt (N 1)</option>" +
        "<option>Slade Pt (N 2)</option>" +
        "<option>Slaters Bay</option>" +
        "<option>Sleaford Bay (1)</option>" +
        "<option>Sleaford Bay (2)</option>" +
        "<option>Sleaford Bay (3)</option>" +
        "<option>Sleaford Bay (4)</option>" +
        "<option>Sleaford Bay (5)</option>" +
        "<option>Sleaford Bay (6)</option>" +
        "<option>Sleaford Bay (7)</option>" +
        "<option>Sleaford Bay (8)</option>" +
        "<option>Sleaford Bay (9)</option>" +
        "<option>Sleepy (W)</option>" +
        "<option>Sleepy Beach</option>" +
        "<option>Sloop Lagoon</option>" +
        "<option>Sloop Point (N 1)</option>" +
        "<option>Sloop Point (N 2)</option>" +
        "<option>Sloop Point (N 3)</option>" +
        "<option>Sloping Main</option>" +
        "<option>Sloping Point (S)</option>" +
        "<option>Smalleys Beach</option>" +
        "<option>Smiley Pt</option>" +
        "<option>Smiley Pt (E)</option>" +
        "<option>Smith Bay (east)</option>" +
        "<option>Smith Bay (marina)</option>" +
        "<option>Smith Bay (west)</option>" +
        "<option>Smith Point</option>" +
        "<option>Smith Point (E 1)</option>" +
        "<option>Smith Point (E 2)</option>" +
        "<option>Smith Point (E 3)</option>" +
        "<option>Smith Point (E 4)</option>" +
        "<option>Smith Point (E 5)</option>" +
        "<option>Smith Point (E 6)</option>" +
        "<option>Smith Point (E 7)</option>" +
        "<option>Smith Point (S 1)</option>" +
        "<option>Smith Point (S 2)</option>" +
        "<option>Smith Rock (1)</option>" +
        "<option>Smith Rock (2)</option>" +
        "<option>Smiths Beach</option>" +
        "<option>Smiths Beach (1)</option>" +
        "<option>Smiths Beach (2)</option>" +
        "<option>Smiths Gulch</option>" +
        "<option>Smiths Road</option>" +
        "<option>Smoky Bay</option>" +
        "<option>Smoky Bay (north)</option>" +
        "<option>Smoky Bay (south 1)</option>" +
        "<option>Smoky Bay (south 2)</option>" +
        "<option>Smoky Bay (south 3)</option>" +
        "<option>Smooth Pool</option>" +
        "<option>Smooth Pool (east 1)</option>" +
        "<option>Smooth Pool (east 2)</option>" +
        "<option>Smooth Pool (north)</option>" +
        "<option>Smoothys Point (S)</option>" +
        "<option>Smugglers Cavern</option>" +
        "<option>Smugglers Cove</option>" +
        "<option>Snake Inlet</option>" +
        "<option>Snake Island</option>" +
        "<option>Snake Point (W 1)</option>" +
        "<option>Snake Point (W 2)</option>" +
        "<option>Snapper Point</option>" +
        "<option>Snapper Point</option>" +
        "<option>Snapper Point (east)</option>" +
        "<option>Snapper Point (west)</option>" +
        "<option>Snapper Point (west)</option>" +
        "<option>Snapper Rocks</option>" +
        "<option>Snapperman</option>" +
        "<option>Snellings Beach</option>" +
        "<option>Snug Bay (S)</option>" +
        "<option>Snug Beach</option>" +
        "<option>Snug Cove</option>" +
        "<option>Snug Cove</option>" +
        "<option>Snug Cove (west)</option>" +
        "<option>Snug Cove (west)</option>" +
        "<option>Soldiers Beach</option>" +
        "<option>Soldiers Pt</option>" +
        "<option>Soldiers Pt (S)</option>" +
        "<option>Soldiers Rocks (S 1)</option>" +
        "<option>Soldiers Rocks (S 2)</option>" +
        "<option>Somerset Bay</option>" +
        "<option>Somerset Beach</option>" +
        "<option>Somerton</option>" +
        "<option>Sommers Bay</option>" +
        "<option>Sorrento Beach</option>" +
        "<option>Sorrento Beach (N)</option>" +
        "<option>South Arm Beach</option>" +
        "<option>South Arm Neck (N)</option>" +
        "<option>South Ballina - Evans Head</option>" +
        "<option>South Bay</option>" +
        "<option>South Bay (S 1)</option>" +
        "<option>South Bay (S 2)</option>" +
        "<option>South Beach</option>" +
        "<option>South Beach</option>" +
        "<option>South Beach (1)</option>" +
        "<option>South Beach (2)</option>" +
        "<option>South Beach (3)</option>" +
        "<option>South Beach (4)</option>" +
        "<option>South Bilgola Headland</option>" +
        "<option>South Burnie Beach</option>" +
        "<option>South Cape Bay (1)</option>" +
        "<option>South Cape Bay (2)</option>" +
        "<option>South Cape Bay (3)</option>" +
        "<option>South Coffs Island</option>" +
        "<option>South Coogee Rock Platforms</option>" +
        "<option>South Curl Curl Headland</option>" +
        "<option>South East Bight (N 1)</option>" +
        "<option>South East Bight (N 2)</option>" +
        "<option>South East Bight (S 1)</option>" +
        "<option>South East Bight (S 2)</option>" +
        "<option>South East Bight (S 3)</option>" +
        "<option>South East Bight (S 4)</option>" +
        "<option>South East Cape Rivulet</option>" +
        "<option>South East Corner</option>" +
        "<option>South Golden</option>" +
        "<option>South Gregory</option>" +
        "<option>South Head</option>" +
        "<option>South Head</option>" +
        "<option>South Head</option>" +
        "<option>South Head</option>" +
        "<option>South Lagoon</option>" +
        "<option>South Mitchell R</option>" +
        "<option>South Mitchell R (N)</option>" +
        "<option>South Mitchell R (S)</option>" +
        "<option>South Passage</option>" +
        "<option>South Passage (S)</option>" +
        "<option>South Point</option>" +
        "<option>South Point (1)</option>" +
        "<option>South Point (2)</option>" +
        "<option>South Point (E)</option>" +
        "<option>South Shepherd Beach</option>" +
        "<option>South Smoky - Hat Head</option>" +
        "<option>South Stradbroke</option>" +
        "<option>South Wall</option>" +
        "<option>South Warrinup</option>" +
        "<option>South Warrinup (E 1)</option>" +
        "<option>South Warrinup (E 2)</option>" +
        "<option>South West Is (N 1)</option>" +
        "<option>South West Is (N 2)</option>" +
        "<option>South West Is (N 3)</option>" +
        "<option>South West Is (N 4)</option>" +
        "<option>South West Is (N 5)</option>" +
        "<option>South West Is (N 6)</option>" +
        "<option>South West Pt (S 1)</option>" +
        "<option>South West Pt (S 2)</option>" +
        "<option>South West Pt (W 1)</option>" +
        "<option>South West Pt (W 2)</option>" +
        "<option>Southend</option>" +
        "<option>Southend (main)</option>" +
        "<option>Southend (west)</option>" +
        "<option>Southend Jetty</option>" +
        "<option>Southend/Burdon</option>" +
        "<option>Southgate Dunes (N)</option>" +
        "<option>Southgate Dunes (S)</option>" +
        "<option>Southport</option>" +
        "<option>Southport</option>" +
        "<option>Southport</option>" +
        "<option>Southport Bluff (N 1)</option>" +
        "<option>Southport Bluff (N 2)</option>" +
        "<option>Southport Bluff (N 3)</option>" +
        "<option>Southport Bluff (S)</option>" +
        "<option>Southport Lagoon</option>" +
        "<option>Southport Lagoon (S 1)</option>" +
        "<option>Southport Lagoon (S 2)</option>" +
        "<option>Southport Narrows</option>" +
        "<option>Sovereign</option>" +
        "<option>Spain Bay (1)</option>" +
        "<option>Spain Bay (2)</option>" +
        "<option>Spain Bay (3)</option>" +
        "<option>Spalding Cove</option>" +
        "<option>Spalding Cove (north 1)</option>" +
        "<option>Spalding Cove (north 2)</option>" +
        "<option>Spear Point (west 1)</option>" +
        "<option>Spear Point (west 2)</option>" +
        "<option>Speed Point</option>" +
        "<option>Speed Point (north 1)</option>" +
        "<option>Speed Point (north 2)</option>" +
        "<option>Speed Point (north 3)</option>" +
        "<option>Speed Point-Smooth Pool</option>" +
        "<option>Spero River (1)</option>" +
        "<option>Spero River (2)</option>" +
        "<option>Spero River (3)</option>" +
        "<option>Spero River (4)</option>" +
        "<option>Spikey Beach (S)</option>" +
        "<option>Spiky Beach</option>" +
        "<option>Spillen Ck (E)</option>" +
        "<option>Spillen Ck (W)</option>" +
        "<option>Spit (N)</option>" +
        "<option>Spit (S)</option>" +
        "<option>Spit End</option>" +
        "<option>Spit End (north)</option>" +
        "<option>Spit Point</option>" +
        "<option>Spit Point</option>" +
        "<option>Spit Point (E 1)</option>" +
        "<option>Spit Point (E 2)</option>" +
        "<option>Spit Point (E)</option>" +
        "<option>Spit Point (S 1)</option>" +
        "<option>Spit Point (S 2)</option>" +
        "<option>Spit Point (S 3)</option>" +
        "<option>Spitfire</option>" +
        "<option>Splitters Creek</option>" +
        "<option>Spring Beach</option>" +
        "<option>Spring Ck</option>" +
        "<option>Spring Ck</option>" +
        "<option>Springlawn Beach</option>" +
        "<option>Springs Road</option>" +
        "<option>Springy Creek</option>" +
        "<option>Springy Creek (east)</option>" +
        "<option>Square Bay</option>" +
        "<option>Square patch</option>" +
        "<option>Squeaky Beach</option>" +
        "<option>St Albans Bay</option>" +
        "<option>St Davids Bay (1)</option>" +
        "<option>St Davids Bay (2)</option>" +
        "<option>St Davids Bay (3)</option>" +
        "<option>St Davids Bay (4)</option>" +
        "<option>St Davids Bay (5)</option>" +
        "<option>St Helens Beach</option>" +
        "<option>St Kilda Pier-Port Melbourne</option>" +
        "<option>St Mary Bay</option>" +
        "<option>St Mary Bay (north)</option>" +
        "<option>St Mary Inlet (E)</option>" +
        "<option>St Mary Inlet (W)</option>" +
        "<option>St Michael's Cave</option>" +
        "<option>St Peter Island 10</option>" +
        "<option>St Peter Island 11</option>" +
        "<option>St Peter Island 12</option>" +
        "<option>St Peter Island 13</option>" +
        "<option>St Peter Island 14</option>" +
        "<option>St Peter Island 15</option>" +
        "<option>St Peter Island 4</option>" +
        "<option>St Peter Island 5</option>" +
        "<option>St Peter Island 6</option>" +
        "<option>St Peter spit (north)</option>" +
        "<option>St Peter spit (south 1)</option>" +
        "<option>St Peter spit (south 2)</option>" +
        "<option>Staaten River (N 1)</option>" +
        "<option>Staaten River (N 2)</option>" +
        "<option>Staaten River (S)</option>" +
        "<option>Stackys Bight (1)</option>" +
        "<option>Stackys Bight (2)</option>" +
        "<option>Stamford Beach</option>" +
        "<option>Stanage Bay</option>" +
        "<option>Stanage Point (1)</option>" +
        "<option>Stanage Point (2)</option>" +
        "<option>Stanley Hill (1)</option>" +
        "<option>Stanley Hill (2)</option>" +
        "<option>Stanley Hill (3)</option>" +
        "<option>Stansbury</option>" +
        "<option>Stansbury (south)</option>" +
        "<option>Stansbury jetty</option>" +
        "<option>Stapleton Beach</option>" +
        "<option>Stapleton Point (S)</option>" +
        "<option>Starcke R</option>" +
        "<option>Stark Bay</option>" +
        "<option>Stark Bay (N 1)</option>" +
        "<option>Stark Bay (N 2)</option>" +
        "<option>Starvation Boat Hbr</option>" +
        "<option>Starvation Boat Hbr 2</option>" +
        "<option>Station / Barrenjoey Beach</option>" +
        "<option>Station Point</option>" +
        "<option>Station Point (east)</option>" +
        "<option>Station Point (west)</option>" +
        "<option>Statue Bay</option>" +
        "<option>Steels Beach</option>" +
        "<option>Steep Head Is (E 1)</option>" +
        "<option>Steep Head Is (E 2)</option>" +
        "<option>Steep Head Is (E 3)</option>" +
        "<option>Steep Head Is (E 4)</option>" +
        "<option>Steep Head Is (E 5)</option>" +
        "<option>Steep Head Is (E 6)</option>" +
        "<option>Steep Head Is (E 7)</option>" +
        "<option>Steep Head Is (E 8)</option>" +
        "<option>Steep Head Is (E 9)</option>" +
        "<option>Steep Point (E 1)</option>" +
        "<option>Steep Point (E 2)</option>" +
        "<option>Steep Point (E)</option>" +
        "<option>Stenhouse Bay (centre)</option>" +
        "<option>Stenhouse Bay (jetty)</option>" +
        "<option>Stenhouse Bay (north)</option>" +
        "<option>Stephens Bay</option>" +
        "<option>Stephens Bay (N 1)</option>" +
        "<option>Stephens Bay (N 2)</option>" +
        "<option>Stephens Bay (N 3)</option>" +
        "<option>Stephens Bay (N 4)</option>" +
        "<option>Stevensons Well</option>" +
        "<option>Stewart Point</option>" +
        "<option>Stewart Point (S 1)</option>" +
        "<option>Stewart Point (S 2)</option>" +
        "<option>Stewart Point (S 3)</option>" +
        "<option>Stewart R (N)</option>" +
        "<option>Stewart R (S)</option>" +
        "<option>Stewarts Bay</option>" +
        "<option>Stingray Bay</option>" +
        "<option>Stingray Head</option>" +
        "<option>Stinking Bay</option>" +
        "<option>Stinking Beach</option>" +
        "<option>Stinking Beach (S)</option>" +
        "<option>Stinking Cove</option>" +
        "<option>Stinky Bay</option>" +
        "<option>Stirling Beach</option>" +
        "<option>Stockton Beach</option>" +
        "<option>Stockyard Ck</option>" +
        "<option>Stockyard Creek</option>" +
        "<option>Stockyard Creek</option>" +
        "<option>Stockyard Point (north)</option>" +
        "<option>Stokes Bay (1)</option>" +
        "<option>Stokes Bay (2)</option>" +
        "<option>Stokes Bay (3)</option>" +
        "<option>Stokes Inlet (E)</option>" +
        "<option>Stokes Inlet (W)</option>" +
        "<option>Stokes Point (E)</option>" +
        "<option>Stong Rise (3)</option>" +
        "<option>Stony Head</option>" +
        "<option>Stony Head (E)</option>" +
        "<option>Stony Head (W)</option>" +
        "<option>Stony Point (west)</option>" +
        "<option>Stony Rise (1)</option>" +
        "<option>Stony Rise (2)</option>" +
        "<option>Store Beach</option>" +
        "<option>Store Point (W)</option>" +
        "<option>Storm Bay</option>" +
        "<option>Strawbridge Point</option>" +
        "<option>Stream (N)</option>" +
        "<option>Stream (S 1)</option>" +
        "<option>Stream (S 2)</option>" +
        "<option>Stream Beach</option>" +
        "<option>Streeton Strait (S 1)</option>" +
        "<option>Streeton Strait (S 2)</option>" +
        "<option>Streeton Strait (S 3)</option>" +
        "<option>Streeton Strait (S 4)</option>" +
        "<option>Streeton Strait (S 5)</option>" +
        "<option>Streets Beach Lagoon</option>" +
        "<option>Strickland Bay (1)</option>" +
        "<option>Strickland Bay (2)</option>" +
        "<option>Strickland Bay (3)</option>" +
        "<option>Strickland Bay (E 1)</option>" +
        "<option>Strickland Bay (E 2)</option>" +
        "<option>Strickland Bay (E 3)</option>" +
        "<option>Studland Bay</option>" +
        "<option>Stumpys Bay</option>" +
        "<option>Stumpys Rock</option>" +
        "<option>Stun'sail Boom</option>" +
        "<option>Sturt  Bay</option>" +
        "<option>Success Harbour</option>" +
        "<option>Sugraloaf Rock (S)</option>" +
        "<option>Suicide Point</option>" +
        "<option>Suicide Point (S)</option>" +
        "<option>Sulphur Creek</option>" +
        "<option>Sultana Point</option>" +
        "<option>Sundown Creek (N)</option>" +
        "<option>Sundown Point (N 1)</option>" +
        "<option>Sundown Point (N 2)</option>" +
        "<option>Sundown Point (S 1)</option>" +
        "<option>Sundown Point (S 2)</option>" +
        "<option>Sunlovers</option>" +
        "<option>Sunny Bay</option>" +
        "<option>Sunrise</option>" +
        "<option>Sunset Bay</option>" +
        "<option>Sunset Bay</option>" +
        "<option>Sunset Beach</option>" +
        "<option>Sunshine</option>" +
        "<option>Sunshine-Coolum</option>" +
        "<option>Surfers</option>" +
        "<option>Surfers Paradise</option>" +
        "<option>Surfleet Cove</option>" +
        "<option>Surfleet Point (west)</option>" +
        "<option>Surprise Bay</option>" +
        "<option>Surprise Bay</option>" +
        "<option>Surveyors Bay</option>" +
        "<option>Surveyors Cove</option>" +
        "<option>Susan Bay (E)</option>" +
        "<option>Susan Bay (W)</option>" +
        "<option>Suttons-Margate</option>" +
        "<option>Svendsen</option>" +
        "<option>Svendsen (north)</option>" +
        "<option>Svenor Point (E)</option>" +
        "<option>Svenor Point (N)</option>" +
        "<option>Swallow Creek</option>" +
        "<option>Swallow Creek (E)</option>" +
        "<option>Swamp Bay</option>" +
        "<option>Swan Hill</option>" +
        "<option>Swan Pt (S)</option>" +
        "<option>Swan Pt (W)</option>" +
        "<option>Swanbourne Beach</option>" +
        "<option>Swansea boat ramp</option>" +
        "<option>Swansea caravan park</option>" +
        "<option>Swanwick</option>" +
        "<option>Swift Bay (1)</option>" +
        "<option>Swift Bay (2)</option>" +
        "<option>Swift Bay (N 1)</option>" +
        "<option>Swift Bay (N 2)</option>" +
        "<option>Swift Bay (N 3)</option>" +
        "<option>Swift Bay (N 4)</option>" +
        "<option>Swift Bay (W 1)</option>" +
        "<option>Swift Bay (W 10)</option>" +
        "<option>Swift Bay (W 2)</option>" +
        "<option>Swift Bay (W 3)</option>" +
        "<option>Swift Bay (W 4)</option>" +
        "<option>Swift Bay (W 5)</option>" +
        "<option>Swift Bay (W 6)</option>" +
        "<option>Swift Bay (W 7)</option>" +
        "<option>Swift Bay (W 8)</option>" +
        "<option>Swift Bay (W 9)</option>" +
        "<option>Swifts Point (S 1)</option>" +
        "<option>Swifts Point (S 2)</option>" +
        "<option>Swifts Point (S 3)</option>" +
        "<option>Swifts Point (S 4)</option>" +
        "<option>Swifts Point (S 5)</option>" +
        "<option>Swimcart (N)</option>" +
        "<option>Swimcart Beach</option>" +
        "<option>Swimming Beach</option>" +
        "<option>Swimming Beach (E)</option>" +
        "<option>Swincers Rocks</option>" +
        "<option>Swincers Rocks (south)</option>" +
        "<option>Syrell Ck</option>" +
        "</dataList>";

    var tBeaches =
        "<datalist id='mylist'>" +
        "<option>T Bone Bay</option>" +
        "<option>T Cove</option>" +
        "<option>TABLE ROCK</option>" +
        "<option>TABOURIE</option>" +
        "<option>TACKING POINT NORTH</option>" +
        "<option>TACKING POINT/LIGHTHOUSE</option>" +
        "<option>TALLOW</option>" +
        "<option>TALLOWS</option>" +
        "<option>TAMARAMA</option>" +
        "<option>TAMBOON - SYDENHAM INLET</option>" +
        "<option>TAMBOON INLET</option>" +
        "<option>TAPALLA POINT / SHARK NET BEACH</option>" +
        "<option>TARANDORE POINT</option>" +
        "<option>TARGET</option>" +
        "<option>TARGET NORTH 1</option>" +
        "<option>TARGET NORTH 2</option>" +
        "<option>TATHRA</option>" +
        "<option>TEA TREE CREEK</option>" +
        "<option>TEN MILE</option>" +
        "<option>TEN MILE CREEK</option>" +
        "<option>TERMEIL LAKE</option>" +
        "<option>TERRIGAL</option>" +
        "<option>TERRIGAL HAVEN</option>" +
        "<option>THE BASIN</option>" +
        "<option>THE BASIN EAST</option>" +
        "<option>THE BASIN WEST</option>" +
        "<option>THE BAY</option>" +
        "<option>THE BLOWHOLE SOUTH 1</option>" +
        "<option>THE BLOWHOLE SOUTH 2</option>" +
        "<option>THE BLUFF</option>" +
        "<option>THE CAVES 1</option>" +
        "<option>THE CAVES 2</option>" +
        "<option>THE CHANNEL</option>" +
        "<option>THE COLONNADES</option>" +
        "<option>THE CRAIGS EAST</option>" +
        "<option>THE CRAIGS WEST 1</option>" +
        "<option>THE CRAIGS WEST 2</option>" +
        "<option>THE ENTRANCE</option>" +
        "<option>THE GABLE</option>" +
        "<option>THE GAP</option>" +
        "<option>THE GULF</option>" +
        "<option>THE GULF (S)</option>" +
        "<option>THE HONEYSUCKLES</option>" +
        "<option>THE JETTY</option>" +
        "<option>THE MIDDY</option>" +
        "<option>THE OAKS</option>" +
        "<option>THE PASS</option>" +
        "<option>THE PINNACLES</option>" +
        "<option>THE WRECK</option>" +
        "<option>THIRD</option>" +
        "<option>THIRROUL</option>" +
        "<option>THORNY</option>" +
        "<option>THREE MILE</option>" +
        "<option>THURRA</option>" +
        "<option>THURRA SOUTH</option>" +
        "<option>TICONDEROGA BAY</option>" +
        "<option>TIDAL RIVER/NORMAN</option>" +
        "<option>TILBA TILBA</option>" +
        "<option>TILBA TILBA HEAD</option>" +
        "<option>TILBA TILBA NORTH</option>" +
        "<option>TIMBER</option>" +
        "<option>TOMAKIN</option>" +
        "<option>TOMAKIN COVE</option>" +
        "<option>TONGUE POINT</option>" +
        "<option>TOOWOON BAY</option>" +
        "<option>TORARAGO POINT</option>" +
        "<option>TORQUAY</option>" +
        "<option>TOWER</option>" +
        "<option>TOWN</option>" +
        "<option>TOWRADGI</option>" +
        "<option>TRANQUILITY BAY</option>" +
        "<option>TREACHERY/YAGON</option>" +
        "<option>TREE PT (1)</option>" +
        "<option>TREE PT (2)</option>" +
        "<option>TREE PT (3)</option>" +
        "<option>TUGGERAH/NORTH ENTRANCE</option>" +
        "<option>TUNCURRY</option>" +
        "<option>TURA HEAD</option>" +
        "<option>TURA/SHORT POINT</option>" +
        "<option>TURIMETTA</option>" +
        "<option>TURNERS</option>" +
        "<option>TUROSS ENTRANCE</option>" +
        "<option>TUROSS HEAD</option>" +
        "<option>TWELVE APOSTLES</option>" +
        "<option>TWIN REEFS</option>" +
        "<option>TWO MILE BAY  WEST</option>" +
        "<option>TWO MILE BAY CENTRE</option>" +
        "<option>Tabbagai Gap</option>" +
        "<option>Table Head (north)</option>" +
        "<option>Table Head (south 1)</option>" +
        "<option>Table Head (south 2)</option>" +
        "<option>Table Head (south 3)</option>" +
        "<option>Table Head (south 4)</option>" +
        "<option>Table Head (south 5)</option>" +
        "<option>Tagon</option>" +
        "<option>Tagon Point (W 1)</option>" +
        "<option>Tagon Point (W 2)</option>" +
        "<option>Talboys Pt (N)</option>" +
        "<option>Talboys Pt (S)</option>" +
        "<option>Talc Head (west)</option>" +
        "<option>Talia (north)</option>" +
        "<option>Tallallebela</option>" +
        "<option>Tallebudgera</option>" +
        "<option>Tallebudgera Creek</option>" +
        "<option>Tallows/Suffolk Park/Broken Head</option>" +
        "<option>Tam O'Shanter Bay</option>" +
        "<option>Tam O'Shanter Bay (E 1)</option>" +
        "<option>Tam O'Shanter Bay (E 2)</option>" +
        "<option>Tam O'Shanter Bay (E 3)</option>" +
        "<option>Tamarinda</option>" +
        "<option>Tanby Point</option>" +
        "<option>Tannum Sands</option>" +
        "<option>Tannum Sands (north)</option>" +
        "<option>Tantabiddi Creek (N)</option>" +
        "<option>Tantabiddi Creek (S)</option>" +
        "<option>Tantabiddi Well</option>" +
        "<option>Tantabiddi Well (S)</option>" +
        "<option>Taren Point</option>" +
        "<option>Taren Point (S)</option>" +
        "<option>Taren Spit Beach</option>" +
        "<option>Taroona High School (S 1)</option>" +
        "<option>Taroona High School (S 2)</option>" +
        "<option>Taroona Point</option>" +
        "<option>Taroons Beach</option>" +
        "<option>Tasman Bay</option>" +
        "<option>Tasman River</option>" +
        "<option>Tathra Head</option>" +
        "<option>Tatlows Beach</option>" +
        "<option>Taylor Bay</option>" +
        "<option>Taylor Bay (N)</option>" +
        "<option>Taylor Bay (S)</option>" +
        "<option>Taylor Boat Harbour</option>" +
        "<option>Taylor Boat Harbour (W)</option>" +
        "<option>Taylors</option>" +
        "<option>Taylors Bay</option>" +
        "<option>Taylors Beach</option>" +
        "<option>Taylors Beach</option>" +
        "<option>Taylors Beach (N)</option>" +
        "<option>Taylors Landing</option>" +
        "<option>Taylors Landing (north)</option>" +
        "<option>Taylors Landing (south 1)</option>" +
        "<option>Taylors Landing (south 2)</option>" +
        "<option>Taylors Reef (1)</option>" +
        "<option>Taylors Reef (2)</option>" +
        "<option>Tchalingaby</option>" +
        "<option>Tchalingaby (east 1)</option>" +
        "<option>Tchalingaby (east 2)</option>" +
        "<option>Tchalingaby (east 3)</option>" +
        "<option>Tchalingaby (east 4)</option>" +
        "<option>Tchalingaby (east 5)</option>" +
        "<option>Tchindi</option>" +
        "<option>Tchindi (north)</option>" +
        "<option>Tea Tree</option>" +
        "<option>Tea Tree</option>" +
        "<option>Tea Tree Bay</option>" +
        "<option>Tea Tree Creek</option>" +
        "<option>Tea Tree-Murray Mouth</option>" +
        "<option>Tea TreePoint (W)</option>" +
        "<option>Teakle Hill</option>" +
        "<option>Tebrakunna Bay (1)</option>" +
        "<option>Tebrakunna Bay (2)</option>" +
        "<option>Tebrakunna Bay (3)</option>" +
        "<option>Telisai Beach and Recreational Park</option>" +
        "<option>Telowie Beach</option>" +
        "<option>Temma Harbour</option>" +
        "<option>Temple Bay (N 1)</option>" +
        "<option>Temple Bay (N 2)</option>" +
        "<option>Temple Bay (N 3)</option>" +
        "<option>Temple Bay (N 4)</option>" +
        "<option>Temple Bay (N 5)</option>" +
        "<option>Temple Bay (N 6)</option>" +
        "<option>Temple Ck</option>" +
        "<option>Templestowe Beach</option>" +
        "<option>Ten Mile Beach</option>" +
        "<option>Ten Mile Beach</option>" +
        "<option>Ten Mile Beach - Shark Bay</option>" +
        "<option>Ten Mile Lagoon</option>" +
        "<option>Tennis Ball Rock (N)</option>" +
        "<option>Tennis Ball Rock (S)</option>" +
        "<option>Tennyson</option>" +
        "<option>Tent Island (E)</option>" +
        "<option>Tent Island (N 1)</option>" +
        "<option>Tent Island (N 2)</option>" +
        "<option>Tent Island (N 3)</option>" +
        "<option>Tent Island (S 1)</option>" +
        "<option>Tent Island (S 2)</option>" +
        "<option>Tent Island (S 3)</option>" +
        "<option>Tent Island (S 4)</option>" +
        "<option>Tent Island (S 5)</option>" +
        "<option>Termination Beach</option>" +
        "<option>Tern Cliffs</option>" +
        "<option>Tern Cliffs (S 1)</option>" +
        "<option>Tern Cliffs (S 2)</option>" +
        "<option>Tern Cliffs (S 3)</option>" +
        "<option>Tern Cliffs (S 4)</option>" +
        "<option>Tern Cliffs (S 5)</option>" +
        "<option>Terrace Point</option>" +
        "<option>The Bamboos</option>" +
        "<option>The Bamboos (point 1)</option>" +
        "<option>The Bamboos (point 2)</option>" +
        "<option>The Bamboos (point 3)</option>" +
        "<option>The Bamboos (point 4)</option>" +
        "<option>The Basin</option>" +
        "<option>The Basin</option>" +
        "<option>The Beak (1)</option>" +
        "<option>The Beak (2)</option>" +
        "<option>The Bluff</option>" +
        "<option>The Bluff</option>" +
        "<option>The Boot</option>" +
        "<option>The Cape</option>" +
        "<option>The Cobblers</option>" +
        "<option>The Coorong</option>" +
        "<option>The Cut</option>" +
        "<option>The Dock (1)</option>" +
        "<option>The Dock (2)</option>" +
        "<option>The Dock (3)</option>" +
        "<option>The Dock (4)</option>" +
        "<option>The Dock (5)</option>" +
        "<option>The Docks</option>" +
        "<option>The Dreadnoughts (west 1)</option>" +
        "<option>The Dreadnoughts (west 2)</option>" +
        "<option>The Dreadnoughts (west 3)</option>" +
        "<option>The Eagles Claw</option>" +
        "<option>The Empire Hotel and Country Club</option>" +
        "<option>The Fish Pond</option>" +
        "<option>The Fishing Place</option>" +
        "<option>The Friendly Beaches (1)</option>" +
        "<option>The Friendly Beaches (2)</option>" +
        "<option>The Friendly Beaches (3)</option>" +
        "<option>The Funnel (N 1)</option>" +
        "<option>The Funnel (N 2)</option>" +
        "<option>The Funnel (N 3)</option>" +
        "<option>The Funnel (N 4)</option>" +
        "<option>The Funnel (N 5)</option>" +
        "<option>The Funnel (W 1)</option>" +
        "<option>The Funnel (W 2)</option>" +
        "<option>The Funnel (W 3)</option>" +
        "<option>The Funnel (W 4)</option>" +
        "<option>The Gap</option>" +
        "<option>The Gap</option>" +
        "<option>The Gap (E)</option>" +
        "<option>The Gap (W)</option>" +
        "<option>The Gap (south)</option>" +
        "<option>The Gardens</option>" +
        "<option>The Granites</option>" +
        "<option>The Gut (E)</option>" +
        "<option>The Gut (W)</option>" +
        "<option>The Gutter</option>" +
        "<option>The Knob</option>" +
        "<option>The Lagoon</option>" +
        "<option>The Leap</option>" +
        "<option>The Needles (E 1)</option>" +
        "<option>The Needles (E 2)</option>" +
        "<option>The Needles (E 3)</option>" +
        "<option>The Needles (E 4)</option>" +
        "<option>The Needles (E 5)</option>" +
        "<option>The Needles (E 6)</option>" +
        "<option>The Needles (E 7)</option>" +
        "<option>The Needles (E 8)</option>" +
        "<option>The Needles (W)</option>" +
        "<option>The Oaks</option>" +
        "<option>The Oaks</option>" +
        "<option>The Porches</option>" +
        "<option>The Rapids</option>" +
        "<option>The Rapids (point)</option>" +
        "<option>The Settlement</option>" +
        "<option>The Shack</option>" +
        "<option>The Shack (south)</option>" +
        "<option>The Shank</option>" +
        "<option>The Shank (N 1)</option>" +
        "<option>The Shank (N 2)</option>" +
        "<option>The Shank (N 3)</option>" +
        "<option>The Spit</option>" +
        "<option>The Spit</option>" +
        "<option>The Spit</option>" +
        "<option>The Spit (1)</option>" +
        "<option>The Spit (2)</option>" +
        "<option>The Spit (3)</option>" +
        "<option>The Spit (4)</option>" +
        "<option>The Spit (5)</option>" +
        "<option>The Spit (6)</option>" +
        "<option>The Spit (N)</option>" +
        "<option>The Spit (S)</option>" +
        "<option>The Spit (west)</option>" +
        "<option>The Spit-Miami</option>" +
        "<option>The Spot</option>" +
        "<option>The Spot (S)</option>" +
        "<option>The Springs</option>" +
        "<option>The Stake Rock Platform</option>" +
        "<option>The Strand</option>" +
        "<option>The Thumb (south)</option>" +
        "<option>The Trap</option>" +
        "<option>The Water Rat</option>" +
        "<option>The Water Rat (E)</option>" +
        "<option>The Waterrun</option>" +
        "<option>Third Fence</option>" +
        "<option>Third Fence (N 1)</option>" +
        "<option>Third Fence (N 2)</option>" +
        "<option>Thirsty Point</option>" +
        "<option>Thirteen Mile</option>" +
        "<option>Thistle Cove</option>" +
        "<option>Thistle Cove</option>" +
        "<option>Thomas Bay (N 1)</option>" +
        "<option>Thomas Bay (N 2)</option>" +
        "<option>Thomas Fishery</option>" +
        "<option>Thomas Fishery (E 1)</option>" +
        "<option>Thomas Fishery (E 2)</option>" +
        "<option>Thomas Fishery (E 3)</option>" +
        "<option>Thomas Landing</option>" +
        "<option>Thomas Landing (north 1)</option>" +
        "<option>Thomas Landing (north 2)</option>" +
        "<option>Thompson Cove</option>" +
        "<option>Thornton</option>" +
        "<option>Thorpe Pt</option>" +
        "<option>Thorpe Pt (N)</option>" +
        "<option>Thorpe Pt (S 1)</option>" +
        "<option>Thorpe Pt (S 2)</option>" +
        "<option>Thorpe Pt (S 3)</option>" +
        "<option>Thorpe Pt (S 4)</option>" +
        "<option>Three Hut Point</option>" +
        "<option>Three Mile</option>" +
        "<option>Three Mile Beach</option>" +
        "<option>Three Mile Beach</option>" +
        "<option>Three Mile Lagoon</option>" +
        "<option>Three Mile Rocks (north)</option>" +
        "<option>Three Mile Rocks (south)</option>" +
        "<option>Three Mile Well</option>" +
        "<option>Three Mile Well (N 1)</option>" +
        "<option>Three Mile Well (S 1)</option>" +
        "<option>Three Mile Well (S 2)</option>" +
        "<option>Three Sisters 1</option>" +
        "<option>Three Sisters 2</option>" +
        "<option>Three Sisters 3</option>" +
        "<option>Thringa Island</option>" +
        "<option>Throoka Creek</option>" +
        "<option>Throoka Creek (south 1)</option>" +
        "<option>Throoka Creek (south 2)</option>" +
        "<option>Throoka Creek (south 3)</option>" +
        "<option>Thud Pt (N)</option>" +
        "<option>Thud Pt (S)</option>" +
        "<option>Thurburn Hill (S 1)</option>" +
        "<option>Thurburn Hill (S 2)</option>" +
        "<option>Tickera Bay</option>" +
        "<option>Tickera Bay (north)</option>" +
        "<option>Tiddys Beach</option>" +
        "<option>Tidepool Hill (N)</option>" +
        "<option>Tidepool Hill (S)</option>" +
        "<option>Tiger Bay Beach</option>" +
        "<option>Tilbury Cove</option>" +
        "<option>Tims Thicket</option>" +
        "<option>Tims Thicket (S)</option>" +
        "<option>Tinderbox Bay</option>" +
        "<option>Tingara</option>" +
        "<option>Tinpot Bay</option>" +
        "<option>Tiparra Bay (foreland)</option>" +
        "<option>Tiparra Bay (south)</option>" +
        "<option>Tiparra Rocks</option>" +
        "<option>Tirzah Beach</option>" +
        "<option>Titan Point (W)</option>" +
        "<option>Toby Inlet</option>" +
        "<option>Tod River</option>" +
        "<option>Tomahawk (E 1)</option>" +
        "<option>Tomahawk (E 2)</option>" +
        "<option>Tomahawk Beach</option>" +
        "<option>Tomahawk Beach (E)</option>" +
        "<option>Tomahawk Point (E)</option>" +
        "<option>Tomahawk Point (W)</option>" +
        "<option>Tommy Rews Point (W)</option>" +
        "<option>Tongue Point (N)</option>" +
        "<option>Toogelow Beach</option>" +
        "<option>Toogoom</option>" +
        "<option>Tooker Pt</option>" +
        "<option>Toolakea</option>" +
        "<option>Toolinna Cove</option>" +
        "<option>Toompawi</option>" +
        "<option>Toomulla</option>" +
        "<option>Toomulla (point)</option>" +
        "<option>Tooregullup Beach</option>" +
        "<option>Torpedo Bay</option>" +
        "<option>Torradup River (E)</option>" +
        "<option>Torradup River (W)</option>" +
        "<option>Tourbridge Hill (west 1)</option>" +
        "<option>Tourbridge Hill (west 2)</option>" +
        "<option>Tourbridge Hill (west 3)</option>" +
        "<option>Tourbridge Point (west)</option>" +
        "<option>Towlers Bay</option>" +
        "<option>Town</option>" +
        "<option>Town Beach</option>" +
        "<option>Town Beach</option>" +
        "<option>Town Beach</option>" +
        "<option>Town Beach</option>" +
        "<option>Town Beach (1)</option>" +
        "<option>Town Beach (2)</option>" +
        "<option>Town Beach (3)</option>" +
        "<option>Town Beach (S 1)</option>" +
        "<option>Town Beach (S 2)</option>" +
        "<option>Town Beach (S 3)</option>" +
        "<option>Town beach</option>" +
        "<option>Towns R</option>" +
        "<option>Towns R (N)</option>" +
        "<option>Towns R (S 1)</option>" +
        "<option>Towns R (S 2)</option>" +
        "<option>Towra Beach</option>" +
        "<option>Towradgi Beach</option>" +
        "<option>Towterer Beach</option>" +
        "<option>Towterer Beach (N)</option>" +
        "<option>Tranmere</option>" +
        "<option>Tranmere Point (N 1)</option>" +
        "<option>Tranmere Point (N 2)</option>" +
        "<option>Tranmere Point (S)</option>" +
        "<option>Trappers Inlet (N 1)</option>" +
        "<option>Trappers Inlet (N 2)</option>" +
        "<option>Trappers Inlet (N 3)</option>" +
        "<option>Trappers Inlet (S)</option>" +
        "<option>Treachery Bay (1)</option>" +
        "<option>Treachery Bay (2)</option>" +
        "<option>Treachery Bay (3)</option>" +
        "<option>Treachery Bay (4)</option>" +
        "<option>Tree Point (S 1)</option>" +
        "<option>Tree Point (S 2)</option>" +
        "<option>Tree Point (S 3)</option>" +
        "<option>Tree Point (west 1)</option>" +
        "<option>Tree Point (west 3)</option>" +
        "<option>Tree Point (west 3)</option>" +
        "<option>Tree Point (west 4)</option>" +
        "<option>Trenerry Reserve Rock Platform</option>" +
        "<option>Trepang Bay (1)</option>" +
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
        "<option>Trepang Bay (2)</option>" +
        "<option>Trepang Bay (20)</option>" +
        "<option>Trepang Bay (21)</option>" +
        "<option>Trepang Bay (22)</option>" +
        "<option>Trepang Bay (23)</option>" +
        "<option>Trepang Bay (24)</option>" +
        "<option>Trepang Bay (25)</option>" +
        "<option>Trepang Bay (28)</option>" +
        "<option>Trepang Bay (29)</option>" +
        "<option>Trepang Bay (3)</option>" +
        "<option>Trepang Bay (4)</option>" +
        "<option>Trepang Bay (5)</option>" +
        "<option>Trepang Bay (6)</option>" +
        "<option>Trepang Bay (7)</option>" +
        "<option>Trepang Bay (8)</option>" +
        "<option>Trepang Bay (9)</option>" +
        "<option>Trevally Point</option>" +
        "<option>Trial Bay (E 1)</option>" +
        "<option>Trial Bay (E 10)</option>" +
        "<option>Trial Bay (E 11)</option>" +
        "<option>Trial Bay (E 2)</option>" +
        "<option>Trial Bay (E 3)</option>" +
        "<option>Trial Bay (E 4)</option>" +
        "<option>Trial Bay (E 5)</option>" +
        "<option>Trial Bay (E 6)</option>" +
        "<option>Trial Bay (E 7)</option>" +
        "<option>Trial Bay (E 8)</option>" +
        "<option>Trial Bay (E 9)</option>" +
        "<option>Trial Bay (N 1)</option>" +
        "<option>Trial Bay (N 2)</option>" +
        "<option>Trial Bay (N 3)</option>" +
        "<option>Trial Bay (N)</option>" +
        "<option>Trial Bay (S)</option>" +
        "<option>Trial Bay (W 1)</option>" +
        "<option>Trial Bay (W 2)</option>" +
        "<option>Trial Bay (W 3)</option>" +
        "<option>Trial Bay (W 4)</option>" +
        "<option>Trial Bay (W 5)</option>" +
        "<option>Trial Bay (W 6)</option>" +
        "<option>Trial Harbour</option>" +
        "<option>Trial Harbour (S 1)</option>" +
        "<option>Trial Harbour (S 2)</option>" +
        "<option>Trial Harbour (S)</option>" +
        "<option>Triangle Cliff</option>" +
        "<option>Trigelow Beach</option>" +
        "<option>Trigg Island</option>" +
        "<option>Trillick Ck (S 1)</option>" +
        "<option>Trillick Ck (S 2)</option>" +
        "<option>Trinity Beach</option>" +
        "<option>Trinity Haven</option>" +
        "<option>Trinity Haven (south)</option>" +
        "<option>Trousers Point (S 1)</option>" +
        "<option>Trousers Point (S 2)</option>" +
        "<option>Trousers Point Beach</option>" +
        "<option>Trumpeter Bay (1)</option>" +
        "<option>Trumpeter Bay (2)</option>" +
        "<option>Truscott (N 1)</option>" +
        "<option>Truscott (N 10)</option>" +
        "<option>Truscott (N 11)</option>" +
        "<option>Truscott (N 12)</option>" +
        "<option>Truscott (N 2)</option>" +
        "<option>Truscott (N 3)</option>" +
        "<option>Truscott (N 31)</option>" +
        "<option>Truscott (N 4)</option>" +
        "<option>Truscott (N 5)</option>" +
        "<option>Truscott (N 6)</option>" +
        "<option>Truscott (N 7)</option>" +
        "<option>Truscott (N 8)</option>" +
        "<option>Truscott (N 9)</option>" +
        "<option>Truscott (NE 1)</option>" +
        "<option>Truscott (NE 2)</option>" +
        "<option>Truscott (NE 3)</option>" +
        "<option>Truscott (NE 4)</option>" +
        "<option>Truscott (NE 5)</option>" +
        "<option>Truscott (NE 6)</option>" +
        "<option>Truscott (S 1)</option>" +
        "<option>Truscott (S 2)</option>" +
        "<option>Truscott (S 3)</option>" +
        "<option>Truscott (S 4)</option>" +
        "<option>Truscott (S 5)</option>" +
        "<option>Truscott (S 6)</option>" +
        "<option>Truscott (W 1)</option>" +
        "<option>Truscott (W 2)</option>" +
        "<option>Truscott (W 3)</option>" +
        "<option>Truscott (W 4)</option>" +
        "<option>Truscott (W 5)</option>" +
        "<option>Truscott (W 6)</option>" +
        "<option>Tryon Point</option>" +
        "<option>Trywork Point (E)</option>" +
        "<option>Tuart Road (1)</option>" +
        "<option>Tuart Road (2)</option>" +
        "<option>Tugun</option>" +
        "<option>Tugun-Kirra</option>" +
        "<option>Tuki Bay</option>" +
        "<option>Tuki Bay (N)</option>" +
        "<option>Tulka</option>" +
        "<option>Tulka (east)</option>" +
        "<option>Tulka West</option>" +
        "<option>Tully Inlet</option>" +
        "<option>Tully-Massacre inlet</option>" +
        "<option>Tully-Murray Rivers</option>" +
        "<option>Tumby Bay</option>" +
        "<option>Tumby Bay (south)</option>" +
        "<option>Tumby Bay inlet</option>" +
        "<option>Tumby Island</option>" +
        "<option>Tumby point (north)</option>" +
        "<option>Tumby point (south)</option>" +
        "<option>Tungketta</option>" +
        "<option>Tungku Beach</option>" +
        "<option>Tunk Head</option>" +
        "<option>Tunkalilla beach</option>" +
        "<option>Tunnel Bay</option>" +
        "<option>Turner Hut Creek</option>" +
        "<option>Turner Point</option>" +
        "<option>Turner Point (N)</option>" +
        "<option>Turner Point (S 1)</option>" +
        "<option>Turner Point (S 2)</option>" +
        "<option>Turner Point (S 3)</option>" +
        "<option>Turner Point (S 4)</option>" +
        "<option>Turners Beach</option>" +
        "<option>Turquoise Bay</option>" +
        "<option>Turquoise Beach</option>" +
        "<option>Turrimetta Headland</option>" +
        "<option>Turtle Bay</option>" +
        "<option>Turtle Bay (AIMS)</option>" +
        "<option>Turtle Beach</option>" +
        "<option>Turtle Creek Beach</option>" +
        "<option>Turtle Creek Beach (south)</option>" +
        "<option>Turtle Point</option>" +
        "<option>Turtle Point (east 1)</option>" +
        "<option>Turtle Point (east 2)</option>" +
        "<option>Turtle Point (south 1)</option>" +
        "<option>Turtle Point (south 2)</option>" +
        "<option>Turtlet Bay</option>" +
        "<option>Turtlet Bay (N 1)</option>" +
        "<option>Turtlet Bay (N 2)</option>" +
        "<option>Turua Beach</option>" +
        "<option>Turua Beach (E)</option>" +
        "<option>Twelve Mile</option>" +
        "<option>Twelve Mile (E 1)</option>" +
        "<option>Twelve Mile (E 2)</option>" +
        "<option>Twelve Mile (E 3)</option>" +
        "<option>Twelve Mile (E 4)</option>" +
        "<option>Twenty Foot</option>" +
        "<option>Twilight Beach</option>" +
        "<option>Twilight Cove</option>" +
        "<option>Twilight Cove (E)</option>" +
        "<option>Twin Bays (E 1)</option>" +
        "<option>Twin Bays (E 2)</option>" +
        "<option>Twin Bays (E 3)</option>" +
        "<option>Twin Bays (E 4)</option>" +
        "<option>Twin Bays (W 1)</option>" +
        "<option>Twin Bays (W)</option>" +
        "<option>Twin Hill (N 1)</option>" +
        "<option>Twin Hill (N 2)</option>" +
        "<option>Twin Hill (S)</option>" +
        "<option>Twin Rocks</option>" +
        "<option>Twin Waters</option>" +
        "<option>Two Fella Creek (east)</option>" +
        "<option>Two Fella Creek (west)</option>" +
        "<option>Two Hills Bay</option>" +
        "<option>Two Hills Bay (N)</option>" +
        "<option>Two Hills Bay (S)</option>" +
        "<option>Two Hummock Hill</option>" +
        "<option>Two Mile</option>" +
        "<option>Two Mile</option>" +
        "<option>Two Mile (E)</option>" +
        "<option>Two Mile (W)</option>" +
        "<option>Two Mile Beach</option>" +
        "<option>Two Peoples Bay</option>" +
        "<option>Two Peoples Bay (N 1)</option>" +
        "<option>Two Peoples Bay (N 2)</option>" +
        "<option>Two Peoples Bay (N 3)</option>" +
        "<option>Two Peoples Bay (S 1)</option>" +
        "<option>Two Rocks (N 1)</option>" +
        "<option>Two Rocks (N 2)</option>" +
        "<option>Two Rocks (N)</option>" +
        "<option>Two Sisters (1)</option>" +
        "<option>Two Sisters (2)</option>" +
        "<option>Two Tree Point</option>" +
        "<option>Tyagarah</option>" +
        "<option>Tyndall Beach</option>" +
        "<option>Tyringa Beach</option>" +
        "<option>Tyringa Beach (east 1)</option>" +
        "<option>Tyringa Beach (west 1)</option>" +
        "<option>Tyringa Beach (west 2)</option>" +
        "<option>Tyringa beach (east 2)</option>" +
        "<option>Tyringa beach (east 3)</option>" +
        "<option>Tyringa beach (east 4)</option>" +
        "</dataList>";

    var uBeaches =
        "<datalist id='mylist'>" +
        "<option>ULLADULLA BOMBIE</option>" +
        "<option>ULLADULLA HARBOUR</option>" +
        "<option>UMINA</option>" +
        "<option>UNDERTOW BAY</option>" +
        "<option>UNNAMED</option>" +
        "<option>URQUHART BLUFF</option>" +
        "<option>URQUHART BLUFF SOUTH</option>" +
        "<option>Uendoo Creek</option>" +
        "<option>Ulladulla Harbour (N)</option>" +
        "<option>Ulladulla Head</option>" +
        "<option>Ulladulla Sea Pool</option>" +
        "<option>Umpherstone Bay</option>" +
        "<option>Unlucky Bay</option>" +
        "<option>Unnamed Beach</option>" +
        "<option>Untimelli Beach</option>" +
        "<option>Unwins Is (1)</option>" +
        "<option>Unwins Is (2)</option>" +
        "<option>Unwins Is (3)</option>" +
        "<option>Unwins Is (4)</option>" +
        "<option>Unwins Is (5)</option>" +
        "<option>Upper Boolbarly Well</option>" +
        "<option>Urala</option>" +
        "<option>Urala Creek (N)</option>" +
        "<option>Urala Creek (S 1)</option>" +
        "<option>Urala Creek (S)</option>" +
        "<option>Urangan</option>" +
        "<option>Urangan (south)</option>" +
        "<option>Urquhart Pt (E)</option>" +
        "<option>Urquhart River</option>" +
        "<option>Useless Loop (1)</option>" +
        "<option>Useless Loop (2)</option>" +
        "<option>Useless Loop (3)</option>" +
        "<option>Useless Loop (S 1)</option>" +
        "<option>Useless Loop (S 2)</option>" +
        "<option>Useless Loop (S 3)</option>" +
        "<option>Useless Loop (S 4)</option>" +
        "<option>Useless Loop (S 5)</option>" +
        "<option>Useless Loop (S 6)</option>" +
        "<option>Ussher Pt (N 1)</option>" +
        "<option>Ussher Pt (N 2)</option>" +
        "<option>Ussher Pt (S 1)</option>" +
        "<option>Ussher Pt (S 2)</option>" +
        "<option>Ussher Pt (S 3)</option>" +
        "<option>Ussher Pt (S 4)</option>" +
        "</dataList>";

    var vBeaches =
        "<datalist id='mylist'>" +
        "<option>VALLA HEADLAND</option>" +
        "<option>VALLA SOUTH</option>" +
        "<option>VENTNOR</option>" +
        "<option>VENUS BAY</option>" +
        "<option>VIEW POINT</option>" +
        "<option>Valley Bay</option>" +
        "<option>Valley Creek</option>" +
        "<option>Van Diemen Inlet</option>" +
        "<option>Van Speult Pt</option>" +
        "<option>Varna Bay (1)</option>" +
        "<option>Varna Bay (2)</option>" +
        "<option>Varna Bay (3)</option>" +
        "<option>Varna Bay (4)</option>" +
        "<option>Varna Bay (5)</option>" +
        "<option>Vashon Head (east 1)</option>" +
        "<option>Vashon Head (east 2)</option>" +
        "<option>Vashon Head (east 3)</option>" +
        "<option>Vashon Head (east 4)</option>" +
        "<option>Vashon Head (east 5)</option>" +
        "<option>Vashon Head (east 6)</option>" +
        "<option>Vashon Head (east 7)</option>" +
        "<option>Vashon Head (east 8)</option>" +
        "<option>Vashon Head (east 9)</option>" +
        "<option>Vashon Head (west)</option>" +
        "<option>Vaucluse Bay</option>" +
        "<option>Ventenat Point</option>" +
        "<option>Venus Bay (back beach 1)</option>" +
        "<option>Venus Bay (back beach 2)</option>" +
        "<option>Venus Bay (back beach 3)</option>" +
        "<option>Venus Bay (jetty)</option>" +
        "<option>Vesteys Beach</option>" +
        "<option>Vesteys Beach (north)</option>" +
        "<option>Victor Harbour (east)</option>" +
        "<option>Victor Harbour (west)</option>" +
        "<option>Victoria Cove</option>" +
        "<option>Victoria Harbour (1)</option>" +
        "<option>Victoria Harbour (2)</option>" +
        "<option>Victoria Harbour (W 1)</option>" +
        "<option>Victoria Harbour (W 2)</option>" +
        "<option>Victoria Harbour (W 3)</option>" +
        "<option>Victoria Harbour (W 4)</option>" +
        "<option>Victoria Point</option>" +
        "<option>Victory Hill</option>" +
        "<option>View Rock</option>" +
        "<option>Villis Pt</option>" +
        "<option>Villis Pt (S)</option>" +
        "<option>Virgin Reef (N)</option>" +
        "<option>Vivonne Bay</option>" +
        "<option>Vivonne Bay (east 1)</option>" +
        "<option>Vivonne Bay (east 2)</option>" +
        "<option>Vivonne Bay jetty</option>" +
        "<option>Vlaming Head</option>" +
        "<option>Vlaming Head (E)</option>" +
        "<option>Voaden Pt</option>" +
        "<option>Voltaire Passage 1</option>" +
        "<option>Voltaire Passage 10</option>" +
        "<option>Voltaire Passage 11</option>" +
        "<option>Voltaire Passage 2</option>" +
        "<option>Voltaire Passage 3</option>" +
        "<option>Voltaire Passage 4</option>" +
        "<option>Voltaire Passage 5</option>" +
        "<option>Voltaire Passage 6</option>" +
        "<option>Voltaire Passage 7</option>" +
        "<option>Voltaire Passage 8</option>" +
        "<option>Voltaire Passage 9</option>" +
        "<option>Voodoo</option>" +
        "<option>Vrilya Pt</option>" +
        "<option>Vrilya Pt (N 1)</option>" +
        "<option>Vrilya Pt (N 2)</option>" +
        "<option>Vrilya Pt (N 3)</option>" +
        "<option>Vrilya Pt (S 1)</option>" +
        "<option>Vrilya Pt (S 2)</option>" +
        "<option>Vrilya Pt (S 3)</option>" +
        "</dataList>";

    var wBeaches =
        "<datalist id='mylist'>" +
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
        "<option>WA 278</option>" +
        "<option>WA 279</option>" +
        "<option>WA 316</option>" +
        "<option>WA 317</option>" +
        "<option>WA 318</option>" +
        "<option>WA 319</option>" +
        "<option>WA 320</option>" +
        "<option>WA 321</option>" +
        "<option>WA 322</option>" +
        "<option>WA 355</option>" +
        "<option>WAIRO</option>" +
        "<option>WALKERS</option>" +
        "<option>WALKERVILLE</option>" +
        "<option>WALKERVILLE NORTH</option>" +
        "<option>WALLAGA LAKE</option>" +
        "<option>WALLAGOOT</option>" +
        "<option>WALLAGOOT GAP</option>" +
        "<option>WAMBERAL</option>" +
        "<option>WANDA</option>" +
        "<option>WARATAH BAY</option>" +
        "<option>WARDEN HEAD NORTH</option>" +
        "<option>WARDEN HEAD SOUTH</option>" +
        "<option>WARILLA-BARRACK PT</option>" +
        "<option>WARRAIN</option>" +
        "<option>WARRAIN SOUTH</option>" +
        "<option>WARRIEWOOD</option>" +
        "<option>WARRNAMBOOL</option>" +
        "<option>WASH HOUSE</option>" +
        "<option>WASHERWOMAN</option>" +
        "<option>WATEGOS</option>" +
        "<option>WATER TOWER</option>" +
        "<option>WATERLOO BAY</option>" +
        "<option>WATTAMOLLA</option>" +
        "<option>WEBB DOCK</option>" +
        "<option>WENONAH HEAD/VALLA</option>" +
        "<option>WEROONA BAY (PORTSEA)</option>" +
        "<option>WERRI</option>" +
        "<option>WERRIBEE SEWER FARM NORTH</option>" +
        "<option>WERRIBEE SEWER FARM SOUTH</option>" +
        "<option>WERRIBEE SOUTH</option>" +
        "<option>WERRONG (HELL HOLE)</option>" +
        "<option>WESTERN</option>" +
        "<option>WHALE</option>" +
        "<option>WHALE</option>" +
        "<option>WHALERS POINT</option>" +
        "<option>WHISKY BAY</option>" +
        "<option>WHITE CREST</option>" +
        "<option>WHITES</option>" +
        "<option>WHITES</option>" +
        "<option>WHITES</option>" +
        "<option>WHITING</option>" +
        "<option>WHITING NORTH</option>" +
        "<option>WHITING SOUTH</option>" +
        "<option>WILD DOG COVE 1</option>" +
        "<option>WILD DOG COVE 2</option>" +
        "<option>WILD DOG COVE 3</option>" +
        "<option>WILD DOG COVE 4</option>" +
        "<option>WILD DOG COVE 5</option>" +
        "<option>WILLIAMSONS</option>" +
        "<option>WILLIAMSTOWN</option>" +
        "<option>WILSON</option>" +
        "<option>WILSONS</option>" +
        "<option>WIMBIE</option>" +
        "<option>WINDANG</option>" +
        "<option>WINGAN</option>" +
        "<option>WINGAN INLET</option>" +
        "<option>WINGAN POINT</option>" +
        "<option>WINGAN POINT NORTH</option>" +
        "<option>WOLLONGONG CITY</option>" +
        "<option>WOMBARRA</option>" +
        "<option>WONBOYN</option>" +
        "<option>WOODSIDE</option>" +
        "<option>WOODY BAY</option>" +
        "<option>WOOLAMAI</option>" +
        "<option>WOOLAMAI SAFETY</option>" +
        "<option>WOOLGOOLGA</option>" +
        "<option>WOOLGOOLGA/BACK</option>" +
        "<option>WOOLI</option>" +
        "<option>WOOLSHED</option>" +
        "<option>WOONONA</option>" +
        "<option>WOOYUNG</option>" +
        "<option>WORANG POINT</option>" +
        "<option>WORM BAY</option>" +
        "<option>WRECK</option>" +
        "<option>WRECK</option>" +
        "<option>WRECK BAY</option>" +
        "<option>WRECK NORTH</option>" +
        "<option>WYE RIVER</option>" +
        "<option>WYE RIVER SOUTH</option>" +
        "<option>Waddy Point</option>" +
        "<option>Wades Corner</option>" +
        "<option>Wagait Beach</option>" +
        "<option>Wagait Beach (E)</option>" +
        "<option>Waggali</option>" +
        "<option>Waggon Wheels</option>" +
        "<option>Wagoe</option>" +
        "<option>Wahgunyah Well</option>" +
        "<option>Wahgunyah Well (east)</option>" +
        "<option>Wahgunyah dunes (west 1)</option>" +
        "<option>Wahgunyah dunes (west 2)</option>" +
        "<option>Wahgunyah dunes (west 3)</option>" +
        "<option>Wahgunyah dunes (west 4)</option>" +
        "<option>Waitpinga</option>" +
        "<option>Wajurda Point</option>" +
        "<option>Wakooka Ck (N)</option>" +
        "<option>Wakooka Ck (S 1)</option>" +
        "<option>Wakooka Ck (S 2)</option>" +
        "<option>Wakooka Ck (S 3)</option>" +
        "<option>Walford Point (east 1)</option>" +
        "<option>Walford Point (east 2)</option>" +
        "<option>Walford Point (east 3)</option>" +
        "<option>Walford Point (west 1)</option>" +
        "<option>Walford Point (west 2)</option>" +
        "<option>Walford Point (west 3)</option>" +
        "<option>Walker Bay</option>" +
        "<option>Walker Island (W 1)</option>" +
        "<option>Walker Island (W 2)</option>" +
        "<option>Walker Island (W 3)</option>" +
        "<option>Walker Island (W 4)</option>" +
        "<option>Walker Point (north)</option>" +
        "<option>Walker Point (south 1)</option>" +
        "<option>Walker Point (south 2)</option>" +
        "<option>Walker Point (south 3)</option>" +
        "<option>Walkers Cove</option>" +
        "<option>Walkers Rock</option>" +
        "<option>Walkers Rock (north)</option>" +
        "<option>Walkers Rock (south 1)</option>" +
        "<option>Walkers Rock (south 2)</option>" +
        "<option>Walkers Rock (south 3)</option>" +
        "<option>Wallaby Bay</option>" +
        "<option>Wallaby Bay (N)</option>" +
        "<option>Wallaby Beach</option>" +
        "<option>Wallaby Beach (E)</option>" +
        "<option>Wallaby Is</option>" +
        "<option>Wallagoot-Bournda</option>" +
        "<option>Wallaroo (boat ramp)</option>" +
        "<option>Wallaroo Bay</option>" +
        "<option>Waller Creek</option>" +
        "<option>Walpoles Creek</option>" +
        "<option>Walsh Bay (north)</option>" +
        "<option>Wamberal-Terrigal</option>" +
        "<option>Waminari Bay (1)</option>" +
        "<option>Waminari Bay (2)</option>" +
        "<option>Waminari Bay (3)</option>" +
        "<option>Waminari Bay (4)</option>" +
        "<option>Waminari Bay (5)</option>" +
        "<option>Waminari Bay (6)</option>" +
        "<option>Wamirumu Point (1)</option>" +
        "<option>Wamirumu Point (2)</option>" +
        "<option>Wanaraij Point (east)</option>" +
        "<option>Wanaraij Point (south 1)</option>" +
        "<option>Wanaraij Point (south 2)</option>" +
        "<option>Wanaraij Point (south 3)</option>" +
        "<option>Wanda Beach</option>" +
        "<option>Wandilla (east)</option>" +
        "<option>Wandilla Bay</option>" +
        "<option>Wandilla Bay (west 1)</option>" +
        "<option>Wandilla Bay (west 2)</option>" +
        "<option>Wangalooma</option>" +
        "<option>Wanganjie</option>" +
        "<option>Wangaran Swamp (1)</option>" +
        "<option>Wangaran Swamp (2)</option>" +
        "<option>Wangarlu Bay</option>" +
        "<option>Wangarlu Bay (west)</option>" +
        "<option>Wangetti Beach</option>" +
        "<option>Wangularni Bay</option>" +
        "<option>Wangularni Bay (E 1)</option>" +
        "<option>Wangularni Bay (E 2)</option>" +
        "<option>Wangularni Bay (E 3)</option>" +
        "<option>Wangularni Bay (E 4)</option>" +
        "<option>Wanna (north 1)</option>" +
        "<option>Wanna (north 2)</option>" +
        "<option>Wanna (south)</option>" +
        "<option>Wanneroo Beach</option>" +
        "<option>Wanyanmera Pt</option>" +
        "<option>Wanyanmera Pt (W 1)</option>" +
        "<option>Wanyanmera Pt (W 2)</option>" +
        "<option>Wanyanmera Pt (W 3)</option>" +
        "<option>Wanyanmera Pt (W 4)</option>" +
        "<option>Warana</option>" +
        "<option>Waranga Pt (E)</option>" +
        "<option>Waranga Pt (S 1)</option>" +
        "<option>Waranga Pt (S 2)</option>" +
        "<option>Waranga Pt (S 3)</option>" +
        "<option>Waratah Bay</option>" +
        "<option>Warburto Point (north)</option>" +
        "<option>Wardarlea Bay (1)</option>" +
        "<option>Wardarlea Bay (2)</option>" +
        "<option>Wardarlea Bay (3)</option>" +
        "<option>Wardarlea Bay (4)</option>" +
        "<option>Wardarlea Bay (5)</option>" +
        "<option>Warerhole Bay</option>" +
        "<option>Warerhole Bay (E 1)</option>" +
        "<option>Warerhole Bay (E 2)</option>" +
        "<option>Wargally</option>" +
        "<option>Wargally (S 1)</option>" +
        "<option>Wargally (S 2)</option>" +
        "<option>Wargarpunda Pt (E)</option>" +
        "<option>Wargarpunda Pt (W)</option>" +
        "<option>Wargili Point (west 1)</option>" +
        "<option>Wargili Point (west 2)</option>" +
        "<option>Warnbro Beach</option>" +
        "<option>Warner Point</option>" +
        "<option>Warrajamra</option>" +
        "<option>Warrayin</option>" +
        "<option>Warrayin (E)</option>" +
        "<option>Warrayin (S)</option>" +
        "<option>Warren Beach</option>" +
        "<option>Warrenup (1)</option>" +
        "<option>Warrenup (2)</option>" +
        "<option>Warrenup (3)</option>" +
        "<option>Warrenup (4)</option>" +
        "<option>Warriewood Blowhole</option>" +
        "<option>Warroora</option>" +
        "<option>Washaway</option>" +
        "<option>Watcombe (E)</option>" +
        "<option>Watcombe Beach</option>" +
        "<option>Watdagawuy</option>" +
        "<option>Watdagawuy (E 1)</option>" +
        "<option>Watdagawuy (E 2)</option>" +
        "<option>Water Park Point (1)</option>" +
        "<option>Water Park Point (2)</option>" +
        "<option>Water Sport Lumut Beach</option>" +
        "<option>Waterfall (E)</option>" +
        "<option>Waterfall (W)</option>" +
        "<option>Waterfall Beach</option>" +
        "<option>Waterfall Beach</option>" +
        "<option>Waterfall Creek</option>" +
        "<option>Waterhouse Bay</option>" +
        "<option>Waterhouse Bay (north)</option>" +
        "<option>Waterhouse Bay (south)</option>" +
        "<option>Waterhouse Beach</option>" +
        "<option>Waterhouse Point</option>" +
        "<option>Waterhouse Point (E 1)</option>" +
        "<option>Waterhouse Point (E 2)</option>" +
        "<option>Waterhouse Point (W 2)</option>" +
        "<option>Waterhouse Point (W 2)</option>" +
        "<option>Waterhouse Point (W 3)</option>" +
        "<option>Waterhouse Point (W 4)</option>" +
        "<option>Waterhouse Point (W 5)</option>" +
        "<option>Waterhouse Point (W 6)</option>" +
        "<option>Waterhouse Point (west 1)</option>" +
        "<option>Waterhouse Point (west 2)</option>" +
        "<option>Watering Beach</option>" +
        "<option>Watering Cove (N)</option>" +
        "<option>Watering Cove (S)</option>" +
        "<option>Waterloo Bay</option>" +
        "<option>Waterloo Bay bluffs (1)</option>" +
        "<option>Waterloo Bay bluffs (2)</option>" +
        "<option>Waterloo Bay bluffs (3)</option>" +
        "<option>Waterloo Beach</option>" +
        "<option>Waterman Bay</option>" +
        "<option>Watsons Bay</option>" +
        "<option>Watsons Gap</option>" +
        "<option>Waubs Bay</option>" +
        "<option>Wave Point</option>" +
        "<option>Waverley Cemetary</option>" +
        "<option>Weary Bay</option>" +
        "<option>Weary Bay (south)</option>" +
        "<option>Weatherhead Pt (E)</option>" +
        "<option>Webb Beach</option>" +
        "<option>Webb island</option>" +
        "<option>Webb island (N 1)</option>" +
        "<option>Webb island (N 2)</option>" +
        "<option>Webb island (S)</option>" +
        "<option>Webber Point (N)</option>" +
        "<option>Webling Point</option>" +
        "<option>Webster Road</option>" +
        "<option>Wedge Island</option>" +
        "<option>Wedge Island</option>" +
        "<option>Wedge Island (N)</option>" +
        "<option>Wedge Island (S 1)</option>" +
        "<option>Wedge Island (S)</option>" +
        "<option>Wedge Rocks</option>" +
        "<option>Wedge Rocks (S 1)</option>" +
        "<option>Wedge Rocks (S 2)</option>" +
        "<option>Wedge Rocks (S 3)</option>" +
        "<option>Wedge Rocks (S 4)</option>" +
        "<option>Wedge Rocks (S 5)</option>" +
        "<option>Wedge Rocks (S 5)</option>" +
        "<option>Weedong</option>" +
        "<option>Weeroome Bay (1)</option>" +
        "<option>Weeroome Bay (2)</option>" +
        "<option>Weeroona Island</option>" +
        "<option>Weipa South</option>" +
        "<option>Weirs Cove (1)</option>" +
        "<option>Weirs Cove (2)</option>" +
        "<option>Weirs Cove (3)</option>" +
        "<option>Welcome Creek</option>" +
        "<option>Welcome Inlet (E)</option>" +
        "<option>Welcome Inlet (W)</option>" +
        "<option>Wellesley beach</option>" +
        "<option>Wells Road</option>" +
        "<option>West Alligator Head</option>" +
        "<option>West Bay</option>" +
        "<option>West Bay (1)</option>" +
        "<option>West Bay (2)</option>" +
        "<option>West Bay (3)</option>" +
        "<option>West Bay (4)</option>" +
        "<option>West Bay (5)</option>" +
        "<option>West Bay (6)</option>" +
        "<option>West Bay (7)</option>" +
        "<option>West Bay (8)</option>" +
        "<option>West Beach</option>" +
        "<option>West Beach</option>" +
        "<option>West Beach</option>" +
        "<option>West Beach</option>" +
        "<option>West Bight</option>" +
        "<option>West Bight (south)</option>" +
        "<option>West Cape</option>" +
        "<option>West Cliff Point (E 1)</option>" +
        "<option>West Cliff Point (E 2)</option>" +
        "<option>West Cliff Point (E 3)</option>" +
        "<option>West Cliff Point (E 4)</option>" +
        "<option>West Cliff Point (E 5)</option>" +
        "<option>West Cliff Point (E 6)</option>" +
        "<option>West Cliff Point (E 7)</option>" +
        "<option>West Cliff Point (E 8)</option>" +
        "<option>West Cliff Point (E 9)</option>" +
        "<option>West Cliff Point (E)</option>" +
        "<option>West Cliff Point (W)</option>" +
        "<option>West Cloudy Head (1)</option>" +
        "<option>West Cloudy Head (2)</option>" +
        "<option>West End (1)</option>" +
        "<option>West End (2)</option>" +
        "<option>West End (3)</option>" +
        "<option>West End Beach</option>" +
        "<option>West Head</option>" +
        "<option>West Head (E)</option>" +
        "<option>West Hill (north)</option>" +
        "<option>West Hill Island (1)</option>" +
        "<option>West Hill Island (2)</option>" +
        "<option>West Hill Island (3)</option>" +
        "<option>West Hill creek</option>" +
        "<option>West Hill point</option>" +
        "<option>West Inlet</option>" +
        "<option>West Intercourse Island (N 1)</option>" +
        "<option>West Intercourse Island (N 2)</option>" +
        "<option>West Intercourse Island (N 3)</option>" +
        "<option>West Intercourse Island (N 4)</option>" +
        "<option>West Intercourse Island (N 5)</option>" +
        "<option>West Intercourse Island (N 6)</option>" +
        "<option>West Intercourse Island (N 7)</option>" +
        "<option>West Intercourse Island (N 8)</option>" +
        "<option>West Intercourse Island (N 9)</option>" +
        "<option>West Intercourse Island (W 1)</option>" +
        "<option>West Intercourse Island (W 2)</option>" +
        "<option>West Intercourse Island (W 3)</option>" +
        "<option>West Intercourse Island (W 4)</option>" +
        "<option>West Lake</option>" +
        "<option>West Point</option>" +
        "<option>West Point</option>" +
        "<option>West Point</option>" +
        "<option>West Point (1)</option>" +
        "<option>West Point (2)</option>" +
        "<option>West Pt (S 1)</option>" +
        "<option>West Pt (S 2)</option>" +
        "<option>West Pt (S 3)</option>" +
        "<option>West Pt (W)</option>" +
        "<option>West Pt (west)</option>" +
        "<option>West Sandy Point</option>" +
        "<option>West Sandy Point (W 1)</option>" +
        "<option>West Sandy Point (W 2)</option>" +
        "<option>West Sandy Point (W 3)</option>" +
        "<option>West Tomahawk Beach</option>" +
        "<option>West beach</option>" +
        "<option>West beach (marina)</option>" +
        "<option>West beach (south)</option>" +
        "<option>West-Second Beach</option>" +
        "<option>Western Cove</option>" +
        "<option>Western River Cove</option>" +
        "<option>Western River Cove (east)</option>" +
        "<option>Wet Cave Point</option>" +
        "<option>Weymouth</option>" +
        "<option>Weymouth (W)</option>" +
        "<option>Weymouth Bay (1)</option>" +
        "<option>Weymouth Bay (2)</option>" +
        "<option>Weymouth Bay (3)</option>" +
        "<option>Weymouth Bay (4)</option>" +
        "<option>Weymouth Bay (5)</option>" +
        "<option>Whale Bay</option>" +
        "<option>Whale Flat</option>" +
        "<option>Whale Point</option>" +
        "<option>Whaleboat Rock (N)</option>" +
        "<option>Whalebone (E)</option>" +
        "<option>Whalebone (S)</option>" +
        "<option>Whalebone (W 1)</option>" +
        "<option>Whalebone (W 2)</option>" +
        "<option>Whalebone (W 3)</option>" +
        "<option>Whalebone (W 4)</option>" +
        "<option>Whalebone (W 5)</option>" +
        "<option>Whalebone (W 6)</option>" +
        "<option>Whalebone Beach</option>" +
        "<option>Whalebone Beach</option>" +
        "<option>Whalebone Beach</option>" +
        "<option>Whalebone Cove</option>" +
        "<option>Whalebone Pt</option>" +
        "<option>Whalebone Road</option>" +
        "<option>Whalebone Road (N 1)</option>" +
        "<option>Whalebone Road (N 2)</option>" +
        "<option>Whalebone Road (N 3)</option>" +
        "<option>Whalebone Road (N 4)</option>" +
        "<option>Whalebone Road (S 1)</option>" +
        "<option>Whalebone Road (S 2)</option>" +
        "<option>Whalebone Road (S 3)</option>" +
        "<option>Whalebone Road (S 4)</option>" +
        "<option>Whalers Bay</option>" +
        "<option>Whalers Beach</option>" +
        "<option>Whalers Point ( N 1)</option>" +
        "<option>Whalers Point ( N 2)</option>" +
        "<option>Whaling Cove (1)</option>" +
        "<option>Whaling Cove (2)</option>" +
        "<option>Whaling Cove (3)</option>" +
        "<option>Whaling Station</option>" +
        "<option>Wharf Beach</option>" +
        "<option>Wharf Beach (S)</option>" +
        "<option>Wharton Beach</option>" +
        "<option>Wheatley (1)</option>" +
        "<option>Wheatley (2)</option>" +
        "<option>Whidbey Beach (1)</option>" +
        "<option>Whidbey Beach (10)</option>" +
        "<option>Whidbey Beach (11)</option>" +
        "<option>Whidbey Beach (12)</option>" +
        "<option>Whidbey Beach (2)</option>" +
        "<option>Whidbey Beach (3)</option>" +
        "<option>Whidbey Beach (4)</option>" +
        "<option>Whidbey Beach (5)</option>" +
        "<option>Whidbey Beach (6)</option>" +
        "<option>Whidbey Beach (7)</option>" +
        "<option>Whidbey Beach (8)</option>" +
        "<option>Whidbey Beach (9)</option>" +
        "<option>White Beach</option>" +
        "<option>White Beach</option>" +
        "<option>White Beach</option>" +
        "<option>White Beach (N)</option>" +
        "<option>White Beach (S)</option>" +
        "<option>White Cliff</option>" +
        "<option>White Cliff (south)</option>" +
        "<option>White Cliff Point</option>" +
        "<option>White Cliffs</option>" +
        "<option>White Cliffs</option>" +
        "<option>White Cliffs</option>" +
        "<option>White Cliffs (N)</option>" +
        "<option>White Cliffs (east)</option>" +
        "<option>White Cliffs (west)</option>" +
        "<option>White Lady Rock</option>" +
        "<option>White Point (E)</option>" +
        "<option>White Point (west)</option>" +
        "<option>White Rock</option>" +
        "<option>White Rock</option>" +
        "<option>White Rocks</option>" +
        "<option>White Rocks</option>" +
        "<option>White Rocks (W 1)</option>" +
        "<option>White Rocks (W 2)</option>" +
        "<option>White Rocks (W 3)</option>" +
        "<option>White-Freferick Points</option>" +
        "<option>Whitehaven</option>" +
        "<option>Whitehorses Beach (1)</option>" +
        "<option>Whitehorses Beach (2)</option>" +
        "<option>Whitehorses Beach (E 1)</option>" +
        "<option>Whitehorses Beach (E 2)</option>" +
        "<option>Whitemark Beach</option>" +
        "<option>Whiting Beach</option>" +
        "<option>Whitmore Island</option>" +
        "<option>Whitmore Point</option>" +
        "<option>Whittackers Well</option>" +
        "<option>Whyalla</option>" +
        "<option>Whyalla boat ramp</option>" +
        "<option>Whyalla jetty</option>" +
        "<option>Wiggins Point (E 1)</option>" +
        "<option>Wiggins Point (E 2)</option>" +
        "<option>Wild Cattle Island (north)</option>" +
        "<option>Wild Cattle Island (south)</option>" +
        "<option>Wild Horse Bay</option>" +
        "<option>Wilfords Point</option>" +
        "<option>William Preston Point</option>" +
        "<option>Williamsons Beach</option>" +
        "<option>Willie Creek (N)</option>" +
        "<option>Willie Creek (S)</option>" +
        "<option>Willie Pt (S 1)</option>" +
        "<option>Willie Pt (S 2)</option>" +
        "<option>Willie Pt (S 3)</option>" +
        "<option>Willie Pt (W)</option>" +
        "<option>Willyun (S)</option>" +
        "<option>Willyun Beach</option>" +
        "<option>Wilson Bay</option>" +
        "<option>Wilson Bay</option>" +
        "<option>Wilson Beach</option>" +
        "<option>Wilson Bight (E 1)</option>" +
        "<option>Wilson Bight (E 2)</option>" +
        "<option>Wilson Bight (W 1)</option>" +
        "<option>Wilson Bight (W 2)</option>" +
        "<option>Wilson Bight (W 3)</option>" +
        "<option>Wilson Point</option>" +
        "<option>Wilson Point (E)</option>" +
        "<option>Wilson Point (S 1)</option>" +
        "<option>Wilson Point (S 2)</option>" +
        "<option>Wilson Point (S 3)</option>" +
        "<option>Wilson Point (S 4)</option>" +
        "<option>Wilyabrup (N 1)</option>" +
        "<option>Wilyabrup (N 2)</option>" +
        "<option>Wilyabrup (N 3)</option>" +
        "<option>Wilyabrup Beach</option>" +
        "<option>Winda Woppa</option>" +
        "<option>Windang Island Rock Platform</option>" +
        "<option>Winderbandi Point (N 1)</option>" +
        "<option>Winderbandi Point (N 2)</option>" +
        "<option>Winderbandi Point (N)</option>" +
        "<option>Windlass Bay</option>" +
        "<option>Windmill Bay</option>" +
        "<option>Windmill Beach</option>" +
        "<option>Window Pane Bay</option>" +
        "<option>Window Pane Bay (W)</option>" +
        "<option>Windy Harbour</option>" +
        "<option>Windy Harbour (W)</option>" +
        "<option>Windy Point</option>" +
        "<option>Windy Point (north)</option>" +
        "<option>Windy Point (south)</option>" +
        "<option>Wineglass Bay</option>" +
        "<option>Winnie Bay</option>" +
        "<option>Wireah Hill</option>" +
        "<option>Wirruna</option>" +
        "<option>Withnell Bay (N 1)</option>" +
        "<option>Withnell Bay (N 1)</option>" +
        "<option>Withnell Bay (N 1)</option>" +
        "<option>Withnell Bay (S)</option>" +
        "<option>Withnell Bay (W)</option>" +
        "<option>Wittelbee Point (west 1)</option>" +
        "<option>Wittelbee Point (west 2)</option>" +
        "<option>Wittelbee Point (west 3)</option>" +
        "<option>Wivenhoe Beach</option>" +
        "<option>Wiyakipa (N 1)</option>" +
        "<option>Wiyakipa (N 2)</option>" +
        "<option>Wiyakipa Beach</option>" +
        "<option>Wolona Pt (E)</option>" +
        "<option>Wolona Pt (W)</option>" +
        "<option>Womerah Bay (1)</option>" +
        "<option>Womerah Bay (2)</option>" +
        "<option>Womerah Bay (3)</option>" +
        "<option>Womerah Bay (4)</option>" +
        "<option>Womerah Bay (5)</option>" +
        "<option>Womerah Bay (6)</option>" +
        "<option>Wonga</option>" +
        "<option>Wonga Bay (E 1)</option>" +
        "<option>Wonga Bay (E 2)</option>" +
        "<option>Wonga Bay (E 3)</option>" +
        "<option>Wonga Bay (E 4)</option>" +
        "<option>Wonga Bay (W 1)</option>" +
        "<option>Wonga Bay (W 2)</option>" +
        "<option>Wonga Bay (W 3)</option>" +
        "<option>Wonga Bay (W 4)</option>" +
        "<option>Wonga Bay (W 5)</option>" +
        "<option>Wonga Bay (W 6)</option>" +
        "<option>Wonga Bay (W 7)</option>" +
        "<option>Wonnerup Beach</option>" +
        "<option>Wood Point</option>" +
        "<option>Woodcutters Beach</option>" +
        "<option>Woodcutters beach (north 1)</option>" +
        "<option>Woodcutters beach (south 1)</option>" +
        "<option>Woodcutters beach (south 2)</option>" +
        "<option>Woodgate</option>" +
        "<option>Woodman Point</option>" +
        "<option>Woodman Point (N)</option>" +
        "<option>Woodman Point (S)</option>" +
        "<option>Woodrum Pt (E)</option>" +
        "<option>Woodrum Pt (S)</option>" +
        "<option>Woodside Creek</option>" +
        "<option>Woodside Jetty</option>" +
        "<option>Woodwark Bay (1)</option>" +
        "<option>Woodwark Bay (2)</option>" +
        "<option>Woodwark Bay (3)</option>" +
        "<option>Woodwark Bay (4)</option>" +
        "<option>Woody Hill Point (E 1)</option>" +
        "<option>Woody Hill Point (E 2)</option>" +
        "<option>Woody Hill Point (W)</option>" +
        "<option>Woody Point</option>" +
        "<option>Woody Point (N)</option>" +
        "<option>Woody Point (S)</option>" +
        "<option>Wool Bay</option>" +
        "<option>Wool Bay (north 1)</option>" +
        "<option>Wool Bay (north 2)</option>" +
        "<option>Wool Bay (south)</option>" +
        "<option>Woolawar Gully</option>" +
        "<option>Wooley Rock</option>" +
        "<option>Woolnorth Anchorage</option>" +
        "<option>Woolnorth Anchorage (S 1)</option>" +
        "<option>Woolnorth Anchorage (S 2)</option>" +
        "<option>Woolnorth Point (W 1)</option>" +
        "<option>Woolnorth Point (W 2)</option>" +
        "<option>Woongarra</option>" +
        "<option>Woonona-Bellambi</option>" +
        "<option>Woorim</option>" +
        "<option>Woppinbie Ck (W 1)</option>" +
        "<option>Woppinbie Ck (W 2)</option>" +
        "<option>Worbody Pt (N 1)</option>" +
        "<option>Worbody Pt (N 2)</option>" +
        "<option>Worbody Pt (S)</option>" +
        "<option>Worrmi Pt (E)</option>" +
        "<option>Worrmi Pt (W 1)</option>" +
        "<option>Worrmi Pt (W 2)</option>" +
        "<option>Worroo Well</option>" +
        "<option>Wray Bay (1)</option>" +
        "<option>Wray Bay (2)</option>" +
        "<option>Wreck</option>" +
        "<option>Wreck (1)</option>" +
        "<option>Wreck (2)</option>" +
        "<option>Wreck (3)</option>" +
        "<option>Wreck Bay (1)</option>" +
        "<option>Wreck Bay (2)</option>" +
        "<option>Wreck Point</option>" +
        "<option>Wreck Rock</option>" +
        "<option>Wreck Rock (north 1)</option>" +
        "<option>Wreck Rock (north 2)</option>" +
        "<option>Wreck-Meunga Ck</option>" +
        "<option>Wright Bay</option>" +
        "<option>Wrinklers Beach</option>" +
        "<option>Wunjunga</option>" +
        "<option>Wuraliwuntya Ck (E 1)</option>" +
        "<option>Wuraliwuntya Ck (E 2)</option>" +
        "<option>Wuraliwuntya Ck (E 3)</option>" +
        "<option>Wuraliwuntya Ck (E 4)</option>" +
        "<option>Wuraliwuntya Ck (W)</option>" +
        "<option>Wurgurlu Bay</option>" +
        "<option>Wurgurlu Bay (east)</option>" +
        "<option>Wurgurlu Bay (west 1)</option>" +
        "<option>Wurgurlu Bay (west 2)</option>" +
        "<option>Wurgurlu Bay (west 3)</option>" +
        "<option>Wurtulla</option>" +
        "<option>Wurugoij Creek (E)</option>" +
        "<option>Wurugoij Creek (N)</option>" +
        "<option>Wuyagiba</option>" +
        "<option>Wyadup</option>" +
        "<option>Wybung Headland</option>" +
        "<option>Wykeholm Point (W)</option>" +
        "<option>Wylie Bay</option>" +
        "<option>Wylie Head</option>" +
        "<option>Wyndhams Bore</option>" +
        "<option>Wynyard Golf Course 1</option>" +
        "<option>Wynyard Golf Course 2</option>" +
        "<option>Wyomi</option>" +
        "</dataList>";

    var yBeaches =
        "<datalist id='mylist'>" +
        "<option>YABBARA</option>" +
        "<option>YACHT CLUB</option>" +
        "<option>YALLUMGO COVE</option>" +
        "<option>YAMBA</option>" +
        "<option>YAMBUK</option>" +
        "<option>YCW</option>" +
        "<option>YERRUNG</option>" +
        "<option>Yachet Club</option>" +
        "<option>Yacht Club</option>" +
        "<option>Yacht Club (south)</option>" +
        "<option>Yacht club beach</option>" +
        "<option>Yalangbara</option>" +
        "<option>Yalata</option>" +
        "<option>Yalata (west)</option>" +
        "<option>Yalata dunes</option>" +
        "<option>Yallet Ck</option>" +
        "<option>Yallingup (N 1)</option>" +
        "<option>Yallingup (N 2)</option>" +
        "<option>Yallingup (N 3)</option>" +
        "<option>Yallingup (N 4)</option>" +
        "<option>Yallingup Beach</option>" +
        "<option>Yallingup reef</option>" +
        "<option>Yalliquin</option>" +
        "<option>Yanchep Beach</option>" +
        "<option>Yanchep Lagoon</option>" +
        "<option>Yanchep Lagoon (S)</option>" +
        "<option>Yankalilla Bay</option>" +
        "<option>Yanyare River</option>" +
        "<option>Yardie Creek (N 1)</option>" +
        "<option>Yardie Creek (N)</option>" +
        "<option>Yardie Creek (S)</option>" +
        "<option>Yardie Landing (E)</option>" +
        "<option>Yardie Landing (W)</option>" +
        "<option>Yardoogarra</option>" +
        "<option>Yaringa Point</option>" +
        "<option>Yaringa Point (N)</option>" +
        "<option>Yaringa Point (S)</option>" +
        "<option>Yaroomba</option>" +
        "<option>Yarra Bay</option>" +
        "<option>Yarra Bay (S)</option>" +
        "<option>Yarrabah Beach</option>" +
        "<option>Yarrawonga Point</option>" +
        "<option>Yarrawonga Point (west)</option>" +
        "<option>Yeagarup</option>" +
        "<option>Yelcher Beach</option>" +
        "<option>Yellow Beach</option>" +
        "<option>Yellow Patch</option>" +
        "<option>Yellow Point (S)</option>" +
        "<option>Yellow Rock</option>" +
        "<option>Yellow Rock</option>" +
        "<option>Yellow Rock Beach</option>" +
        "<option>Yena Gap/Ours</option>" +
        "<option>Yenyardindle Huts</option>" +
        "<option>Yenyardindle Huts (east)</option>" +
        "<option>Yenyardindle Huts (west)</option>" +
        "<option>Yeppoon</option>" +
        "<option>Yikikukunyiyanga</option>" +
        "<option>Yilan</option>" +
        "<option>Yilila (N 1)</option>" +
        "<option>Yilila (N 2)</option>" +
        "<option>Yilila (N 3)</option>" +
        "<option>Yilki beach</option>" +
        "<option>Yirrakala</option>" +
        "<option>Yirrakala (E 1)</option>" +
        "<option>Yirrakala (E 2)</option>" +
        "<option>Yirrakala (E 3)</option>" +
        "<option>Yirrakala (E 4)</option>" +
        "<option>Yirrakala (S 1)</option>" +
        "<option>Yirrakala (S 2)</option>" +
        "<option>Yirrakala (S 3)</option>" +
        "<option>Yokingup Bay (Thomas River)</option>" +
        "<option>York Sound (E 1)</option>" +
        "<option>York Sound (E 10)</option>" +
        "<option>York Sound (E 11)</option>" +
        "<option>York Sound (E 12)</option>" +
        "<option>York Sound (E 13)</option>" +
        "<option>York Sound (E 2)</option>" +
        "<option>York Sound (E 3)</option>" +
        "<option>York Sound (E 4)</option>" +
        "<option>York Sound (E 5)</option>" +
        "<option>York Sound (E 6)</option>" +
        "<option>York Sound (E 7)</option>" +
        "<option>York Sound (E 8)</option>" +
        "<option>York Sound (E 9)</option>" +
        "<option>Yorkeys Knob</option>" +
        "<option>Yorkeys Point</option>" +
        "<option>Young Bay</option>" +
        "<option>Yule River (E 1)</option>" +
        "<option>Yule River (E 2)</option>" +
        "<option>Yule River (E 3)</option>" +
        "<option>Yule River (E 4)</option>" +
        "<option>Yule River (E 5)</option>" +
        "<option>Yule River (E 6)</option>" +
        "<option>Yule River (E 7)</option>" +
        "<option>Yule River (E 8)</option>" +
        "<option>Yule River (E 9)</option>" +
        "<option>Yule River mouth (1)</option>" +
        "<option>Yule River mouth (2)</option>" +
        "<option>Yule River mouth (3)</option>" +
        "<option>Yumurryumuh Beach</option>" +
        "</dataList>";

    var zBeaches =
        "<datalist id='mylist'>" +
        "<option>ZENITH</option>" +
        "<option>Zane Grey Pool</option>" +
        "<option>Zebra Bay</option>" +
        "<option>Zebra Bay (N)</option>" +
        "<option>Zilzie Beach</option>" +
        "<option>Zoe Bay</option>" +
        "<option>Zuytdorp Wreck (N 1)</option>" +
        "<option>Zuytdorp Wreck (N 10)</option>" +
        "<option>Zuytdorp Wreck (N 11)</option>" +
        "<option>Zuytdorp Wreck (N 12)</option>" +
        "<option>Zuytdorp Wreck (N 13)</option>" +
        "<option>Zuytdorp Wreck (N 14)</option>" +
        "<option>Zuytdorp Wreck (N 15)</option>" +
        "<option>Zuytdorp Wreck (N 16)</option>" +
        "<option>Zuytdorp Wreck (N 2)</option>" +
        "<option>Zuytdorp Wreck (N 3)</option>" +
        "<option>Zuytdorp Wreck (N 4)</option>" +
        "<option>Zuytdorp Wreck (N 5)</option>" +
        "<option>Zuytdorp Wreck (N 6)</option>" +
        "<option>Zuytdorp Wreck (N 7)</option>" +
        "<option>Zuytdorp Wreck (N 8)</option>" +
        "<option>Zuytdorp Wreck (N 9)</option>" +
        "<option>Zuytdorp Wreck (S 1)</option>" +
        "<option>Zuytdorp Wreck (S 2)</option>" +
        "<option>Zuytdorp Wreck (S 3)</option>" +
        "<option>Zuytdorp Wreck (S 4)</option>" +
        "<option>Zuytdorp Wreck (S 5)</option>" +
        "<option>Zuytdorp Wreck (S 6)</option>" +
        "<option>Zuytdorp Wreck (S 7)</option>" +
        "<option>Zuytdorp Wreck (S 8)</option>" +
        "<option>Zuytdorp Wreck (S 9)</option>" +
        "<option>boulder</option>" +
        "<option>boulder beach 1</option>" +
        "<option>boulder beach 2</option>" +
        "<option>delete</option>" +
        "<option>delete1</option>" +
        "<option>north beach 1</option>" +
        "<option>north beach 2</option>" +
        "<option>north beach 3</option>" +
        "<option>settlement</option>" +
        "<option>settlement (north)</option>" +
        "<option>test</option>" +
        "<option>west beach</option>" +
        "</dataList>";

    /**
    Now we have a bunch of switch statements to load the relevent dataset, based on what key was pressed.
    This is neccasary as loading all possible beaches in is a very slow process and an impossibly large data set.
    Loading all in will exceed the browser and JQuery stack size
    */
    switch (character.toLowerCase()) {
        case 'a':
            $('#json-beachList').html(aBeaches);
            break;
        case 'b':
            $('#json-beachList').html(bBeaches);
            break;
        case 'c':
            $('#json-beachList').html(cBeaches);
            break;
        case 'd':
            $('#json-beachList').html(dBeaches);
            break;
        case 'e':
            $('#json-beachList').html(eBeaches);
            break;
        case 'f':
            $('#json-beachList').html(fBeaches);
            break;
        case 'g':
            $('#json-beachList').html(gBeaches);
            break;
        case 'h':
            $('#json-beachList').html(hBeaches);
            break;
        case 'i':
            $('#json-beachList').html(iBeaches);
            break;
        case 'j':
            $('#json-beachList').html(jBeaches);
            break;
        case 'k':
            $('#json-beachList').html(kBeaches);
            break;
        case 'l':
            $('#json-beachList').html(lBeaches);
            break;
        case 'm':
            $('#json-beachList').html(mBeaches);
            break;
        case 'n':
            $('#json-beachList').html(nBeaches);
            break;
        case 'o':
            $('#json-beachList').html(oBeaches);
            break;
        case 'p':
            $('#json-beachList').html(pBeaches);
            break;
        case 'q':
            $('#json-beachList').html(qBeaches);
            break;
        case 'r':
            $('#json-beachList').html(rBeaches);
            break;
        case 's':
            $('#json-beachList').html(sBeaches);
            break;
        case 't':
            $('#json-beachList').html(tBeaches);
            break;
        case 'u':
            $('#json-beachList').html(uBeaches);
            break;
        case 'v':
            $('#json-beachList').html(vBeaches);
            break;
        case 'w':
            $('#json-beachList').html(wBeaches);
            break;
        case 'x':
            $('#json-beachList').html(xBeaches);
            break;
        case 'y':
            $('#json-beachList').html(yBeaches);
            break;
        case 'z':
            $('#json-beachList').html(zBeaches);
            break;
        default:
            $('#json-beachList').html(leftOverBeaches);
            break;

    }

}
