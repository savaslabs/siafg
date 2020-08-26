import React from 'react';
import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const LabsLogoMobile = () => {
  return (
    <MobileLogo
      width="184"
      height="88"
      viewBox="0 0 184 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      F
    >
      <circle cx="50.8402" cy="20.975" r="20.975" fill="#F9F8FF" />
      <mask
        id="mask_circle"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="29"
        y="0"
        width="43"
        height="42"
      >
        <circle cx="50.8402" cy="20.975" r="20.975" fill="#F9F8FF" />
      </mask>
      <g mask="url(#mask_circle)">
      <mask
          id="mask_goggles"
          mask-type="alpha"
          maskUnits="userSpaceOnUse"
          x="38"
          y="12"
          width="26"
          height="11"
        >
          <path
            d="M58.1681 22.9114C56.6886 22.9114 55.3407 22.2867 54.3215 21.1689C53.4339 20.2155 52.1846 19.6566 50.8695 19.6566C49.5544 19.6566 48.2723 20.2155 47.3846 21.2018C45.4778 23.3059 42.223 23.4703 40.1189 21.5634C38.0148 19.6566 37.8504 16.4018 39.7572 14.2977C40.7435 13.2128 42.1243 12.5881 43.5709 12.5881H58.201C61.0283 12.5881 63.3626 14.8895 63.3626 17.7498C63.3297 20.5771 61.0283 22.9114 58.1681 22.9114Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask_goggles)">
          <path
            d="M69.8101 11.6326L57.7937 23.649H37.362L49.3784 11.6326H69.8101Z"
            fill="#635685"
            className="glare"
          />
          <path
            d="M47.8242 11.6326L35.8078 23.649H31.8619L43.8783 11.6326H47.8242Z"
            fill="#635685"
            className="glare"
          />
        </g>
        <path
          d="M64.7105 14.9882H63.0995C62.1132 13.2129 60.2393 12.1279 58.2009 12.1279H43.538C41.4996 12.1279 39.6257 13.2129 38.6394 14.9882H36.9627C36.8312 14.9882 36.7325 15.0868 36.7325 15.2183V20.1827C36.7325 20.3142 36.8312 20.4128 36.9627 20.4128H38.5736C40.0531 23.1416 43.4722 24.1607 46.201 22.6813C46.7599 22.3854 47.2859 21.958 47.7133 21.4977C48.5023 20.6101 49.653 20.1169 50.8366 20.1169C52.0201 20.1169 53.1379 20.6101 53.927 21.4649C55.0119 22.6813 56.5242 23.3717 58.168 23.3717C60.2393 23.3717 62.1461 22.221 63.1324 20.4128H64.7105C64.842 20.4128 64.9406 20.3142 64.9406 20.1827V15.2183C64.9406 15.0868 64.842 14.9882 64.7105 14.9882ZM58.168 22.9114C56.6886 22.9114 55.3407 22.2868 54.3215 21.169C53.4338 20.2156 52.1845 19.6567 50.8695 19.6567C49.5544 19.6567 48.2722 20.2156 47.3845 21.2019C45.4777 23.306 42.2229 23.4703 40.1188 21.5635C38.0147 19.6567 37.8503 16.4019 39.7572 14.2978C40.7435 13.2129 42.1243 12.5882 43.5709 12.5882H58.2009C61.0283 12.5882 63.3625 14.8896 63.3625 17.7498C63.3297 20.5772 61.0283 22.9114 58.168 22.9114Z"
          fill="#635685"
        />
        <path
          d="M38.3763 8.70864C38.1133 8.41275 38.3435 7.95248 38.738 7.95248H43.0777C44.3927 7.95248 45.6749 7.7881 46.9242 7.42645C48.1735 7.06481 49.4557 6.86755 50.8365 6.86755C52.2174 6.86755 53.4995 7.06481 54.7488 7.42645C55.9982 7.7881 57.3132 7.95248 58.5954 7.95248H62.9351C63.3296 7.95248 63.5598 8.41275 63.2967 8.74152L61.5214 10.8456C61.2913 11.1086 61.2913 11.5031 61.5214 11.7662C62.1461 12.4894 62.705 13.2785 63.1652 14.1004C62.0146 12.5552 60.1735 11.6018 58.2009 11.6018H43.5379C41.4338 11.6018 39.4613 12.6867 38.3435 14.462C38.8366 13.5086 39.4613 12.5881 40.1845 11.7662C40.4147 11.5031 40.4147 11.1086 40.1845 10.8456L38.3763 8.70864ZM49.4557 17.0264C49.4557 15.7442 48.4037 14.6593 47.0886 14.6593C45.7735 14.6593 44.7544 15.7113 44.7544 17.0264C44.7544 18.3415 45.8064 19.3935 47.1215 19.3935C48.4365 19.3935 49.4557 18.3086 49.4557 17.0264ZM54.5516 19.3606C53.2694 19.3606 52.1845 18.3086 52.1845 16.9935C52.1845 15.6785 53.2365 14.6264 54.5516 14.6264C55.8666 14.6264 56.9187 15.6785 56.9187 16.9935C56.9187 18.3086 55.8666 19.3606 54.5516 19.3606ZM41.4338 35.0756C41.4338 29.8811 45.642 25.6729 50.8365 25.6729C56.031 25.6729 60.2392 29.8811 60.2392 35.0756V44.2482C57.5762 43.755 55.0776 42.5057 53.1379 40.566C50.6064 38.0345 49.1927 34.6482 49.1927 31.0647C49.1927 29.9798 49.3242 28.9277 49.5544 27.9085C49.6859 27.4154 49.2256 26.9551 48.7324 27.0866C47.516 27.4154 46.3653 28.0072 45.4119 28.862C45.3462 28.9277 45.2804 28.9935 45.2146 29.0592C44.7873 29.4537 44.5242 30.0455 44.5242 30.6373C44.5242 30.7688 44.5242 30.9003 44.5242 31.0647C44.5242 33.4975 45.0174 35.8647 45.9379 38.1003C46.8585 40.2701 48.1407 42.177 49.8174 43.8537C51.4941 45.5304 53.4009 46.8125 55.5708 47.7331C57.8064 48.6865 60.1735 49.1468 62.6063 49.1468H64.2502C64.6447 49.1468 64.9406 48.818 64.9406 48.4564V35.0756C64.9406 32.5113 64.2502 30.1113 63.0337 28.0072C64.2502 25.9359 64.9406 23.536 64.9406 20.9387H64.8237C64.7645 20.9387 64.7762 20.9387 64.7104 20.9387H63.4611C62.3433 22.7798 60.3379 23.8976 58.2009 23.8976C56.4255 23.8976 54.7488 23.1086 53.5653 21.7935C53.3352 21.5634 53.0721 21.3332 52.8091 21.1688C52.6776 21.2346 52.5132 21.3004 52.4146 21.4319L50.8694 23.2729L49.3242 21.4319C49.2256 21.3332 49.0941 21.2346 48.9626 21.1688C48.6667 21.3332 48.4037 21.5634 48.1735 21.8264C47.7133 22.3524 47.1544 22.7798 46.5297 23.1414C45.642 23.6346 44.6229 23.8976 43.6037 23.8976C41.4338 23.8976 39.4284 22.7798 38.3106 20.9387H36.9955C36.8969 20.9387 36.9012 20.9387 36.8355 20.9387H36.7654C36.7654 23.5031 37.4558 25.9359 38.6722 28.0072C37.4558 30.0784 36.7654 32.4784 36.7654 35.0427C36.7654 38.429 37.9489 41.5194 39.9544 43.9523C42.5517 47.1084 46.464 49.1468 50.8694 49.1468C51.4941 49.1468 52.0858 49.1139 52.6776 49.0481C53.3352 48.9495 53.5324 48.0947 52.9406 47.7331C51.4941 46.9112 50.179 45.892 48.9955 44.6756C48.6667 44.3468 48.2722 44.0838 47.8119 43.9194C46.1023 43.3276 44.59 42.2427 43.4722 40.829C42.19 39.2838 41.4338 37.2783 41.4338 35.0756Z"
          fill="#635685"
        />
      </g>
      <path
        d="M113.957 21.8274V34.072C113.957 34.4547 113.67 34.7416 113.288 34.7416H109.27C108.887 34.7416 108.6 34.4547 108.6 34.072V33.5937C107.357 34.5503 105.73 35.2199 103.913 35.2199C99.9908 35.2199 96.9296 32.4458 96.9296 28.715C96.9296 24.9842 99.9908 22.2101 103.913 22.2101C105.539 22.2101 107.07 22.6884 108.313 23.645V22.0188C108.313 20.3925 107.357 19.4359 105.73 19.4359C104.582 19.4359 103.722 19.9142 103.435 20.7752C103.339 21.0621 103.052 21.2535 102.765 21.2535H98.5559C98.0776 21.2535 97.6949 20.7752 97.7906 20.2969C98.7472 17.0444 101.713 14.7485 105.826 14.7485C110.513 14.6529 113.957 17.5227 113.957 21.8274ZM108.313 28.715C108.313 27.4714 107.07 26.4191 105.539 26.4191C104.009 26.4191 102.765 27.3758 102.765 28.715C102.765 29.9586 104.009 30.9152 105.539 30.9152C107.07 30.9152 108.313 29.9586 108.313 28.715Z"
        fill="#635685"
      />
      <path
        d="M139.977 28.7151H143.708C144.186 28.7151 144.569 29.0021 144.664 29.3847C144.951 30.15 145.717 30.6283 146.577 30.6283C147.63 30.6283 148.491 29.9587 148.491 29.0978C148.491 27.8542 146.96 27.2802 145.334 26.8976C142.368 26.2279 139.116 24.6974 139.116 20.6796C139.116 16.6619 142.56 14.4617 146.482 14.4617C150.213 14.4617 153.082 16.5662 153.752 19.436C153.848 20.01 153.465 20.584 152.795 20.584H148.969C148.586 20.584 148.299 20.3926 148.108 20.01C147.917 19.3404 147.247 18.8621 146.386 18.8621C145.43 18.8621 144.76 19.436 144.76 20.2013C144.76 21.3492 146.099 21.9232 148.012 22.4015C150.978 23.1668 154.135 24.506 154.135 28.5238C154.135 32.6372 150.691 35.0287 146.577 35.0287C142.655 35.0287 139.69 32.7329 139.02 29.7674C138.829 29.2891 139.307 28.7151 139.977 28.7151Z"
        fill="#635685"
      />
      <path
        d="M96.1643 29.8634V33.9768C96.1643 34.3595 95.7817 34.7421 95.399 34.7421H82.5805C82.1978 34.7421 81.8152 34.3595 81.8152 33.9768V8.91372C81.8152 8.53108 82.1978 8.14844 82.5805 8.14844H87.0765C87.4592 8.14844 87.8418 8.53108 87.8418 8.91372V29.0981H95.4947C95.8773 29.0981 96.1643 29.4808 96.1643 29.8634Z"
        fill="#635685"
      />
      <path
        d="M137.968 24.8886C137.968 30.7239 133.95 35.2199 128.498 35.2199C126.106 35.2199 124.002 34.2633 122.567 32.5414V33.785C122.567 34.359 122.088 34.7416 121.61 34.7416H117.975C117.401 34.7416 117.018 34.2633 117.018 33.785V7.95661C117.018 7.38264 117.497 7 117.975 7H121.61C122.184 7 122.567 7.4783 122.567 7.95661V17.2357C124.002 15.6095 126.106 14.5572 128.498 14.5572C133.95 14.6529 137.968 19.0533 137.968 24.8886ZM132.228 24.8886C132.228 22.1144 130.219 20.0099 127.445 20.0099C124.671 20.0099 122.662 22.1144 122.662 24.8886C122.662 27.6627 124.671 29.7673 127.445 29.7673C130.219 29.7673 132.228 27.6627 132.228 24.8886Z"
        fill="#635685"
      />
      <path
        d="M3.66104 66.119C4.92383 66.119 5.63477 65.4777 5.91815 64.9059H5.97781V65.95H7.42951V60.8789C7.42951 58.6566 5.67951 58.2142 4.46644 58.2142C3.08434 58.2142 1.81161 58.771 1.31445 60.163L2.71147 60.4812C2.93022 59.9393 3.48704 59.4173 4.48633 59.4173C5.44585 59.4173 5.93803 59.9194 5.93803 60.7845V60.8193C5.93803 61.3612 5.38121 61.3512 4.00906 61.5103C2.56232 61.6794 1.08079 62.0572 1.08079 63.7923C1.08079 65.2937 2.20934 66.119 3.66104 66.119ZM3.9842 64.9258C3.144 64.9258 2.53746 64.548 2.53746 63.8122C2.53746 63.0167 3.24343 62.7333 4.10352 62.619C4.58576 62.5544 5.72923 62.4251 5.943 62.2113V63.1957C5.943 64.1005 5.22212 64.9258 3.9842 64.9258ZM13.1145 68.8136H14.601V64.7617H14.6905C14.959 65.249 15.5059 66.0991 16.8979 66.0991C18.7473 66.0991 20.0897 64.6176 20.0897 62.1467C20.0897 59.6708 18.7275 58.2142 16.883 58.2142C15.4661 58.2142 14.954 59.0792 14.6905 59.5515H14.5662V58.3136H13.1145V68.8136ZM14.5712 62.1318C14.5712 60.5359 15.2672 59.4769 16.5648 59.4769C17.9121 59.4769 18.5882 60.6154 18.5882 62.1318C18.5882 63.663 17.8922 64.8313 16.5648 64.8313C15.2871 64.8313 14.5712 63.7376 14.5712 62.1318ZM23.2417 55.7681H21.7551V65.95H23.2417V55.7681ZM27.4638 66.119C28.7266 66.119 29.4375 65.4777 29.7209 64.9059H29.7805V65.95H31.2322V60.8789C31.2322 58.6566 29.4822 58.2142 28.2692 58.2142C26.8871 58.2142 25.6143 58.771 25.1172 60.163L26.5142 60.4812C26.733 59.9393 27.2898 59.4173 28.2891 59.4173C29.2486 59.4173 29.7408 59.9194 29.7408 60.7845V60.8193C29.7408 61.3612 29.1839 61.3512 27.8118 61.5103C26.3651 61.6794 24.8835 62.0572 24.8835 63.7923C24.8835 65.2937 26.0121 66.119 27.4638 66.119ZM27.7869 64.9258C26.9467 64.9258 26.3402 64.548 26.3402 63.8122C26.3402 63.0167 27.0462 62.7333 27.9062 62.619C28.3885 62.5544 29.532 62.4251 29.7457 62.2113V63.1957C29.7457 64.1005 29.0249 64.9258 27.7869 64.9258ZM36.4288 66.1041C38.2335 66.1041 39.4018 65.0203 39.5659 63.5338H38.1191C37.9302 64.359 37.2889 64.8463 36.4387 64.8463C35.1809 64.8463 34.3706 63.7973 34.3706 62.1318C34.3706 60.4961 35.1958 59.467 36.4387 59.467C37.3833 59.467 37.96 60.0636 38.1191 60.7795H39.5659C39.4068 59.2383 38.149 58.2142 36.4139 58.2142C34.2612 58.2142 32.8691 59.8349 32.8691 62.1666C32.8691 64.4684 34.2115 66.1041 36.4288 66.1041ZM44.4467 66.1041C46.1122 66.1041 47.2905 65.2838 47.6286 64.0409L46.2216 63.7873C45.9531 64.5082 45.3068 64.8761 44.4616 64.8761C43.1889 64.8761 42.3338 64.0508 42.294 62.5792H47.723V62.0522C47.723 59.293 46.0724 58.2142 44.3423 58.2142C42.2145 58.2142 40.8125 59.8349 40.8125 62.1815C40.8125 64.5529 42.1946 66.1041 44.4467 66.1041ZM42.299 61.4656C42.3587 60.3818 43.1442 59.4421 44.3523 59.4421C45.5057 59.4421 46.2614 60.2973 46.2663 61.4656H42.299ZM56.7116 58.3136H55.0661V57.6275C55.0661 56.9514 55.3445 56.5835 56.0703 56.5835C56.3786 56.5835 56.5973 56.6531 56.7365 56.6978L57.0845 55.4947C56.8757 55.4151 56.4432 55.2909 55.8416 55.2909C54.6335 55.2909 53.5746 55.9968 53.5746 57.4286V58.3136H52.3963V59.5068H53.5746V65.95H55.0661V59.5068H56.7116V58.3136ZM61.1612 66.1041C63.3139 66.1041 64.7209 64.5281 64.7209 62.1666C64.7209 59.7901 63.3139 58.2142 61.1612 58.2142C59.0085 58.2142 57.6016 59.7901 57.6016 62.1666C57.6016 64.5281 59.0085 66.1041 61.1612 66.1041ZM61.1662 64.8562C59.7592 64.8562 59.103 63.6282 59.103 62.1616C59.103 60.7 59.7592 59.4571 61.1662 59.4571C62.5632 59.4571 63.2195 60.7 63.2195 62.1616C63.2195 63.6282 62.5632 64.8562 61.1662 64.8562ZM66.3801 65.95H67.8667V61.2866C67.8667 60.2873 68.6373 59.5664 69.6912 59.5664C69.9995 59.5664 70.3475 59.6211 70.4668 59.6559V58.234C70.3176 58.2142 70.0243 58.1992 69.8354 58.1992C68.9405 58.1992 68.1749 58.7063 67.8965 59.5267H67.8169V58.3136H66.3801V65.95ZM78.7495 66.1041C80.415 66.1041 81.5932 65.2838 81.9313 64.0409L80.5243 63.7873C80.2559 64.5082 79.6096 64.8761 78.7644 64.8761C77.4917 64.8761 76.6365 64.0508 76.5968 62.5792H82.0257V62.0522C82.0257 59.293 80.3752 58.2142 78.6451 58.2142C76.5172 58.2142 75.1152 59.8349 75.1152 62.1815C75.1152 64.5529 76.4973 66.1041 78.7495 66.1041ZM76.6017 61.4656C76.6614 60.3818 77.4469 59.4421 78.655 59.4421C79.8084 59.4421 80.5641 60.2973 80.5691 61.4656H76.6017ZM84.6706 58.3136H83.04L85.3865 62.1318L83.0101 65.95H84.6408L86.356 63.0963L88.0762 65.95H89.7019L87.3006 62.1318L89.682 58.3136H88.0563L86.356 61.2866L84.6706 58.3136ZM91.2083 68.8136H92.6948V64.7617H92.7843C93.0527 65.249 93.5996 66.0991 94.9917 66.0991C96.8411 66.0991 98.1834 64.6176 98.1834 62.1467C98.1834 59.6708 96.8212 58.2142 94.9767 58.2142C93.5598 58.2142 93.0478 59.0792 92.7843 59.5515H92.66V58.3136H91.2083V68.8136ZM92.665 62.1318C92.665 60.5359 93.361 59.4769 94.6586 59.4769C96.0059 59.4769 96.682 60.6154 96.682 62.1318C96.682 63.663 95.986 64.8313 94.6586 64.8313C93.3809 64.8313 92.665 63.7376 92.665 62.1318ZM103.14 66.1041C104.806 66.1041 105.984 65.2838 106.322 64.0409L104.915 63.7873C104.646 64.5082 104 64.8761 103.155 64.8761C101.882 64.8761 101.027 64.0508 100.987 62.5792H106.416V62.0522C106.416 59.293 104.766 58.2142 103.036 58.2142C100.908 58.2142 99.5059 59.8349 99.5059 62.1815C99.5059 64.5529 100.888 66.1041 103.14 66.1041ZM100.992 61.4656C101.052 60.3818 101.838 59.4421 103.046 59.4421C104.199 59.4421 104.955 60.2973 104.96 61.4656H100.992ZM108.066 65.95H109.552V61.2866C109.552 60.2873 110.323 59.5664 111.377 59.5664C111.685 59.5664 112.033 59.6211 112.152 59.6559V58.234C112.003 58.2142 111.71 58.1992 111.521 58.1992C110.626 58.1992 109.86 58.7063 109.582 59.5267H109.502V58.3136H108.066V65.95ZM113.439 65.95H114.925V58.3136H113.439V65.95ZM114.189 57.1353C114.702 57.1353 115.129 56.7376 115.129 56.2504C115.129 55.7632 114.702 55.3605 114.189 55.3605C113.672 55.3605 113.25 55.7632 113.25 56.2504C113.25 56.7376 113.672 57.1353 114.189 57.1353ZM116.925 65.95H118.412V61.2419C118.412 60.2127 119.132 59.4968 119.978 59.4968C120.803 59.4968 121.375 60.0437 121.375 60.874V65.95H122.856V61.0828C122.856 60.163 123.418 59.4968 124.387 59.4968C125.173 59.4968 125.819 59.9343 125.819 60.9684V65.95H127.306V60.8292C127.306 59.0842 126.331 58.2142 124.949 58.2142C123.85 58.2142 123.025 58.7411 122.657 59.5565H122.578C122.245 58.7213 121.544 58.2142 120.525 58.2142C119.515 58.2142 118.765 58.7163 118.446 59.5565H118.352V58.3136H116.925V65.95ZM132.589 66.1041C134.255 66.1041 135.433 65.2838 135.771 64.0409L134.364 63.7873C134.096 64.5082 133.449 64.8761 132.604 64.8761C131.331 64.8761 130.476 64.0508 130.437 62.5792H135.866V62.0522C135.866 59.293 134.215 58.2142 132.485 58.2142C130.357 58.2142 128.955 59.8349 128.955 62.1815C128.955 64.5529 130.337 66.1041 132.589 66.1041ZM130.442 61.4656C130.501 60.3818 131.287 59.4421 132.495 59.4421C133.648 59.4421 134.404 60.2973 134.409 61.4656H130.442ZM139.001 61.4159C139.001 60.1978 139.747 59.5018 140.781 59.5018C141.79 59.5018 142.402 60.163 142.402 61.2717V65.95H143.888V61.0927C143.888 59.2035 142.849 58.2142 141.288 58.2142C140.14 58.2142 139.389 58.7461 139.036 59.5565H138.942V58.3136H137.515V65.95H139.001V61.4159ZM149.447 58.3136H147.881V56.484H146.394V58.3136H145.276V59.5068H146.394V64.016C146.389 65.4031 147.448 66.0742 148.621 66.0494C149.094 66.0444 149.412 65.9549 149.586 65.8903L149.317 64.6623C149.218 64.6822 149.034 64.7269 148.795 64.7269C148.313 64.7269 147.881 64.5678 147.881 63.7078V59.5068H149.447V58.3136ZM153.313 66.119C154.576 66.119 155.287 65.4777 155.57 64.9059H155.63V65.95H157.082V60.8789C157.082 58.6566 155.332 58.2142 154.119 58.2142C152.737 58.2142 151.464 58.771 150.967 60.163L152.364 60.4812C152.583 59.9393 153.139 59.4173 154.139 59.4173C155.098 59.4173 155.59 59.9194 155.59 60.7845V60.8193C155.59 61.3612 155.034 61.3512 153.661 61.5103C152.215 61.6794 150.733 62.0572 150.733 63.7923C150.733 65.2937 151.862 66.119 153.313 66.119ZM153.637 64.9258C152.796 64.9258 152.19 64.548 152.19 63.8122C152.19 63.0167 152.896 62.7333 153.756 62.619C154.238 62.5544 155.382 62.4251 155.595 62.2113V63.1957C155.595 64.1005 154.874 64.9258 153.637 64.9258ZM162.626 58.3136H161.06V56.484H159.574V58.3136H158.455V59.5068H159.574V64.016C159.569 65.4031 160.628 66.0742 161.801 66.0494C162.273 66.0444 162.592 65.9549 162.766 65.8903L162.497 64.6623C162.398 64.6822 162.214 64.7269 161.975 64.7269C161.493 64.7269 161.06 64.5678 161.06 63.7078V59.5068H162.626V58.3136ZM164.271 65.95H165.757V58.3136H164.271V65.95ZM165.021 57.1353C165.534 57.1353 165.961 56.7376 165.961 56.2504C165.961 55.7632 165.534 55.3605 165.021 55.3605C164.504 55.3605 164.082 55.7632 164.082 56.2504C164.082 56.7376 164.504 57.1353 165.021 57.1353ZM170.974 66.1041C173.126 66.1041 174.533 64.5281 174.533 62.1666C174.533 59.7901 173.126 58.2142 170.974 58.2142C168.821 58.2142 167.414 59.7901 167.414 62.1666C167.414 64.5281 168.821 66.1041 170.974 66.1041ZM170.979 64.8562C169.572 64.8562 168.915 63.6282 168.915 62.1616C168.915 60.7 169.572 59.4571 170.979 59.4571C172.376 59.4571 173.032 60.7 173.032 62.1616C173.032 63.6282 172.376 64.8562 170.979 64.8562ZM177.679 61.4159C177.679 60.1978 178.425 59.5018 179.459 59.5018C180.468 59.5018 181.08 60.163 181.08 61.2717V65.95H182.566V61.0927C182.566 59.2035 181.527 58.2142 179.966 58.2142C178.818 58.2142 178.067 58.7461 177.714 59.5565H177.619V58.3136H176.193V65.95H177.679V61.4159ZM48.2519 84.119C49.5146 84.119 50.2256 83.4777 50.509 82.9059H50.5686V83.95H52.0203V78.8789C52.0203 76.6566 50.2703 76.2142 49.0573 76.2142C47.6752 76.2142 46.4024 76.771 45.9053 78.163L47.3023 78.4812C47.521 77.9393 48.0779 77.4173 49.0771 77.4173C50.0367 77.4173 50.5289 77.9194 50.5289 78.7845V78.8193C50.5289 79.3612 49.972 79.3512 48.5999 79.5103C47.1531 79.6794 45.6716 80.0572 45.6716 81.7923C45.6716 83.2937 46.8002 84.119 48.2519 84.119ZM48.575 82.9258C47.7348 82.9258 47.1283 82.548 47.1283 81.8122C47.1283 81.0167 47.8343 80.7333 48.6943 80.619C49.1766 80.5544 50.32 80.4251 50.5338 80.2113V81.1957C50.5338 82.1005 49.8129 82.9258 48.575 82.9258ZM57.5649 76.3136H55.9988V74.484H54.5123V76.3136H53.3937V77.5068H54.5123V82.016C54.5074 83.4031 55.5663 84.0742 56.7396 84.0494C57.2119 84.0444 57.5301 83.9549 57.7041 83.8903L57.4356 82.6623C57.3362 82.6822 57.1523 82.7269 56.9136 82.7269C56.4314 82.7269 55.9988 82.5678 55.9988 81.7078V77.5068H57.5649V76.3136ZM68.3234 76.6964H70.3866C70.3568 74.8818 68.8653 73.6289 66.5983 73.6289C64.366 73.6289 62.7304 74.8619 62.7403 76.7113C62.7354 78.2127 63.7943 79.0728 65.5145 79.4855L66.6231 79.7639C67.7318 80.0323 68.3483 80.3505 68.3532 81.0366C68.3483 81.7823 67.6423 82.2894 66.5486 82.2894C65.43 82.2894 64.6246 81.7724 64.555 80.7532H62.4719C62.5265 82.9556 64.1025 84.0941 66.5734 84.0941C69.0592 84.0941 70.5209 82.9059 70.5258 81.0416C70.5209 79.3463 69.2432 78.4464 67.4733 78.0487L66.5585 77.8299C65.6736 77.6261 64.9328 77.298 64.9477 76.5671C64.9477 75.9109 65.5294 75.4286 66.5834 75.4286C67.6125 75.4286 68.2439 75.896 68.3234 76.6964ZM74.1116 84.0941C75.2401 84.0941 75.971 83.6019 76.3438 82.891H76.4035V83.95H78.412V78.7994C78.412 76.9798 76.8708 76.2142 75.1705 76.2142C73.341 76.2142 72.1379 77.0892 71.8445 78.4812L73.8034 78.6403C73.9475 78.1332 74.3999 77.7603 75.1606 77.7603C75.8815 77.7603 76.2941 78.1232 76.2941 78.7497V78.7795C76.2941 79.2717 75.7721 79.3363 74.4447 79.4656C72.9333 79.6048 71.5761 80.1119 71.5761 81.8171C71.5761 83.3285 72.6549 84.0941 74.1116 84.0941ZM74.7181 82.6325C74.0669 82.6325 73.5995 82.3292 73.5995 81.7475C73.5995 81.1509 74.0917 80.8576 74.8374 80.7532C75.2998 80.6886 76.0555 80.5792 76.309 80.4102V81.2205C76.309 82.021 75.6478 82.6325 74.7181 82.6325ZM86.901 76.3136H84.6588L83.0779 81.7774H82.9983L81.4124 76.3136H79.1752L81.8449 83.95H84.2313L86.901 76.3136ZM89.9436 84.0941C91.0722 84.0941 91.803 83.6019 92.1759 82.891H92.2355V83.95H94.2441V78.7994C94.2441 76.9798 92.7029 76.2142 91.0026 76.2142C89.173 76.2142 87.9699 77.0892 87.6766 78.4812L89.6354 78.6403C89.7796 78.1332 90.232 77.7603 90.9926 77.7603C91.7135 77.7603 92.1262 78.1232 92.1262 78.7497V78.7795C92.1262 79.2717 91.6041 79.3363 90.2767 79.4656C88.7654 79.6048 87.4081 80.1119 87.4081 81.8171C87.4081 83.3285 88.4869 84.0941 89.9436 84.0941ZM90.5502 82.6325C89.8989 82.6325 89.4316 82.3292 89.4316 81.7475C89.4316 81.1509 89.9237 80.8576 90.6695 80.7532C91.1318 80.6886 91.8875 80.5792 92.1411 80.4102V81.2205C92.1411 82.021 91.4798 82.6325 90.5502 82.6325ZM102.241 78.4911C102.052 77.0842 100.918 76.2142 98.9894 76.2142C97.0356 76.2142 95.748 77.119 95.7529 78.5906C95.748 79.734 96.4688 80.4748 97.9603 80.7731L99.2828 81.0366C99.949 81.1708 100.252 81.4144 100.262 81.7973C100.252 82.2497 99.76 82.5728 99.0193 82.5728C98.2636 82.5728 97.7615 82.2497 97.6322 81.6282L95.5491 81.7376C95.748 83.1992 96.9909 84.0991 99.0143 84.0991C100.993 84.0991 102.41 83.0899 102.415 81.5835C102.41 80.4798 101.689 79.8186 100.207 79.5153L98.8254 79.2369C98.1144 79.0828 97.8509 78.8392 97.8559 78.4713C97.8509 78.0139 98.368 77.7156 99.0242 77.7156C99.76 77.7156 100.198 78.1183 100.302 78.6105L102.241 78.4911ZM107.028 83.95H113.546V82.1751H109.181V73.7681H107.028V83.95ZM117.11 84.0941C118.238 84.0941 118.969 83.6019 119.342 82.891H119.402V83.95H121.41V78.7994C121.41 76.9798 119.869 76.2142 118.169 76.2142C116.339 76.2142 115.136 77.0892 114.843 78.4812L116.801 78.6403C116.946 78.1332 117.398 77.7603 118.159 77.7603C118.88 77.7603 119.292 78.1232 119.292 78.7497V78.7795C119.292 79.2717 118.77 79.3363 117.443 79.4656C115.931 79.6048 114.574 80.1119 114.574 81.8171C114.574 83.3285 115.653 84.0941 117.11 84.0941ZM117.716 82.6325C117.065 82.6325 116.598 82.3292 116.598 81.7475C116.598 81.1509 117.09 80.8576 117.835 80.7532C118.298 80.6886 119.054 80.5792 119.307 80.4102V81.2205C119.307 82.021 118.646 82.6325 117.716 82.6325ZM123.093 83.95H125.181V82.7269H125.275C125.569 83.3633 126.21 84.0742 127.443 84.0742C129.183 84.0742 130.54 82.6971 130.54 80.1417C130.54 77.5167 129.123 76.2142 127.448 76.2142C126.17 76.2142 125.559 76.9748 125.275 77.5963H125.211V73.7681H123.093V83.95ZM125.166 80.1318C125.166 78.7696 125.743 77.8995 126.772 77.8995C127.821 77.8995 128.378 78.8093 128.378 80.1318C128.378 81.4642 127.811 82.3889 126.772 82.3889C125.753 82.3889 125.166 81.494 125.166 80.1318ZM138.307 78.4911C138.118 77.0842 136.985 76.2142 135.056 76.2142C133.102 76.2142 131.814 77.119 131.819 78.5906C131.814 79.734 132.535 80.4748 134.027 80.7731L135.349 81.0366C136.015 81.1708 136.319 81.4144 136.329 81.7973C136.319 82.2497 135.826 82.5728 135.086 82.5728C134.33 82.5728 133.828 82.2497 133.699 81.6282L131.616 81.7376C131.814 83.1992 133.057 84.0991 135.081 84.0991C137.059 84.0991 138.476 83.0899 138.481 81.5835C138.476 80.4798 137.755 79.8186 136.274 79.5153L134.892 79.2369C134.181 79.0828 133.917 78.8392 133.922 78.4713C133.917 78.0139 134.434 77.7156 135.091 77.7156C135.826 77.7156 136.264 78.1183 136.368 78.6105L138.307 78.4911Z"
        fill="#635685"
      />
    </MobileLogo>
  );
};

const MobileLogo = styled.svg`
  margin-bottom: 30px;

  ${breakpoint('lg')`
    display: none;
  `}

  .glare {
    transition: transform 0.4s;
    transform: translateX(-30px);
  }

  &:hover .glare {
    transform: translateX(30px);
  }
`;