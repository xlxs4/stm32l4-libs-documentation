var stm32l4xx__hal__dcmi_8h =
[
    [ "DCMI_SyncUnmaskTypeDef", "stm32l4xx__hal__dcmi_8h.html#structDCMI__SyncUnmaskTypeDef", [
      [ "FrameEndUnmask", "stm32l4xx__hal__dcmi_8h.html#ae37d1f0dba48775860c82271f7ebe6f0", null ],
      [ "FrameStartUnmask", "stm32l4xx__hal__dcmi_8h.html#abba5db062eca033aecdf8f0851bdb49e", null ],
      [ "LineEndUnmask", "stm32l4xx__hal__dcmi_8h.html#a7ba998cf999bd90a8373e90f836de9e5", null ],
      [ "LineStartUnmask", "stm32l4xx__hal__dcmi_8h.html#a83b15c8419967b9808509525f33e9c7d", null ]
    ] ],
    [ "DCMI_InitTypeDef", "stm32l4xx__hal__dcmi_8h.html#structDCMI__InitTypeDef", [
      [ "ByteSelectMode", "stm32l4xx__hal__dcmi_8h.html#a45359b48ef8a7e075478d7611aca214a", null ],
      [ "ByteSelectStart", "stm32l4xx__hal__dcmi_8h.html#a035a82b7271540f0f35c9b7af5defa2f", null ],
      [ "CaptureRate", "stm32l4xx__hal__dcmi_8h.html#ac39664bd3ba5c33ad0a8e4bb187a5921", null ],
      [ "ExtendedDataMode", "stm32l4xx__hal__dcmi_8h.html#a4700006e19e61c41235c704ba4d235d8", null ],
      [ "HSPolarity", "stm32l4xx__hal__dcmi_8h.html#a84bb1d10b61cb196cfa135c0ace2e884", null ],
      [ "JPEGMode", "stm32l4xx__hal__dcmi_8h.html#a1ddb7b57b3f1bb2f014842ac902fd2fd", null ],
      [ "LineSelectMode", "stm32l4xx__hal__dcmi_8h.html#acf60b71339afbcc97228a8609f26c13f", null ],
      [ "LineSelectStart", "stm32l4xx__hal__dcmi_8h.html#a7b95cf5215cc2441a5096dce5afca8d3", null ],
      [ "PCKPolarity", "stm32l4xx__hal__dcmi_8h.html#a156a8c2fab132c4ccb2ed370f205ef69", null ],
      [ "SynchroCode", "stm32l4xx__hal__dcmi_8h.html#a8236b327cb01d1ab47aa2f0781c2e123", null ],
      [ "SynchroMode", "stm32l4xx__hal__dcmi_8h.html#abdedbb6e310ce796191c683f76c4ca2c", null ],
      [ "VSPolarity", "stm32l4xx__hal__dcmi_8h.html#ada3ba07825aba61567a6e0190d6505a4", null ]
    ] ],
    [ "__DCMI_HandleTypeDef", "struct____DCMI__HandleTypeDef.html", "struct____DCMI__HandleTypeDef" ],
    [ "DCMI_HandleTypeDef", "stm32l4xx__hal__dcmi_8h.html#a371eb8a1b3915065a339703fd3bcaf7d", null ],
    [ "pDCMI_CallbackTypeDef", "stm32l4xx__hal__dcmi_8h.html#a37843a03f0b2ca324853a606c1c30cd1", null ],
    [ "HAL_DCMI_CallbackIDTypeDef", "stm32l4xx__hal__dcmi_8h.html#a57ebf51c82c124283d08c19f04369fdc", [
      [ "HAL_DCMI_FRAME_EVENT_CB_ID", "stm32l4xx__hal__dcmi_8h.html#a57ebf51c82c124283d08c19f04369fdca59d9fc76ff9e67caff477728dacbc28e", null ],
      [ "HAL_DCMI_VSYNC_EVENT_CB_ID", "stm32l4xx__hal__dcmi_8h.html#a57ebf51c82c124283d08c19f04369fdcac61d6a28c9056413372683764dd4b73c", null ],
      [ "HAL_DCMI_LINE_EVENT_CB_ID", "stm32l4xx__hal__dcmi_8h.html#a57ebf51c82c124283d08c19f04369fdca167979ee75071cce81a492929e80137d", null ],
      [ "HAL_DCMI_ERROR_CB_ID", "stm32l4xx__hal__dcmi_8h.html#a57ebf51c82c124283d08c19f04369fdca632a839b1bc89f993094c089546bb9f5", null ],
      [ "HAL_DCMI_MSPINIT_CB_ID", "stm32l4xx__hal__dcmi_8h.html#a57ebf51c82c124283d08c19f04369fdcabefabe80607563381d4f077fcf9653fa", null ],
      [ "HAL_DCMI_MSPDEINIT_CB_ID", "stm32l4xx__hal__dcmi_8h.html#a57ebf51c82c124283d08c19f04369fdcaa63d777a99d3337270d6b50a7af901b0", null ]
    ] ],
    [ "HAL_DCMI_StateTypeDef", "stm32l4xx__hal__dcmi_8h.html#ad6cefe1fb862d769f711f2fccb305e4f", [
      [ "HAL_DCMI_STATE_RESET", "stm32l4xx__hal__dcmi_8h.html#ad6cefe1fb862d769f711f2fccb305e4fa09a847b80275217e4cfac28ff4f54540", null ],
      [ "HAL_DCMI_STATE_READY", "stm32l4xx__hal__dcmi_8h.html#ad6cefe1fb862d769f711f2fccb305e4fa13566a4f7201a3d35128b0ccf8b52fcb", null ],
      [ "HAL_DCMI_STATE_BUSY", "stm32l4xx__hal__dcmi_8h.html#ad6cefe1fb862d769f711f2fccb305e4fa74e539b102d90f05bdd8681aa92d9b1a", null ],
      [ "HAL_DCMI_STATE_TIMEOUT", "stm32l4xx__hal__dcmi_8h.html#ad6cefe1fb862d769f711f2fccb305e4fa97e9eb37511bd92aca6cd7dc59929204", null ],
      [ "HAL_DCMI_STATE_ERROR", "stm32l4xx__hal__dcmi_8h.html#ad6cefe1fb862d769f711f2fccb305e4fa74374596a7e1b5b9318cadbc7f585994", null ],
      [ "HAL_DCMI_STATE_SUSPENDED", "stm32l4xx__hal__dcmi_8h.html#ad6cefe1fb862d769f711f2fccb305e4fa55aa1c13dfe1fda4b907f8685b98cf04", null ]
    ] ],
    [ "HAL_DCMI_ConfigCrop", "group__DCMI__Exported__Functions__Group3.html#ga5c313400c408acd776625cf27539c000", null ],
    [ "HAL_DCMI_ConfigSyncUnmask", "group__DCMI__Exported__Functions__Group3.html#ga70acf949f48638aa14dfea84cdd3be4c", null ],
    [ "HAL_DCMI_DeInit", "group__DCMI__Exported__Functions__Group1.html#gaca65408ea89e7b9b069c2fe7c4e1d383", null ],
    [ "HAL_DCMI_DisableCrop", "group__DCMI__Exported__Functions__Group3.html#ga9428b3e8af13d156b0988d9332393c99", null ],
    [ "HAL_DCMI_EnableCrop", "group__DCMI__Exported__Functions__Group3.html#ga102bdb05bd8658451613d9559583e121", null ],
    [ "HAL_DCMI_ErrorCallback", "group__DCMI__Exported__Functions__Group2.html#gad6bc5814938fa96578b0e61dbaa8a518", null ],
    [ "HAL_DCMI_FrameEventCallback", "group__DCMI__Exported__Functions__Group2.html#gafd05b99a90e255299ce7fd834b5862b7", null ],
    [ "HAL_DCMI_GetError", "group__DCMI__Exported__Functions__Group4.html#ga1d6bf009006eedd7f937a0eff38ad508", null ],
    [ "HAL_DCMI_GetState", "group__DCMI__Exported__Functions__Group4.html#gad697180bc7236b9412f625ac0d944845", null ],
    [ "HAL_DCMI_Init", "group__DCMI__Exported__Functions__Group1.html#gadd8546f419720d1a05e44c0fb0e98cc8", null ],
    [ "HAL_DCMI_IRQHandler", "group__DCMI__Exported__Functions__Group2.html#ga1906365ca507689d2032fc323cf7d3bf", null ],
    [ "HAL_DCMI_LineEventCallback", "group__DCMI__Exported__Functions__Group2.html#ga6b9d1273b4bc8870608c1c3f688d94ef", null ],
    [ "HAL_DCMI_MspDeInit", "group__DCMI__Exported__Functions__Group1.html#ga5a56b403e94f677052d9dfb31fce339b", null ],
    [ "HAL_DCMI_MspInit", "group__DCMI__Exported__Functions__Group1.html#ga434bed5c396c061c1125755a71cb556b", null ],
    [ "HAL_DCMI_RegisterCallback", "group__DCMI__Exported__Functions__Group1.html#ga2a5647c8e679c85196b3012c5ba5729b", null ],
    [ "HAL_DCMI_Resume", "group__DCMI__Exported__Functions__Group2.html#gacf58ebb1c14fec3a639fcfc780b6fecb", null ],
    [ "HAL_DCMI_Start_DMA", "group__DCMI__Exported__Functions__Group2.html#ga8ddabc8f569f28818c489216a3c1e919", null ],
    [ "HAL_DCMI_Stop", "group__DCMI__Exported__Functions__Group2.html#ga75811ac9803909f3586cc1cdb8b16a46", null ],
    [ "HAL_DCMI_Suspend", "group__DCMI__Exported__Functions__Group2.html#gafe0c2a86f1f3b4a0c5a097f38a38cfb2", null ],
    [ "HAL_DCMI_UnRegisterCallback", "group__DCMI__Exported__Functions__Group1.html#ga918f876140060f32733b4c8bf5bf5081", null ],
    [ "HAL_DCMI_VsyncEventCallback", "group__DCMI__Exported__Functions__Group2.html#ga7aa9e224d8717bff4b08e2eff3cceaf9", null ],
    [ "C", "stm32l4xx__hal__dcmi_8h.html#aaa53ca0b650dfd85c4f59fa156f7a2cc", null ]
];