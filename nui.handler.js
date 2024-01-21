RegisterRawNuiCallback('win', async (data) => {
  emit('Screens/nui-template', false, {
    team: null,
  });

  const src = GetPlayerServerId(GetPlayerIndex());

  if (!src) {
    throw new Error('SOURCE_NOT_FOUND');
  }
});

RegisterRawNuiCallback('lose', async (data) => {});
