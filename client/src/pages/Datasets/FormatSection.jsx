import React from "react";
import Tag from "./Tag";

const FormatSection = () => {
  const formats = [
    {
      name: "json",
      icon: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4031 2.625H9.43013V3.59683H10.4031V6.02817C10.4031 6.15579 10.4283 6.28216 10.4771 6.40007C10.5259 6.51798 10.5975 6.62511 10.6878 6.71536C10.778 6.8056 10.8851 6.87718 11.0031 6.92602C11.121 6.97486 11.2473 7 11.375 7C11.1172 7 10.87 7.10239 10.6878 7.28464C10.5055 7.4669 10.4031 7.71409 10.4031 7.97183V10.4032H9.43013V11.375H10.4031C10.9235 11.2432 11.375 10.9375 11.375 10.4032V8.45833C11.375 8.20059 11.4773 7.9534 11.6596 7.77114C11.8419 7.58889 12.089 7.4865 12.3468 7.4865H12.8333V6.5135H12.3468C12.089 6.5135 11.8419 6.41111 11.6596 6.22886C11.4773 6.0466 11.375 5.79941 11.375 5.54167V3.59683C11.375 3.33909 11.2726 3.0919 11.0903 2.90964C10.9081 2.72739 10.6609 2.625 10.4031 2.625ZM3.59679 2.625C3.33905 2.625 3.09186 2.72739 2.9096 2.90964C2.72735 3.0919 2.62496 3.33909 2.62496 3.59683V5.54167C2.62496 5.66929 2.59982 5.79566 2.55098 5.91357C2.50214 6.03148 2.43056 6.13861 2.34032 6.22886C2.25007 6.3191 2.14294 6.39068 2.02503 6.43952C1.90712 6.48836 1.78075 6.5135 1.65313 6.5135H1.16663V7.4865H1.65313C1.78075 7.4865 1.90712 7.51164 2.02503 7.56048C2.14294 7.60932 2.25007 7.6809 2.34032 7.77114C2.43056 7.86139 2.50214 7.96852 2.55098 8.08643C2.59982 8.20434 2.62496 8.33071 2.62496 8.45833V10.4032C2.62496 10.6609 2.72735 10.9081 2.9096 11.0904C3.09186 11.2726 3.33905 11.375 3.59679 11.375H4.56979V10.4032H3.59679V7.97183C3.59679 7.71409 3.4944 7.4669 3.31215 7.28464C3.1299 7.10239 2.88271 7 2.62496 7C2.75258 7 2.87896 6.97486 2.99686 6.92602C3.11477 6.87718 3.22191 6.8056 3.31215 6.71536C3.40239 6.62511 3.47398 6.51798 3.52282 6.40007C3.57166 6.28216 3.59679 6.15579 3.59679 6.02817V3.59683H4.56979V2.625H3.59679ZM6.99996 8.45833C6.93414 8.45511 6.86836 8.46528 6.8066 8.48825C6.74484 8.51121 6.68838 8.54648 6.64066 8.59192C6.59294 8.63736 6.55495 8.69202 6.52899 8.75258C6.50303 8.81315 6.48964 8.87836 6.48964 8.94425C6.48964 9.01014 6.50303 9.07535 6.52899 9.13591C6.55495 9.19648 6.59294 9.25114 6.64066 9.29658C6.68838 9.34202 6.74484 9.37729 6.8066 9.40025C6.86836 9.42321 6.93414 9.43339 6.99996 9.43017C7.12471 9.42405 7.24234 9.37019 7.32847 9.27973C7.4146 9.18927 7.46264 9.06915 7.46264 8.94425C7.46264 8.81935 7.4146 8.69923 7.32847 8.60877C7.24234 8.51831 7.12471 8.46445 6.99996 8.45833ZM8.94479 8.45833C8.87898 8.45511 8.81319 8.46528 8.75143 8.48825C8.68967 8.51121 8.63321 8.54648 8.58549 8.59192C8.53777 8.63736 8.49978 8.69202 8.47382 8.75258C8.44786 8.81315 8.43448 8.87836 8.43448 8.94425C8.43448 9.01014 8.44786 9.07535 8.47382 9.13591C8.49978 9.19648 8.53777 9.25114 8.58549 9.29658C8.63321 9.34202 8.68967 9.37729 8.75143 9.40025C8.81319 9.42321 8.87898 9.43339 8.94479 9.43017C9.06955 9.42405 9.18717 9.37019 9.2733 9.27973C9.35943 9.18927 9.40748 9.06915 9.40748 8.94425C9.40748 8.81935 9.35943 8.69923 9.2733 8.60877C9.18717 8.51831 9.06955 8.46445 8.94479 8.45833ZM5.05513 8.45833C4.98931 8.45511 4.92353 8.46528 4.86176 8.48825C4.8 8.51121 4.74355 8.54648 4.69583 8.59192C4.64811 8.63736 4.61011 8.69202 4.58415 8.75258C4.5582 8.81315 4.54481 8.87836 4.54481 8.94425C4.54481 9.01014 4.5582 9.07535 4.58415 9.13591C4.61011 9.19648 4.64811 9.25114 4.69583 9.29658C4.74355 9.34202 4.8 9.37729 4.86176 9.40025C4.92353 9.42321 4.98931 9.43339 5.05513 9.43017C5.17988 9.42405 5.2975 9.37019 5.38364 9.27973C5.46977 9.18927 5.51781 9.06915 5.51781 8.94425C5.51781 8.81935 5.46977 8.69923 5.38364 8.60877C5.2975 8.51831 5.17988 8.46445 5.05513 8.45833Z" fill="#FF7300"></path>
            </svg>`,
    },
    {
      name: "csv",
      icon: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.33923 5.23368H6.98257V4.06702H2.33923V5.23368ZM8.17723 5.23368H12.8206V4.06702H8.17723V5.23368ZM6.98257 7.58335H2.33923V6.41668H6.98257V7.58335ZM8.17723 7.58335H12.8206V6.41668H8.17723V7.58335ZM6.98257 9.93302H2.33923V8.76635H6.98257V9.93302ZM8.17723 9.93302H12.8206V8.76635H8.17723V9.93302Z" fill="#FF7300"></path>
            </svg>`,
    },
    {
      name: "parquet",
      icon: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.77938 7.59295L6.14055 6.64589L3.21702 8.20236L4.85585 9.14942L7.77938 7.59295ZM13.997 7.01648L12.3541 6.06942L5.67526 9.62295L7.31408 10.57L13.9929 7.01648H13.997ZM11.5347 5.59589L9.89997 4.64883L6.97644 6.2053L8.61526 7.15236L11.5388 5.59589H11.5347ZM7.44173 3.23236L9.08055 4.17942L4.48526 6.62118L2.85055 5.67413L7.44585 3.23236H7.44173ZM2.01055 6.11471L3.64938 7.06177L2.39761 7.72883L0.758789 6.78177L2.01055 6.11883V6.11471Z" fill="#FF7300"></path>
            </svg>`,
      highlight: true,
    },
    {
      name: "imagefolder",
      icon: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.78349 11.872C2.06699 12.1287 2.40649 12.257 2.80315 12.257H11.44C11.7538 12.2582 12.0397 12.1742 12.2975 12.0038C12.5478 11.8441 12.7357 11.6031 12.8295 11.3213L14.1292 7.37801C14.2622 6.96267 14.1875 6.57651 13.904 6.21951C13.6217 5.86367 13.2332 5.68517 12.7397 5.68517H5.61832C5.30565 5.68517 5.01982 5.77034 4.76199 5.94067C4.50299 6.10984 4.32449 6.33734 4.22882 6.62201L2.80315 10.9433V6.63834C2.80315 5.98151 3.07965 5.43901 3.63382 5.01201C4.18682 4.58501 4.83549 4.37034 5.58215 4.37034H12.8843C13.0734 4.37691 13.2575 4.30953 13.3977 4.18251C13.4643 4.1241 13.5175 4.05192 13.5536 3.97094C13.5896 3.88997 13.6077 3.80214 13.6065 3.71351C13.6081 3.62509 13.5904 3.53739 13.5545 3.45657C13.5186 3.37574 13.4655 3.30376 13.3988 3.24567C13.2581 3.11869 13.0738 3.05098 12.8843 3.05667H8.57815L7.54915 2.11984C7.41532 1.99787 7.25926 1.9028 7.08949 1.83984C6.91338 1.77409 6.7268 1.74088 6.53882 1.74184H2.80315C2.40649 1.74184 2.06699 1.87017 1.78349 2.12801C1.50115 2.38467 1.35999 2.69501 1.35999 3.05667V10.9433C1.35999 11.305 1.50115 11.6153 1.78349 11.872ZM5.29982 10.2737L6.07099 9.11867C6.10154 9.07271 6.14299 9.03501 6.19164 9.00894C6.24028 8.98286 6.29462 8.96922 6.34982 8.96922C6.40501 8.96922 6.45935 8.98286 6.508 9.00894C6.55665 9.03501 6.59809 9.07271 6.62865 9.11867L7.42665 10.3133C7.45907 10.3623 7.5038 10.4019 7.55636 10.4281C7.60892 10.4544 7.66745 10.4663 7.72608 10.4628C7.78471 10.4592 7.84138 10.4403 7.89039 10.4079C7.9394 10.3756 7.97904 10.3309 8.00532 10.2783L9.54298 7.20301C9.57072 7.14721 9.61348 7.10025 9.66645 7.06743C9.71942 7.03461 9.7805 7.01722 9.84282 7.01722C9.90513 7.01722 9.96621 7.03461 10.0192 7.06743C10.0722 7.10025 10.1149 7.14721 10.1427 7.20301L11.6943 10.3087C11.72 10.3597 11.7322 10.4164 11.7297 10.4735C11.7273 10.5305 11.7103 10.586 11.6804 10.6347C11.6504 10.6833 11.6086 10.7235 11.5587 10.7514C11.5089 10.7793 11.4528 10.7939 11.3957 10.794H5.57865C5.51788 10.7942 5.45821 10.7778 5.40604 10.7466C5.35387 10.7154 5.31117 10.6706 5.28251 10.6171C5.25386 10.5635 5.24033 10.5031 5.24338 10.4424C5.24643 10.3817 5.26594 10.3241 5.29982 10.2737Z" fill="#FF7300"></path>
            </svg>`,
    },
    {
      name: "soundfolder",
      icon: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M1.12589 11.872C1.40823 12.1287 1.74889 12.257 2.14556 12.257H10.7824C11.0962 12.2582 11.3821 12.1742 11.6399 12.0038C11.8902 11.8441 12.0781 11.6031 12.1719 11.3213L13.4716 7.37801C13.6046 6.96267 13.5299 6.57651 13.2464 6.21951C12.9641 5.86367 12.5756 5.68517 12.0821 5.68517H4.96073C4.64806 5.68517 4.36223 5.77034 4.10323 5.94067C3.84539 6.10984 3.66689 6.33734 3.57123 6.62201L2.14556 10.9433V6.63834C2.14556 5.98151 2.42206 5.43901 2.97506 5.01201C3.52923 4.58501 4.17906 4.37034 4.92339 4.37034H12.2267C12.4158 4.37691 12.5999 4.30953 12.7401 4.18251C12.8065 4.12394 12.8594 4.0517 12.8952 3.97075C12.9311 3.88979 12.949 3.80204 12.9477 3.71351C12.9495 3.62519 12.932 3.53754 12.8963 3.45672C12.8606 3.3759 12.8077 3.30387 12.7412 3.24567C12.6005 3.11869 12.4162 3.05098 12.2267 3.05667H7.92056L6.89156 2.11984C6.75775 1.99784 6.60168 1.90278 6.43189 1.83984C6.25579 1.77409 6.0692 1.74088 5.88123 1.74184H2.14556C1.74889 1.74184 1.40939 1.87017 1.12589 2.12801C0.843559 2.38467 0.702393 2.69501 0.702393 3.05667V10.9433C0.702393 11.305 0.843559 11.6153 1.12589 11.872ZM7.30806 6.68851C7.53789 6.68851 7.72573 6.87517 7.72573 7.10501V11.0553C7.72573 11.1661 7.68172 11.2723 7.60339 11.3507C7.52507 11.429 7.41883 11.473 7.30806 11.473C7.19729 11.473 7.09105 11.429 7.01272 11.3507C6.9344 11.2723 6.89039 11.1661 6.89039 11.0553V7.10501C6.89039 6.87517 7.07706 6.68851 7.30806 6.68851ZM5.77156 7.79334C6.00256 7.79334 6.18923 7.98001 6.18923 8.21101V9.95051C6.18923 10.0613 6.14522 10.1675 6.06689 10.2458C5.98857 10.3242 5.88233 10.3682 5.77156 10.3682C5.66079 10.3682 5.55455 10.3242 5.47622 10.2458C5.3979 10.1675 5.35389 10.0613 5.35389 9.95051V8.21101C5.35389 7.98001 5.54056 7.79334 5.77156 7.79334ZM9.26806 7.55184C9.26806 7.44107 9.22406 7.33483 9.14573 7.25651C9.0674 7.17818 8.96116 7.13417 8.85039 7.13417C8.73962 7.13417 8.63339 7.17818 8.55506 7.25651C8.47673 7.33483 8.43273 7.44107 8.43273 7.55184V10.6085C8.43273 10.7193 8.47673 10.8255 8.55506 10.9038C8.63339 10.9822 8.73962 11.0262 8.85039 11.0262C8.96116 11.0262 9.0674 10.9822 9.14573 10.9038C9.22406 10.8255 9.26806 10.7193 9.26806 10.6085V7.55184ZM10.3904 8.26351C10.6214 8.26351 10.8081 8.45017 10.8081 8.68001V9.48034C10.8081 9.59111 10.7641 9.69735 10.6857 9.77568C10.6074 9.854 10.5012 9.89801 10.3904 9.89801C10.2796 9.89801 10.1734 9.854 10.0951 9.77568C10.0167 9.69735 9.97273 9.59111 9.97273 9.48034V8.68001C9.97273 8.45017 10.1594 8.26351 10.3904 8.26351Z" fill="#FF7300"></path>
            </svg>`,
    },
    {
      name: "webdataset",
      icon: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.47055 4.24377C7.49618 4.24377 9.1368 3.7144 9.1368 3.05377V4.43627H7.69305C6.8618 4.43627 6.06555 4.7644 5.4793 5.35502L4.64805 6.1819C4.06044 6.76884 3.72997 7.56511 3.7293 8.39565V10.6925C2.6618 10.5 1.9093 10.15 1.80868 9.73002H1.79993V3.05815C1.79993 3.7144 3.44055 4.25252 5.47055 4.25252V4.24377Z" fill="black"></path>
              <path d="M5.47055 4.24375C7.49618 4.24375 9.14118 3.71438 9.14118 3.05375C9.14118 2.3975 7.49618 1.85938 5.47055 1.85938C3.44493 1.85938 1.79993 2.39312 1.79993 3.05375C1.79993 3.71 3.44493 4.24813 5.47055 4.24813V4.24375Z" fill="black"></path>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.36121 6.95626C5.01315 7.35457 4.82324 7.86669 4.82746 8.39563V11.2963C4.82746 12.0181 5.35246 12.6044 5.99996 12.6044H11.4031C12.055 12.6044 12.5843 12.0181 12.5843 11.2919V6.83813C12.5843 6.11626 12.055 5.52563 11.4031 5.52563H7.40871C7.16286 5.52896 6.92047 5.58406 6.69734 5.68733C6.47421 5.7906 6.27535 5.93974 6.11371 6.12501L5.36996 6.95626H5.36121Z" fill="#FF7300"></path>
            </svg>`,
    },
    {
      name: "text",
      icon: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7443 5.24998H3.07593V4.08331H11.7443V5.24998ZM11.7443 7.58331H3.07593V6.41665H11.7443V7.58331ZM3.07593 9.91665H8.49509V8.74998H3.07593V9.91665Z" fill="#FF7300"></path>
            </svg>`,
    },
    {
      name: "arrow",
      icon: `<svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="format-icon" style="width: 14px; height: 14px">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.14331 2.38L6.76331 7L2.14331 11.62V9.77667L4.91998 7L2.14331 4.22334V2.38ZM5.38664 2.38L9.99498 7L5.38664 11.62V9.77667L8.13998 7L5.38664 4.22334V2.38ZM13.2383 7L8.61831 2.38V4.22334L11.395 7L8.60664 9.77667V11.62L13.2383 7Z" fill="#FF7300"></path>
            </svg>`,
    },
  ];

  return (
    <section className="mb-10">
      <h2 className="mb-4 text-sm leading-5 text-gray-500">Format</h2>
      <div className="flex flex-wrap gap-1.5 max-sm:gap-1">
        {formats.map((format, index) => (
          <div key={index} className="flex">
            {format.highlight && (
              <div className="w-3 h-3 bg-amber-500 rounded-full" />
            )}
            <Tag name={format.name} icon={format.icon} color="orange-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormatSection;
