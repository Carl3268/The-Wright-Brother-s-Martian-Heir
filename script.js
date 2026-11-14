/* Team Aevum — vanilla JavaScript, no build step or third-party dependencies. */
'use strict';

const translationCatalog = {
  "texts": {
    "t001": {
      "vi": "Mở mục lục sách",
      "en": "Open the book’s contents"
    },
    "t002": {
      "vi": "TỦ SÁCH NHỎ NGOÀI TRÁI ĐẤT",
      "en": "LITTLE STORIES BEYOND EARTH"
    },
    "t003": {
      "vi": "Về cuốn sách",
      "en": "About the book"
    },
    "t004": {
      "vi": "Giọng",
      "en": "Voice"
    },
    "t005": {
      "vi": "Mục lục",
      "en": "Contents"
    },
    "t006": {
      "vi": "CHUYỆN KỂ NGOÀI TRÁI ĐẤT",
      "en": "STORIES BEYOND EARTH"
    },
    "t007": {
      "vi": "MỘT CUỐN SÁCH NHỎ · NĂM CHƯƠNG",
      "en": "ONE LITTLE BOOK · FIVE CHAPTERS"
    },
    "t008": {
      "vi": "Aevum · MỘT CÂU CHUYỆN TỪ SAO HỎA",
      "en": "Aevum · A STORY FROM MARS"
    },
    "t009": {
      "vi": "NGƯỜI KẾ THỪA GIẤC MƠ BAY",
      "en": "HEIR TO A DREAM OF FLIGHT"
    },
    "t010": {
      "vi": "Một người bạn nhỏ.",
      "en": "One little friend."
    },
    "t011": {
      "vi": "Một giấc mơ lớn hơn cả đôi cánh.",
      "en": "A dream bigger than its wings."
    },
    "t012": {
      "vi": "Mở cuốn sách",
      "en": "Open the book"
    },
    "t013": {
      "vi": "BY Aevum",
      "en": "BY Aevum"
    },
    "t014": {
      "vi": "GỬI NHỮNG NGƯỜI BẠN THÍCH NGƯỚC NHÌN BẦU TRỜI",
      "en": "FOR FRIENDS WHO LOVE TO LOOK UP AT THE SKY"
    },
    "t015": {
      "vi": "Có một người bạn nhỏ,",
      "en": "There was a little friend"
    },
    "t016": {
      "vi": "đã dám mơ",
      "en": "who dared to dream"
    },
    "t017": {
      "vi": "thật lớn.",
      "en": "very big."
    },
    "t018": {
      "vi": "Tên cậu ấy là Ingenuity. Nhỏ như một hộp cơm, nhẹ hơn nhiều chiếc cặp sách — vậy mà cậu ấy đã vượt hàng triệu ki-lô-mét để đến một thế giới khác.",
      "en": "Its name was Ingenuity. About the size of a lunchbox and lighter than many school bags, it travelled millions of kilometres to a whole new world."
    },
    "t019": {
      "vi": "Giờ thì, mình cùng mở câu chuyện nhé.",
      "en": "Shall we open its story together?"
    },
    "t020": {
      "vi": "Thân mến, Aevum",
      "en": "With love, Aevum"
    },
    "t021": {
      "vi": "LỜI MỞ",
      "en": "A LITTLE HELLO"
    },
    "t022": {
      "vi": "MỖI CHƯƠNG LÀ MỘT LẦN KHÁM PHÁ",
      "en": "EVERY CHAPTER HOLDS A NEW DISCOVERY"
    },
    "t023": {
      "vi": "Mình cùng",
      "en": "Where shall"
    },
    "t024": {
      "vi": "đi đâu nhỉ?",
      "en": "we go together?"
    },
    "t025": {
      "vi": "Giấc mơ bay trên hành tinh đỏ",
      "en": "A dream of flight on the Red Planet"
    },
    "t026": {
      "vi": "Đôi mắt giữa đêm lạnh",
      "en": "Two eyes in the cold night"
    },
    "t027": {
      "vi": "Những ngày tìm lại nhau",
      "en": "Finding each other again"
    },
    "t028": {
      "vi": "Tìm một cách khác để bay",
      "en": "Another way to fly"
    },
    "t029": {
      "vi": "Đôi cánh nghỉ ngơi, giấc mơ bay tiếp",
      "en": "The wings rest. The dream flies on."
    },
    "t030": {
      "vi": "Cậu có thể lật từng trang, hoặc mở ngay chương mình tò mò nhất.",
      "en": "Turn the pages in order, or jump straight to the chapter that makes you curious."
    },
    "t031": {
      "vi": "Bắt đầu từ trang đầu tiên",
      "en": "Start at the very first page"
    },
    "t032": {
      "vi": "MỤC LỤC",
      "en": "CONTENTS"
    },
    "t033": {
      "vi": "KHOẢNH KHẮC ĐẦU TIÊN",
      "en": "THE VERY FIRST MOMENT"
    },
    "t034": {
      "vi": "NASA / JPL-Caltech · Hình minh họa",
      "en": "NASA / JPL-Caltech · Artist’s illustration"
    },
    "t035": {
      "vi": "19.04.2021 / PHÒNG ĐIỀU KHIỂN JPL",
      "en": "19 APRIL 2021 / JPL MISSION CONTROL"
    },
    "t036": {
      "vi": "Cả căn phòng",
      "en": "The room held its breath."
    },
    "t037": {
      "vi": "nín thở. Rồi vỡ òa.",
      "en": "Then everyone cheered."
    },
    "t038": {
      "vi": "Ngày mười chín tháng tư năm hai nghìn không trăm hai mươi mốt. Tại phòng điều khiển JPL, mọi người chờ đợi những tín hiệu từ Sao Hỏa.",
      "en": "April nineteenth, twenty twenty-one. At JPL mission control, everyone was waiting for a message from Mars."
    },
    "t039": {
      "vi": "Rồi MiMi Aung xác nhận: con người đã đưa một trực thăng bay trên hành tinh khác. Nhỏ bé giữa mênh mông cát đỏ, Ingenuity vừa nhấc mình lên. Nhưng để hiểu khoảnh khắc ấy, chúng mình hãy quay ngược thời gian nhé.",
      "en": "Then MiMi Aung confirmed it: humans had flown a helicopter on another planet. Tiny against the great red landscape, Ingenuity had lifted off the ground. But to understand that moment, let’s turn back the clock together."
    },
    "t040": {
      "vi": "Một chiếc trực thăng nhỏ đã đến đây bằng cách nào?",
      "en": "How did a little helicopter get all the way here?"
    },
    "t041": {
      "vi": "NHÓM Aevum",
      "en": "TEAM Aevum"
    },
    "t042": {
      "vi": "CHƯƠNG 01",
      "en": "CHAPTER 01"
    },
    "t043": {
      "vi": "NASA / JPL-Caltech · Perseverance hạ cánh, ảnh từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Perseverance landing, from the team’s document"
    },
    "t044": {
      "vi": "QUAY NGƯỢC THỜI GIAN / 18.02.2021",
      "en": "TURNING BACK THE CLOCK / 18 FEBRUARY 2021"
    },
    "t045": {
      "vi": "Một chuyến “đu dây”",
      "en": "A gentle ride on cables"
    },
    "t046": {
      "vi": "để chạm vào Sao Hỏa.",
      "en": "down to the Martian ground."
    },
    "t047": {
      "vi": "Hãy trở về tháng hai năm hai nghìn không trăm hai mươi mốt. Sau khoảng bảy tháng du hành, xe tự hành Perseverance đến Sao Hỏa, mang Ingenuity dưới bụng. Không khí loãng khiến việc giảm tốc rất khó.",
      "en": "Let’s go back to February, twenty twenty-one. After about seven months in space, the Perseverance rover arrived at Mars with Ingenuity tucked underneath. The thin air made slowing down very difficult."
    },
    "t048": {
      "vi": "Sau tấm chắn nhiệt và dù, một tầng hạ cánh dùng động cơ để chậm lại. Rồi ba sợi dây cáp nhẹ nhàng hạ rover xuống mặt đất. Màn đu dây ấy có tên Sky Crane.",
      "en": "After the heat shield and parachute had done their jobs, a rocket-powered landing stage slowed the rover further. Then three cables gently lowered it to the ground. This extraordinary manoeuvre was called Sky Crane."
    },
    "t049": {
      "vi": "Cùng tìm hiểu nhé",
      "en": "Let’s take a closer look"
    },
    "t050": {
      "vi": "NASA / JPL-Caltech · Ảnh Ingenuity từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Ingenuity photograph from the team’s document"
    },
    "t051": {
      "vi": "TỪ ĐÂY, ĐỂ TỚ KỂ CẬU NGHE…",
      "en": "FROM HERE, LET ME TELL YOU MY STORY…"
    },
    "t052": {
      "vi": "Chào cậu!",
      "en": "Hello, friend!"
    },
    "t053": {
      "vi": "Tớ là Ingenuity.",
      "en": "I’m Ingenuity."
    },
    "t054": {
      "vi": "Chào cậu! Tớ là Ingenuity. Cậu thấy hình dáng của tớ có hơi lạ không? Một chiếc hộp nhỏ, bốn cái chân mảnh, và đôi cánh quay tít phía trên.",
      "en": "Hello, friend! I’m Ingenuity. Do you think I look a little unusual? A small box, four spindly legs, and spinning blades above my head."
    },
    "t055": {
      "vi": "Bên cạnh mẹ Perseverance to gần bằng ô tô, tớ chỉ nặng một phẩy tám ki lô gam thôi. Đem một trực thăng đến Sao Hỏa từng là một ý tưởng rất mạo hiểm. Nhưng các kỹ sư đã cho tớ cơ hội. Mẹ đặt tớ xuống mặt đất, rồi lùi ra xa. Từ lúc ấy, tớ phải tự mình học cách bay.",
      "en": "Beside my car-sized mum, Perseverance, I’m tiny: just one point eight kilograms. Bringing a helicopter to Mars had once seemed like a very risky idea. But my engineers gave me a chance. Mum placed me on the ground and rolled away. From that moment, I had to learn to fly on my own."
    },
    "t056": {
      "vi": "Nếu là tớ, cậu có hồi hộp không?",
      "en": "Would you feel a little nervous if you were me?"
    },
    "t057": {
      "vi": "CHƯƠNG 02",
      "en": "CHAPTER 02"
    },
    "t058": {
      "vi": "ĐÊM ĐẦU TIÊN / MỘT CHIẾC HỘP NHỎ GIỮ ẤM",
      "en": "THE FIRST NIGHT / A LITTLE BOX KEEPING WARM"
    },
    "t059": {
      "vi": "Khi Mặt Trời đi ngủ,",
      "en": "When the Sun goes to bed,"
    },
    "t060": {
      "vi": "tớ phải thật kiên cường.",
      "en": "I have to be brave."
    },
    "t061": {
      "vi": "Cậu có từng nhớ nhà khi đi xa chưa? Tớ thì ở xa Trái Đất đến mức một tín hiệu phải mất nhiều phút mới tới nơi. Mỗi đêm, trời có thể lạnh khoảng âm chín mươi độ C.",
      "en": "Have you ever missed home when you were far away? I’m so far from Earth that even a radio message takes many minutes to get there. At night, it can be around minus ninety degrees Celsius."
    },
    "t062": {
      "vi": "Tớ phải giữ ấm những linh kiện nhỏ bên trong mình. May mà vẫn có mẹ Perseverance ở gần. Mẹ chuyển những lời nhắn của tớ về cho các kỹ sư. Xa nhà thật đấy, nhưng tớ không hoàn toàn một mình.",
      "en": "I have to keep my little electronic parts warm. Luckily, Mum Perseverance is nearby. She passes my messages back to the engineers on Earth. I’m a long way from home, but I’m not completely alone."
    },
    "t063": {
      "vi": "Cậu sẽ mang điều gì để thấy bớt nhớ nhà?",
      "en": "What would you bring to feel a little closer to home?"
    },
    "t064": {
      "vi": "NASA / JPL-Caltech · Ảnh camera định vị từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Navigation-camera image from the team’s document"
    },
    "t065": {
      "vi": "HAI CHIẾC MÁY ẢNH / HAI CÁCH NHÌN THẾ GIỚI",
      "en": "TWO CAMERAS / TWO WAYS OF SEEING"
    },
    "t066": {
      "vi": "Một mắt tìm đường.",
      "en": "One eye finds the way."
    },
    "t067": {
      "vi": "Một mắt giữ kỷ niệm.",
      "en": "One eye keeps memories."
    },
    "t068": {
      "vi": "Tớ nhìn thế giới bằng hai con mắt rất khác nhau. Một con mắt đen trắng luôn nhìn xuống đất để giúp tớ biết mình đang di chuyển ra sao. Con mắt màu thì lưu lại những cảnh đẹp cho mọi người ở Trái Đất.",
      "en": "I see the world through two very different eyes. A black-and-white eye looks down at the ground to help me work out how I’m moving. My colour eye saves beautiful views for everyone back on Earth."
    },
    "t069": {
      "vi": "Cậu thấy những viên đá kia không? Với cậu, chúng là đá. Với tớ, chúng còn là những dấu mốc chỉ đường.",
      "en": "Can you see those rocks? To you, they might just be rocks. To me, they are little landmarks showing me the way."
    },
    "t070": {
      "vi": "NASA / JPL-Caltech / ASU / MSSS · Ảnh chuyến bay 13, minh họa cảnh bay",
      "en": "NASA / JPL-Caltech / ASU / MSSS · Flight 13 photograph, illustrating flight"
    },
    "t071": {
      "vi": "CHUYẾN BAY 06 / MỘT NHỊP BỊ LỠ",
      "en": "FLIGHT 06 / ONE MISSED BEAT"
    },
    "t072": {
      "vi": "Ôi! Sao mọi thứ",
      "en": "Oh! Why is everything"
    },
    "t073": {
      "vi": "chao đảo thế này?",
      "en": "wobbling like this?"
    },
    "t074": {
      "vi": "Có lần, khoảng năm mươi tư giây sau khi cất cánh, một bức ảnh định vị của tớ bị mất. Các bức ảnh tiếp theo lại mang sai mốc thời gian. Tớ cứ ngỡ mình đang chuyển động khác đi, nên sửa tới sửa lui. Thế là người tớ chao đảo, có lúc nghiêng hơn hai mươi độ.",
      "en": "Once, about fifty-four seconds after takeoff, one of my navigation pictures went missing. The pictures that followed had the wrong time labels. I thought I was moving differently, so I kept trying to correct myself. I rocked back and forth, sometimes tilting more than twenty degrees."
    },
    "t075": {
      "vi": "Hú vía! Nhưng hệ thống điều khiển đã giúp tớ hạ cánh an toàn. Sau đó, các kỹ sư tìm ra chuyện gì đã xảy ra. Một lần vấp không có nghĩa là hành trình phải dừng lại.",
      "en": "Phew! My flight-control system helped me land safely. Afterwards, the engineers worked out what had happened. One wobble doesn’t have to mean the end of a journey."
    },
    "t076": {
      "vi": "CHƯƠNG 03",
      "en": "CHAPTER 03"
    },
    "t077": {
      "vi": "NASA / JPL-Caltech · Ảnh từ Ingenuity",
      "en": "NASA / JPL-Caltech · A photograph taken by Ingenuity"
    },
    "t078": {
      "vi": "MÙA BỤI / ÁNH NẮNG MỎNG ĐI",
      "en": "DUSTY SEASON / WHEN THE SUNLIGHT FADES"
    },
    "t079": {
      "vi": "Chiếc “bữa sáng”",
      "en": "Where has my breakfast"
    },
    "t080": {
      "vi": "bằng nắng của tớ đâu rồi?",
      "en": "of sunshine gone?"
    },
    "t081": {
      "vi": "Bữa sáng của cậu là gì? Của tớ là ánh nắng! Nhưng rồi bụi đỏ kéo đến, che mờ cả bầu trời.",
      "en": "What do you have for breakfast? Mine is sunshine! But then red dust swept in and clouded the sky."
    },
    "t082": {
      "vi": "Trong một đợt bão, lượng ánh nắng tới tấm pin của tớ giảm khoảng mười tám phần trăm. Ít nắng nghĩa là ít năng lượng hơn. Các kỹ sư quyết định để tớ nghỉ, kiểm tra mọi thứ và đợi thời tiết tốt lên. Hóa ra, biết chờ cũng là một cách để đi xa hơn.",
      "en": "During one storm, the sunlight reaching my solar panel dropped by about eighteen percent. Less sunlight meant less energy. My engineers let me rest, checked everything, and waited for better weather. It turns out that knowing when to wait can help you go further."
    },
    "t083": {
      "vi": "Đôi khi, nghỉ một chút là để có thể tiếp tục.",
      "en": "Sometimes a little rest helps us keep going."
    },
    "t084": {
      "vi": "NASA / JPL-Caltech · Ảnh từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Photograph from the team’s document"
    },
    "t085": {
      "vi": "MÙA ĐÔNG / LỠ MỘT CUỘC HẸN",
      "en": "WINTER / A MISSED APPOINTMENT"
    },
    "t086": {
      "vi": "Mẹ ơi,",
      "en": "Mum,"
    },
    "t087": {
      "vi": "mẹ còn nghe tớ không?",
      "en": "can you still hear me?"
    },
    "t088": {
      "vi": "Mùa đông đến, những đêm lạnh kéo dài hơn. Có một đêm, pin cạn đến mức máy tính của tớ phải tắt. Khi nắng đánh thức tớ dậy, đồng hồ đã đặt lại. Tớ không quên các bạn đâu, chỉ quên mất giờ hẹn thôi.",
      "en": "Winter arrived, and the cold nights grew longer. One night, my battery ran so low that my computer switched off. When sunshine woke me up, my clock had reset. I hadn’t forgotten my friends. I had only forgotten the time of our appointment."
    },
    "t089": {
      "vi": "Ở Trái Đất, các kỹ sư lo lắng và nhờ mẹ Perseverance lắng nghe lâu hơn. Rồi tín hiệu của tớ xuất hiện. Mẹ ơi, tớ đây! Chúng tớ đã tìm lại được nhau.",
      "en": "Back on Earth, my worried engineers asked Mum Perseverance to listen for longer. Then my signal appeared. Mum, I’m here! We had found each other again."
    },
    "t090": {
      "vi": "CHƯƠNG 04",
      "en": "CHAPTER 04"
    },
    "t091": {
      "vi": "NASA / JPL-Caltech · Thử nghiệm trên Trái Đất",
      "en": "NASA / JPL-Caltech · Testing on Earth"
    },
    "t092": {
      "vi": "MỘT CẢM BIẾN HỎNG / MỘT Ý TƯỞNG MỚI",
      "en": "A BROKEN SENSOR / A NEW IDEA"
    },
    "t093": {
      "vi": "Tớ vẫn còn",
      "en": "There’s still"
    },
    "t094": {
      "vi": "một cách khác mà!",
      "en": "another way!"
    },
    "t095": {
      "vi": "Cái lạnh còn làm một cảm biến đo độ nghiêng của tớ ngừng hoạt động. Không có nó, làm sao tớ biết mình đang đứng nghiêng thế nào trước khi bay? May quá, tớ vẫn còn một bộ cảm biến khác, gọi là IMU.",
      "en": "The cold also stopped one of my tilt sensors from working. Without it, how would I know which way I was leaning before takeoff? Luckily, I had another set of sensors, called an IMU."
    },
    "t096": {
      "vi": "Các kỹ sư đã sửa phần mềm để dùng dữ liệu từ đó. Còn bộ não xử lý của tớ thì có họ hàng công nghệ với chip điện thoại thông minh. Những thứ quen thuộc trên Trái Đất, khi được kết hợp thật khéo, có thể làm nên chuyện phi thường.",
      "en": "My engineers changed the software so I could use its measurements instead. And my computer brain uses technology related to smartphone chips. Familiar things from Earth, put together with care, can do extraordinary things."
    },
    "t097": {
      "vi": "Thử nghĩ xem: cậu còn có cách nào khác?",
      "en": "What other way could you try?"
    },
    "t098": {
      "vi": "NASA / JPL-Caltech · Góc nhìn từ Ingenuity",
      "en": "NASA / JPL-Caltech · Ingenuity’s view from above"
    },
    "t099": {
      "vi": "TỪ THỬ NGHIỆM NHỎ / THÀNH NGƯỜI BẠN TRINH SÁT",
      "en": "FROM LITTLE EXPERIMENT / TO SCOUTING FRIEND"
    },
    "t100": {
      "vi": "Mẹ đi bên dưới.",
      "en": "Mum travels below."
    },
    "t101": {
      "vi": "Tớ nhìn đường phía trước.",
      "en": "I look at the way ahead."
    },
    "t102": {
      "vi": "Ban đầu, mọi người chỉ mong tớ bay thử tối đa năm lần. Nhưng tớ đã tiếp tục.",
      "en": "At first, everyone only hoped I would manage up to five test flights. But I kept going."
    },
    "t103": {
      "vi": "Khi mẹ Perseverance đi bên dưới, tớ chụp ảnh từ trên cao để cả đội thấy những nơi khó nhìn từ mặt đất. Tớ không mang theo thiết bị khoa học chuyên dụng, nhưng tớ có thể mang về một góc nhìn mới. Từ một thử nghiệm nhỏ, tớ trở thành người bạn trinh sát của mẹ.",
      "en": "As Mum Perseverance travelled below, I took pictures from above so the team could see places that were hard to study from the ground. I didn’t carry a dedicated science instrument, but I could bring back a new perspective. A little experiment had become Mum’s scouting friend."
    },
    "t104": {
      "vi": "CHƯƠNG 05",
      "en": "CHAPTER 05"
    },
    "t105": {
      "vi": "NASA / JPL-Caltech · Vị trí Ingenuity, ảnh từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Ingenuity’s location, from the team’s document"
    },
    "t106": {
      "vi": "18.01.2024 / CHUYẾN BAY CUỐI",
      "en": "18 JANUARY 2024 / THE FINAL FLIGHT"
    },
    "t107": {
      "vi": "Một lần hạ cánh.",
      "en": "One more landing."
    },
    "t108": {
      "vi": "Đôi cánh không còn nguyên.",
      "en": "Wings that could fly no more."
    },
    "t109": {
      "vi": "Ngày mười tám tháng một năm hai nghìn không trăm hai mươi tư. Tớ cất cánh lần thứ bảy mươi hai. Bên dưới là một vùng cát ít điểm mốc, khiến việc định vị trở nên khó khăn. Sau lần hạ cánh ấy, những cánh quạt mỏng nhẹ của tớ bị hư hại.",
      "en": "January eighteenth, twenty twenty-four. I took off for the seventy-second time. Below me was a sandy area with very few landmarks, making navigation difficult. After that landing, my thin, lightweight rotor blades were damaged."
    },
    "t110": {
      "vi": "Chúng mong manh như miếng bánh ốc quế trong câu chuyện của chúng mình. Tớ không thể bay nữa. Tớ buồn chứ. Nhưng những chuyến bay đã có, không vì thế mà biến mất.",
      "en": "In our story, they were as delicate as the wafer of an ice-cream cone. I couldn’t fly any more. Of course I felt sad. But that didn’t erase all the journeys I had already made."
    },
    "t111": {
      "vi": "Ở LẠI SAO HỎA / GỬI ƯỚC MƠ ĐI XA",
      "en": "STAYING ON MARS / SENDING A DREAM FURTHER"
    },
    "t112": {
      "vi": "Tớ ở lại Sao Hỏa nhé.",
      "en": "I’ll stay here on Mars."
    },
    "t113": {
      "vi": "Còn cậu, hãy mang giấc mơ",
      "en": "You take your dream"
    },
    "t114": {
      "vi": "của mình đi xa hơn.",
      "en": "a little further."
    },
    "t115": {
      "vi": "Các kỹ sư chuẩn bị để tớ ở lại như một trạm thử nghiệm nhỏ, ghi dữ liệu ngay tại nơi mình đang đứng. Không còn bay cùng mẹ, nhưng những điều tớ đã học vẫn có thể giúp các nhà thám hiểm sau này. Gần ba năm. Bảy mươi hai chuyến bay.",
      "en": "My engineers prepared me to stay as a little stationary testbed, recording information right where I stood. I would no longer fly alongside Mum, but what I had learned could still help future explorers. Almost three years. Seventy-two flights."
    },
    "t116": {
      "vi": "Mười bảy ki lô mét. Tớ từng chỉ là một câu hỏi: liệu có bay được không? Giờ thì chúng mình đã biết câu trả lời. Tớ ở lại Sao Hỏa nhé. Còn cậu, hãy mang giấc mơ của mình đi xa hơn.",
      "en": "Seventeen kilometres. Once, I was only a question: could a helicopter fly here? Now we know the answer. I’ll stay here on Mars, friend. You take your dream a little further."
    },
    "t117": {
      "vi": "Hẹn gặp cậu trong những khám phá tiếp theo.",
      "en": "See you on our next adventure."
    },
    "t118": {
      "vi": "KHÉP MỘT CUỐN SÁCH. MỞ MỘT GIẤC MƠ.",
      "en": "CLOSE A BOOK. OPEN A DREAM."
    },
    "t119": {
      "vi": "Một người bạn nhỏ đã bay 72 lần.",
      "en": "One little friend flew seventy-two times."
    },
    "t120": {
      "vi": "Biết đâu, một ngày nào đó, cậu sẽ viết nên câu chuyện tiếp theo.",
      "en": "Perhaps one day you will write the next chapter."
    },
    "t121": {
      "vi": "Hẹn gặp cậu giữa những vì sao.",
      "en": "See you among the stars."
    },
    "t122": {
      "vi": "DÀNH CHO NHÀ THÁM HIỂM ĐANG ĐỌC SÁCH",
      "en": "FOR THE EXPLORER READING THIS BOOK"
    },
    "t123": {
      "vi": "Còn",
      "en": "What about"
    },
    "t124": {
      "vi": "cậu",
      "en": "you"
    },
    "t125": {
      "vi": "thì sao?",
      "en": "?"
    },
    "t126": {
      "vi": "Giấc mơ của cậu là gì?",
      "en": "What is your dream?"
    },
    "t127": {
      "vi": "Câu chuyện có thể khép lại, nhưng sự tò mò thì chưa. Mình cùng khám phá thêm nhé?",
      "en": "The story may be over, but our curiosity isn’t. Shall we explore a little more?"
    },
    "t128": {
      "vi": "chuyến bay",
      "en": "flights"
    },
    "t129": {
      "vi": "đã đi qua",
      "en": "travelled"
    },
    "t130": {
      "vi": "THỬ MỘT CHÚT NHÉ",
      "en": "LET’S TRY SOMETHING"
    },
    "t131": {
      "vi": "Góc tò mò của chúng mình",
      "en": "Our little corner of curiosity"
    },
    "t132": {
      "vi": "LẬT LẠI NHỮNG DẤU MỐC",
      "en": "LOOK BACK AT THE MILESTONES"
    },
    "t133": {
      "vi": "Nhật ký hành trình",
      "en": "The journey’s logbook"
    },
    "t134": {
      "vi": "NHỮNG NGƯỜI LÀM NÊN CUỐN SÁCH",
      "en": "THE PEOPLE BEHIND THIS BOOK"
    },
    "t135": {
      "vi": "Nguồn & lời cảm ơn",
      "en": "Sources & thank-yous"
    },
    "t136": {
      "vi": "Gấp sách lại",
      "en": "Close the book"
    },
    "t137": {
      "vi": "HẾT CHUYỆN, CHƯA HẾT ƯỚC MƠ",
      "en": "THE STORY ENDS. THE DREAM GOES ON."
    },
    "t138": {
      "vi": "Trang trước",
      "en": "Previous page"
    },
    "t139": {
      "vi": "Lật chậm thôi, câu chuyện vẫn đợi cậu.",
      "en": "Turn slowly. The story will wait for you."
    },
    "t140": {
      "vi": "← → để lật trang · Trên điện thoại, cậu có thể vuốt ngang.",
      "en": "← → to turn pages · On a phone, you can swipe sideways."
    },
    "t141": {
      "vi": "Ở lại, nhưng không bị lãng quên.",
      "en": "Left behind, but not forgotten."
    },
    "t142": {
      "vi": "Một câu chuyện độc lập lấy cảm hứng từ NASA.",
      "en": "An independent storytelling project inspired by NASA."
    },
    "t143": {
      "vi": "MỤC LỤC CUỐN SÁCH",
      "en": "THE BOOK’S CONTENTS"
    },
    "t144": {
      "vi": "Cậu muốn mở",
      "en": "Which chapter"
    },
    "t145": {
      "vi": "chương nào?",
      "en": "shall we open?"
    },
    "t146": {
      "vi": "Một cú nhấc mình.  Một bầu trời mới.",
      "en": "One small lift. A whole new sky."
    },
    "t147": {
      "vi": "Xa nhà thật xa.  Nhưng không một mình.",
      "en": "Far from home. Never truly alone."
    },
    "t148": {
      "vi": "Có những ngày,  chờ cũng là dũng cảm.",
      "en": "Sometimes waiting is brave, too."
    },
    "t149": {
      "vi": "Khi một cách không được,  thử một cách khác nhé.",
      "en": "If one way doesn’t work, let’s try another."
    },
    "t150": {
      "vi": "Tớ không bay nữa.  Nhưng giấc mơ thì có.",
      "en": "My flying stopped. My dream didn’t."
    },
    "t151": {
      "vi": "NĂM CHƯƠNG NHỎ. MỘT NGƯỜI BẠN THẬT PHI THƯỜNG.",
      "en": "FIVE LITTLE CHAPTERS. ONE EXTRAORDINARY LITTLE FRIEND."
    },
    "t152": {
      "vi": "MÌNH CÙNG TÌM HIỂU",
      "en": "LET’S TAKE A CLOSER LOOK"
    },
    "t153": {
      "vi": "Kể tiếp nào",
      "en": "Back to the story"
    },
    "t154": {
      "vi": "CHUYỆN KỂ DỰA TRÊN KHÁM PHÁ THẬT",
      "en": "A STORY BUILT ON REAL EXPLORATION"
    },
    "t155": {
      "vi": "Một chút tưởng tượng.",
      "en": "A little imagination."
    },
    "t156": {
      "vi": "Rất nhiều điều có thật.",
      "en": "A lot of real discovery."
    },
    "t157": {
      "vi": "Câu chuyện của Aevum được chuyển thể từ thẻ",
      "en": "Aevum’s story adapts the"
    },
    "t158": {
      "vi": "“Nội dung chi tiết”",
      "en": "“Nội dung chi tiết” (Detailed content)"
    },
    "t159": {
      "vi": "trong tài liệu dự án: mở đầu bằng người dẫn chuyện, rồi để Ingenuity tự kể với cậu bằng giọng “tớ–cậu”. Các tình huống được chia thành năm chương trong một cuốn sách ảnh có thể lật trang.",
      "en": "tab of the project document. It begins with a narrator, then lets Ingenuity speak directly to you as a friend. The story is arranged into five chapters in a page-turning picture book."
    },
    "t160": {
      "vi": "Cách gọi Perseverance là “mẹ”, cảm xúc của Ingenuity và các lời tự bạch là biện pháp kể chuyện, không phải lời trích dẫn NASA. Trích dẫn MiMi Aung ở đầu truyện được giữ bằng tiếng Anh; câu chuyện và lời đọc có cả tiếng Việt lẫn tiếng Anh.",
      "en": "Calling Perseverance “Mum”, Ingenuity’s feelings, and its first-person reflections are storytelling devices, not NASA quotations. MiMi Aung’s opening quote remains in English. The surrounding story and narration are available in both Vietnamese and English."
    },
    "t161": {
      "vi": "Cùng xem những nguồn gốc nhé",
      "en": "Explore the original sources"
    },
    "t162": {
      "vi": "NASA — Làm quen với Ingenuity",
      "en": "NASA — Meet Ingenuity"
    },
    "t163": {
      "vi": "NASA — Nhật ký 72 chuyến bay",
      "en": "NASA — The log of all 72 flights"
    },
    "t164": {
      "vi": "JPL — Khoảnh khắc bay đầu tiên",
      "en": "JPL — The historic first flight"
    },
    "t165": {
      "vi": "NASA — Chuyện gì xảy ra ở chuyến bay 6?",
      "en": "NASA — What happened on Flight 6?"
    },
    "t166": {
      "vi": "NASA — Bão bụi và ánh sáng giảm 18%",
      "en": "NASA — A dust storm and an 18% drop in sunlight"
    },
    "t167": {
      "vi": "NASA — Một cách khác khi cảm biến hỏng",
      "en": "NASA — Another way when a sensor failed"
    },
    "t168": {
      "vi": "NASA — Ingenuity ở lại ghi dữ liệu",
      "en": "NASA — Ingenuity stays to record data"
    },
    "t169": {
      "vi": "Tải lời kể tiếng Việt",
      "en": "Download the English narration"
    },
    "t170": {
      "vi": "Tải HTML, CSS & JavaScript",
      "en": "Download HTML, CSS & JavaScript"
    },
    "t171": {
      "vi": "Lời cảm ơn",
      "en": "A little thank-you"
    },
    "t172": {
      "vi": "Kịch bản: Aevum. Github:",
      "en": "Story: Aevum. GitHub:"
    },
    "t173": {
      "vi": "(MIT). Hình ảnh: NASA / JPL-Caltech; một số ảnh có thêm tác giả ASU / MSSS. Ảnh bay 13 được dùng minh họa và có chú thích rõ. Logo: Aevum. Phông chữ: DM Sans, Instrument Serif, Be Vietnam Pro và Lora (SIL Open Font License).",
      "en": "(MIT). Images: NASA / JPL-Caltech, with additional ASU / MSSS credits where applicable. Flight 13 images used as illustrations are clearly captioned. Logo: Aevum. Fonts: DM Sans, Instrument Serif, Be Vietnam Pro, and Lora (SIL Open Font License)."
    },
    "t174": {
      "vi": ". Hình ảnh: NASA / JPL-Caltech; một số ảnh có thêm tác giả ASU / MSSS, gồm ảnh từ thẻ “Ảnh” trong tài liệu nhóm. Ảnh bay 13 được dùng minh họa và có chú thích rõ. Logo: bản vector dựng theo ảnh nhóm cung cấp. Phông chữ: DM Sans, Instrument Serif, Be Vietnam Pro và Lora (SIL Open Font License).",
      "en": ". Images: NASA / JPL-Caltech, with additional ASU / MSSS credits where applicable, including images from the project’s “Ảnh” (Images) tab. Flight 13 photographs used as illustrations are clearly captioned. Logo: a vector recreation of the team’s supplied image. Fonts: DM Sans, Instrument Serif, Be Vietnam Pro, and Lora (SIL Open Font License)."
    },
    "t175": {
      "vi": "Dự án độc lập được dựa trên các dữ liệu của NASA. Lời kể được đọc bằng giọng có sẵn trên trình duyệt hoặc thiết bị; chất giọng có thể khác nhau.",
      "en": "An independent project based on NASA data. Narration uses voices available in your browser or on your device; the actual sound may vary."
    },
    "t176": {
      "vi": "GÓC TÒ MÒ / THỬ CÙNG TỚ NÀO",
      "en": "CURIOSITY CORNER / LET’S TRY IT TOGETHER"
    },
    "t177": {
      "vi": "Cậu hỏi “vì sao?”.",
      "en": "You ask “why?”."
    },
    "t178": {
      "vi": "Mình thử tìm nhé.",
      "en": "Let’s find out."
    },
    "t179": {
      "vi": "01 / Nhẹ hơn trên Sao Hỏa?",
      "en": "01 / Lighter on Mars?"
    },
    "t180": {
      "vi": "02 / Nếu cậu là kỹ sư",
      "en": "02 / Think like an engineer"
    },
    "t181": {
      "vi": "Cùng một chiếc trực thăng, nhưng lực hút của hai hành tinh khác nhau. Kéo thanh trượt để khám phá nhé!",
      "en": "The same helicopter, but two different planetary pulls. Move the slider and see what happens!"
    },
    "t182": {
      "vi": "Khối lượng",
      "en": "Mass"
    },
    "t183": {
      "vi": "TRÊN TRÁI ĐẤT",
      "en": "ON EARTH"
    },
    "t184": {
      "vi": "Gia tốc trọng trường: 9,81 m/s²",
      "en": "Gravity: 9.81 m/s²"
    },
    "t185": {
      "vi": "TRÊN SAO HỎA",
      "en": "ON MARS"
    },
    "t186": {
      "vi": "Gia tốc trọng trường: 3,71 m/s²",
      "en": "Gravity: 3.71 m/s²"
    },
    "t187": {
      "vi": "Khối lượng không đổi, trọng lượng chỉ còn khoảng 38%. Trọng lượng là một lực, được đo bằng niutơn (N). Dù ở đâu, khối lượng của tớ vẫn khoảng 1,8 kg.",
      "en": "The same mass, but only about 38% of the weight. Weight is a force, measured in newtons (N). Wherever I go, my mass stays about 1.8 kg."
    },
    "t188": {
      "vi": "Không khí Sao Hỏa rất loãng. Cậu sẽ chọn điều gì để giúp tớ bay?",
      "en": "The Martian air is very thin. What would you choose to help me fly?"
    },
    "t189": {
      "vi": "Làm thân máy nặng hơn",
      "en": "Make the body heavier"
    },
    "t190": {
      "vi": "Dùng cánh quạt lớn, quay thật nhanh",
      "en": "Use large, very fast-spinning rotors"
    },
    "t191": {
      "vi": "Để một phi công ở Trái Đất lái trực tiếp",
      "en": "Have a pilot on Earth steer me live"
    },
    "t192": {
      "vi": "Thử ý tưởng này nhé",
      "en": "Let’s try this idea"
    },
    "t193": {
      "vi": "Thử ở lớp: gấp một chiếc trực thăng giấy. Thay đổi độ dài cánh hoặc khối lượng, mỗi lần chỉ đổi một thứ. Thả từ cùng một độ cao an toàn. Cậu đoán điều gì sẽ xảy ra? Thử, quan sát, rồi kể cho bạn nghe nhé.",
      "en": "A classroom challenge: fold a paper helicopter. Change the blade length or its mass, one thing at a time. Drop it from the same safe height. What do you predict? Test, observe, and tell a friend what you found."
    },
    "t194": {
      "vi": "MỘT GIỌNG KỂ VỪA VỚI CẬU",
      "en": "A VOICE THAT FEELS RIGHT FOR YOU"
    },
    "t195": {
      "vi": "Chậm một chút?",
      "en": "A little slower?"
    },
    "t196": {
      "vi": "Hay trong trẻo hơn?",
      "en": "A little lighter?"
    },
    "t197": {
      "vi": "Giọng tiếng Việt trên thiết bị",
      "en": "English voices on this device"
    },
    "t198": {
      "vi": "Tự chọn giọng phù hợp",
      "en": "Choose a suitable voice automatically"
    },
    "t199": {
      "vi": "Sắc giọng",
      "en": "Voice pitch"
    },
    "t200": {
      "vi": "Tốc độ kể",
      "en": "Reading speed"
    },
    "t201": {
      "vi": "Nghe thử một câu",
      "en": "Listen to a sample"
    },
    "t202": {
      "vi": "Mặc định, tớ kể với tông giọng cao hơn và nhịp tự nhiên. Mỗi trình duyệt có thể có giọng khác nhau; nếu chưa có giọng theo ngôn ngữ đã chọn, cậu vẫn đọc được toàn bộ câu chuyện.",
      "en": "By default, I use a slightly lighter pitch and a natural pace. Voices vary between browsers. If a voice in your chosen language is unavailable, you can still read the whole story."
    },
    "t203": {
      "vi": "NHỮNG TRANG NHẬT KÝ PHÍA SAU CÂU CHUYỆN",
      "en": "THE LOGBOOK BEHIND THE STORY"
    },
    "t204": {
      "vi": "Từng lần cất cánh.",
      "en": "Every takeoff."
    },
    "t205": {
      "vi": "Từng điều để nhớ.",
      "en": "Something to remember."
    },
    "t206": {
      "vi": "tổng quãng đường",
      "en": "total distance"
    },
    "t207": {
      "vi": "128,8 phút",
      "en": "128.8 minutes"
    },
    "t208": {
      "vi": "tổng thời gian bay",
      "en": "total flight time"
    },
    "t209": {
      "vi": "độ cao lớn nhất",
      "en": "greatest altitude"
    },
    "t210": {
      "vi": "Tổng thành tích và kỷ lục của cả nhiệm vụ, không phải thông số của từng chuyến bay. Nguồn: nhật ký bay NASA.",
      "en": "Final mission totals and records, not the specification of each flight. Source: NASA’s Ingenuity flight log."
    },
    "t211": {
      "vi": "Tạm biệt Trái Đất",
      "en": "Goodbye, Earth"
    },
    "t212": {
      "vi": "Lên đường cùng nhiệm vụ Mars 2020.",
      "en": "Leaving with the Mars 2020 mission."
    },
    "t213": {
      "vi": "Chạm một thế giới mới",
      "en": "Touching a new world"
    },
    "t214": {
      "vi": "Perseverance hạ cánh xuống hố Jezero.",
      "en": "Perseverance lands in Jezero Crater."
    },
    "t215": {
      "vi": "Lần đầu dang cánh",
      "en": "Wings up, for the first time"
    },
    "t216": {
      "vi": "Chuyến bay có động lực và điều khiển đầu tiên trên hành tinh khác.",
      "en": "The first powered, controlled flight on another planet."
    },
    "t217": {
      "vi": "Đôi cánh nghỉ ngơi",
      "en": "Time for the wings to rest"
    },
    "t218": {
      "vi": "Chuyến bay 72 khép lại. Những bài học còn đi tiếp.",
      "en": "Flight 72 ends. Its lessons keep travelling."
    },
    "t219": {
      "vi": "17,0 km",
      "en": "17.0 km"
    }
  },
  "attrs": {
    "a001": {
      "vi": "Aevum, về đầu câu chuyện",
      "en": "Aevum, back to the beginning"
    },
    "a002": {
      "vi": "Điều hướng chính",
      "en": "Main navigation"
    },
    "a003": {
      "vi": "Chọn giọng và tốc độ kể",
      "en": "Choose a narration voice and speed"
    },
    "a004": {
      "vi": "Mở mục lục câu chuyện",
      "en": "Open the book’s contents"
    },
    "a005": {
      "vi": "Cuốn sách Martian Heir",
      "en": "The Martian Heir storybook"
    },
    "a006": {
      "vi": "Minh họa Ingenuity bay trên bề mặt Sao Hỏa, Perseverance ở phía xa.",
      "en": "An illustration of Ingenuity flying above Mars, with Perseverance in the distance."
    },
    "a007": {
      "vi": "Mục lục trong sách",
      "en": "Contents inside the book"
    },
    "a008": {
      "vi": "Minh họa Ingenuity bay trên bề mặt Sao Hỏa.",
      "en": "An illustration of Ingenuity flying above Mars."
    },
    "a009": {
      "vi": "NASA / JPL-Caltech · Perseverance hạ cánh, ảnh từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Perseverance landing, from the team’s document"
    },
    "a010": {
      "vi": "NASA / JPL-Caltech · Ảnh Ingenuity từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Ingenuity photograph from the team’s document"
    },
    "a011": {
      "vi": "Minh họa Ingenuity trên bề mặt Sao Hỏa.",
      "en": "An illustration of Ingenuity on the Martian surface."
    },
    "a012": {
      "vi": "NASA / JPL-Caltech · Ảnh camera định vị từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Navigation-camera image from the team’s document"
    },
    "a013": {
      "vi": "NASA / JPL-Caltech / ASU / MSSS · Ảnh chuyến bay 13, minh họa cảnh bay",
      "en": "NASA / JPL-Caltech / ASU / MSSS · Flight 13 photograph, illustrating flight"
    },
    "a014": {
      "vi": "Địa hình Sao Hỏa được Ingenuity chụp từ trên cao.",
      "en": "Martian terrain photographed by Ingenuity from above."
    },
    "a015": {
      "vi": "NASA / JPL-Caltech · Ảnh từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Photograph from the team’s document"
    },
    "a016": {
      "vi": "Các kỹ sư thử nghiệm thiết bị của Ingenuity trên Trái Đất.",
      "en": "Engineers testing Ingenuity’s equipment on Earth."
    },
    "a017": {
      "vi": "NASA / JPL-Caltech · Góc nhìn từ Ingenuity",
      "en": "NASA / JPL-Caltech · Ingenuity’s view from above"
    },
    "a018": {
      "vi": "NASA / JPL-Caltech · Vị trí Ingenuity, ảnh từ tài liệu nhóm",
      "en": "NASA / JPL-Caltech · Ingenuity’s location, from the team’s document"
    },
    "a019": {
      "vi": "Minh họa gợi nhớ những chuyến bay của Ingenuity trên Sao Hỏa.",
      "en": "An illustration recalling Ingenuity’s flights above Mars."
    },
    "a020": {
      "vi": "Lật trang sách",
      "en": "Turn the book’s pages"
    },
    "a021": {
      "vi": "Về trang trước",
      "en": "Open the previous page"
    },
    "a022": {
      "vi": "Đóng mục lục",
      "en": "Close the contents"
    },
    "a023": {
      "vi": "Các chương",
      "en": "Chapters"
    },
    "a024": {
      "vi": "Đóng trang tìm hiểu",
      "en": "Close this mission note"
    },
    "a025": {
      "vi": "Đóng nguồn tham khảo",
      "en": "Close the sources"
    },
    "a026": {
      "vi": "Đóng góc tò mò",
      "en": "Close curiosity corner"
    },
    "a027": {
      "vi": "Hoạt động khám phá",
      "en": "Discovery activities"
    },
    "a028": {
      "vi": "Đóng chọn giọng",
      "en": "Close voice settings"
    },
    "a029": {
      "vi": "Đóng nhật ký",
      "en": "Close the logbook"
    }
  }
};

const englishFacts = {
  "landing": {
    "title": "A crane in the Martian sky?",
    "paragraphs": [
      "Sky Crane was the final stage of Perseverance’s landing sequence. After the heat shield and parachute, a rocket-powered stage slowed the rover and lowered it on three nylon cables. Once the rover touched down, the cables were cut and the landing stage flew away.",
      "Ingenuity was still underneath the rover then. The helicopter was not placed on the surface until April 3, 2021. These were two different moments of separation."
    ],
    "data": [
      [
        "18 FEB",
        "2021 / THE ROVER LANDS"
      ],
      [
        "03 APR",
        "2021 / THE HELICOPTER IS SET DOWN"
      ]
    ]
  },
  "cold": {
    "title": "A little robot’s warm blanket.",
    "paragraphs": [
      "The solar panel collects daylight to charge six lithium-ion batteries. That energy is not only for flying: heaters also protect the electronics through the cold Martian night.",
      "The air on Mars is very thin. Even with weaker gravity than Earth’s, Ingenuity needed a very light body and large, fast-spinning rotors to generate lift."
    ],
    "data": [
      [
        "~1%",
        "EARTH’S AIR DENSITY"
      ],
      [
        "6",
        "LITHIUM-ION BATTERIES"
      ]
    ]
  },
  "eyes": {
    "title": "How can rocks show the way?",
    "paragraphs": [
      "The black-and-white navigation camera photographs the ground. The computer follows features across pictures to estimate motion, combining this with inertial sensors and a laser altimeter. The colour camera records views for the team on Earth.",
      "A surface with distinctive features is easier to follow than evenly coloured sand. Imagine walking sideways while looking at a plain wall, then at a patterned wall. Which makes your movement easier to notice?"
    ],
    "data": [
      [
        "BLACK & WHITE",
        "HELPING ME NAVIGATE"
      ],
      [
        "COLOUR",
        "RECORDING THE VIEW"
      ]
    ]
  },
  "anomaly": {
    "title": "One lost picture. One missed beat.",
    "paragraphs": [
      "On Flight 6, on May 22, 2021, a glitch caused a navigation image to be lost about 54 seconds after takeoff. The following images were processed with incorrect time labels, so the computer misunderstood its motion and kept making corrections.",
      "Ingenuity rocked more than 20 degrees but still landed safely because its control system could tolerate the disturbance. Like pages in the wrong order, one missed beat can make a story difficult to understand."
    ],
    "data": [
      [
        "54 seconds",
        "WHEN THE GLITCH OCCURRED"
      ],
      [
        ">20°",
        "ROCKING AND TILTING"
      ]
    ]
  },
  "dust": {
    "title": "How could dust make me hungry?",
    "paragraphs": [
      "A dust storm in early 2022 reduced the sunlight reaching Ingenuity’s solar panel by about 18%. The air also changed, making flight less safe. The team postponed Flight 19.",
      "I call sunshine my breakfast in the story. A solar panel actually turns light energy into electricity. Dusty weather is not only harder to see through: it can leave a solar-powered robot with less electricity."
    ],
    "data": [
      [
        "~18%",
        "DROP IN SUNLIGHT AT THE PANEL"
      ],
      [
        "WAIT",
        "A SAFER CHOICE"
      ]
    ]
  },
  "winter": {
    "title": "I remembered you. I forgot our meeting time.",
    "paragraphs": [
      "When energy ran low on a cold night, the computer could switch off and its clock reset. Once restarted, Ingenuity was no longer following its expected contact schedule with Perseverance. The team extended the rover’s listening time to find the signal again.",
      "Forgetting our meeting time is a friendly way to describe a clock reset, not a loss of all stored memories. Radio travel time to Earth also changes with the distance between the planets; it is not always 22 minutes."
    ],
    "data": [
      [
        "THE CLOCK",
        "RESET AFTER SHUTDOWN"
      ],
      [
        "THE ROVER",
        "A BRIDGE BACK TO EARTH"
      ]
    ]
  },
  "sensor": {
    "title": "Another sensor was ready to help.",
    "paragraphs": [
      "The inclinometer helps determine the helicopter’s attitude before takeoff. When it stopped working in 2022, the team changed the software to use accelerometer measurements from the inertial measurement unit, or IMU.",
      "The IMU is a separate set of sensors. Ingenuity’s processor uses technology related to smartphone chips, but that processor should not be confused with a built-in balance sensor."
    ],
    "data": [
      [
        "IMU",
        "INERTIAL MEASUREMENT UNIT"
      ],
      [
        "SOFTWARE",
        "A NEW WAY TO ADAPT"
      ]
    ]
  },
  "legacy": {
    "title": "Staying behind, with more to give.",
    "paragraphs": [
      "The final flight was on January 18, 2024. Rotor-blade damage meant Ingenuity could no longer fly. Terrain with few visible features is difficult for image-based navigation; lessons from that last landing help engineers understand its limits.",
      "On April 16, 2024, the team confirmed an update allowing Ingenuity to act as a stationary testbed and store data locally. That is different from a weather station continuously sending information back to Earth."
    ],
    "data": [
      [
        "72",
        "FLIGHTS COMPLETED"
      ],
      [
        "17 km",
        "TOTAL DISTANCE FLOWN"
      ]
    ]
  }
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)');
const bookPages = $$('[data-book-page]');
const storySteps = $$('.story-step');
const dialogs = $$('dialog');
const listenButton = $('#listen');
const speechSupported = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
let narrationEnabled = false;
let currentStep = null;
let speechGeneration = 0;
let activeDialog = null;
let toastTimer;

// Both language editions share the same book pages and controls.
let currentLanguage = 'vi';
const entryLanguage = typeof document !== 'undefined' && document.documentElement.dataset?.defaultLanguage === 'en' ? 'en' : 'vi';
currentLanguage = entryLanguage;
try {
  const queryLanguage = new URLSearchParams(window.location?.search || '').get('lang');
  const savedLanguage = window.localStorage?.getItem('aevum-language');
  const preferred = queryLanguage || (entryLanguage === 'en' ? 'en' : savedLanguage);
  if (preferred === 'en' || preferred === 'vi') currentLanguage = preferred;
} catch { /* The book still works when device storage is unavailable. */ }
const selectedVoices = { vi: '', en: '' };
let activeFactKey = null;
let lastQuizAnswer = null;
const languageTextNodes = [];
const languageAttributes = [];
function tr(vi, en) { return currentLanguage === 'en' ? en : vi; }
function chapterName(chapter) {
  return translationCatalog.texts[`t${String(24 + Number(chapter)).padStart(3, '0')}`]?.[currentLanguage] || '';
}
function formatNumber(value, digits = 1) {
  const number = Number(value).toFixed(digits);
  return currentLanguage === 'vi' ? number.replace('.', ',') : number;
}
function collectLanguageNodes() {
  if (typeof document.createTreeWalker === 'function') {
    const walker = document.createTreeWalker(document.body, 128);
    let marker;
    while ((marker = walker.nextNode())) {
      const key = marker.data.match(/^i18n:(t\d+)$/)?.[1];
      const node = marker.nextSibling;
      if (key && node?.nodeType === 3) languageTextNodes.push({ node, key, original: node.nodeValue });
    }
  }
  ['aria-label', 'alt', 'title'].forEach(attribute => {
    $$(`[data-i18n-${attribute}]`).forEach(element => languageAttributes.push({ element, attribute, key: element.getAttribute(`data-i18n-${attribute}`) }));
  });
}
function setLanguage(language, { persist = true, notify = true } = {}) {
  if (!['vi', 'en'].includes(language)) return false;
  stopSpeech();
  voicePreviewing = false;
  finishPageTurn();
  selectedVoices[currentLanguage] = selectedVoiceURI;
  currentLanguage = language;
  selectedVoiceURI = selectedVoices[language];
  document.documentElement.lang = language;
  document.title = tr('Martian Heir — Cuốn sách của Ingenuity | Aevum', 'Martian Heir — Ingenuity’s Storybook | Aevum');
  const description = $('meta[name="description"]');
  description?.setAttribute('content', tr('Chào cậu, tớ là Ingenuity! Cùng một trực thăng nhỏ khám phá Sao Hỏa qua câu chuyện về lòng dũng cảm, sự tò mò và 72 chuyến bay phi thường.', 'Hello, friend! I’m Ingenuity. Explore Mars with a little helicopter through a story of courage, curiosity, and seventy-two extraordinary flights.'));
  languageTextNodes.forEach(({ node, key, original }) => {
    if (!node.isConnected) return;
    const text = translationCatalog.texts[key]?.[language];
    if (text !== undefined) {
      const leading = /^[.,!?;:]/.test(text) ? '' : (original.match(/^\s*/)?.[0] || '');
      node.nodeValue = leading + text + (original.match(/\s*$/)?.[0] || '');
    }
  });
  languageAttributes.forEach(({ element, attribute, key }) => element.setAttribute(attribute, translationCatalog.attrs[key][language]));
  storySteps.forEach(step => step.dataset.speech = step.dataset[language === 'en' ? 'speechEn' : 'speechVi']);
  $$('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  const download = $('#narration-download');
  if (download) download.href = language === 'en' ? 'narration-en.txt' : 'narration.txt';
  refreshVoiceOptions();
  updateVoiceLabels();
  setNarrationEnabled(narrationEnabled);
  updateBookControls();
  updateWeights();
  if (activeFactKey && activeDialog?.id === 'fact-dialog') renderFact(activeFactKey);
  if (lastQuizAnswer) updateQuizFeedback(lastQuizAnswer);
  if (persist) {
    try { window.localStorage?.setItem('aevum-language', language); } catch { /* Optional preference only. */ }
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('lang', language);
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    } catch { /* File-based previews do not need a shareable URL. */ }
  }
  if (notify) announce(tr('Đã chuyển sang tiếng Việt. Cậu vẫn ở đúng trang đang đọc.', 'Switched to English. You’re still on the same page.'));
  speakCurrentStep();
  return true;
}


const facts = {
  "landing": {
    "title": "Một chiếc “cần cẩu” trên bầu trời?",
    "paragraphs": [
      "Sky Crane là giai đoạn cuối trong chuỗi hạ cánh của Perseverance: sau tấm chắn nhiệt và dù, một tầng có động cơ giảm tốc rồi hạ rover bằng ba dây cáp nylon. Sau khi rover chạm đất, dây được cắt và tầng hạ cánh bay ra xa.",
      "Ingenuity vẫn nằm dưới bụng rover lúc đó. Phải đến ngày 3.4.2021, trực thăng mới được đặt xuống mặt đất. Hai lần tách rời này là hai sự kiện khác nhau."
    ],
    "data": [
      [
        "18.02",
        "2021 / ROVER HẠ CÁNH"
      ],
      [
        "03.04",
        "2021 / ĐẶT TRỰC THĂNG XUỐNG"
      ]
    ]
  },
  "cold": {
    "title": "Chiếc chăn của một robot nhỏ.",
    "paragraphs": [
      "Tấm pin nhận ánh sáng ban ngày, sạc cho sáu pin lithium-ion. Năng lượng ấy không chỉ dùng để bay: bộ sưởi còn bảo vệ các linh kiện trong đêm lạnh.",
      "Không khí Sao Hỏa rất loãng. Dù trọng lực yếu hơn Trái Đất, Ingenuity vẫn cần cơ thể rất nhẹ và cánh quạt lớn, quay nhanh để tạo lực nâng."
    ],
    "data": [
      [
        "~1%",
        "MẬT ĐỘ KHÔNG KHÍ SO VỚI TRÁI ĐẤT"
      ],
      [
        "6",
        "PIN LITHIUM-ION"
      ]
    ]
  },
  "eyes": {
    "title": "Vì sao những viên đá lại chỉ đường?",
    "paragraphs": [
      "Máy ảnh định vị đen trắng chụp mặt đất. Máy tính so sánh các chi tiết qua nhiều ảnh để ước tính chuyển động, kết hợp với cảm biến quán tính và máy đo độ cao bằng laser. Máy ảnh màu ghi cảnh vật cho nhóm trên Trái Đất.",
      "Một bề mặt có chi tiết dễ theo dõi hơn một vùng cát quá đều màu. Hãy thử nhìn một bức tường trơn, rồi nhìn bức tường có họa tiết khi cậu bước ngang qua: nơi nào giúp cậu nhận ra chuyển động dễ hơn?"
    ],
    "data": [
      [
        "ĐEN TRẮNG",
        "GIÚP ĐỊNH VỊ"
      ],
      [
        "MÀU",
        "GHI LẠI CẢNH VẬT"
      ]
    ]
  },
  "anomaly": {
    "title": "Lỡ một bức ảnh, lệch một nhịp.",
    "paragraphs": [
      "Ở chuyến bay 6, ngày 22.5.2021, một trục trặc làm mất ảnh định vị khoảng 54 giây sau khi cất cánh. Các ảnh sau đó bị xử lý với mốc thời gian không đúng, khiến máy tính hiểu nhầm chuyển động và liên tục điều chỉnh.",
      "Ingenuity nghiêng qua lại hơn 20 độ nhưng vẫn hạ cánh an toàn nhờ khả năng chịu sai lệch của hệ thống điều khiển. Cũng như khi các trang sách bị xếp lộn thứ tự, chỉ một nhịp sai cũng có thể khiến việc hiểu câu chuyện trở nên khó khăn."
    ],
    "data": [
      [
        "54 giây",
        "THỜI ĐIỂM XẢY RA LỖI"
      ],
      [
        ">20°",
        "GÓC CHAO NGHIÊNG"
      ]
    ]
  },
  "dust": {
    "title": "Vì sao bụi có thể làm tớ “đói”?",
    "paragraphs": [
      "Đợt bão bụi đầu năm 2022 khiến lượng ánh nắng tới tấm pin của Ingenuity giảm khoảng 18%. Không khí cũng thay đổi, làm điều kiện bay kém an toàn. Nhóm đã hoãn chuyến bay 19.",
      "Tớ gọi ánh nắng là “bữa sáng” trong câu chuyện. Thật ra, pin mặt trời biến năng lượng ánh sáng thành điện. Vì vậy, trời nhiều bụi không chỉ khiến khó nhìn: nó còn làm một robot dùng năng lượng mặt trời có ít điện hơn."
    ],
    "data": [
      [
        "~18%",
        "ÁNH NẮNG TỚI PIN GIẢM"
      ],
      [
        "CHỜ",
        "MỘT QUYẾT ĐỊNH AN TOÀN"
      ]
    ]
  },
  "winter": {
    "title": "Tớ không quên bạn, chỉ quên giờ hẹn.",
    "paragraphs": [
      "Khi thiếu năng lượng trong đêm lạnh, máy tính có thể tắt và đồng hồ đặt lại. Khi hoạt động trở lại, Ingenuity không còn đúng lịch liên lạc dự kiến với Perseverance. Đội điều khiển kéo dài thời gian rover lắng nghe để tìm lại tín hiệu.",
      "“Quên giờ hẹn” là cách kể gần gũi về một lần đặt lại đồng hồ, không phải mất toàn bộ bộ nhớ. Tương tự, thời gian tín hiệu tới Trái Đất thay đổi theo khoảng cách hai hành tinh, không cố định 22 phút."
    ],
    "data": [
      [
        "ĐỒNG HỒ",
        "ĐẶT LẠI SAU KHI TẮT"
      ],
      [
        "ROVER",
        "CẦU NỐI VỀ TRÁI ĐẤT"
      ]
    ]
  },
  "sensor": {
    "title": "Một cảm biến khác sẵn sàng giúp sức.",
    "paragraphs": [
      "Cảm biến đo độ nghiêng giúp xác định tư thế trước khi cất cánh. Khi nó ngừng hoạt động năm 2022, nhóm sửa phần mềm để dùng dữ liệu từ các gia tốc kế trong bộ đo quán tính IMU.",
      "IMU là bộ cảm biến riêng. Bộ xử lý của Ingenuity dùng công nghệ cùng dòng với điện thoại thông minh, nhưng không nên nhầm bộ xử lý đó với một cảm biến cân bằng tích hợp trong chip."
    ],
    "data": [
      [
        "IMU",
        "BỘ ĐO QUÁN TÍNH"
      ],
      [
        "PHẦN MỀM",
        "MỘT CÁCH THÍCH NGHI MỚI"
      ]
    ]
  },
  "legacy": {
    "title": "Ở lại, vẫn có điều để trao đi.",
    "paragraphs": [
      "Chuyến bay cuối diễn ra ngày 18.1.2024. Sau hư hại cánh quạt, Ingenuity không thể bay nữa. Địa hình ít chi tiết là một khó khăn với hệ thống định vị bằng hình ảnh; những bài học từ lần hạ cánh cuối giúp các kỹ sư hiểu thêm giới hạn của công nghệ này.",
      "Ngày 16.4.2024, nhóm xác nhận bản cập nhật cho phép Ingenuity hoạt động như một trạm thử nghiệm cố định, lưu dữ liệu tại chỗ. Điều đó khác với một trạm khí tượng đang liên tục gửi dữ liệu về Trái Đất."
    ],
    "data": [
      [
        "72",
        "CHUYẾN BAY ĐÃ THỰC HIỆN"
      ],
      [
        "17 km",
        "TỔNG QUÃNG ĐƯỜNG ĐÃ BAY"
      ]
    ]
  }
};

function announce(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 4200);
}

function stopSpeech() {
  speechGeneration += 1;
  if (speechSupported) window.speechSynthesis.cancel();
}

// The device may load voices asynchronously; only use the selected language.
const voiceSelect = $('#voice-select');
const pitchSlider = $('#voice-pitch');
const rateSlider = $('#voice-rate');
let selectedVoiceURI = '';
let voicePreviewing = false;
function voicesForLanguage() {
  const language = currentLanguage === 'en' ? /^en(?:[-_]|$)/i : /^vi(?:[-_]|$)/i;
  return speechSupported ? window.speechSynthesis.getVoices().filter(voice => language.test(voice.lang)) : [];
}
function preferredVoice(voices = voicesForLanguage()) {
  const selected = voices.find(voice => voice.voiceURI === selectedVoiceURI);
  if (selected) return selected;
  const score = voice => {
    let value = voice.default ? 1 : 0;
    if (currentLanguage === 'vi') {
      if (/HoaiMy|Hoài\s*My|Hoai My/i.test(voice.name)) value += 100;
      else if (/Linh|vi-vn-x-vif|Google.*Vi|Vietnamese.*Google/i.test(voice.name)) value += 50;
    } else {
      if (/Aria|Jenny|Samantha|Victoria|Google US English/i.test(voice.name)) value += 100;
      else if (/Ava|Emma|Serena|Susan/i.test(voice.name)) value += 50;
    }
    if (voice.localService) value += 2;
    return value;
  };
  return [...voices].sort((a, b) => score(b) - score(a))[0] || null;
}
function refreshVoiceOptions() {
  const voices = voicesForLanguage();
  voiceSelect.replaceChildren(new Option(tr('Tự chọn giọng phù hợp', 'Choose a suitable voice automatically'), ''));
  voices.forEach(voice => voiceSelect.add(new Option(voice.name, voice.voiceURI)));
  if (voices.some(voice => voice.voiceURI === selectedVoiceURI)) voiceSelect.value = selectedVoiceURI;
  else selectedVoiceURI = '';
  const chosen = preferredVoice(voices);
  $('#voice-status').textContent = !speechSupported
    ? tr('Trình duyệt này chưa hỗ trợ đọc. Cậu vẫn có thể đọc và tải toàn bộ lời kể.', 'This browser does not support narration. You can still read and download the whole story.')
    : chosen ? tr(`Giọng sẵn sàng: ${chosen.name}. Tông mặc định đã được nâng nhẹ.`, `Voice ready: ${chosen.name}. The default pitch is a little lighter.`)
    : tr('Chưa tìm thấy giọng tiếng Việt. Cậu có thể bật/cài giọng tiếng Việt trong cài đặt giọng nói của thiết bị rồi mở lại trang.', 'No English voice is available yet. Enable or install an English voice in your device’s speech settings, then reopen the book.');
  $('#voice-preview').disabled = !chosen;
}
function setNarrationEnabled(value) {
  narrationEnabled = value;
  listenButton.setAttribute('aria-pressed', String(value));
  $('span', listenButton).textContent = value ? tr('Đang kể', 'Listening') : tr('Nghe kể', 'Listen');
}
function voiceSample() {
  return tr('Chào cậu! Tớ là Ingenuity. Nhỏ thôi, nhưng tớ có một giấc mơ thật lớn. Đi cùng tớ nhé?', 'Hello, friend! I’m Ingenuity. I may be small, but I have a very big dream. Shall we explore together?');
}
function speakText(text, narrator = 'ingenuity', preview = false) {
  stopSpeech();
  const voice = preferredVoice();
  if (!speechSupported || !voice) {
    setNarrationEnabled(false);
    announce(tr('Chưa có giọng tiếng Việt trên thiết bị. Cậu vẫn có thể đọc hoặc tải lời kể nhé.', 'No English voice is available on this device. You can still read or download the story.'));
    return;
  }
  const generation = speechGeneration;
  const sentences = text.match(/[^.!?…]+(?:[.!?…]+|$)/g) || [text];
  let index = 0;
  voicePreviewing = preview;
  function nextSentence() {
    if (generation !== speechGeneration || document.hidden || (!preview && (!narrationEnabled || activeDialog))) return;
    if (index >= sentences.length) { voicePreviewing = false; return; }
    const utterance = new SpeechSynthesisUtterance(sentences[index++].trim());
    utterance.lang = voice.lang.replace('_', '-');
    utterance.voice = voice;
    utterance.rate = Number(rateSlider.value);
    utterance.pitch = Math.max(0.9, Number(pitchSlider.value) - (narrator === 'guide' ? 0.06 : 0));
    utterance.volume = 1;
    utterance.onend = nextSentence;
    utterance.onerror = event => {
      if (generation !== speechGeneration || ['canceled', 'interrupted'].includes(event.error)) return;
      voicePreviewing = false;
      setNarrationEnabled(false);
      announce(tr('Giọng đọc đang không khả dụng. Cậu thử giọng khác ở nút “Giọng”, hoặc tiếp tục đọc nhé.', 'Narration is unavailable right now. Try another voice under “Voice”, or keep reading.'));
    };
    window.speechSynthesis.speak(utterance);
  }
  nextSentence();
}
function speakCurrentStep() {
  if (!narrationEnabled || activeDialog || document.hidden || !currentStep || !speechSupported) { stopSpeech(); return; }
  speakText(currentStep.dataset.speech, currentStep.dataset.narrator);
}
listenButton.addEventListener('click', () => {
  if (!speechSupported || !preferredVoice()) { refreshVoiceOptions(); openDialog('voice'); return; }
  setNarrationEnabled(!narrationEnabled);
  if (narrationEnabled) {
    announce(currentStep ? tr('Tớ kể trang này nhé. Cậu lật trang theo nhịp của mình thôi.', 'I’ll read this page. Turn the pages at your own pace.') : tr('Đã bật giọng kể. Mở sách rồi chọn trang đầu để nghe nhé.', 'Narration is on. Open the book and start the story to listen.'));
    speakCurrentStep();
  } else { stopSpeech(); announce(tr('Tạm dừng giọng kể.', 'Narration paused.')); }
});
voiceSelect.addEventListener('change', () => {
  selectedVoiceURI = voiceSelect.value;
  selectedVoices[currentLanguage] = selectedVoiceURI;
  refreshVoiceOptions();
  if (voicePreviewing) speakText(voiceSample(), 'ingenuity', true);
});
function updateVoiceLabels() {
  const pitch = Number(pitchSlider.value);
  $('#pitch-value').value = `${pitch >= 1.12 ? tr('Nhẹ & trong', 'Light & clear') : tr('Tự nhiên', 'Natural')} · ${formatNumber(pitch, 2)}`;
  $('#rate-value').value = `${formatNumber(rateSlider.value, 2)}×`;
}
[pitchSlider, rateSlider].forEach(slider => slider.addEventListener('input', updateVoiceLabels));
$('#voice-preview').addEventListener('click', () => speakText(voiceSample(), 'ingenuity', true));
if (speechSupported) window.speechSynthesis.addEventListener('voiceschanged', refreshVoiceOptions);
refreshVoiceOptions();
updateVoiceLabels();

function openDialog(name) {
  const dialog = $(`#${name}-dialog`);
  if (!dialog) return;
  if (activeDialog) activeDialog.close();
  activeDialog = dialog;
  document.body.classList.add('has-dialog');
  stopSpeech();
  dialog.showModal();
  dialog.scrollTop = 0;
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

$$('[data-dialog]').forEach(button => button.addEventListener('click', () => openDialog(button.dataset.dialog)));
$$('[data-close]').forEach(button => button.addEventListener('click', () => closeDialog(button.closest('dialog'))));
dialogs.forEach(dialog => {
  dialog.addEventListener('click', event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) closeDialog(dialog);
  });
  dialog.addEventListener('close', () => {
    if (activeDialog === dialog) {
      activeDialog = null;
      voicePreviewing = false;
      stopSpeech();
      document.body.classList.remove('has-dialog');
      speakCurrentStep();
    }
  });
});

function renderFact(key) {
  activeFactKey = key;
  const fact = (currentLanguage === 'en' ? englishFacts : facts)[key];
  if (!fact) return;
  $('#fact-title').textContent = fact.title;
  const body = $('#fact-body');
  body.replaceChildren();
  fact.paragraphs.forEach(text => {
    const paragraph = document.createElement('p'); paragraph.textContent = text; body.append(paragraph);
  });
  const data = document.createElement('div'); data.className = 'fact-data';
  fact.data.forEach(([number, description]) => {
    const cell = document.createElement('div');
    const value = document.createElement('strong'); const label = document.createElement('span');
    value.textContent = number; label.textContent = description; cell.append(value, label); data.append(cell);
  });
  body.append(data);
}
$$('[data-fact]').forEach(button => button.addEventListener('click', () => { renderFact(button.dataset.fact); openDialog('fact'); }));

/* Bookmarks and chapter links open their page before moving focus. */
$$('a[href^="#"]').forEach(link => link.addEventListener('click', event => {
  const index = bookPageFromHash(link.hash);
  if (index < 0) return;
  event.preventDefault();
  const parentDialog = link.closest('dialog');
  if (parentDialog) closeDialog(parentDialog);
  finishPageTurn();
  showBookPage(index, { focus: true });
}));

/* A small static book reader. All story pages remain in the HTML for printing. */
const bookSpread = $('#book-spread');
const bookReader = $('#reader');
const SINGLE_PAGE_QUERY = '(max-width: 900px), (max-width: 1180px) and (orientation: portrait), (max-height: 520px) and (pointer: coarse)';
const compactBook = window.matchMedia(SINGLE_PAGE_QUERY);
let currentBookPage = 0;
let isTurning = false;
let turnTimer;
let pointerStart = null;

function bookPageFromHash(hash) {
  if (!hash || hash === '#home') return 0;
  const element = document.getElementById(hash.slice(1));
  const page = element?.closest('[data-book-page]');
  return page ? bookPages.indexOf(page) : -1;
}
function pageCounter(page, index, compact = compactBook.matches) {
  if (page.dataset.kind === 'cover') return tr('Bìa sách', 'Book cover');
  if (page.dataset.kind === 'contents') return tr('Mục lục', 'Contents');
  const number = index - 1;
  return compact ? `${tr('Trang', 'Page')} ${number} / 13` : `${tr('Trang', 'Pages')} ${number * 2 - 1}–${number * 2} / 26`;
}
function updateBookControls() {
  if (!bookPages.length) return;
  const page = bookPages[currentBookPage];
  $('#book-prev').disabled = currentBookPage === 0;
  $('#book-next').disabled = currentBookPage === bookPages.length - 1;
  $('#book-counter').textContent = pageCounter(page, currentBookPage);
  const folio = $('.paper-footer>span:last-child', page);
  if (folio && currentBookPage >= 2) folio.textContent = String(compactBook.matches ? currentBookPage - 1 : (currentBookPage - 1) * 2).padStart(2, '0');
  $('#book-chapter-label').textContent = page.dataset.kind === 'cover' ? tr('Một câu chuyện của Aevum', 'A story by Aevum')
    : page.dataset.kind === 'contents' ? tr('Năm chương · một người bạn nhỏ', 'Five chapters · one little friend')
    : page.dataset.kind === 'ending' ? tr('Hết chuyện, chưa hết ước mơ', 'The story ends. The dream goes on.')
    : `${tr('Chương', 'Chapter')} ${page.dataset.chapter} · ${chapterName(page.dataset.chapter)}`;
  const nextText = page.dataset.kind === 'cover' ? tr('Mở sách', 'Open book') : page.dataset.kind === 'contents' ? tr('Bắt đầu nhé', 'Let’s begin') : tr('Trang tiếp', 'Next page');
  $('span', $('#book-next')).textContent = nextText;
  $('#book-next').setAttribute('aria-label', page.dataset.kind === 'cover' ? tr('Mở cuốn sách', 'Open the book') : tr('Mở trang tiếp theo', 'Open the next page'));
  $('#book-progress-fill').style.transform = `scaleX(${currentBookPage / (bookPages.length - 1)})`;
  $('#book-status').textContent = `${$('#book-counter').textContent}. ${$('#book-chapter-label').textContent}.`;
}
function finishPageTurn() {
  clearTimeout(turnTimer);
  $$('.page-turn', bookSpread).forEach(layer => layer.remove());
  bookPages.forEach(page => page.classList.remove('arriving', 'cover-arriving'));
  isTurning = false;
}
function animatePageTurn(previous, direction) {
  if (motionReduced.matches) return;
  if (!compactBook.matches && previous.dataset.kind !== 'cover') {
    const original = direction > 0 ? $('.book-prose', previous) : $('.book-page', previous);
    if (original) {
      const layer = document.createElement('div');
      layer.className = `page-turn${direction < 0 ? ' backward' : ''}`;
      layer.setAttribute('aria-hidden', 'true');
      layer.inert = true;
      const copy = original.cloneNode(true);
      copy.removeAttribute('id');
      $$('[id]', copy).forEach(element => element.removeAttribute('id'));
      $$('a,button,input,select,textarea,[tabindex]', copy).forEach(element => element.tabIndex = -1);
      layer.append(copy);
      bookSpread.append(layer);
      copy.scrollTop = original.scrollTop;
    }
  }
  isTurning = true;
  turnTimer = setTimeout(finishPageTurn, compactBook.matches ? 360 : 600);
}
function showBookPage(index, { animate = true, focus = false, scroll = true, updateHash = true } = {}) {
  if (!Number.isInteger(index) || index < 0 || index >= bookPages.length) return false;
  if (isTurning) return false;
  const previous = bookPages[currentBookPage];
  const next = bookPages[index];
  const direction = index >= currentBookPage ? 1 : -1;
  stopSpeech();
  voicePreviewing = false;
  bookPages.forEach((page, position) => page.hidden = position !== index);
  currentBookPage = index;
  bookSpread.classList.toggle('is-cover', next.dataset.kind === 'cover');
  if (animate && previous !== next) {
    next.classList.add(next.dataset.kind === 'cover' ? 'cover-arriving' : 'arriving');
    animatePageTurn(previous, direction);
  }
  $$('img', next).forEach(img => img.loading = 'eager');
  // Warm the next illustration without loading the whole book up front.
  const nextImage = bookPages[index + 1]?.querySelector('img');
  if (nextImage) { const image = new Image(); image.src = nextImage.getAttribute('src'); }
  currentStep = $('.story-step', next);
  if (previous !== next) $$('.book-prose,.book-frontispiece,.ending-dedication', next).forEach(page => page.scrollTop = 0);
  updateBookControls();
  if (updateHash) history.replaceState(null, '', `#${next.id}`);
  if (focus) {
    const target = $('h1,h2', next) || bookReader;
    target.setAttribute('tabindex', '-1');
    target.focus({ preventScroll: true });
  }
  if (scroll && bookReader.getBoundingClientRect().top < -15) {
    bookReader.scrollIntoView({ behavior: motionReduced.matches ? 'auto' : 'smooth', block: 'start' });
  }
  speakCurrentStep();
  return true;
}
$('#book-prev').addEventListener('click', () => showBookPage(currentBookPage - 1));
$('#book-next').addEventListener('click', () => showBookPage(currentBookPage + 1));
$$('[data-book-go]').forEach(button => button.addEventListener('click', () => {
  const index = bookPages.findIndex(page => page.id === button.dataset.bookGo);
  showBookPage(index, { focus: true });
}));
document.addEventListener('keydown', event => {
  if (activeDialog || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
  if (event.target.closest('input,select,textarea,[contenteditable="true"]')) return;
  const selection = window.getSelection?.();
  if (selection && !selection.isCollapsed) return;
  if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
    event.preventDefault();
    showBookPage(currentBookPage + (event.key === 'ArrowRight' ? 1 : -1));
  }
});
bookSpread.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'touch' || activeDialog || event.target.closest('a,button,input,select,textarea')) return;
  pointerStart = { x: event.clientX, y: event.clientY, time: event.timeStamp };
});
bookSpread.addEventListener('pointerup', event => {
  if (!pointerStart) return;
  const start = pointerStart;
  pointerStart = null;
  const x = event.clientX - start.x;
  const y = event.clientY - start.y;
  if (event.timeStamp - start.time < 900 && Math.abs(x) > 65 && Math.abs(x) > Math.abs(y) * 1.6) {
    showBookPage(currentBookPage + (x < 0 ? 1 : -1));
  }
});
bookSpread.addEventListener('pointercancel', () => pointerStart = null);
compactBook.addEventListener?.('change', () => { finishPageTurn(); updateBookControls(); });
function followBookHash() {
  const page = bookPageFromHash(window.location.hash);
  if (page >= 0) { finishPageTurn(); showBookPage(page, { animate: false, scroll: false, updateHash: false }); }
}
window.addEventListener('hashchange', followBookHash);
window.addEventListener('popstate', followBookHash);
document.addEventListener('visibilitychange', () => document.hidden ? stopSpeech() : speakCurrentStep());
window.addEventListener('pagehide', stopSpeech);
if (bookPages.length) {
  bookSpread.classList.add('enhanced');
  $('.book-navigation').hidden = false;
  const startPage = bookPageFromHash(window.location.hash);
  showBookPage(startPage >= 0 ? startPage : 0, { animate: false, scroll: false, updateHash: false });
}


/* Mission lab: two accessible activities with immediate, local feedback. */
const labTabs = $$('.lab-tabs [role="tab"]');
function selectLabTab(tab, focus = false) {
  labTabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
  if (focus) tab.focus();
}
labTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectLabTab(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowRight') next = labTabs[(index + 1) % labTabs.length];
    if (event.key === 'ArrowLeft') next = labTabs[(index - 1 + labTabs.length) % labTabs.length];
    if (event.key === 'Home') next = labTabs[0];
    if (event.key === 'End') next = labTabs[labTabs.length - 1];
    if (next) { event.preventDefault(); selectLabTab(next, true); }
  });
});

const massSlider = $('#mass');
function updateWeights() {
  const mass = Number(massSlider.value);
  $('#mass-value').value = `${formatNumber(mass)} kg`;
  $('#earth-weight').replaceChildren(document.createTextNode(`${formatNumber(mass * 9.81)} `));
  $('#mars-weight').replaceChildren(document.createTextNode(`${formatNumber(mass * 3.71)} `));
  ['#earth-weight', '#mars-weight'].forEach(selector => {
    const unit = document.createElement('small');
    unit.textContent = 'N';
    $(selector).append(unit);
  });
}
massSlider.addEventListener('input', updateWeights);
updateWeights();

function updateQuizFeedback(value) {
  const messages = {
    rotors: tr('Đúng rồi! Cánh lớn, quay nhanh đẩy được nhiều không khí hơn xuống dưới. Thân nhẹ cũng giúp tớ bay. Cậu vừa nghĩ như một kỹ sư đấy!', 'Exactly! Large, fast-spinning rotors push more of that thin air downwards. A light body helps me fly, too. You just thought like an engineer!'),
    heavy: tr('Mình thử nghĩ thêm nhé: thân nặng sẽ cần nhiều lực nâng hơn. Còn bộ phận nào có thể đẩy được nhiều không khí xuống dưới?', 'Let’s think a little more: a heavier body needs more lift. What part could push more air downwards?'),
    pilot: tr('Ý tưởng thú vị! Nhưng tín hiệu mất nhiều phút mới tới Sao Hỏa, nên không thể lái trực tiếp từ Trái Đất. Cậu thử nghĩ về cánh quạt nhé.', 'An interesting idea! But radio signals take minutes to reach Mars, so a pilot on Earth cannot steer me live. Think about the rotor blades.')
  };
  $('#quiz-feedback').textContent = messages[value] || tr('Cậu chọn một ý tưởng trước nhé.', 'Choose an idea first.');
}
$('#engineer-form').addEventListener('submit', event => {
  event.preventDefault(); lastQuizAnswer = new FormData(event.currentTarget).get('design'); updateQuizFeedback(lastQuizAnswer);
});

collectLanguageNodes();
$$('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
setLanguage(currentLanguage, { persist: false, notify: false });
