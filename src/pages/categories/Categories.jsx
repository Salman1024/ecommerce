import React from "react";
import useFetch from "../../hooks/useFetch";
import noImage from "../../../src/assets/noimage.jpg";
import ContentWrapper from "../../component/contentWrapper/ContentWrapper";

const Categories = () => {
  const { data, loading } = useFetch("products/categories");

  return (
    <>
      <div className="categories-container pt-3 mb-10">
        <ContentWrapper>
          <span className="font-semibold text-2xl flex items-center justify-center py-4">Shop by Category</span>
          {!loading ? (
            <div className="categories-section w-full flex  gap-4 mt-2">
              {data &&
                data.map((item, index) => (
                  <div
                    className="product-category flex flex-col items-center "
                    key={index}
                  >
                    <div className="product-image ">
                      <img
                        src={noImage}
                        alt="no-image"
                        className="w-[170px] h-[170px] rounded-full object-contain object-center"
                      />
                    </div>
                    <div className="product-name">
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="loading ">
              <p>loading...</p>
            </div>
          )}
        </ContentWrapper>
      </div>
    </>
  );
};

export default Categories;
