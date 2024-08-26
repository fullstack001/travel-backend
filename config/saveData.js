const xlsx = require("xlsx");
const path = require("path");
const fs = require("fs");

import Agency from "../models/Agency";
import Product from "../models/Product";
import Hotel from "../models/Hotel";
import Resa from "../models/Resa";

function convertExcelTimeToTimeString(excelTime) {
  // Excel time is a fraction of a day
  // Multiply by 24 to get hours, then split into hours and minutes
  const totalHours = excelTime * 24;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60) || 0;

  // Format hours and minutes to always show two digits
  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");

  // Determine AM/PM
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours12 = hours % 12 || 12;

  return `${formattedHours12}:${formattedMinutes} ${period}`;
}

const dateFormat = (num) => {
  if (!num || !Number(num)) return null;
  // Base date: January 1, 1900 (Excel uses this as the starting date)
  const baseDate = new Date(1900, 0, 1);

  // Add the number of days to the base date
  // Subtract 1 day because Excel starts counting from 1, not 0
  const resultDate = new Date(
    baseDate.getTime() + (Number(num) - 1) * 24 * 60 * 60 * 1000
  );

  // Set the comparison date to January 1, 2024
  const comparisonDate = new Date(2024, 0, 1);

  // Return null if the result date is earlier than January 1, 2024
  if (resultDate < comparisonDate) {
    return null;
  }

  return resultDate;
};

const saveData = async () => {
  // Specify the path to your Excel file
  const filePath = path.resolve("./main.xlsx");

  // Read the Excel file
  const workbook = xlsx.readFile(filePath);

  // Get the names of all sheets
  const sheetNames = workbook.SheetNames;

  // Initialize an object to hold all data
  const allData = {};

  // Loop through each sheet and extract data
  sheetNames.forEach((sheetName) => {
    if (sheetName == "resa") {
      const worksheet = workbook.Sheets[sheetName];
      const sheetData = xlsx.utils.sheet_to_json(worksheet, { header: 1 });
      const data = sheetData.filter((data) => data.length > 0);
      allData[sheetName] = data;
    }
  });

  //   if (allData.Agency && Array.isArray(allData.Agency)) {
  //     let agentArray = allData.Agency;
  //     agentArray.shift();
  //     for (const item of agentArray) {
  //       // Assuming your Excel sheet has the fields that match your Agency schema
  //       const name = item[1];
  //       let findAgency = await Agency.findOne({ name });
  //       if (findAgency) continue;

  //       const agencyData = {
  //         // Map your Excel columns to your Agency schema fields here
  //         name: item[1] || "",
  //         country: item[2] || "",
  //         tel: item[3] || "",
  //         name2: item[4] || "",
  //         email: item[5] || "",
  //         statut: item[6] || "",
  //         tax: item[7] || "",
  //         tax_regno: item[8] || "",
  //         vat_amt: item[9] || "",
  //         acc_code: item[10] || "",
  //         pay_term: item[11] || "",
  //         credit_term: item[12] || "",
  //         paymode: item[13] || "",
  //         reg_no: item[14] || "",
  //         paymode: item[15] || "",
  //         vat_type: item[16] || "",
  //         ppostal_addr: item[17] || "",
  //         ppostal_addr1: item[18] || "",
  //         ppostal_addr2: item[19] || "",
  //         ppostal_addr3: item[20] || "",
  //         ppostal_country: item[21] || "",
  //         billing_addr1: item[22] || "",
  //         billing_addr2: item[23] || "",
  //         billing_addr3: item[24] || "",
  //         ppostal_addr3: item[25] || "",
  //         ppostal_addr3: item[26] || "",
  //       };

  //       const agency = new Agency(agencyData);
  //       await agency.save(); // Save each item to the database
  //     }
  //   }

  if (allData.resa && Array.isArray(allData.resa)) {
    let resaArray = allData.resa;
    resaArray.shift();
    for (const item of resaArray) {
      if (!dateFormat(item[8]) && !dateFormat(item[9])) continue;
      const resaData = {
        // Map your Excel columns to your Resa schema fields here
        dossier_no: item[0] && Number(item[0]) ? Number(item[0]) : null,
        service_type: item[1] || "",
        arb_dep: item[2] || "",
        client: item[3] || "",
        agency: item[4] || "",
        from: item[5] || "",
        hotel: item[6] || "",
        htl_region: item[7] || "",
        service_date: dateFormat(item[8]),
        endofservice: dateFormat(item[9]),
        no_of_ngts: item[10] || "",
        adult: item[11] || "",
        child: item[12] || "",
        infant: item[13] || "",
        teen: item[14] || "",
        free: item[15] || "",
        flight_no: item[16] || "",
        flight_time: item[17] ? convertExcelTimeToTimeString(item[17]) : "",
        resa_remark: item[18] || "",
        service: item[19] || "",
        service_detail: item[20] || "",
        adult_price: item[21] || "",
        child_price: item[22] || "",
        teen_price: item[23] || "",
        total_price: item[24] || "",
        // discount: item[25] || "",
        net_price: item[25] || "",
        cash_credit: item[26] || "",
        cur: item[27] || "",
        roe: item[28] || "",
        invoce_on: item[29] || "",
        status: item[30] || "",
        effect_date: dateFormat(item[31]),
        inv_no: item[32] || "",
      };

      const resa = new Resa(resaData);
      await resa.save(); // Save each item to the database
    }
  }

  //   if (allData.Hotel && Array.isArray(allData.Hotel)) {
  //     let hotelArray = allData.Hotel;
  //     hotelArray.shift();
  //     for (const item of hotelArray) {
  //       // Assuming your Excel sheet has the fields that match your Hotel schema
  //       const name = item[1];
  //       let findHotel = await Hotel.findOne({ name });
  //       if (findHotel) continue;

  //       const hotelData = {
  //         // Map your Excel columns to your Hotel schema fields here
  //         name: item[1] || "",
  //         h_group: item[2] || "",
  //         h_addr: item[3] || "",
  //         h_region: item[4] || "",
  //         h_plan_region: item[5] || "",
  //         category_hotel: item[6] || "",
  //         price_rack: item[7] || "",
  //         cost_price: item[8] || "",
  //         selling_price2: item[9] || "",
  //         h_category: item[10] || "",
  //         h_general: item[11] || "",
  //         h_from: item[12] || "",
  //         h_to: item[13] || "",
  //         h_street: item[14] || "",
  //         h_town: item[15] || "",
  //         h_country: item[16] || "",
  //         fini: item[17] || "",
  //         active: item[18] || "",
  //         h_ishotel: item[19] || "",
  //         h_isweb: item[20] || "",
  //         h_image: item[21] || "",
  //         h_ext: item[22] || "",
  //         h_description: item[23] || "",
  //         h_check_in: item[24] || "",
  //         h_check_out: item[25] || "",
  //         h_late_check_out: item[26] || "",
  //         h_num_floors: item[27] || "",
  //         h_num_guest: item[28] || "",
  //         h_num_suite: item[29] || "",
  //         h_num_singlebedded: item[30] || "",
  //         h_internet_fee: item[31] || "",
  //         h_service_provider: item[32] || "",
  //         h_wireless_fee: item[33] || "",
  //         h_wireless_provider: item[34] || "",
  //         h_language: item[35] || "",
  //         h_pet: item[36] || "",
  //         h_currency: item[37] || "",
  //         h_facilities: item[38] || "",
  //       };

  //       const hotel = new Hotel(hotelData);
  //       await hotel.save(); // Save each item to the database
  //     }
  //   }

  //   if (allData.Product && Array.isArray(allData.Product)) {
  //     let productArray = allData.Product;
  //     productArray.shift();
  //     for (const item of productArray) {
  //       // Assuming your Excel sheet has the fields that match your Agency schema
  //       //   const name = item[0];
  //       //   let findProduct = await Product.findOne({ name });
  //       //   if (findProduct) continue;

  //       const productData = {
  //         // Map your Excel columns to your Agency schema fields here
  //         transfers: item[0] || "",
  //         ad_claim: item[2] || "",
  //         ch_claim: item[3] || "",
  //         cur: item[4] || "",
  //         item: item[5] || "",
  //       };

  //       const product = new Product(productData);
  //       await product.save(); // Save each item to the database
  //     }
  //   }

  // Specify the path to save the JSON file
  const outputFilePath = path.resolve("output.json");

  // Write the JSON data to a file
  fs.writeFileSync(outputFilePath, JSON.stringify(allData, null, 2), "utf-8");

  // Output all data
  console.log("success");
};

export default saveData;
