

``mx.symbol.shuffle``
==========================================

Description
----------------------

Randomly shuffle the elements.

This shuffles the array along the first axis.
The order of the elements in each subarray does not change.
For example, if a 2D array is given, the order of the rows randomly changes,
but the order of the elements in each row does not change.

Usage
----------

.. code:: r

	mx.symbol.shuffle(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Data to be shuffled.                                       |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


