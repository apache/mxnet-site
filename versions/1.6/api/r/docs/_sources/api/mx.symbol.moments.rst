

``mx.symbol.moments``
==========================================

Description
----------------------

Calculate the mean and variance of `data`.

The mean and variance are calculated by aggregating the contents of data across axes.
If x is 1-D and axes = [0] this is just the mean and variance of a vector.

Example:

     x = [[1, 2, 3], [4, 5, 6]]
     mean, var = moments(data=x, axes=[0])
     mean = [2.5, 3.5, 4.5]
     var = [2.25, 2.25, 2.25]
     mean, var = moments(data=x, axes=[1])
     mean = [2.0, 5.0]
     var = [0.66666667, 0.66666667]
     mean, var = moments(data=x, axis=[0, 1])
     mean = [3.5]
     var = [2.9166667]




Usage
----------

.. code:: r

	mx.symbol.moments(...)

Arguments
------------------

+----------------------------------------+------------------------------------------------------------+
| Argument                               | Description                                                |
+========================================+============================================================+
| ``data``                               | NDArray-or-Symbol.                                         |
|                                        |                                                            |
|                                        | Input ndarray                                              |
+----------------------------------------+------------------------------------------------------------+
| ``axes``                               | Shape or None, optional, default=None.                     |
|                                        |                                                            |
|                                        | Array of ints. Axes along which to compute mean and        |
|                                        | variance.                                                  |
+----------------------------------------+------------------------------------------------------------+
| ``keepdims``                           | boolean, optional, default=0.                              |
|                                        |                                                            |
|                                        | produce moments with the same dimensionality as the input. |
+----------------------------------------+------------------------------------------------------------+
| ``name``                               | string, optional.                                          |
|                                        |                                                            |
|                                        | Name of the resulting symbol.                              |
+----------------------------------------+------------------------------------------------------------+

Value
----------

``out`` The result mx.symbol


Link to Source Code: http://github.com/apache/incubator-mxnet/blob/1.6.0/src/operator/nn/moments.cc#L54

