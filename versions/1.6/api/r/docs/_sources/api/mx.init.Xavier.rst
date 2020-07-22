

``mx.init.Xavier``
====================================

Description
----------------------

Xavier initializer.  

Create a initializer which initialize weight with Xavier or
similar initialization scheme.

Usage
----------

.. code:: r

	mx.init.Xavier(rnd_type = "uniform", factor_type = "avg", magnitude = 3)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``rnd_type``                           | A string of ``character`` indicating the type of           |
|                                        | distribution from which the weights are initialized.       |
+----------------------------------------+------------------------------------------------------------+
| ``factor_type``                        | A string of ``character``.                                 |
+----------------------------------------+------------------------------------------------------------+
| ``magnitude``                          | A ``numeric`` number indicating the scale of random        |
|                                        | number range.                                              |
+----------------------------------------+------------------------------------------------------------+



