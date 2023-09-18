const apiRequest = async (url = "", optionsObj = null, errmsg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw Error("reload the app");
  } catch (err) {
    errmsg = err.Message;
  } finally {
    return errmsg;
  }
};

export default apiRequest;
