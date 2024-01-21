onNet('Screens/nui-template', (visible, data) => {
  SendNuiMessage(
    JSON.stringify({
      visible: visible,
      data: data,
    })
  );
});
