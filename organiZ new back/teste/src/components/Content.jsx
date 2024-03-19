import { Home } from '../pages/Home';
import React from 'react';
import Login from '../components/News/Login';
import Form from '../components/News/Form';
import Mensal from '../components/News/Mensal';
import Anual from '../components/News/Anual';
import Calendar from '../components/Calendar/Calendar';
import Reminder from '../components/News/Reminder';
import Notes from '../components/Anotações/Notes';
import Check from '../components/CheckList/Check';
import UpCheck from '../components/Alterar/UpCheck';
import UpCad from '../components/Alterar/UpCad';
import { Routes, Route } from 'react-router-dom';

const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/gratuito" element={<Form />} />
            <Route path="/mensal" element={<Mensal />} />
            <Route path="/anual" element={<Anual />} />
            <Route path="/entrar" element={<Calendar />} />
            <Route path= "/glogin" element = {<Login />} />
            <Route path= "/mlogin" element = {<Login />} />
            <Route path= "/alogin" element = {<Login />} />

            <Route path = "/todol" element = {<Reminder />} />
            <Route path = "/checkl" element = {<Check />} />
            <Route path = "/notes" element = {<Notes />} />

            <Route path = "/alterarc" element = {<UpCheck />} />
            <Route path = "/alterarcad" element = {<UpCad />} />
        </Routes>
    </main>
);

export default Content;