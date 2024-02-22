import propTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './StretchLayout.module.scss';
import Sidebar from '~/layouts/components/Sidebar';
import Header from '~/layouts/components/Header';
import { ArrowRightIcon } from '~/components/Icons';

const cx = classNames.bind(styles);
function StretchLayout({ children }) {
    const MODAL_MENU = [
        {
            title: 'An toàn cho trẻ vị thành niên',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Hình ảnh khỏa thân hoặc hoạt động tình dục của trẻ vị thành niên',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung để lộ bộ phận sinh dục, mông hoặc vùng mu của trẻ vị thành niên hay núm vú của bé gái ở tuổi vị thành niên',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung thể hiện trẻ vị thành niên cởi quần áo hoặc mặc quần áo "thiếu vải" không phù hợp, chẳng hạn như mặc áo tắm trong bối cảnh không liên quan đến bơi lội',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung thể hiện trẻ vị thành niên cùng với lời bài hát khiêu dâm hoặc trẻ vị thành niên nhảy múa theo cách gợi dục, chẳng hạn như vuốt ve háng hay ngực của chính mình hoặc của người khác',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Bình luận, biểu tượng cảm xúc, văn bản hoặc hình ảnh khiêu dâm khác được sử dụng trong video để ngụy trang hoặc ám chỉ hình ảnh khỏa thân hoặc hoạt động tình dục của trẻ vị thành niên',
                                },
                                {
                                    type: 'send-report',
                                    title: '"Hình ảnh khỏa thân hoặc hoạt động tình dục của trẻ vị thành niên" có nghĩa là nội dung video, hình ảnh hoặc ngôn ngữ thể hiện hoặc ngụ ý rằng trẻ vị thành niên khỏa thân hoặc tham gia vào các hoạt động tình dục.',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Lạm dụng hoặc tội phạm nhắm vào trẻ vị thành niên',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung có tính chất yêu cầu, cổ xúy hoặc tạo điều kiện cho hành vi tấn công tình dục, sàm sỡ, giết người, lạm dụng hoặc bỏ bê thể chất, bắt cóc trẻ em, cha mẹ bắt cóc con cái ra nước ngoài, buôn người, lao động trẻ em, tảo hôn, bóc lột trẻ vị thành niên trong các hoạt động mại dâm, lạm dụng tình dục trẻ vị thành niên trực tuyến trên LIVE hoặc bóc lột tình dục trẻ vị thành niên trong trường hợp đi du lịch, tìm cách lấy hoặc phát tán tài liệu lạm dụng tình dục trẻ em hoặc hình ảnh lạm dụng trẻ em chung chung hơn, cũng như hành vi sản xuất, sở hữu hoặc phát tán tài liệu lạm dụng tình dục trẻ em.',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung tương tác với trẻ vị thành niên bằng cách khiêu dâm hoặc gợi tình đối với trẻ vị thành niên thông qua các tính năng sản phẩm như Duet, hoặc nội dung thể hiện, cổ động, bình thường hóa hoặc ca ngợi các hành vi dỗ tình dục trẻ em như tìm cách thiết lập mối quan hệ tin tưởng với trẻ vị thành niên nhằm mục đích lạm dụng tình dục trẻ em.',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung thể hiện, yêu cầu, ca ngợi hoặc cổ động hình ảnh lạm dụng trẻ em, bao gồm hình ảnh khoả thân, trẻ vị thành niên bị khiêu dâm, hoạt động tình dục với trẻ vị thành niên, hành vi ấu dâm hoặc tấn công tình dục trẻ vị thành niên',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung tái hãm hại hoặc lợi dụng các nạn nhân vị thành niên từng bị lạm dụng bằng cách chia sẻ lại hoặc tái hiện hành vi tấn công hay thú tội',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung yêu cầu tiếp xúc tình dục (trong môi trường thực tế hoặc trên một nền tảng hoặc trang web khác) giữa trẻ vị thành niên và người lớn hoặc giữa các trẻ vị thành niên có chênh lệch tuổi tác đáng kể',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung hiển thị hoặc cung cấp hình ảnh khỏa thân cho trẻ vị thành niên, hoặc yêu cầu hình ảnh khỏa thân hay tiếp xúc tình dục thông qua hình thức hăm dọa để tống tiền hoặc các hình thức ép buộc khác',
                                },
                                {
                                    type: 'send-report',
                                    title: '"Lạm dụng hoặc tội phạm nhắm vào trẻ vị thành niên" có nghĩa là nội dung video, hình ảnh hoặc ngôn ngữ yêu cầu, cổ động hoặc tạo điều kiện cho hành vi gây tổn hại nghiêm trọng về thể chất, tinh thần hoặc tình cảm của trẻ vị thành niên. Lạm dụng trẻ em là hình thức bóc lột, trong đó trẻ vị thành niên bị sử dụng hòng trục lợi, bị bắt lao động, thỏa mãn tình dục hay phục vụ các mối lợi cá nhân hoặc tài chính khác.',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Hành vi nguy hiểm hoặc bất hợp pháp của trẻ vị thành niên',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung gợi ý, trình bày, bắt chước hoặc cổ động trẻ vị thành niên sở hữu hoặc tiêu thụ đồ uống có cồn, thuốc lá hoặc ma túy, bao gồm sử dụng biểu tượng cảm xúc để cổ động hành vi sử dụng trái phép thuốc không kê đơn.',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung hướng dẫn trẻ vị thành niên cách mua, bán hoặc giao dịch đồ uống có cồn, thuốc lá hoặc các chất bị kiểm soát',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày hoặc cổ động các hoạt động có thể gây nguy hiểm cho trẻ vị thành niên, bao gồm các thử thách, thách đố, pha mạo hiểm gây nguy hiểm tới thể chất, chẳng hạn như ăn thực phẩm hoặc các chất nguy hiểm để tham gia thử thách',
                                },
                                {
                                    type: 'send-report',
                                    title: '"Hành vi nguy hiểm hoặc bất hợp pháp của trẻ vị thành niên" có nghĩa là nội dung video, hình ảnh hoặc ngôn ngữ gợi ý, trình bày hoặc bắt chước trẻ vị thành niên tham gia vào các hoạt động có hại tới sức khỏe thể chất, tinh thần hoặc tình cảm của trẻ.',
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            title: 'Hành động và thử thích nguy hiểm',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày hoặc gợi ý việc sử dụng không phù hợp các công cụ hoặc đồ vật nguy hiểm',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày hành vi lái xe nguy hiểm',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày hoặc cổ động hành vi ăn các chất không ăn được và có thể gây ra tác hại nghiêm trọng',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung mô tả hoặc cung cấp hướng dẫn về cách thực hiện một hoạt động nguy hiểm',
                    },
                    {
                        type: 'send-report',
                        title: 'Trò chơi, thách đố, thử thách nguy hiểm, hay các pha mạo hiểm có thể dẫn đến thương tật hoặc thiệt hại tài sản',
                    },
                ],
            },
        },
        {
            title: 'Tự tử, tự làm hại bản thân và rối loạn ăn uống',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Tự tử và làm hại bản thân',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày, cổ động, bình thường hóa hoặc ca ngợi hành vi tự tử hoặc tự làm hại bản thân',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung hướng dẫn cách tự tử hoặc cách tự làm hại bản thân',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Trò chơi, thách đố, thử thách, giao kèo hoặc trò lừa bịp liên quan đến hành vi tự tử hoặc tự làm hại bản thân',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Rối loại ăn uống',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày, cổ động, bình thường hóa hoặc ca ngợi hành vi rối loạn ăn uống',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày, cổ động, bình thường hóa hoặc ca ngợi hành vi giảm cân nguy hiểm có thể liên quan tới rối loạn ăn uống',
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            title: 'Hình ảnh khỏa thân và hoạt động tình dục giữa người lớn',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Nội dung khiêu dâm và khỏa thân của người lớn',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung khỏa thân, đồi trụy hoặc khiêu dâm',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Tấn công tình dục hoặc chia sẻ hình ảnh khỏa thân, riêng tư',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày hoặc cổ động hành vi tấn công tình dục, chia sẻ hình ảnh thân mật riêng tư hoặc gạ gẫm tình dục',
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            title: 'Bắt nạt và quấy rối',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Tôi đã từng bị bắt nạt hoặc quấy rối',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung hạ thấp nhân phẩm của người khác hoặc nguyền rủa họ gặp nguy hiểm',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung khuyến khích hành vi quấy rối có phối hợp',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày hành vi bắt nạt thể chất để sỉ nhục người khác',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung quấy rối tình dục người khác',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung đe dọa tiết lộ thông tin cá nhân',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Tôi biết một người đã từng bị bắt nạt hoặc quấy rối',
                        icon: <ArrowRightIcon />,
                    },
                    {
                        title: 'Một người nổi tiếng hoặc quan chức chính phủ đã từng bị bắt nạt hoặc quấy rối',
                        icon: <ArrowRightIcon />,
                    },
                    {
                        title: 'Những người khác đã từng bị bắt nạt hoặc quấy rối',
                        icon: <ArrowRightIcon />,
                    },
                ],
            },
        },
        {
            title: 'Hành vi thù địch',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        type: 'send-report',
                        title: 'Nội dung có chứa phát ngôn thù địch hoặc liên quan đến hành vi thù địch',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung tấn công, đe dọa, kích động bạo lực hoặc hạ thấp nhân phẩm của một người hoặc một nhóm người dựa trên các đặc điểm được bảo vệ của họ: chủng tộc, dân tộc, nguồn gốc quốc gia, tôn giáo, địa vị xã hội, khuynh hướng tình dục, giới tính khi sinh ra, giới tính hiện tại, bản dạng giới, bệnh nghiêm trọng, tình trạng khuyết tật và tình trạng nhập cư',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung có tính chất thù địch rõ ràng đối với mọi người dựa trên các đặc điểm được bảo vệ nêu trên',
                    },
                ],
            },
        },
        {
            title: 'Chủ nghĩa cực đoan và bạo lực',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Các tổ chức thù địch, khủng bố và tội phạm',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung ca ngợi, tán thành, tôn vinh hoặc ủng hộ các tổ chức thù địch, khủng bố hoặc tội phạm.',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Đe dọa bạo lực hoặc kích động bạo lực',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Tuyên bố về ý định gây thương tích cho một người hoặc một nhóm người',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Lời tuyên bố hoặc hình ảnh cổ động hành vi bạo lực thể chất',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Kêu gọi mang vũ khí đến một địa điểm nhằm đe dọa hoặc uy hiếp bạo lực đối với một cá nhân hoặc nhóm người',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Hướng dẫn cách chế tạo hoặc sử dụng vũ khí nhằm kích động bạo lực',
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            title: 'Nội dung rác và tương tác giả mạo',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        type: 'send-report',
                        title: 'Thông tin về cách tăng lượt xem, lượt thích, follower, bình luận hoặc hoạt động chia sẻ nội dung bằng cách giả tạo',
                    },
                    {
                        type: 'send-report',
                        title: 'Mua hoặc bán lượt xem, lượt thích, follower, bình luận hoặc hoạt động chia sẻ nội dung',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung quảng bá dịch vụ tạo lưu lượng truy cập giả tạo',
                    },
                    {
                        type: 'send-report',
                        title: 'Sử dụng nhiều tài khoản TikTok để phát tán nội dung rác',
                    },
                ],
            },
        },
        {
            title: 'Thông tin sai lệch và gây nguy hiểm',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Y tế',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Thông tin sai lệch có thể gây tổn hại đến sức khỏe của cá nhân hoặc cộng đồng, bao gồm tư vấn y tế gây hại hoặc thông tin không chính xác về các căn bệnh và vắc xin có thể gây chết người.',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Các thông tin sai lệch gây nguy hiểm khác',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Thông tin sai lệch gây kích động tư tưởng thù ghét hoặc thiên kiến',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Thông tin sai lệch về tình trạng khẩn cấp gây ra hoảng loạn ',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Các thuyết âm mưu tấn công hoặc kết tội một nhóm người được bảo vệ, phủ nhận một thảm kịch hoặc kêu gọi bạo lực',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Video giả mạo bóp méo sự kiện thực tế và gây tổn hại đáng kể cho đối tượng của video, người khác hoặc xã hội',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Hành vi nguy hiểm hoặc bất hợp pháp của trẻ vị thành niên',
                        icon: <ArrowRightIcon />,
                    },
                ],
            },
        },
        {
            title: 'Các hoạt động bất hợp pháp và hàng hóa bị kiểm soát',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Cổ vũ hoạt động phạm tội',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung cổ động các hành vi gây tổn hại về thể chất, như hành hung hoặc bắt cóc',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung có nguy cơ gây nguy hiểm đến sự an toàn của người khác, bao gồm cả hành động chơi khăm',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung cổ động hành vi bóc lột con người, bao gồm buôn người, lao động lệ thuộc, nô lệ giúp việc nhà, mua dâm/bán dâm hoặc mại dâm',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung cổ động hành vi phá hoại tài sản',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung cổ động hành vi săn bắn hoặc buôn bán trái phép động vật hoang dã',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung nhằm mục đích mua, bán, giao dịch hoặc yêu cầu hàng hóa bất hợp pháp hoặc hàng giả',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung hướng dẫn về cách thực hiện các hoạt động tội phạm gây hại cho con người, động vật hoặc tài sản',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Bán hoặc sử dụng vũ khí',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung có hiển thị hình ảnh súng cầm tay, phụ kiện súng, đạn dược hoặc vũ khí gây nổ',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung nhằm mục đích mua, bán, giao dịch hoặc yêu cầu súng cầm tay, phụ kiện súng, đạn dược, vũ khí gây nổ hoặc hướng dẫn về cách sản xuất các loại trên',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Ma túy hoặc chất bị kiểm soát',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày hoặc quảng bá ma túy, tiêu thụ ma túy hoặc khuyến khích người khác sản xuất, sử dụng hoặc giao dịch ma túy hay các chất bị kiểm soát khác',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung nhằm mục đích mua, bán, giao dịch hoặc yêu cầu ma túy hay các chất bị kiểm soát khác, các sản phẩm rượu hoặc thuốc lá, bao gồm cả các sản phẩm thuốc lá điện tử, các sản phẩm thuốc lá không khói hoặc thuốc lá dạng châm lửa để hút, các sản phẩm nicotin tổng hợp, thuốc lá điện tử và các sản phẩm tương tự khác',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung cung cấp thông tin về cách mua các chất bất hợp pháp hoặc chất bị kiểm soát',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày hoặc cổ động hành vi lạm dụng các chất hợp pháp hoặc hướng dẫn cách sản xuất các chất có thể gây say xỉn',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Cờ bạc',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung quảng bá sòng bài, cá cược thể thao, đánh bài, xổ số, phần mềm và ứng dụng liên quan đến cờ bạc hoặc các dịch vụ cờ bạc khác',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Quyền riêng tư và dữ liệu cá nhân',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung chứa dữ liệu cá nhân hoặc thông tin nhận dạng cá nhân',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Buôn bán động vật hoang dã',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung trình bày hoặc cổ động hành vi buôn bán trái phép các loài động vật có nguy cơ tuyệt chủng, bao gồm mua bán các động vật còn sống, các bộ phận của động vật hoặc sản phẩm làm từ những động vật này',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung yêu cầu hoặc cung cấp thông tin về cách tham gia hoạt động buôn bán trái phép động vật hoang dã',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Gian lận và lừa đảo',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Nội dung cổ động hành vi lừa đảo',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung quảng bá mô hình Ponzi (vay tiền lừa đảo), tiếp thị đa cấp hoặc mô hình kim tự tháp lừa đảo',
                                },
                                {
                                    type: 'send-report',
                                    title: 'Nội dung quảng bá các mô hình đầu tư với hứa hẹn mang lại lợi nhuận cao, cá cược bất công hoặc bất kỳ hình thức lừa đảo nào khác',
                                },
                            ],
                        },
                    },
                ],
            },
        },
        {
            title: 'Nội dung bạo lực và phản cảm',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày sự việc tử vong do tai nạn hoặc mang tính bạo lực của người thật',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày hành vi giết động vật thực',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày phần còn lại của con người và động vật sau khi bị chặt chân tay, cắt xẻo, thiêu hoặc đốt',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung đẫm máu tập trung chính vào vết thương hoặc thương tật hở',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày hành vi bạo lực thể chất nghiêm trọng của con người',
                    },
                    {
                        type: 'send-report',
                        title: 'Nội dung trình bày hành vi ngược đãi động vật',
                    },
                ],
            },
        },
        {
            title: 'Vi phạm quyền sở hữu trí tuệ',
            icon: <ArrowRightIcon />,
        },
        {
            title: 'khác',
            icon: <ArrowRightIcon />,
            children: {
                data: [
                    {
                        title: 'Không thể tìm thấy lý do thích hợp để báo cáo',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Ưu tiên của chúng tôi là cung cấp môi trường an toàn và mang tính hỗ trợ. Chúng tôi cũng khuyến khích môi trường tương tác xác thực bằng cách loại bỏ nội dung và tài khoản lừa đảo khỏi nền tảng.',
                                },
                            ],
                        },
                    },
                    {
                        title: 'Tôi không quan tâm đến nội dung này',
                        icon: <ArrowRightIcon />,
                        children: {
                            data: [
                                {
                                    type: 'send-report',
                                    title: 'Ưu tiên của chúng tôi là cung cấp môi trường an toàn và mang tính hỗ trợ. Chúng tôi cũng khuyến khích môi trường tương tác xác thực bằng cách loại bỏ nội dung và tài khoản lừa đảo khỏi nền tảng.',
                                },
                            ],
                        },
                    },
                ],
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Header stretch />
            <div className={cx('container')}>
                <Sidebar shrink />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
StretchLayout.propTypes = {
    children: propTypes.node.isRequired,
};
export default StretchLayout;
