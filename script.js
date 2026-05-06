const animals = [
  {
    name: "Bò tót rừng (American Bison)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/botot.jpg",
    audio: "./audio/bison.mp3",
    status: "NT - Sắp bị đe dọa",
    desc: "Bò tót rừng là loài động vật có vú trên cạn lớn nhất Bắc Mỹ. Chúng có bộ lông nâu dày để chống chọi với mùa đông khắc nghiệt và chiếc bướu cơ bắp trên vai giúp điều khiển cái đầu to lớn như một chiếc máy ủi tuyết.",
    habit:
      "Chúng là loài động vật gặm nhấm sống theo đàn lớn. Bison có vai trò cực kỳ quan trọng trong hệ sinh thái đồng cỏ, việc chúng dẫm đạp và ăn cỏ giúp duy trì sự đa dạng sinh học của thực vật địa phương.",
    fact: "Mặc dù nặng tới hơn 1 tấn, bò tót có khả năng chạy với tốc độ 55km/h và có thể nhảy cao tới 1.8 mét.",
    nhom: "thu",
  },
  {
    name: "Sư tử Châu Phi (African Lion)",
    c: "Châu Phi",
    img: "./image/châu phi/su-tu.jpg",
    audio: "./audio/lion.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Sư tử là loài duy nhất trong họ nhà Mèo sống theo bầy đàn xã hội. Con đực nổi bật với chiếc bờm oai vệ, vốn có chức năng bảo vệ cổ trong các cuộc chiến và thu hút con cái.",
    habit:
      "Sống trong các đàn (pride) từ 15-30 thành viên. Con cái đảm nhận 90% việc săn mồi, trong khi con đực có nhiệm vụ bảo vệ lãnh thổ của đàn khỏi những kẻ xâm nhập.",
    fact: "Tiếng gầm của một con sư tử đực trưởng thành có thể vang xa tới 8km, được dùng để đánh dấu lãnh thổ và giao tiếp với các thành viên khác.",
    nhom: "thu",
  },
  {
    name: "Hổ Bengal (Bengal Tiger)",
    c: "Châu Á",
    img: "./image/châu á/hobengal.jpg",
    audio: "./audio/bengaltiger.mp3",
    status: "EN - Nguy cấp",
    desc: "Hổ Bengal là biểu tượng của sức mạnh và sự cô độc. Chúng sở hữu đôi mắt có tầm nhìn ban đêm gấp 6 lần con người và bộ móng vuốt có thể thu gọn cực kỳ sắc bén.",
    habit:
      "Khác với hầu hết các loài mèo khác, hổ Bengal rất thích nước và là những tay bơi lội cự phách. Chúng sống và săn mồi đơn độc trong những khu rừng rậm rạp hoặc đầm lầy.",
    fact: "Không có hai con hổ nào có cùng một kiểu vằn. Các vết vằn này không chỉ nằm trên lông mà còn hằn sâu dưới lớp da của chúng.",
    nhom: "thu",
  },
  {
    name: "Voi bụi rậm Châu Phi (African Bush Elephant)",
    c: "Châu Phi",
    img: "./image/châu phi/voi-chau-phi-92.webp",
    audio: "./audio/african-elephant.mp3",
    status: "EN - Nguy cấp",
    desc: "Đây là loài động vật trên cạn lớn nhất thế giới. Voi sở hữu một trí tuệ vượt trội, khả năng thấu cảm và cấu trúc xã hội cực kỳ phức tạp dựa trên trí nhớ dài hạn.",
    habit:
      "Sống theo chế độ mẫu hệ, dẫn dắt bởi con cái già nhất và kinh nghiệm nhất. Chúng giao tiếp với nhau bằng sóng hạ âm ở tần số thấp mà con người không thể nghe thấy.",
    fact: "Chiếc vòi của voi có hơn 40.000 bó cơ, có thể nhấc bổng một vật nặng 300kg nhưng cũng đủ khéo léo để nhặt một hạt đậu nhỏ.",
    nhom: "thu",
  },
  {
    name: "Báo đốm Mỹ (Jaguar)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/baodom.jpg",
    audio: "./audio/jaguar.mp3",
    status: "NT - Sắp bị đe dọa",
    desc: "Jaguar là loài mèo lớn nhất Tây bán cầu. Chúng có cấu trúc xương hàm cực kỳ mạnh mẽ, cho phép chúng xuyên thủng cả mai rùa hay lớp da dày của cá sấu Caiman.",
    habit:
      "Chúng là những tay bơi giỏi và thường xuyên săn mồi ở dưới nước. Jaguar thích sống trong các khu rừng mưa nhiệt đới gần nguồn nước hơn là thảo nguyên khô cằn.",
    fact: "Tên 'Jaguar' xuất phát từ chữ 'yaguar' trong tiếng bản địa, có nghĩa là 'kẻ giết chết chỉ bằng một cú nhảy'.",
    nhom: "thu",
  },
  {
    name: "Gấu Bắc Cực (Polar Bear)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/Polar_Bear.jpg",
    audio: "./audio/polarbear.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Được coi là loài thú ăn thịt lớn nhất trên đất liền. Gấu Bắc Cực có lớp mỡ dày tới 10cm và bộ lông không thấm nước giúp chúng chịu đựng cái lạnh âm độ.",
    habit:
      "Dành phần lớn cuộc đời trên các tảng băng trôi để săn hải cẩu. Do băng tan vì biến đổi khí hậu, chúng đang phải đối mặt với nguy cơ mất môi trường sống nghiêm trọng.",
    fact: "Dưới lớp lông màu trắng, da của gấu Bắc Cực thực chất có màu đen để giúp chúng hấp thụ tối đa nhiệt lượng từ ánh sáng mặt trời.",
    nhom: "thu",
  },
  {
    name: "Gấu trúc lớn (Giant Panda)",
    c: "Châu Á",
    img: "./image/châu á/gautruc.jpg",
    audio: "./audio/giantpanda.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài gấu có vẻ ngoài hiền lành với hai quầng thâm quanh mắt đặc trưng. Chúng là niềm tự hào của bảo tồn thiên nhiên Trung Quốc và thế giới.",
    habit:
      "Dành 12-16 giờ mỗi ngày chỉ để ăn tre và trúc. Mặc dù thuộc bộ Ăn thịt, nhưng 99% khẩu phần ăn của chúng là thực vật.",
    fact: "Gấu trúc có một 'ngón tay cái giả' - thực chất là một xương cổ tay kéo dài giúp chúng có thể cầm nắm thân tre một cách điệu nghệ.",
    nhom: "thu",
  },
  {
    name: "Sói xám (Gray Wolf)",
    c: "Châu Âu",
    img: "./image/châu âu/soixam.jpg",
    audio: "./audio/graywolf.mp3",
    status: "LC - Ít lo ngại",
    desc: "Sói xám là tổ tiên của các loài chó nhà hiện nay. chúng có khả năng chịu đựng phi thường và tính tổ chức xã hội cao nhất trong các loài thú săn mồi.",
    habit:
      "Sống và săn mồi theo đàn từ 6-12 con dưới sự điều hành của cặp đôi đầu đàn (Alpha). Tiếng hú của sói được dùng để tập hợp đàn và cảnh báo lãnh thổ cho các đàn khác.",
    fact: "Một con sói đầu đàn có thể dẫn dắt đàn di chuyển liên tục hơn 50km mỗi ngày để tìm kiếm thức ăn.",
    nhom: "thu",
  },
  {
    name: "Kangaroo đỏ (Red Kangaroo)",
    c: "Châu Úc",
    img: "./image/châu úc/Red_Kangaroo.jpg",
    audio: "./audio/kangaroo.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài thú có túi lớn nhất thế giới. Kangaroo đỏ có đôi chân sau cực khỏe và chiếc đuôi cơ bắp đóng vai trò như chiếc chân thứ ba để giữ thăng bằng.",
    habit:
      "Chúng di chuyển bằng cách nhảy và có thể đạt tốc độ 70km/h. Kangaroo sống theo nhóm nhỏ gọi là 'mobs' tại các vùng khô hạn của nước Úc.",
    fact: "Kangaroo đỏ không thể đi giật lùi do cấu tạo của đôi chân và chiếc đuôi quá lớn.",
    nhom: "thu",
  },
  {
    name: "Hươu cao cổ (Giraffe)",
    c: "Châu Phi",
    img: "./image/châu phi/huou-cao-co.jpg",
    audio: "./audio/giraffe.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Động vật cao nhất thế giới. Chiếc cổ dài của chúng có số lượng đốt sống cổ bằng với con người (7 đốt) nhưng mỗi đốt lại cực kỳ dài.",
    habit:
      "Hươu cao cổ ăn lá cây ở những tầng cao nhất mà các loài khác không chạm tới được. Chúng có chiếc lưỡi dài tới 50cm, có màu đen tím để chống cháy nắng khi ăn.",
    fact: "Trái tim của hươu cao cổ nặng tới 11kg để có đủ áp lực bơm máu lên tận não bộ qua chiếc cổ dài gần 2 mét.",
    nhom: "thu",
  },
  {
    name: "Đười ươi Borneo (Bornean Orangutan)",
    c: "Châu Á",
    img: "./image/châu á/đười ươi.jpg",
    audio: "./audio/bornean orangutan.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài linh trưởng thông minh sống trên cây lớn nhất thế giới. Tên của chúng trong tiếng Mã Lai có nghĩa là 'Người rừng'.",
    habit:
      "Dành 90% thời gian trên cây, ăn trái cây và xây tổ mới bằng cành lá mỗi đêm để ngủ.",
    fact: "Đười ươi có sải tay dài tới 2 mét, dài hơn nhiều so với chiều cao cơ thể của chúng.",
    nhom: "linh-truong",
  },
  {
    name: "Rồng Komodo (Komodo Dragon)",
    c: "Châu Á",
    img: "./image/châu á/komodo.jpg",
    audio: "./audio/komododragon.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài thằn lằn lớn nhất thế giới, hậu duệ của thời tiền sử hiện chỉ còn sống trên một vài hòn đảo ở Indonesia.",
    habit:
      "Là loài ăn thịt, chúng có thể hạ gục con mồi lớn như trâu nước bằng vũ khí là tuyến nọc độc ở hàm dưới.",
    fact: "Rồng Komodo có thể ăn lượng thức ăn bằng 80% trọng lượng cơ thể chúng chỉ trong một bữa.",
    nhom: "bo-sat",
  },
  {
    name: "Đại bàng Philippine (Philippine Eagle)",
    c: "Châu Á",
    img: "./image/châu á/đại bàng phi.jpg",
    audio: "./audio/Philippine Eagle.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Một trong những loài đại bàng lớn và mạnh mẽ nhất thế giới. Chúng là quốc điểu của Philippines.",
    habit:
      "Được mệnh danh là 'Đại bàng ăn khỉ', chúng săn bắt khỉ, chồn và các loài chim lớn trong rừng rậm.",
    fact: "Chúng là loài cực kỳ chung thủy, một cặp đại bàng sẽ gắn bó với nhau trọn đời.",
    nhom: "chim",
  },
  {
    name: "Ếch phi tiêu độc (Poison Dart Frog)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/echdoc.webp",
    audio: "./audio/poison-dart-frog.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài lưỡng cư có màu sắc rực rỡ nhất rừng Amazon, màu sắc này là lời cảnh báo chết người đối với kẻ săn mồi.",
    habit:
      "Hoạt động vào ban ngày, chúng hấp thụ chất độc từ các loài kiến và côn trùng mà chúng ăn vào.",
    fact: "Chất độc của một con ếch phi tiêu vàng nhỏ bé đủ để hạ gục 10 người trưởng thành.",
    nhom: "luong-cu",
  },
  {
    name: "Hổ Siberia (Siberian Tiger)",
    c: "Châu Á",
    img: "./image/châu á/siberia.webp",
    audio: "./audio/Siberian Tiger.mp3",
    status: "EN - Nguy cấp",
    desc: "Phân loài mèo lớn nhất thế giới sống tại vùng Viễn Đông Nga và Trung Quốc. Chúng có bộ lông dày, dài và màu nhạt hơn để ngụy trang hoàn hảo trong tuyết.",
    habit:
      "Sống đơn độc và thống trị lãnh thổ rộng lớn trong những khu rừng lá kim lạnh giá, săn bắt lợn rừng và hươu đỏ.",
    fact: "Lớp mỡ dưới da của hổ Siberia có thể dày tới 5cm để giúp chúng sinh tồn qua mùa đông khắc nghiệt âm hàng chục độ C.",
    nhom: "thu",
  },
  {
    name: "Hổ Sumatra (Sumatran Tiger)",
    c: "Châu Á",
    img: "./image/châu á/Ho-sumatra.jpeg",
    audio: "./audio/Sumatran Tiger.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Phân loài hổ nhỏ nhất thế giới, chỉ còn tồn tại duy nhất trên hòn đảo Sumatra của Indonesia. Bộ lông của chúng có màu cam sẫm nhất với các sọc đen rất dày.",
    habit:
      "Thích nghi với rừng nhiệt đới rậm rạp. Chúng là những tay bơi lội cự phách với lớp màng giữa các ngón chân phát triển hơn các loài hổ khác.",
    fact: "Lông bờm quanh cổ và má của hổ đực Sumatra phát triển rất rậm rạp, khiến chúng trông gần giống như một con sư tử nhỏ.",
    nhom: "thu",
  },
  {
    name: "Voi Châu Á (Asian Elephant)",
    c: "Châu Á",
    img: "./image/châu á/voia.jpg",
    audio: "./audio/asian-elephant.mp3",
    status: "EN - Nguy cấp",
    desc: "Nhỏ hơn voi châu Phi, đặc trưng dễ nhận biết nhất là đôi tai nhỏ, vòi chỉ có một 'ngón tay' để gắp đồ vật và trán có hai bướu nhô lên.",
    habit:
      "Sinh sống từ Ấn Độ đến Đông Nam Á. Chúng di chuyển theo đàn mẫu hệ xuyên qua các khu rừng, dành đến 19 tiếng mỗi ngày chỉ để ăn cỏ, rễ và vỏ cây.",
    fact: "Chỉ có voi đực châu Á mới mọc ngà lớn, trong khi voi cái hoàn toàn không có ngà hoặc ngà cực kỳ ngắn ẩn dưới môi (gọi là tush).",
    nhom: "thu",
  },
  {
    name: "Gấu chó (Malayan Sun Bear)",
    c: "Châu Á",
    img: "./image/châu á/gaucho.jpg",
    audio: "./audio/Malayan Sun Bear.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài gấu nhỏ nhất thế giới sống tại Đông Nam Á. Chúng có bộ lông đen tuyền và một vệt lông màu vàng cam hình chữ U trước ngực giống như mặt trời mọc.",
    habit:
      "Dành phần lớn thời gian trên ngọn cây nhiệt đới. Chúng là những nhà leo trèo xuất sắc nhờ bộ móng vuốt rất dài và cong.",
    fact: "Gấu chó sở hữu chiếc lưỡi dài kỷ lục lên tới 25cm, chuyên dùng để hút mật ong và thò sâu vào thân cây bắt tổ mối.",
    nhom: "thu",
  },
  {
    name: "Gấu ngựa (Moon Bear)",
    c: "Châu Á",
    img: "./image/châu á/gaungua.jpg",
    audio: "./audio/Moon Bear Sound.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Đặc trưng với vệt lông hình chữ V màu trắng hoặc kem trên ngực nổi bật trên nền lông đen dày. Lông ở vùng cổ và vai chúng rất dài tạo thành một chiếc bờm.",
    habit:
      "Sống trong các khu rừng rụng lá và rừng hỗn giao, chúng ăn tạp nhưng thiên về thực vật (trái cây, hạt, rễ).",
    fact: "Gấu ngựa có thể đứng và đi bằng hai chân sau cực kỳ vững vàng, chúng thường xuyên làm vậy để giành lợi thế chiều cao khi giao chiến.",
    nhom: "thu",
  },
  {
    name: "Tê giác một sừng (Indian Rhinoceros)",
    c: "Châu Á",
    img: "./image/châu á/te1.png",
    audio: "./audio/Indian Rhinoceros.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Sở hữu lớp da màu xám bạc có nhiều nếp gấp khổng lồ, khiến chúng trông như đang mặc những tấm áo giáp thép bọc đinh tán.",
    habit:
      "Rất thích nước, chúng thường ngâm mình hàng giờ trong các đầm lầy và ao hồ để làm mát cơ thể và tránh côn trùng đốt.",
    fact: "Khác với các loài tê giác khác dùng sừng để chiến đấu, tê giác một sừng sử dụng những chiếc răng cửa hàm dưới cực kỳ sắc nhọn để tự vệ.",
    nhom: "thu",
  },
  {
    name: "Tê giác Sumatra (Sumatran Rhinoceros)",
    c: "Châu Á",
    img: "./image/châu á/tesumatra.webp",
    audio: "./audio/Sumatran Rhinoceros.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài tê giác nhỏ nhất, nguyên thủy nhất và là loài duy nhất ở châu Á có 2 sừng. Cơ thể chúng được bao phủ bởi một lớp lông tơ dài màu đỏ nâu.",
    habit:
      "Sống đơn độc trong các khu rừng nhiệt đới dày đặc. Chúng là loài cực kỳ nhút nhát, thích sự yên tĩnh và luôn lảng tránh con người.",
    fact: "Tê giác Sumatra là họ hàng gần nhất còn sống sót của loài Tê giác lông cừu khổng lồ thời kỷ băng hà.",
    nhom: "thu",
  },
  {
    name: "Báo tuyết (Snow Leopard)",
    c: "Châu Á",
    img: "./image/châu á/baotuyet.webp",
    audio: "./audio/Snow Leopard.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Được mệnh danh là 'Bóng ma của dãy núi', sống trên các cao nguyên khắc nghiệt ở Himalaya. Bộ lông xám khói giúp chúng tàng hình hoàn hảo giữa các vách đá.",
    habit:
      "Săn cừu xanh và dê núi trên các sườn dốc cheo leo. Chúng có bàn chân cực rộng đóng vai trò như đôi giày đi tuyết.",
    fact: "Không giống như sư tử hay hổ, báo tuyết không thể gầm. Chiếc đuôi dày của chúng dài bằng cơ thể và được dùng như một chiếc chăn quàng cổ khi ngủ.",
    nhom: "thu",
  },
  {
    name: "Báo gấm (Clouded Leopard)",
    c: "Châu Á",
    img: "./image/châu á/baogam.webp",
    audio: "./audio/Clouded Leopard.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Sở hữu hoa văn hình nón lớn trông giống như những đám mây viền đen trên lông. Phân bố sâu trong các khu rừng nhiệt đới Đông Nam Á.",
    habit:
      "Là loài mèo lớn leo trèo giỏi nhất. Khớp mắt cá chân linh hoạt cho phép chúng treo ngược trên cành cây hoặc chạy chúc đầu xuống thân cây như loài sóc.",
    fact: "Báo gấm sở hữu tỷ lệ răng nanh so với kích thước hộp sọ lớn nhất trong số tất cả các loài mèo hoang dã hiện đại, tương đương với loài hổ răng kiếm tiền sử.",
    nhom: "thu",
  },

  /* ================= NHÓM LINH TRƯỞNG CHÂU Á BỔ SUNG ================= */

  // --- VƯỢN (GIBBONS) ---
  {
    name: "Vượn đen má trắng (White-cheeked Gibbon)",
    c: "Châu Á",
    img: "./image/châu á/vuon-den.webp",
    audio: "./audio/White Cheeked Gibbon.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài linh trưởng có tiếng hót vang vọng khắp rừng già để khẳng định lãnh thổ. Con đực có màu đen với hai chùm lông trắng ở má, con cái có màu vàng rơm.",
    habit:
      "Sống hoàn toàn trên cây, di chuyển bằng cách chuyền cành cực kỳ điêu luyện với sải tay dài.",
    fact: "Vượn là loài chung thủy, sống theo mô hình gia đình một vợ một chồng suốt đời.",
    nhom: "linh-truong",
  },
  {
    name: "Vượn tay trắng (White-handed Gibbon)",
    c: "Châu Á",
    img: "./image/châu á/vuon-tay-trang.jpg",
    audio: "./audio/white-handed-gibbon.mp3",
    status: "EN - Nguy cấp",
    desc: "Đặc trưng bởi bàn tay và bàn chân màu trắng nổi bật trên nền bộ lông đen hoặc nâu. Chúng không có đuôi giống như các loài vượn khác.",
    habit:
      "Dành phần lớn thời gian để hái lượm hoa quả trên các tầng tán cao của rừng nhiệt đới.",
    fact: "Chúng có thể chuyền cành với khoảng cách lên tới 15 mét chỉ trong một cú phóng mình.",
    nhom: "linh-truong",
  },

  // --- VOỌC (LANGURS) ---
  {
    name: "Voọc mũi hếch (Snub-nosed Monkey)",
    c: "Châu Á",
    img: "./image/châu á/vooc-mui-hech.webp",
    audio: "./audio/Snub-nosed Monkey.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài linh trưởng có vẻ ngoài độc đáo với chiếc mũi hếch ngược lên trên và đôi môi dày nổi bật. Chúng chịu lạnh rất giỏi.",
    habit:
      "Sống trong những khu rừng lá rộng nhiệt đới ở độ cao lớn. Thức ăn chủ yếu là lá cây, quả và hạt.",
    fact: "Chiếc mũi hếch giúp chúng tránh bị đọng nước vào mũi khi trời mưa hoặc khi sống ở vùng cao có độ ẩm cao.",
    nhom: "linh-truong",
  },
  {
    name: "Voọc quần đùi trắng (Delacour's Langur)",
    c: "Châu Á",
    img: "./image/châu á/vooc-quan-dui-trang.jpg",
    audio: "./audio/Delacour's Langur.mp4",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài đặc hữu quý hiếm của Việt Nam, còn được gọi là 'Voọc mông trắng' do dải lông trắng kéo dài từ hông đến đùi như mặc quần đùi.",
    habit:
      "Sống chủ yếu trong các vùng núi đá vôi (như Vân Long, Ninh Bình). Chúng rất giỏi leo trèo trên vách đá đứng.",
    fact: "Đây là một trong những loài linh trưởng nguy cấp nhất thế giới, chỉ còn tồn tại ngoài tự nhiên ở Việt Nam.",
    nhom: "linh-truong",
  },
  {
    name: "Voọc chà vá chân nâu (Red-shanked Douc Langur)",
    c: "Châu Á",
    img: "./image/châu á/vooc-cha-va.jpg",
    audio: "./audio/Red-shanked Douc Langur.mp4",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Được mệnh danh là 'Nữ hoàng linh trưởng' nhờ bộ lông rực rỡ nhiều màu sắc nhất trong các loài khỉ.",
    habit:
      "Sống theo bầy đàn lớn, thường được tìm thấy tại bán đảo Sơn Trà (Đà Nẵng). Chúng cực kỳ nhạy cảm với tiếng động.",
    fact: "Dạ dày của voọc chà vá được chia thành nhiều ngăn để giúp chúng tiêu hóa lượng lá cây lớn có chứa chất xơ khó tiêu.",
    nhom: "linh-truong",
  },

  // --- KHỈ (MONKEYS) ---
  {
    name: "Khỉ vàng (Rhesus Macaque)",
    c: "Châu Á",
    img: "./image/châu á/khi-vang.jpg",
    audio: "./audio/Rhesus Macaque.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài khỉ phổ biến nhất châu Á với bộ lông màu vàng nâu. Chúng rất thông minh và có khả năng thích nghi cực cao với nhiều môi trường.",
    habit:
      "Sống theo đàn đông đúc, có thứ bậc xã hội chặt chẽ. Chúng không sợ người và thường xuất hiện ở các khu đền chùa.",
    fact: "Hệ nhóm máu Rh (Rhesus) ở con người được phát hiện lần đầu tiên thông qua các nghiên cứu trên loài khỉ này.",
    nhom: "linh-truong",
  },
  {
    name: "Khỉ mũi vòi (Proboscis Monkey)",
    c: "Châu Á",
    img: "./image/châu á/khi-mui-voi.jpg",
    audio: "./audio/Proboscis Monkey.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài khỉ đặc hữu của đảo Borneo với chiếc mũi to và dài bất thường ở con đực. Chiếc bụng của chúng luôn căng tròn như mang bầu.",
    habit:
      "Sống gần sông ngòi và rừng ngập mặn. Chúng là những tay bơi lội cự phách với các ngón chân có màng bán phần.",
    fact: "Chiếc mũi khổng lồ của con đực đóng vai trò như một chiếc loa khuếch đại âm thanh để thu hút con cái.",
    nhom: "linh-truong",
  },
  {
    name: "Khỉ tuyết (Japanese Macaque)",
    c: "Châu Á",
    img: "./image/châu á/khituyet.webp",
    audio: "./audio/Japanese Macaque.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài linh trưởng sống ở vùng lạnh nhất thế giới. Chúng có bộ lông rất dày để chống chọi với tuyết trắng của Nhật Bản.",
    habit:
      "Nổi tiếng với tập tính tắm suối nước nóng vào mùa đông để sưởi ấm cơ thể. Chúng có cấu trúc xã hội rất phức tạp.",
    fact: "Khỉ tuyết là loài động vật duy nhất ngoài con người được biết đến là biết rửa sạch thức ăn trước khi ăn.",
    nhom: "linh-truong",
  },

  // --- CU LI (SLOW LORIS) ---
  {
    name: "Cu li (Slow Loris)",
    c: "Châu Á",
    img: "./image/châu á/cu-li.jpg",
    audio: "./audio/Slow Loris.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài linh trưởng nhỏ nhắn với đôi mắt to tròn lóng lánh và những bước di chuyển chậm chạp đặc trưng.",
    habit:
      "Hoạt động hoàn toàn về đêm. Chúng di chuyển rất êm ái trên các cành cây để săn tìm côn trùng và nhựa cây.",
    fact: "Đây là loài linh trưởng duy nhất trên thế giới có nọc độc. Chất độc nằm ở khuỷu tay, được chúng liếm vào răng để tự vệ.",
    nhom: "linh-truong",
  },

  /* ================= NHÓM BÒ SÁT (BO-SAT) ================= */
  {
    name: "Cá sấu nước mặn (Saltwater Crocodile)",
    c: "Châu Á",
    img: "./image/châu á/ca-sau-nuoc-man.jpg",
    audio: "./audio/Saltwater Crocodile.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài bò sát lớn nhất hành tinh còn tồn tại. Chúng có lực cắn mạnh nhất trong thế giới động vật, đủ sức nghiền nát xương của những con mồi lớn.",
    habit:
      "Sống ở các vùng cửa sông và vùng biển ven bờ. Chúng nổi tiếng với khả năng di chuyển xa ngoài đại dương.",
    fact: "Một con cá sấu nước mặn trưởng thành có thể nhịn ăn trong nhiều tháng nhờ khả năng tích trữ năng lượng cực tốt.",
    nhom: "bo-sat",
  },
  {
    name: "Cá sấu Xiêm (Siamese Crocodile)",
    c: "Châu Á",
    img: "./image/châu á/ca-sau-xiem.jpg",
    audio: "./audio/Siamese Crocodile.mp4",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài cá sấu nước ngọt đặc hữu của Đông Nam Á, trong đó có Việt Nam. Chúng có kích thước trung bình và vẻ ngoài hiền lành hơn cá sấu nước mặn.",
    habit: "Sống ở các hồ nước tĩnh, sông ngòi chậm chạp và đầm lầy rậm rạp.",
    fact: "Từng được coi là tuyệt chủng ngoài tự nhiên cho đến khi được phát hiện lại vào năm 2000 tại Campuchia.",
    nhom: "bo-sat",
  },
  {
    name: "Cá sấu sông Hằng (Gharial)",
    c: "Châu Á",
    img: "./image/châu á/ca-sau-song-hang.jpg",
    audio: "./audio/Gharial.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Đặc trưng với chiếc mõm cực kỳ dài và mỏng với hàng trăm chiếc răng sắc nhọn, chuyên dụng để bắt cá.",
    habit:
      "Dành phần lớn thời gian dưới nước và hiếm khi lên cạn ngoại trừ để sưởi nắng hoặc đẻ trứng.",
    fact: "Con đực trưởng thành có một khối u thịt lớn ở đầu mũi trông giống như một chiếc nồi đất (ghara), dùng để khuếch đại âm thanh.",
    nhom: "bo-sat",
  },
  {
    name: "Rắn hổ mang chúa (King Cobra)",
    c: "Châu Á",
    img: "./image/châu á/ran-ho-mang-chua.jpg",
    audio: "./audio/King Cobra.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài rắn độc dài nhất thế giới. Khi đe dọa, chúng có thể nâng cao 1/3 cơ thể lên khỏi mặt đất và xòe mang trông rất oai vệ.",
    habit:
      "Thức ăn chủ yếu của chúng là các loài rắn khác. Chúng sống trong các khu rừng rậm và đầm lầy.",
    fact: "Hổ mang chúa là loài rắn duy nhất biết xây tổ để đẻ và bảo vệ trứng cho đến khi nở.",
    nhom: "bo-sat",
  },
  {
    name: "Trăn gấm (Reticulated Python)",
    c: "Châu Á",
    img: "./image/châu á/tran-gam.jpg",
    audio: "./audio/Reticulated Python.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài trăn dài nhất thế giới với hoa văn hình lưới cực kỳ phức tạp và đẹp mắt trên da.",
    habit:
      "Là những tay bơi giỏi, thường được tìm thấy gần nguồn nước trong rừng nhiệt đới. Chúng săn mồi bằng cách siết chặt cho đến khi con mồi ngạt thở.",
    fact: "Trăn gấm có thể đạt chiều dài hơn 6 mét, đủ sức nuốt chửng những con mồi lớn như lợn rừng hoặc hươu.",
    nhom: "bo-sat",
  },

  /* ================= NHÓM LƯỠNG CƯ (LUONG-CU) ================= */
  {
    name: "Kỳ giông khổng lồ Trung Quốc (Chinese Giant Salamander)",
    c: "Châu Á",
    img: "./image/châu á/ky-giong.webp",
    audio: "./audio/Chinese Giant Salamander.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài lưỡng cư lớn nhất thế giới còn tồn tại, được coi là 'hóa thạch sống' vì đã xuất hiện từ hàng triệu năm trước.",
    habit:
      "Sống trong các dòng suối núi lạnh và hồ nước sạch. Chúng hô hấp chủ yếu qua làn da nhăn nheo của mình.",
    fact: "Tiếng kêu của chúng nghe giống như tiếng trẻ con khóc, nên ở Trung Quốc chúng còn được gọi là 'Cá trẻ con'.",
    nhom: "luong-cu",
  },

  /* ================= NHÓM CHIM (CHIM) ================= */
  {
    name: "Chim Hồng hoàng (Great Hornbill)",
    c: "Châu Á",
    img: "./image/châu á/hong-hoang.jpg",
    audio: "./audio/Great Hornbill.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Gây ấn tượng với chiếc mỏ khổng lồ màu vàng tươi cùng cấu trúc sừng cứng cáp trên đỉnh đầu.",
    habit:
      "Sống ở tầng tán cao của rừng già, đóng vai trò quan trọng trong việc phát tán hạt giống cây rừng.",
    fact: "Khi bay, tiếng đập cánh của hồng hoàng phát ra âm thanh vù vù rất lớn do cấu tạo lông cánh đặc biệt.",
    nhom: "chim",
  },
  {
    name: "Công xanh (Green Peafowl)",
    c: "Châu Á",
    img: "./image/châu á/cong-xanh.jpg",
    audio: "./audio/Green Peafowl.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài chim có bộ lông lộng lẫy nhất Đông Nam Á. Khác với công Ấn Độ, cả con đực và con cái đều có màu xanh lục rực rỡ.",
    habit:
      "Sống trong các khu rừng thưa gần nguồn nước. Con đực xòe chiếc đuôi khổng lồ để thu hút con cái vào mùa sinh sản.",
    fact: "Công xanh là loài chim bay rất giỏi dù có bộ đuôi dài vướng víu.",
    nhom: "chim",
  },
  {
    name: "Công Ấn Độ (Indian Peafowl)",
    c: "Châu Á",
    img: "./image/châu á/cong-an-do.jpg",
    audio: "./audio/Indian Peafowl.mp4",
    status: "LC - Ít lo ngại",
    desc: "Biểu tượng quốc gia của Ấn Độ. Con đực nổi bật với bộ ngực màu xanh lam đậm và đuôi dài lấp lánh các 'con mắt' màu sắc.",
    habit:
      "Thích nghi tốt với nhiều môi trường sống từ rừng rậm đến các vùng đất canh tác của con người.",
    fact: "Trong văn hóa Ấn Độ, chim công được coi là linh vật đại diện cho sự may mắn và sắc đẹp.",
    nhom: "chim",
  },
  {
    name: "Sếu đầu đỏ (Sarus Crane)",
    c: "Châu Á",
    img: "./image/châu á/seu-dau-do.jpg",
    audio: "./audio/Sarus Crane.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài chim bay cao nhất thế giới. Chúng có đôi chân dài miên man và mảng da đỏ rực rỡ trên đầu và cổ.",
    habit:
      "Sống tại các vùng đất ngập nước tự nhiên như Tràm Chim (Việt Nam). Chúng thường nhảy múa để giao tiếp với bạn đời.",
    fact: "Sếu đầu đỏ là biểu tượng của sự chung thủy và trường thọ trong văn hóa Á Đông.",
    nhom: "chim",
  },

  /* ================= NHÓM THÚ ĐẶC HỮU KHÁC (THU) ================= */
  {
    name: "Lạc đà hai bướu (Bactrian Camel)",
    c: "Châu Á",
    img: "./image/châu á/lac-da.jpg",
    audio: "./audio/Bactrian Camel.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Sở hữu hai chiếc bướu lớn trên lưng để tích trữ mỡ năng lượng, giúp chúng sinh tồn qua những hành trình dài khắc nghiệt.",
    habit:
      "Sống tại sa mạc Gobi lạnh giá. Chúng có thể chịu đựng nhiệt độ từ -40°C đến 40°C.",
    fact: "Lạc đà hai bướu dã sinh có thể uống được nước muối mặn hơn cả nước biển mà không hề hấn gì.",
    nhom: "thu",
  },
  {
    name: "Bò Tây Tạng (Yak)",
    c: "Châu Á",
    img: "./image/châu á/bo-tay-tang.webp",
    audio: "./audio/Yak.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài bò có bộ lông dài nhất thế giới để chống lại cái rét cắt da cắt thịt của vùng cao nguyên Tây Tạng.",
    habit:
      "Sống ở độ cao từ 4.000 đến 6.000 mét. Chúng là phương tiện vận chuyển thiết yếu cho người dân vùng cao.",
    fact: "Bò Tây Tạng không thể sống tốt ở độ cao thấp vì chúng dễ bị sốc nhiệt khi nhiệt độ trên 15°C.",
    nhom: "thu",
  },
  {
    name: "Ngựa hoang Przewalski (Przewalski's Horse)",
    c: "Châu Á",
    img: "./image/châu á/ngua-hoang.webp",
    audio: "./audio/Przewalski's Horse.mp4",
    status: "EN - Nguy cấp",
    desc: "Loài ngựa hoang thực thụ cuối cùng còn tồn tại trên trái đất, mang vóc dáng thấp đậm và bờm dựng đứng.",
    habit:
      "Từng bị coi là tuyệt chủng ngoài tự nhiên, nay đã được phục hồi thành công tại các thảo nguyên Mông Cổ.",
    fact: "Khác với ngựa nhà, ngựa Przewalski có 66 nhiễm sắc thể thay vì 64.",
    nhom: "thu",
  },
  {
    name: "Sao la (Saola)",
    c: "Châu Á",
    img: "./image/châu á/sao-la.jpg",
    audio: "./audio/Saola.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Được mệnh danh là 'Kỳ lân châu Á', loài thú quý hiếm bậc nhất thế giới mới được phát hiện lần đầu năm 1992 tại Việt Nam.",
    habit: "Sống ẩn dật trong các khu rừng rậm của dãy Trường Sơn hùng vĩ.",
    fact: "Rất hiếm khi con người có thể bắt gặp Sao la ngoài tự nhiên, hình ảnh của chúng phần lớn được ghi lại qua bẫy ảnh.",
    nhom: "thu",
  },
  {
    name: "Tê tê (Pangolin)",
    c: "Châu Á",
    img: "./image/châu á/te-te.webp",
    audio: "./audio/Pangolin.mp3",
    status: "CR - Cực kỳ nguy cấp",
    desc: "Loài thú có vảy duy nhất trên thế giới. Khi gặp nguy hiểm, chúng cuộn tròn cơ thể lại như một quả cầu bọc giáp sắt.",
    habit:
      "Hoạt động về đêm, dùng chiếc lưỡi dài và dính để bắt kiến và mối trong các hốc cây.",
    fact: "Tê tê là loài động vật có vú bị săn bắt và buôn lậu nhiều nhất trên thế giới hiện nay.",
    nhom: "thu",
  },
  {
    name: "Heo vòi (Malayan Tapir)",
    c: "Châu Á",
    img: "./image/châu á/heo-voi.jpg",
    audio: "./audio/Malayan Tapir.mp3",
    status: "EN - Nguy cấp",
    desc: "Có hình dáng kỳ lạ với phần thân trước đen, phần mông trắng giúp chúng ngụy trang cực tốt trong bóng tối của rừng già.",
    habit:
      "Sống trong các khu rừng mưa nhiệt đới Đông Nam Á, rất thích tắm bùn và bơi lội.",
    fact: "Heo vòi con khi mới sinh có bộ lông lốm đốm giống như trái dưa hấu để tự vệ.",
    nhom: "thu",
  },

  /* ================= DANH SÁCH ĐỘNG VẬT CHÂU PHI (CHAU PHI) ================= */

  // --- NHÓM THÚ LỚN & SĂN MỒI ---
  {
    name: "Báo hoa mai (Leopard)",
    c: "Châu Phi",
    img: "./image/châu phi/bao-hoa-mai.webp",
    audio: "./audio/Leopard.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Bậc thầy leo trèo và ẩn nấp. Báo hoa mai là loài mèo lớn duy nhất thường xuyên kéo con mồi lên cây để tránh bị linh cẩu hay sư tử cướp mất.",
    habit:
      "Sống đơn độc và cực kỳ bí ẩn. Chúng hoạt động chủ yếu về đêm và có khả năng thích nghi với nhiều môi trường từ rừng rậm đến thảo nguyên.",
    fact: "Báo hoa mai có thể kéo một con mồi nặng gấp 3 lần trọng lượng cơ thể mình lên cành cây cao.",
    nhom: "thu",
  },
  {
    name: "Tê giác trắng (White Rhinoceros)",
    c: "Châu Phi",
    img: "./image/châu phi/te-giac-trang.jpg",
    audio: "./audio/White Rhinoceros.mp3",
    status: "NT - Sắp bị đe dọa",
    desc: "Loài thú ăn cỏ khổng lồ có trọng lượng chỉ sau loài voi. Tên 'trắng' thực chất bắt nguồn từ chữ 'wijd' (rộng) trong tiếng Hà Lan, chỉ chiếc môi rộng để gặm cỏ.",
    habit:
      "Sống theo nhóm nhỏ và hiền lành hơn tê giác đen. Chúng dành phần lớn thời gian để gặm cỏ trên các vùng đồng bằng.",
    fact: "Sừng tê giác được cấu tạo từ keratin, hoàn toàn giống với chất liệu tạo nên móng tay và tóc của con người.",
    nhom: "thu",
  },
  {
    name: "Trâu rừng Châu Phi (Cape Buffalo)",
    c: "Châu Phi",
    img: "./image/châu phi/trau-rung.webp",
    audio: "./audio/Cape Buffalo.mp4",
    status: "LC - Ít lo ngại",
    desc: "Được mệnh danh là 'Cái chết đen', một trong những loài nguy hiểm nhất châu Phi. Chúng sở hữu cặp sừng cứng cáp tạo thành một tấm khiên trên đỉnh đầu.",
    habit:
      "Sống theo đàn lớn lên đến hàng nghìn con. Chúng rất đoàn kết và sẵn sàng quay lại tấn công sư tử để cứu thành viên trong đàn.",
    fact: "Trâu rừng có trí nhớ rất tốt và nổi tiếng với việc 'trả thù' những kẻ săn mồi đã từng tấn công chúng.",
    nhom: "thu",
  },
  {
    name: "Báo săn (Cheetah)",
    c: "Châu Phi",
    img: "./image/châu phi/bao-san.jpg",
    audio: "./audio/Cheetah.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài động vật chạy nhanh nhất thế giới trên cạn. Cơ thể chúng được thiết kế hoàn hảo cho tốc độ với cột sống linh hoạt và móng vuốt không thu lại được để tăng độ bám.",
    habit:
      "Săn mồi vào ban ngày để tránh cạnh tranh với sư tử. Cheetah sử dụng tốc độ kinh hoàng để hạ gục con mồi trong những cuộc rượt đuổi ngắn.",
    fact: "Chỉ mất 3 giây để một con Cheetah tăng tốc từ 0 lên 95km/h, nhanh hơn cả một chiếc siêu xe thể thao.",
    nhom: "thu",
  },
  {
    name: "Ngựa vằn (Plains Zebra)",
    c: "Châu Phi",
    img: "./image/châu phi/ngua-van.webp",
    audio: "./audio/Plains Zebra.mp3",
    status: "LC - Ít lo ngại",
    desc: "Nổi tiếng với những sọc đen trắng đặc trưng. Các nhà khoa học tin rằng sọc vằn giúp chúng gây nhiễu thị giác kẻ thù và xua đuổi côn trùng.",
    habit:
      "Sống theo đàn và thường di cư cùng linh dương đầu bò để tìm kiếm những bãi cỏ tươi tốt.",
    fact: "Mỗi con ngựa vằn có một kiểu sọc hoàn toàn duy nhất, giống như dấu vân tay của con người vậy.",
    nhom: "thu",
  },
  {
    name: "Hà mã (Hippopotamus)",
    c: "Châu Phi",
    img: "./image/châu phi/ha-ma.jpg",
    audio: "./audio/Hippopotamus.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Thú khổng lồ dành 16 giờ mỗi ngày ngâm mình dưới nước. Dù trông có vẻ chậm chạp, hà mã là một trong những loài hung dữ và bảo vệ lãnh thổ nhất.",
    habit:
      "Hoạt động dưới nước vào ban ngày và lên cạn gặm cỏ vào ban đêm. Chúng có thể chạy trên cạn với tốc độ 30km/h.",
    fact: "Da hà mã tiết ra một loại chất lỏng màu đỏ đóng vai trò như kem chống nắng và chất sát khuẩn tự nhiên.",
    nhom: "thu",
  },
  {
    name: "Linh cẩu đốm (Spotted Hyena)",
    c: "Châu Phi",
    img: "./image/châu phi/linh-cau.jpg",
    audio: "./audio/Spotted Hyena.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài săn mồi thông minh với cấu trúc xã hội mẫu hệ phức tạp. Chúng sở hữu lực cắn kinh khủng có thể nghiền nát xương voi.",
    habit:
      "Sống theo các thị tộc (clan) lớn. Linh cẩu đốm là những kẻ săn mồi bền bỉ chứ không chỉ đơn thuần là ăn xác thối.",
    fact: "Tiếng kêu đặc trưng của linh cẩu nghe giống như tiếng cười của con người, được dùng để giao tiếp trong đàn.",
    nhom: "thu",
  },

  // --- NHÓM LINH TRƯỞNG CHÂU PHI ---
  {
    name: "Khỉ đột núi (Mountain Gorilla)",
    c: "Châu Phi",
    img: "./image/châu phi/khi-dot.jpeg",
    audio: "./audio/Mountain Gorilla.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài linh trưởng lớn nhất hành tinh sống tại các vùng núi cao. Những con đực trưởng thành có mảng lông màu bạc ở lưng nên được gọi là 'Silverback'.",
    habit:
      "Sống theo nhóm gia đình hiền hòa dưới sự dẫn dắt của một con đực lưng bạc. Chúng dành phần lớn thời gian để ăn thực vật.",
    fact: "DNA của khỉ đột giống con người tới 98%. Mỗi cá thể có một hình dạng vân mũi riêng biệt để nhận diện.",
    nhom: "linh-truong",
  },
  {
    name: "Tinh tinh (Chimpanzee)",
    c: "Châu Phi",
    img: "./image/châu phi/tinh-tinh.webp",
    audio: "./audio/Chimpanzee.mp3",
    status: "EN - Nguy cấp",
    desc: "Họ hàng gần gũi nhất của con người. Chúng nổi tiếng với khả năng sử dụng công cụ và có đời sống tình cảm xã hội vô cùng phức tạp.",
    habit:
      "Sống trong các cộng đồng lớn trong rừng rậm. Chúng giao tiếp bằng âm thanh, cử chỉ và biểu cảm khuôn mặt rất giống người.",
    fact: "Tinh tinh có thể học được ngôn ngữ ký hiệu và biết dùng cành cây để 'câu' mối trong tổ ra ăn.",
    nhom: "linh-truong",
  },
  {
    name: "Khỉ Mandrill (Mandrill)",
    c: "Châu Phi",
    img: "./image/châu phi/mandrill.webp",
    audio: "./audio/Mandrill.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài khỉ có gương mặt sặc sỡ nhất thế giới với hai tông màu đỏ và xanh lam nổi bật. Chúng có kích thước lớn và răng nanh rất dài.",
    habit:
      "Sống trong các khu rừng nhiệt đới xích đạo. Mandrill thường di chuyển theo những đàn cực lớn lên đến hàng trăm cá thể.",
    fact: "Màu sắc trên mặt con đực càng rực rỡ thì địa vị của nó trong đàn càng cao.",
    nhom: "linh-truong",
  },

  // --- NHÓM SA MẠC & ĐẶC ĐIỂM RIÊNG ---
  {
    name: "Cáo tai to (Fennec Fox)",
    c: "Châu Phi",
    img: "./image/châu phi/cao-tai-to.webp",
    audio: "./audio/Fennec Fox.mp4",
    status: "LC - Ít lo ngại",
    desc: "Loài cáo nhỏ nhất thế giới sống tại sa mạc Sahara. Đôi tai khổng lồ dài 15cm giúp chúng tản nhiệt và nghe thấy tiếng côn trùng dưới cát.",
    habit:
      "Hoạt động về đêm để tránh cái nóng thiêu đốt. Chúng đào hang sâu dưới cát để ngủ vào ban ngày.",
    fact: "Bộ lông của chúng có màu cát để ngụy trang và lòng bàn chân cũng có lông để tránh bị bỏng khi đi trên cát nóng.",
    nhom: "thu",
  },
  {
    name: "Chồn Meerkat (Meerkat)",
    c: "Châu Phi",
    img: "./image/châu phi/meerkat.jpg",
    audio: "./audio/Meerkat.mp4",
    status: "LC - Ít lo ngại",
    desc: "Những kẻ canh gác tinh nhanh của vùng sa mạc Kalahari. Meerkat nổi tiếng với dáng đứng thẳng bằng hai chân sau để quan sát kẻ thù.",
    habit:
      "Sống theo nhóm gia đình có tính kỷ luật cao. Luôn có ít nhất một 'lính gác' đứng canh trong khi những con khác tìm thức ăn.",
    fact: "Quầng thâm quanh mắt meerkat đóng vai trò như một cặp kính râm tự nhiên, giúp chúng nhìn rõ ngay cả dưới ánh nắng chói chang.",
    nhom: "thu",
  },
  {
    name: "Lạc đà một bướu (Dromedary Camel)",
    c: "Châu Phi",
    img: "./image/châu phi/lac-da-1-buou.jpg",
    audio: "./audio/Dromedary Camel.mp3",
    status: "LC - Ít lo ngại",
    desc: "Được gọi là 'con tàu của sa mạc'. Chiếc bướu duy nhất trên lưng chứa mỡ giúp chúng nhịn ăn nhịn uống trong nhiều ngày liền.",
    habit:
      "Thích nghi hoàn hảo với cái nóng cực hạn. Chúng có hàng mi dày để chắn cát và có thể đóng kín lỗ mũi khi có bão cát.",
    fact: "Một con lạc đà khát nước có thể uống hết 100 lít nước chỉ trong vòng 10 phút.",
    nhom: "thu",
  },

  // --- NHÓM ĐẢO MADAGASCAR ---
  {
    name: "Vượn cáo đuôi vòng (Ring-tailed Lemur)",
    c: "Châu Phi",
    img: "./image/châu phi/vuon-cao.jpg",
    audio: "./audio/Ring-tailed Lemur.mp3",
    status: "EN - Nguy cấp",
    desc: "Biểu tượng của đảo Madagascar với chiếc đuôi có các khoanh đen trắng xen kẽ. Chúng rất thông minh và có tính xã hội cao.",
    habit:
      "Dành nhiều thời gian dưới mặt đất hơn các loài vượn cáo khác. Chúng thường 'tắm nắng' bằng cách ngồi thẳng và dang rộng hai tay.",
    fact: "Trong đàn vượn cáo, con cái luôn là những kẻ nắm quyền điều hành tối cao.",
    nhom: "linh-truong",
  },
  {
    name: "Cầy Fossa (Fossa)",
    c: "Châu Phi",
    img: "./image/châu phi/fossa.jpg",
    audio: "./audio/Fossa.mp4",
    status: "VU - Sắp nguy cấp",
    desc: "Loài thú ăn thịt lớn nhất trên đảo Madagascar. Chúng có hình dáng lai giữa mèo và cầy với chiếc đuôi rất dài để giữ thăng bằng khi leo trèo.",
    habit:
      "Là kẻ săn mồi thượng đẳng chuyên săn vượn cáo. Fossa có thể di chuyển cực nhanh nhẹn trên các cành cây cao.",
    fact: "Mặc dù trông giống mèo, nhưng về mặt di truyền, Fossa lại gần gũi với loài cầy mangut hơn.",
    nhom: "thu",
  },

  // --- NHÓM BÒ SÁT & CHIM ---
  {
    name: "Cá sấu sông Nile (Nile Crocodile)",
    c: "Châu Phi",
    img: "./image/châu phi/ca-sau-song-nile.webp",
    audio: "./audio/Nile Crocodile.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài bò sát ăn thịt lớn nhất châu Phi. Chúng là những kẻ săn mồi rình rập cực kỳ kiên nhẫn dưới làn nước đục của các dòng sông.",
    habit:
      "Nổi tiếng với việc phục kích các loài linh dương và ngựa vằn khi chúng băng qua sông trong mùa di cư.",
    fact: "Lực cắn của cá sấu sông Nile mạnh gấp 10 lần so với loài cá mập trắng vĩ đại.",
    nhom: "bo-sat",
  },
  {
    name: "Cò mỏ giày (Shoebill)",
    c: "Châu Phi",
    img: "./image/châu phi/co-mo-giay.webp",
    audio: "./audio/Shoebill.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài chim có ngoại hình như bước ra từ thời tiền sử với chiếc mỏ khổng lồ hình chiếc giày và đôi mắt sắc lạnh.",
    habit:
      "Sống tại các đầm lầy Đông Phi. Chúng có thể đứng im bất động hàng giờ đồng hồ để chờ đợi săn cá phổi hoặc rùa con.",
    fact: "Âm thanh của cò mỏ giày khi vỗ mỏ nghe giống hệt tiếng súng máy liên thanh.",
    nhom: "chim",
  },
  {
    name: "Chim cánh cụt Châu Phi (African Penguin)",
    c: "Châu Phi",
    img: "./image/châu phi/chim-canh-cut.jpg",
    audio: "./audio/African Penguin.mp3",
    status: "EN - Nguy cấp",
    desc: "Duy nhất tại vùng biển phía Nam châu Phi. Chúng còn được gọi là 'Cánh cụt lừa' vì tiếng kêu rất giống tiếng lừa bướng bỉnh.",
    habit:
      "Sống thành các bãi biển ven bờ, nơi có dòng nước lạnh chảy qua. Chúng là những tay bơi lặn tài ba để săn cá.",
    fact: "Mỗi con chim cánh cụt có các chấm đen trên ngực hoàn toàn khác biệt, giúp phân biệt cá thể này với cá thể khác.",
    nhom: "chim",
  },

  /* ================= DANH SÁCH ĐỘNG VẬT BẮC MỸ (BAC MY) ================= */

  // --- NHÓM THÚ (THU) ---
  {
    name: "Gấu xám (Grizzly Bear)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/gau-xam.webp",
    audio: "./audio/Grizzly Bear.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài gấu hung dữ và to lớn, biểu tượng của sức mạnh hoang dã tại Alaska và Canada. Chúng có chiếc bướu cơ bắp trên vai giúp tạo lực đào bới cực mạnh.",
    habit:
      "Chúng là loài ăn tạp, thường bắt cá hồi vào mùa sinh sản và tích trữ mỡ để ngủ đông suốt nhiều tháng.",
    fact: "Mặc dù to lớn, gấu xám có thể chạy với tốc độ 48km/h, đủ sức bắt kịp các loài thú móng guốc.",
    nhom: "thu",
  },
  {
    name: "Gấu đen Bắc Mỹ (American Black Bear)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/gau-den.jpg",
    audio: "./audio/American Black Bear.mp3",
    status: "LC - Ít lo ngại",
    desc: "Nhỏ hơn gấu xám, chúng là loài gấu phổ biến nhất lục địa. Bộ lông thường có màu đen nhưng cũng có thể là màu quế hoặc vàng hoe.",
    habit:
      "Bậc thầy leo trèo, chúng thường leo lên cây cao để tránh nguy hiểm hoặc tìm kiếm thức ăn.",
    fact: "Gấu đen rất thông minh, chúng có thể học cách mở các loại khóa thùng rác hoặc cửa xe ô tô để tìm đồ ăn.",
    nhom: "thu",
  },
  {
    name: "Nai sừng tấm (Moose)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/nai-sung-tam.jpg",
    audio: "./audio/Moose.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài lớn nhất trong họ Hươu nai. Con đực sở hữu bộ gạc khổng lồ hình chân chèo có thể rộng tới 1.8 mét.",
    habit:
      "Sống gần các vùng nước như hồ và đầm lầy. Chúng là những tay bơi lội cự phách và có thể lặn sâu để ăn thực vật thủy sinh.",
    fact: "Nai sừng tấm có thể di chuyển bàn chân sau theo góc 360 độ, giúp chúng đá trả kẻ thù từ mọi hướng.",
    nhom: "thu",
  },
  {
    name: "Bò xạ hương (Muskox)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/bo-xa-huong.jpg",
    audio: "./audio/Muskox.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài thú có ngoại hình tiền sử với bộ lông dài chạm đất để chống chọi với cái lạnh thấu xương của vùng cực Bắc.",
    habit:
      "Khi gặp nguy hiểm từ sói, đàn bò sẽ đứng thành vòng tròn, quay sừng ra ngoài để bảo vệ những con non ở giữa.",
    fact: "Bộ lông tơ bên trong của bò xạ hương (gọi là qiviut) ấm gấp 8 lần so với lông cừu.",
    nhom: "thu",
  },
  {
    name: "Báo sư tử (Cougar/Puma)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/bao-su-tu.webp",
    audio: "./audio/Puma.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài mèo lớn có khả năng thích nghi phi thường, từ các dãy núi tuyết đến đầm lầy nhiệt đới Florida.",
    habit:
      "Là tay săn mồi rình rập, chúng có thể nhảy cao 5.5 mét chỉ trong một cú phóng mình.",
    fact: "Báo sư tử thực chất gần gũi với mèo nhà hơn là sư tử, chúng không thể gầm mà chỉ phát ra tiếng rên hoặc gào.",
    nhom: "thu",
  },
  {
    name: "Chồn sói (Wolverine)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/chon-soi.jpg",
    audio: "./audio/Wolverine.mp3",
    status: "LC - Ít lo ngại",
    desc: "Tuy kích thước chỉ bằng một chú chó nhỏ nhưng cực kỳ hung dữ và sở hữu sức mạnh kinh ngạc.",
    habit:
      "Chúng nổi tiếng với tính cách liều lĩnh, sẵn sàng đối đầu với cả gấu hoặc sói để tranh giành thức ăn.",
    fact: "Chồn sói có hàm răng cực khỏe, có thể nhai nát những khúc xương đông cứng trong mùa đông Bắc Cực.",
    nhom: "thu",
  },
  {
    name: "Gấu mèo (Raccoon)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/gau-meo.jpg",
    audio: "./audio/Raccoon.mp3",
    status: "LC - Ít lo ngại",
    desc: "Được mệnh danh là 'kẻ trộm đeo mặt nạ' vì quầng lông đen quanh mắt và đôi bàn tay khéo léo như người.",
    habit:
      "Hoạt động mạnh về đêm. Chúng có tập tính kỳ lạ là thường nhúng thức ăn xuống nước trước khi ăn.",
    fact: "Bàn tay của gấu mèo có hàng ngàn tế bào cảm giác, giúp chúng 'nhìn' thấy vật thể thông qua việc sờ nắn.",
    nhom: "thu",
  },
  {
    name: "Hải ly (Beaver)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/hai-ly.jpg",
    audio: "./audio/Beaver.mp3",
    status: "LC - Ít lo ngại",
    desc: "Được coi là 'Kỹ sư của thiên nhiên'. Chúng có chiếc đuôi bẹt như mái chèo và hàm răng cam rực rỡ không bao giờ ngừng dài ra.",
    habit:
      "Chuyên xây dựng các đập nước khổng lồ để tạo ra hồ nước tĩnh lặng làm nơi trú ngụ an toàn cho gia đình.",
    fact: "Những chiếc đập của hải ly giúp duy trì mực nước ổn định và tạo ra môi trường sống cho rất nhiều loài vật khác.",
    nhom: "thu",
  },
  {
    name: "Tuần lộc (Caribou)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/tuan-loc.jpg",
    audio: "./audio/Caribou.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài hươu duy nhất mà cả con đực và con cái đều mọc gạc. Chúng sở hữu bộ móng rộng giúp đi trên tuyết dễ dàng.",
    habit:
      "Thực hiện những cuộc di cư dài nhất trong thế giới động vật trên cạn, lên tới 5.000km mỗi năm.",
    fact: "Mắt tuần lộc có khả năng thay đổi màu sắc theo mùa: màu vàng vào mùa hè và màu xanh lam vào mùa đông để nhìn tốt hơn trong ánh sáng yếu.",
    nhom: "thu",
  },
  {
    name: "Cáo Bắc Cực (Arctic Fox)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/cao-bac-cuc.jpg",
    audio: "./audio/Arctic Fox.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài động vật có khả năng chịu lạnh tuyệt vời nhờ bộ lông cực dày. Màu lông thay đổi từ trắng tinh vào mùa đông sang nâu xám vào mùa hè.",
    habit:
      "Chúng săn chuột lemming dưới lớp tuyết dày bằng cách nhảy lên cao rồi lao đầu xuống tuyết.",
    fact: "Cáo Bắc Cực có thể chịu đựng nhiệt độ thấp tới -50°C trước khi cơ thể bắt đầu cảm thấy lạnh.",
    nhom: "thu",
  },
  {
    name: "Linh miêu đuôi cộc (Bobcat)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/linh-mieu.webp",
    audio: "./audio/Bobcat.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài mèo hoang nhỏ với đôi tai có chỏm lông đặc trưng và chiếc đuôi ngắn cụn.",
    habit:
      "Săn bắt các loài gặm nhấm và thỏ. Chúng hoạt động chủ yếu vào lúc bình minh và hoàng hôn.",
    fact: "Linh miêu đuôi cộc có thể hạ gục những con mồi lớn gấp 8 lần trọng lượng cơ thể mình.",
    nhom: "thu",
  },
  {
    name: "Cáo đỏ (Red Fox)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/cao-do.jpg",
    audio: "./audio/Red Fox.mp3",
    status: "LC - Ít lo ngại",
    desc: "Phổ biến rộng khắp Bắc Mỹ, từ rừng rậm đến các thành phố. Chúng nổi tiếng với sự tinh ranh và thông minh.",
    habit:
      "Rất linh hoạt trong việc tìm kiếm thức ăn, từ săn bắt côn trùng, chuột đến việc tìm đồ ăn thừa của con người.",
    fact: "Đuôi của cáo đỏ chiếm tới 1/3 chiều dài cơ thể, giúp chúng giữ thăng bằng và giữ ấm khi ngủ.",
    nhom: "thu",
  },
  {
    name: "Sóc xám (Gray Squirrel)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/soc-xam.jpg",
    audio: "./audio/Gray Squirrel.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài vật cực kỳ quen thuộc trong các công viên Bắc Mỹ. Chúng có chiếc đuôi xù lớn đóng vai trò như chiếc dù khi nhảy.",
    habit:
      "Chúng tích trữ hàng ngàn hạt dẻ và quả hạch dưới đất để chuẩn bị cho mùa đông.",
    fact: "Nhờ trí nhớ kém mà sóc thường quên chỗ giấu hạt, vô tình giúp hàng ngàn cây xanh mới mọc lên mỗi năm.",
    nhom: "thu",
  },

  // --- NHÓM CHIM (CHIM) ---
  {
    name: "Đại bàng đầu trắng (Bald Eagle)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/dai-bang.jpg",
    audio: "./audio/Bald Eagle Call.mp3",
    status: "LC - Ít lo ngại",
    desc: "Quốc điểu của Hoa Kỳ, biểu tượng cho sự tự do. Chúng có bộ lông nâu sẫm tương phản với phần đầu và đuôi trắng muốt.",
    habit:
      "Săn cá tại các vùng hồ và sông lớn. Chúng xây những chiếc tổ khổng lồ, lớn nhất trong số các loài chim thế giới.",
    fact: "Sau khi từng gần như tuyệt chủng vào thập niên 70, đại bàng đầu trắng đã có sự phục hồi ngoạn mục nhờ các nỗ lực bảo tồn.",
    nhom: "chim",
  },
  {
    name: "Gà tây hoang dã (Wild Turkey)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/ga-tay.jpg",
    audio: "./audio/Wild Turkey.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài chim lớn bản địa của Bắc Mỹ. Con đực có bộ lông óng ánh và phần yếm thịt đỏ rực dưới cổ.",
    habit:
      "Khác với gà tây nhà, gà tây hoang dã chạy rất nhanh và có khả năng bay một quãng ngắn.",
    fact: "Benjamin Franklin từng đề nghị gà tây làm quốc điểu của Mỹ thay vì đại bàng vì cho rằng chúng thông minh hơn.",
    nhom: "chim",
  },

  // --- NHÓM BÒ SÁT (BO-SAT) ---
  {
    name: "Cá sấu Mỹ (American Alligator)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/ca-sau-my.jpg",
    audio: "./audio/American Alligator.mp3",
    status: "LC - Ít lo ngại",
    desc: "Sống phổ biến ở đầm lầy phía Đông Nam Hoa Kỳ. Đặc trưng với chiếc mõm rộng và sẫm màu.",
    habit:
      "Chúng đào những 'hố cá sấu' trong đầm lầy, tạo ra những vũng nước quan trọng cho các loài vật khác trong mùa khô.",
    fact: "Cá sấu Mỹ có thể tồn tại trong nước đóng băng bằng cách thò mũi lên trên mặt băng để thở.",
    nhom: "bo-sat",
  },
  {
    name: "Rắn chuông (Rattlesnake)",
    c: "Bắc Mỹ",
    img: "./image/bắc mỹ/ran-chuong.jpg",
    audio: "./audio/Rattlesnake.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài rắn độc nổi tiếng với bộ phận phát ra tiếng động 'rè rè' ở cuối đuôi để cảnh báo kẻ thù.",
    habit:
      "Sống tại các vùng sa mạc và núi đá. Chúng săn mồi bằng cách cảm nhận nhiệt độ cơ thể từ con mồi.",
    fact: "Mỗi lần rắn lột da, đuôi chúng sẽ mọc thêm một nấc 'chuông' mới.",
    nhom: "bo-sat",
  },

  /* ================= DANH SÁCH ĐỘNG VẬT NAM MỸ (NAM MY) ================= */

  // --- NHÓM LINH TRƯỞNG (LINH-TRUONG) ---
  {
    name: "Khỉ nhện (Spider Monkey)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/khi-nhen.webp",
    audio: "./audio/Spider Monkey.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài linh trưởng có cánh tay và đôi chân dài mảnh khảnh, đặc biệt là chiếc đuôi có khả năng cầm nắm như một cánh tay thứ năm.",
    habit:
      "Sống hoàn toàn trên các tầng tán cao của rừng mưa. Chúng di chuyển bằng cách chuyền cành cực nhanh và hiếm khi xuống mặt đất.",
    fact: "Đuôi của khỉ nhện khỏe đến mức có thể đỡ toàn bộ trọng lượng cơ thể chúng khi đang treo ngược để hái quả.",
    nhom: "linh-truong",
  },

  // --- NHÓM THÚ (THU) ---
  {
    name: "Lười ba ngón (Three-toed Sloth)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/con-luoi.webp",
    audio: "./audio/Three-toed Sloth.mp4",
    status: "LC - Ít lo ngại",
    desc: "Loài động vật chậm chạp nhất thế giới. Cơ thể chúng là một hệ sinh thái nhỏ với tảo xanh mọc ngay trên bộ lông để ngụy trang.",
    habit:
      "Dành phần lớn cuộc đời để treo ngược mình trên cành cây. Chúng ngủ tới 15-20 giờ mỗi ngày và chỉ xuống đất mỗi tuần một lần.",
    fact: "Cơ bắp của lười chỉ bằng 1/4 so với các loài thú cùng kích thước, nhưng chúng có thể nhịn thở dưới nước tới 40 phút.",
    nhom: "thu",
  },
  {
    name: "Chuột lang nước (Capybara)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/chuot-lang-nuoc.jpg",
    audio: "./audio/Capybara.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài động vật gặm nhấm lớn nhất thế giới với tính cách vô cùng điềm tĩnh và thân thiện với các loài vật khác.",
    habit:
      "Sống thành đàn gần các nguồn nước. Chúng là những tay bơi lội tài ba với các ngón chân có màng bán phần.",
    fact: "Chuột lang nước được mệnh danh là 'cái ghế của thiên nhiên' vì các loài chim, khỉ và thậm chí cả cá sấu thường xuyên ngồi lên lưng chúng.",
    nhom: "thu",
  },
  {
    name: "Lạc đà Llama (Llama)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/lac-da-llama.jpg",
    audio: "./audio/Llama.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài thú móng guốc đặc trưng của dãy núi Andes. Chúng có bộ lông dày ấm áp và đôi tai hình lưỡi liềm đặc trưng.",
    habit:
      "Sống ở độ cao lớn, chịu đựng được không khí loãng. Chúng rất thông minh và thường được dùng để canh gác đàn gia súc.",
    fact: "Khi bị đe dọa hoặc tức giận, Llama sẽ phun nước bọt (thực chất là dịch dạ dày) vào đối phương với độ chính xác cực cao.",
    nhom: "thu",
  },
  {
    name: "Thú ăn kiến khổng lồ (Giant Anteater)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/thu-an-kien.jpg",
    audio: "./audio/Giant Anteater.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài thú kỳ lạ không có răng nhưng sở hữu chiếc mõm dài như một chiếc ống hút và bộ móng vuốt sắc lẹm.",
    habit:
      "Dùng móng vuốt phá vỡ các tổ mối cứng chắc và dùng chiếc lưỡi dài đầy chất dính để bắt hàng ngàn con kiến mỗi ngày.",
    fact: "Lưỡi của thú ăn kiến có thể dài tới 60cm và có thể thò ra thụt vào tới 150 lần mỗi phút.",
    nhom: "thu",
  },
  {
    name: "Cá heo hồng Amazon (Pink River Dolphin)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/ca-heo-song.webp",
    audio: "./audio/Pink River Dolphin.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài cá heo nước ngọt lớn nhất thế giới với màu da hồng tự nhiên vô cùng độc đáo.",
    habit:
      "Sống trong các hệ thống sông ngòi phức tạp của Amazon. Chúng có các đốt sống cổ linh hoạt giúp xoay đầu 90 độ để len lỏi qua các thân cây ngập nước.",
    fact: "Màu hồng của chúng đậm dần theo độ tuổi và mức độ hoạt động, con đực thường có màu hồng rực rỡ hơn con cái.",
    nhom: "thu",
  },

  // --- NHÓM CHIM (CHIM) ---
  {
    name: "Chim Toucan (Toco Toucan)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/chim-toucan.jpg",
    audio: "./audio/Toco Toucan.mp4",
    status: "LC - Ít lo ngại",
    desc: "Gây ấn tượng với chiếc mỏ khổng lồ màu cam rực rỡ, chiếm tới 1/3 chiều dài cơ thể nhưng lại rất nhẹ vì cấu trúc rỗng.",
    habit:
      "Sống trong các hốc cây già. Chúng dùng mỏ để hái quả và cũng là công cụ để điều hòa nhiệt độ cơ thể.",
    fact: "Dù mỏ rất lớn nhưng Toucan chủ yếu ăn trái cây nhỏ, chúng tung trái cây lên không trung rồi khéo léo đớp lấy.",
    nhom: "chim",
  },
  {
    name: "Vẹt đuôi dài Macaw (Scarlet Macaw)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/vet-macaw.jpg",
    audio: "./audio/Scarlet Macaw.mp3",
    status: "LC - Ít lo ngại",
    desc: "Một trong những loài vẹt sặc sỡ và thông minh nhất thế giới với bộ lông đỏ, vàng và xanh lam rực rỡ.",
    habit:
      "Sống theo cặp đôi trung thành suốt đời. Chúng thường tập trung tại các vách đất sét để ăn đất giúp giải độc từ các loại quả rừng.",
    fact: "Vẹt Macaw có chiếc mỏ cực khỏe, có thể nghiền nát những loại hạt cứng nhất như hạt dẻ Brazil.",
    nhom: "chim",
  },
  {
    name: "Thần ưng Andes (Andean Condor)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/than-ưng.jpg",
    audio: "./audio/Andean Condor.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài chim săn mồi lớn nhất thế giới với sải cánh khổng lồ lên tới 3.3 mét. Chúng là biểu tượng của sự tự do trên dãy Andes.",
    habit:
      "Chủ yếu ăn xác thối. Chúng có thể bay lượn hàng giờ đồng hồ trên bầu trời mà không cần đập cánh nhờ tận dụng các luồng khí nóng.",
    fact: "Thần ưng Andes có thể sống tới 70 năm, là một trong những loài chim có tuổi thọ cao nhất thế giới.",
    nhom: "chim",
  },

  // --- NHÓM BÒ SÁT (BO-SAT) ---
  {
    name: "Trăn Anaconda xanh (Green Anaconda)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/anaconda.jpg",
    audio: "./audio/Green Anaconda.mp4",
    status: "LC - Ít lo ngại",
    desc: "Loài trăn nặng nhất thế giới. Chúng có thân hình khổng lồ và sức mạnh siết mồi đáng sợ dưới làn nước Amazon.",
    habit:
      "Dành phần lớn thời gian dưới nước để rình rập con mồi. Chúng có thể hạ gục cả cá sấu Caiman hay lợn rừng.",
    fact: "Mắt và lỗ mũi của Anaconda nằm ở đỉnh đầu, cho phép chúng thở và quan sát trong khi phần lớn cơ thể chìm dưới nước.",
    nhom: "bo-sat",
  },
  {
    name: "Cá sấu Caiman đen (Black Caiman)",
    c: "Nam Mỹ",
    img: "./image/nam mỹ/ca-sau-caiman.jpg",
    audio: "./audio/Black Caiman.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài cá sấu lớn nhất vùng Amazon với bộ da màu đen sẫm giúp chúng ngụy trang hoàn hảo và hấp thụ nhiệt tốt hơn.",
    habit:
      "Là kẻ săn mồi thượng đẳng trong các dòng sông. Chúng hoạt động mạnh nhất vào ban đêm.",
    fact: "Cá sấu Caiman đen đóng vai trò cực kỳ quan trọng trong việc cân bằng dân số các loài cá trong hệ sinh thái sông.",
    nhom: "bo-sat",
  },

  /* ================= DANH SÁCH ĐỘNG VẬT CHÂU ÂU (CHAU AU) ================= */

  // --- NHÓM THÚ (THU) ---
  {
    name: "Bò Wisent (European Bison)",
    c: "Châu Âu",
    img: "./image/châu âu/bo-wisent.jpg",
    audio: "./audio/European Bison.mp4",
    status: "NT - Sắp bị đe dọa",
    desc: "Loài động vật trên cạn lớn nhất và nặng nhất Châu Âu. Chúng từng gần như tuyệt chủng nhưng đã được phục hồi thành công trong các khu rừng già Ba Lan.",
    habit:
      "Sống trong các khu rừng lá rộng và rừng hỗn hợp. Chúng là loài ăn cỏ hiền lành nhưng có sức mạnh đáng kinh ngạc.",
    fact: "Bò Wisent là một trong những biểu tượng quốc gia của Ba Lan và Belarus, đại diện cho sức mạnh bảo tồn thiên nhiên.",
    nhom: "thu",
  },
  {
    name: "Linh miêu Á-Âu (Eurasian Lynx)",
    c: "Châu Âu",
    img: "./image/châu âu/linh-mieu-au.jpg",
    audio: "./audio/Eurasian Lynx.mp4",
    status: "LC - Ít lo ngại",
    desc: "Loài mèo hoang lớn nhất Châu Âu với đôi tai có chỏm lông đen đặc trưng và bộ lông đốm giúp ngụy trang hoàn hảo.",
    habit:
      "Là những tay săn mồi đơn độc và bí ẩn trong rừng rậm. Chúng có thính giác cực nhạy, có thể nghe thấy tiếng chuột từ khoảng cách 60 mét.",
    fact: "Bàn chân của linh miêu rất rộng và có nhiều lông, đóng vai trò như một chiếc giày đi tuyết tự nhiên giúp chúng không bị lún khi săn mồi.",
    nhom: "thu",
  },
  {
    name: "Gấu nâu (Brown Bear)",
    c: "Châu Âu",
    img: "./image/châu âu/gau-nau.jpg",
    audio: "./audio/Brown Bear.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài thú ăn thịt lớn nhất lục địa già, phân bố chủ yếu ở Bắc Âu và dãy núi Alps. Chúng có một cái bướu cơ bắp trên vai giúp tạo lực đào bới.",
    habit:
      "Ăn tạp, từ trái cây nhiệt đới đến các loài thú nhỏ và cá. Gấu nâu Châu Âu thường ngủ đông trong các hang hốc tự nhiên suốt 6 tháng.",
    fact: "Dù có vẻ ngoài nặng nề, gấu nâu có thể chạy với tốc độ lên tới 50km/h, nhanh hơn cả các vận động viên điền kinh thế giới.",
    nhom: "thu",
  },
  {
    name: "Dê núi Alpine (Alpine Ibex)",
    c: "Châu Âu",
    img: "./image/châu âu/de-nui.jpg",
    audio: "./audio/Alpine Ibex.mp3",
    status: "LC - Ít lo ngại",
    desc: "Bậc thầy leo trèo trên các vách đá dựng đứng của dãy Alps. Con đực sở hữu cặp sừng cong dài và chắc khỏe vô cùng ấn tượng.",
    habit:
      "Sống ở độ cao từ 2.000 đến 4.600 mét, nơi có địa hình hiểm trở nhất để tránh các loài thú săn mồi.",
    fact: "Dê núi Alpine có khả năng leo lên những vách đập nước gần như thẳng đứng chỉ để liếm các khoáng chất bám trên đá.",
    nhom: "thu",
  },
  {
    name: "Hươu đỏ (Red Deer)",
    c: "Châu Âu",
    img: "./image/châu âu/huou-do.jpg",
    audio: "./audio/Red Deer.mp3",
    status: "LC - Ít lo ngại",
    desc: "Một trong những loài hươu lớn nhất thế giới, biểu tượng cho sự quý tộc và hoang dã của các khu rừng Châu Âu.",
    habit:
      "Sống theo đàn và nổi tiếng với những cuộc giao đấu bằng sừng nảy lửa giữa các con đực vào mùa sinh sản.",
    fact: "Gạc hươu đỏ được cấu tạo từ xương và rụng đi mỗi năm một lần, sau đó mọc lại lớn hơn và nhiều nhánh hơn.",
    nhom: "thu",
  },
  {
    name: "Nhím gai Châu Âu (European Hedgehog)",
    c: "Châu Âu",
    img: "./image/châu âu/nhim-gai.jpg",
    audio: "./audio/European Hedgehog.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài vật nhỏ bé quen thuộc trong các khu vườn và rừng thưa Châu Âu với lớp 'áo giáp' gồm hàng ngàn chiếc gai sắc nhọn.",
    habit:
      "Hoạt động về đêm, chúng dùng chiếc mũi thính nhạy để tìm kiếm côn trùng, sâu và ốc sên.",
    fact: "Khi gặp nguy hiểm, nhím sẽ cuộn tròn thành một quả cầu gai khiến kẻ thù không thể tấn công được vào phần bụng mềm.",
    nhom: "thu",
  },

  // --- NHÓM CHIM (CHIM) ---
  {
    name: "Hải âu rụt cổ / Vẹt biển (Atlantic Puffin)",
    c: "Châu Âu",
    img: "./image/châu âu/vet-bien.jpg",
    audio: "./audio/Atlantic Puffin.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Loài chim biển cực kỳ đáng yêu với chiếc mỏ rực rỡ sắc màu, thường được gọi là 'chú hề của đại dương'.",
    habit:
      "Dành phần lớn thời gian ở ngoài khơi và chỉ lên các vách đá ven biển Bắc Âu để làm tổ vào mùa hè.",
    fact: "Chiếc mỏ của chúng chỉ rực rỡ sắc màu vào mùa sinh sản, sau đó sẽ rụng lớp vỏ màu và trở nên xám xịt hơn vào mùa đông.",
    nhom: "chim",
  },
  {
    name: "Đại bàng vàng (Golden Eagle)",
    c: "Châu Âu",
    img: "./image/châu âu/dai-bang-vang.jpg",
    audio: "./audio/Golden Eagle.mp3",
    status: "LC - Ít lo ngại",
    desc: "Một trong những loài chim săn mồi mạnh mẽ và oai vệ nhất, thường được tìm thấy trên các vùng núi cao Châu Âu.",
    habit:
      "Chúng có tầm nhìn cực xa, có thể phát hiện một con thỏ từ khoảng cách 3km trong khi đang bay lượn trên bầu trời.",
    fact: "Đại bàng vàng là những phi công tài ba, chúng có thể lao xuống mục tiêu với tốc độ lên tới 240-320km/h.",
    nhom: "chim",
  },

  // --- NHÓM LƯỠNG CƯ (LUONG-CU) ---
  {
    name: "Kỳ giông lửa (Fire Salamander)",
    c: "Châu Âu",
    img: "./image/châu âu/ky-giong-lua.jpg",
    audio: "./audio/Fire Salamander.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài lưỡng cư có vẻ ngoài nổi bật với những vệt màu vàng rực rỡ trên nền da đen tuyền, một lời cảnh báo về chất độc.",
    habit:
      "Sống trong các khu rừng ẩm ướt và ẩn nấp dưới lá rụng hoặc khe đá vào ban ngày.",
    fact: "Kỳ giông lửa có tuổi thọ rất cao, một cá thể sống trong môi trường nuôi nhốt được ghi nhận đã sống tới 50 năm.",
    nhom: "luong-cu",
  },

  /* ================= DANH SÁCH ĐỘNG VẬT CHÂU ÚC (CHAU UC) ================= */

  // --- NHÓM THÚ (THU) ---
  {
    name: "Gấu Koala (Koala)",
    c: "Châu Úc",
    img: "./image/châu úc/koala.jpg",
    audio: "./audio/Koala.mp3",
    status: "VU - Sắp nguy cấp",
    desc: "Biểu tượng đáng yêu của nước Úc. Koala thực chất không phải là gấu mà là một loài thú có túi sống trên cây.",
    habit:
      "Chúng cực kỳ kén ăn, chỉ ăn lá của một vài loài cây bạch đàn nhất định. Koala ngủ tới 20 giờ mỗi ngày để tiết kiệm năng lượng.",
    fact: "Koala hầu như không bao giờ uống nước; chúng lấy toàn bộ lượng nước cần thiết từ việc ăn lá cây bạch đàn.",
    nhom: "thu",
  },
  {
    name: "Thú mỏ vịt (Platypus)",
    c: "Châu Úc",
    img: "./image/châu úc/thu-mo-vit.jpg",
    audio: "./audio/Platypus.mp3",
    status: "NT - Sắp bị đe dọa",
    desc: "Loài động vật kỳ lạ bậc nhất thế giới với mỏ như vịt, đuôi như hải ly và chân có màng nhưng lại có lông thú.",
    habit:
      "Là loài thú đơn huyệt (đẻ trứng nhưng nuôi con bằng sữa). Chúng săn tìm mồi dưới đáy sông bằng cách cảm nhận điện trường.",
    fact: "Thú mỏ vịt đực có một chiếc cựa ở chân sau có chứa nọc độc đủ để gây đau đớn dữ dội cho con người.",
    nhom: "thu",
  },
  {
    name: "Quỷ Tasmania (Tasmanian Devil)",
    c: "Châu Úc",
    img: "./image/châu úc/quy-tasmania.webp",
    audio: "./audio/Tasmanian Devil.mp3",
    status: "EN - Nguy cấp",
    desc: "Loài thú có túi ăn thịt lớn nhất thế giới hiện nay, chỉ còn tìm thấy trên đảo Tasmania. Chúng có bộ hàm cực khỏe.",
    habit:
      "Nổi tiếng với tính cách hung dữ, thường phát ra những tiếng gào rú rùng rợn khi tranh giành xác thối với nhau.",
    fact: "Quỷ Tasmania sở hữu lực cắn mạnh nhất tính theo tỷ lệ kích thước cơ thể trong số các loài thú có vú trên cạn.",
    nhom: "thu",
  },
  {
    name: "Chuột túi Quokka (Quokka)",
    c: "Châu Úc",
    img: "./image/châu úc/quokka.jpg",
    audio: "./audio/Quokka.mp4",
    status: "VU - Sắp nguy cấp",
    desc: "Được mệnh danh là 'loài vật hạnh phúc nhất thế giới' nhờ khuôn mặt luôn trông như đang mỉm cười thân thiện.",
    habit:
      "Sống chủ yếu trên đảo Rottnest. Chúng rất tò mò, không sợ con người và thường 'tự sướng' cùng khách du lịch.",
    fact: "Dù trông nhỏ nhắn, Quokka có thể leo lên cây cao tới 2 mét để tìm kiếm thức ăn là lá và quả cây.",
    nhom: "thu",
  },
  {
    name: "Gấu túi Wombat (Wombat)",
    c: "Châu Úc",
    img: "./image/châu úc/wombat.jpg",
    audio: "./audio/Wombat.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài thú có túi trông giống như một chú lợn nhỏ béo múp míp với đôi chân ngắn và chiếc mũi lớn.",
    habit:
      "Là những chuyên gia đào hang chuyên nghiệp. Hang của chúng có thể tạo thành một hệ thống đường hầm phức tạp dưới lòng đất.",
    fact: "Wombat là loài động vật duy nhất trên thế giới có chất thải (phân) hình khối lập phương hoàn hảo.",
    nhom: "thu",
  },
  {
    name: "Thú lông nhím (Echidna)",
    c: "Châu Úc",
    img: "./image/châu úc/thu-long-nhim.jpg",
    audio: "./audio/Echidna.mp3",
    status: "LC - Ít lo ngại",
    desc: "Giống như thú mỏ vịt, đây là loài thú đẻ trứng hiếm hoi. Cơ thể chúng được bao phủ bởi những chiếc gai sắc nhọn để tự vệ.",
    habit:
      "Chúng có chiếc lưỡi dài và dính để bắt kiến và mối, tương tự như loài thú ăn kiến.",
    fact: "Khi gặp nguy hiểm, thú lông nhím sẽ cuộn tròn lại hoặc đào đất thật nhanh để che giấu phần bụng mềm yếu dưới lòng đất.",
    nhom: "thu",
  },

  // --- NHÓM CHIM (CHIM) ---
  {
    name: "Chim Đà điểu Châu Úc (Emu)",
    c: "Châu Úc",
    img: "./image/châu úc/emu.jpg",
    audio: "./audio/Emu.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài chim lớn thứ hai thế giới sau đà điểu châu Phi. Chúng có đôi chân cực khỏe giúp chạy với tốc độ lên tới 50km/h.",
    habit:
      "Sống tại các vùng thảo nguyên và rừng thưa. Chúng có thể di chuyển những quãng đường rất dài để tìm thức ăn.",
    fact: "Chim Emu không thể đi giật lùi, điều này khiến chúng trở thành biểu tượng cho sự tiến lên không ngừng của nước Úc.",
    nhom: "chim",
  },
  {
    name: "Chim bói cá Kookaburra (Laughing Kookaburra)",
    c: "Châu Úc",
    img: "./image/châu úc/kookaburra.jpg",
    audio: "./audio/Laughing Kookaburra.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài chim nổi tiếng nhất Châu Úc với tiếng kêu nghe hệt như tiếng cười sảng khoái của con người.",
    habit:
      "Tiếng cười của chúng thường vang lên vào lúc bình minh hoặc hoàng hôn để đánh dấu lãnh thổ của gia đình.",
    fact: "Dù thuộc họ bói cá nhưng Kookaburra lại sống trên cạn và săn mồi là rắn, thằn lằn hoặc côn trùng lớn thay vì cá.",
    nhom: "chim",
  },

  // --- NHÓM BÒ SÁT (BO-SAT) ---
  {
    name: "Rồng râu (Bearded Dragon)",
    c: "Châu Úc",
    img: "./image/châu úc/rong-rau.jpg",
    audio: "./audio/Bearded Dragon.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài thằn lằn có phần gai bao quanh cổ trông giống như một chùm râu lớn khi chúng phình to để đe dọa kẻ thù.",
    habit:
      "Sống tại các vùng bán sa mạc và rừng thưa. Chúng rất giỏi ngụy trang giữa các vách đá và cành cây khô.",
    fact: "Rồng râu thường 'vẫy tay' (nâng một chân trước lên) để giao tiếp và thể hiện sự phục tùng với những cá thể lớn hơn.",
    nhom: "bo-sat",
  },

  /* ================= DANH SÁCH ĐỘNG VẬT NAM CỰC (CHAU NAM CỰC) ================= */

  // --- NHÓM CHIM (CHIM) ---
  {
    name: "Chim cánh cụt Hoàng đế (Emperor Penguin)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/canh-cut-hoang-de.jpg",
    audio: "./audio/Emperor Penguin.mp3",
    status: "NT - Sắp bị đe dọa",
    desc: "Loài chim cánh cụt lớn nhất và nặng nhất thế giới. Chúng là biểu tượng sống động nhất của vùng băng giá Nam Cực.",
    habit:
      "Chúng là loài duy nhất sinh sản vào giữa mùa đông Nam Cực. Con đực sẽ ấp trứng trên chân mình dưới lớp mỡ bụng suốt 2 tháng mà không ăn gì.",
    fact: "Cánh cụt Hoàng đế có thể lặn xuống độ cao 535 mét dưới mặt nước biển và nhịn thở được tới 18 phút.",
    nhom: "chim",
  },
  {
    name: "Chim cánh cụt Adélie (Adélie Penguin)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/canh-cut-adelie.jpg",
    audio: "./audio/Adélie Penguin.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài cánh cụt nhỏ nhắn với 'vòng tròn' trắng quanh mắt đặc trưng. Chúng rất tinh nghịch và đôi khi khá hung hăng bảo vệ tổ.",
    habit:
      "Sống thành những thuộc địa khổng lồ lên tới hàng trăm ngàn con. Chúng xây tổ bằng cách thu thập những viên đá nhỏ.",
    fact: "Cánh cụt Adélie nổi tiếng với việc 'ăn trộm' đá từ tổ của hàng xóm để bồi đắp cho tổ của mình.",
    nhom: "chim",
  },
  {
    name: "Chim đại hải âu Nam Cực (South Polar Skua)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/chim-skua.jpg",
    audio: "./audio/South Polar Skua.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài chim săn mồi cơ hội và mạnh mẽ của vùng cực. Chúng có sải cánh rộng và khả năng bay lượn bền bỉ trong bão tuyết.",
    habit:
      "Chúng thường ăn cá, nhưng cũng nổi tiếng với việc cướp thức ăn từ các loài chim khác và ăn trộm trứng chim cánh cụt.",
    fact: "Skua là loài chim bay xa nhất, chúng thường xuyên thực hiện các chuyến bay xuyên lục địa từ cực này sang cực kia.",
    nhom: "chim",
  },

  // --- NHÓM THÚ (THU) ---
  {
    name: "Cá voi xanh (Blue Whale)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/ca-voi-xanh.jpg",
    audio: "./audio/Blue Whale.mp3",
    status: "EN - Nguy cấp",
    desc: "Động vật lớn nhất từng tồn tại trên Trái Đất. Trái tim của nó to bằng một chiếc xe hơi và lưỡi của nó nặng bằng một con voi.",
    habit:
      "Vào mùa hè, chúng di cư tới vùng biển Nam Cực để ăn hàng tấn loài nhuyễn thể (krill) mỗi ngày nhằm tích trữ năng lượng.",
    fact: "Tiếng gọi của cá voi xanh có thể đạt mức 188 decibel, to hơn cả động cơ máy bay phản lực và có thể nghe thấy từ khoảng cách 1.600km.",
    nhom: "thu",
  },
  {
    name: "Cá voi sát thủ (Orca/Killer Whale)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/ca-voi-sat-thu.jpg",
    audio: "./audio/Killer Whale.mp3",
    status: "DD - Thiếu dữ liệu",
    desc: "Kẻ săn mồi đỉnh cao của đại dương với trí thông minh vượt trội và khả năng phối hợp săn mồi theo bầy đàn cực kỳ điệu nghệ.",
    habit:
      "Ở Nam Cực, chúng thường phối hợp tạo ra những đợt sóng lớn để hất văng hải cẩu từ các tảng băng trôi xuống nước.",
    fact: "Mỗi đàn Orca có một 'ngôn ngữ' giao tiếp và các chiến thuật săn mồi riêng biệt được truyền dạy qua nhiều thế hệ.",
    nhom: "thu",
  },
  {
    name: "Hải cẩu báo (Leopard Seal)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/bao-bien.png",
    audio: "./audio/Leopard Seal.mp3",
    status: "LC - Ít lo ngại",
    desc: "Kẻ săn mồi hung dữ thứ hai ở Nam Cực (sau cá voi sát thủ). Chúng có thân hình thuôn dài và những đốm đen giống như loài báo trên cạn.",
    habit:
      "Thức ăn ưa thích của chúng là chim cánh cụt. Báo biển có đôi mắt rất tinh tường và hàm răng sắc nhọn để xé xác con mồi dưới nước.",
    fact: "Dù là kẻ săn mồi đáng sợ, báo biển đôi khi rất tò mò và đã từng có trường hợp chúng cố gắng 'mớm thức ăn' cho các nhà nhiếp ảnh dưới nước.",
    nhom: "thu",
  },
  {
    name: "Hải tượng phương Nam (Southern Elephant Seal)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/hai-tuong.jpg",
    audio: "./audio/Southern Elephant Seal.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài hải cẩu lớn nhất thế giới. Con đực có chiếc mũi to như vòi voi, dùng để tạo ra tiếng gầm vang dội nhằm khẳng định lãnh thổ.",
    habit:
      "Chúng dành phần lớn thời gian dưới biển sâu để săn cá và mực. Hải tượng có thể lặn sâu tới 2.000 mét.",
    fact: "Vào mùa sinh sản, các con đực sẽ có những trận chiến đẫm máu để tranh giành quyền làm chủ một 'hậu cung' gồm hàng chục con cái.",
    nhom: "thu",
  },
  {
    name: "Hải cẩu Weddell (Weddell Seal)",
    c: "Châu Nam Cực",
    img: "./image/châu nam cực/hai-cau-weddell.webp",
    audio: "./audio/Weddell Seal.mp3",
    status: "LC - Ít lo ngại",
    desc: "Loài thú có vú sống ở vùng vĩ độ Nam xa nhất. Chúng có vẻ ngoài 'mũm mĩm' và gương mặt trông như đang mỉm cười.",
    habit:
      "Chúng thường dùng răng để bào băng, tạo ra các lỗ thở trên mặt nước bị đóng băng để có thể lấy oxy khi đang lặn.",
    fact: "Hải cẩu Weddell giao tiếp dưới nước bằng những âm thanh siêu âm kỳ lạ nghe như tiếng sóng vô tuyến hay tiếng chim hót.",
    nhom: "thu",
  },
];

const list = document.getElementById("list");
const modal = document.getElementById("animalModal");
const modalContent = document.querySelector(".modal-content");
const searchInput = document.getElementById("search");
const buttons = document.querySelectorAll(".pill");
const classTabs = document.querySelectorAll(".tab");
const indicator = document.getElementById("indicator");
const soundBtn = document.getElementById("soundBtn");
const navPrevBtn = document.getElementById("navPrevBtn");
const navNextBtn = document.getElementById("navNextBtn");

// Biến global để theo dõi danh sách động vật hiện tại và chỉ số hiện tại
let currentFilteredList = [];
let currentAnimalIndex = -1;
const authOpenBtn = document.getElementById("authOpenBtn");
const authPanel = document.getElementById("authPanel");
const authTitle = document.getElementById("authTitle");
const authUsername = document.getElementById("authUsername");
const authPassword = document.getElementById("authPassword");
const authMessage = document.getElementById("authMessage");
const authSubmitBtn = document.getElementById("authSubmitBtn");
const authSwitchBtn = document.getElementById("authSwitchBtn");
const authCloseBtn = document.getElementById("authCloseBtn");
const userMenu = document.getElementById("userMenu");
const userChip = document.getElementById("userChip");
const logoutBtn = document.getElementById("logoutBtn");
let currentAnimal = null;
let audioContext = null;
let currentAudio = null;
let authMode = "login";

const continentDetails = {
  "Châu Á": {
    range: "Châu Á",
    dot: [72, 46],
    habitat: "Rừng nhiệt đới / núi cao",
  },
  "Châu Phi": {
    range: "Châu Phi",
    dot: [51, 58],
    habitat: "Xa van / rừng thưa",
  },
  "Bắc Mỹ": { range: "Bắc Mỹ", dot: [24, 38], habitat: "Đồng cỏ / rừng lạnh" },
  "Nam Mỹ": { range: "Nam Mỹ", dot: [35, 67], habitat: "Amazon / đầm lầy" },
  "Châu Âu": { range: "Châu Âu", dot: [49, 35], habitat: "Rừng ôn đới / núi" },
  "Châu Úc": {
    range: "Châu Úc",
    dot: [78, 71],
    habitat: "Thảo nguyên / rừng bạch đàn",
  },
  "Châu Nam Cực": {
    range: "Nam Cực",
    dot: [54, 86],
    habitat: "Băng biển / đại dương lạnh",
  },
};

const groupDetails = {
  thu: {
    weight: "5 - 6.000 kg",
    lifespan: "10 - 70 năm",
    audio: "",
    sound: "growl",
  },
  "linh-truong": {
    weight: "4 - 100 kg",
    lifespan: "20 - 50 năm",
    audio: "",
    sound: "growl",
  },
  "bo-sat": {
    weight: "1 - 1.000 kg",
    lifespan: "20 - 80 năm",
    audio: "",
    sound: "hiss",
  },
  "luong-cu": {
    weight: "5 g - 3 kg",
    lifespan: "3 - 15 năm",
    audio: "",
    sound: "bird",
  },
  chim: {
    weight: "50 g - 15 kg",
    lifespan: "5 - 60 năm",
    audio: "",
    sound: "bird",
  },
};

const speciesDetails = [
  // ================= CHÂU MỸ & CHÂU ÂU =================
  {
    key: "American Bison",
    weight: "400 - 1.000 kg",
    lifespan: "15 - 20 năm",
    habitat: "Đồng cỏ, thảo nguyên mở",
    range: "Bắc Mỹ",
    mapNote: "Phân bố rộng ở các khu bảo tồn Bắc Mỹ.",
    dot: [24, 38],
  },
  {
    key: "Jaguar",
    weight: "56 - 96 kg",
    lifespan: "12 - 15 năm",
    habitat: "Rừng mưa nhiệt đới, đầm lầy",
    range: "Nam Mỹ",
    mapNote: "Tập trung nhiều nhất ở lưu vực sông Amazon.",
    dot: [35, 67],
  },
  {
    key: "Polar Bear",
    weight: "350 - 700 kg",
    lifespan: "25 - 30 năm",
    habitat: "Băng Bắc Cực, vùng lãnh nguyên",
    range: "Vòng Cực Bắc",
    mapNote: "Sống trên các tảng băng trôi trên đại dương Bắc Cực.",
    dot: [24, 25],
  },
  {
    key: "Gray Wolf",
    weight: "30 - 80 kg",
    lifespan: "6 - 8 năm",
    habitat: "Rừng ôn đới, thảo nguyên",
    range: "Bắc Mỹ, Châu Âu, Bắc Á",
    mapNote: "Phân bố rộng tại hoang dã Bắc Mỹ và Âu Á.",
    dot: [49, 35],
  },
  {
    key: "Poison Dart Frog",
    weight: "2 - 30 gram",
    lifespan: "3 - 15 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Nam Mỹ",
    mapNote: "Ếch sặc sỡ và nguy hiểm sống tại rừng Amazon.",
    dot: [34, 63],
  },
  {
    key: "Scarlet Macaw",
    weight: "1 - 1.2 kg",
    lifespan: "40 - 50 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Trung và Nam Mỹ",
    mapNote: "Sinh sống ở lưu vực sông Amazon.",
    dot: [32, 62],
  },
  {
    key: "Andean Condor",
    weight: "8 - 15 kg",
    lifespan: "50 - 70 năm",
    habitat: "Vùng núi cao, vách đá",
    range: "Nam Mỹ (Dãy Andes)",
    mapNote: "Loài chim bay lớn nhất thế giới ở dãy núi Andes.",
    dot: [30, 75],
  },
  {
    key: "Alpine Ibex",
    weight: "65 - 120 kg",
    lifespan: "10 - 14 năm",
    habitat: "Núi đá cao",
    range: "Châu Âu (Dãy Alps)",
    mapNote: "Sống ở độ cao từ 2.000 đến 4.600 mét trên dãy Alps.",
    dot: [49, 35],
  },
  {
    key: "Red Deer",
    weight: "160 - 240 kg",
    lifespan: "10 - 15 năm",
    habitat: "Rừng lá rộng, đồng cỏ",
    range: "Châu Âu",
    mapNote: "Phân bố rộng khắp các khu rừng tại Châu Âu.",
    dot: [48, 33],
  },
  {
    key: "European Hedgehog",
    weight: "0.6 - 1.2 kg",
    lifespan: "2 - 5 năm",
    habitat: "Rừng thưa, đồng cỏ, khu dân cư",
    range: "Châu Âu",
    mapNote: "Loài nhím phổ biến ở các vùng đồng quê Châu Âu.",
    dot: [47, 32],
  },
  {
    key: "Atlantic Puffin",
    weight: "0.4 - 0.5 kg",
    lifespan: "20 năm",
    habitat: "Đại dương mở, vách đá ven biển",
    range: "Bắc Đại Tây Dương, Bắc Âu",
    mapNote: "Chú hề đại dương làm tổ ở các vách đá Iceland và Bắc Âu.",
    dot: [43, 25],
  },
  {
    key: "Golden Eagle",
    weight: "3.6 - 6.7 kg",
    lifespan: "15 - 20 năm",
    habitat: "Đồi núi, thảo nguyên mở",
    range: "Bắc Bán Cầu",
    mapNote: "Loài chim săn mồi oai vệ thường thấy trên các dãy núi Châu Âu.",
    dot: [50, 34],
  },
  {
    key: "Bobcat",
    weight: "8 - 15 kg",
    lifespan: "7 - 10 năm",
    habitat: "Rừng, bụi rậm, bán sa mạc",
    range: "Bắc Mỹ",
    mapNote: "Loài linh miêu phổ biến phân bố rộng khắp lãnh thổ Hoa Kỳ.",
    dot: [24, 38],
  },
  {
    key: "Arctic Fox",
    weight: "3 - 8 kg",
    lifespan: "3 - 6 năm",
    habitat: "Lãnh nguyên Bắc Cực",
    range: "Bắc Cực",
    mapNote: "Chịu đựng được nhiệt độ thấp tới -50°C.",
    dot: [24, 25],
  },
  {
    key: "Grizzly Bear",
    weight: "130 - 360 kg",
    lifespan: "20 - 25 năm",
    habitat: "Rừng rậm, đồi núi",
    range: "Bắc Mỹ",
    mapNote: "Loài gấu lớn thống trị vùng hoang dã Bắc Mỹ.",
    dot: [21, 35],
  },
  {
    key: "American Black Bear",
    weight: "90 - 250 kg",
    lifespan: "20 năm",
    habitat: "Rừng lá rộng",
    range: "Bắc Mỹ",
    mapNote: "Loài gấu phổ biến sống trong các khu rừng Bắc Mỹ.",
    dot: [25, 38],
  },
  {
    key: "Moose",
    weight: "380 - 700 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng thông, đầm lầy",
    range: "Bắc Mỹ, Châu Âu",
    mapNote: "Thích sống gần các khu vực có nguồn nước và hồ lạnh giá.",
    dot: [26, 30],
  },
  {
    key: "Cougar/Puma",
    weight: "53 - 100 kg",
    lifespan: "8 - 13 năm",
    habitat: "Rừng, đầm lầy, đồi núi",
    range: "Châu Mỹ",
    mapNote: "Trải dài từ Bắc Mỹ xuống tận mũi Nam Mỹ.",
    dot: [28, 45],
  },
  {
    key: "Wolverine",
    weight: "9 - 18 kg",
    lifespan: "7 - 12 năm",
    habitat: "Rừng taiga, đài nguyên",
    range: "Vòng Bắc Cực",
    mapNote: "Loài chồn lớn đơn độc sống ở những vùng lạnh giá nhất.",
    dot: [25, 25],
  },

  {
    key: "Muskox",
    weight: "180 - 410 kg",
    lifespan: "12 - 20 năm",
    habitat: "Vùng cực, lãnh nguyên",
    range: "Bắc Cực (Bắc Mỹ, Greenland)",
    mapNote:
      "Bộ lông siêu dày giúp chúng chống chọi với cái lạnh thấu xương của Bắc Cực.",
    dot: [20, 25],
  },
  {
    key: "Raccoon",
    weight: "5 - 12 kg",
    lifespan: "2 - 3 năm (trong tự nhiên)",
    habitat: "Rừng, vùng đô thị",
    range: "Bắc và Trung Mỹ",
    mapNote:
      "Gấu mèo nổi tiếng với đôi bàn tay khéo léo và 'chiếc mặt nạ' đen quanh mắt.",
    dot: [26, 38],
  },
  {
    key: "Beaver",
    weight: "11 - 30 kg",
    lifespan: "10 - 15 năm",
    habitat: "Sông, suối, hồ",
    range: "Bắc Mỹ",
    mapNote:
      "Kỹ sư sinh thái tài ba, chuyên xây đập tạo ra các vùng ngập nước.",
    dot: [24, 35],
  },
  {
    key: "Caribou",
    weight: "80 - 180 kg",
    lifespan: "15 năm",
    habitat: "Lãnh nguyên, rừng taiga",
    range: "Bắc Mỹ",
    mapNote:
      "Thực hiện những cuộc di cư vĩ đại hàng ngàn km khắp các đồng rêu phương Bắc.",
    dot: [22, 28],
  },
  {
    key: "Red Fox",
    weight: "3 - 11 kg",
    lifespan: "3 - 5 năm",
    habitat: "Rừng, thảo nguyên, khu dân cư",
    range: "Bắc Mỹ, Châu Âu, Châu Á",
    mapNote:
      "Loài cáo cực kỳ thông minh, linh hoạt và có vùng phân bố rộng nhất.",
    dot: [26, 38],
  },
  {
    key: "Gray Squirrel",
    weight: "0.4 - 0.6 kg",
    lifespan: "10 - 12 năm",
    habitat: "Rừng, công viên thành phố",
    range: "Bắc Mỹ",
    mapNote:
      "Loài sóc quen thuộc thường cất giấu hàng ngàn hạt dẻ để dự trữ cho mùa đông.",
    dot: [28, 40],
  },
  {
    key: "Bald Eagle",
    weight: "3 - 6.3 kg",
    lifespan: "20 - 30 năm",
    habitat: "Ven biển, hồ lớn, sông ngòi",
    range: "Bắc Mỹ",
    mapNote: "Quốc điểu của Hoa Kỳ, săn cá bằng những cú bổ nhào dũng mãnh.",
    dot: [25, 35],
  },
  {
    key: "Wild Turkey",
    weight: "5 - 11 kg",
    lifespan: "3 - 5 năm",
    habitat: "Rừng thưa, đồng cỏ mở",
    range: "Bắc Mỹ",
    mapNote:
      "Loài chim lớn bản địa của Bắc Mỹ, con đực xòe đuôi lớn để tán tỉnh con cái.",
    dot: [28, 38],
  },
  {
    key: "American Alligator",
    weight: "200 - 450 kg",
    lifespan: "35 - 50 năm",
    habitat: "Đầm lầy, sông, hồ nước ngọt",
    range: "Đông Nam Hoa Kỳ",
    mapNote: "Kẻ săn mồi thượng đẳng ở các vùng đầm lầy Florida và Louisiana.",
    dot: [30, 42],
  },
  {
    key: "Rattlesnake",
    weight: "1 - 2 kg",
    lifespan: "10 - 20 năm",
    habitat: "Sa mạc, núi đá, đồng cỏ",
    range: "Bắc Mỹ, Nam Mỹ",
    mapNote:
      "Loài rắn độc nổi tiếng với chiếc đuôi phát ra tiếng rung cảnh báo đặc trưng.",
    dot: [28, 35],
  },
  {
    key: "Spider Monkey",
    weight: "6 - 9 kg",
    lifespan: "20 - 25 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Trung và Nam Mỹ",
    mapNote:
      "Khỉ nhện có chiếc đuôi cực kỳ linh hoạt, có thể cầm nắm như cánh tay thứ năm.",
    dot: [32, 60],
  },

  {
    key: "Three-toed Sloth",
    weight: "3.5 - 4.5 kg",
    lifespan: "20 - 30 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Trung và Nam Mỹ",
    mapNote:
      "Dành phần lớn cuộc đời chỉ để treo ngược và di chuyển cực chậm trên các cành cây cao.",
    dot: [32, 63],
  },
  {
    key: "Capybara",
    weight: "35 - 66 kg",
    lifespan: "8 - 10 năm",
    habitat: "Bờ sông, hồ, đầm lầy",
    range: "Nam Mỹ",
    mapNote:
      "Loài gặm nhấm lớn nhất thế giới, bơi lội cự phách và nổi tiếng vì tính cách cực kỳ thân thiện.",
    dot: [35, 65],
  },
  {
    key: "Llama",
    weight: "130 - 200 kg",
    lifespan: "15 - 25 năm",
    habitat: "Cao nguyên, vùng núi cao",
    range: "Dãy Andes (Nam Mỹ)",
    mapNote:
      "Loài vật nuôi bản địa chuyên chở hàng hóa quen thuộc của người dân vùng núi Andes.",
    dot: [30, 72],
  },
  {
    key: "Giant Anteater",
    weight: "33 - 41 kg",
    lifespan: "14 - 16 năm",
    habitat: "Đồng cỏ, xavan, rừng mưa",
    range: "Trung và Nam Mỹ",
    mapNote:
      "Sở hữu chiếc mõm như cái ống và chiếc lưỡi dài tới 60cm để 'quét' hàng ngàn con kiến mỗi ngày.",
    dot: [34, 66],
  },
  {
    key: "Pink River Dolphin",
    weight: "85 - 185 kg",
    lifespan: "30 năm",
    habitat: "Hệ thống sông ngòi nước ngọt",
    range: "Lưu vực sông Amazon (Nam Mỹ)",
    mapNote:
      "Loài cá heo nước ngọt lớn nhất và thông minh nhất, nổi bật với làn da màu hồng nhạt độc đáo.",
    dot: [33, 62],
  },
  {
    key: "Toco Toucan",
    weight: "0.5 - 0.8 kg",
    lifespan: "20 năm",
    habitat: "Rừng nhiệt đới, xavan, bìa rừng",
    range: "Nam Mỹ",
    mapNote:
      "Biểu tượng của rừng Nam Mỹ với chiếc mỏ khổng lồ sặc sỡ giúp điều hòa nhiệt độ cơ thể.",
    dot: [35, 64],
  },
  {
    key: "Green Anaconda",
    weight: "30 - 70 kg",
    lifespan: "10 - 30 năm",
    habitat: "Sông chảy chậm, đầm lầy, rừng ngập nước",
    range: "Lưu vực Amazon và Orinoco",
    mapNote:
      "Loài rắn nặng nhất thế giới, thường ngụy trang tài tình dưới nước để phục kích con mồi.",
    dot: [34, 61],
  },
  {
    key: "Black Caiman",
    weight: "300 - 400 kg",
    lifespan: "50 - 80 năm",
    habitat: "Sông, hồ, đầm lầy ngập nước",
    range: "Lưu vực sông Amazon",
    mapNote:
      "Kẻ săn mồi to lớn nhất lưu vực Amazon, lớp da sẫm màu giúp chúng ẩn mình hoàn hảo trong đêm.",
    dot: [33, 63],
  },
  {
    key: "European Bison",
    weight: "300 - 920 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng lá rộng, rừng hỗn giao",
    range: "Đông Âu (Ba Lan, Belarus...)",
    mapNote:
      "Loài thú trên cạn lớn nhất Châu Âu, hiện được bảo tồn nghiêm ngặt tại các khu rừng cổ xưa như Białowieża.",
    dot: [50, 35],
  },
  {
    key: "Eurasian Lynx",
    weight: "15 - 30 kg",
    lifespan: "10 - 15 năm",
    habitat: "Rừng ôn đới, rừng taiga",
    range: "Bắc Âu, Đông Âu, Bắc Á",
    mapNote:
      "Loài linh miêu hoang dã lớn nhất, cực kỳ bí ẩn với chỏm lông đen vểnh lên ở chóp tai đặc trưng.",
    dot: [52, 36],
  },
  {
    key: "Brown Bear",
    weight: "100 - 300 kg",
    lifespan: "20 - 30 năm",
    habitat: "Rừng rậm, đồi núi",
    range: "Châu Âu, Bắc Á",
    mapNote:
      "Loài gấu mang tính biểu tượng của Châu Âu, phân bố nhiều nhất ở Nga, dãy Carpathian và bán đảo Scandinavia.",
    dot: [51, 38],
  },
  {
    key: "Fire Salamander",
    weight: "15 - 40 gram",
    lifespan: "10 - 15 năm",
    habitat: "Rừng ẩm ướt, gần sông suối",
    range: "Trung và Nam Âu",
    mapNote:
      "Loài kỳ giông với lớp da đen chấm vàng/cam rực rỡ để cảnh báo nọc độc, thường sống ẩn dưới các khúc gỗ mục ẩm ướt.",
    dot: [47, 33],
  },

  // ================= CHÂU PHI =================
  {
    key: "African Lion",
    weight: "150 - 250 kg",
    lifespan: "10 - 14 năm",
    habitat: "Xa van, đồng cỏ, rừng thưa",
    range: "Châu Phi",
    mapNote: "Sư tử chủ yếu sinh sống ở các khu bảo tồn ở Đông và Nam Phi.",
    dot: [51, 58],
  },
  {
    key: "African Bush Elephant",
    weight: "3.000 - 6.000 kg",
    lifespan: "60 - 70 năm",
    habitat: "Xa van, rừng rậm nhiệt đới",
    range: "Châu Phi",
    mapNote: "Loài voi trên cạn lớn nhất thế giới sinh sống khắp châu Phi.",
    dot: [52, 60],
  },
  {
    key: "Giraffe",
    weight: "800 - 1.200 kg",
    lifespan: "25 năm",
    habitat: "Xa van khô, rừng thưa",
    range: "Châu Phi",
    mapNote: "Phân bố rộng ở các vùng xa van Châu Phi.",
    dot: [51, 58],
  },
  {
    key: "Cheetah",
    weight: "21 - 72 kg",
    lifespan: "10 - 12 năm",
    habitat: "Đồng cỏ mở, xa van",
    range: "Châu Phi",
    mapNote: "Loài chạy nhanh nhất thế giới trên cạn.",
    dot: [51, 58],
  },
  {
    key: "Cape Buffalo",
    weight: "500 - 900 kg",
    lifespan: "20 năm",
    habitat: "Đồng cỏ, rừng thưa, đầm lầy",
    range: "Châu Phi",
    mapNote: "Sống theo đàn lớn lên đến hàng nghìn con.",
    dot: [51, 58],
  },
  {
    key: "Hippopotamus",
    weight: "1.300 - 1.500 kg",
    lifespan: "40 - 50 năm",
    habitat: "Sông, hồ, đầm lầy",
    range: "Châu Phi hạ Sahara",
    mapNote: "Bám sát các lưu vực sông ngòi, vùng ngập nước ngọt.",
    dot: [52, 57],
  },
  {
    key: "White Rhinoceros",
    weight: "1.700 - 2.300 kg",
    lifespan: "40 - 50 năm",
    habitat: "Đồng cỏ xa van",
    range: "Nam Phi và Đông Phi",
    mapNote: "Sống thành quần thể ở các công viên quốc gia.",
    dot: [55, 60],
  },
  {
    key: "Spotted Hyena",
    weight: "40 - 86 kg",
    lifespan: "20 năm",
    habitat: "Xa van, bán sa mạc",
    range: "Châu Phi",
    mapNote: "Sinh sống theo bầy đàn mẫu hệ lớn trên hoang mạc.",
    dot: [53, 58],
  },
  {
    key: "Mountain Gorilla",
    weight: "135 - 195 kg",
    lifespan: "35 - 40 năm",
    habitat: "Rừng mây trên núi cao",
    range: "Trung Phi",
    mapNote: "Sống trên các sườn núi lửa ở Trung Phi.",
    dot: [53, 55],
  },
  {
    key: "Chimpanzee",
    weight: "30 - 60 kg",
    lifespan: "40 - 50 năm",
    habitat: "Rừng rậm, xavan",
    range: "Trung và Tây Phi",
    mapNote: "Sống theo cộng đồng xã hội phức tạp.",
    dot: [52, 53],
  },

  {
    key: "Leopard",
    weight: "30 - 90 kg",
    lifespan: "12 - 17 năm",
    habitat: "Rừng, xa van, đồi núi",
    range: "Châu Phi và Châu Á",
    mapNote:
      "Sinh sống đa dạng từ rừng rậm cho đến sa mạc, cực kỳ giỏi leo trèo.",
    dot: [52, 57],
  },
  {
    key: "Plains Zebra",
    weight: "200 - 350 kg",
    lifespan: "25 năm",
    habitat: "Đồng cỏ, xa van",
    range: "Đông và Nam Phi",
    mapNote: "Thường xuyên di cư thành đàn lớn dọc theo thảo nguyên Đông Phi.",
    dot: [53, 58],
  },

  {
    key: "Mandrill",
    weight: "11 - 37 kg",
    lifespan: "20 - 25 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Tây Trung Phi",
    mapNote:
      "Loài khỉ lớn nhất thế giới, nổi bật với khuôn mặt và vòng ba sặc sỡ.",
    dot: [52, 53],
  },
  {
    key: "Fennec Fox",
    weight: "1 - 1.5 kg",
    lifespan: "10 - 14 năm",
    habitat: "Sa mạc cát",
    range: "Bắc Phi (Sa mạc Sahara)",
    mapNote:
      "Loài cáo nhỏ nhất thế giới với đôi tai khổng lồ giúp tản nhiệt cực tốt.",
    dot: [45, 50],
  },
  {
    key: "Meerkat",
    weight: "0.7 - 0.9 kg",
    lifespan: "12 - 14 năm",
    habitat: "Sa mạc, xavan khô",
    range: "Nam Phi (Sa mạc Kalahari)",
    mapNote:
      "Sống theo bầy đàn tính xã hội cao, nổi tiếng với tư thế đứng bằng hai chân sau để canh gác.",
    dot: [57, 57],
  },

  {
    key: "Dromedary Camel",
    weight: "300 - 600 kg",
    lifespan: "40 - 50 năm",
    habitat: "Sa mạc, vùng khô hạn",
    range: "Bắc Phi, Trung Đông",
    mapNote:
      "Lạc đà một bướu chịu khát kiên cường, là 'con tàu' của sa mạc Sahara.",
    dot: [45, 54],
  },
  {
    key: "Ring-tailed Lemur",
    weight: "2 - 2.5 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng nhiệt đới và bụi rậm",
    range: "Madagascar",
    mapNote:
      "Loài vượn cáo đặc hữu của đảo Madagascar, sống theo chế độ mẫu hệ.",
    dot: [60, 60],
  },
  {
    key: "Fossa",
    weight: "5 - 8.5 kg",
    lifespan: "15 năm",
    habitat: "Rừng nhiệt đới",
    range: "Madagascar",
    mapNote:
      "Thú săn mồi họ cầy lớn nhất đảo Madagascar và là thiên địch của vượn cáo.",
    dot: [61, 60],
  },
  {
    key: "Nile Crocodile",
    weight: "220 - 750 kg",
    lifespan: "70 - 100 năm",
    habitat: "Sông ngòi, đầm lầy ngọt",
    range: "Châu Phi",
    mapNote:
      "Kẻ săn mồi phục kích đáng sợ bậc nhất tại các dòng sông Châu Phi.",
    dot: [50, 56],
  },
  {
    key: "Shoebill",
    weight: "4 - 7 kg",
    lifespan: "35 năm",
    habitat: "Đầm lầy tĩnh lặng",
    range: "Đông Phi",
    mapNote:
      "Cò mỏ giày mang vẻ ngoài như chim tiền sử, đứng im bất động hàng giờ để săn cá.",
    dot: [51, 56],
  },
  {
    key: "African Penguin",
    weight: "2.2 - 3.5 kg",
    lifespan: "10 - 25 năm",
    habitat: "Bãi biển ven bờ",
    range: "Nam Phi",
    mapNote:
      "Loài chim cánh cụt duy nhất sinh sống tại Châu Phi, có tiếng kêu rất giống tiếng lừa.",
    dot: [65, 56],
  },

  // ================= CHÂU Á =================
  {
    key: "Bengal Tiger",
    weight: "140 - 220 kg",
    lifespan: "8 - 10 năm",
    habitat: "Rừng nhiệt đới, đầm lầy",
    range: "Châu Á",
    mapNote: "Phân bố chủ yếu ở Ấn Độ và Bangladesh.",
    dot: [72, 52],
  },
  {
    key: "Giant Panda",
    weight: "70 - 120 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng tre trúc vùng núi cao",
    range: "Châu Á",
    mapNote: "Sống tại các vùng núi của Tứ Xuyên, Trung Quốc.",
    dot: [72, 46],
  },
  {
    key: "Bornean Orangutan",
    weight: "50 - 100 kg",
    lifespan: "35 - 45 năm",
    habitat: "Rừng mưa nhiệt đới nguyên sinh",
    range: "Châu Á",
    mapNote: "Sinh sống tại các khu rừng của đảo Borneo.",
    dot: [72, 46],
  },
  {
    key: "Komodo Dragon",
    weight: "70 - 90 kg",
    lifespan: "30 năm",
    habitat: "Rừng nhiệt đới, thảo nguyên",
    range: "Châu Á",
    mapNote: "Loài thằn lằn lớn nhất thế giới ở Indonesia.",
    dot: [72, 46],
  },
  {
    key: "Philippine Eagle",
    weight: "4 - 8 kg",
    lifespan: "30 - 60 năm",
    habitat: "Rừng nguyên sinh nhiệt đới",
    range: "Châu Á",
    mapNote: "Một trong những loài đại bàng lớn nhất thế giới, ở Philippines.",
    dot: [72, 46],
  },
  {
    key: "Siberian Tiger",
    weight: "160 - 300 kg",
    lifespan: "10 - 15 năm",
    habitat: "Rừng taiga, rừng lá kim",
    range: "Châu Á",
    mapNote: "Sống tại vùng Viễn Đông Nga và Trung Quốc.",
    dot: [72, 46],
  },
  {
    key: "Sumatran Tiger",
    weight: "75 - 140 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Châu Á",
    mapNote: "Phân loài hổ cuối cùng ở đảo Sumatra của Indonesia.",
    dot: [72, 46],
  },
  {
    key: "Asian Elephant",
    weight: "2.700 - 4.000 kg",
    lifespan: "48 - 60 năm",
    habitat: "Rừng nhiệt đới, rừng rụng lá",
    range: "Châu Á",
    mapNote: "Phân bố từ Ấn Độ đến Đông Nam Á.",
    dot: [73, 55],
  },
  {
    key: "Malayan Sun Bear",
    weight: "25 - 65 kg",
    lifespan: "25 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Châu Á",
    mapNote: "Gấu nhỏ nhất thế giới sống tại Đông Nam Á.",
    dot: [72, 46],
  },
  {
    key: "Moon Bear",
    weight: "100 - 200 kg",
    lifespan: "25 năm",
    habitat: "Rừng rụng lá, rừng hỗn giao",
    range: "Châu Á",
    mapNote: "Đặc trưng với vệt lông hình chữ V trên ngực.",
    dot: [72, 46],
  },
  {
    key: "Indian Rhinoceros",
    weight: "1.800 - 2.200 kg",
    lifespan: "35 - 45 năm",
    habitat: "Đồng cỏ, đầm lầy",
    range: "Châu Á",
    mapNote: "Có nhiều nếp gấp khổng lồ trên da, sống ở Ấn Độ và Nepal.",
    dot: [72, 46],
  },
  {
    key: "Sumatran Rhinoceros",
    weight: "500 - 1.000 kg",
    lifespan: "35 - 40 năm",
    habitat: "Rừng nhiệt đới rậm rạp",
    range: "Châu Á",
    mapNote: "Loài tê giác có lông tơ nhỏ nhất và hiếm nhất.",
    dot: [72, 46],
  },
  {
    key: "Snow Leopard",
    weight: "22 - 55 kg",
    lifespan: "15 - 18 năm",
    habitat: "Cao nguyên băng giá, đồi núi đá",
    range: "Châu Á",
    mapNote: "Sinh sống trên các dãy núi cao của Himalaya.",
    dot: [72, 46],
  },
  {
    key: "Clouded Leopard",
    weight: "11 - 23 kg",
    lifespan: "11 năm",
    habitat: "Rừng nhiệt đới rậm rạp",
    range: "Châu Á",
    mapNote: "Sở hữu hoa văn như mây viền đen trên lông.",
    dot: [72, 46],
  },
  {
    key: "White-cheeked Gibbon",
    weight: "7 - 10 kg",
    lifespan: "28 năm",
    habitat: "Rừng nguyên sinh nhiệt đới",
    range: "Châu Á",
    mapNote: "Sinh sống hoàn toàn trên cây ở khu vực Đông Nam Á.",
    dot: [72, 46],
  },
  {
    key: "White-handed Gibbon",
    weight: "5 - 8 kg",
    lifespan: "25 - 30 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Châu Á",
    mapNote: "Khỉ vượn với bàn tay và bàn chân màu trắng đặc trưng.",
    dot: [72, 46],
  },
  {
    key: "Snub-nosed Monkey",
    weight: "15 - 30 kg",
    lifespan: "20 năm",
    habitat: "Rừng ôn đới vùng cao",
    range: "Châu Á",
    mapNote: "Loài linh trưởng có mũi hếch độc đáo ở châu Á.",
    dot: [72, 46],
  },
  {
    key: "Delacour's Langur",
    weight: "13 - 14 kg",
    lifespan: "20 năm",
    habitat: "Rừng trên núi đá vôi",
    range: "Châu Á",
    mapNote: "Loài quý hiếm đặc hữu sống ở núi đá vôi Việt Nam.",
    dot: [72, 46],
  },
  {
    key: "Red-shanked Douc Langur",
    weight: "8 - 11 kg",
    lifespan: "25 năm",
    habitat: "Rừng nguyên sinh",
    range: "Châu Á",
    mapNote: "Nữ hoàng linh trưởng phân bố ở bán đảo Đông Dương.",
    dot: [72, 46],
  },
  {
    key: "Rhesus Macaque",
    weight: "5 - 12 kg",
    lifespan: "25 năm",
    habitat: "Rừng rậm, khu dân cư",
    range: "Châu Á",
    mapNote: "Loài khỉ vàng rất phổ biến ở châu Á.",
    dot: [72, 46],
  },
  {
    key: "Proboscis Monkey",
    weight: "10 - 24 kg",
    lifespan: "20 năm",
    habitat: "Rừng ngập mặn, đầm lầy",
    range: "Châu Á",
    mapNote: "Khỉ mũi vòi sống đặc hữu tại đảo Borneo.",
    dot: [72, 46],
  },
  {
    key: "Japanese Macaque",
    weight: "11 - 18 kg",
    lifespan: "20 - 30 năm",
    habitat: "Rừng lá kim, vùng núi tuyết",
    range: "Châu Á",
    mapNote: "Khỉ tuyết Nhật Bản có tập tính tắm suối nước nóng.",
    dot: [72, 46],
  },
  {
    key: "Slow Loris",
    weight: "1 - 2 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Châu Á",
    mapNote: "Linh trưởng nhỏ chậm chạp và có nọc độc tự vệ.",
    dot: [72, 46],
  },
  {
    key: "Saltwater Crocodile",
    weight: "400 - 1.000 kg",
    lifespan: "70 năm",
    habitat: "Cửa sông, biển ven bờ",
    range: "Châu Á, Châu Úc",
    mapNote: "Cá sấu lớn nhất thế giới, khả năng vượt đại dương xuất sắc.",
    dot: [72, 46],
  },
  {
    key: "Siamese Crocodile",
    weight: "40 - 70 kg",
    lifespan: "50 - 60 năm",
    habitat: "Hồ tĩnh, đầm lầy",
    range: "Châu Á",
    mapNote: "Cá sấu nước ngọt đặc hữu của Đông Nam Á.",
    dot: [72, 46],
  },
  {
    key: "Gharial",
    weight: "160 - 250 kg",
    lifespan: "40 - 60 năm",
    habitat: "Sông ngòi lớn",
    range: "Châu Á",
    mapNote: "Đặc trưng với chiếc mõm mỏng dài chuyên để bắt cá.",
    dot: [72, 46],
  },
  {
    key: "King Cobra",
    weight: "6 - 9 kg",
    lifespan: "20 năm",
    habitat: "Rừng rậm, đầm lầy",
    range: "Châu Á",
    mapNote: "Loài rắn độc dài nhất thế giới.",
    dot: [72, 46],
  },
  {
    key: "Reticulated Python",
    weight: "75 - 150 kg",
    lifespan: "20 năm",
    habitat: "Rừng nhiệt đới rậm rạp",
    range: "Châu Á",
    mapNote: "Loài trăn dài nhất thế giới có ở Đông Nam Á.",
    dot: [72, 46],
  },
  {
    key: "Chinese Giant Salamander",
    weight: "25 - 30 kg",
    lifespan: "50 - 60 năm",
    habitat: "Suối núi lạnh",
    range: "Châu Á",
    mapNote: "Loài lưỡng cư lớn nhất thế giới ở Trung Quốc.",
    dot: [72, 46],
  },
  {
    key: "Great Hornbill",
    weight: "2.5 - 4 kg",
    lifespan: "35 - 40 năm",
    habitat: "Rừng rậm nhiệt đới",
    range: "Châu Á",
    mapNote: "Loài chim khổng lồ phân bố ở Đông Nam Á.",
    dot: [72, 46],
  },
  {
    key: "Green Peafowl",
    weight: "3.8 - 5 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng thưa nhiệt đới",
    range: "Châu Á",
    mapNote: "Loài chim công với bộ lông lộng lẫy màu xanh óng.",
    dot: [72, 46],
  },
  {
    key: "Indian Peafowl",
    weight: "2.7 - 6 kg",
    lifespan: "15 - 25 năm",
    habitat: "Rừng rậm, vùng nông nghiệp",
    range: "Châu Á",
    mapNote: "Quốc điểu của Ấn Độ.",
    dot: [72, 46],
  },
  {
    key: "Sarus Crane",
    weight: "5 - 12 kg",
    lifespan: "40 - 50 năm",
    habitat: "Đất ngập nước thiên nhiên",
    range: "Châu Á",
    mapNote: "Sếu đầu đỏ di cư với dáng cao nhất thế giới.",
    dot: [72, 46],
  },
  {
    key: "Bactrian Camel",
    weight: "300 - 1.000 kg",
    lifespan: "40 năm",
    habitat: "Sa mạc khô lạnh",
    range: "Châu Á",
    mapNote: "Lạc đà hai bướu sống tại sa mạc Gobi.",
    dot: [72, 46],
  },
  {
    key: "Yak",
    weight: "300 - 1.000 kg",
    lifespan: "20 năm",
    habitat: "Cao nguyên lạnh giá",
    range: "Châu Á",
    mapNote: "Bò Tây Tạng sống trên các cao nguyên dốc.",
    dot: [72, 46],
  },
  {
    key: "Przewalski's Horse",
    weight: "250 - 350 kg",
    lifespan: "20 - 25 năm",
    habitat: "Thảo nguyên rộng lớn",
    range: "Châu Á",
    mapNote: "Loài ngựa hoang duy nhất còn thuần chủng trên trái đất.",
    dot: [72, 46],
  },

  {
    key: "Saola",
    weight: "80 - 100 kg",
    lifespan: "10 - 15 năm",
    habitat: "Rừng rậm nguyên sinh",
    range: "Dãy Trường Sơn (Việt Nam, Lào)",
    mapNote: "Kỳ lân Châu Á, báu vật bí ẩn của rừng núi Trường Sơn.",
    dot: [73, 53],
  },
  {
    key: "Pangolin",
    weight: "2 - 35 kg",
    lifespan: "20 năm",
    habitat: "Rừng rậm, đồi gò",
    range: "Châu Á",
    mapNote:
      "Loài thú có vảy đặc trưng, cuộn tròn như quả bóng khi gặp nguy hiểm.",
    dot: [74, 54],
  },
  {
    key: "Malayan Tapir",
    weight: "250 - 320 kg",
    lifespan: "30 năm",
    habitat: "Rừng mưa nhiệt đới",
    range: "Đông Nam Á",
    mapNote:
      "Có phần thân trước đen, mông trắng giúp tàng hình cực tốt ban đêm.",
    dot: [74, 55],
  },

  // ================= CHÂU ÚC =================
  {
    key: "Red Kangaroo",
    weight: "40 - 90 kg",
    lifespan: "12 - 22 năm",
    habitat: "Sa mạc và đồng cỏ mở",
    range: "Châu Úc",
    mapNote: "Sống ở sa mạc và đồng cỏ mở tại Australia.",
    dot: [78, 71],
  },

  {
    key: "Koala",
    weight: "4 - 15 kg",
    lifespan: "13 - 18 năm",
    habitat: "Rừng bạch đàn",
    range: "Bờ đông và nam Châu Úc",
    mapNote:
      "Chỉ ăn lá bạch đàn có độc tính nhẹ và ngủ tới 20 tiếng mỗi ngày để tiêu hóa thức ăn.",
    dot: [82, 75],
  },
  {
    key: "Platypus",
    weight: "1 - 2.4 kg",
    lifespan: "10 - 15 năm",
    habitat: "Sông, suối nước ngọt",
    range: "Đông Châu Úc, Tasmania",
    mapNote:
      "Một trong những loài thú đẻ trứng hiếm hoi, con đực có cựa chứa nọc độc ở chân sau.",
    dot: [85, 76],
  },
  {
    key: "Tasmanian Devil",
    weight: "6 - 12 kg",
    lifespan: "5 - 8 năm",
    habitat: "Rừng rậm, thảo nguyên",
    range: "Đảo Tasmania (Úc)",
    mapNote:
      "Loài thú có túi ăn thịt lớn nhất thế giới, sở hữu lực cắn cực mạnh so với kích thước cơ thể.",
    dot: [88, 77],
  },
  {
    key: "Quokka",
    weight: "2.5 - 5 kg",
    lifespan: "10 năm",
    habitat: "Rừng thưa, khu vực bụi rậm",
    range: "Đảo Rottnest và Tây Úc",
    mapNote:
      "Được mệnh danh là 'loài động vật hạnh phúc nhất thế giới' với khuôn mặt luôn như đang mỉm cười.",
    dot: [82, 65],
  },
  {
    key: "Wombat",
    weight: "20 - 35 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng, đồi núi, đồng hoang",
    range: "Đông nam và nam Châu Úc",
    mapNote:
      "Loài thú có túi đào hang điêu luyện, nổi tiếng nhất với việc thải ra phân có hình khối lập phương.",
    dot: [84, 74],
  },
  {
    key: "Echidna",
    weight: "2 - 7 kg",
    lifespan: "15 - 40 năm",
    habitat: "Rừng, thảo nguyên, sa mạc",
    range: "Khắp Châu Úc",
    mapNote:
      "Cùng với thú mỏ vịt, đây là loài thú đẻ trứng. Cơ thể chúng phủ đầy gai nhọn để tự vệ.",
    dot: [80, 70],
  },
  {
    key: "Emu",
    weight: "30 - 45 kg",
    lifespan: "10 - 20 năm",
    habitat: "Xa van, rừng thưa, đồng cỏ",
    range: "Khắp Châu Úc",
    mapNote:
      "Loài chim lớn thứ hai thế giới, chạy rất nhanh nhưng không thể bay hay đi lùi.",
    dot: [81, 72],
  },
  {
    key: "Laughing Kookaburra",
    weight: "0.3 - 0.5 kg",
    lifespan: "15 - 20 năm",
    habitat: "Rừng bạch đàn, đồng cỏ",
    range: "Đông và nam Châu Úc",
    mapNote:
      "Nổi tiếng với tiếng kêu rộ lên nghe y hệt như tiếng người cười sảng khoái vang vọng trong rừng.",
    dot: [83, 76],
  },
  {
    key: "Bearded Dragon",
    weight: "0.3 - 0.5 kg",
    lifespan: "10 - 15 năm",
    habitat: "Sa mạc, rừng thưa, vùng bụi rậm",
    range: "Nội địa Châu Úc",
    mapNote:
      "Loài bò sát hiền lành, có khả năng phồng phần 'râu' gai góc dưới cổ lên và đổi màu đen khi bị đe dọa.",
    dot: [79, 69],
  },

  // ================= CHÂU NAM CỰC =================
  {
    key: "Emperor Penguin",
    weight: "Tới 40 kg",
    lifespan: "15 - 20 năm",
    habitat: "Băng Nam Cực và vùng biển lạnh",
    range: "Châu Nam Cực",
    mapNote: "Sống trên băng biển quanh Nam Cực.",
    dot: [54, 86],
  },
  {
    key: "Leopard Seal",
    weight: "200 - 600 kg",
    lifespan: "26 năm",
    habitat: "Băng biển",
    range: "Châu Nam Cực",
    mapNote: "Săn chim cánh cụt quanh rìa băng Nam Cực.",
    dot: [54, 86],
  },
  {
    key: "Southern Elephant Seal",
    weight: "Tới 4.000 kg",
    lifespan: "20 - 22 năm",
    habitat: "Bãi biển, đại dương",
    range: "Châu Nam Cực",
    mapNote: "Loài hải cẩu lớn nhất thế giới.",
    dot: [54, 86],
  },
  {
    key: "Weddell Seal",
    weight: "400 - 600 kg",
    lifespan: "30 năm",
    habitat: "Băng dính liền bờ",
    range: "Châu Nam Cực",
    mapNote: "Hải cẩu có khả năng bơi dưới các tảng băng dày.",
    dot: [54, 86],
  },
  {
    key: "Adélie Penguin",
    weight: "3.8 - 5.8 kg",
    lifespan: "10 - 20 năm",
    habitat: "Bờ biển đá, băng biển",
    range: "Châu Nam Cực",
    mapNote:
      "Một trong những loài chim phân bố ở vùng cực nam sâu nhất, nổi tiếng với 'bộ tuxedo' đen trắng cổ điển.",
    dot: [52, 85],
  },
  {
    key: "South Polar Skua",
    weight: "1 - 1.6 kg",
    lifespan: "10 - 15 năm",
    habitat: "Bờ biển không đóng băng, đại dương mở",
    range: "Châu Nam Cực",
    mapNote:
      "Loài chim săn mồi hung dữ của Nam Cực, thường xuyên rình rập và cướp mồi hoặc trứng của chim cánh cụt.",
    dot: [50, 85],
  },
  {
    key: "Blue Whale",
    weight: "130.000 - 150.000 kg",
    lifespan: "80 - 90 năm",
    habitat: "Đại dương mở",
    range: "Nam Đại Dương và các đại dương lớn",
    mapNote:
      "Loài động vật lớn nhất từng tồn tại trên Trái Đất, thường di cư đến vùng nước lạnh Nam Cực vào mùa hè để săn nhuyễn thể.",
    dot: [45, 87],
  },
  {
    key: "Orca/Killer Whale",
    weight: "3.000 - 8.000 kg",
    lifespan: "50 - 90 năm",
    habitat: "Đại dương mở, vùng nước lạnh ven bờ",
    range: "Nam Đại Dương và toàn cầu",
    mapNote:
      "Sát thủ đại dương cực kỳ thông minh, thường xuyên áp dụng chiến thuật săn mồi bầy đàn để tạo sóng lật úp băng bắt hải cẩu.",
    dot: [48, 88],
  },
];

function getDetailProfile(a) {
  const specific = speciesDetails.find((item) => a.name.includes(item.key));
  const group = groupDetails[a.nhom] || groupDetails.thu;
  const continent = continentDetails[a.c] || {
    range: a.c,
    dot: [50, 50],
    habitat: "Môi trường hoang dã",
  };

  return {
    weight: specific?.weight || "Đang cập nhật dữ liệu kiểm chứng",
    lifespan: specific?.lifespan || "Đang cập nhật dữ liệu kiểm chứng",
    habitat: specific?.habitat || continent.habitat,
    range: specific?.range || continent.range,
    mapNote:
      specific?.mapNote ||
      "Điểm trên hình là vị trí đại diện theo châu lục, không phải bản đồ phân bố khoa học chi tiết.",
    dot: specific?.dot || continent.dot,
    audio: specific?.audio || a.audio || group.audio,
    sound: specific?.sound || group.sound || "default",
  };
}

// --- HÀM HIỂN THỊ DANH SÁCH ---
function render(data) {
  currentFilteredList = data;
  currentAnimalIndex = -1;
  list.innerHTML = "";
  if (data.length === 0) {
    list.innerHTML =
      "<p style='grid-column: 1/-1; text-align: center; padding: 50px;'>Không tìm thấy kết quả.</p>";
    return;
  }
  data.forEach((a, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
            <div class="card-img-container">
                <img src="${a.img}" alt="${a.name}" onerror="this.src='https://placehold.co/400x300?text=Lỗi+Ảnh'">
            </div>
            <div class="card-info">
                <p>${a.c}</p>
                <h3>${a.name}</h3>
            </div>
        `;
    // Gán sự kiện click cho cả card
    card.onclick = () => showDetail(a, index);
    list.appendChild(card);
  });
}

// --- HÀM HIỂN THỊ CHI TIẾT ---
function showDetail(a, index = -1) {
  stopCurrentAudio();
  currentAnimal = a;
  currentAnimalIndex = index;
  const detail = getDetailProfile(a);

  document.getElementById("m-img").src = a.img;
  document.getElementById("m-name").innerText = a.name;
  document.getElementById("m-desc").innerText = a.desc;
  document.getElementById("m-habit").innerText = a.habit;
  document.getElementById("m-fact").innerText = a.fact;
  document.getElementById("m-weight").innerText = detail.weight;
  document.getElementById("m-lifespan").innerText = detail.lifespan;
  document.getElementById("m-habitat").innerText = detail.habitat;
  document.getElementById("m-range").innerText = detail.range;
  document.getElementById("m-map-note").innerText = detail.mapNote;
  document
    .getElementById("m-map-dot")
    .style.setProperty("--dot-x", detail.dot[0] + "%");
  document
    .getElementById("m-map-dot")
    .style.setProperty("--dot-y", detail.dot[1] + "%");
  resetSoundLabel();

  const statusContainer = document.getElementById("m-status-container");
  const code = a.status.split(" - ")[0].toLowerCase();
  statusContainer.innerHTML = `<div class="status-tag-detail bg-${code}">Tình trạng: ${a.status}</div>`;

  modal.classList.add("is-open");
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // Khóa cuộn trang chính
  updateNavigationButtons();
}

// --- HÀM CẬP NHẬT TRẠNG THÁI NÚT ĐIỀU HƯỚNG ---
function updateNavigationButtons() {
  const hasPrev = currentAnimalIndex > 0;
  const hasNext = currentAnimalIndex < currentFilteredList.length - 1;

  if (navPrevBtn) {
    navPrevBtn.disabled = !hasPrev;
    navPrevBtn.style.opacity = hasPrev ? "1" : "0.4";
    navPrevBtn.style.cursor = hasPrev ? "pointer" : "not-allowed";
  }
  if (navNextBtn) {
    navNextBtn.disabled = !hasNext;
    navNextBtn.style.opacity = hasNext ? "1" : "0.4";
    navNextBtn.style.cursor = hasNext ? "pointer" : "not-allowed";
  }
}

// --- HÀM ĐIỀU HƯỚNG ĐẾN ĐỘNG VẬT TRƯỚC ---
function previousAnimal() {
  if (currentAnimalIndex > 0) {
    const prevAnimal = currentFilteredList[currentAnimalIndex - 1];
    showDetail(prevAnimal, currentAnimalIndex - 1);
  }
}

// --- HÀM ĐIỀU HƯỚNG ĐẾN ĐỘNG VẬT SAU ---
function nextAnimal() {
  if (currentAnimalIndex < currentFilteredList.length - 1) {
    const nextAnimal = currentFilteredList[currentAnimalIndex + 1];
    showDetail(nextAnimal, currentAnimalIndex + 1);
  }
}

// (Các hàm handleFilter, moveIndicator,... giữ nguyên như cũ)

function stopCurrentAudio() {
  if (!currentAudio) return;

  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio.removeAttribute("src");
  currentAudio.load();
  currentAudio = null;
}

function resetSoundLabel() {
  const label = document.getElementById("soundLabel");
  if (label) label.innerText = "Nghe âm thanh";
  if (soundBtn) soundBtn.classList.remove("is-playing");
}

function setSoundPlayingLabel() {
  const label = document.getElementById("soundLabel");
  if (label) label.innerText = "Đang phát âm thanh...";
  if (soundBtn) soundBtn.classList.add("is-playing");
}

function closeModal() {
  stopCurrentAudio();
  resetSoundLabel();
  currentAnimal = null;
  modal.classList.remove("is-open");
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

function getStoredUsers() {
  try {
    return JSON.parse(localStorage.getItem("wildsphereUsers")) || [];
  } catch {
    return [];
  }
}

function saveStoredUsers(users) {
  localStorage.setItem("wildsphereUsers", JSON.stringify(users));
}

function getCurrentUser() {
  return localStorage.getItem("wildsphereCurrentUser") || "";
}

function setAuthMessage(message) {
  if (authMessage) authMessage.innerText = message;
}

function setAuthMode(mode) {
  authMode = mode;
  setAuthMessage("");
  if (authTitle)
    authTitle.innerText = mode === "login" ? "Đăng nhập" : "Đăng ký";
  if (authSubmitBtn)
    authSubmitBtn.innerText = mode === "login" ? "Đăng nhập" : "Tạo tài khoản";
  if (authSwitchBtn) {
    authSwitchBtn.innerText =
      mode === "login"
        ? "Chưa có tài khoản? Đăng ký"
        : "Đã có tài khoản? Đăng nhập";
  }
}

function updateAuthUI() {
  const username = getCurrentUser();

  if (username) {
    if (authOpenBtn) authOpenBtn.style.display = "none";
    if (authPanel) authPanel.classList.remove("is-open");
    if (userMenu) userMenu.classList.add("is-logged-in");
    if (userChip) userChip.innerText = username;
    return;
  }

  if (authOpenBtn) authOpenBtn.style.display = "inline-flex";
  if (userMenu) userMenu.classList.remove("is-logged-in");
  if (userChip) userChip.innerText = "";
}

function clearAuthInputs() {
  if (authUsername) authUsername.value = "";
  if (authPassword) authPassword.value = "";
}

function handleAuthSubmit() {
  const username = authUsername.value.trim();
  const password = authPassword.value;

  if (!username || !password) {
    setAuthMessage("Nhập đủ tên người dùng và mật khẩu.");
    return;
  }

  const users = getStoredUsers();
  const user = users.find(
    (item) => item.username.toLowerCase() === username.toLowerCase(),
  );

  if (authMode === "register") {
    if (user) {
      setAuthMessage("Tên người dùng đã tồn tại.");
      return;
    }

    users.push({ username, password });
    saveStoredUsers(users);
    localStorage.setItem("wildsphereCurrentUser", username);
    clearAuthInputs();
    updateAuthUI();
    return;
  }

  if (!user || user.password !== password) {
    setAuthMessage("Sai tên người dùng hoặc mật khẩu.");
    return;
  }

  localStorage.setItem("wildsphereCurrentUser", user.username);
  clearAuthInputs();
  updateAuthUI();
}

function initAuth() {
  if (!authOpenBtn) return;

  setAuthMode("login");
  updateAuthUI();

  authOpenBtn.onclick = () => {
    authPanel.classList.toggle("is-open");
    setAuthMessage("");
    authUsername.focus();
  };

  authSwitchBtn.onclick = () => {
    setAuthMode(authMode === "login" ? "register" : "login");
  };

  authCloseBtn.onclick = () => {
    authPanel.classList.remove("is-open");
  };

  authSubmitBtn.onclick = handleAuthSubmit;

  logoutBtn.onclick = () => {
    localStorage.removeItem("wildsphereCurrentUser");
    updateAuthUI();
  };

  [authUsername, authPassword].forEach((input) => {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") handleAuthSubmit();
    });
  });
}

function getAudioContext() {
  audioContext =
    audioContext || new (window.AudioContext || window.webkitAudioContext)();
  return audioContext;
}

function playTone(
  ctx,
  {
    type = "sine",
    start = 220,
    end = 120,
    duration = 0.5,
    gain = 0.2,
    delay = 0,
  },
) {
  const now = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(start, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(20, end), now + duration);
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.exponentialRampToValueAtTime(gain, now + 0.04);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  osc.connect(amp);
  amp.connect(ctx.destination);
  osc.start(now);
  osc.stop(now + duration + 0.05);
}

function playNoise(ctx, duration = 0.55, delay = 0, gain = 0.16) {
  const now = ctx.currentTime + delay;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * duration, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const amp = ctx.createGain();

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(720, now);
  filter.Q.setValueAtTime(0.85, now);
  amp.gain.setValueAtTime(0.0001, now);
  amp.gain.exponentialRampToValueAtTime(gain, now + 0.03);
  amp.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  source.buffer = buffer;
  source.connect(filter);
  filter.connect(amp);
  amp.connect(ctx.destination);
  source.start(now);
  source.stop(now + duration);
}

function playAnimalSound(a) {
  const detail = getDetailProfile(a);
  const label = document.getElementById("soundLabel");

  // Nếu có file MP3 thì phát file
  if (detail.audio && detail.audio !== "") {
    stopCurrentAudio();

    currentAudio = new Audio(detail.audio);
    const audio = currentAudio;
    currentAudio.volume = 0.9;
    setSoundPlayingLabel();

    audio.onended = () => {
      if (currentAnimal === a) resetSoundLabel();
      if (currentAudio === audio) currentAudio = null;
    };

    audio.onerror = () => {
      if (currentAnimal === a) {
        label.innerText = "Lỗi file: " + detail.audio.split("/").pop();
        soundBtn.classList.remove("is-playing");
      }
      if (currentAudio === audio) currentAudio = null;
    };

    audio.play().catch(() => {
      label.innerText = "Không phát được MP3";
      soundBtn.classList.remove("is-playing");
      if (currentAudio === audio) currentAudio = null;
    });
    return;
  }

  const ctx = getAudioContext();
  if (ctx.state === "suspended") ctx.resume();

  document.getElementById("soundLabel").innerText = "Đang phát...";

  if (detail.sound === "roar") {
    playNoise(ctx, 0.9, 0, 0.24);
    playTone(ctx, {
      type: "sawtooth",
      start: 150,
      end: 70,
      duration: 0.9,
      gain: 0.18,
    });
  } else if (detail.sound === "trumpet") {
    playTone(ctx, {
      type: "square",
      start: 420,
      end: 780,
      duration: 0.45,
      gain: 0.16,
    });
    playTone(ctx, {
      type: "sawtooth",
      start: 760,
      end: 240,
      duration: 0.55,
      gain: 0.14,
      delay: 0.25,
    });
  } else if (detail.sound === "bird") {
    playTone(ctx, {
      type: "sine",
      start: 1200,
      end: 1800,
      duration: 0.16,
      gain: 0.11,
    });
    playTone(ctx, {
      type: "sine",
      start: 1500,
      end: 900,
      duration: 0.18,
      gain: 0.1,
      delay: 0.18,
    });
    playTone(ctx, {
      type: "sine",
      start: 1000,
      end: 1700,
      duration: 0.14,
      gain: 0.09,
      delay: 0.38,
    });
  } else if (detail.sound === "howl") {
    playTone(ctx, {
      type: "sine",
      start: 320,
      end: 620,
      duration: 0.65,
      gain: 0.16,
    });
    playTone(ctx, {
      type: "sine",
      start: 620,
      end: 360,
      duration: 0.85,
      gain: 0.14,
      delay: 0.48,
    });
  } else if (detail.sound === "whale") {
    playTone(ctx, {
      type: "sine",
      start: 90,
      end: 38,
      duration: 1.2,
      gain: 0.2,
    });
    playTone(ctx, {
      type: "sine",
      start: 140,
      end: 70,
      duration: 0.9,
      gain: 0.12,
      delay: 0.55,
    });
  } else if (detail.sound === "hiss") {
    playNoise(ctx, 0.75, 0, 0.11);
  } else if (detail.sound === "growl") {
    playNoise(ctx, 0.65, 0, 0.18);
    playTone(ctx, {
      type: "sawtooth",
      start: 115,
      end: 80,
      duration: 0.65,
      gain: 0.14,
    });
  } else {
    playTone(ctx, {
      type: "triangle",
      start: 520,
      end: 780,
      duration: 0.22,
      gain: 0.11,
    });
    playTone(ctx, {
      type: "triangle",
      start: 620,
      end: 420,
      duration: 0.2,
      gain: 0.1,
      delay: 0.22,
    });
  }

  setTimeout(() => {
    if (currentAnimal === a)
      document.getElementById("soundLabel").innerText = "Nghe âm thanh";
  }, 1200);
}

function handleFilter() {
  const v = searchInput.value.toLowerCase();
  const activeContinent = document
    .querySelector(".pill.active")
    .getAttribute("data-continent");
  const activeClass = document
    .querySelector(".tab.active")
    .getAttribute("data-class");

  const filtered = animals.filter((a) => {
    const matchSearch = a.name.toLowerCase().includes(v);
    const matchContinent = activeContinent === "all" || a.c === activeContinent;
    const matchClass = activeClass === "all" || a.nhom === activeClass;
    return matchSearch && matchContinent && matchClass;
  });

  render(filtered);
}

buttons.forEach((btn) => {
  btn.onclick = () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    moveIndicator(btn);
    handleFilter();
  };
});

classTabs.forEach((tab) => {
  tab.onclick = () => {
    classTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    handleFilter();
  };
});

function moveIndicator(btn) {
  indicator.style.width = btn.offsetWidth + "px";
  indicator.style.left = btn.offsetLeft + "px";
}

searchInput.oninput = handleFilter;
if (navPrevBtn) navPrevBtn.onclick = previousAnimal;
if (navNextBtn) navNextBtn.onclick = nextAnimal;

soundBtn.onclick = () => {
  if (!currentAnimal) return;

  if (currentAudio) {
    stopCurrentAudio();
    resetSoundLabel();
    return;
  }

  playAnimalSound(currentAnimal);
};
window.onclick = (e) => {
  if (e.target == modal) closeModal();
  if (authPanel && e.target === authPanel)
    authPanel.classList.remove("is-open");
};
window.onload = () => {
  initAuth();
  render(animals);
  moveIndicator(document.querySelector(".pill.active"));

  // Thêm sự kiện bàn phím để điều hướng bài viết
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("is-open")) return;

    if (e.key === "ArrowLeft") {
      previousAnimal();
    } else if (e.key === "ArrowRight") {
      nextAnimal();
    } else if (e.key === "Escape") {
      closeModal();
    }
  });
};
