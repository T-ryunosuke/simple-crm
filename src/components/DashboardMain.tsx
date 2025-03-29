import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ダミーデータ
const customers = [
  {
    name: "山田八郎",
    furigana: "やまだはちろう",
    email: "taro.yamada@example.com",
    phone: "090-1234-5678",
    registeredAt: "1999年2月1日",
  },
  {
    name: "鈴木花子",
    furigana: "すずきはなこ",
    email: "taro.yamada@example.com",
    phone: "090-1234-5678",
    registeredAt: "2023-05-01",
  },
  {
    name: "田中一郎",
    furigana: "たなかいちろう",
    email: "hanako.suzuki@example.com",
    phone: "080-2345-6789",
    registeredAt: "2023-06-15",
  },
  {
    name: "山田一郎",
    furigana: "やまだいちろう",
    email: "ichiro.tanaka@example.com",
    phone: "070-3456-7890",
    registeredAt: "2022-10-25",
  },
  {
    name: "山田太郎",
    furigana: "やまだたろう",
    email: "ichiro.tanaka@example.com",
    phone: "070-3456-7890",
    registeredAt: "2022-8-25",
  },
];

const DashboardMain = () => {
  // 検索キーワード
  const [searchQuery, setSearchQuery] = useState<string>("");
  // 並び替え基準（デフォルト: 顧客名順）
  const [sortOrder, setSortOrder] = useState<"name" | "registeredAt">("name");

  // 1. 検索結果を取得
  const filteredCustomers = customers.filter((customer) =>
    customer.name.includes(searchQuery)
  );

  // 2. 検索結果を並び替え（降順）
  const sortedCustomers = filteredCustomers.sort((a, b) => {
    if (sortOrder === "name") {
      return a.furigana.localeCompare(b.furigana, "ja", { sensitivity: "base" });
    } else {
      return new Date(b.registeredAt).getTime() - new Date(a.registeredAt).getTime();
    }
  });

  return (
    <main className="flex-1 min-h-screen bg-gray-100 p-6 pt-20 sm:pl-64 overflow-y-auto">
      {/* 検索ボックス */}
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 rounded-md border border-gray-300"
          placeholder="顧客名で検索"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* 並び替えボタン */}
      <div className="mb-4">
        <button
          className="mr-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => setSortOrder("name")}
        >
          顧客名順
        </button>
        <button
          className="p-2 bg-blue-500 text-white rounded"
          onClick={() => setSortOrder("registeredAt")}
        >
          登録日順
        </button>
      </div>

      {/* 検索結果がない場合のメッセージ */}
      {sortedCustomers.length === 0 && (
        <p className="text-center text-gray-500">該当する顧客が見つかりませんでした。</p>
      )}

      {/* 顧客情報一覧 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {sortedCustomers.map((customer, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{customer.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-gray-700">
                <p><strong>メールアドレス:</strong> {customer.email}</p>
                <p><strong>電話番号:</strong> {customer.phone}</p>
                <p><strong>登録日:</strong> {customer.registeredAt}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default DashboardMain;
